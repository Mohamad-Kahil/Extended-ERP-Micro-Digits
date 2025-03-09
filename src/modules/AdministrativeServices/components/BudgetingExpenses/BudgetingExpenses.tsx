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
import { Badge } from "@/components/ui/badge";

const BudgetingExpenses = () => {
  const [activeTab, setActiveTab] = useState("budget");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2023");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Budgeting & Expenses</h2>
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
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
          New Budget Request
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Annual Budget
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$1.25M</div>
            <p className="text-xs text-slate-500">Administrative Services</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              YTD Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$875K</div>
            <p className="text-xs text-emerald-500">70% of annual budget</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Current Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$98.5K</div>
            <p className="text-xs text-amber-500">↑ 5% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Pending Approvals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">8</div>
            <p className="text-xs text-slate-500">$42.3K total value</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Budget Management
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
                  placeholder="Search expenses..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-slate-800">
              <TabsTrigger value="budget">Budget</TabsTrigger>
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
              <TabsTrigger value="approvals">Approvals</TabsTrigger>
            </TabsList>

            <TabsContent value="budget" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-3">Category</div>
                  <div className="col-span-2">Annual Budget</div>
                  <div className="col-span-2">YTD Expenses</div>
                  <div className="col-span-2">Remaining</div>
                  <div className="col-span-1">% Used</div>
                  <div className="col-span-2">Status</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      category: "Office Lease & Rent",
                      annualBudget: 450000,
                      ytdExpenses: 337500,
                      remaining: 112500,
                      percentUsed: 75,
                      status: "On Track",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      category: "Office Supplies",
                      annualBudget: 75000,
                      ytdExpenses: 62500,
                      remaining: 12500,
                      percentUsed: 83,
                      status: "Attention",
                      statusColor: "bg-amber-500",
                    },
                    {
                      category: "Utilities",
                      annualBudget: 120000,
                      ytdExpenses: 85000,
                      remaining: 35000,
                      percentUsed: 71,
                      status: "On Track",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      category: "Maintenance & Repairs",
                      annualBudget: 180000,
                      ytdExpenses: 145000,
                      remaining: 35000,
                      percentUsed: 81,
                      status: "Attention",
                      statusColor: "bg-amber-500",
                    },
                    {
                      category: "IT Equipment",
                      annualBudget: 200000,
                      ytdExpenses: 120000,
                      remaining: 80000,
                      percentUsed: 60,
                      status: "On Track",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      category: "Furniture",
                      annualBudget: 100000,
                      ytdExpenses: 65000,
                      remaining: 35000,
                      percentUsed: 65,
                      status: "On Track",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      category: "Professional Services",
                      annualBudget: 125000,
                      ytdExpenses: 60000,
                      remaining: 65000,
                      percentUsed: 48,
                      status: "Under Budget",
                      statusColor: "bg-blue-500",
                    },
                  ].map((budget, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-3 font-medium">
                        {budget.category}
                      </div>
                      <div className="col-span-2">
                        ${budget.annualBudget.toLocaleString()}
                      </div>
                      <div className="col-span-2">
                        ${budget.ytdExpenses.toLocaleString()}
                      </div>
                      <div className="col-span-2">
                        ${budget.remaining.toLocaleString()}
                      </div>
                      <div className="col-span-1">{budget.percentUsed}%</div>
                      <div className="col-span-2">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${budget.statusColor} bg-opacity-20 text-white`}
                        >
                          {budget.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="expenses" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Date</div>
                  <div className="col-span-3">Description</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-1">Amount</div>
                  <div className="col-span-2">Submitted By</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      date: "Nov 10, 2023",
                      description: "Office Rent - HQ",
                      category: "Office Lease & Rent",
                      amount: 28500,
                      submittedBy: "Finance Dept",
                    },
                    {
                      date: "Nov 08, 2023",
                      description: "Office Supplies Order",
                      category: "Office Supplies",
                      amount: 3850,
                      submittedBy: "Sarah Johnson",
                    },
                    {
                      date: "Nov 05, 2023",
                      description: "Electricity Bill - HQ",
                      category: "Utilities",
                      amount: 5230,
                      submittedBy: "Finance Dept",
                    },
                    {
                      date: "Nov 01, 2023",
                      description: "HVAC Maintenance",
                      category: "Maintenance & Repairs",
                      amount: 4500,
                      submittedBy: "Facilities Dept",
                    },
                    {
                      date: "Oct 28, 2023",
                      description: "Office Rent - Dubai",
                      category: "Office Lease & Rent",
                      amount: 12000,
                      submittedBy: "Finance Dept",
                    },
                    {
                      date: "Oct 25, 2023",
                      description: "IT Equipment - Laptops",
                      category: "IT Equipment",
                      amount: 8500,
                      submittedBy: "IT Dept",
                    },
                    {
                      date: "Oct 20, 2023",
                      description: "Legal Services",
                      category: "Professional Services",
                      amount: 5000,
                      submittedBy: "Legal Dept",
                    },
                  ].map((expense, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2">{expense.date}</div>
                      <div className="col-span-3 font-medium">
                        {expense.description}
                      </div>
                      <div className="col-span-2">{expense.category}</div>
                      <div className="col-span-1">
                        ${expense.amount.toLocaleString()}
                      </div>
                      <div className="col-span-2">{expense.submittedBy}</div>
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
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M3 9h18" />
                            <path d="M9 21V9" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="approvals" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Request ID</div>
                  <div className="col-span-3">Description</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-1">Amount</div>
                  <div className="col-span-1">Requester</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "REQ-2023-042",
                      description: "Office Furniture - New Desks",
                      category: "Furniture",
                      amount: 12500,
                      requester: "Sarah Johnson",
                      status: "Pending",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "REQ-2023-041",
                      description: "IT Equipment - Monitors",
                      category: "IT Equipment",
                      amount: 8200,
                      requester: "IT Dept",
                      status: "Pending",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "REQ-2023-040",
                      description: "Office Renovation - Meeting Room",
                      category: "Maintenance & Repairs",
                      amount: 15000,
                      requester: "Facilities Dept",
                      status: "Under Review",
                      statusColor: "bg-cyan-500",
                    },
                    {
                      id: "REQ-2023-039",
                      description: "Legal Consultation Services",
                      category: "Professional Services",
                      amount: 6500,
                      requester: "Legal Dept",
                      status: "Pending",
                      statusColor: "bg-amber-500",
                    },
                  ].map((request, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">{request.id}</div>
                      <div className="col-span-3">{request.description}</div>
                      <div className="col-span-2">{request.category}</div>
                      <div className="col-span-1">
                        ${request.amount.toLocaleString()}
                      </div>
                      <div className="col-span-1">{request.requester}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${request.statusColor} bg-opacity-20 text-white`}
                        >
                          {request.status}
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
                            <path d="m9 12 2 2 4-4" />
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                            <path d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
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

      {/* Budget Distribution */}
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            Budget Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                category: "Office Lease & Rent",
                amount: 450000,
                percentage: 36,
                color: "bg-cyan-500",
              },
              {
                category: "IT Equipment",
                amount: 200000,
                percentage: 16,
                color: "bg-purple-500",
              },
              {
                category: "Maintenance & Repairs",
                amount: 180000,
                percentage: 14.4,
                color: "bg-amber-500",
              },
              {
                category: "Professional Services",
                amount: 125000,
                percentage: 10,
                color: "bg-emerald-500",
              },
              {
                category: "Utilities",
                amount: 120000,
                percentage: 9.6,
                color: "bg-blue-500",
              },
              {
                category: "Furniture",
                amount: 100000,
                percentage: 8,
                color: "bg-red-500",
              },
              {
                category: "Office Supplies",
                amount: 75000,
                percentage: 6,
                color: "bg-orange-500",
              },
            ].map((budget, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-white">
                      {budget.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-white">
                      ${budget.amount.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400">
                      ({budget.percentage}%)
                    </span>
                  </div>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-800">
                  <div
                    className={`h-2 rounded-full ${budget.color}`}
                    style={{ width: `${budget.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetingExpenses;
