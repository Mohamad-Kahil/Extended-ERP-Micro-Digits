-- Add policies to allow operations on companies table
DROP POLICY IF EXISTS "Allow all operations on companies" ON companies;
CREATE POLICY "Allow all operations on companies"
  ON companies
  USING (true);

-- Add policies to allow operations on intercompany_entities table
DROP POLICY IF EXISTS "Allow all operations on intercompany_entities" ON intercompany_entities;
CREATE POLICY "Allow all operations on intercompany_entities"
  ON intercompany_entities
  USING (true);

-- Add policies to allow operations on intercompany_transactions table
DROP POLICY IF EXISTS "Allow all operations on intercompany_transactions" ON intercompany_transactions;
CREATE POLICY "Allow all operations on intercompany_transactions"
  ON intercompany_transactions
  USING (true);
