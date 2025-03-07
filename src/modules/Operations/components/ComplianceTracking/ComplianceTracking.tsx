import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ComplianceTracking = () => {
  const [activeTab, setActiveTab] = useState("requirements");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Compliance Tracking
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
              Add Requirement
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 flex items-center justify-between">
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
                placeholder="Search compliance items..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Compliant: 42
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  At Risk: 8
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                <span className="text-xs font-medium text-red-500">
                  Non-Compliant: 3
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="audits">Audits & Inspections</TabsTrigger>
            <TabsTrigger value="reports">Compliance Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="requirements" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800">
              <Table>
                <TableHeader className="bg-slate-800">
                  <TableRow>
                    <TableHead className="text-slate-300">ID</TableHead>
                    <TableHead className="text-slate-300">
                      Requirement
                    </TableHead>
                    <TableHead className="text-slate-300">Category</TableHead>
                    <TableHead className="text-slate-300">Department</TableHead>
                    <TableHead className="text-slate-300">Due Date</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-right text-slate-300">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "REQ-001",
                      name: "ISO 9001 Documentation",
                      category: "Quality Management",
                      department: "Operations",
                      dueDate: "2023-10-15",
                      status: "compliant",
                    },
                    {
                      id: "REQ-002",
                      name: "Safety Protocols Review",
                      category: "Health & Safety",
                      department: "Production",
                      dueDate: "2023-09-30",
                      status: "at-risk",
                    },
                    {
                      id: "REQ-003",
                      name: "Environmental Compliance",
                      category: "Environmental",
                      department: "Facilities",
                      dueDate: "2023-11-15",
                      status: "compliant",
                    },
                    {
                      id: "REQ-004",
                      name: "Data Protection Audit",
                      category: "Information Security",
                      department: "IT",
                      dueDate: "2023-09-20",
                      status: "non-compliant",
                    },
                    {
                      id: "REQ-005",
                      name: "Employee Training Records",
                      category: "HR Compliance",
                      department: "Human Resources",
                      dueDate: "2023-10-10",
                      status: "compliant",
                    },
                  ]
                    .filter(
                      (item) =>
                        item.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        item.category
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        item.department
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()),
                    )
                    .map((item) => (
                      <TableRow key={item.id} className="border-slate-800">
                        <TableCell className="font-medium text-slate-300">
                          {item.id}
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.department}</TableCell>
                        <TableCell>{item.dueDate}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                              item.status === "compliant"
                                ? "bg-emerald-500/10 text-emerald-500"
                                : item.status === "at-risk"
                                  ? "bg-amber-500/10 text-amber-500"
                                  : "bg-red-500/10 text-red-500"
                            }`}
                          >
                            {item.status.replace("-", " ")}
                          </span>
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
          </TabsContent>

          <TabsContent value="audits" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Upcoming Audits
              </h3>
              <div className="space-y-3">
                {[
                  {
                    id: "AUD-2023-001",
                    name: "ISO 9001 Surveillance Audit",
                    auditor: "Quality Certification Body",
                    date: "2023-10-20",
                    status: "scheduled",
                  },
                  {
                    id: "AUD-2023-002",
                    name: "Health & Safety Inspection",
                    auditor: "Internal Audit Team",
                    date: "2023-09-25",
                    status: "in-preparation",
                  },
                  {
                    id: "AUD-2023-003",
                    name: "Environmental Compliance Audit",
                    auditor: "Environmental Agency",
                    date: "2023-11-10",
                    status: "scheduled",
                  },
                ]
                  .filter(
                    (audit) =>
                      audit.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      audit.auditor
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                  )
                  .map((audit) => (
                    <div
                      key={audit.id}
                      className="flex items-center justify-between p-3 bg-slate-800/50 rounded-md border border-slate-700"
                    >
                      <div>
                        <h4 className="font-medium text-white">{audit.name}</h4>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-slate-400 mr-3">
                            ID: {audit.id}
                          </span>
                          <span className="text-xs text-slate-400 mr-3">
                            Auditor: {audit.auditor}
                          </span>
                          <span className="text-xs text-slate-400">
                            Date: {audit.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            audit.status === "scheduled"
                              ? "bg-blue-500/10 text-blue-500"
                              : "bg-amber-500/10 text-amber-500"
                          }`}
                        >
                          {audit.status.replace("-", " ")}
                        </span>
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
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Compliance Reports
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {[
                  {
                    title: "Overall Compliance Rate",
                    value: "94.2%",
                    trend: "up",
                    change: "+1.5%",
                  },
                  {
                    title: "Open Compliance Issues",
                    value: "11",
                    trend: "down",
                    change: "-3",
                  },
                  {
                    title: "Avg. Resolution Time",
                    value: "4.5 days",
                    trend: "down",
                    change: "-0.8 days",
                  },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-800/50 rounded-md border border-slate-700"
                  >
                    <h4 className="text-slate-400 text-sm mb-1">
                      {metric.title}
                    </h4>
                    <div className="flex items-end">
                      <span className="text-2xl font-bold text-white">
                        {metric.value}
                      </span>
                      <div className="flex items-center ml-2 mb-1">
                        {metric.trend === "up" ? (
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
                            className="text-emerald-500"
                          >
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                          </svg>
                        ) : (
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
                            className="text-emerald-500"
                          >
                            <path d="m19 12-7 7-7-7" />
                            <path d="M12 5v14" />
                          </svg>
                        )}
                        <span className="text-xs text-emerald-500 ml-1">
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  {
                    id: "REP-2023-001",
                    name: "Q3 Compliance Summary",
                    date: "2023-09-30",
                    author: "Compliance Team",
                    status: "completed",
                  },
                  {
                    id: "REP-2023-002",
                    name: "Health & Safety Quarterly Report",
                    date: "2023-09-15",
                    author: "Safety Officer",
                    status: "completed",
                  },
                  {
                    id: "REP-2023-003",
                    name: "Environmental Compliance Report",
                    date: "2023-10-05",
                    author: "Environmental Specialist",
                    status: "in-progress",
                  },
                ]
                  .filter(
                    (report) =>
                      report.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      report.author
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                  )
                  .map((report) => (
                    <div
                      key={report.id}
                      className="flex items-center justify-between p-3 bg-slate-800/50 rounded-md border border-slate-700"
                    >
                      <div>
                        <h4 className="font-medium text-white">
                          {report.name}
                        </h4>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-slate-400 mr-3">
                            ID: {report.id}
                          </span>
                          <span className="text-xs text-slate-400 mr-3">
                            Date: {report.date}
                          </span>
                          <span className="text-xs text-slate-400">
                            Author: {report.author}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            report.status === "completed"
                              ? "bg-emerald-500/10 text-emerald-500"
                              : "bg-amber-500/10 text-amber-500"
                          }`}
                        >
                          {report.status.replace("-", " ")}
                        </span>
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
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ComplianceTracking;
