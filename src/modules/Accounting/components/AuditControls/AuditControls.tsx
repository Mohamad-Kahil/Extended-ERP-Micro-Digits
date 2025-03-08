import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AuditControls = () => {
  const [activeTab, setActiveTab] = useState("internal-controls");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Control Effectiveness
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-500"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">92%</p>
          <div className="flex items-center text-xs text-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
            <span>3% from last quarter</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Open Audit Findings
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-500"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
              <path d="M10 9H8" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">7</p>
          <div className="flex items-center text-xs text-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="m19 12-7 7-7-7" />
              <path d="M12 19V5" />
            </svg>
            <span>Down from 12 last quarter</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Compliance Rate
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-500"
            >
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">98.5%</p>
          <div className="flex items-center text-xs text-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
            <span>1.5% from last quarter</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Upcoming Audits
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-500"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">3</p>
          <div className="flex items-center text-xs text-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M12 9v2m0 4h.01" />
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            </svg>
            <span>Next audit in 15 days</span>
          </div>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Audit & Compliance
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
                New Control
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
                  placeholder="Search controls..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Controls</SelectItem>
                  <SelectItem value="effective">Effective</SelectItem>
                  <SelectItem value="needs-improvement">
                    Needs Improvement
                  </SelectItem>
                  <SelectItem value="ineffective">Ineffective</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Effective: 45
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Needs Improvement: 8
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                <span className="text-xs font-medium text-red-500">
                  Ineffective: 2
                </span>
              </div>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-slate-800">
              <TabsTrigger value="internal-controls">
                Internal Controls
              </TabsTrigger>
              <TabsTrigger value="audit-findings">Audit Findings</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
            </TabsList>

            <TabsContent value="internal-controls" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-3">Control Name</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Last Tested</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1">Risk Level</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "IC-001",
                      name: "Segregation of Duties - Payments",
                      category: "Financial Reporting",
                      lastTested: "2023-10-15",
                      status: "Effective",
                      riskLevel: "High",
                    },
                    {
                      id: "IC-002",
                      name: "Journal Entry Approval",
                      category: "Financial Reporting",
                      lastTested: "2023-10-18",
                      status: "Effective",
                      riskLevel: "High",
                    },
                    {
                      id: "IC-003",
                      name: "Bank Reconciliation",
                      category: "Financial Reporting",
                      lastTested: "2023-10-20",
                      status: "Effective",
                      riskLevel: "Medium",
                    },
                    {
                      id: "IC-004",
                      name: "Vendor Master Data Changes",
                      category: "Procurement",
                      lastTested: "2023-10-22",
                      status: "Needs Improvement",
                      riskLevel: "Medium",
                    },
                    {
                      id: "IC-005",
                      name: "Fixed Asset Capitalization",
                      category: "Fixed Assets",
                      lastTested: "2023-10-25",
                      status: "Effective",
                      riskLevel: "Medium",
                    },
                    {
                      id: "IC-006",
                      name: "Revenue Recognition",
                      category: "Financial Reporting",
                      lastTested: "2023-10-28",
                      status: "Effective",
                      riskLevel: "High",
                    },
                    {
                      id: "IC-007",
                      name: "System Access Controls",
                      category: "IT General Controls",
                      lastTested: "2023-10-30",
                      status: "Needs Improvement",
                      riskLevel: "High",
                    },
                  ].map((control, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{control.id}</div>
                      <div className="col-span-3">{control.name}</div>
                      <div className="col-span-2">{control.category}</div>
                      <div className="col-span-2">
                        {new Date(control.lastTested).toLocaleDateString()}
                      </div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${control.status === "Effective" ? "bg-emerald-500/10 text-emerald-500" : control.status === "Needs Improvement" ? "bg-amber-500/10 text-amber-500" : "bg-red-500/10 text-red-500"}`}
                        >
                          {control.status}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${control.riskLevel === "High" ? "bg-red-500/10 text-red-500" : control.riskLevel === "Medium" ? "bg-amber-500/10 text-amber-500" : "bg-emerald-500/10 text-emerald-500"}`}
                        >
                          {control.riskLevel}
                        </span>
                      </div>
                      <div className="col-span-2 flex space-x-2">
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="audit-findings" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-3">Finding</div>
                  <div className="col-span-2">Related Control</div>
                  <div className="col-span-1">Severity</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Due Date</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "AF-001",
                      finding: "Insufficient review of journal entries",
                      relatedControl: "IC-002",
                      severity: "High",
                      status: "In Progress",
                      dueDate: "2023-11-30",
                    },
                    {
                      id: "AF-002",
                      finding:
                        "Vendor master data changes lack proper approval",
                      relatedControl: "IC-004",
                      severity: "Medium",
                      status: "In Progress",
                      dueDate: "2023-12-15",
                    },
                    {
                      id: "AF-003",
                      finding: "System access rights not regularly reviewed",
                      relatedControl: "IC-007",
                      severity: "High",
                      status: "In Progress",
                      dueDate: "2023-11-15",
                    },
                    {
                      id: "AF-004",
                      finding:
                        "Incomplete documentation for fixed asset additions",
                      relatedControl: "IC-005",
                      severity: "Low",
                      status: "Remediated",
                      dueDate: "2023-10-31",
                    },
                    {
                      id: "AF-005",
                      finding: "Bank reconciliations not performed timely",
                      relatedControl: "IC-003",
                      severity: "Medium",
                      status: "Remediated",
                      dueDate: "2023-10-15",
                    },
                    {
                      id: "AF-006",
                      finding:
                        "Inadequate segregation of duties in payment process",
                      relatedControl: "IC-001",
                      severity: "High",
                      status: "In Progress",
                      dueDate: "2023-12-01",
                    },
                    {
                      id: "AF-007",
                      finding:
                        "Revenue recognition criteria not consistently applied",
                      relatedControl: "IC-006",
                      severity: "Medium",
                      status: "In Progress",
                      dueDate: "2023-11-30",
                    },
                  ].map((finding, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{finding.id}</div>
                      <div className="col-span-3">{finding.finding}</div>
                      <div className="col-span-2">{finding.relatedControl}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${finding.severity === "High" ? "bg-red-500/10 text-red-500" : finding.severity === "Medium" ? "bg-amber-500/10 text-amber-500" : "bg-emerald-500/10 text-emerald-500"}`}
                        >
                          {finding.severity}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${finding.status === "Remediated" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}`}
                        >
                          {finding.status}
                        </span>
                      </div>
                      <div className="col-span-2">
                        {new Date(finding.dueDate).toLocaleDateString()}
                      </div>
                      <div className="col-span-2 flex space-x-2">
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="compliance" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-3">Requirement</div>
                  <div className="col-span-2">Regulation</div>
                  <div className="col-span-2">Last Assessment</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1">Priority</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "CR-001",
                      requirement: "Financial Statement Accuracy",
                      regulation: "SOX 404",
                      lastAssessment: "2023-09-30",
                      status: "Compliant",
                      priority: "High",
                    },
                    {
                      id: "CR-002",
                      requirement: "Data Privacy Controls",
                      regulation: "GDPR",
                      lastAssessment: "2023-10-15",
                      status: "Compliant",
                      priority: "High",
                    },
                    {
                      id: "CR-003",
                      requirement: "Anti-Money Laundering",
                      regulation: "AML",
                      lastAssessment: "2023-08-22",
                      status: "Compliant",
                      priority: "High",
                    },
                    {
                      id: "CR-004",
                      requirement: "Information Security",
                      regulation: "ISO 27001",
                      lastAssessment: "2023-09-15",
                      status: "Partially Compliant",
                      priority: "Medium",
                    },
                    {
                      id: "CR-005",
                      requirement: "Tax Reporting Accuracy",
                      regulation: "IRS Regulations",
                      lastAssessment: "2023-10-01",
                      status: "Compliant",
                      priority: "High",
                    },
                    {
                      id: "CR-006",
                      requirement: "Environmental Compliance",
                      regulation: "EPA Standards",
                      lastAssessment: "2023-07-30",
                      status: "Compliant",
                      priority: "Medium",
                    },
                    {
                      id: "CR-007",
                      requirement: "Employee Data Protection",
                      regulation: "Labor Laws",
                      lastAssessment: "2023-09-10",
                      status: "Compliant",
                      priority: "Medium",
                    },
                  ].map((compliance, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">
                        {compliance.id}
                      </div>
                      <div className="col-span-3">{compliance.requirement}</div>
                      <div className="col-span-2">{compliance.regulation}</div>
                      <div className="col-span-2">
                        {new Date(
                          compliance.lastAssessment,
                        ).toLocaleDateString()}
                      </div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${compliance.status === "Compliant" ? "bg-emerald-500/10 text-emerald-500" : compliance.status === "Partially Compliant" ? "bg-amber-500/10 text-amber-500" : "bg-red-500/10 text-red-500"}`}
                        >
                          {compliance.status}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${compliance.priority === "High" ? "bg-red-500/10 text-red-500" : compliance.priority === "Medium" ? "bg-amber-500/10 text-amber-500" : "bg-emerald-500/10 text-emerald-500"}`}
                        >
                          {compliance.priority}
                        </span>
                      </div>
                      <div className="col-span-2 flex space-x-2">
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuditControls;
