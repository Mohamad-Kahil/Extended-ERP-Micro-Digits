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

interface LeaveRequest {
  id: string;
  employeeName: string;
  employeeId: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  duration: number;
  status: "approved" | "pending" | "rejected";
  reason: string;
}

const leaveRequests: LeaveRequest[] = [
  {
    id: "1",
    employeeName: "Emily Davis",
    employeeId: "4",
    leaveType: "Vacation",
    startDate: "2023-07-10",
    endDate: "2023-07-14",
    duration: 5,
    status: "approved",
    reason: "Annual family vacation",
  },
  {
    id: "2",
    employeeName: "John Doe",
    employeeId: "1",
    leaveType: "Sick Leave",
    startDate: "2023-06-28",
    endDate: "2023-06-29",
    duration: 2,
    status: "approved",
    reason: "Flu",
  },
  {
    id: "3",
    employeeName: "Sarah Brown",
    employeeId: "6",
    leaveType: "Personal Leave",
    startDate: "2023-07-05",
    endDate: "2023-07-05",
    duration: 1,
    status: "pending",
    reason: "Family emergency",
  },
  {
    id: "4",
    employeeName: "Michael Wilson",
    employeeId: "5",
    leaveType: "Vacation",
    startDate: "2023-08-01",
    endDate: "2023-08-10",
    duration: 10,
    status: "pending",
    reason: "Summer vacation",
  },
  {
    id: "5",
    employeeName: "Robert Johnson",
    employeeId: "3",
    leaveType: "Sick Leave",
    startDate: "2023-06-15",
    endDate: "2023-06-16",
    duration: 2,
    status: "approved",
    reason: "Doctor's appointment",
  },
  {
    id: "6",
    employeeName: "David Miller",
    employeeId: "7",
    leaveType: "Bereavement",
    startDate: "2023-06-20",
    endDate: "2023-06-22",
    duration: 3,
    status: "approved",
    reason: "Family funeral",
  },
  {
    id: "7",
    employeeName: "Jane Smith",
    employeeId: "2",
    leaveType: "Vacation",
    startDate: "2023-07-24",
    endDate: "2023-08-04",
    duration: 10,
    status: "pending",
    reason: "Summer holiday",
  },
];

const LeaveAttendance = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const filteredRequests = leaveRequests.filter(
    (request) =>
      (statusFilter === "all" || request.status === statusFilter) &&
      (request.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.leaveType.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Pending Requests
          </div>
          <div className="mt-1 text-2xl font-bold text-amber-500">3</div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Approved This Month
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">4</div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Current On Leave
          </div>
          <div className="mt-1 text-2xl font-bold text-blue-500">1</div>
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
              placeholder="Search leave requests..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
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
          Request Leave
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Employee</TableHead>
              <TableHead className="text-slate-300">Leave Type</TableHead>
              <TableHead className="text-slate-300">Start Date</TableHead>
              <TableHead className="text-slate-300">End Date</TableHead>
              <TableHead className="text-slate-300">Duration</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Reason</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRequests.map((request) => (
              <TableRow key={request.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {request.employeeName}
                </TableCell>
                <TableCell>{request.leaveType}</TableCell>
                <TableCell>
                  {new Date(request.startDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(request.endDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{request.duration} days</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      request.status === "approved"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : request.status === "pending"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {request.status}
                  </span>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  {request.reason}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-1">
                    {request.status === "pending" && (
                      <>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
                          <span className="sr-only">Approve</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
                            className="h-4 w-4 text-red-500"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                          <span className="sr-only">Reject</span>
                        </Button>
                      </>
                    )}
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

export default LeaveAttendance;
