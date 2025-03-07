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

const RiskManagement = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Risk Management
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
              Add Risk
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
                placeholder="Search risks..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                <span className="text-xs font-medium text-red-500">
                  High: 5
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Medium: 12
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                <span className="text-xs font-medium text-blue-500">
                  Low: 8
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="register">Risk Register</TabsTrigger>
            <TabsTrigger value="assessment">Risk Assessment</TabsTrigger>
            <TabsTrigger value="mitigation">Mitigation Plans</TabsTrigger>
          </TabsList>

          <TabsContent value="register" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800">
              <Table>
                <TableHeader className="bg-slate-800">
                  <TableRow>
                    <TableHead className="text-slate-300">ID</TableHead>
                    <TableHead className="text-slate-300">
                      Risk Description
                    </TableHead>
                    <TableHead className="text-slate-300">Category</TableHead>
                    <TableHead className="text-slate-300">
                      Probability
                    </TableHead>
                    <TableHead className="text-slate-300">Impact</TableHead>
                    <TableHead className="text-slate-300">Severity</TableHead>
                    <TableHead className="text-slate-300">Owner</TableHead>
                    <TableHead className="text-right text-slate-300">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "RISK-001",
                      description: "Supply chain disruption",
                      category: "Operational",
                      probability: "Medium",
                      impact: "High",
                      severity: "high",
                      owner: "Sarah Johnson",
                    },
                    {
                      id: "RISK-002",
                      description: "Equipment failure",
                      category: "Operational",
                      probability: "Low",
                      impact: "High",
                      severity: "medium",
                      owner: "Michael Chen",
                    },
                    {
                      id: "RISK-003",
                      description: "Regulatory non-compliance",
                      category: "Compliance",
                      probability: "Low",
                      impact: "High",
                      severity: "medium",
                      owner: "Jessica Williams",
                    },
                    {
                      id: "RISK-004",
                      description: "Skilled labor shortage",
                      category: "Human Resources",
                      probability: "Medium",
                      impact: "Medium",
                      severity: "medium",
                      owner: "David Miller",
                    },
                    {
                      id: "RISK-005",
                      description: "Cybersecurity breach",
                      category: "IT",
                      probability: "Low",
                      impact: "High",
                      severity: "medium",
                      owner: "Emily Taylor",
                    },
                  ]
                    .filter(
                      (risk) =>
                        risk.description
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        risk.category
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        risk.owner
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()),
                    )
                    .map((risk) => (
                      <TableRow key={risk.id} className="border-slate-800">
                        <TableCell className="font-medium text-slate-300">
                          {risk.id}
                        </TableCell>
                        <TableCell>{risk.description}</TableCell>
                        <TableCell>{risk.category}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                              risk.probability === "High"
                                ? "bg-red-500/10 text-red-500"
                                : risk.probability === "Medium"
                                  ? "bg-amber-500/10 text-amber-500"
                                  : "bg-blue-500/10 text-blue-500"
                            }`}
                          >
                            {risk.probability}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                              risk.impact === "High"
                                ? "bg-red-500/10 text-red-500"
                                : risk.impact === "Medium"
                                  ? "bg-amber-500/10 text-amber-500"
                                  : "bg-blue-500/10 text-blue-500"
                            }`}
                          >
                            {risk.impact}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                              risk.severity === "high"
                                ? "bg-red-500/10 text-red-500"
                                : risk.severity === "medium"
                                  ? "bg-amber-500/10 text-amber-500"
                                  : "bg-blue-500/10 text-blue-500"
                            }`}
                          >
                            {risk.severity.charAt(0).toUpperCase() +
                              risk.severity.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell>{risk.owner}</TableCell>
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

          <TabsContent value="assessment" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Risk Assessment Matrix
              </h3>
              <div className="grid grid-cols-6 gap-2">
                <div className="col-span-1"></div>
                <div className="bg-slate-800 p-2 text-center text-xs font-medium text-slate-300">
                  Very Low
                </div>
                <div className="bg-slate-800 p-2 text-center text-xs font-medium text-slate-300">
                  Low
                </div>
                <div className="bg-slate-800 p-2 text-center text-xs font-medium text-slate-300">
                  Medium
                </div>
                <div className="bg-slate-800 p-2 text-center text-xs font-medium text-slate-300">
                  High
                </div>
                <div className="bg-slate-800 p-2 text-center text-xs font-medium text-slate-300">
                  Very High
                </div>

                <div className="bg-slate-800 p-2 text-xs font-medium text-slate-300 flex items-center justify-center">
                  Very High
                </div>
                <div className="bg-amber-500/20 p-2 text-center text-xs">
                  Medium
                </div>
                <div className="bg-red-500/20 p-2 text-center text-xs">
                  High
                </div>
                <div className="bg-red-500/20 p-2 text-center text-xs">
                  High
                </div>
                <div className="bg-red-500/20 p-2 text-center text-xs">
                  Extreme
                </div>
                <div className="bg-red-500/20 p-2 text-center text-xs">
                  Extreme
                </div>

                <div className="bg-slate-800 p-2 text-xs font-medium text-slate-300 flex items-center justify-center">
                  High
                </div>
                <div className="bg-amber-500/20 p-2 text-center text-xs">
                  Medium
                </div>
                <div className="bg-amber-500/20 p-2 text-center text-xs">
                  Medium
                </div>
                <div className="bg-red-500/20 p-2 text-center text-xs">
                  High
                </div>
                <div className="bg-red-500/20 p-2 text-center text-xs">
                  High
                </div>
                <div className="bg-red-500/20 p-2 text-center text-xs">
                  Extreme
                </div>

                <div className="bg-slate-800 p-2 text-xs font-medium text-slate-300 flex items-center justify-center">
                  Medium
                </div>
                <div className="bg-blue-500/20 p-2 text-center text-xs">
                  Low
                </div>
                <div className="bg-amber-500/20 p-2 text-center text-xs">
                  Medium
                </div>
                <div className="bg-amber-500/20 p-2 text-center text-xs">
                  Medium
                </div>
                <div className="bg-red-500/20 p-2 text-center text-xs">
                  High
                </div>
                <div className="bg-red-500/20 p-2 text-center text-xs">
                  High
                </div>

                <div className="bg-slate-800 p-2 text-xs font-medium text-slate-300 flex items-center justify-center">
                  Low
                </div>
                <div className="bg-blue-500/20 p-2 text-center text-xs">
                  Low
                </div>
                <div className="bg-blue-500/20 p-2 text-center text-xs">
                  Low
                </div>
                <div className="bg-amber-500/20 p-2 text-center text-xs">
                  Medium
                </div>
                <div className="bg-amber-500/20 p-2 text-center text-xs">
                  Medium
                </div>
                <div className="bg-red-500/20 p-2 text-center text-xs">
                  High
                </div>

                <div className="bg-slate-800 p-2 text-xs font-medium text-slate-300 flex items-center justify-center">
                  Very Low
                </div>
                <div className="bg-blue-500/20 p-2 text-center text-xs">
                  Low
                </div>
                <div className="bg-blue-500/20 p-2 text-center text-xs">
                  Low
                </div>
                <div className="bg-blue-500/20 p-2 text-center text-xs">
                  Low
                </div>
                <div className="bg-amber-500/20 p-2 text-center text-xs">
                  Medium
                </div>
                <div className="bg-amber-500/20 p-2 text-center text-xs">
                  Medium
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <div className="text-center">
                  <div className="h-4 w-16 bg-blue-500/20 mb-1"></div>
                  <span className="text-xs text-slate-300">Low Risk</span>
                </div>
                <div className="text-center">
                  <div className="h-4 w-16 bg-amber-500/20 mb-1"></div>
                  <span className="text-xs text-slate-300">Medium Risk</span>
                </div>
                <div className="text-center">
                  <div className="h-4 w-16 bg-red-500/20 mb-1"></div>
                  <span className="text-xs text-slate-300">High Risk</span>
                </div>
                <div className="text-center">
                  <div className="h-4 w-16 bg-red-500/20 border border-red-500 mb-1"></div>
                  <span className="text-xs text-slate-300">Extreme Risk</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mitigation" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Risk Mitigation Plans
              </h3>
              <div className="space-y-4">
                {[
                  {
                    id: "MIT-001",
                    risk: "Supply chain disruption",
                    actions: [
                      "Identify alternative suppliers",
                      "Maintain safety stock levels",
                      "Implement supplier monitoring system",
                    ],
                    owner: "Sarah Johnson",
                    status: "in-progress",
                    completion: 65,
                  },
                  {
                    id: "MIT-002",
                    risk: "Equipment failure",
                    actions: [
                      "Implement preventive maintenance schedule",
                      "Train operators on proper equipment use",
                      "Maintain spare parts inventory",
                    ],
                    owner: "Michael Chen",
                    status: "in-progress",
                    completion: 80,
                  },
                  {
                    id: "MIT-003",
                    risk: "Regulatory non-compliance",
                    actions: [
                      "Regular compliance audits",
                      "Staff training on regulatory requirements",
                      "Implement compliance management system",
                    ],
                    owner: "Jessica Williams",
                    status: "completed",
                    completion: 100,
                  },
                ]
                  .filter(
                    (plan) =>
                      plan.risk
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      plan.owner
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                  )
                  .map((plan) => (
                    <div
                      key={plan.id}
                      className="p-4 bg-slate-800/50 rounded-md border border-slate-700"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-white">
                            {plan.risk}
                          </h4>
                          <div className="text-xs text-slate-400 mt-1">
                            ID: {plan.id} | Owner: {plan.owner}
                          </div>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            plan.status === "completed"
                              ? "bg-emerald-500/10 text-emerald-500"
                              : "bg-amber-500/10 text-amber-500"
                          }`}
                        >
                          {plan.status.replace("-", " ")}
                        </span>
                      </div>

                      <div className="mb-3">
                        <div className="text-xs font-medium text-slate-300 mb-2">
                          Mitigation Actions:
                        </div>
                        <ul className="space-y-1">
                          {plan.actions.map((action, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-slate-300 flex items-start"
                            >
                              <span className="text-cyan-500 mr-2">•</span>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>Completion</span>
                          <span>{plan.completion}%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full">
                          <div
                            className={`h-2 rounded-full ${
                              plan.status === "completed"
                                ? "bg-emerald-500"
                                : "bg-cyan-600"
                            }`}
                            style={{ width: `${plan.completion}%` }}
                          ></div>
                        </div>
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

export default RiskManagement;
