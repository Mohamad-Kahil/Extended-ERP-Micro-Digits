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

interface Inspection {
  id: string;
  reportNumber: string;
  product: string;
  batchNumber: string;
  inspectionDate: string;
  inspector: string;
  status: "passed" | "failed" | "pending";
  findings: string;
  severity: "low" | "medium" | "high" | "critical";
}

const inspections: Inspection[] = [
  {
    id: "1",
    reportNumber: "IR-2023-0001",
    product: "Smart Thermostat Model A",
    batchNumber: "B-2023-0045",
    inspectionDate: "2023-06-25",
    inspector: "John Smith",
    status: "passed",
    findings: "All tests passed. No issues found.",
    severity: "low",
  },
  {
    id: "2",
    reportNumber: "IR-2023-0002",
    product: "Smart Lock System",
    batchNumber: "B-2023-0046",
    inspectionDate: "2023-06-26",
    inspector: "Sarah Johnson",
    status: "failed",
    findings: "Battery connection issues in 5% of units.",
    severity: "medium",
  },
  {
    id: "3",
    reportNumber: "IR-2023-0003",
    product: "Security Camera Indoor",
    batchNumber: "B-2023-0047",
    inspectionDate: "2023-06-26",
    inspector: "Michael Brown",
    status: "passed",
    findings: "Minor cosmetic issues noted but within acceptable range.",
    severity: "low",
  },
  {
    id: "4",
    reportNumber: "IR-2023-0004",
    product: "Smart Doorbell Pro",
    batchNumber: "B-2023-0048",
    inspectionDate: "2023-06-27",
    inspector: "Emily Davis",
    status: "pending",
    findings:
      "Inspection in progress. Initial tests show potential issues with speaker volume.",
    severity: "medium",
  },
  {
    id: "5",
    reportNumber: "IR-2023-0005",
    product: "Motion Sensor V2",
    batchNumber: "B-2023-0049",
    inspectionDate: "2023-06-27",
    inspector: "John Smith",
    status: "failed",
    findings:
      "Significant sensitivity calibration issues. Entire batch requires rework.",
    severity: "critical",
  },
  {
    id: "6",
    reportNumber: "IR-2023-0006",
    product: "Smart Thermostat Model B",
    batchNumber: "B-2023-0050",
    inspectionDate: "2023-06-28",
    inspector: "Sarah Johnson",
    status: "pending",
    findings: "Inspection scheduled. Awaiting final assembly completion.",
    severity: "low",
  },
];

const InspectionReports = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const filteredInspections = inspections.filter(
    (inspection) =>
      (statusFilter === "all" || inspection.status === statusFilter) &&
      (inspection.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inspection.reportNumber
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        inspection.inspector.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "passed":
        return "bg-emerald-500/10 text-emerald-500";
      case "failed":
        return "bg-red-500/10 text-red-500";
      case "pending":
        return "bg-amber-500/10 text-amber-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "bg-blue-500/10 text-blue-500";
      case "medium":
        return "bg-amber-500/10 text-amber-500";
      case "high":
        return "bg-orange-500/10 text-orange-500";
      case "critical":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Inspections
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {inspections.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Pass Rate</div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {Math.round(
              (inspections.filter((i) => i.status === "passed").length /
                inspections.filter((i) => i.status !== "pending").length) *
                100,
            )}
            %
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Critical Issues
          </div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {inspections.filter((i) => i.severity === "critical").length}
          </div>
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
              placeholder="Search inspections..."
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
              <SelectItem value="passed">Passed</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
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
          New Inspection
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Report #</TableHead>
              <TableHead className="text-slate-300">Product</TableHead>
              <TableHead className="text-slate-300">Batch #</TableHead>
              <TableHead className="text-slate-300">Date</TableHead>
              <TableHead className="text-slate-300">Inspector</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Severity</TableHead>
              <TableHead className="text-slate-300">Findings</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInspections.map((inspection) => (
              <TableRow key={inspection.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {inspection.reportNumber}
                </TableCell>
                <TableCell>{inspection.product}</TableCell>
                <TableCell>{inspection.batchNumber}</TableCell>
                <TableCell>
                  {new Date(inspection.inspectionDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{inspection.inspector}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(inspection.status)}`}
                  >
                    {inspection.status.charAt(0).toUpperCase() +
                      inspection.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getSeverityColor(inspection.severity)}`}
                  >
                    {inspection.severity.charAt(0).toUpperCase() +
                      inspection.severity.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  {inspection.findings}
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

export default InspectionReports;
