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
import { Card, CardContent } from "@/components/ui/card";

interface PaymentTransaction {
  id: string;
  transactionId: string;
  date: string;
  gateway: string;
  amount: number;
  fee: number;
  status: "successful" | "failed" | "refunded" | "pending";
  paymentMethod: string;
  customer?: string;
}

const paymentTransactions: PaymentTransaction[] = [
  {
    id: "1",
    transactionId: "PYMT-2023-0001",
    date: "2023-06-28T09:15:32",
    gateway: "Stripe",
    amount: 249.95,
    fee: 7.55,
    status: "successful",
    paymentMethod: "Credit Card (Visa)",
    customer: "Sarah Johnson",
  },
  {
    id: "2",
    transactionId: "PYMT-2023-0002",
    date: "2023-06-28T10:22:15",
    gateway: "PayPal",
    amount: 89.98,
    fee: 3.63,
    status: "successful",
    paymentMethod: "PayPal",
  },
  {
    id: "3",
    transactionId: "PYMT-2023-0003",
    date: "2023-06-28T11:05:47",
    gateway: "Stripe",
    amount: 159.97,
    fee: 4.94,
    status: "refunded",
    paymentMethod: "Debit Card (Mastercard)",
    customer: "Michael Wilson",
  },
  {
    id: "4",
    transactionId: "PYMT-2023-0004",
    date: "2023-06-28T12:30:22",
    gateway: "Stripe",
    amount: 199.99,
    fee: 6.1,
    status: "successful",
    paymentMethod: "Credit Card (Amex)",
    customer: "Robert Brown",
  },
  {
    id: "5",
    transactionId: "PYMT-2023-0005",
    date: "2023-06-28T13:45:10",
    gateway: "Square",
    amount: 179.96,
    fee: 4.78,
    status: "failed",
    paymentMethod: "Credit Card (Visa)",
  },
  {
    id: "6",
    transactionId: "PYMT-2023-0006",
    date: "2023-06-28T14:20:35",
    gateway: "PayPal",
    amount: 99.98,
    fee: 3.98,
    status: "successful",
    paymentMethod: "PayPal",
  },
  {
    id: "7",
    transactionId: "PYMT-2023-0007",
    date: "2023-06-28T15:10:42",
    gateway: "Stripe",
    amount: 329.94,
    fee: 9.87,
    status: "pending",
    paymentMethod: "Credit Card (Mastercard)",
    customer: "Jennifer Taylor",
  },
];

const TransactionReports = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [gatewayFilter, setGatewayFilter] = React.useState("all");

  const filteredTransactions = paymentTransactions.filter(
    (transaction) =>
      (statusFilter === "all" || transaction.status === statusFilter) &&
      (gatewayFilter === "all" || transaction.gateway === gatewayFilter) &&
      (transaction.transactionId
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        transaction.paymentMethod
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        (transaction.customer &&
          transaction.customer
            .toLowerCase()
            .includes(searchTerm.toLowerCase()))),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "successful":
        return "bg-emerald-500/10 text-emerald-500";
      case "pending":
        return "bg-amber-500/10 text-amber-500";
      case "refunded":
        return "bg-blue-500/10 text-blue-500";
      case "failed":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const gateways = [
    ...new Set(paymentTransactions.map((transaction) => transaction.gateway)),
  ];

  const totalAmount = filteredTransactions.reduce(
    (sum, transaction) =>
      transaction.status !== "refunded" && transaction.status !== "failed"
        ? sum + transaction.amount
        : sum,
    0,
  );

  const totalFees = filteredTransactions.reduce(
    (sum, transaction) =>
      transaction.status !== "refunded" && transaction.status !== "failed"
        ? sum + transaction.fee
        : sum,
    0,
  );

  // Calculate payment method distribution
  const paymentMethods = filteredTransactions.reduce(
    (acc, transaction) => {
      if (
        transaction.status !== "refunded" &&
        transaction.status !== "failed" &&
        transaction.status !== "pending"
      ) {
        const method = transaction.paymentMethod.split(" ")[0]; // Get the main method (Credit Card, PayPal, etc.)
        acc[method] = (acc[method] || 0) + transaction.amount;
      }
      return acc;
    },
    {} as Record<string, number>,
  );

  const totalSuccessfulAmount = Object.values(paymentMethods).reduce(
    (sum, amount) => sum + amount,
    0,
  );

  return (
    <div className="space-y-6">
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
          <div className="text-sm font-medium text-slate-400">
            Transaction Volume
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalAmount)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Gateway Fees</div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalFees)}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Payment Method Distribution
            </h3>
            <div className="space-y-4">
              {Object.entries(paymentMethods).map(([method, amount]) => (
                <div key={method} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">
                      {method}
                    </span>
                    <span className="text-sm font-medium text-slate-300">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(amount)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 flex-1 rounded-full bg-slate-700">
                      <div
                        className="h-2 rounded-full bg-cyan-500"
                        style={{
                          width: `${(amount / totalSuccessfulAmount) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="w-12 text-right text-xs text-slate-400">
                      {Math.round((amount / totalSuccessfulAmount) * 100)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Transaction Status
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  status: "successful",
                  count: filteredTransactions.filter(
                    (t) => t.status === "successful",
                  ).length,
                  color: "bg-emerald-500",
                },
                {
                  status: "pending",
                  count: filteredTransactions.filter(
                    (t) => t.status === "pending",
                  ).length,
                  color: "bg-amber-500",
                },
                {
                  status: "refunded",
                  count: filteredTransactions.filter(
                    (t) => t.status === "refunded",
                  ).length,
                  color: "bg-blue-500",
                },
                {
                  status: "failed",
                  count: filteredTransactions.filter(
                    (t) => t.status === "failed",
                  ).length,
                  color: "bg-red-500",
                },
              ].map((item) => (
                <div
                  key={item.status}
                  className="rounded-lg border border-slate-700 bg-slate-800 p-4"
                >
                  <div className="flex items-center space-x-2">
                    <div className={`h-3 w-3 rounded-full ${item.color}`}></div>
                    <span className="text-sm font-medium text-slate-300">
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </span>
                  </div>
                  <div className="mt-2 text-2xl font-bold text-white">
                    {item.count}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
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
              <SelectItem value="successful">Successful</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="refunded">Refunded</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={gatewayFilter} onValueChange={setGatewayFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Gateway" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Gateways</SelectItem>
              {gateways.map((gateway) => (
                <SelectItem key={gateway} value={gateway}>
                  {gateway}
                </SelectItem>
              ))}
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
              <TableHead className="text-slate-300">Gateway</TableHead>
              <TableHead className="text-slate-300">Payment Method</TableHead>
              <TableHead className="text-slate-300">Customer</TableHead>
              <TableHead className="text-right text-slate-300">
                Amount
              </TableHead>
              <TableHead className="text-right text-slate-300">Fee</TableHead>
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
                <TableCell>{transaction.gateway}</TableCell>
                <TableCell>{transaction.paymentMethod}</TableCell>
                <TableCell>{transaction.customer || "Anonymous"}</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(transaction.amount)}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(transaction.fee)}
                </TableCell>
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
                    {transaction.status === "successful" && (
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

export default TransactionReports;
