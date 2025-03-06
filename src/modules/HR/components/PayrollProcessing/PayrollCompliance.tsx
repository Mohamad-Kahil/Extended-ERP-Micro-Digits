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

interface ComplianceRecord {
  id: string;
  country: string;
  taxType: string;
  filingFrequency: string;
  lastFiled: string;
  nextDue: string;
  status: "compliant" | "pending" | "overdue";
  notes: string;
}

const complianceRecords: ComplianceRecord[] = [
  {
    id: "1",
    country: "United States",
    taxType: "Federal Income Tax",
    filingFrequency: "Quarterly",
    lastFiled: "2023-04-15",
    nextDue: "2023-07-15",
    status: "pending",
    notes: "Q2 filing preparation in progress",
  },
  {
    id: "2",
    country: "United States",
    taxType: "Social Security & Medicare",
    filingFrequency: "Monthly",
    lastFiled: "2023-06-15",
    nextDue: "2023-07-15",
    status: "pending",
    notes: "June filing complete, July in preparation",
  },
  {
    id: "3",
    country: "United Kingdom",
    taxType: "PAYE",
    filingFrequency: "Monthly",
    lastFiled: "2023-06-22",
    nextDue: "2023-07-22",
    status: "pending",
    notes: "June filing complete, July in preparation",
  },
  {
    id: "4",
    country: "Germany",
    taxType: "Income Tax",
    filingFrequency: "Monthly",
    lastFiled: "2023-06-10",
    nextDue: "2023-07-10",
    status: "overdue",
    notes: "Awaiting final documentation from local office",
  },
  {
    id: "5",
    country: "Canada",
    taxType: "Federal Income Tax",
    filingFrequency: "Monthly",
    lastFiled: "2023-06-15",
    nextDue: "2023-07-15",
    status: "pending",
    notes: "June filing complete, July in preparation",
  },
  {
    id: "6",
    country: "Australia",
    taxType: "PAYG",
    filingFrequency: "Quarterly",
    lastFiled: "2023-04-28",
    nextDue: "2023-07-28",
    status: "pending",
    notes: "Q2 filing preparation in progress",
  },
  {
    id: "7",
    country: "France",
    taxType: "Social Security",
    filingFrequency: "Monthly",
    lastFiled: "2023-06-05",
    nextDue: "2023-07-05",
    status: "overdue",
    notes: "Awaiting final documentation from local office",
  },
];

const PayrollCompliance = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [countryFilter, setCountryFilter] = React.useState("all");

  const filteredRecords = complianceRecords.filter(
    (record) =>
      (countryFilter === "all" || record.country === countryFilter) &&
      (record.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.taxType.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const countries = [
    ...new Set(complianceRecords.map((record) => record.country)),
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Filings
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {complianceRecords.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Pending</div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {complianceRecords.filter((r) => r.status === "pending").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Overdue</div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {complianceRecords.filter((r) => r.status === "overdue").length}
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
              placeholder="Search compliance records..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={countryFilter} onValueChange={setCountryFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Add Compliance Record
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Country</TableHead>
              <TableHead className="text-slate-300">Tax Type</TableHead>
              <TableHead className="text-slate-300">Filing Frequency</TableHead>
              <TableHead className="text-slate-300">Last Filed</TableHead>
              <TableHead className="text-slate-300">Next Due</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Notes</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRecords.map((record) => (
              <TableRow key={record.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {record.country}
                </TableCell>
                <TableCell>{record.taxType}</TableCell>
                <TableCell>{record.filingFrequency}</TableCell>
                <TableCell>
                  {new Date(record.lastFiled).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(record.nextDue).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      record.status === "compliant"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : record.status === "pending"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {record.status}
                  </span>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  {record.notes}
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span className="sr-only">Mark as Compliant</span>
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

export default PayrollCompliance;
