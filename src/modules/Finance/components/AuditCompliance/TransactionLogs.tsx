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

interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  module: string;
  details: string;
  ipAddress: string;
}

interface TransactionLogsProps {
  searchTerm: string;
}

const auditLogs: AuditLog[] = [
  {
    id: "1",
    timestamp: "2023-06-28T09:15:32",
    user: "john.doe@example.com",
    action: "Create",
    module: "Journal Entry",
    details: "Created journal entry #JE-2023-156",
    ipAddress: "192.168.1.45",
  },
  {
    id: "2",
    timestamp: "2023-06-28T10:22:18",
    user: "jane.smith@example.com",
    action: "Update",
    module: "Chart of Accounts",
    details: "Updated account #1200 - Inventory",
    ipAddress: "192.168.1.78",
  },
  {
    id: "3",
    timestamp: "2023-06-28T11:05:47",
    user: "finance.admin@example.com",
    action: "Approve",
    module: "Invoice",
    details: "Approved invoice #INV-2023-078 for payment",
    ipAddress: "192.168.1.22",
  },
  {
    id: "4",
    timestamp: "2023-06-28T13:45:12",
    user: "john.doe@example.com",
    action: "Delete",
    module: "Journal Entry",
    details: "Deleted draft journal entry #JE-2023-157",
    ipAddress: "192.168.1.45",
  },
  {
    id: "5",
    timestamp: "2023-06-28T14:30:55",
    user: "system",
    action: "Generate",
    module: "Financial Report",
    details: "Generated monthly P&L report for June 2023",
    ipAddress: "192.168.1.1",
  },
  {
    id: "6",
    timestamp: "2023-06-28T15:12:33",
    user: "jane.smith@example.com",
    action: "Create",
    module: "Budget",
    details: "Created Q3 2023 budget for Marketing department",
    ipAddress: "192.168.1.78",
  },
  {
    id: "7",
    timestamp: "2023-06-28T16:05:21",
    user: "finance.admin@example.com",
    action: "Export",
    module: "General Ledger",
    details: "Exported general ledger data for audit",
    ipAddress: "192.168.1.22",
  },
  {
    id: "8",
    timestamp: "2023-06-28T16:45:09",
    user: "john.doe@example.com",
    action: "Update",
    module: "Vendor",
    details: "Updated vendor payment terms for Office Supplies Co.",
    ipAddress: "192.168.1.45",
  },
  {
    id: "9",
    timestamp: "2023-06-28T17:22:47",
    user: "system",
    action: "Backup",
    module: "System",
    details: "Completed daily financial data backup",
    ipAddress: "192.168.1.1",
  },
];

const TransactionLogs = ({ searchTerm }: TransactionLogsProps) => {
  const [filterAction, setFilterAction] = React.useState("all");

  const filteredLogs = auditLogs.filter(
    (log) =>
      (filterAction === "all" || log.action === filterAction) &&
      (log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.module.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select
            value={filterAction}
            onValueChange={(value) => setFilterAction(value)}
          >
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Filter by action" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Actions</SelectItem>
              <SelectItem value="Create">Create</SelectItem>
              <SelectItem value="Update">Update</SelectItem>
              <SelectItem value="Delete">Delete</SelectItem>
              <SelectItem value="Approve">Approve</SelectItem>
              <SelectItem value="Generate">Generate</SelectItem>
              <SelectItem value="Export">Export</SelectItem>
              <SelectItem value="Backup">Backup</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Timestamp</TableHead>
              <TableHead className="text-slate-300">User</TableHead>
              <TableHead className="text-slate-300">Action</TableHead>
              <TableHead className="text-slate-300">Module</TableHead>
              <TableHead className="text-slate-300">Details</TableHead>
              <TableHead className="text-slate-300">IP Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLogs.map((log) => (
              <TableRow key={log.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {new Date(log.timestamp).toLocaleString()}
                </TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      log.action === "Create"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : log.action === "Update"
                          ? "bg-blue-500/10 text-blue-500"
                          : log.action === "Delete"
                            ? "bg-red-500/10 text-red-500"
                            : log.action === "Approve"
                              ? "bg-purple-500/10 text-purple-500"
                              : "bg-slate-500/10 text-slate-500"
                    }`}
                  >
                    {log.action}
                  </span>
                </TableCell>
                <TableCell>{log.module}</TableCell>
                <TableCell className="max-w-xs truncate">
                  {log.details}
                </TableCell>
                <TableCell>{log.ipAddress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionLogs;
