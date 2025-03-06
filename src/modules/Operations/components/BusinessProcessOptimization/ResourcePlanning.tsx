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

interface Process {
  id: string;
  name: string;
  department: string;
  category: string;
  status: "optimized" | "in-review" | "needs-improvement" | "critical";
  cycleTime: number;
  resourceUtilization: number;
  wasteReduction?: number;
  costSavings?: number;
  implementationDate?: string;
  lastReviewDate: string;
  nextReviewDate: string;
  owner: string;
}

const processes: Process[] = [
  {
    id: "1",
    name: "Order Processing Workflow",
    department: "Sales",
    category: "Customer Service",
    status: "optimized",
    cycleTime: 2.5,
    resourceUtilization: 85,
    wasteReduction: 35,
    costSavings: 25000,
    implementationDate: "2023-05-15",
    lastReviewDate: "2023-09-10",
    nextReviewDate: "2023-12-10",
    owner: "Sarah Johnson",
  },
  {
    id: "2",
    name: "Inventory Management Process",
    department: "Warehouse",
    category: "Supply Chain",
    status: "in-review",
    cycleTime: 4.2,
    resourceUtilization: 68,
    lastReviewDate: "2023-09-25",
    nextReviewDate: "2023-10-25",
    owner: "Michael Chen",
  },
  {
    id: "3",
    name: "Customer Onboarding",
    department: "Customer Success",
    category: "Customer Service",
    status: "needs-improvement",
    cycleTime: 8.5,
    resourceUtilization: 55,
    lastReviewDate: "2023-08-15",
    nextReviewDate: "2023-10-15",
    owner: "Jessica Williams",
  },
  {
    id: "4",
    name: "Financial Reporting Process",
    department: "Finance",
    category: "Accounting",
    status: "optimized",
    cycleTime: 3.0,
    resourceUtilization: 90,
    wasteReduction: 45,
    costSavings: 35000,
    implementationDate: "2023-04-01",
    lastReviewDate: "2023-09-01",
    nextReviewDate: "2023-12-01",
    owner: "David Wilson",
  },
  {
    id: "5",
    name: "Employee Onboarding",
    department: "HR",
    category: "Human Resources",
    status: "in-review",
    cycleTime: 5.5,
    resourceUtilization: 72,
    lastReviewDate: "2023-09-20",
    nextReviewDate: "2023-10-20",
    owner: "Amanda Rodriguez",
  },
  {
    id: "6",
    name: "Production Line Setup",
    department: "Manufacturing",
    category: "Production",
    status: "critical",
    cycleTime: 12.0,
    resourceUtilization: 45,
    lastReviewDate: "2023-09-05",
    nextReviewDate: "2023-10-05",
    owner: "Robert Lee",
  },
  {
    id: "7",
    name: "IT Support Ticket Resolution",
    department: "IT",
    category: "Support",
    status: "needs-improvement",
    cycleTime: 6.8,
    resourceUtilization: 62,
    lastReviewDate: "2023-08-28",
    nextReviewDate: "2023-10-28",
    owner: "Thomas Garcia",
  },
  {
    id: "8",
    name: "Marketing Campaign Approval",
    department: "Marketing",
    category: "Marketing",
    status: "optimized",
    cycleTime: 2.2,
    resourceUtilization: 88,
    wasteReduction: 30,
    costSavings: 18000,
    implementationDate: "2023-06-10",
    lastReviewDate: "2023-09-15",
    nextReviewDate: "2023-12-15",
    owner: "Emma Thompson",
  },
  {
    id: "9",
    name: "Quality Control Inspection",
    department: "Quality Assurance",
    category: "Production",
    status: "in-review",
    cycleTime: 3.5,
    resourceUtilization: 75,
    lastReviewDate: "2023-09-18",
    nextReviewDate: "2023-10-18",
    owner: "James Miller",
  },
  {
    id: "10",
    name: "Procurement Process",
    department: "Procurement",
    category: "Supply Chain",
    status: "needs-improvement",
    cycleTime: 7.2,
    resourceUtilization: 58,
    lastReviewDate: "2023-08-10",
    nextReviewDate: "2023-10-10",
    owner: "Lisa Brown",
  },
];

interface ResourcePlanningProps {
  isLean?: boolean;
}

