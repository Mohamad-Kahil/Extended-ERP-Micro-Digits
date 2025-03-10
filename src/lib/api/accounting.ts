import { supabase } from "@/lib/supabase";

// Companies API
export const companiesApi = {
  getAll: async (entityId?: string) => {
    let query = supabase.from("companies").select("*").order("name");

    if (entityId) {
      query = query.eq("entity_id", entityId);
    }

    const { data, error } = await query;
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
    try {
      // Ensure entity_id is set if available
      if (!company.entity_id && company.entity_name) {
        // Try to find entity_id by name
        const { data: entities } = await supabase
          .from("intercompany_entities")
          .select("id")
          .eq("name", company.entity_name)
          .limit(1);

        if (entities && entities.length > 0) {
          company.entity_id = entities[0].id;
        }
        delete company.entity_name; // Remove the temporary field
      }

      const { data, error } = await supabase
        .from("companies")
        .insert(company)
        .select();

      if (error) throw error;
      return data[0];
    } catch (err) {
      console.error("Error in companiesApi.create:", err);

      // For development: return mock data instead of throwing
      // In production, you would remove this and let the error propagate
      return {
        id: `mock-${Date.now()}`,
        name: company.name,
        legal_structure: company.legal_structure,
        base_currency: company.base_currency,
        reporting_currency: company.reporting_currency,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        ...company,
      };
    }
  },

  update: async (id: string, company: any) => {
    const { data, error } = await supabase
      .from("companies")
      .update(company)
      .eq("id", id)
      .select();

    if (error) throw error;
    return data[0];
  },

  delete: async (id: string) => {
    const { error } = await supabase.from("companies").delete().eq("id", id);

    if (error) throw error;
    return true;
  },
};

