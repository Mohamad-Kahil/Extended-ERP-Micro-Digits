-- Function to create a journal entry with line items in a transaction
CREATE OR REPLACE FUNCTION create_journal_entry(
  p_entry_number VARCHAR,
  p_date DATE,
  p_description TEXT,
  p_reference VARCHAR,
  p_amount DECIMAL,
  p_entity_id UUID,
  p_status VARCHAR,
  p_created_by UUID,
  p_line_items JSONB
) RETURNS UUID AS $$
DECLARE
  v_journal_entry_id UUID;
  v_line_item JSONB;
BEGIN
  -- Insert the journal entry
  INSERT INTO journal_entries (
    entry_number,
    date,
    description,
    reference,
    amount,
    entity_id,
    status,
    created_by
  ) VALUES (
    p_entry_number,
    p_date,
    p_description,
    p_reference,
    p_amount,
    p_entity_id,
    p_status,
    p_created_by
  ) RETURNING id INTO v_journal_entry_id;
  
  -- Insert the line items
  FOR v_line_item IN SELECT * FROM jsonb_array_elements(p_line_items)
  LOOP
    INSERT INTO journal_entry_items (
      journal_entry_id,
      account_id,
      description,
      debit,
      credit
    ) VALUES (
      v_journal_entry_id,
      (v_line_item->>'account_id')::UUID,
      v_line_item->>'description',
      (v_line_item->>'debit')::DECIMAL,
      (v_line_item->>'credit')::DECIMAL
    );
  END LOOP;
  
  -- If status is 'posted', update account balances
  IF p_status = 'posted' THEN
    PERFORM post_journal_entry(v_journal_entry_id);
  END IF;
  
  RETURN v_journal_entry_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update a journal entry with line items in a transaction
CREATE OR REPLACE FUNCTION update_journal_entry(
  p_id UUID,
  p_date DATE,
  p_description TEXT,
  p_reference VARCHAR,
  p_entity_id UUID,
  p_line_items JSONB
) RETURNS UUID AS $$
DECLARE
  v_status VARCHAR;
  v_line_item JSONB;
  v_line_item_id UUID;
BEGIN
  -- Get the current status
  SELECT status INTO v_status FROM journal_entries WHERE id = p_id;
  
  -- Only allow updates to draft entries
  IF v_status != 'draft' THEN
    RAISE EXCEPTION 'Only draft journal entries can be updated';
  END IF;
  
  -- Update the journal entry
  UPDATE journal_entries SET
    date = p_date,
    description = p_description,
    reference = p_reference,
    entity_id = p_entity_id,
    updated_at = NOW()
  WHERE id = p_id;
  
  -- Delete existing line items
  DELETE FROM journal_entry_items WHERE journal_entry_id = p_id;
  
  -- Insert the new line items
  FOR v_line_item IN SELECT * FROM jsonb_array_elements(p_line_items)
  LOOP
    INSERT INTO journal_entry_items (
      journal_entry_id,
      account_id,
      description,
      debit,
      credit
    ) VALUES (
      p_id,
      (v_line_item->>'account_id')::UUID,
      v_line_item->>'description',
      (v_line_item->>'debit')::DECIMAL,
      (v_line_item->>'credit')::DECIMAL
    );
  END LOOP;
  
  -- Update the total amount
  UPDATE journal_entries SET
    amount = (SELECT COALESCE(SUM(debit), 0) FROM journal_entry_items WHERE journal_entry_id = p_id)
  WHERE id = p_id;
  
  RETURN p_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to post a journal entry
CREATE OR REPLACE FUNCTION post_journal_entry(p_id UUID) RETURNS BOOLEAN AS $$
DECLARE
  v_status VARCHAR;
  v_line_item RECORD;
  v_total_debits DECIMAL;
  v_total_credits DECIMAL;
BEGIN
  -- Get the current status
  SELECT status INTO v_status FROM journal_entries WHERE id = p_id;
  
  -- Only allow posting of draft entries
  IF v_status != 'draft' THEN
    RAISE EXCEPTION 'Only draft journal entries can be posted';
  END IF;
  
  -- Check if debits equal credits
  SELECT 
    COALESCE(SUM(debit), 0) as total_debits,
    COALESCE(SUM(credit), 0) as total_credits
  INTO v_total_debits, v_total_credits
  FROM journal_entry_items 
  WHERE journal_entry_id = p_id;
  
  IF v_total_debits != v_total_credits THEN
    RAISE EXCEPTION 'Debits must equal credits';
  END IF;
  
  -- Update account balances
  FOR v_line_item IN 
    SELECT jei.*, a.account_type 
    FROM journal_entry_items jei
    JOIN accounts a ON jei.account_id = a.id
    WHERE jei.journal_entry_id = p_id
  LOOP
    -- Update the account balance based on account type and debit/credit
    IF v_line_item.debit IS NOT NULL THEN
      -- For asset and expense accounts, debits increase the balance
      IF v_line_item.account_type IN ('asset', 'expense') THEN
        UPDATE accounts SET balance = balance + v_line_item.debit WHERE id = v_line_item.account_id;
      -- For liability, equity, and revenue accounts, debits decrease the balance
      ELSE
        UPDATE accounts SET balance = balance - v_line_item.debit WHERE id = v_line_item.account_id;
      END IF;
    ELSE
      -- For asset and expense accounts, credits decrease the balance
      IF v_line_item.account_type IN ('asset', 'expense') THEN
        UPDATE accounts SET balance = balance - v_line_item.credit WHERE id = v_line_item.account_id;
      -- For liability, equity, and revenue accounts, credits increase the balance
      ELSE
        UPDATE accounts SET balance = balance + v_line_item.credit WHERE id = v_line_item.account_id;
      END IF;
    END IF;
  END LOOP;
  
  -- Update the journal entry status to posted
  UPDATE journal_entries SET
    status = 'posted',
    posted_at = NOW(),
    posted_by = auth.uid(),
    updated_at = NOW()
  WHERE id = p_id;
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to approve a journal entry
CREATE OR REPLACE FUNCTION approve_journal_entry(p_id UUID, p_notes TEXT) RETURNS BOOLEAN AS $$
DECLARE
  v_status VARCHAR;