const ResourcePlanning = ({ isLean = false }: ResourcePlanningProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [departmentFilter, setDepartmentFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [selectedProcess, setSelectedProcess] = React.useState<string | null>(
    null,
  );

  const departments = [
    ...new Set(processes.map((process) => process.department)),
  ];
  const categories = [...new Set(processes.map((process) => process.category))];

  const filteredProcesses = processes.filter(
    (process) =>
      (departmentFilter === "all" || process.department === departmentFilter) &&
      (statusFilter === "all" || process.status === statusFilter) &&
      (categoryFilter === "all" || process.category === categoryFilter) &&
      (process.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        process.owner.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const selectedProcessData = selectedProcess
    ? processes.find((process) => process.id === selectedProcess)
    : null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimized":
        return "bg-emerald-500/10 text-emerald-500";
      case "in-review":
        return "bg-blue-500/10 text-blue-500";
      case "needs-improvement":
        return "bg-amber-500/10 text-amber-500";
      case "critical":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getUtilizationColor = (utilization: number) => {
    if (utilization >= 80) return "bg-emerald-500";
    if (utilization >= 60) return "bg-blue-500";
    if (utilization >= 40) return "bg-amber-500";
    return "bg-red-500";
  };

  // Calculate statistics
  const optimizedProcesses = processes.filter(
    (process) => process.status === "optimized",
  ).length;
  const inReviewProcesses = processes.filter(
    (process) => process.status === "in-review",
  ).length;
  const needsImprovementProcesses = processes.filter(
    (process) =>
      process.status === "needs-improvement" || process.status === "critical",
  ).length;

  const avgCycleTime = (
    processes.reduce((sum, process) => sum + process.cycleTime, 0) /
    processes.length
  ).toFixed(1);

  const avgResourceUtilization = (
    processes.reduce((sum, process) => sum + process.resourceUtilization, 0) /
    processes.length
  ).toFixed(1);

  const totalCostSavings = processes
    .filter((process) => process.costSavings)
    .reduce((sum, process) => sum + (process.costSavings || 0), 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            {isLean ? "Optimized Processes" : "Total Processes"}
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {isLean ? optimizedProcesses : processes.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            {isLean ? "Avg. Cycle Time" : "In Review"}
          </div>
          <div className="mt-1 text-2xl font-bold text-blue-500">
            {isLean ? `${avgCycleTime} days` : inReviewProcesses}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            {isLean ? "Avg. Resource Utilization" : "Needs Improvement"}
          </div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {isLean ? `${avgResourceUtilization}%` : needsImprovementProcesses}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            {isLean ? "Total Cost Savings" : "Resource Utilization"}
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {isLean
              ? new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }).format(totalCostSavings)
              : `${avgResourceUtilization}%`}
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
              placeholder="Search processes..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
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
              <SelectItem value="optimized">Optimized</SelectItem>
              <SelectItem value="in-review">In Review</SelectItem>
              <SelectItem value="needs-improvement">
                Needs Improvement
              </SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
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
          {isLean ? "Add Optimization Project" : "Add Process"}
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Process Name</TableHead>
              <TableHead className="text-slate-300">Department</TableHead>
              <TableHead className="text-slate-300">Category</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-right text-slate-300">
                Cycle Time (days)
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Resource Utilization
              </TableHead>
              {isLean && (
                <TableHead className="text-right text-slate-300">
                  Cost Savings
                </TableHead>
              )}
              <TableHead className="text-slate-300">Owner</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProcesses.map((process) => (
              <TableRow
                key={process.id}
                className={`border-slate-800 ${selectedProcess === process.id ? "bg-slate-800/50" : ""}`}
                onClick={() =>
                  setSelectedProcess(
                    selectedProcess === process.id ? null : process.id,
                  )
                }
              >
                <TableCell className="font-medium text-slate-300">
                  {process.name}
                </TableCell>
                <TableCell>{process.department}</TableCell>
                <TableCell>{process.category}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(process.status)}`}
                  >
                    {process.status === "needs-improvement"
                      ? "Needs Improvement"
                      : process.status === "in-review"
                        ? "In Review"
                        : process.status.charAt(0).toUpperCase() +
                          process.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  {process.cycleTime}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <div className="h-2 w-16 rounded-full bg-slate-700">
                      <div
                        className={`h-2 rounded-full ${getUtilizationColor(process.resourceUtilization)}`}
                        style={{ width: `${process.resourceUtilization}%` }}
                      ></div>
                    </div>
                    <span>{process.resourceUtilization}%</span>
                  </div>
                </TableCell>
                {isLean && (
                  <TableCell className="text-right">
                    {process.costSavings
                      ? new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          maximumFractionDigits: 0,
                        }).format(process.costSavings)
                      : "-"}
                  </TableCell>
                )}
                <TableCell>{process.owner}</TableCell>
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
                        className="h-4 w-4 text-blue-500"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <span className="sr-only">View Details</span>
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
                        className="h-4 w-4"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                      <span className="sr-only">Edit</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedProcessData && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {selectedProcessData.name}
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Department
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedProcessData.department}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Category
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedProcessData.category}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Owner
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedProcessData.owner}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Status
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(selectedProcessData.status)}`}
                        >
                          {selectedProcessData.status === "needs-improvement"
                            ? "Needs Improvement"
                            : selectedProcessData.status === "in-review"
                              ? "In Review"
                              : selectedProcessData.status
                                  .charAt(0)
                                  .toUpperCase() +
                                selectedProcessData.status.slice(1)}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Cycle Time
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedProcessData.cycleTime} days
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Resource Utilization
                      </h4>
                      <div className="mt-2 flex items-center space-x-2">
                        <div className="h-2 flex-1 rounded-full bg-slate-700">
                          <div
                            className={`h-2 rounded-full ${getUtilizationColor(selectedProcessData.resourceUtilization)}`}
                            style={{
                              width: `${selectedProcessData.resourceUtilization}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium text-slate-300">
                          {selectedProcessData.resourceUtilization}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {selectedProcessData.wasteReduction && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">
                          Waste Reduction
                        </h4>
                        <p className="mt-1 text-sm text-emerald-500">
                          {selectedProcessData.wasteReduction}%
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">
                          Cost Savings
                        </h4>
                        <p className="mt-1 text-sm font-medium text-emerald-500">
                          {selectedProcessData.costSavings
                            ? new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: 0,
                              }).format(selectedProcessData.costSavings)
                            : "-"}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Last Review Date
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {new Date(
                          selectedProcessData.lastReviewDate,
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Next Review Date
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {new Date(
                          selectedProcessData.nextReviewDate,
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {selectedProcessData.implementationDate && (
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Implementation Date
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {new Date(
                          selectedProcessData.implementationDate,
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  )}

                  <div className="mt-4 flex space-x-2">
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
                      Edit Process
                    </Button>
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Schedule Review
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {isLean ? "Optimization Metrics" : "Process Metrics"}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Cycle Time Trend
                    </h4>
                    <div className="mt-2 h-16 rounded-md border border-slate-700 bg-slate-800/50 p-2">
                      <div className="flex h-full items-end space-x-1">
                        {[
                          8.5,
                          7.2,
                          6.1,
                          5.0,
                          selectedProcessData.cycleTime,
                        ].map((value, index) => (
                          <div
                            key={index}
                            className="flex-1 bg-cyan-500"
                            style={{ height: `${(value / 10) * 100}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-slate-500">
                      <span>-4 Months</span>
                      <span>Current</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Resource Utilization Trend
                    </h4>
                    <div className="mt-2 h-16 rounded-md border border-slate-700 bg-slate-800/50 p-2">
                      <div className="flex h-full items-end space-x-1">
                        {[
                          45,
                          52,
                          60,
                          68,
                          selectedProcessData.resourceUtilization,
                        ].map((value, index) => (
                          <div
                            key={index}
                            className={`flex-1 ${getUtilizationColor(value)}`}
                            style={{ height: `${value}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-slate-500">
                      <span>-4 Months</span>
                      <span>Current</span>
                    </div>
                  </div>

                  {selectedProcessData.status === "optimized" && (
                    <div className="rounded-md border border-emerald-500/20 bg-emerald-500/5 p-3">
                      <h4 className="text-sm font-medium text-emerald-500">
                        Optimization Results
                      </h4>
                      <ul className="mt-2 space-y-1 text-sm text-slate-300">
                        <li className="flex items-start">
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
                            className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500"
                          >
                            <path d="m5 12 5 5 9-9" />
                          </svg>
                          Cycle time reduced by 45%
                        </li>
                        <li className="flex items-start">
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
                            className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500"
                          >
                            <path d="m5 12 5 5 9-9" />
                          </svg>
                          Resource utilization improved by 35%
                        </li>
                        <li className="flex items-start">
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
                            className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500"
                          >
                            <path d="m5 12 5 5 9-9" />
                          </svg>
                          Waste reduction of{" "}
                          {selectedProcessData.wasteReduction}%
                        </li>
                      </ul>
                    </div>
                  )}

                  {(selectedProcessData.status === "needs-improvement" ||
                    selectedProcessData.status === "critical") && (
                    <div className="rounded-md border border-red-500/20 bg-red-500/5 p-3">
                      <h4 className="text-sm font-medium text-red-500">
                        Improvement Opportunities
                      </h4>
                      <ul className="mt-2 space-y-1 text-sm text-slate-300">
                        <li className="flex items-start">
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
                            className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-red-500"
                          >
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                          </svg>
                          High cycle time compared to industry average
                        </li>
                        <li className="flex items-start">
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
                            className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-red-500"
                          >
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                          </svg>
                          Low resource utilization at{" "}
                          {selectedProcessData.resourceUtilization}%
                        </li>
                        <li className="flex items-start">
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
                            className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-red-500"
                          >
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                          </svg>
                          Multiple handoffs causing delays
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcePlanning;