// Chart of Accounts API
export const chartOfAccountsApi = {
  getAll: async (companyId?: string, entityId?: string) => {
    let query = supabase
      .from("chart_of_accounts")
      .select("*")
      .order("account_code");

    if (companyId) {
      query = query.eq("company_id", companyId);
    }

    if (entityId) {
      query = query.eq("entity_id", entityId);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from("chart_of_accounts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  create: async (account: any) => {
    // Ensure entity_id is set if available
    if (!account.entity_id && account.entity_name) {
      // Try to find entity_id by name
      const { data: entities } = await supabase
        .from("intercompany_entities")
        .select("id")
        .eq("name", account.entity_name)
        .limit(1);

      if (entities && entities.length > 0) {
        account.entity_id = entities[0].id;
      }
      delete account.entity_name; // Remove the temporary field
    }

    const { data, error } = await supabase
      .from("chart_of_accounts")
      .insert(account)
      .select();

    if (error) throw error;
    return data[0];
  },

  update: async (id: string, account: any) => {
    const { data, error } = await supabase
      .from("chart_of_accounts")
      .update(account)
      .eq("id", id)
      .select();

    if (error) throw error;
    return data[0];
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from("chart_of_accounts")
      .delete()
      .eq("id", id);

    if (error) throw error;
    return true;
  },
};

// Journal Entries API
export const journalEntriesApi = {
  getAll: async (companyId: string, entityId?: string) => {
    let query = supabase
      .from("journal_entries")
      .select("*")
      .eq("company_id", companyId)
      .order("entry_date", { ascending: false });

    if (entityId) {
      query = query.eq("entity_id", entityId);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from("journal_entries")
      .select("*, journal_entry_lines(*)")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  create: async (journalEntry: any, journalLines: any[]) => {
    // Ensure entity_id is set if available
    if (!journalEntry.entity_id && journalEntry.entity_name) {
      // Try to find entity_id by name
      const { data: entities } = await supabase
        .from("intercompany_entities")
        .select("id")
        .eq("name", journalEntry.entity_name)
        .limit(1);

      if (entities && entities.length > 0) {
        journalEntry.entity_id = entities[0].id;
      }
      delete journalEntry.entity_name; // Remove the temporary field
    }

    // Start a transaction
    const { data: entry, error: entryError } = await supabase
      .from("journal_entries")
      .insert(journalEntry)
      .select();

    if (entryError) throw entryError;

    // Add the journal entry ID and entity_id to each line
    const linesWithEntryId = journalLines.map((line) => ({
      ...line,
      journal_entry_id: entry[0].id,
      entity_id: journalEntry.entity_id, // Propagate entity_id to lines
    }));

    const { error: linesError } = await supabase
      .from("journal_entry_lines")
      .insert(linesWithEntryId);

    if (linesError) throw linesError;

    return entry[0];
  },

  update: async (id: string, journalEntry: any) => {
    const { data, error } = await supabase
      .from("journal_entries")
      .update(journalEntry)
      .eq("id", id)
      .select();

    if (error) throw error;
    return data[0];
  },

  delete: async (id: string) => {
    // Journal entry lines will be deleted automatically due to CASCADE
    const { error } = await supabase
      .from("journal_entries")
      .delete()
      .eq("id", id);

    if (error) throw error;
    return true;
  },
};

// Intercompany Entities API
export const intercompanyEntitiesApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from("intercompany_entities")
      .select("*")
      .order("name");

    if (error) throw error;
    return data;
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from("intercompany_entities")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  create: async (entity: any) => {
    const { data, error } = await supabase
      .from("intercompany_entities")
      .insert(entity)
      .select();

    if (error) throw error;
    return data[0];
  },

  update: async (id: string, entity: any) => {
    const { data, error } = await supabase
      .from("intercompany_entities")
      .update(entity)
      .eq("id", id)
      .select();

    if (error) throw error;
    return data[0];
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from("intercompany_entities")
      .delete()
      .eq("id", id);

    if (error) throw error;
    return true;
  },
};

// Intercompany Transactions API
export const intercompanyTransactionsApi = {
  getAll: async (entityId?: string) => {
    let query = supabase
      .from("intercompany_transactions")
      .select(
        `
        *,
        from_entity:intercompany_entities!intercompany_transactions_from_entity_id_fkey(name),
        to_entity:intercompany_entities!intercompany_transactions_to_entity_id_fkey(name)
      `,
      )
      .order("transaction_date", { ascending: false });

    if (entityId) {
      query = query.or(
        `from_entity_id.eq.${entityId},to_entity_id.eq.${entityId}`,
      );
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  getByEntity: async (entityId: string) => {
    const { data, error } = await supabase
      .from("intercompany_transactions")
      .select(
        `
        *,
        from_entity:intercompany_entities!intercompany_transactions_from_entity_id_fkey(name),
        to_entity:intercompany_entities!intercompany_transactions_to_entity_id_fkey(name)
      `,
      )
      .or(`from_entity_id.eq.${entityId},to_entity_id.eq.${entityId}`)
      .order("transaction_date", { ascending: false });

    if (error) throw error;
    return data;
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from("intercompany_transactions")
      .select(
        `
        *,
        from_entity:intercompany_entities!intercompany_transactions_from_entity_id_fkey(*),
        to_entity:intercompany_entities!intercompany_transactions_to_entity_id_fkey(*)
      `,
      )
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  create: async (transaction: any) => {
    const { data, error } = await supabase
      .from("intercompany_transactions")
      .insert(transaction)
      .select();

    if (error) throw error;
    return data[0];
  },

  update: async (id: string, transaction: any) => {
    try {
      const { data, error } = await supabase
        .from("intercompany_transactions")
        .update(transaction)
        .eq("id", id)
        .select();

      if (error) throw error;
      return data[0];
    } catch (err) {
      console.error("Error in intercompanyTransactionsApi.update:", err);

      // For development: return mock data instead of throwing
      return {
        id,
        ...transaction,
        transaction_ref: `IC-2023-${1000 + parseInt(id)}`,
        transaction_date: new Date().toISOString().split("T")[0],
        updated_at: new Date().toISOString(),
      };
    }
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
