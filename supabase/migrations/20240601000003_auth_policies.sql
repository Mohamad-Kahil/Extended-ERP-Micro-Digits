-- Create users table to mirror auth.users
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a trigger to automatically create a user record when a new auth user is created
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name, role)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', 'user');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Add RLS policies for users table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own data
DROP POLICY IF EXISTS "Users can view their own data" ON users;
CREATE POLICY "Users can view their own data"
  ON users FOR SELECT
  USING (auth.uid() = id);

-- Allow users to update their own data
DROP POLICY IF EXISTS "Users can update their own data" ON users;
CREATE POLICY "Users can update their own data"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- Allow admins to read all user data
DROP POLICY IF EXISTS "Admins can view all user data" ON users;
CREATE POLICY "Admins can view all user data"
  ON users FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid() AND users.role = 'admin'
  ));

-- Add RLS policies for accounting tables

-- Companies table policies
DROP POLICY IF EXISTS "Authenticated users can read companies" ON companies;
CREATE POLICY "Authenticated users can read companies"
  ON companies FOR SELECT
  USING (auth.role() = 'authenticated');

-- Only admins can create/update/delete companies
DROP POLICY IF EXISTS "Admins can manage companies" ON companies;
CREATE POLICY "Admins can manage companies"
  ON companies FOR ALL
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid() AND users.role = 'admin'
  ));

-- Chart of accounts policies
DROP POLICY IF EXISTS "Authenticated users can read chart of accounts" ON chart_of_accounts;
CREATE POLICY "Authenticated users can read chart of accounts"
  ON chart_of_accounts FOR SELECT
  USING (auth.role() = 'authenticated');

-- Only admins and accountants can manage chart of accounts
DROP POLICY IF EXISTS "Admins and accountants can manage chart of accounts" ON chart_of_accounts;
CREATE POLICY "Admins and accountants can manage chart of accounts"
  ON chart_of_accounts FOR ALL
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid() AND (users.role = 'admin' OR users.role = 'accountant')
  ));

-- Intercompany entities policies
DROP POLICY IF EXISTS "Authenticated users can read intercompany entities" ON intercompany_entities;
CREATE POLICY "Authenticated users can read intercompany entities"
  ON intercompany_entities FOR SELECT
  USING (auth.role() = 'authenticated');

-- Only admins and accountants can manage intercompany entities
DROP POLICY IF EXISTS "Admins and accountants can manage intercompany entities" ON intercompany_entities;
CREATE POLICY "Admins and accountants can manage intercompany entities"
  ON intercompany_entities FOR ALL
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid() AND (users.role = 'admin' OR users.role = 'accountant')
  ));

-- Intercompany transactions policies
DROP POLICY IF EXISTS "Authenticated users can read intercompany transactions" ON intercompany_transactions;
CREATE POLICY "Authenticated users can read intercompany transactions"
  ON intercompany_transactions FOR SELECT
  USING (auth.role() = 'authenticated');

-- Only admins and accountants can manage intercompany transactions
DROP POLICY IF EXISTS "Admins and accountants can manage intercompany transactions" ON intercompany_transactions;
CREATE POLICY "Admins and accountants can manage intercompany transactions"
  ON intercompany_transactions FOR ALL
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid() AND (users.role = 'admin' OR users.role = 'accountant')
  ));

-- Add tables to realtime publication
alter publication supabase_realtime add table users;
