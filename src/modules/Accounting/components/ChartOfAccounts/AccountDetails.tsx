import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit } from "lucide-react";
import { Account } from "./AccountList";

interface AccountDetailsProps {
  account: Account;
  onBack: () => void;
  onEdit: (account: Account) => void;
}

export function AccountDetails({
  account,
  onBack,
  onEdit,
}: AccountDetailsProps) {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="h-8 w-8 p-0"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-xl font-semibold text-white">
              Account Details
            </h2>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(account)}
            className="h-8"
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit Account
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-slate-400">
                Account Number
              </h3>
              <p className="mt-1 text-lg font-medium text-white">
                {account.accountNumber}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-400">
                Account Name
              </h3>
              <p className="mt-1 text-lg font-medium text-white">
                {account.accountName}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-400">
                Account Type
              </h3>
              <div className="mt-1">
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
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-400">Status</h3>
              <div className="mt-1">
                <Badge
                  variant="outline"
                  className={`${
                    account.isActive
                      ? "border-emerald-500 text-emerald-500"
                      : "border-slate-500 text-slate-500"
                  }`}
                >
                  {account.isActive ? "Active" : "Inactive"}
                </Badge>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-slate-400">
                Current Balance
              </h3>
              <p className="mt-1 text-lg font-medium text-white">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(account.balance)}
              </p>
            </div>
            {account.parentAccountId && (
              <div>
                <h3 className="text-sm font-medium text-slate-400">
                  Parent Account
                </h3>
                <p className="mt-1 text-lg font-medium text-white">
                  {account.parentAccountId}
                </p>
              </div>
            )}
            {account.reportingCategory && (
              <div>
                <h3 className="text-sm font-medium text-slate-400">
                  Reporting Category
                </h3>
                <p className="mt-1 text-lg font-medium text-white">
                  {account.reportingCategory}
                </p>
              </div>
            )}
            {account.taxCode && (
              <div>
                <h3 className="text-sm font-medium text-slate-400">Tax Code</h3>
                <p className="mt-1 text-lg font-medium text-white">
                  {account.taxCode}
                </p>
              </div>
            )}
          </div>
        </div>

        {account.description && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-slate-400">Description</h3>
            <p className="mt-1 text-white">{account.description}</p>
          </div>
        )}

        {account.children && account.children.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Child Accounts
            </h3>
            <div className="rounded-md border border-slate-800">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-800/50">
                    <th className="px-4 py-2 text-left text-xs font-medium text-slate-400">
                      Account Number
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-slate-400">
                      Account Name
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-slate-400">
                      Type
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-slate-400">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {account.children.map((child) => (
                    <tr
                      key={child.id}
                      className="border-b border-slate-800 hover:bg-slate-800/30"
                    >
                      <td className="px-4 py-2 text-sm text-slate-300">
                        {child.accountNumber}
                      </td>
                      <td className="px-4 py-2 text-sm text-slate-300">
                        {child.accountName}
                      </td>
                      <td className="px-4 py-2 text-sm text-slate-300">
                        {child.accountType.charAt(0).toUpperCase() +
                          child.accountType.slice(1)}
                      </td>
                      <td className="px-4 py-2 text-sm text-right text-slate-300">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(child.balance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
