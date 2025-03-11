import React, { useState, useEffect } from "react";
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
import {
  fetchAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
} from "@/lib/api/accounting";
import { useToast } from "@/components/ui/use-toast";

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
  // State for accounts data
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);

  // State for UI management
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "details">("list");
  const [editMode, setEditMode] = useState(false);

  const { toast } = useToast();

  // Fetch accounts when component mounts or entity changes
  useEffect(() => {
    const loadAccounts = async () => {
      setLoading(true);
      try {
        const data = await fetchAccounts(currentEntityId);
        setAccounts(data);
      } catch (error) {
        console.error("Error loading accounts:", error);
        toast({
          title: "Error",
          description: "Failed to load accounts. Please try again.",
          variant: "destructive",
        });
        // Fallback to empty array
        setAccounts([]);
      } finally {
        setLoading(false);
      }
    };

    loadAccounts();
  }, [currentEntityId, toast]);

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
    // Reset view mode to list in case we were in details view
    setViewMode("list");
  };

  const handleEditAccount = (account: Account) => {
    setSelectedAccount(account);
    setEditMode(true);
    setIsFormOpen(true);
    // Reset view mode to list in case we were in details view
    setViewMode("list");
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

  const confirmDeleteAccount = async () => {
    if (!selectedAccount) return;

    try {
      await deleteAccount(selectedAccount.id);

      // Update local state
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
      toast({
        title: "Success",
        description: "Account deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting account:", error);
      toast({
        title: "Error",
        description: "Failed to delete account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDeleteDialogOpen(false);
      setSelectedAccount(null);
    }
  };

  const handleViewAccount = (account: Account) => {
    setSelectedAccount({ ...account });
    setViewMode("details");
    // Close any open dialogs
    setIsFormOpen(false);
    setIsDeleteDialogOpen(false);
  };

  const handleFormSubmit = async (formData: {
    accountNumber: string;
    accountName: string;
    accountType: "asset" | "liability" | "equity" | "revenue" | "expense";
    entityId: string;
    parentAccount?: string;
    description?: string;
    isActive: boolean;
    reportingCategory?: string;
    taxCode?: string;
  }) => {
    try {
      if (editMode && selectedAccount) {
        // Update existing account
        const updatedAccount = await updateAccount(selectedAccount.id, {
          accountNumber: formData.accountNumber,
          accountName: formData.accountName,
          accountType: formData.accountType,
          entityId: formData.entityId,
          parentAccountId:
            formData.parentAccount === "null" ? null : formData.parentAccount,
          description: formData.description,
          isActive: formData.isActive,
          reportingCategory: formData.reportingCategory,
          taxCode: formData.taxCode,
        });

        // Update local state
        const updateAccountInState = (accounts: Account[]): Account[] => {
          return accounts.map((account) => {
            if (account.id === selectedAccount.id) {
              return {
                ...account,
                accountNumber: formData.accountNumber,
                accountName: formData.accountName,
                accountType: formData.accountType,
                entityId: formData.entityId,
                parentAccountId:
                  formData.parentAccount === "null"
                    ? null
                    : formData.parentAccount,
                description: formData.description,
                isActive: formData.isActive,
                reportingCategory: formData.reportingCategory,
                taxCode: formData.taxCode,
              };
            }
            if (account.children && account.children.length > 0) {
              return {
                ...account,
                children: updateAccountInState(account.children),
              };
            }
            return account;
          });
        };

        setAccounts(updateAccountInState(accounts));
        toast({
          title: "Success",
          description: "Account updated successfully",
        });
      } else {
        // Create new account
        console.log("Form data for new account:", formData);
        const newAccount = await createAccount({
          accountNumber: formData.accountNumber,
          accountName: formData.accountName,
          accountType: formData.accountType,
          entityId: formData.entityId || currentEntityId,
          parentAccountId:
            formData.parentAccount === "null" ? null : formData.parentAccount,
          description: formData.description || null,
          isActive: formData.isActive,
          reportingCategory: formData.reportingCategory || null,
          taxCode: formData.taxCode || null,
        });

        // Add the new account to the local state
        const newAccountObj: Account = {
          id: newAccount.id,
          accountNumber: formData.accountNumber,
          accountName: formData.accountName,
          accountType: formData.accountType,
          entityId: formData.entityId || currentEntityId,
          parentAccountId:
            formData.parentAccount === "null" ? null : formData.parentAccount,
          description: formData.description || null,
          isActive: formData.isActive,
          reportingCategory: formData.reportingCategory || null,
          taxCode: formData.taxCode || null,
          balance: 0,
          level: 0,
          children: [],
        };

        // If it has a parent, add it to the parent's children
        if (newAccountObj.parentAccountId) {
          const updatedAccounts = accounts.map((account) => {
            if (account.id === newAccountObj.parentAccountId) {
              return {
                ...account,
                children: [...(account.children || []), newAccountObj],
              };
            }
            return account;
          });
          setAccounts(updatedAccounts);
        } else {
          // Otherwise add it as a top-level account
          setAccounts([...accounts, newAccountObj]);
        }

        // Always refresh accounts from the database to ensure we have the latest data
        try {
          console.log("Refreshing accounts after creation");
          const updatedAccounts = await fetchAccounts(currentEntityId);
          console.log("Updated accounts:", updatedAccounts);
          setAccounts(updatedAccounts);
        } catch (refreshError) {
          console.error("Error refreshing accounts:", refreshError);
        }

        toast({
          title: "Success",
          description: "Account created successfully",
        });
      }
    } catch (error) {
      console.error("Error saving account:", error);
      toast({
        title: "Error",
        description: "Failed to save account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsFormOpen(false);
      setSelectedAccount(null);
    }
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
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
                </div>
              ) : (
                <AccountList
                  accounts={filteredAccounts}
                  onAddAccount={handleAddAccount}
                  onEditAccount={handleEditAccount}
                  onDeleteAccount={handleDeleteAccount}
                  onViewAccount={handleViewAccount}
                />
              )}
            </CardContent>
          </Card>

          {/* Account Form Dialog */}
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogContent className="sm:max-w-[800px] bg-slate-900 border-slate-800">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-white">
                  {editMode ? "Edit Account" : "Add New Account"}
                </DialogTitle>
              </DialogHeader>
              <AccountForm
                initialData={
                  selectedAccount
                    ? {
                        accountNumber: selectedAccount.accountNumber,
                        accountName: selectedAccount.accountName,
                        accountType: selectedAccount.accountType,
                        entityId: selectedAccount.entityId,
                        parentAccount:
                          selectedAccount.parentAccountId || "null",
                        description: selectedAccount.description || "",
                        isActive: selectedAccount.isActive,
                        reportingCategory:
                          selectedAccount.reportingCategory || "",
                        taxCode: selectedAccount.taxCode || "",
                      }
                    : undefined
                }
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
          onBack={() => {
            setViewMode("list");
            setSelectedAccount(null);
          }}
          onEdit={(account) => {
            handleEditAccount(account);
            setViewMode("list");
          }}
        />
      )}
    </div>
  );
};

export default ChartOfAccounts;