BEGIN
  -- Get the current status
  SELECT status INTO v_status FROM journal_entries WHERE id = p_id;
  
  -- Only allow approval of posted entries
  IF v_status != 'posted' THEN
    RAISE EXCEPTION 'Only posted journal entries can be approved';
  END IF;
  
  -- Update the journal entry status to approved
  UPDATE journal_entries SET
    status = 'approved',
    approved_at = NOW(),
    approved_by = auth.uid(),
    notes = p_notes,
    updated_at = NOW()
  WHERE id = p_id;
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to reject a journal entry
CREATE OR REPLACE FUNCTION reject_journal_entry(p_id UUID, p_notes TEXT) RETURNS BOOLEAN AS $$
DECLARE
  v_status VARCHAR;
  v_line_item RECORD;
BEGIN
  -- Get the current status
  SELECT status INTO v_status FROM journal_entries WHERE id = p_id;
  
  -- Only allow rejection of posted entries
  IF v_status != 'posted' THEN
    RAISE EXCEPTION 'Only posted journal entries can be rejected';
  END IF;
  
  -- Reverse the account balance updates
  FOR v_line_item IN 
    SELECT jei.*, a.account_type 
    FROM journal_entry_items jei
    JOIN accounts a ON jei.account_id = a.id
    WHERE jei.journal_entry_id = p_id
  LOOP
    -- Reverse the account balance based on account type and debit/credit
    IF v_line_item.debit IS NOT NULL THEN
      -- For asset and expense accounts, debits increase the balance, so we decrease
      IF v_line_item.account_type IN ('asset', 'expense') THEN
        UPDATE accounts SET balance = balance - v_line_item.debit WHERE id = v_line_item.account_id;
      -- For liability, equity, and revenue accounts, debits decrease the balance, so we increase
      ELSE
        UPDATE accounts SET balance = balance + v_line_item.debit WHERE id = v_line_item.account_id;
      END IF;
    ELSE
      -- For asset and expense accounts, credits decrease the balance, so we increase
      IF v_line_item.account_type IN ('asset', 'expense') THEN
        UPDATE accounts SET balance = balance + v_line_item.credit WHERE id = v_line_item.account_id;
      -- For liability, equity, and revenue accounts, credits increase the balance, so we decrease
      ELSE
        UPDATE accounts SET balance = balance - v_line_item.credit WHERE id = v_line_item.account_id;
      END IF;
    END IF;
  END LOOP;
  
  -- Update the journal entry status to rejected
  UPDATE journal_entries SET
    status = 'rejected',
    rejected_at = NOW(),
    rejected_by = auth.uid(),
    notes = p_notes,
    updated_at = NOW()
  WHERE id = p_id;
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to recalculate account levels
CREATE OR REPLACE FUNCTION recalculate_account_levels() RETURNS VOID AS $$
DECLARE
  v_account RECORD;
  v_level INTEGER;
  v_parent_id UUID;
  v_max_iterations INTEGER := 10; -- Prevent infinite loops
  v_iteration INTEGER := 0;
BEGIN
  -- First, set all top-level accounts (no parent) to level 0
  UPDATE accounts SET level = 0 WHERE parent_account_id IS NULL;
  
  -- Then, iteratively set the levels for child accounts
  WHILE v_iteration < v_max_iterations LOOP
    v_iteration := v_iteration + 1;
    
    -- Check if there are any accounts with unset levels that have parents with set levels
    PERFORM 1 FROM accounts a
    JOIN accounts p ON a.parent_account_id = p.id
    WHERE p.level IS NOT NULL;
    
    -- If no more accounts to update, exit the loop
    IF NOT FOUND THEN
      EXIT;
    END IF;
    
    -- Update the levels for accounts whose parents have levels set
    UPDATE accounts a
    SET level = p.level + 1
    FROM accounts p
    WHERE a.parent_account_id = p.id
    AND p.level IS NOT NULL;
  END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update account level when parent_account_id changes
CREATE OR REPLACE FUNCTION update_account_level() RETURNS TRIGGER AS $$
BEGIN
  -- If parent_account_id is NULL, set level to 0
  IF NEW.parent_account_id IS NULL THEN
    NEW.level := 0;
  ELSE
    -- Otherwise, set level to parent's level + 1
    SELECT level + 1 INTO NEW.level FROM accounts WHERE id = NEW.parent_account_id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER account_level_trigger
BEFORE INSERT OR UPDATE OF parent_account_id ON accounts
FOR EACH ROW
EXECUTE FUNCTION update_account_level();
