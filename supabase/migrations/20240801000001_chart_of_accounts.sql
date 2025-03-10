-- Create chart of accounts table
CREATE TABLE IF NOT EXISTS accounts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  account_number VARCHAR(50) NOT NULL,
  account_name VARCHAR(255) NOT NULL,
  account_type VARCHAR(50) NOT NULL CHECK (account_type IN ('asset', 'liability', 'equity', 'revenue', 'expense')),
  entity_id UUID NOT NULL,
  parent_account_id UUID REFERENCES accounts(id),
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  reporting_category VARCHAR(100),
  tax_code VARCHAR(50),
  balance DECIMAL(15, 2) DEFAULT 0,
  level INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(account_number, entity_id)
);

-- Create journal entries table
CREATE TABLE IF NOT EXISTS journal_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entry_number VARCHAR(50) NOT NULL,
  date DATE NOT NULL,
  description TEXT NOT NULL,
  reference VARCHAR(100),
  amount DECIMAL(15, 2) NOT NULL,
  entity_id UUID NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('draft', 'posted', 'approved', 'rejected')),
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  posted_at TIMESTAMP WITH TIME ZONE,
  posted_by UUID REFERENCES auth.users(id),
  approved_at TIMESTAMP WITH TIME ZONE,
  approved_by UUID REFERENCES auth.users(id),
  rejected_at TIMESTAMP WITH TIME ZONE,
  rejected_by UUID REFERENCES auth.users(id),
  notes TEXT
);

-- Create journal entry line items table
CREATE TABLE IF NOT EXISTS journal_entry_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  journal_entry_id UUID NOT NULL REFERENCES journal_entries(id) ON DELETE CASCADE,
  account_id UUID NOT NULL REFERENCES accounts(id),
  description TEXT,
  debit DECIMAL(15, 2),
  credit DECIMAL(15, 2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CHECK ((debit IS NULL AND credit IS NOT NULL) OR (debit IS NOT NULL AND credit IS NULL))
);

-- Add foreign key constraints after tables are created
ALTER TABLE accounts ADD CONSTRAINT fk_accounts_entity
  FOREIGN KEY (entity_id) REFERENCES entities(id);

ALTER TABLE journal_entries ADD CONSTRAINT fk_journal_entries_entity
  FOREIGN KEY (entity_id) REFERENCES entities(id);

-- Enable row level security
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entry_items ENABLE ROW LEVEL SECURITY;

-- Create policies for accounts
DROP POLICY IF EXISTS "Users can view accounts they have access to" ON accounts;
CREATE POLICY "Users can view accounts they have access to"
  ON accounts FOR SELECT
  USING (entity_id IN (
    SELECT entity_id FROM user_entity_access WHERE user_id = auth.uid()
  ));

DROP POLICY IF EXISTS "Users can insert accounts for entities they have access to" ON accounts;
CREATE POLICY "Users can insert accounts for entities they have access to"
  ON accounts FOR INSERT
  WITH CHECK (entity_id IN (
    SELECT entity_id FROM user_entity_access WHERE user_id = auth.uid() AND can_write = TRUE
  ));

DROP POLICY IF EXISTS "Users can update accounts for entities they have access to" ON accounts;
CREATE POLICY "Users can update accounts for entities they have access to"
  ON accounts FOR UPDATE
  USING (entity_id IN (
    SELECT entity_id FROM user_entity_access WHERE user_id = auth.uid() AND can_write = TRUE
  ));

DROP POLICY IF EXISTS "Users can delete accounts for entities they have access to" ON accounts;
CREATE POLICY "Users can delete accounts for entities they have access to"
  ON accounts FOR DELETE
  USING (entity_id IN (
    SELECT entity_id FROM user_entity_access WHERE user_id = auth.uid() AND can_write = TRUE
  ));

-- Create policies for journal entries
DROP POLICY IF EXISTS "Users can view journal entries they have access to" ON journal_entries;
CREATE POLICY "Users can view journal entries they have access to"
  ON journal_entries FOR SELECT
  USING (entity_id IN (
    SELECT entity_id FROM user_entity_access WHERE user_id = auth.uid()
  ));

DROP POLICY IF EXISTS "Users can insert journal entries for entities they have access to" ON journal_entries;
CREATE POLICY "Users can insert journal entries for entities they have access to"
  ON journal_entries FOR INSERT
  WITH CHECK (entity_id IN (
    SELECT entity_id FROM user_entity_access WHERE user_id = auth.uid() AND can_write = TRUE
  ));

DROP POLICY IF EXISTS "Users can update journal entries for entities they have access to" ON journal_entries;
CREATE POLICY "Users can update journal entries for entities they have access to"
  ON journal_entries FOR UPDATE
  USING (entity_id IN (
    SELECT entity_id FROM user_entity_access WHERE user_id = auth.uid() AND can_write = TRUE
  ));

DROP POLICY IF EXISTS "Users can delete journal entries for entities they have access to" ON journal_entries;
CREATE POLICY "Users can delete journal entries for entities they have access to"
  ON journal_entries FOR DELETE
  USING (entity_id IN (
    SELECT entity_id FROM user_entity_access WHERE user_id = auth.uid() AND can_write = TRUE
  ));

-- Create policies for journal entry items
DROP POLICY IF EXISTS "Users can view journal entry items they have access to" ON journal_entry_items;
CREATE POLICY "Users can view journal entry items they have access to"
  ON journal_entry_items FOR SELECT
  USING (journal_entry_id IN (
    SELECT id FROM journal_entries WHERE entity_id IN (
      SELECT entity_id FROM user_entity_access WHERE user_id = auth.uid()
    )
  ));

DROP POLICY IF EXISTS "Users can insert journal entry items for entries they have access to" ON journal_entry_items;
CREATE POLICY "Users can insert journal entry items for entries they have access to"
  ON journal_entry_items FOR INSERT
  WITH CHECK (journal_entry_id IN (
    SELECT id FROM journal_entries WHERE entity_id IN (
      SELECT entity_id FROM user_entity_access WHERE user_id = auth.uid() AND can_write = TRUE
    )
  ));

DROP POLICY IF EXISTS "Users can update journal entry items for entries they have access to" ON journal_entry_items;
CREATE POLICY "Users can update journal entry items for entries they have access to"
  ON journal_entry_items FOR UPDATE
  USING (journal_entry_id IN (
    SELECT id FROM journal_entries WHERE entity_id IN (
      SELECT entity_id FROM user_entity_access WHERE user_id = auth.uid() AND can_write = TRUE
    )
  ));

DROP POLICY IF EXISTS "Users can delete journal entry items for entries they have access to" ON journal_entry_items;
CREATE POLICY "Users can delete journal entry items for entries they have access to"
  ON journal_entry_items FOR DELETE
  USING (journal_entry_id IN (
    SELECT id FROM journal_entries WHERE entity_id IN (
      SELECT entity_id FROM user_entity_access WHERE user_id = auth.uid() AND can_write = TRUE
    )
  ));
