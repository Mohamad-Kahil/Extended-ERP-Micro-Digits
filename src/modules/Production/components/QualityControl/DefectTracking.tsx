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
import { Card, CardContent } from "@/components/ui/card";

interface Defect {
  id: string;
  defectId: string;
  product: string;
  batchNumber: string;
  reportDate: string;
  category: string;
  description: string;
  status: "open" | "investigating" | "resolved" | "closed";
  severity: "low" | "medium" | "high" | "critical";
  assignedTo: string;
}

const defects: Defect[] = [
  {
    id: "1",
    defectId: "DEF-2023-0001",
    product: "Smart Thermostat Model A",
    batchNumber: "B-2023-0045",
    reportDate: "2023-06-20",
    category: "Hardware",
    description:
      "Temperature sensor calibration drift outside acceptable range",
    status: "resolved",
    severity: "medium",
    assignedTo: "Engineering Team A",
  },
  {
    id: "2",
    defectId: "DEF-2023-0002",
    product: "Smart Lock System",
    batchNumber: "B-2023-0046",
    reportDate: "2023-06-26",
    category: "Electrical",
    description: "Battery connection intermittent failure",
    status: "investigating",
    severity: "high",
    assignedTo: "Engineering Team B",
  },
  {
    id: "3",
    defectId: "DEF-2023-0003",
    product: "Security Camera Indoor",
    batchNumber: "B-2023-0047",
    reportDate: "2023-06-22",
    category: "Cosmetic",
    description: "Minor scratches on front panel",
    status: "closed",
    severity: "low",
    assignedTo: "Quality Team C",
  },
  {
    id: "4",
    defectId: "DEF-2023-0004",
    product: "Smart Doorbell Pro",
    batchNumber: "B-2023-0048",
    reportDate: "2023-06-27",
    category: "Software",
    description: "Audio volume inconsistent across units",
    status: "open",
    severity: "medium",
    assignedTo: "Software Team D",
  },
  {
    id: "5",
    defectId: "DEF-2023-0005",
    product: "Motion Sensor V2",
    batchNumber: "B-2023-0049",
    reportDate: "2023-06-27",
    category: "Hardware",
    description: "Sensitivity calibration significantly out of spec",
    status: "investigating",
    severity: "critical",
    assignedTo: "Engineering Team A",
  },
  {
    id: "6",
    defectId: "DEF-2023-0006",
    product: "Smart Thermostat Model B",
    batchNumber: "B-2023-0050",
    reportDate: "2023-06-28",
    category: "Packaging",
    description: "Incorrect user manual included in package",
    status: "resolved",
    severity: "low",
    assignedTo: "Quality Team C",
  },
];

const DefectTracking = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [categoryFilter, setCategoryFilter] = React.useState("all");

  const filteredDefects = defects.filter(
    (defect) =>
      (statusFilter === "all" || defect.status === statusFilter) &&
      (categoryFilter === "all" || defect.category === categoryFilter) &&
      (defect.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
        defect.defectId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        defect.description.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const categories = [...new Set(defects.map((defect) => defect.category))];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-500/10 text-blue-500";
      case "investigating":
        return "bg-amber-500/10 text-amber-500";
      case "resolved":
        return "bg-emerald-500/10 text-emerald-500";
      case "closed":
        return "bg-slate-500/10 text-slate-500";
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

  // Calculate defect statistics by category
  const defectsByCategory = categories.map((category) => {
    const categoryDefects = defects.filter((d) => d.category === category);
    const openDefects = categoryDefects.filter(
      (d) => d.status === "open" || d.status === "investigating",
    ).length;

    return {
      category,
      total: categoryDefects.length,
      open: openDefects,
      resolved: categoryDefects.filter(
        (d) => d.status === "resolved" || d.status === "closed",
      ).length,
    };
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Defects
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {defects.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Open Issues</div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {
              defects.filter(
                (d) => d.status === "open" || d.status === "investigating",
              ).length
            }
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Critical Defects
          </div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {defects.filter((d) => d.severity === "critical").length}
          </div>
        </div>
      </div>

      <Card className="border-slate-800 bg-slate-800/50">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Defects by Category
          </h3>
          <div className="space-y-4">
            {defectsByCategory.map((category) => (
              <div key={category.category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">
                    {category.category}
                  </span>
                  <span className="text-sm font-medium text-slate-300">
                    {category.open} open / {category.total} total
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 flex-1 rounded-full bg-slate-700">
                    <div
                      className="h-2 rounded-full bg-amber-500"
                      style={{
                        width: `${(category.open / category.total) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="w-12 text-right text-xs text-slate-400">
                    {Math.round((category.resolved / category.total) * 100)}%
                    resolved
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

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
              placeholder="Search defects..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
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
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="investigating">Investigating</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
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
          Report Defect
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Defect ID</TableHead>
              <TableHead className="text-slate-300">Product</TableHead>
              <TableHead className="text-slate-300">Category</TableHead>
              <TableHead className="text-slate-300">Report Date</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Severity</TableHead>
              <TableHead className="text-slate-300">Assigned To</TableHead>
              <TableHead className="text-slate-300">Description</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDefects.map((defect) => (
              <TableRow key={defect.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {defect.defectId}
                </TableCell>
                <TableCell>{defect.product}</TableCell>
                <TableCell>{defect.category}</TableCell>
                <TableCell>
                  {new Date(defect.reportDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(defect.status)}`}
                  >
                    {defect.status.charAt(0).toUpperCase() +
                      defect.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getSeverityColor(defect.severity)}`}
                  >
                    {defect.severity.charAt(0).toUpperCase() +
                      defect.severity.slice(1)}
                  </span>
                </TableCell>
                <TableCell>{defect.assignedTo}</TableCell>
                <TableCell className="max-w-xs truncate">
                  {defect.description}
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

export default DefectTracking;
