import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Account {
  id: string;
  code: string;
  name: string;
  type: string;
  balance: number;
  currency: string;
  status: "active" | "inactive";
}

const accounts: Account[] = [
  {
    id: "1",
    code: "1000",
    name: "Cash",
    type: "Asset",
    balance: 523650,
    currency: "USD",
    status: "active",
  },
  {
    id: "2",
    code: "1100",
    name: "Accounts Receivable",
    type: "Asset",
    balance: 187500,
    currency: "USD",
    status: "active",
  },
  {
    id: "3",
    code: "1200",
    name: "Inventory",
    type: "Asset",
    balance: 345200,
    currency: "USD",
    status: "active",
  },
  {
    id: "4",
    code: "2000",
    name: "Accounts Payable",
    type: "Liability",
    balance: 125400,
    currency: "USD",
    status: "active",
  },
  {
    id: "5",
    code: "3000",
    name: "Common Stock",
    type: "Equity",
    balance: 500000,
    currency: "USD",
    status: "active",
  },
  {
    id: "6",
    code: "4000",
    name: "Sales Revenue",
    type: "Revenue",
    balance: 1245300,
    currency: "USD",
    status: "active",
  },
  {
    id: "7",
    code: "5000",
    name: "Cost of Goods Sold",
    type: "Expense",
    balance: 623400,
    currency: "USD",
    status: "active",
  },
  {
    id: "8",
    code: "6000",
    name: "Operating Expenses",
    type: "Expense",
    balance: 253020,
    currency: "USD",
    status: "active",
  },
];

const ChartOfAccounts = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredAccounts = accounts.filter(
    (account) =>
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.code.includes(searchTerm),
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-2 top-2.5 h-4 w-4 text-slate-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <Input
            placeholder="Search accounts..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button className="bg-cyan-600 hover:bg-cyan-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Add Account
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Account Code</TableHead>
              <TableHead className="text-slate-300">Account Name</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-right text-slate-300">
                Balance
              </TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAccounts.map((account) => (
              <TableRow key={account.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {account.code}
                </TableCell>
                <TableCell>{account.name}</TableCell>
                <TableCell>{account.type}</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: account.currency,
                  }).format(account.balance)}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${account.status === "active" ? "bg-emerald-500/10 text-emerald-500" : "bg-slate-500/10 text-slate-500"}`}
                  >
                    {account.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                    <span className="sr-only">Edit</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ChartOfAccounts;
