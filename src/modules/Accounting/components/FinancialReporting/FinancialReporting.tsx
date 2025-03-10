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

interface FinancialReportingProps {
  currentEntity?: string;
}

const FinancialReporting: React.FC<FinancialReportingProps> = ({
  currentEntity = "all",
}) => {
  const [activeTab, setActiveTab] = useState("income-statement");
  const [selectedPeriod, setSelectedPeriod] = useState("current-month");

  return (
    <div className="space-y-4">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Revenue (MTD)
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
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$1,250,000</p>
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
            <span>8.2% from last month</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Expenses (MTD)
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
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$875,000</p>
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
            <span>3.5% from last month</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Net Income (MTD)
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
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$375,000</p>
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
            <span>12.8% from last month</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">Cash Balance</h3>
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
          <p className="mt-1 text-lg font-bold text-white">$2,450,000</p>
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
            <span>5.3% from last month</span>
          </div>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Financial Reports
              {currentEntity !== "all" && (
                <span className="ml-2 text-sm text-slate-400">
                  ({currentEntity})
                </span>
              )}
            </CardTitle>
            <div className="flex space-x-2">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current-month">Current Month</SelectItem>
                  <SelectItem value="previous-month">Previous Month</SelectItem>
                  <SelectItem value="current-quarter">
                    Current Quarter
                  </SelectItem>
                  <SelectItem value="ytd">Year to Date</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
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
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
                Generate Report
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-slate-800">
              <TabsTrigger value="income-statement">
                Income Statement
              </TabsTrigger>
              <TabsTrigger value="balance-sheet">Balance Sheet</TabsTrigger>
              <TabsTrigger value="cash-flow">Cash Flow</TabsTrigger>
            </TabsList>

            <TabsContent value="income-statement" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-6">Account</div>
                  <div className="col-span-2">Current Period</div>
                  <div className="col-span-2">Previous Period</div>
                  <div className="col-span-2">Variance %</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {/* Revenue Section */}
                  <div className="p-3 text-sm font-semibold text-white bg-slate-800/30 grid grid-cols-12 gap-4">
                    <div className="col-span-12">Revenue</div>
                  </div>
                  {[
                    {
                      account: "Product Sales",
                      current: "$950,000",
                      previous: "$875,000",
                      variance: "+8.6%",
                      positive: true,
                    },
                    {
                      account: "Service Revenue",
                      current: "$275,000",
                      previous: "$250,000",
                      variance: "+10.0%",
                      positive: true,
                    },
                    {
                      account: "Other Revenue",
                      current: "$25,000",
                      previous: "$30,000",
                      variance: "-16.7%",
                      positive: false,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-6 pl-4">{item.account}</div>
                      <div className="col-span-2">{item.current}</div>
                      <div className="col-span-2">{item.previous}</div>
                      <div
                        className={`col-span-2 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.variance}
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-6">Total Revenue</div>
                    <div className="col-span-2">$1,250,000</div>
                    <div className="col-span-2">$1,155,000</div>
                    <div className="col-span-2 text-emerald-500">+8.2%</div>
                  </div>

                  {/* Expenses Section */}
                  <div className="p-3 text-sm font-semibold text-white bg-slate-800/30 grid grid-cols-12 gap-4">
                    <div className="col-span-12">Expenses</div>
                  </div>
                  {[
                    {
                      account: "Cost of Goods Sold",
                      current: "$475,000",
                      previous: "$450,000",
                      variance: "+5.6%",
                      positive: false,
                    },
                    {
                      account: "Salaries & Wages",
                      current: "$225,000",
                      previous: "$215,000",
                      variance: "+4.7%",
                      positive: false,
                    },
                    {
                      account: "Marketing & Advertising",
                      current: "$75,000",
                      previous: "$85,000",
                      variance: "-11.8%",
                      positive: true,
                    },
                    {
                      account: "Rent & Utilities",
                      current: "$45,000",
                      previous: "$45,000",
                      variance: "0.0%",
                      positive: true,
                    },
                    {
                      account: "Other Expenses",
                      current: "$55,000",
                      previous: "$60,000",
                      variance: "-8.3%",
                      positive: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-6 pl-4">{item.account}</div>
                      <div className="col-span-2">{item.current}</div>
                      <div className="col-span-2">{item.previous}</div>
                      <div
                        className={`col-span-2 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.variance}
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-6">Total Expenses</div>
                    <div className="col-span-2">$875,000</div>
                    <div className="col-span-2">$855,000</div>
                    <div className="col-span-2 text-red-500">+2.3%</div>
                  </div>

                  {/* Net Income */}
                  <div className="p-3 text-sm font-bold text-white bg-slate-800/40 grid grid-cols-12 gap-4">
                    <div className="col-span-6">Net Income</div>
                    <div className="col-span-2">$375,000</div>
                    <div className="col-span-2">$300,000</div>
                    <div className="col-span-2 text-emerald-500">+25.0%</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="balance-sheet" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-6">Account</div>
                  <div className="col-span-2">Current Period</div>
                  <div className="col-span-2">Previous Period</div>
                  <div className="col-span-2">Variance %</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {/* Assets Section */}
                  <div className="p-3 text-sm font-semibold text-white bg-slate-800/30 grid grid-cols-12 gap-4">
                    <div className="col-span-12">Assets</div>
                  </div>
                  {[
                    {
                      account: "Cash & Cash Equivalents",
                      current: "$2,450,000",
                      previous: "$2,325,000",
                      variance: "+5.4%",
                      positive: true,
                    },
                    {
                      account: "Accounts Receivable",
                      current: "$875,000",
                      previous: "$925,000",
                      variance: "-5.4%",
                      positive: false,
                    },
                    {
                      account: "Inventory",
                      current: "$1,250,000",
                      previous: "$1,175,000",
                      variance: "+6.4%",
                      positive: true,
                    },
                    {
                      account: "Property & Equipment",
                      current: "$3,750,000",
                      previous: "$3,850,000",
                      variance: "-2.6%",
                      positive: false,
                    },
                    {
                      account: "Other Assets",
                      current: "$525,000",
                      previous: "$500,000",
                      variance: "+5.0%",
                      positive: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-6 pl-4">{item.account}</div>
                      <div className="col-span-2">{item.current}</div>
                      <div className="col-span-2">{item.previous}</div>
                      <div
                        className={`col-span-2 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.variance}
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-6">Total Assets</div>
                    <div className="col-span-2">$8,850,000</div>
                    <div className="col-span-2">$8,775,000</div>
                    <div className="col-span-2 text-emerald-500">+0.9%</div>
                  </div>

                  {/* Liabilities Section */}
                  <div className="p-3 text-sm font-semibold text-white bg-slate-800/30 grid grid-cols-12 gap-4">
                    <div className="col-span-12">Liabilities</div>
                  </div>
                  {[
                    {
                      account: "Accounts Payable",
                      current: "$625,000",
                      previous: "$675,000",
                      variance: "-7.4%",
                      positive: true,
                    },
                    {
                      account: "Short-term Debt",
                      current: "$750,000",
                      previous: "$800,000",
                      variance: "-6.3%",
                      positive: true,
                    },
                    {
                      account: "Long-term Debt",
                      current: "$2,250,000",
                      previous: "$2,350,000",
                      variance: "-4.3%",
                      positive: true,
                    },
                    {
                      account: "Other Liabilities",
                      current: "$375,000",
                      previous: "$350,000",
                      variance: "+7.1%",
                      positive: false,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-6 pl-4">{item.account}</div>
                      <div className="col-span-2">{item.current}</div>
                      <div className="col-span-2">{item.previous}</div>
                      <div
                        className={`col-span-2 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.variance}
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-6">Total Liabilities</div>
                    <div className="col-span-2">$4,000,000</div>
                    <div className="col-span-2">$4,175,000</div>
                    <div className="col-span-2 text-emerald-500">-4.2%</div>
                  </div>

                  {/* Equity Section */}
                  <div className="p-3 text-sm font-semibold text-white bg-slate-800/30 grid grid-cols-12 gap-4">
                    <div className="col-span-12">Equity</div>
                  </div>
                  {[
                    {
                      account: "Common Stock",
                      current: "$2,500,000",
                      previous: "$2,500,000",
                      variance: "0.0%",
                      positive: true,
                    },
                    {
                      account: "Retained Earnings",
                      current: "$2,350,000",
                      previous: "$2,100,000",
                      variance: "+11.9%",
                      positive: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-6 pl-4">{item.account}</div>
                      <div className="col-span-2">{item.current}</div>
                      <div className="col-span-2">{item.previous}</div>
                      <div
                        className={`col-span-2 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.variance}
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-6">Total Equity</div>
                    <div className="col-span-2">$4,850,000</div>
                    <div className="col-span-2">$4,600,000</div>
                    <div className="col-span-2 text-emerald-500">+5.4%</div>
                  </div>

                  {/* Total Liabilities & Equity */}
                  <div className="p-3 text-sm font-bold text-white bg-slate-800/40 grid grid-cols-12 gap-4">
                    <div className="col-span-6">Total Liabilities & Equity</div>
                    <div className="col-span-2">$8,850,000</div>
                    <div className="col-span-2">$8,775,000</div>
                    <div className="col-span-2 text-emerald-500">+0.9%</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cash-flow" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-6">Account</div>
                  <div className="col-span-2">Current Period</div>
                  <div className="col-span-2">Previous Period</div>
                  <div className="col-span-2">Variance %</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {/* Operating Activities */}
                  <div className="p-3 text-sm font-semibold text-white bg-slate-800/30 grid grid-cols-12 gap-4">
                    <div className="col-span-12">Operating Activities</div>
                  </div>
                  {[
                    {
                      account: "Net Income",
                      current: "$375,000",
                      previous: "$300,000",
                      variance: "+25.0%",
                      positive: true,
                    },
                    {
                      account: "Depreciation & Amortization",
                      current: "$125,000",
                      previous: "$120,000",
                      variance: "+4.2%",
                      positive: true,
                    },
                    {
                      account: "Changes in Working Capital",
                      current: "$50,000",
                      previous: "-$25,000",
                      variance: "+300.0%",
                      positive: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-6 pl-4">{item.account}</div>
                      <div className="col-span-2">{item.current}</div>
                      <div className="col-span-2">{item.previous}</div>
                      <div
                        className={`col-span-2 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.variance}
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                      Net Cash from Operating Activities
                    </div>
                    <div className="col-span-2">$550,000</div>
                    <div className="col-span-2">$395,000</div>
                    <div className="col-span-2 text-emerald-500">+39.2%</div>
                  </div>

                  {/* Investing Activities */}
                  <div className="p-3 text-sm font-semibold text-white bg-slate-800/30 grid grid-cols-12 gap-4">
                    <div className="col-span-12">Investing Activities</div>
                  </div>
                  {[
                    {
                      account: "Capital Expenditures",
                      current: "-$175,000",
                      previous: "-$225,000",
                      variance: "-22.2%",
                      positive: true,
                    },
                    {
                      account: "Acquisitions",
                      current: "$0",
                      previous: "-$150,000",
                      variance: "-100.0%",
                      positive: true,
                    },
                    {
                      account: "Other Investing Activities",
                      current: "-$25,000",
                      previous: "-$15,000",
                      variance: "+66.7%",
                      positive: false,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-6 pl-4">{item.account}</div>
                      <div className="col-span-2">{item.current}</div>
                      <div className="col-span-2">{item.previous}</div>
                      <div
                        className={`col-span-2 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.variance}
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                      Net Cash from Investing Activities
                    </div>
                    <div className="col-span-2">-$200,000</div>
                    <div className="col-span-2">-$390,000</div>
                    <div className="col-span-2 text-emerald-500">-48.7%</div>
                  </div>

                  {/* Financing Activities */}
                  <div className="p-3 text-sm font-semibold text-white bg-slate-800/30 grid grid-cols-12 gap-4">
                    <div className="col-span-12">Financing Activities</div>
                  </div>
                  {[
                    {
                      account: "Debt Repayment",
                      current: "-$150,000",
                      previous: "-$125,000",
                      variance: "+20.0%",
                      positive: false,
                    },
                    {
                      account: "Dividends Paid",
                      current: "-$75,000",
                      previous: "-$75,000",
                      variance: "0.0%",
                      positive: true,
                    },
                    {
                      account: "Other Financing Activities",
                      current: "$0",
                      previous: "$50,000",
                      variance: "-100.0%",
                      positive: false,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-6 pl-4">{item.account}</div>
                      <div className="col-span-2">{item.current}</div>
                      <div className="col-span-2">{item.previous}</div>
                      <div
                        className={`col-span-2 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.variance}
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                      Net Cash from Financing Activities
                    </div>
                    <div className="col-span-2">-$225,000</div>
                    <div className="col-span-2">-$150,000</div>
                    <div className="col-span-2 text-red-500">+50.0%</div>
                  </div>

                  {/* Net Change in Cash */}
                  <div className="p-3 text-sm font-bold text-white bg-slate-800/40 grid grid-cols-12 gap-4">
                    <div className="col-span-6">Net Change in Cash</div>
                    <div className="col-span-2">$125,000</div>
                    <div className="col-span-2">-$145,000</div>
                    <div className="col-span-2 text-emerald-500">+186.2%</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialReporting;
