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

interface JournalEntry {
  id: string;
  date: string;
  reference: string;
  description: string;
  debit: number;
  credit: number;
  status: "posted" | "draft" | "pending";
}

const journalEntries: JournalEntry[] = [
  {
    id: "1",
    date: "2023-06-15",
    reference: "INV-2023-001",
    description: "Sales Revenue - Product A",
    debit: 12500,
    credit: 12500,
    status: "posted",
  },
  {
    id: "2",
    date: "2023-06-18",
    reference: "EXP-2023-042",
    description: "Office Supplies Expense",
    debit: 750,
    credit: 750,
    status: "posted",
  },
  {
    id: "3",
    date: "2023-06-20",
    reference: "PAY-2023-103",
    description: "Employee Salary Payment",
    debit: 8500,
    credit: 8500,
    status: "posted",
  },
  {
    id: "4",
    date: "2023-06-22",
    reference: "INV-2023-002",
    description: "Sales Revenue - Product B",
    debit: 18750,
    credit: 18750,
    status: "posted",
  },
  {
    id: "5",
    date: "2023-06-25",
    reference: "BILL-2023-078",
    description: "Utility Bill Payment",
    debit: 1250,
    credit: 1250,
    status: "posted",
  },
  {
    id: "6",
    date: "2023-06-28",
    reference: "ADJ-2023-012",
    description: "Inventory Adjustment",
    debit: 3200,
    credit: 3200,
    status: "pending",
  },
  {
    id: "7",
    date: "2023-06-30",
    reference: "CLOSE-2023-06",
    description: "Month End Closing Entry",
    debit: 45000,
    credit: 45000,
    status: "draft",
  },
];

const JournalEntries = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredEntries = journalEntries.filter(
    (entry) =>
      entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.reference.toLowerCase().includes(searchTerm.toLowerCase()),
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
            placeholder="Search entries..."
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
          New Journal Entry
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Date</TableHead>
              <TableHead className="text-slate-300">Reference</TableHead>
              <TableHead className="text-slate-300">Description</TableHead>
              <TableHead className="text-right text-slate-300">Debit</TableHead>
              <TableHead className="text-right text-slate-300">
                Credit
              </TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEntries.map((entry) => (
              <TableRow key={entry.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {new Date(entry.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{entry.reference}</TableCell>
                <TableCell>{entry.description}</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(entry.debit)}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(entry.credit)}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      entry.status === "posted"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : entry.status === "pending"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-slate-500/10 text-slate-500"
                    }`}
                  >
                    {entry.status}
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

export default JournalEntries;
