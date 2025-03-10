-- Fix the companies table to ensure it can accept new records
ALTER TABLE IF EXISTS companies
  ALTER COLUMN name TYPE VARCHAR(255),
  ALTER COLUMN legal_structure TYPE VARCHAR(100),
  ALTER COLUMN base_currency TYPE VARCHAR(10),
  ALTER COLUMN reporting_currency TYPE VARCHAR(10);

-- Ensure RLS is disabled for development
ALTER TABLE companies DISABLE ROW LEVEL SECURITY;

-- Enable realtime for companies table
alter publication supabase_realtime add table companies;
