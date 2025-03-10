import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AccountList, Account } from "./AccountList";
import { AccountForm } from "./AccountForm";
import { AccountDetails } from "./AccountDetails";
import { Download, Upload, FileText } from "lucide-react";

interface ChartOfAccountsProps {
  currentEntity?: string;
  currentEntityId?: string;
  entities?: { id: string; name: string }[];
}

const ChartOfAccounts: React.FC<ChartOfAccountsProps> = ({
  currentEntity = "all",
  currentEntityId = "1",
  entities = [
    { id: "1", name: "Parent Company" },
    { id: "2", name: "Subsidiary 1" },
    { id: "3", name: "Subsidiary 2" },
  ],
}) => {
  // Sample data for demonstration
  const [accounts, setAccounts] = useState<Account[]>([
    {
      id: "1",
      accountNumber: "1000",
      accountName: "Assets",
      accountType: "asset",
      entityId: "1",
      isActive: true,
      balance: 0,
      level: 0,
      children: [
        {
          id: "1.1",
          accountNumber: "1100",
          accountName: "Current Assets",
          accountType: "asset",
          entityId: "1",
          parentAccountId: "1",
          isActive: true,
          balance: 0,
          level: 1,
          children: [
            {
              id: "1.1.1",
              accountNumber: "1110",
              accountName: "Cash",
              accountType: "asset",
              entityId: "1",
              parentAccountId: "1.1",
              isActive: true,
              balance: 125000,
              level: 2,
            },
            {
              id: "1.1.2",
              accountNumber: "1120",
              accountName: "Accounts Receivable",
              accountType: "asset",
              parentAccountId: "1.1",
              isActive: true,
              balance: 75000,
              level: 2,
            },
            {
              id: "1.1.3",
              accountNumber: "1130",
              accountName: "Inventory",
              accountType: "asset",
              parentAccountId: "1.1",
              isActive: true,
              balance: 50000,
              level: 2,
            },
          ],
        },
        {
          id: "1.2",
          accountNumber: "1200",
          accountName: "Fixed Assets",
          accountType: "asset",
          parentAccountId: "1",
          isActive: true,
          balance: 0,
          level: 1,
          children: [
            {
              id: "1.2.1",
              accountNumber: "1210",
              accountName: "Property & Equipment",
              accountType: "asset",
              parentAccountId: "1.2",
              isActive: true,
              balance: 200000,
              level: 2,
            },
            {
              id: "1.2.2",
              accountNumber: "1220",
              accountName: "Accumulated Depreciation",
              accountType: "asset",
              parentAccountId: "1.2",
              isActive: true,
              balance: -50000,
              level: 2,
            },
          ],
        },
      ],
    },
    {
      id: "2",
      accountNumber: "2000",
      accountName: "Liabilities",
      accountType: "liability",
      isActive: true,
      balance: 0,
      level: 0,
      children: [
        {
          id: "2.1",
          accountNumber: "2100",
          accountName: "Current Liabilities",
          accountType: "liability",
          parentAccountId: "2",
          isActive: true,
          balance: 0,
          level: 1,
          children: [
            {
              id: "2.1.1",
              accountNumber: "2110",
              accountName: "Accounts Payable",
              accountType: "liability",
              parentAccountId: "2.1",
              isActive: true,
              balance: 45000,
              level: 2,
            },
            {
              id: "2.1.2",
              accountNumber: "2120",
              accountName: "Accrued Expenses",
              accountType: "liability",
              parentAccountId: "2.1",
              isActive: true,
              balance: 15000,
              level: 2,
            },
          ],
        },
        {
          id: "2.2",
          accountNumber: "2200",
          accountName: "Long-term Liabilities",
          accountType: "liability",
          parentAccountId: "2",
          isActive: true,
          balance: 0,
          level: 1,
          children: [
            {
              id: "2.2.1",
              accountNumber: "2210",
              accountName: "Long-term Debt",
              accountType: "liability",
              parentAccountId: "2.2",
              isActive: true,
              balance: 150000,
              level: 2,
            },
          ],
        },
      ],
    },
    {
      id: "3",
      accountNumber: "3000",
      accountName: "Equity",
      accountType: "equity",
      isActive: true,
      balance: 0,
      level: 0,
      children: [
        {
          id: "3.1",
          accountNumber: "3100",
          accountName: "Common Stock",
          accountType: "equity",
          parentAccountId: "3",
          isActive: true,
          balance: 100000,
          level: 1,
        },
        {
          id: "3.2",
          accountNumber: "3200",
          accountName: "Retained Earnings",
          accountType: "equity",
          parentAccountId: "3",
          isActive: true,
          balance: 90000,
          level: 1,
        },
      ],
    },
    {
      id: "4",
      accountNumber: "4000",
      accountName: "Revenue",
      accountType: "revenue",
      isActive: true,
      balance: 0,
      level: 0,
      children: [
        {
          id: "4.1",
          accountNumber: "4100",
          accountName: "Product Sales",
          accountType: "revenue",
          parentAccountId: "4",
          isActive: true,
          balance: 250000,
          level: 1,
        },
        {
          id: "4.2",
          accountNumber: "4200",
          accountName: "Service Revenue",
          accountType: "revenue",
          parentAccountId: "4",
          isActive: true,
          balance: 150000,
          level: 1,
        },
      ],
    },
    {
      id: "5",
      accountNumber: "5000",
      accountName: "Expenses",
      accountType: "expense",
      isActive: true,
      balance: 0,
      level: 0,
      children: [
        {
          id: "5.1",
          accountNumber: "5100",
          accountName: "Cost of Goods Sold",
          accountType: "expense",
          parentAccountId: "5",
          isActive: true,
          balance: 125000,
          level: 1,
        },
        {
          id: "5.2",
          accountNumber: "5200",
          accountName: "Operating Expenses",
          accountType: "expense",
          parentAccountId: "5",
          isActive: true,
          balance: 0,
          level: 1,
          children: [
            {
              id: "5.2.1",
              accountNumber: "5210",
              accountName: "Salaries & Wages",
              accountType: "expense",
              parentAccountId: "5.2",
              isActive: true,
              balance: 85000,
              level: 2,
            },
            {
              id: "5.2.2",
              accountNumber: "5220",
              accountName: "Rent",
              accountType: "expense",
              parentAccountId: "5.2",
              isActive: true,
              balance: 25000,
              level: 2,
            },
            {
              id: "5.2.3",
              accountNumber: "5230",
              accountName: "Utilities",
              accountType: "expense",
              parentAccountId: "5.2",
              isActive: true,
              balance: 10000,
              level: 2,
            },
            {
              id: "5.2.4",
              accountNumber: "5240",
              accountName: "Marketing & Advertising",
              accountType: "expense",
              parentAccountId: "5.2",
              isActive: true,
              balance: 15000,
              level: 2,
            },
          ],
        },
      ],
    },
  ]);

  // State for UI management
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "details">("list");
  const [editMode, setEditMode] = useState(false);

  // Filter accounts by entity and flatten for parent selection
  const filterAndFlattenAccounts = (
    accounts: Account[],
    entityId: string,
  ): Account[] => {
    // First filter by entity
    const filteredAccounts = accounts
      .filter(
        (account) => currentEntity === "all" || account.entityId === entityId,
      )
      .map((account) => {
        if (account.children && account.children.length > 0) {
          return {
            ...account,
            children: account.children.filter(
              (child) => currentEntity === "all" || child.entityId === entityId,
            ),
          };
        }
        return account;
      });

    // Then flatten the filtered accounts
    let result: Account[] = [];
    filteredAccounts.forEach((account) => {
      result.push(account);
      if (account.children && account.children.length > 0) {
        result = [
          ...result,
          ...filterAndFlattenAccounts(account.children, entityId),
        ];
      }
    });
    return result;
  };

  // Get filtered accounts based on current entity
  const filteredAccounts =
    currentEntity === "all"
      ? accounts
      : filterAndFlattenAccounts(accounts, currentEntityId);

  const parentAccountOptions = filterAndFlattenAccounts(
    accounts,
    currentEntityId,
  ).map((account) => ({
    id: account.id,
    name: account.accountName,
    accountNumber: account.accountNumber,
  }));

  // Handlers
  const handleAddAccount = () => {
    setSelectedAccount(null);
    setEditMode(false);
    setIsFormOpen(true);
  };

  const handleEditAccount = (account: Account) => {
    setSelectedAccount(account);
    setEditMode(true);
    setIsFormOpen(true);
  };

  const handleDeleteAccount = (accountId: string) => {
    // Find the account to delete
    const accountToDelete = filterAndFlattenAccounts(
      accounts,
      currentEntityId,
    ).find((account) => account.id === accountId);
    if (accountToDelete) {
      setSelectedAccount(accountToDelete);
      setIsDeleteDialogOpen(true);
    }
  };

  const confirmDeleteAccount = () => {
    // In a real app, you would call an API to delete the account
    // For now, we'll just update the state
    if (selectedAccount) {
      // This is a simplified version - in a real app, you'd need to handle the hierarchy properly
      const removeAccount = (accounts: Account[]): Account[] => {
        return accounts
          .filter((account) => account.id !== selectedAccount.id)
          .map((account) => {
            if (account.children && account.children.length > 0) {
              return {
                ...account,
                children: removeAccount(account.children),
              };
            }
            return account;
          });
      };

      setAccounts(removeAccount(accounts));
      setIsDeleteDialogOpen(false);
      setSelectedAccount(null);
    }
  };

  const handleViewAccount = (account: Account) => {
    setSelectedAccount(account);
    setViewMode("details");
  };

  const handleFormSubmit = (formData: any) => {
    // In a real app, you would call an API to save the account
    // For now, we'll just update the state
    if (editMode && selectedAccount) {
      // Update existing account
      const updateAccount = (accounts: Account[]): Account[] => {
        return accounts.map((account) => {
          if (account.id === selectedAccount.id) {
            return { ...account, ...formData, balance: account.balance };
          }
          if (account.children && account.children.length > 0) {
            return {
              ...account,
              children: updateAccount(account.children),
            };
          }
          return account;
        });
      };

      setAccounts(updateAccount(accounts));
    } else {
      // Create new account
      const newAccount: Account = {
        id: `new-${Date.now()}`, // In a real app, this would come from the backend
        ...formData,
        balance: 0,
        level: formData.parentAccount ? 1 : 0, // Simplified level calculation
        isActive: true,
        entityId: formData.entityId || currentEntityId,
      };

      // If there's a parent account, add it as a child
      if (formData.parentAccount) {
        const addChildAccount = (accounts: Account[]): Account[] => {
          return accounts.map((account) => {
            if (account.id === formData.parentAccount) {
              return {
                ...account,
                children: [
                  ...(account.children || []),
                  { ...newAccount, level: account.level + 1 },
                ],
              };
            }
            if (account.children && account.children.length > 0) {
              return {
                ...account,
                children: addChildAccount(account.children),
              };
            }
            return account;
          });
        };

        setAccounts(addChildAccount(accounts));
      } else {
        // Add as a top-level account
        setAccounts([...accounts, newAccount]);
      }
    }

    setIsFormOpen(false);
    setSelectedAccount(null);
  };

  return (
    <div className="space-y-4">
      {viewMode === "list" ? (
        <>
          <Card className="border-slate-800 bg-slate-900">
            <CardHeader className="border-b border-slate-800 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-white">
                  Chart of Accounts
                  {currentEntity !== "all" && (
                    <span className="ml-2 text-sm text-slate-400">
                      ({currentEntity})
                    </span>
                  )}
                </CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Import
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Report
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <AccountList
                accounts={filteredAccounts}
                onAddAccount={handleAddAccount}
                onEditAccount={handleEditAccount}
                onDeleteAccount={handleDeleteAccount}
                onViewAccount={handleViewAccount}
              />
            </CardContent>
          </Card>

          {/* Account Form Dialog */}
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogContent className="sm:max-w-[600px] bg-slate-900 border-slate-800">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-white">
                  {editMode ? "Edit Account" : "Add New Account"}
                </DialogTitle>
              </DialogHeader>
              <AccountForm
                initialData={selectedAccount || undefined}
                onSubmit={handleFormSubmit}
                onCancel={() => setIsFormOpen(false)}
                parentAccounts={parentAccountOptions}
                entities={entities}
                currentEntityId={currentEntityId}
              />
            </DialogContent>
          </Dialog>

          {/* Delete Confirmation Dialog */}
          <AlertDialog
            open={isDeleteDialogOpen}
            onOpenChange={setIsDeleteDialogOpen}
          >
            <AlertDialogContent className="bg-slate-900 border-slate-800">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-white">
                  Delete Account
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete the account
                  <span className="font-semibold text-white">
                    {" "}
                    {selectedAccount?.accountNumber} -{" "}
                    {selectedAccount?.accountName}
                  </span>
                  ? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={confirmDeleteAccount}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      ) : (
        <AccountDetails
          account={selectedAccount!}
          onBack={() => setViewMode("list")}
          onEdit={handleEditAccount}
        />
      )}
    </div>
  );
};

export default ChartOfAccounts;
