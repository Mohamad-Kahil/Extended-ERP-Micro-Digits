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

interface Invoice {
  id: string;
  customer: string;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
}

const invoices: Invoice[] = [
  {
    id: "1",
    customer: "Acme Corporation",
    invoiceNumber: "INV-2023-001",
    date: "2023-06-01",
    dueDate: "2023-07-01",
    amount: 12500.0,
    status: "pending",
  },
  {
    id: "2",
    customer: "Global Industries Ltd.",
    invoiceNumber: "INV-2023-002",
    date: "2023-05-15",
    dueDate: "2023-06-15",
    amount: 8750.5,
    status: "overdue",
  },
  {
    id: "3",
    customer: "Tech Innovations Inc.",
    invoiceNumber: "INV-2023-003",
    date: "2023-06-10",
    dueDate: "2023-07-10",
    amount: 15000.0,
    status: "pending",
  },
  {
    id: "4",
    customer: "Retail Solutions Co.",
    invoiceNumber: "INV-2023-004",
    date: "2023-05-01",
    dueDate: "2023-06-01",
    amount: 5250.75,
    status: "paid",
  },
  {
    id: "5",
    customer: "Manufacturing Partners",
    invoiceNumber: "INV-2023-005",
    date: "2023-06-05",
    dueDate: "2023-07-05",
    amount: 18750.25,
    status: "pending",
  },
];

const AccountsReceivable = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalReceivable = invoices
    .filter(
      (invoice) => invoice.status === "pending" || invoice.status === "overdue",
    )
    .reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Receivable
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalReceivable)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Overdue</div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(8750.5)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Due This Week
          </div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(12500.0)}
          </div>
        </div>
      </div>

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
            placeholder="Search invoices..."
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
          New Invoice
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Customer</TableHead>
              <TableHead className="text-slate-300">Invoice #</TableHead>
              <TableHead className="text-slate-300">Date</TableHead>
              <TableHead className="text-slate-300">Due Date</TableHead>
              <TableHead className="text-right text-slate-300">
                Amount
              </TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInvoices.map((invoice) => (
              <TableRow key={invoice.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {invoice.customer}
                </TableCell>
                <TableCell>{invoice.invoiceNumber}</TableCell>
                <TableCell>
                  {new Date(invoice.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(invoice.dueDate).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(invoice.amount)}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      invoice.status === "paid"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : invoice.status === "pending"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {invoice.status}
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
                        className="h-4 w-4"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                      <span className="sr-only">Edit</span>
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
                        className="h-4 w-4 text-blue-500"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                      </svg>
                      <span className="sr-only">Send</span>
                    </Button>
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

export default AccountsReceivable;
