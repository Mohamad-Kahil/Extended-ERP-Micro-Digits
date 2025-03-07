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

interface Patent {
  id: string;
  title: string;
  status: "Pending" | "Granted" | "Abandoned" | "Expired";
  filingDate: string;
  grantDate: string;
  expirationDate: string;
  inventors: string[];
  assignee: string;
  patentNumber: string;
  country: string;
}

interface PatentTrackerProps {
  searchTerm: string;
}

const PatentTracker = ({ searchTerm }: PatentTrackerProps) => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("all");

  const patents: Patent[] = [
    {
      id: "PAT-001",
      title: "Method and System for Secure Data Transmission",
      status: "Granted",
      filingDate: "2019-05-15",
      grantDate: "2021-08-22",
      expirationDate: "2039-05-15",
      inventors: ["Michael Chen", "Emily Davis"],
      assignee: "Micro Digits Inc.",
      patentNumber: "US10285649B2",
      country: "United States",
    },
    {
      id: "PAT-002",
      title: "Distributed Ledger Authentication System",
      status: "Pending",
      filingDate: "2021-03-10",
      grantDate: "",
      expirationDate: "",
      inventors: ["Robert Wilson", "Jennifer Lee"],
      assignee: "Micro Digits Inc.",
      patentNumber: "App. 17/248,392",
      country: "United States",
    },
    {
      id: "PAT-003",
      title: "Adaptive User Interface for Mobile Devices",
      status: "Granted",
      filingDate: "2018-11-05",
      grantDate: "2020-12-15",
      expirationDate: "2038-11-05",
      inventors: ["Lisa Garcia", "Kevin Martinez"],
      assignee: "Micro Digits Inc.",
      patentNumber: "EP3512345A1",
      country: "European Union",
    },
    {
      id: "PAT-004",
      title: "Energy-Efficient Cloud Computing Architecture",
      status: "Granted",
      filingDate: "2017-08-20",
      grantDate: "2019-10-30",
      expirationDate: "2037-08-20",
      inventors: ["Thomas Brown", "Michael Chen"],
      assignee: "Micro Digits Inc.",
      patentNumber: "US10567892B2",
      country: "United States",
    },
    {
      id: "PAT-005",
      title: "Quantum-Resistant Encryption Method",
      status: "Pending",
      filingDate: "2022-01-15",
      grantDate: "",
      expirationDate: "",
      inventors: ["Emily Davis", "David Miller"],
      assignee: "Micro Digits Inc.",
      patentNumber: "App. 17/562,981",
      country: "United States",
    },
    {
      id: "PAT-006",
      title: "Biometric Authentication for Wearable Devices",
      status: "Abandoned",
      filingDate: "2016-04-10",
      grantDate: "",
      expirationDate: "",
      inventors: ["Sarah Johnson", "James Anderson"],
      assignee: "Micro Digits Inc.",
      patentNumber: "App. 15/127,456",
      country: "United States",
    },
    {
      id: "PAT-007",
      title: "Predictive Maintenance System Using Machine Learning",
      status: "Granted",
      filingDate: "2019-09-25",
      grantDate: "2021-11-12",
      expirationDate: "2039-09-25",
      inventors: ["Robert Wilson", "Patricia Taylor"],
      assignee: "Micro Digits Inc.",
      patentNumber: "CN112345678A",
      country: "China",
    },
  ];

  const filteredPatents = patents.filter(
    (patent) =>
      (statusFilter === "all" || patent.status === statusFilter) &&
      (countryFilter === "all" || patent.country === countryFilter) &&
      (patent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patent.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patent.patentNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patent.inventors.some((inventor) =>
          inventor.toLowerCase().includes(searchTerm.toLowerCase()),
        )),
  );

  // Get unique countries for filter
  const countries = [...new Set(patents.map((patent) => patent.country))];

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
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Granted">Granted</SelectItem>
              <SelectItem value="Abandoned">Abandoned</SelectItem>
              <SelectItem value="Expired">Expired</SelectItem>
            </SelectContent>
          </Select>

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
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Patent ID</TableHead>
              <TableHead className="text-slate-300">Title</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Patent Number</TableHead>
              <TableHead className="text-slate-300">Filing Date</TableHead>
              <TableHead className="text-slate-300">Grant Date</TableHead>
              <TableHead className="text-slate-300">Inventors</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatents.map((patent) => (
              <TableRow key={patent.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {patent.id}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-slate-300">{patent.title}</div>
                    <div className="text-xs text-slate-500">
                      {patent.country}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      patent.status === "Granted"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : patent.status === "Pending"
                          ? "bg-blue-500/10 text-blue-500"
                          : patent.status === "Abandoned"
                            ? "bg-slate-500/10 text-slate-500"
                            : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {patent.status}
                  </span>
                </TableCell>
                <TableCell>{patent.patentNumber}</TableCell>
                <TableCell>
                  {new Date(patent.filingDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {patent.grantDate
                    ? new Date(patent.grantDate).toLocaleDateString()
                    : "--"}
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {patent.inventors.map((inventor, index) => (
                      <span
                        key={index}
                        className="inline-flex rounded-full bg-slate-800 px-2 py-0.5 text-xs"
                      >
                        {inventor}
                      </span>
                    ))}
                  </div>
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

export default PatentTracker;
