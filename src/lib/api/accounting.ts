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
  let query = supabase.from("accounts").select("*");

  if (entityId && entityId !== "all") {
    query = query.eq("entity_id", entityId);
  }

  const { data, error } = await query.order("account_number");

  if (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }

  // Convert flat structure to hierarchical
  return buildAccountHierarchy(data || []);
};

export const createAccount = async (
  account: Omit<Account, "id" | "balance" | "level" | "children">,
) => {
  const { data, error } = await supabase
    .from("accounts")
    .insert({
      account_number: account.accountNumber,
      account_name: account.accountName,
      account_type: account.accountType,
      entity_id: account.entityId,
      parent_account_id: account.parentAccountId,
      description: account.description,
      is_active: account.isActive,
      reporting_category: account.reportingCategory,
      tax_code: account.taxCode,
      balance: 0,
      level: account.parentAccountId ? 1 : 0, // This will be recalculated properly on the server
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
  account: Partial<Omit<Account, "id" | "balance" | "level" | "children">>,
) => {
  const { data, error } = await supabase
    .from("accounts")
    .update({
      account_number: account.accountNumber,
      account_name: account.accountName,
      account_type: account.accountType,
      entity_id: account.entityId,
      parent_account_id: account.parentAccountId,
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
  const { error } = await supabase.from("accounts").delete().eq("id", id);

  if (error) {
    console.error("Error deleting account:", error);
    throw error;
  }

  return true;
};

export const getAccountById = async (id: string) => {
  const { data, error } = await supabase
    .from("accounts")
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
    journal_entry_items:journal_entry_items(*, account:accounts(*))
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
  // Start a transaction
  const { data, error } = await supabase.rpc("create_journal_entry", {
    p_entry_number: entry.entryNumber,
    p_date: entry.date,
    p_description: entry.description,
    p_reference: entry.reference || null,
    p_amount: entry.amount,
    p_entity_id: entry.entityId,
    p_status: entry.status,
    p_created_by:
      supabase.auth.getUser().then((res) => res.data.user?.id) || null,
    p_line_items: entry.lineItems.map((item) => ({
      account_id: item.accountId,
      description: item.description || null,
      debit: item.debit || null,
      credit: item.credit || null,
    })),
  });

  if (error) {
    console.error("Error creating journal entry:", error);
    throw error;
  }

  return data;
};

export const updateJournalEntry = async (
  id: string,
  entry: Partial<Omit<JournalEntry, "id" | "createdAt">>,
) => {
  // Start a transaction
  const { data, error } = await supabase.rpc("update_journal_entry", {
    p_id: id,
    p_date: entry.date,
    p_description: entry.description,
    p_reference: entry.reference || null,
    p_entity_id: entry.entityId,
    p_line_items:
      entry.lineItems?.map((item) => ({
        id: item.id,
        account_id: item.accountId,
        description: item.description || null,
        debit: item.debit || null,
        credit: item.credit || null,
      })) || [],
  });

  if (error) {
    console.error("Error updating journal entry:", error);
    throw error;
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
    journal_entry_items:journal_entry_items(*, account:accounts(*))
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
  const { data, error } = await supabase.rpc("post_journal_entry", {
    p_id: id,
  });

  if (error) {
    console.error("Error posting journal entry:", error);
    throw error;
  }

  return data;
};

export const approveJournalEntry = async (id: string, notes?: string) => {
  const { data, error } = await supabase.rpc("approve_journal_entry", {
    p_id: id,
    p_notes: notes || null,
  });

  if (error) {
    console.error("Error approving journal entry:", error);
    throw error;
  }

  return data;
};

export const rejectJournalEntry = async (id: string, notes?: string) => {
  const { data, error } = await supabase.rpc("reject_journal_entry", {
    p_id: id,
    p_notes: notes || null,
  });

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
      accountNumber: account.account_number,
      accountName: account.account_name,
      accountType: account.account_type,
      entityId: account.entity_id,
      parentAccountId: account.parent_account_id,
      description: account.description,
      isActive: account.is_active,
      reportingCategory: account.reporting_category,
      taxCode: account.tax_code,
      balance: parseFloat(account.balance) || 0,
      level: account.level || 0,
      children: [],
    });
  });

  // Second pass: Build the hierarchy
  accounts.forEach((account) => {
    const accountObj = accountMap.get(account.id);
    if (
      account.parent_account_id &&
      accountMap.has(account.parent_account_id)
    ) {
      const parent = accountMap.get(account.parent_account_id);
      parent.children.push(accountObj);
      // Update level based on parent
      accountObj.level = parent.level + 1;
    } else {
      rootAccounts.push(accountObj);
    }
  });

  return rootAccounts;
}
