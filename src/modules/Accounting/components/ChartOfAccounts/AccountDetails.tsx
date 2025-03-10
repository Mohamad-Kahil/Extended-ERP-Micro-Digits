import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, ArrowLeft } from "lucide-react";
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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="pl-0">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Chart of Accounts
        </Button>
        <Button
          onClick={() => onEdit(account)}
          className="bg-cyan-600 hover:bg-cyan-700"
        >
          <Edit className="mr-2 h-4 w-4" /> Edit Account
        </Button>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              {account.accountNumber} - {account.accountName}
            </CardTitle>
            <Badge
              variant="outline"
              className={`${account.isActive ? "border-emerald-500 text-emerald-500" : "border-slate-500 text-slate-500"}`}
            >
              {account.isActive ? "Active" : "Inactive"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-slate-400">
                  Account Type
                </h3>
                <p className="mt-1 text-white">
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
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-400">
                  Current Balance
                </h3>
                <p className="mt-1 text-lg font-bold text-white">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(account.balance)}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-400">
                  Parent Account
                </h3>
                <p className="mt-1 text-white">
                  {account.parentAccountId
                    ? "[Parent Account Name]"
                    : "None (Top Level)"}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-400">
                  Description
                </h3>
                <p className="mt-1 text-white">
                  {account.description || "No description provided"}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-slate-400">
                  Reporting Category
                </h3>
                <p className="mt-1 text-white">
                  {account.reportingCategory || "Not specified"}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-400">Tax Code</h3>
                <p className="mt-1 text-white">
                  {account.taxCode || "Not specified"}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-400">
                  Created Date
                </h3>
                <p className="mt-1 text-white">[Creation Date]</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-400">
                  Last Modified
                </h3>
                <p className="mt-1 text-white">[Last Modified Date]</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-slate-400 mb-3">
              Recent Transactions
            </h3>
            <div className="rounded-md border border-slate-800 p-4 text-center text-slate-400">
              Transaction history will be displayed here
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
