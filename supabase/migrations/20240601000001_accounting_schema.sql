-- Create accounting schema tables

-- Companies table
CREATE TABLE IF NOT EXISTS companies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  legal_structure VARCHAR(50) NOT NULL,
  address TEXT,
  country VARCHAR(100),
  tax_id VARCHAR(100),
  fiscal_year_end VARCHAR(20),
  base_currency VARCHAR(3) NOT NULL,
  reporting_currency VARCHAR(3) NOT NULL,
  coa_template VARCHAR(50),
  default_role VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Chart of Accounts table
CREATE TABLE IF NOT EXISTS chart_of_accounts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  account_code VARCHAR(20) NOT NULL,
  account_name VARCHAR(255) NOT NULL,
  account_type VARCHAR(50) NOT NULL,
  account_subtype VARCHAR(50),
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  balance DECIMAL(19, 4) DEFAULT 0,
  currency VARCHAR(3) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(company_id, account_code)
);

-- Journal Entries table
CREATE TABLE IF NOT EXISTS journal_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  entry_number VARCHAR(50) NOT NULL,
  entry_date DATE NOT NULL,
  description TEXT,
  reference VARCHAR(100),
  status VARCHAR(20) NOT NULL,
  created_by UUID,
  approved_by UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  posting_date TIMESTAMP WITH TIME ZONE,
  total_debit DECIMAL(19, 4) NOT NULL,
  total_credit DECIMAL(19, 4) NOT NULL,
  notes TEXT
);

-- Journal Entry Lines table
CREATE TABLE IF NOT EXISTS journal_entry_lines (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  journal_entry_id UUID REFERENCES journal_entries(id) ON DELETE CASCADE,
  account_id UUID REFERENCES chart_of_accounts(id),
  description TEXT,
  debit DECIMAL(19, 4) DEFAULT 0,
  credit DECIMAL(19, 4) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Intercompany Entities table
CREATE TABLE IF NOT EXISTS intercompany_entities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  entity_type VARCHAR(50) NOT NULL,
  country VARCHAR(100),
  currency VARCHAR(3) NOT NULL,
  ownership_percentage DECIMAL(5, 2),
  parent_entity_id UUID REFERENCES intercompany_entities(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Intercompany Transactions table
CREATE TABLE IF NOT EXISTS intercompany_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  transaction_ref VARCHAR(50) NOT NULL,
  transaction_date DATE NOT NULL,
  from_entity_id UUID REFERENCES intercompany_entities(id),
  to_entity_id UUID REFERENCES intercompany_entities(id),
  amount DECIMAL(19, 4) NOT NULL,
  currency VARCHAR(3) NOT NULL,
  status VARCHAR(20) NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE chart_of_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entry_lines ENABLE ROW LEVEL SECURITY;
ALTER TABLE intercompany_entities ENABLE ROW LEVEL SECURITY;
ALTER TABLE intercompany_transactions ENABLE ROW LEVEL SECURITY;

-- Add tables to realtime publication
alter publication supabase_realtime add table companies;
alter publication supabase_realtime add table chart_of_accounts;
alter publication supabase_realtime add table journal_entries;
alter publication supabase_realtime add table journal_entry_lines;
alter publication supabase_realtime add table intercompany_entities;
alter publication supabase_realtime add table intercompany_transactions;
