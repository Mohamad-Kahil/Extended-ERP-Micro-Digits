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

interface TaxRecord {
  id: string;
  taxType: string;
  period: string;
  dueDate: string;
  amount: number;
  status: "filed" | "pending" | "overdue";
  filingDate?: string;
}

const taxRecords: TaxRecord[] = [
  {
    id: "1",
    taxType: "Income Tax",
    period: "Q1 2023",
    dueDate: "2023-04-15",
    amount: 45000,
    status: "filed",
    filingDate: "2023-04-10",
  },
  {
    id: "2",
    taxType: "Sales Tax",
    period: "March 2023",
    dueDate: "2023-04-20",
    amount: 12500,
    status: "filed",
    filingDate: "2023-04-18",
  },
  {
    id: "3",
    taxType: "Payroll Tax",
    period: "Q1 2023",
    dueDate: "2023-04-30",
    amount: 28750,
    status: "filed",
    filingDate: "2023-04-25",
  },
  {
    id: "4",
    taxType: "Sales Tax",
    period: "April 2023",
    dueDate: "2023-05-20",
    amount: 13200,
    status: "filed",
    filingDate: "2023-05-15",
  },
  {
    id: "5",
    taxType: "Property Tax",
    period: "Annual 2023",
    dueDate: "2023-06-30",
    amount: 35000,
    status: "pending",
  },
  {
    id: "6",
    taxType: "Income Tax",
    period: "Q2 2023",
    dueDate: "2023-07-15",
    amount: 52000,
    status: "pending",
  },
  {
    id: "7",
    taxType: "Sales Tax",
    period: "May 2023",
    dueDate: "2023-06-20",
    amount: 14500,
    status: "overdue",
  },
];

const TaxCompliance = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState("all");

  const filteredRecords = taxRecords.filter(
    (record) =>
      (filterStatus === "all" || record.status === filterStatus) &&
      (record.taxType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.period.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const pendingAmount = taxRecords
    .filter(
      (record) => record.status === "pending" || record.status === "overdue",
    )
    .reduce((sum, record) => sum + record.amount, 0);

  const overdueAmount = taxRecords
    .filter((record) => record.status === "overdue")
    .reduce((sum, record) => sum + record.amount, 0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Pending
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(pendingAmount)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Overdue</div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(overdueAmount)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Next Due Date
          </div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            June 20, 2023
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
              placeholder="Search tax records..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select
            value={filterStatus}
            onValueChange={(value) => setFilterStatus(value)}
          >
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Records</SelectItem>
              <SelectItem value="filed">Filed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Add Tax Record
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Tax Type</TableHead>
              <TableHead className="text-slate-300">Period</TableHead>
              <TableHead className="text-slate-300">Due Date</TableHead>
              <TableHead className="text-right text-slate-300">
                Amount
              </TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Filing Date</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRecords.map((record) => (
              <TableRow key={record.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {record.taxType}
                </TableCell>
                <TableCell>{record.period}</TableCell>
                <TableCell>
                  {new Date(record.dueDate).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(record.amount)}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      record.status === "filed"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : record.status === "pending"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {record.status}
                  </span>
                </TableCell>
                <TableCell>
                  {record.filingDate
                    ? new Date(record.filingDate).toLocaleDateString()
                    : "-"}
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
                    {record.status !== "filed" && (
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
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span className="sr-only">Mark as Filed</span>
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

export default TaxCompliance;
