-- Ensure chart_of_accounts table exists with proper structure
CREATE TABLE IF NOT EXISTS chart_of_accounts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  account_code VARCHAR(50) NOT NULL,
  account_name VARCHAR(255) NOT NULL,
  account_type VARCHAR(50) NOT NULL,
  company_id UUID REFERENCES companies(id),
  parent_id UUID REFERENCES chart_of_accounts(id),
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  reporting_category VARCHAR(100),
  tax_code VARCHAR(50),
  balance DECIMAL(15, 2) DEFAULT 0,
  account_level INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_chart_of_accounts_company_id ON chart_of_accounts(company_id);
CREATE INDEX IF NOT EXISTS idx_chart_of_accounts_parent_id ON chart_of_accounts(parent_id);

-- Enable RLS
ALTER TABLE chart_of_accounts ENABLE ROW LEVEL SECURITY;

-- Create policy for access
DROP POLICY IF EXISTS "Users can view their company accounts" ON chart_of_accounts;
CREATE POLICY "Users can view their company accounts"
  ON chart_of_accounts
  FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Users can insert their company accounts" ON chart_of_accounts;
CREATE POLICY "Users can insert their company accounts"
  ON chart_of_accounts
  FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Users can update their company accounts" ON chart_of_accounts;
CREATE POLICY "Users can update their company accounts"
  ON chart_of_accounts
  FOR UPDATE
  USING (true);

DROP POLICY IF EXISTS "Users can delete their company accounts" ON chart_of_accounts;
CREATE POLICY "Users can delete their company accounts"
  ON chart_of_accounts
  FOR DELETE
  USING (true);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE chart_of_accounts;
