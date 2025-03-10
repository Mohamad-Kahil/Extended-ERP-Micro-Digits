-- Create companies table
CREATE TABLE IF NOT EXISTS companies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  legal_structure VARCHAR(100) NOT NULL,
  base_currency VARCHAR(3) NOT NULL DEFAULT 'USD',
  reporting_currency VARCHAR(3) NOT NULL DEFAULT 'USD',
  fiscal_year_end DATE,
  tax_id VARCHAR(50),
  address TEXT,
  country VARCHAR(100),
  coa_template VARCHAR(50),
  default_role VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable row level security
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;

-- Insert default company
INSERT INTO companies (id, name, legal_structure, base_currency, reporting_currency) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Demo Company', 'Corporation', 'USD', 'USD')
ON CONFLICT (id) DO NOTHING;
