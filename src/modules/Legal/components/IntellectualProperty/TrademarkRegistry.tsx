import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Trademark {
  id: string;
  name: string;
  status: "Registered" | "Pending" | "Abandoned" | "Expired" | "Renewal Due";
  registrationNumber: string;
  filingDate: string;
  registrationDate: string;
  renewalDate: string;
  classes: string[];
  owner: string;
  country: string;
}

interface TrademarkRegistryProps {
  searchTerm: string;
}

const TrademarkRegistry = ({ searchTerm }: TrademarkRegistryProps) => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [classFilter, setClassFilter] = useState("all");

  const trademarks: Trademark[] = [
    {
      id: "TM-001",
      name: "MICRO DIGITS",
      status: "Registered",
      registrationNumber: "5,987,654",
      filingDate: "2018-03-15",
      registrationDate: "2019-05-22",
      renewalDate: "2029-05-22",
      classes: ["9", "42"],
      owner: "Micro Digits Inc.",
      country: "United States",
    },
    {
      id: "TM-002",
      name: "MICRODIGITS",
      status: "Registered",
      registrationNumber: "018123456",
      filingDate: "2018-04-10",
      registrationDate: "2019-06-15",
      renewalDate: "2029-06-15",
      classes: ["9", "42"],
      owner: "Micro Digits Inc.",
      country: "European Union",
    },
    {
      id: "TM-003",
      name: "DIGISECURE",
      status: "Registered",
      registrationNumber: "6,123,789",
      filingDate: "2019-08-05",
      registrationDate: "2020-10-12",
      renewalDate: "2030-10-12",
      classes: ["9", "42", "45"],
      owner: "Micro Digits Inc.",
      country: "United States",
    },
    {
      id: "TM-004",
      name: "CLOUDFLOW",
      status: "Pending",
      registrationNumber: "App. 97/654,321",
      filingDate: "2022-02-18",
      registrationDate: "",
      renewalDate: "",
      classes: ["9", "42"],
      owner: "Micro Digits Inc.",
      country: "United States",
    },
    {
      id: "TM-005",
      name: "QUANTUM SHIELD",
      status: "Registered",
      registrationNumber: "6,234,567",
      filingDate: "2020-05-20",
      registrationDate: "2021-07-15",
      renewalDate: "2023-10-15",
      classes: ["9", "42"],
      owner: "Micro Digits Inc.",
      country: "United States",
    },
    {
      id: "TM-006",
      name: "QUANTUM SHIELD",
      status: "Renewal Due",
      registrationNumber: "018765432",
      filingDate: "2020-06-10",
      registrationDate: "2021-08-05",
      renewalDate: "2023-08-05",
      classes: ["9", "42"],
      owner: "Micro Digits Inc.",
      country: "European Union",
    },
    {
      id: "TM-007",
      name: "DATAFLOW",
      status: "Abandoned",
      registrationNumber: "App. 97/123,456",
      filingDate: "2021-03-10",
      registrationDate: "",
      renewalDate: "",
      classes: ["9", "42"],
      owner: "Micro Digits Inc.",
      country: "United States",
    },
  ];

  // Get all unique classes across all trademarks
  const allClasses = new Set<string>();
  trademarks.forEach((tm) => {
    tm.classes.forEach((cls) => allClasses.add(cls));
  });
  const uniqueClasses = Array.from(allClasses).sort();

  const filteredTrademarks = trademarks.filter(
    (trademark) =>
      (statusFilter === "all" || trademark.status === statusFilter) &&
      (classFilter === "all" || trademark.classes.includes(classFilter)) &&
      (trademark.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trademark.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trademark.registrationNumber
          .toLowerCase()
          .includes(searchTerm.toLowerCase())),
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Registered">Registered</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Abandoned">Abandoned</SelectItem>
              <SelectItem value="Expired">Expired</SelectItem>
              <SelectItem value="Renewal Due">Renewal Due</SelectItem>
            </SelectContent>
          </Select>

          <Select value={classFilter} onValueChange={setClassFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              {uniqueClasses.map((cls) => (
                <SelectItem key={cls} value={cls}>
                  Class {cls}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Trademark ID</TableHead>
              <TableHead className="text-slate-300">Name</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Registration #</TableHead>
              <TableHead className="text-slate-300">Classes</TableHead>
              <TableHead className="text-slate-300">Filing Date</TableHead>
              <TableHead className="text-slate-300">Renewal Date</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTrademarks.map((trademark) => (
              <TableRow key={trademark.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {trademark.id}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-slate-300">{trademark.name}</div>
                    <div className="text-xs text-slate-500">
                      {trademark.country}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      trademark.status === "Registered"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : trademark.status === "Pending"
                          ? "bg-blue-500/10 text-blue-500"
                          : trademark.status === "Abandoned"
                            ? "bg-slate-500/10 text-slate-500"
                            : trademark.status === "Renewal Due"
                              ? "bg-amber-500/10 text-amber-500"
                              : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {trademark.status}
                  </span>
                </TableCell>
                <TableCell>{trademark.registrationNumber}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {trademark.classes.map((cls, index) => (
                      <span
                        key={index}
                        className="inline-flex rounded-full bg-slate-800 px-2 py-0.5 text-xs"
                      >
                        {cls}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(trademark.filingDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {trademark.renewalDate
                    ? new Date(trademark.renewalDate).toLocaleDateString()
                    : "--"}
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
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <span className="sr-only">View Document</span>
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

export default TrademarkRegistry;
