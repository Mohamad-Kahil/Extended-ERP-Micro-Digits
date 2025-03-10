import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronRight,
  Edit,
  Trash2,
  Eye,
  Search,
  Plus,
} from "lucide-react";

export interface Account {
  id: string;
  accountNumber: string;
  accountName: string;
  accountType: "asset" | "liability" | "equity" | "revenue" | "expense";
  entityId: string;
  parentAccountId?: string;
  description?: string;
  isActive: boolean;
  reportingCategory?: string;
  taxCode?: string;
  balance: number;
  children?: Account[];
  level: number;
}

interface AccountListProps {
  accounts: Account[];
  onAddAccount: () => void;
  onEditAccount: (account: Account) => void;
  onDeleteAccount: (accountId: string) => void;
  onViewAccount: (account: Account) => void;
}

export function AccountList({
  accounts,
  onAddAccount,
  onEditAccount,
  onDeleteAccount,
  onViewAccount,
}: AccountListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedAccounts, setExpandedAccounts] = useState<
    Record<string, boolean>
  >({});

  const toggleExpand = (accountId: string) => {
    setExpandedAccounts((prev) => ({
      ...prev,
      [accountId]: !prev[accountId],
    }));
  };

  const isExpanded = (accountId: string) => {
    return !!expandedAccounts[accountId];
  };

  const filterAccounts = (
    accounts: Account[],
    searchTerm: string,
  ): Account[] => {
    if (!searchTerm) return accounts;

    return accounts.filter((account) => {
      const matchesSearch =
        account.accountNumber
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        account.accountName.toLowerCase().includes(searchTerm.toLowerCase());

      const hasMatchingChildren =
        account.children &&
        filterAccounts(account.children, searchTerm).length > 0;

      return matchesSearch || hasMatchingChildren;
    });
  };

  const filteredAccounts = filterAccounts(accounts, searchTerm);

  const renderAccountRow = (account: Account, isLastChild = false) => {
    const hasChildren = account.children && account.children.length > 0;
    const isAccountExpanded = isExpanded(account.id);

    return (
      <React.Fragment key={account.id}>
        <TableRow className="hover:bg-slate-800/50">
          <TableCell className="py-2">
            <div className="flex items-center">
              <div style={{ width: `${account.level * 20}px` }} />
              {hasChildren ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 mr-1"
                  onClick={() => toggleExpand(account.id)}
                >
                  {isAccountExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              ) : (
                <div className="w-7" />
              )}
              <span className="font-medium">{account.accountNumber}</span>
            </div>
          </TableCell>
          <TableCell className="py-2">{account.accountName}</TableCell>
          <TableCell className="py-2">
            <Badge
              variant="outline"
              className={`${
                account.accountType === "asset"
                  ? "border-blue-500 text-blue-500"
                  : account.accountType === "liability"
                    ? "border-red-500 text-red-500"
                    : account.accountType === "equity"
                      ? "border-green-500 text-green-500"
                      : account.accountType === "revenue"
                        ? "border-purple-500 text-purple-500"
                        : "border-orange-500 text-orange-500"
              }`}
            >
              {account.accountType.charAt(0).toUpperCase() +
                account.accountType.slice(1)}
            </Badge>
          </TableCell>
          <TableCell className="py-2 text-right">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(account.balance)}
          </TableCell>
          <TableCell className="py-2">
            <Badge
              variant="outline"
              className={`${account.isActive ? "border-emerald-500 text-emerald-500" : "border-slate-500 text-slate-500"}`}
            >
              {account.isActive ? "Active" : "Inactive"}
            </Badge>
          </TableCell>
          <TableCell className="py-2 text-right">
            <div className="flex justify-end space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => onViewAccount(account)}
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => onEditAccount(account)}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
                onClick={() => onDeleteAccount(account.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </TableCell>
        </TableRow>
        {isAccountExpanded &&
          hasChildren &&
          account.children!.map((child, index) =>
            renderAccountRow(child, index === account.children!.length - 1),
          )}
      </React.Fragment>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search accounts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button
          onClick={onAddAccount}
          className="bg-cyan-600 hover:bg-cyan-700"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Account
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800/50">
            <TableRow>
              <TableHead className="w-[180px]">Account Number</TableHead>
              <TableHead>Account Name</TableHead>
              <TableHead className="w-[120px]">Type</TableHead>
              <TableHead className="text-right w-[150px]">Balance</TableHead>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead className="text-right w-[120px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAccounts.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-4 text-slate-400"
                >
                  {searchTerm
                    ? "No accounts found matching your search"
                    : "No accounts found. Click 'Add Account' to create one."}
                </TableCell>
              </TableRow>
            ) : (
              filteredAccounts.map((account) => renderAccountRow(account))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
