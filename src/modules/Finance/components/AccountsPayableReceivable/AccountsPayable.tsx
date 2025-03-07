import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Invoice {
  id: string;
  vendor: string;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
}

interface AccountsPayableProps {
  searchTerm: string;
}

const invoices: Invoice[] = [
  {
    id: "1",
    vendor: "Office Supplies Co.",
    invoiceNumber: "INV-2023-1234",
    date: "2023-06-01",
    dueDate: "2023-07-01",
    amount: 1250.75,
    status: "pending",
  },
  {
    id: "2",
    vendor: "Tech Hardware Inc.",
    invoiceNumber: "INV-2023-5678",
    date: "2023-05-15",
    dueDate: "2023-06-15",
    amount: 4500.0,
    status: "overdue",
  },
  {
    id: "3",
    vendor: "Cleaning Services LLC",
    invoiceNumber: "INV-2023-9012",
    date: "2023-06-10",
    dueDate: "2023-07-10",
    amount: 750.5,
    status: "pending",
  },
  {
    id: "4",
    vendor: "Marketing Agency Partners",
    invoiceNumber: "INV-2023-3456",
    date: "2023-05-01",
    dueDate: "2023-06-01",
    amount: 12500.0,
    status: "paid",
  },
  {
    id: "5",
    vendor: "Utility Provider Co.",
    invoiceNumber: "INV-2023-7890",
    date: "2023-06-05",
    dueDate: "2023-07-05",
    amount: 875.25,
    status: "pending",
  },
];

const AccountsPayable = ({ searchTerm }: AccountsPayableProps) => {
  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Vendor</TableHead>
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
                  {invoice.vendor}
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
                        className="h-4 w-4 text-emerald-500"
                      >
                        <path d="M2 12h20" />
                        <path d="M6 6h12" />
                        <path d="M12 18v-6" />
                      </svg>
                      <span className="sr-only">Pay</span>
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

export default AccountsPayable;
