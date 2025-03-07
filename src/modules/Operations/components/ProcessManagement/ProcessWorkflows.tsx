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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Process {
  id: string;
  name: string;
  department: string;
  owner: string;
  status: "active" | "pending" | "draft" | "archived";
  lastUpdated: string;
  steps: number;
  efficiency: number;
}

interface ProcessWorkflowsProps {
  searchTerm: string;
}

const processes: Process[] = [
  {
    id: "PROC-001",
    name: "Order Fulfillment",
    department: "Logistics",
    owner: "Sarah Johnson",
    status: "active",
    lastUpdated: "2023-09-15",
    steps: 8,
    efficiency: 92,
  },
  {
    id: "PROC-002",
    name: "Customer Onboarding",
    department: "Sales",
    owner: "Michael Chen",
    status: "active",
    lastUpdated: "2023-09-10",
    steps: 6,
    efficiency: 88,
  },
  {
    id: "PROC-003",
    name: "Invoice Processing",
    department: "Finance",
    owner: "Jessica Williams",
    status: "active",
    lastUpdated: "2023-09-12",
    steps: 5,
    efficiency: 95,
  },
  {
    id: "PROC-004",
    name: "Employee Onboarding",
    department: "HR",
    owner: "David Miller",
    status: "pending",
    lastUpdated: "2023-09-08",
    steps: 12,
    efficiency: 78,
  },
  {
    id: "PROC-005",
    name: "Product Development",
    department: "R&D",
    owner: "Emily Taylor",
    status: "active",
    lastUpdated: "2023-09-14",
    steps: 15,
    efficiency: 85,
  },
  {
    id: "PROC-006",
    name: "Quality Assurance",
    department: "Production",
    owner: "Robert Garcia",
    status: "active",
    lastUpdated: "2023-09-11",
    steps: 7,
    efficiency: 90,
  },
  {
    id: "PROC-007",
    name: "Vendor Management",
    department: "Procurement",
    owner: "Amanda Lewis",
    status: "draft",
    lastUpdated: "2023-09-05",
    steps: 9,
    efficiency: 0,
  },
];

const ProcessWorkflows = ({ searchTerm }: ProcessWorkflowsProps) => {
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [departmentFilter, setDepartmentFilter] = React.useState("all");

  const filteredProcesses = processes.filter(
    (process) =>
      (statusFilter === "all" || process.status === statusFilter) &&
      (departmentFilter === "all" || process.department === departmentFilter) &&
      (process.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        process.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
        process.id.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const departments = [
    ...new Set(processes.map((process) => process.department)),
  ];

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
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Department" />
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
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Process ID</TableHead>
              <TableHead className="text-slate-300">Process Name</TableHead>
              <TableHead className="text-slate-300">Department</TableHead>
              <TableHead className="text-slate-300">Owner</TableHead>
              <TableHead className="text-slate-300">Steps</TableHead>
              <TableHead className="text-slate-300">Efficiency</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Last Updated</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProcesses.map((process) => (
              <TableRow key={process.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {process.id}
                </TableCell>
                <TableCell>{process.name}</TableCell>
                <TableCell>{process.department}</TableCell>
                <TableCell>{process.owner}</TableCell>
                <TableCell>{process.steps}</TableCell>
                <TableCell>
                  {process.status !== "draft" ? (
                    <div className="flex items-center">
                      <div className="w-16 h-2 bg-slate-700 rounded-full mr-2">
                        <div
                          className={`h-2 rounded-full ${process.efficiency >= 90 ? "bg-emerald-500" : process.efficiency >= 80 ? "bg-amber-500" : "bg-red-500"}`}
                          style={{ width: `${process.efficiency}%` }}
                        ></div>
                      </div>
                      <span className="text-xs">{process.efficiency}%</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-500">N/A</span>
                  )}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      process.status === "active"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : process.status === "pending"
                          ? "bg-amber-500/10 text-amber-500"
                          : process.status === "draft"
                            ? "bg-blue-500/10 text-blue-500"
                            : "bg-slate-500/10 text-slate-500"
                    }`}
                  >
                    {process.status}
                  </span>
                </TableCell>
                <TableCell>
                  {new Date(process.lastUpdated).toLocaleDateString()}
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

export default ProcessWorkflows;
