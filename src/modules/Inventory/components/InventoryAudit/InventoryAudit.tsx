import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

interface AuditRecord {
  id: string;
  type: "Cycle Count" | "Full Inventory" | "Spot Check";
  location: string;
  status: "Completed" | "In Progress" | "Scheduled" | "Cancelled";
  date: string;
  discrepancies: number;
  accuracy: number;
  conductor: string;
}

const InventoryAudit = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedAudit, setSelectedAudit] = useState<string | null>(null);

  const audits: AuditRecord[] = [
    {
      id: "AUD-001",
      type: "Cycle Count",
      location: "Main Distribution Center - Electronics",
      status: "Completed",
      date: "2023-09-15",
      discrepancies: 12,
      accuracy: 98.5,
      conductor: "John Smith",
    },
    {
      id: "AUD-002",
      type: "Full Inventory",
      location: "East Coast Fulfillment",
      status: "Completed",
      date: "2023-09-10",
      discrepancies: 45,
      accuracy: 96.2,
      conductor: "Emily Davis",
    },
    {
      id: "AUD-003",
      type: "Spot Check",
      location: "West Coast Fulfillment - Clothing",
      status: "Completed",
      date: "2023-09-08",
      discrepancies: 3,
      accuracy: 99.1,
      conductor: "Michael Brown",
    },
    {
      id: "AUD-004",
      type: "Cycle Count",
      location: "Southern Distribution - Furniture",
      status: "In Progress",
      date: "2023-09-16",
      discrepancies: 8,
      accuracy: 97.8,
      conductor: "Lisa Garcia",
    },
    {
      id: "AUD-005",
      type: "Spot Check",
      location: "Main Distribution Center - Home Appliances",
      status: "Scheduled",
      date: "2023-09-20",
      discrepancies: 0,
      accuracy: 100,
      conductor: "Robert Johnson",
    },
    {
      id: "AUD-006",
      type: "Full Inventory",
      location: "Northwest Storage",
      status: "Scheduled",
      date: "2023-09-25",
      discrepancies: 0,
      accuracy: 100,
      conductor: "Sarah Williams",
    },
    {
      id: "AUD-007",
      type: "Cycle Count",
      location: "Midwest Overflow - Electronics",
      status: "Cancelled",
      date: "2023-09-05",
      discrepancies: 0,
      accuracy: 0,
      conductor: "David Miller",
    },
  ];

  const filteredAudits = audits.filter(
    (audit) =>
      (typeFilter === "all" || audit.type === typeFilter) &&
      (statusFilter === "all" || audit.status === statusFilter) &&
      (audit.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        audit.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        audit.conductor.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const selectedAuditData = selectedAudit
    ? audits.find((audit) => audit.id === selectedAudit)
    : null;

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Cycle Count":
        return "bg-blue-500/10 text-blue-500";
      case "Full Inventory":
        return "bg-purple-500/10 text-purple-500";
      case "Spot Check":
        return "bg-cyan-500/10 text-cyan-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-500/10 text-emerald-500";
      case "In Progress":
        return "bg-amber-500/10 text-amber-500";
      case "Scheduled":
        return "bg-blue-500/10 text-blue-500";
      case "Cancelled":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 99) return "text-emerald-500";
    if (accuracy >= 95) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Inventory Audit
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
              Export
            </Button>
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
              Schedule Audit
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative w-64">
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
                placeholder="Search audits..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Audit Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Cycle Count">Cycle Count</SelectItem>
                <SelectItem value="Full Inventory">Full Inventory</SelectItem>
                <SelectItem value="Spot Check">Spot Check</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Scheduled">Scheduled</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-md border border-slate-800">
              <Table>
                <TableHeader className="bg-slate-800">
                  <TableRow>
                    <TableHead className="text-slate-300">Audit ID</TableHead>
                    <TableHead className="text-slate-300">Type</TableHead>
                    <TableHead className="text-slate-300">Location</TableHead>
                    <TableHead className="text-slate-300">Date</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-slate-300">Accuracy</TableHead>
                    <TableHead className="text-right text-slate-300">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAudits.map((audit) => (
                    <TableRow
                      key={audit.id}
                      className={`border-slate-800 ${selectedAudit === audit.id ? "bg-slate-800/50" : ""}`}
                      onClick={() =>
                        setSelectedAudit(
                          selectedAudit === audit.id ? null : audit.id,
                        )
                      }
                    >
                      <TableCell className="font-medium text-slate-300">
                        {audit.id}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getTypeColor(audit.type)}`}
                        >
                          {audit.type}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="text-xs text-slate-300">
                          {audit.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(audit.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(audit.status)}`}
                        >
                          {audit.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        {audit.status === "Cancelled" ? (
                          <span className="text-slate-500">N/A</span>
                        ) : audit.status === "Scheduled" ? (
                          <span className="text-slate-500">Pending</span>
                        ) : (
                          <span className={getAccuracyColor(audit.accuracy)}>
                            {audit.accuracy}%
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-1">
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
                              className="h-4 w-4"
                            >
                              <path d="M12 20h9" />
                              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                            </svg>
                            <span className="sr-only">Edit</span>
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

          <div>
            {selectedAuditData ? (
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    Audit Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Audit ID
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedAuditData.id}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Type
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getTypeColor(selectedAuditData.type)}`}
                        >
                          {selectedAuditData.type}
                        </span>
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Status
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(selectedAuditData.status)}`}
                        >
                          {selectedAuditData.status}
                        </span>
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Location
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedAuditData.location}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">
                          Date
                        </h4>
                        <p className="mt-1 text-sm text-slate-300">
                          {new Date(
                            selectedAuditData.date,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">
                          Conducted By
                        </h4>
                        <p className="mt-1 text-sm text-slate-300">
                          {selectedAuditData.conductor}
                        </p>
                      </div>
                    </div>

                    {selectedAuditData.status !== "Scheduled" &&
                      selectedAuditData.status !== "Cancelled" && (
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-slate-400">
                              Discrepancies
                            </h4>
                            <p className="mt-1 text-sm text-slate-300">
                              {selectedAuditData.discrepancies} items
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-slate-400">
                              Accuracy
                            </h4>
                            <p
                              className={`mt-1 text-sm font-medium ${getAccuracyColor(selectedAuditData.accuracy)}`}
                            >
                              {selectedAuditData.accuracy}%
                            </p>
                          </div>
                        </div>
                      )}

                    <div className="mt-4 flex space-x-2">
                      {selectedAuditData.status === "In Progress" ? (
                        <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
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
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          Complete Audit
                        </Button>
                      ) : selectedAuditData.status === "Scheduled" ? (
                        <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
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
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="10 8 16 12 10 16 10 8" />
                          </svg>
                          Start Audit
                        </Button>
                      ) : (
                        <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
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
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                          </svg>
                          Edit Audit
                        </Button>
                      )}
                      <Button variant="outline" className="w-full">
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
                        Export Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="flex h-[400px] items-center justify-center p-6">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-4 text-slate-600"
                    >
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    </svg>
                    <h3 className="mb-1 text-lg font-medium text-slate-400">
                      Select an audit
                    </h3>
                    <p className="text-sm text-slate-500">
                      Click on an audit to view detailed information
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryAudit;
