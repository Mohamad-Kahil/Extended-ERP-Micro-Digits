import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AccountsReceivable = () => {
  const [activeTab, setActiveTab] = useState("invoices");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Total Receivables
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$182,450.00</p>
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
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
            <span>5.2% from last month</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Due This Week
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
          <p className="mt-1 text-lg font-bold text-white">$58,250.00</p>
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
            <span>15 invoices due</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">Overdue</h3>
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
              <path d="M12 18v-6" />
              <path d="M8 15h8" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$24,750.00</p>
          <div className="flex items-center text-xs text-red-500">
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
            <span>7 invoices overdue</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Collected This Month
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
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$92,350.00</p>
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
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>32 invoices collected</span>
          </div>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Accounts Receivable
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
                New Invoice
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
                  placeholder="Search invoices..."
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
                  <SelectItem value="all">All Invoices</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Paid: 142
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Open: 38
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                <span className="text-xs font-medium text-red-500">
                  Overdue: 7
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
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
              <TabsTrigger value="aging">Aging Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="invoices" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">Invoice #</div>
                  <div className="col-span-2">Date</div>
                  <div className="col-span-3">Customer</div>
                  <div className="col-span-2">Amount</div>
                  <div className="col-span-1">Currency</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "INV-2023-1001",
                      date: "2023-10-15",
                      customer: "Acme Corporation",
                      amount: "$12,500.00",
                      currency: "USD",
                      status: "Paid",
                    },
                    {
                      id: "INV-2023-1002",
                      date: "2023-10-18",
                      customer: "Globex Industries",
                      amount: "$8,750.00",
                      currency: "USD",
                      status: "Paid",
                    },
                    {
                      id: "INV-2023-1003",
                      date: "2023-10-20",
                      customer: "Wayne Enterprises",
                      amount: "$15,200.00",
                      currency: "USD",
                      status: "Open",
                    },
                    {
                      id: "INV-2023-1004",
                      date: "2023-10-22",
                      customer: "Stark Industries",
                      amount: "$9,800.00",
                      currency: "USD",
                      status: "Open",
                    },
                    {
                      id: "INV-2023-1005",
                      date: "2023-10-25",
                      customer: "Umbrella Corporation",
                      amount: "$7,350.00",
                      currency: "USD",
                      status: "Open",
                    },
                    {
                      id: "INV-2023-1006",
                      date: "2023-09-28",
                      customer: "Cyberdyne Systems",
                      amount: "$11,250.00",
                      currency: "USD",
                      status: "Overdue",
                    },
                    {
                      id: "INV-2023-1007",
                      date: "2023-09-30",
                      customer: "Oscorp Industries",
                      amount: "$6,500.00",
                      currency: "USD",
                      status: "Overdue",
                    },
                  ].map((invoice, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{invoice.id}</div>
                      <div className="col-span-2">
                        {new Date(invoice.date).toLocaleDateString()}
                      </div>
                      <div className="col-span-3">{invoice.customer}</div>
                      <div className="col-span-2">{invoice.amount}</div>
                      <div className="col-span-1">{invoice.currency}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${invoice.status === "Paid" ? "bg-emerald-500/10 text-emerald-500" : invoice.status === "Open" ? "bg-amber-500/10 text-amber-500" : "bg-red-500/10 text-red-500"}`}
                        >
                          {invoice.status}
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

            <TabsContent value="customers" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-3">Customer</div>
                  <div className="col-span-2">Total Outstanding</div>
                  <div className="col-span-2">Current</div>
                  <div className="col-span-2">1-30 Days</div>
                  <div className="col-span-2">31-60 Days</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      name: "Acme Corporation",
                      total: "$0.00",
                      current: "$0.00",
                      days30: "$0.00",
                      days60: "$0.00",
                    },
                    {
                      name: "Globex Industries",
                      total: "$0.00",
                      current: "$0.00",
                      days30: "$0.00",
                      days60: "$0.00",
                    },
                    {
                      name: "Wayne Enterprises",
                      total: "$15,200.00",
                      current: "$15,200.00",
                      days30: "$0.00",
                      days60: "$0.00",
                    },
                    {
                      name: "Stark Industries",
                      total: "$9,800.00",
                      current: "$9,800.00",
                      days30: "$0.00",
                      days60: "$0.00",
                    },
                    {
                      name: "Umbrella Corporation",
                      total: "$7,350.00",
                      current: "$7,350.00",
                      days30: "$0.00",
                      days60: "$0.00",
                    },
                    {
                      name: "Cyberdyne Systems",
                      total: "$11,250.00",
                      current: "$0.00",
                      days30: "$11,250.00",
                      days60: "$0.00",
                    },
                    {
                      name: "Oscorp Industries",
                      total: "$6,500.00",
                      current: "$0.00",
                      days30: "$6,500.00",
                      days60: "$0.00",
                    },
                  ].map((customer, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-3 font-medium">
                        {customer.name}
                      </div>
                      <div className="col-span-2">{customer.total}</div>
                      <div className="col-span-2">{customer.current}</div>
                      <div className="col-span-2">{customer.days30}</div>
                      <div className="col-span-2">{customer.days60}</div>
                      <div className="col-span-1 flex space-x-2">
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="aging" className="mt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-slate-800 bg-slate-900">
                  <CardContent className="p-3">
                    <h3 className="text-xs font-medium text-white mb-1.5">
                      Aging Summary
                    </h3>
                    <div className="space-y-2">
                      {[
                        {
                          period: "Current",
                          amount: 32350,
                          percentage: 65,
                        },
                        {
                          period: "1-30 Days",
                          amount: 17750,
                          percentage: 35,
                        },
                        {
                          period: "31-60 Days",
                          amount: 0,
                          percentage: 0,
                        },
                        {
                          period: "61-90 Days",
                          amount: 0,
                          percentage: 0,
                        },
                        {
                          period: "90+ Days",
                          amount: 0,
                          percentage: 0,
                        },
                      ].map((period) => (
                        <div key={period.period} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-white">{period.period}</span>
                            <div className="flex space-x-3">
                              <span className="text-slate-400">
                                {period.percentage}%
                              </span>
                              <span className="font-medium text-white">
                                ${period.amount.toLocaleString()}
                              </span>
                            </div>
                          </div>
                          <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                            <div
                              className="absolute h-1.5 rounded-full bg-cyan-500"
                              style={{ width: `${period.percentage}%` }}
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
                      Collection Metrics
                    </h3>
                    <div className="space-y-2">
                      {[
                        {
                          metric: "Average Collection Period",
                          value: 28,
                          target: 30,
                          unit: "days",
                          status: "On Track",
                        },
                        {
                          metric: "Collection Effectiveness Index",
                          value: 92,
                          target: 90,
                          unit: "%",
                          status: "On Track",
                        },
                        {
                          metric: "Days Sales Outstanding",
                          value: 32,
                          target: 35,
                          unit: "days",
                          status: "On Track",
                        },
                        {
                          metric: "Bad Debt to Sales Ratio",
                          value: 0.8,
                          target: 1.0,
                          unit: "%",
                          status: "On Track",
                        },
                      ].map((metric) => (
                        <div key={metric.metric} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-white">{metric.metric}</span>
                            <div className="flex space-x-3">
                              <span className="text-slate-400">
                                Target: {metric.target}
                                {metric.unit}
                              </span>
                              <span
                                className={`font-medium ${metric.status === "On Track" ? "text-emerald-500" : "text-amber-500"}`}
                              >
                                {metric.value}
                                {metric.unit}
                              </span>
                            </div>
                          </div>
                          <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                            <div
                              className={`absolute h-1.5 rounded-full ${metric.status === "On Track" ? "bg-emerald-500" : "bg-amber-500"}`}
                              style={{
                                width: `${(metric.value / (metric.target * 1.2)) * 100}%`,
                              }}
                            ></div>
                            <div
                              className="absolute h-3 w-0.5 bg-white top-1/2 transform -translate-y-1/2"
                              style={{
                                left: `${(metric.target / (metric.target * 1.2)) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsReceivable;
