export interface Company {
  id: string;
  name: string;
  legal_structure: string;
  address?: string;
  country?: string;
  tax_id?: string;
  fiscal_year_end?: string;
  base_currency: string;
  reporting_currency: string;
  coa_template?: string;
  default_role?: string;
  created_at: string;
  updated_at: string;
}

export interface ChartOfAccount {
  id: string;
  company_id: string;
  account_code: string;
  account_name: string;
  account_type: string;
  account_subtype?: string;
  description?: string;
  is_active: boolean;
  balance: number;
  currency: string;
  created_at: string;
  updated_at: string;
}

export interface JournalEntry {
  id: string;
  company_id: string;
  entry_number: string;
  entry_date: string;
  description?: string;
  reference?: string;
  status: "Draft" | "Pending" | "Posted" | "Rejected";
  created_by?: string;
  approved_by?: string;
  created_at: string;
  updated_at: string;
  posting_date?: string;
  total_debit: number;
  total_credit: number;
  notes?: string;
  journal_entry_lines?: JournalEntryLine[];
}

export interface JournalEntryLine {
  id: string;
  journal_entry_id: string;
  account_id: string;
  description?: string;
  debit: number;
  credit: number;
  created_at: string;
  updated_at: string;
}

export interface IntercompanyEntity {
  id: string;
  name: string;
  entity_type: string;
  country?: string;
  currency: string;
  ownership_percentage?: number;
  parent_entity_id?: string;
  created_at: string;
  updated_at: string;
}

export interface IntercompanyTransaction {
  id: string;
  transaction_ref: string;
  transaction_date: string;
  from_entity_id: string;
  to_entity_id: string;
  amount: number;
  currency: string;
  status: string;
  description?: string;
  created_at: string;
  updated_at: string;
  from_entity?: { name: string };
  to_entity?: { name: string };
}
