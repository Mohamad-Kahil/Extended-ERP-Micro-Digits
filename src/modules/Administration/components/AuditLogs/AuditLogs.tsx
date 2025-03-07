import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AuditLog {
  id: string;
  action: string;
  user: string;
  userEmail: string;
  timestamp: string;
  ipAddress: string;
  module: string;
  details: string;
  status: "success" | "warning" | "error";
}

const auditLogs: AuditLog[] = [
  {
    id: "LOG-001",
    action: "User Login",
    user: "John Smith",
    userEmail: "john.smith@example.com",
    timestamp: "2023-09-15T10:30:00",
    ipAddress: "192.168.1.100",
    module: "Authentication",
    details: "Successful login",
    status: "success",
  },
  {
    id: "LOG-002",
    action: "User Created",
    user: "Sarah Johnson",
    userEmail: "sarah.johnson@example.com",
    timestamp: "2023-09-15T09:15:00",
    ipAddress: "192.168.1.101",
    module: "User Management",
    details: "New user account created",
    status: "success",
  },
  {
    id: "LOG-003",
    action: "Permission Changed",
    user: "Michael Chen",
    userEmail: "michael.chen@example.com",
    timestamp: "2023-09-14T16:45:00",
    ipAddress: "192.168.1.102",
    module: "User Management",
    details: "Role changed from User to Manager",
    status: "warning",
  },
  {
    id: "LOG-004",
    action: "Failed Login Attempt",
    user: "Unknown",
    userEmail: "emily.taylor@example.com",
    timestamp: "2023-09-15T08:20:00",
    ipAddress: "192.168.1.103",
    module: "Authentication",
    details: "Invalid password provided",
    status: "error",
  },
  {
    id: "LOG-005",
    action: "System Configuration Changed",
    user: "Admin User",
    userEmail: "admin@example.com",
    timestamp: "2023-09-14T14:10:00",
    ipAddress: "192.168.1.104",
    module: "System Configuration",
    details: "Email settings updated",
    status: "success",
  },
  {
    id: "LOG-006",
    action: "Data Export",
    user: "Jessica Williams",
    userEmail: "jessica.williams@example.com",
    timestamp: "2023-09-14T11:30:00",
    ipAddress: "192.168.1.105",
    module: "Data Management",
    details: "Customer data exported to CSV",
    status: "warning",
  },
  {
    id: "LOG-007",
    action: "User Deleted",
    user: "Admin User",
    userEmail: "admin@example.com",
    timestamp: "2023-09-13T15:45:00",
    ipAddress: "192.168.1.104",
    module: "User Management",
    details: "User account removed: robert.garcia@example.com",
    status: "warning",
  },
  {
    id: "LOG-008",
    action: "Backup Created",
    user: "System",
    userEmail: "system@example.com",
    timestamp: "2023-09-15T00:00:00",
    ipAddress: "127.0.0.1",
    module: "Data Backup",
    details: "Automated daily backup completed",
    status: "success",
  },
  {
    id: "LOG-009",
    action: "API Access",
    user: "API Key: PROD_API",
    userEmail: "",
    timestamp: "2023-09-15T05:12:00",
    ipAddress: "203.0.113.45",
    module: "API",
    details: "GET /api/v1/products",
    status: "success",
  },
  {
    id: "LOG-010",
    action: "Unauthorized Access Attempt",
    user: "Unknown",
    userEmail: "",
    timestamp: "2023-09-14T22:30:00",
    ipAddress: "198.51.100.23",
    module: "Security",
    details: "Attempted access to restricted area",
    status: "error",
  },
];

const AuditLogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [moduleFilter, setModuleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  // Get unique modules for filter
  const modules = [...new Set(auditLogs.map((log) => log.module))];

  // Filter logs based on search and filters
  const filteredLogs = auditLogs.filter((log) => {
    const matchesSearch =
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.ipAddress.includes(searchTerm);

    const matchesModule = moduleFilter === "all" || log.module === moduleFilter;
    const matchesStatus = statusFilter === "all" || log.status === statusFilter;

    // Date filtering
    let matchesDate = true;
    const logDate = new Date(log.timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 7);

    if (dateFilter === "today") {
      matchesDate = logDate.toDateString() === today.toDateString();
    } else if (dateFilter === "yesterday") {
      matchesDate = logDate.toDateString() === yesterday.toDateString();
    } else if (dateFilter === "week") {
      matchesDate = logDate >= lastWeek;
    }

    return matchesSearch && matchesModule && matchesStatus && matchesDate;
  });

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Audit Logs
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline">
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Export Logs
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 space-y-4">
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
                  placeholder="Search logs..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={moduleFilter} onValueChange={setModuleFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Module" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Modules</SelectItem>
                  {modules.map((module) => (
                    <SelectItem key={module} value={module}>
                      {module}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                </SelectContent>
              </Select>

              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="week">Last 7 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex space-x-3">
            <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
              <span className="text-xs font-medium text-emerald-500">
                Success:{" "}
                {auditLogs.filter((log) => log.status === "success").length}
              </span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
              <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
              <span className="text-xs font-medium text-amber-500">
                Warning:{" "}
                {auditLogs.filter((log) => log.status === "warning").length}
              </span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
              <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
              <span className="text-xs font-medium text-red-500">
                Error:{" "}
                {auditLogs.filter((log) => log.status === "error").length}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-md border border-slate-800">
          <Table>
            <TableHeader className="bg-slate-800">
              <TableRow>
                <TableHead className="text-slate-300">Timestamp</TableHead>
                <TableHead className="text-slate-300">Action</TableHead>
                <TableHead className="text-slate-300">User</TableHead>
                <TableHead className="text-slate-300">Module</TableHead>
                <TableHead className="text-slate-300">IP Address</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-right text-slate-300">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id} className="border-slate-800">
                  <TableCell className="whitespace-nowrap">
                    {new Date(log.timestamp).toLocaleString()}
                  </TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell>
                    <div>
                      <div>{log.user}</div>
                      {log.userEmail && (
                        <div className="text-xs text-slate-500">
                          {log.userEmail}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{log.module}</TableCell>
                  <TableCell>{log.ipAddress}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                        log.status === "success"
                          ? "bg-emerald-500/10 text-emerald-500"
                          : log.status === "warning"
                            ? "bg-amber-500/10 text-amber-500"
                            : "bg-red-500/10 text-red-500"
                      }`}
                    >
                      {log.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuditLogs;
