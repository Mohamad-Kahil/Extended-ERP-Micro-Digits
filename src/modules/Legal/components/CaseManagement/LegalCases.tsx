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

interface LegalCase {
  id: string;
  title: string;
  type: string;
  status: "Active" | "Pending" | "Resolved" | "Closed";
  priority: "High" | "Medium" | "Low";
  assignedTo: string;
  dueDate: string;
  plaintiff: string;
  defendant: string;
}

interface LegalCasesProps {
  searchTerm: string;
}

const LegalCases = ({ searchTerm }: LegalCasesProps) => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const cases: LegalCase[] = [
    {
      id: "CASE-001",
      title: "Smith v. Company - Wrongful Termination",
      type: "Litigation",
      status: "Active",
      priority: "High",
      assignedTo: "Sarah Johnson",
      dueDate: "2023-10-15",
      plaintiff: "John Smith",
      defendant: "Micro Digits Inc.",
    },
    {
      id: "CASE-002",
      title: "Patent Infringement - Product X",
      type: "Intellectual Property",
      status: "Active",
      priority: "High",
      assignedTo: "Michael Chen",
      dueDate: "2023-11-20",
      plaintiff: "Micro Digits Inc.",
      defendant: "Tech Innovations LLC",
    },
    {
      id: "CASE-003",
      title: "Vendor Contract Dispute",
      type: "Contract",
      status: "Pending",
      priority: "Medium",
      assignedTo: "Jessica Williams",
      dueDate: "2023-10-30",
      plaintiff: "Micro Digits Inc.",
      defendant: "Supplier Co.",
    },
    {
      id: "CASE-004",
      title: "Regulatory Compliance Review",
      type: "Compliance",
      status: "Active",
      priority: "Medium",
      assignedTo: "David Miller",
      dueDate: "2023-09-28",
      plaintiff: "N/A",
      defendant: "N/A",
    },
    {
      id: "CASE-005",
      title: "Employee Discrimination Claim",
      type: "Employment",
      status: "Pending",
      priority: "High",
      assignedTo: "Sarah Johnson",
      dueDate: "2023-10-10",
      plaintiff: "Jane Doe",
      defendant: "Micro Digits Inc.",
    },
    {
      id: "CASE-006",
      title: "Merger Due Diligence",
      type: "Corporate",
      status: "Active",
      priority: "High",
      assignedTo: "Michael Chen",
      dueDate: "2023-11-15",
      plaintiff: "N/A",
      defendant: "N/A",
    },
    {
      id: "CASE-007",
      title: "Software License Dispute",
      type: "Intellectual Property",
      status: "Resolved",
      priority: "Medium",
      assignedTo: "Jessica Williams",
      dueDate: "2023-09-05",
      plaintiff: "Software Corp.",
      defendant: "Micro Digits Inc.",
    },
  ];

  const filteredCases = cases.filter(
    (legalCase) =>
      (statusFilter === "all" || legalCase.status === statusFilter) &&
      (typeFilter === "all" || legalCase.type === typeFilter) &&
      (legalCase.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        legalCase.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        legalCase.plaintiff.toLowerCase().includes(searchTerm.toLowerCase()) ||
        legalCase.defendant.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Get unique case types for filter
  const caseTypes = [...new Set(cases.map((legalCase) => legalCase.type))];

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
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Resolved">Resolved</SelectItem>
              <SelectItem value="Closed">Closed</SelectItem>
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Case Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {caseTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
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
              <TableHead className="text-slate-300">Case ID</TableHead>
              <TableHead className="text-slate-300">Title</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Priority</TableHead>
              <TableHead className="text-slate-300">Assigned To</TableHead>
              <TableHead className="text-slate-300">Due Date</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCases.map((legalCase) => (
              <TableRow key={legalCase.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {legalCase.id}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-slate-300">{legalCase.title}</div>
                    <div className="text-xs text-slate-500">
                      {legalCase.plaintiff !== "N/A" && (
                        <span>
                          {legalCase.plaintiff} vs. {legalCase.defendant}
                        </span>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{legalCase.type}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      legalCase.status === "Active"
                        ? "bg-blue-500/10 text-blue-500"
                        : legalCase.status === "Pending"
                          ? "bg-amber-500/10 text-amber-500"
                          : legalCase.status === "Resolved"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : "bg-slate-500/10 text-slate-500"
                    }`}
                  >
                    {legalCase.status}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      legalCase.priority === "High"
                        ? "bg-red-500/10 text-red-500"
                        : legalCase.priority === "Medium"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {legalCase.priority}
                  </span>
                </TableCell>
                <TableCell>{legalCase.assignedTo}</TableCell>
                <TableCell>
                  {new Date(legalCase.dueDate).toLocaleDateString()}
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
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <span className="sr-only">View Details</span>
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

export default LegalCases;
