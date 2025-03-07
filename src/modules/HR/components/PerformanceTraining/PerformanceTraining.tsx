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

interface PerformanceRecord {
  id: string;
  employeeName: string;
  employeeId: string;
  department: string;
  position: string;
  reviewType: "quarterly" | "annual" | "probation" | "training";
  status: "scheduled" | "in-progress" | "completed" | "overdue";
  score?: number;
  reviewDate: string;
  reviewedBy?: string;
}

const performanceRecords: PerformanceRecord[] = [
  {
    id: "1",
    employeeName: "John Doe",
    employeeId: "EMP001",
    department: "Engineering",
    position: "Senior Developer",
    reviewType: "quarterly",
    status: "completed",
    score: 4.5,
    reviewDate: "09/15/2023",
    reviewedBy: "Michael Scott",
  },
  {
    id: "2",
    employeeName: "Jane Smith",
    employeeId: "EMP002",
    department: "Marketing",
    position: "Marketing Manager",
    reviewType: "annual",
    status: "scheduled",
    reviewDate: "10/10/2023",
  },
  {
    id: "3",
    employeeName: "Robert Johnson",
    employeeId: "EMP003",
    department: "Finance",
    position: "Financial Analyst",
    reviewType: "quarterly",
    status: "in-progress",
    reviewDate: "09/28/2023",
  },
  {
    id: "4",
    employeeName: "Emily Davis",
    employeeId: "EMP004",
    department: "Human Resources",
    position: "HR Specialist",
    reviewType: "probation",
    status: "completed",
    score: 4.2,
    reviewDate: "09/05/2023",
    reviewedBy: "David Wallace",
  },
  {
    id: "5",
    employeeName: "Michael Wilson",
    employeeId: "EMP005",
    department: "Operations",
    position: "Operations Manager",
    reviewType: "quarterly",
    status: "overdue",
    reviewDate: "08/30/2023",
  },
  {
    id: "6",
    employeeName: "Sarah Brown",
    employeeId: "EMP006",
    department: "Sales",
    position: "Sales Representative",
    reviewType: "training",
    status: "completed",
    score: 3.8,
    reviewDate: "09/12/2023",
    reviewedBy: "Jim Halpert",
  },
];

const PerformanceTraining = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [departmentFilter, setDepartmentFilter] = React.useState("all");
  const [reviewTypeFilter, setReviewTypeFilter] = React.useState("all");

  const departments = [
    ...new Set(performanceRecords.map((record) => record.department)),
  ];
  const reviewTypes = [
    ...new Set(performanceRecords.map((record) => record.reviewType)),
  ];

  const filteredRecords = performanceRecords.filter(
    (record) =>
      (departmentFilter === "all" || record.department === departmentFilter) &&
      (reviewTypeFilter === "all" || record.reviewType === reviewTypeFilter) &&
      (record.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.position.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/10 text-emerald-500";
      case "in-progress":
        return "bg-blue-500/10 text-blue-500";
      case "scheduled":
        return "bg-amber-500/10 text-amber-500";
      case "overdue":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getReviewTypeColor = (type: string) => {
    switch (type) {
      case "quarterly":
        return "bg-blue-500/10 text-blue-500";
      case "annual":
        return "bg-purple-500/10 text-purple-500";
      case "probation":
        return "bg-amber-500/10 text-amber-500";
      case "training":
        return "bg-cyan-500/10 text-cyan-500";
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
              placeholder="Search reviews..."
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
          <Select value={reviewTypeFilter} onValueChange={setReviewTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="All Review Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Review Types</SelectItem>
              {reviewTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Status summary boxes */}
          <div className="flex space-x-2">
            <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
              <span className="text-xs font-medium text-emerald-500">
                Completed:{" "}
                {
                  performanceRecords.filter((r) => r.status === "completed")
                    .length
                }
              </span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
              <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
              <span className="text-xs font-medium text-amber-500">
                Pending:{" "}
                {
                  performanceRecords.filter((r) =>
                    ["scheduled", "in-progress"].includes(r.status),
                  ).length
                }
              </span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
              <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
              <span className="text-xs font-medium text-red-500">
                Overdue:{" "}
                {
                  performanceRecords.filter((r) => r.status === "overdue")
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
          Schedule Review
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Employee</TableHead>
              <TableHead className="text-slate-300">ID</TableHead>
              <TableHead className="text-slate-300">Department</TableHead>
              <TableHead className="text-slate-300">Position</TableHead>
              <TableHead className="text-slate-300">Review Type</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Score</TableHead>
              <TableHead className="text-slate-300">Review Date</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRecords.map((record) => (
              <TableRow key={record.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {record.employeeName}
                </TableCell>
                <TableCell>{record.employeeId}</TableCell>
                <TableCell>{record.department}</TableCell>
                <TableCell>{record.position}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getReviewTypeColor(record.reviewType)}`}
                  >
                    {record.reviewType.charAt(0).toUpperCase() +
                      record.reviewType.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(record.status)}`}
                  >
                    {record.status.charAt(0).toUpperCase() +
                      record.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>{record.score || "-"}</TableCell>
                <TableCell>{record.reviewDate}</TableCell>
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

export default PerformanceTraining;
