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

interface TaxationProps {
  currentEntity?: string;
}

const Taxation: React.FC<TaxationProps> = ({ currentEntity = "all" }) => {
  const [activeTab, setActiveTab] = useState("tax-compliance");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4">
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Taxation & Compliance
              {currentEntity !== "all" && (
                <span className="ml-2 text-sm text-slate-400">
                  ({currentEntity})
                </span>
              )}
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
                New Filing
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
                  placeholder="Search tax filings..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Tax Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="income">Income Tax</SelectItem>
                  <SelectItem value="vat">VAT/GST</SelectItem>
                  <SelectItem value="payroll">Payroll Tax</SelectItem>
                  <SelectItem value="withholding">Withholding Tax</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Filed: 28
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Pending: 5
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                <span className="text-xs font-medium text-red-500">
                  Overdue: 2
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
              <TabsTrigger value="tax-compliance">Tax Compliance</TabsTrigger>
              <TabsTrigger value="tax-planning">Tax Planning</TabsTrigger>
              <TabsTrigger value="audit-trails">Audit Trails</TabsTrigger>
            </TabsList>

            <TabsContent value="tax-compliance" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-2">Tax Type</div>
                  <div className="col-span-2">Jurisdiction</div>
                  <div className="col-span-1">Period</div>
                  <div className="col-span-1">Due Date</div>
                  <div className="col-span-1">Amount</div>
                  <div className="col-span-1">Currency</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "TX-2023-1001",
                      taxType: "Corporate Income Tax",
                      jurisdiction: "Federal",
                      period: "Q3 2023",
                      dueDate: "2023-11-15",
                      amount: "$125,000.00",
                      currency: "USD",
                      status: "Pending",
                    },
                    {
                      id: "TX-2023-1002",
                      taxType: "VAT",
                      jurisdiction: "State",
                      period: "Oct 2023",
                      dueDate: "2023-11-20",
                      amount: "$45,750.00",
                      currency: "USD",
                      status: "Pending",
                    },
                    {
                      id: "TX-2023-1003",
                      taxType: "Payroll Tax",
                      jurisdiction: "Federal",
                      period: "Oct 2023",
                      dueDate: "2023-11-10",
                      amount: "$78,500.00",
                      currency: "USD",
                      status: "Filed",
                    },
                    {
                      id: "TX-2023-1004",
                      taxType: "Withholding Tax",
                      jurisdiction: "Federal",
                      period: "Oct 2023",
                      dueDate: "2023-11-15",
                      amount: "$12,800.00",
                      currency: "USD",
                      status: "Pending",
                    },
                    {
                      id: "TX-2023-1005",
                      taxType: "Property Tax",
                      jurisdiction: "Local",
                      period: "2023",
                      dueDate: "2023-10-31",
                      amount: "$35,250.00",
                      currency: "USD",
                      status: "Overdue",
                    },
                    {
                      id: "TX-2023-1006",
                      taxType: "Sales Tax",
                      jurisdiction: "State",
                      period: "Q3 2023",
                      dueDate: "2023-10-20",
                      amount: "$28,750.00",
                      currency: "USD",
                      status: "Filed",
                    },
                  ].map((tax, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{tax.id}</div>
                      <div className="col-span-2">{tax.taxType}</div>
                      <div className="col-span-2">{tax.jurisdiction}</div>
                      <div className="col-span-1">{tax.period}</div>
                      <div className="col-span-1">
                        {new Date(tax.dueDate).toLocaleDateString()}
                      </div>
                      <div className="col-span-1">{tax.amount}</div>
                      <div className="col-span-1">{tax.currency}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${tax.status === "Filed" ? "bg-emerald-500/10 text-emerald-500" : tax.status === "Pending" ? "bg-amber-500/10 text-amber-500" : "bg-red-500/10 text-red-500"}`}
                        >
                          {tax.status}
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
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tax-planning" className="mt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-slate-800 bg-slate-900">
                  <CardContent className="p-3">
                    <h3 className="text-xs font-medium text-white mb-1.5">
                      Tax Rate Analysis
                    </h3>
                    <div className="space-y-2">
                      {[
                        {
                          jurisdiction: "Federal",
                          rate: 21,
                          effectiveRate: 18.5,
                        },
                        {
                          jurisdiction: "State - California",
                          rate: 8.84,
                          effectiveRate: 7.2,
                        },
                        {
                          jurisdiction: "State - New York",
                          rate: 7.25,
                          effectiveRate: 6.1,
                        },
                        {
                          jurisdiction: "State - Texas",
                          rate: 0,
                          effectiveRate: 0,
                        },
                        {
                          jurisdiction: "International - UK",
                          rate: 19,
                          effectiveRate: 16.8,
                        },
                      ].map((tax) => (
                        <div key={tax.jurisdiction} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-white">
                              {tax.jurisdiction}
                            </span>
                            <div className="flex space-x-3">
                              <span className="text-slate-400">
                                Statutory: {tax.rate}%
                              </span>
                              <span className="font-medium text-cyan-500">
                                Effective: {tax.effectiveRate}%
                              </span>
                            </div>
                          </div>
                          <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                            <div
                              className="absolute h-1.5 rounded-full bg-cyan-500"
                              style={{ width: `${tax.effectiveRate * 2}%` }}
                            ></div>
                            <div
                              className="absolute h-3 w-0.5 bg-white top-1/2 transform -translate-y-1/2"
                              style={{ left: `${tax.rate * 2}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-800 bg-slate-900">
                  <CardContent className="p-3">
                    <h3 className="text-xs font-medium text-white mb-1.5">
                      Tax Calendar
                    </h3>
                    <div className="space-y-2">
                      {[
                        {
                          filing: "Q4 Estimated Tax Payment",
                          dueDate: "2023-12-15",
                          daysLeft: 45,
                          status: "Upcoming",
                        },
                        {
                          filing: "Annual Corporate Tax Return",
                          dueDate: "2024-04-15",
                          daysLeft: 167,
                          status: "Upcoming",
                        },
                        {
                          filing: "State Tax Return - CA",
                          dueDate: "2024-04-15",
                          daysLeft: 167,
                          status: "Upcoming",
                        },
                        {
                          filing: "State Tax Return - NY",
                          dueDate: "2024-04-15",
                          daysLeft: 167,
                          status: "Upcoming",
                        },
                        {
                          filing: "International Tax - UK",
                          dueDate: "2024-01-31",
                          daysLeft: 92,
                          status: "Upcoming",
                        },
                      ].map((filing) => (
                        <div key={filing.filing} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-white">{filing.filing}</span>
                            <div className="flex space-x-3">
                              <span className="text-slate-400">
                                Due:{" "}
                                {new Date(filing.dueDate).toLocaleDateString()}
                              </span>
                              <span
                                className={`font-medium ${filing.daysLeft > 30 ? "text-emerald-500" : filing.daysLeft > 14 ? "text-amber-500" : "text-red-500"}`}
                              >
                                {filing.daysLeft} days left
                              </span>
                            </div>
                          </div>
                          <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                            <div
                              className={`absolute h-1.5 rounded-full ${filing.daysLeft > 30 ? "bg-emerald-500" : filing.daysLeft > 14 ? "bg-amber-500" : "bg-red-500"}`}
                              style={{
                                width: `${Math.min(100, (180 - filing.daysLeft) / 1.8)}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-3">
                  <h3 className="text-xs font-medium text-white mb-1.5">
                    Tax Planning Opportunities
                  </h3>
                  <div className="rounded-md border border-slate-800">
                    <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                      <div className="col-span-3">Strategy</div>
                      <div className="col-span-3">Description</div>
                      <div className="col-span-2">Potential Savings</div>
                      <div className="col-span-2">Complexity</div>
                      <div className="col-span-2">Actions</div>
                    </div>
                    <div className="divide-y divide-slate-800">
                      {[
                        {
                          strategy: "R&D Tax Credits",
                          description:
                            "Claim credits for qualifying research activities",
                          savings: "$250,000",
                          complexity: "Medium",
                        },
                        {
                          strategy: "Cost Segregation",
                          description:
                            "Accelerate depreciation on qualifying assets",
                          savings: "$180,000",
                          complexity: "High",
                        },
                        {
                          strategy: "Foreign Tax Credits",
                          description: "Optimize use of foreign tax credits",
                          savings: "$120,000",
                          complexity: "High",
                        },
                        {
                          strategy: "State Tax Nexus Review",
                          description: "Optimize state tax footprint",
                          savings: "$85,000",
                          complexity: "Medium",
                        },
                        {
                          strategy: "Transfer Pricing Optimization",
                          description:
                            "Review and optimize intercompany pricing",
                          savings: "$320,000",
                          complexity: "Very High",
                        },
                      ].map((strategy, index) => (
                        <div
                          key={index}
                          className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                        >
                          <div className="col-span-3 font-medium">
                            {strategy.strategy}
                          </div>
                          <div className="col-span-3">
                            {strategy.description}
                          </div>
                          <div className="col-span-2 text-emerald-500">
                            {strategy.savings}
                          </div>
                          <div className="col-span-2">
                            {strategy.complexity}
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
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="audit-trails" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-2">Date & Time</div>
                  <div className="col-span-2">User</div>
                  <div className="col-span-2">Action</div>
                  <div className="col-span-3">Description</div>
                  <div className="col-span-2">IP Address</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "LOG-10045",
                      datetime: "2023-11-01T14:32:15",
                      user: "john.smith",
                      action: "File Created",
                      description: "Created Q3 Corporate Tax Return",
                      ip: "192.168.1.45",
                    },
                    {
                      id: "LOG-10046",
                      datetime: "2023-11-01T15:10:22",
                      user: "sarah.jones",
                      action: "File Modified",
                      description: "Updated Q3 Corporate Tax Return",
                      ip: "192.168.1.62",
                    },
                    {
                      id: "LOG-10047",
                      datetime: "2023-11-02T09:45:30",
                      user: "david.wilson",
                      action: "File Approved",
                      description: "Approved Q3 Corporate Tax Return",
                      ip: "192.168.1.28",
                    },
                    {
                      id: "LOG-10048",
                      datetime: "2023-11-02T10:15:12",
                      user: "jennifer.brown",
                      action: "File Submitted",
                      description: "Submitted Q3 Corporate Tax Return to IRS",
                      ip: "192.168.1.33",
                    },
                    {
                      id: "LOG-10049",
                      datetime: "2023-11-03T11:22:45",
                      user: "michael.davis",
                      action: "Payment Initiated",
                      description: "Initiated payment for Q3 Corporate Tax",
                      ip: "192.168.1.54",
                    },
                    {
                      id: "LOG-10050",
                      datetime: "2023-11-03T14:05:18",
                      user: "system",
                      action: "Payment Confirmed",
                      description:
                        "Payment confirmation received for Q3 Corporate Tax",
                      ip: "192.168.1.1",
                    },
                    {
                      id: "LOG-10051",
                      datetime: "2023-11-04T09:30:22",
                      user: "system",
                      action: "Filing Confirmed",
                      description:
                        "IRS confirmation received for Q3 Corporate Tax Return",
                      ip: "192.168.1.1",
                    },
                  ].map((log, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{log.id}</div>
                      <div className="col-span-2">
                        {new Date(log.datetime).toLocaleString()}
                      </div>
                      <div className="col-span-2">{log.user}</div>
                      <div className="col-span-2">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${log.action.includes("Created") ? "bg-emerald-500/10 text-emerald-500" : log.action.includes("Modified") ? "bg-amber-500/10 text-amber-500" : log.action.includes("Approved") ? "bg-cyan-500/10 text-cyan-500" : "bg-blue-500/10 text-blue-500"}`}
                        >
                          {log.action}
                        </span>
                      </div>
                      <div className="col-span-3">{log.description}</div>
                      <div className="col-span-2">{log.ip}</div>
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

export default Taxation;
