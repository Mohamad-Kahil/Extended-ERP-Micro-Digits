import { supabase } from "@/lib/supabase";
import { Account } from "@/modules/Accounting/components/ChartOfAccounts/AccountList";
import { JournalEntry } from "@/modules/Accounting/components/GeneralLedger/JournalEntryList";

// Companies API
export const companiesApi = {
  getAll: async () => {
    const { data, error } = await supabase.from("companies").select("*");
    if (error) throw error;
    return data;
  },
  getById: async (id: string) => {
    const { data, error } = await supabase
      .from("companies")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },
  create: async (company: any) => {
    const { data, error } = await supabase
      .from("companies")
      .insert(company)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
  update: async (id: string, company: any) => {
    const { data, error } = await supabase
      .from("companies")
      .update(company)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
  delete: async (id: string) => {
    const { error } = await supabase.from("companies").delete().eq("id", id);
    if (error) throw error;
    return true;
  },
};

// Entities API
export const intercompanyTransactionsApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from("intercompany_transactions")
      .select("*");
    if (error) throw error;
    return data;
  },
  getById: async (id: string) => {
    const { data, error } = await supabase
      .from("intercompany_transactions")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },
  create: async (transaction: any) => {
    const { data, error } = await supabase
      .from("intercompany_transactions")
      .insert(transaction)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
  update: async (id: string, transaction: any) => {
    const { data, error } = await supabase
      .from("intercompany_transactions")
      .update(transaction)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
  delete: async (id: string) => {
    const { error } = await supabase
      .from("intercompany_transactions")
      .delete()
      .eq("id", id);
    if (error) throw error;
    return true;
  },
};

export const intercompanyEntitiesApi = {
  getAll: async () => {
    const { data, error } = await supabase.from("entities").select("*");
    if (error) throw error;
    return data;
  },
  getById: async (id: string) => {
    const { data, error } = await supabase
      .from("entities")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },
  create: async (entity: any) => {
    const { data, error } = await supabase
      .from("entities")
      .insert(entity)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
  update: async (id: string, entity: any) => {
    const { data, error } = await supabase
      .from("entities")
      .update(entity)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
  delete: async (id: string) => {
    const { error } = await supabase.from("entities").delete().eq("id", id);
    if (error) throw error;
    return true;
  },
};

// Chart of Accounts API
export const fetchAccounts = async (entityId?: string) => {
  let query = supabase.from("chart_of_accounts").select("*");

  if (entityId && entityId !== "all") {
    query = query.eq("company_id", entityId);
  }

  const { data, error } = await query.order("account_code");

  if (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }

  // Convert flat structure to hierarchical
  return buildAccountHierarchy(data || []);
};

export const createAccount = async (
  account: Omit<Account, "id" | "balance" | "level" | "children"> & {
    parentAccountId?: string | null;
  },
) => {
  const { data, error } = await supabase
    .from("chart_of_accounts")
    .insert({
      account_code: account.accountNumber,
      account_name: account.accountName,
      account_type: account.accountType,
      company_id: account.entityId,
      parent_id: account.parentAccountId,
      description: account.description,
      is_active: account.isActive,
      reporting_category: account.reportingCategory,
      tax_code: account.taxCode,
      balance: 0,
      account_level: account.parentAccountId ? 1 : 0, // This will be recalculated properly on the server
    })
    .select()
    .single();

  if (error) {
    console.error("Error creating account:", error);
    throw error;
  }

  return data;
};

export const updateAccount = async (
  id: string,
  account: Partial<
    Omit<Account, "id" | "balance" | "level" | "children"> & {
      parentAccountId?: string | null;
    }
  >,
) => {
  const { data, error } = await supabase
    .from("chart_of_accounts")
    .update({
      account_code: account.accountNumber,
      account_name: account.accountName,
      account_type: account.accountType,
      company_id: account.entityId,
      parent_id: account.parentAccountId,
      description: account.description,
      is_active: account.isActive,
      reporting_category: account.reportingCategory,
      tax_code: account.taxCode,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating account:", error);
    throw error;
  }

  return data;
};

export const deleteAccount = async (id: string) => {
  const { error } = await supabase
    .from("chart_of_accounts")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting account:", error);
    throw error;
  }

  return true;
};

export const getAccountById = async (id: string) => {
  const { data, error } = await supabase
    .from("chart_of_accounts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching account:", error);
    throw error;
  }

  return data;
};

// Journal Entries API
export const fetchJournalEntries = async (entityId?: string) => {
  let query = supabase.from("journal_entries").select(`
    *,
    journal_entry_items:journal_entry_lines(*, account:chart_of_accounts(*))
  `);

  if (entityId && entityId !== "all") {
    query = query.eq("entity_id", entityId);
  }

  const { data, error } = await query.order("date", { ascending: false });

  if (error) {
    console.error("Error fetching journal entries:", error);
    throw error;
  }

  return data;
};

export const createJournalEntry = async (
  entry: Omit<JournalEntry, "id" | "createdAt">,
) => {
  // Insert the journal entry directly
  const { data: journalEntry, error: journalError } = await supabase
    .from("journal_entries")
    .insert({
      entry_number: entry.entryNumber,
      date: entry.date,
      description: entry.description,
      reference: entry.reference || null,
      amount: entry.amount,
      entity_id: entry.entityId,
      status: entry.status,
    })
    .select()
    .single();

  if (journalError) {
    console.error("Error creating journal entry:", journalError);
    throw journalError;
  }

  // Insert the line items
  if (journalEntry) {
    const lineItems = entry.lineItems.map((item) => ({
      journal_entry_id: journalEntry.id,
      account_id: item.accountId,
      description: item.description || null,
      debit: item.debit || null,
      credit: item.credit || null,
    }));

    const { error: itemsError } = await supabase
      .from("journal_entry_lines")
      .insert(lineItems);

    if (itemsError) {
      console.error("Error creating journal entry items:", itemsError);
      throw itemsError;
    }
  }

  return journalEntry;
};

export const updateJournalEntry = async (
  id: string,
  entry: Partial<Omit<JournalEntry, "id" | "createdAt">>,
) => {
  // Update the journal entry
  const { data, error: journalError } = await supabase
    .from("journal_entries")
    .update({
      date: entry.date,
      description: entry.description,
      reference: entry.reference || null,
      entity_id: entry.entityId,
      amount: entry.amount,
    })
    .eq("id", id)
    .select()
    .single();

  if (journalError) {
    console.error("Error updating journal entry:", journalError);
    throw journalError;
  }

  // Update line items if provided
  if (entry.lineItems && entry.lineItems.length > 0) {
    // First delete existing line items
    const { error: deleteError } = await supabase
      .from("journal_entry_lines")
      .delete()
      .eq("journal_entry_id", id);

    if (deleteError) {
      console.error("Error deleting journal entry items:", deleteError);
      throw deleteError;
    }

    // Then insert new line items
    const lineItems = entry.lineItems.map((item) => ({
      journal_entry_id: id,
      account_id: item.accountId,
      description: item.description || null,
      debit: item.debit || null,
      credit: item.credit || null,
    }));

    const { error: insertError } = await supabase
      .from("journal_entry_lines")
      .insert(lineItems);

    if (insertError) {
      console.error("Error inserting journal entry items:", insertError);
      throw insertError;
    }
  }

  return data;
};

export const deleteJournalEntry = async (id: string) => {
  const { error } = await supabase
    .from("journal_entries")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting journal entry:", error);
    throw error;
  }

  return true;
};

export const getJournalEntryById = async (id: string) => {
  const { data, error } = await supabase
    .from("journal_entries")
    .select(
      `
    *,
    journal_entry_items:journal_entry_lines(*, account:chart_of_accounts(*))
  `,
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching journal entry:", error);
    throw error;
  }

  return data;
};

export const postJournalEntry = async (id: string) => {
  const { data, error } = await supabase
    .from("journal_entries")
    .update({ status: "posted" })
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error posting journal entry:", error);
    throw error;
  }

  return data;
};

export const approveJournalEntry = async (id: string, notes?: string) => {
  const { data, error } = await supabase
    .from("journal_entries")
    .update({
      status: "approved",
      notes: notes || null,
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error approving journal entry:", error);
    throw error;
  }

  return data;
};

export const rejectJournalEntry = async (id: string, notes?: string) => {
  const { data, error } = await supabase
    .from("journal_entries")
    .update({
      status: "rejected",
      notes: notes || null,
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error rejecting journal entry:", error);
    throw error;
  }

  return data;
};

// Helper function to build account hierarchy
function buildAccountHierarchy(accounts: any[]): Account[] {
  const accountMap = new Map();
  const rootAccounts: Account[] = [];

  // First pass: Create all account objects and store in map
  accounts.forEach((account) => {
    accountMap.set(account.id, {
      id: account.id,
      accountNumber: account.account_code,
      accountName: account.account_name,
      accountType: account.account_type,
      entityId: account.company_id,
      parentAccountId: account.parent_id,
      description: account.description,
      isActive: account.is_active,
      reportingCategory: account.reporting_category,
      taxCode: account.tax_code,
      balance: parseFloat(account.balance) || 0,
      level: account.account_level || 0,
      children: [],
    });
  });

  // Second pass: Build the hierarchy
  accounts.forEach((account) => {
    const accountObj = accountMap.get(account.id);
    if (account.parent_id && accountMap.has(account.parent_id)) {
      const parent = accountMap.get(account.parent_id);
      parent.children.push(accountObj);
      // Update level based on parent
      accountObj.level = parent.level + 1;
    } else {
      rootAccounts.push(accountObj);
    }
  });

  return rootAccounts;
}
