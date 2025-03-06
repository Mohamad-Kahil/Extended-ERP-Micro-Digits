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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Transaction {
  id: string;
  transactionId: string;
  date: string;
  cashier: string;
  items: number;
  total: number;
  paymentMethod: string;
  status: "completed" | "refunded" | "voided";
  customer?: string;
}

const transactions: Transaction[] = [
  {
    id: "1",
    transactionId: "TRX-2023-0001",
    date: "2023-06-28T09:15:32",
    cashier: "John Smith",
    items: 5,
    total: 249.95,
    paymentMethod: "Credit Card",
    status: "completed",
    customer: "Sarah Johnson",
  },
  {
    id: "2",
    transactionId: "TRX-2023-0002",
    date: "2023-06-28T10:22:15",
    cashier: "Emily Davis",
    items: 2,
    total: 89.98,
    paymentMethod: "Cash",
    status: "completed",
  },
  {
    id: "3",
    transactionId: "TRX-2023-0003",
    date: "2023-06-28T11:05:47",
    cashier: "John Smith",
    items: 3,
    total: 159.97,
    paymentMethod: "Debit Card",
    status: "refunded",
    customer: "Michael Wilson",
  },
  {
    id: "4",
    transactionId: "TRX-2023-0004",
    date: "2023-06-28T12:30:22",
    cashier: "Emily Davis",
    items: 1,
    total: 199.99,
    paymentMethod: "Credit Card",
    status: "completed",
    customer: "Robert Brown",
  },
  {
    id: "5",
    transactionId: "TRX-2023-0005",
    date: "2023-06-28T13:45:10",
    cashier: "John Smith",
    items: 4,
    total: 179.96,
    paymentMethod: "Mobile Payment",
    status: "voided",
  },
  {
    id: "6",
    transactionId: "TRX-2023-0006",
    date: "2023-06-28T14:20:35",
    cashier: "Emily Davis",
    items: 2,
    total: 99.98,
    paymentMethod: "Cash",
    status: "completed",
  },
  {
    id: "7",
    transactionId: "TRX-2023-0007",
    date: "2023-06-28T15:10:42",
    cashier: "John Smith",
    items: 6,
    total: 329.94,
    paymentMethod: "Credit Card",
    status: "completed",
    customer: "Jennifer Taylor",
  },
];

const TransactionHistory = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [dateFilter, setDateFilter] = React.useState("today");

  const filteredTransactions = transactions.filter(
    (transaction) =>
      (statusFilter === "all" || transaction.status === statusFilter) &&
      (transaction.transactionId
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        transaction.cashier.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (transaction.customer &&
          transaction.customer
            .toLowerCase()
            .includes(searchTerm.toLowerCase()))),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/10 text-emerald-500";
      case "refunded":
        return "bg-amber-500/10 text-amber-500";
      case "voided":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const totalSales = filteredTransactions
    .filter((t) => t.status === "completed")
    .reduce((sum, t) => sum + t.total, 0);

  const totalRefunds = filteredTransactions
    .filter((t) => t.status === "refunded")
    .reduce((sum, t) => sum + t.total, 0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Transactions
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {filteredTransactions.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Total Sales</div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalSales)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Refunds
          </div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalRefunds)}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <div className="relative w-full md:w-64">
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
              placeholder="Search transactions..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="refunded">Refunded</SelectItem>
              <SelectItem value="voided">Voided</SelectItem>
            </SelectContent>
          </Select>
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 md:w-auto">
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          Export Report
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Transaction ID</TableHead>
              <TableHead className="text-slate-300">Date & Time</TableHead>
              <TableHead className="text-slate-300">Cashier</TableHead>
              <TableHead className="text-slate-300">Customer</TableHead>
              <TableHead className="text-right text-slate-300">Items</TableHead>
              <TableHead className="text-right text-slate-300">Total</TableHead>
              <TableHead className="text-slate-300">Payment Method</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {transaction.transactionId}
                </TableCell>
                <TableCell>
                  {new Date(transaction.date).toLocaleString()}
                </TableCell>
                <TableCell>{transaction.cashier}</TableCell>
                <TableCell>
                  {transaction.customer || "Walk-in Customer"}
                </TableCell>
                <TableCell className="text-right">
                  {transaction.items}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(transaction.total)}
                </TableCell>
                <TableCell>{transaction.paymentMethod}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(transaction.status)}`}
                  >
                    {transaction.status.charAt(0).toUpperCase() +
                      transaction.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-1">
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
                        className="h-4 w-4 text-blue-500"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <span className="sr-only">View Details</span>
                    </Button>
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
                        <path d="M17 17h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2" />
                        <rect width="13" height="13" x="3" y="7" rx="2" />
                      </svg>
                      <span className="sr-only">Duplicate</span>
                    </Button>
                    {transaction.status === "completed" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-amber-500"
                      >
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
                          <path d="M3 7h18" />
                          <path d="M6 10h13" />
                          <path d="M9 13h10" />
                          <path d="M17 16h3" />
                          <path d="M12 16h.01" />
                          <path d="M21 16v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                        </svg>
                        <span className="sr-only">Print Receipt</span>
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionHistory;
