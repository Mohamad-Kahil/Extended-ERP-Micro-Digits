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

interface Candidate {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  status:
    | "applied"
    | "screening"
    | "interview"
    | "offer"
    | "hired"
    | "rejected";
  applicationDate: string;
  source: string;
}

const candidates: Candidate[] = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    position: "Senior Developer",
    department: "Engineering",
    status: "interview",
    applicationDate: "09/15/2023",
    source: "LinkedIn",
  },
  {
    id: "2",
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    position: "Marketing Specialist",
    department: "Marketing",
    status: "screening",
    applicationDate: "09/18/2023",
    source: "Indeed",
  },
  {
    id: "3",
    name: "David Kim",
    email: "david.kim@example.com",
    position: "Financial Analyst",
    department: "Finance",
    status: "applied",
    applicationDate: "09/20/2023",
    source: "Company Website",
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    position: "HR Coordinator",
    department: "Human Resources",
    status: "offer",
    applicationDate: "09/10/2023",
    source: "Referral",
  },
  {
    id: "5",
    name: "James Wilson",
    email: "james.wilson@example.com",
    position: "Operations Manager",
    department: "Operations",
    status: "hired",
    applicationDate: "09/05/2023",
    source: "LinkedIn",
  },
  {
    id: "6",
    name: "Emma Brown",
    email: "emma.brown@example.com",
    position: "Sales Representative",
    department: "Sales",
    status: "rejected",
    applicationDate: "09/12/2023",
    source: "Indeed",
  },
];

const RecruitmentOnboarding = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [departmentFilter, setDepartmentFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const departments = [
    ...new Set(candidates.map((candidate) => candidate.department)),
  ];
  const statuses = [
    ...new Set(candidates.map((candidate) => candidate.status)),
  ];

  const filteredCandidates = candidates.filter(
    (candidate) =>
      (departmentFilter === "all" ||
        candidate.department === departmentFilter) &&
      (statusFilter === "all" || candidate.status === statusFilter) &&
      (candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.position.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "applied":
        return "bg-blue-500/10 text-blue-500";
      case "screening":
        return "bg-purple-500/10 text-purple-500";
      case "interview":
        return "bg-amber-500/10 text-amber-500";
      case "offer":
        return "bg-cyan-500/10 text-cyan-500";
      case "hired":
        return "bg-emerald-500/10 text-emerald-500";
      case "rejected":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
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
              placeholder="Search candidates..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map((department) => (
                <SelectItem key={department} value={department}>
                  {department}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Status summary boxes */}
          <div className="flex space-x-2">
            <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
              <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
              <span className="text-xs font-medium text-amber-500">
                In Process:{" "}
                {
                  candidates.filter((c) =>
                    ["applied", "screening", "interview", "offer"].includes(
                      c.status,
                    ),
                  ).length
                }
              </span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
              <span className="text-xs font-medium text-emerald-500">
                Hired: {candidates.filter((c) => c.status === "hired").length}
              </span>
            </div>
          </div>
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
          Add Candidate
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Name</TableHead>
              <TableHead className="text-slate-300">Email</TableHead>
              <TableHead className="text-slate-300">Position</TableHead>
              <TableHead className="text-slate-300">Department</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Application Date</TableHead>
              <TableHead className="text-slate-300">Source</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCandidates.map((candidate) => (
              <TableRow key={candidate.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {candidate.name}
                </TableCell>
                <TableCell>{candidate.email}</TableCell>
                <TableCell>{candidate.position}</TableCell>
                <TableCell>{candidate.department}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(candidate.status)}`}
                  >
                    {candidate.status.charAt(0).toUpperCase() +
                      candidate.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>{candidate.applicationDate}</TableCell>
                <TableCell>{candidate.source}</TableCell>
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

export default RecruitmentOnboarding;
