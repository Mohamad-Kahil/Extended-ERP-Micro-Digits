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

interface PayrollEntry {
  id: string;
  employeeName: string;
  employeeId: string;
  department: string;
  salary: number;
  payPeriod: string;
  status: "pending" | "processed" | "on-hold";
  paymentDate: string;
}

const payrollEntries: PayrollEntry[] = [
  {
    id: "1",
    employeeName: "John Doe",
    employeeId: "EMP001",
    department: "Engineering",
    salary: 5500,
    payPeriod: "Sept 1-30, 2023",
    status: "processed",
    paymentDate: "10/05/2023",
  },
  {
    id: "2",
    employeeName: "Jane Smith",
    employeeId: "EMP002",
    department: "Marketing",
    salary: 4800,
    payPeriod: "Sept 1-30, 2023",
    status: "processed",
    paymentDate: "10/05/2023",
  },
  {
    id: "3",
    employeeName: "Robert Johnson",
    employeeId: "EMP003",
    department: "Finance",
    salary: 6200,
    payPeriod: "Sept 1-30, 2023",
    status: "processed",
    paymentDate: "10/05/2023",
  },
  {
    id: "4",
    employeeName: "Emily Davis",
    employeeId: "EMP004",
    department: "Human Resources",
    salary: 4500,
    payPeriod: "Sept 1-30, 2023",
    status: "processed",
    paymentDate: "10/05/2023",
  },
  {
    id: "5",
    employeeName: "Michael Wilson",
    employeeId: "EMP005",
    department: "Operations",
    salary: 5100,
    payPeriod: "Sept 1-30, 2023",
    status: "on-hold",
    paymentDate: "Pending",
  },
  {
    id: "6",
    employeeName: "Sarah Brown",
    employeeId: "EMP006",
    department: "Sales",
    salary: 5300,
    payPeriod: "Sept 1-30, 2023",
    status: "pending",
    paymentDate: "Scheduled 10/05/2023",
  },
];

const PayrollProcessing = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [departmentFilter, setDepartmentFilter] = React.useState("all");

  const departments = [
    ...new Set(payrollEntries.map((entry) => entry.department)),
  ];

  const filteredEntries = payrollEntries.filter(
    (entry) =>
      (departmentFilter === "all" || entry.department === departmentFilter) &&
      (entry.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.employeeId.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "processed":
        return "bg-emerald-500/10 text-emerald-500";
      case "pending":
        return "bg-amber-500/10 text-amber-500";
      case "on-hold":
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
              placeholder="Search payroll..."
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

          {/* Status summary boxes */}
          <div className="flex space-x-2">
            <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
              <span className="text-xs font-medium text-emerald-500">
                Processed:{" "}
                {
                  payrollEntries.filter((entry) => entry.status === "processed")
                    .length
                }
              </span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
              <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
              <span className="text-xs font-medium text-amber-500">
                Pending:{" "}
                {
                  payrollEntries.filter((entry) => entry.status === "pending")
                    .length
                }
              </span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
              <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
              <span className="text-xs font-medium text-red-500">
                On Hold:{" "}
                {
                  payrollEntries.filter((entry) => entry.status === "on-hold")
                    .length
                }
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
          Process Payroll
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Employee</TableHead>
              <TableHead className="text-slate-300">ID</TableHead>
              <TableHead className="text-slate-300">Department</TableHead>
              <TableHead className="text-right text-slate-300">
                Salary
              </TableHead>
              <TableHead className="text-slate-300">Pay Period</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Payment Date</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEntries.map((entry) => (
              <TableRow key={entry.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {entry.employeeName}
                </TableCell>
                <TableCell>{entry.employeeId}</TableCell>
                <TableCell>{entry.department}</TableCell>
                <TableCell className="text-right">
                  ${entry.salary.toLocaleString()}
                </TableCell>
                <TableCell>{entry.payPeriod}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(entry.status)}`}
                  >
                    {entry.status.charAt(0).toUpperCase() +
                      entry.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>{entry.paymentDate}</TableCell>
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

export default PayrollProcessing;
