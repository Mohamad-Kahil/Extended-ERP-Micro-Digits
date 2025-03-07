import React, { useState } from "react";
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

interface ComplianceRequirement {
  id: string;
  name: string;
  category:
    | "ISO"
    | "GDPR"
    | "Industry"
    | "Financial"
    | "Environmental"
    | "Health & Safety";
  status:
    | "compliant"
    | "non-compliant"
    | "in-progress"
    | "not-applicable"
    | "pending-review";
  dueDate: string;
  lastAuditDate?: string;
  nextAuditDate?: string;
  responsibleDepartment: string;
  riskLevel: "low" | "medium" | "high" | "critical";
  description: string;
}

interface ComplianceAuditProps {
  searchTerm: string;
}

const ComplianceAudit = ({ searchTerm }: ComplianceAuditProps) => {
  const [searchTerm2, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [riskFilter, setRiskFilter] = useState("all");
  const [selectedRequirement, setSelectedRequirement] = useState<string | null>(
    null,
  );

  const complianceRequirements: ComplianceRequirement[] = [
    {
      id: "1",
      name: "ISO 27001 - Information Security Management",
      category: "ISO",
      status: "compliant",
      dueDate: "2023-12-31",
      lastAuditDate: "2023-03-15",
      nextAuditDate: "2023-09-15",
      responsibleDepartment: "IT",
      riskLevel: "high",
      description:
        "Ensure information security controls are in place and effective",
    },
    {
      id: "2",
      name: "GDPR - Data Subject Access Requests",
      category: "GDPR",
      status: "compliant",
      dueDate: "2023-12-31",
      lastAuditDate: "2023-05-10",
      nextAuditDate: "2023-11-10",
      responsibleDepartment: "Legal",
      riskLevel: "high",
      description:
        "Process for handling data subject access requests within required timeframe",
    },
    {
      id: "3",
      name: "PCI DSS - Payment Card Security",
      category: "Industry",
      status: "in-progress",
      dueDate: "2023-08-15",
      lastAuditDate: "2022-08-20",
      nextAuditDate: "2023-08-20",
      responsibleDepartment: "Finance",
      riskLevel: "critical",
      description:
        "Compliance with Payment Card Industry Data Security Standard",
    },
    {
      id: "4",
      name: "SOX 404 - Internal Controls",
      category: "Financial",
      status: "compliant",
      dueDate: "2023-12-31",
      lastAuditDate: "2023-02-28",
      nextAuditDate: "2023-10-31",
      responsibleDepartment: "Finance",
      riskLevel: "high",
      description: "Internal controls over financial reporting",
    },
    {
      id: "5",
      name: "ISO 14001 - Environmental Management",
      category: "Environmental",
      status: "non-compliant",
      dueDate: "2023-09-30",
      lastAuditDate: "2023-04-05",
      nextAuditDate: "2023-07-15",
      responsibleDepartment: "Operations",
      riskLevel: "medium",
      description: "Environmental management system standards compliance",
    },
    {
      id: "6",
      name: "HIPAA - Health Information Privacy",
      category: "Industry",
      status: "not-applicable",
      dueDate: "2023-12-31",
      responsibleDepartment: "HR",
      riskLevel: "low",
      description:
        "Health Insurance Portability and Accountability Act compliance",
    },
    {
      id: "7",
      name: "ISO 9001 - Quality Management",
      category: "ISO",
      status: "compliant",
      dueDate: "2023-12-31",
      lastAuditDate: "2023-01-20",
      nextAuditDate: "2023-07-20",
      responsibleDepartment: "Operations",
      riskLevel: "medium",
      description: "Quality management system standards compliance",
    },
    {
      id: "8",
      name: "GDPR - Data Processing Agreements",
      category: "GDPR",
      status: "pending-review",
      dueDate: "2023-07-31",
      lastAuditDate: "2023-01-15",
      nextAuditDate: "2023-07-15",
      responsibleDepartment: "Legal",
      riskLevel: "high",
      description:
        "Ensure all third-party data processors have appropriate agreements in place",
    },
    {
      id: "9",
      name: "OSHA - Workplace Safety",
      category: "Health & Safety",
      status: "in-progress",
      dueDate: "2023-08-31",
      lastAuditDate: "2023-02-10",
      nextAuditDate: "2023-08-10",
      responsibleDepartment: "Facilities",
      riskLevel: "medium",
      description: "Occupational Safety and Health Administration compliance",
    },
  ];

  const categories = [
    ...new Set(complianceRequirements.map((req) => req.category)),
  ];
  const departments = [
    ...new Set(complianceRequirements.map((req) => req.responsibleDepartment)),
  ];

  const filteredRequirements = complianceRequirements.filter(
    (req) =>
      (categoryFilter === "all" || req.category === categoryFilter) &&
      (statusFilter === "all" || req.status === statusFilter) &&
      (riskFilter === "all" || req.riskLevel === riskFilter) &&
      (req.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        req.description.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const selectedRequirementData = selectedRequirement
    ? complianceRequirements.find((req) => req.id === selectedRequirement)
    : null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "compliant":
        return "bg-emerald-500/10 text-emerald-500";
      case "non-compliant":
        return "bg-red-500/10 text-red-500";
      case "in-progress":
        return "bg-amber-500/10 text-amber-500";
      case "not-applicable":
        return "bg-slate-500/10 text-slate-500";
      case "pending-review":
        return "bg-blue-500/10 text-blue-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-emerald-500/10 text-emerald-500";
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

  // Calculate statistics
  const compliantCount = complianceRequirements.filter(
    (req) => req.status === "compliant",
  ).length;
  const nonCompliantCount = complianceRequirements.filter(
    (req) => req.status === "non-compliant",
  ).length;
  const inProgressCount = complianceRequirements.filter(
    (req) => req.status === "in-progress",
  ).length;
  const complianceRate = Math.round(
    (compliantCount / complianceRequirements.length) * 100,
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Compliance Rate
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {complianceRate}%
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-slate-700">
            <div
              className="h-1.5 rounded-full bg-emerald-500"
              style={{ width: `${complianceRate}%` }}
            ></div>
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Compliant</div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {compliantCount}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Non-Compliant
          </div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {nonCompliantCount}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">In Progress</div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {inProgressCount}
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
              placeholder="Search requirements..."
              className="pl-8"
              value={searchTerm2}
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
              <SelectItem value="compliant">Compliant</SelectItem>
              <SelectItem value="non-compliant">Non-Compliant</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="not-applicable">Not Applicable</SelectItem>
              <SelectItem value="pending-review">Pending Review</SelectItem>
            </SelectContent>
          </Select>
          <Select value={riskFilter} onValueChange={setRiskFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Risk Levels</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
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
          Add Requirement
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Requirement</TableHead>
                  <TableHead className="text-slate-300">Category</TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                  <TableHead className="text-slate-300">Risk Level</TableHead>
                  <TableHead className="text-slate-300">Department</TableHead>
                  <TableHead className="text-slate-300">Due Date</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequirements.map((req) => (
                  <TableRow
                    key={req.id}
                    className={`border-slate-800 ${selectedRequirement === req.id ? "bg-slate-800/50" : ""}`}
                    onClick={() =>
                      setSelectedRequirement(
                        selectedRequirement === req.id ? null : req.id,
                      )
                    }
                  >
                    <TableCell className="font-medium text-slate-300">
                      {req.name}
                    </TableCell>
                    <TableCell>{req.category}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(req.status)}`}
                      >
                        {req.status
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1),
                          )
                          .join(" ")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getRiskLevelColor(req.riskLevel)}`}
                      >
                        {req.riskLevel.charAt(0).toUpperCase() +
                          req.riskLevel.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>{req.responsibleDepartment}</TableCell>
                    <TableCell>
                      {new Date(req.dueDate).toLocaleDateString()}
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
          {selectedRequirementData ? (
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {selectedRequirementData.name}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Description
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {selectedRequirementData.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Category
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedRequirementData.category}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Department
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedRequirementData.responsibleDepartment}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Status
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(selectedRequirementData.status)}`}
                        >
                          {selectedRequirementData.status
                            .split("-")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1),
                            )
                            .join(" ")}
                        </span>
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Risk Level
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getRiskLevelColor(selectedRequirementData.riskLevel)}`}
                        >
                          {selectedRequirementData.riskLevel
                            .charAt(0)
                            .toUpperCase() +
                            selectedRequirementData.riskLevel.slice(1)}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Due Date
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {new Date(
                          selectedRequirementData.dueDate,
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Last Audit
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedRequirementData.lastAuditDate
                          ? new Date(
                              selectedRequirementData.lastAuditDate,
                            ).toLocaleDateString()
                          : "N/A"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Next Audit
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {selectedRequirementData.nextAuditDate
                        ? new Date(
                            selectedRequirementData.nextAuditDate,
                          ).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>

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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Update Status
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
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                        <line x1="16" x2="22" y1="5" y2="5" />
                        <line x1="19" x2="19" y1="2" y2="8" />
                      </svg>
                      Schedule Audit
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 className="mb-1 text-lg font-medium text-slate-400">
                    Select a requirement
                  </h3>
                  <p className="text-sm text-slate-500">
                    Click on a requirement to view detailed information
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Compliance by Category
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => {
                const categoryRequirements = complianceRequirements.filter(
                  (req) => req.category === category,
                );
                const compliantInCategory = categoryRequirements.filter(
                  (req) => req.status === "compliant",
                ).length;
                const compliancePercentage = Math.round(
                  (compliantInCategory / categoryRequirements.length) * 100,
                );

                return (
                  <div
                    key={category}
                    className="rounded-lg border border-slate-700 bg-slate-800 p-4"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-300">
                        {category}
                      </span>
                      <span className="text-sm font-medium text-slate-300">
                        {compliancePercentage}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-700">
                      <div
                        className="h-2 rounded-full bg-emerald-500"
                        style={{ width: `${compliancePercentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Upcoming Audits
            </h3>
            <div className="space-y-4">
              {complianceRequirements
                .filter((req) => req.nextAuditDate)
                .sort(
                  (a, b) =>
                    new Date(a.nextAuditDate!).getTime() -
                    new Date(b.nextAuditDate!).getTime(),
                )
                .slice(0, 5)
                .map((req) => (
                  <div
                    key={req.id}
                    className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800 p-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`h-2 w-2 rounded-full ${getRiskLevelColor(req.riskLevel).split(" ")[0]}`}
                      ></div>
                      <div>
                        <p className="text-sm font-medium text-slate-300">
                          {req.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {req.responsibleDepartment}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-300">
                        {new Date(req.nextAuditDate!).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-slate-500">
                        {Math.ceil(
                          (new Date(req.nextAuditDate!).getTime() -
                            new Date().getTime()) /
                            (1000 * 60 * 60 * 24),
                        )}{" "}
                        days left
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComplianceAudit;
