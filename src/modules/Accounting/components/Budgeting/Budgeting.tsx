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

interface BudgetingProps {
  currentEntity?: string;
}

const Budgeting: React.FC<BudgetingProps> = ({ currentEntity = "all" }) => {
  const [activeTab, setActiveTab] = useState("budget-overview");
  const [selectedPeriod, setSelectedPeriod] = useState("current-year");

  return (
    <div className="space-y-4">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Annual Budget
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
          <p className="mt-1 text-lg font-bold text-white">$12,500,000</p>
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
            <span>5.2% from last year</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">YTD Actual</h3>
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
          <p className="mt-1 text-lg font-bold text-white">$8,750,000</p>
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
            <span>70% of annual budget</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Budget Variance
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
          <p className="mt-1 text-lg font-bold text-white">+$250,000</p>
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
            <span>2.9% favorable</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Forecast (EOY)
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
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$12,850,000</p>
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
            <span>2.8% above budget</span>
          </div>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Budgeting & Forecasting
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
                  <SelectItem value="current-year">Current Year</SelectItem>
                  <SelectItem value="previous-year">Previous Year</SelectItem>
                  <SelectItem value="next-year">Next Year (Draft)</SelectItem>
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
                New Budget
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
              <TabsTrigger value="budget-overview">Budget Overview</TabsTrigger>
              <TabsTrigger value="department-budgets">
                Department Budgets
              </TabsTrigger>
              <TabsTrigger value="forecasting">Forecasting</TabsTrigger>
            </TabsList>

            <TabsContent value="budget-overview" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-3">Category</div>
                  <div className="col-span-2">Annual Budget</div>
                  <div className="col-span-2">YTD Budget</div>
                  <div className="col-span-2">YTD Actual</div>
                  <div className="col-span-1">Variance</div>
                  <div className="col-span-2">% of Budget Used</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {/* Revenue Section */}
                  <div className="p-3 text-sm font-semibold text-white bg-slate-800/30 grid grid-cols-12 gap-4">
                    <div className="col-span-12">Revenue</div>
                  </div>
                  {[
                    {
                      category: "Product Sales",
                      annualBudget: "$9,500,000",
                      ytdBudget: "$6,650,000",
                      ytdActual: "$6,850,000",
                      variance: "$200,000",
                      percentUsed: "72.1%",
                      positive: true,
                    },
                    {
                      category: "Service Revenue",
                      annualBudget: "$2,750,000",
                      ytdBudget: "$1,925,000",
                      ytdActual: "$1,875,000",
                      variance: "-$50,000",
                      percentUsed: "68.2%",
                      positive: false,
                    },
                    {
                      category: "Other Revenue",
                      annualBudget: "$250,000",
                      ytdBudget: "$175,000",
                      ytdActual: "$225,000",
                      variance: "$50,000",
                      percentUsed: "90.0%",
                      positive: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-3 pl-4">{item.category}</div>
                      <div className="col-span-2">{item.annualBudget}</div>
                      <div className="col-span-2">{item.ytdBudget}</div>
                      <div className="col-span-2">{item.ytdActual}</div>
                      <div
                        className={`col-span-1 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.variance}
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center">
                          <div className="w-full bg-slate-700 h-1.5 rounded-full mr-2">
                            <div
                              className={`h-1.5 rounded-full ${item.positive ? "bg-emerald-500" : "bg-amber-500"}`}
                              style={{ width: item.percentUsed }}
                            ></div>
                          </div>
                          <span>{item.percentUsed}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-3">Total Revenue</div>
                    <div className="col-span-2">$12,500,000</div>
                    <div className="col-span-2">$8,750,000</div>
                    <div className="col-span-2">$8,950,000</div>
                    <div className="col-span-1 text-emerald-500">$200,000</div>
                    <div className="col-span-2">
                      <div className="flex items-center">
                        <div className="w-full bg-slate-700 h-1.5 rounded-full mr-2">
                          <div
                            className="h-1.5 rounded-full bg-emerald-500"
                            style={{ width: "71.6%" }}
                          ></div>
                        </div>
                        <span>71.6%</span>
                      </div>
                    </div>
                  </div>

                  {/* Expenses Section */}
                  <div className="p-3 text-sm font-semibold text-white bg-slate-800/30 grid grid-cols-12 gap-4">
                    <div className="col-span-12">Expenses</div>
                  </div>
                  {[
                    {
                      category: "Cost of Goods Sold",
                      annualBudget: "$4,750,000",
                      ytdBudget: "$3,325,000",
                      ytdActual: "$3,275,000",
                      variance: "$50,000",
                      percentUsed: "69.0%",
                      positive: true,
                    },
                    {
                      category: "Salaries & Wages",
                      annualBudget: "$2,250,000",
                      ytdBudget: "$1,575,000",
                      ytdActual: "$1,625,000",
                      variance: "-$50,000",
                      percentUsed: "72.2%",
                      positive: false,
                    },
                    {
                      category: "Marketing & Advertising",
                      annualBudget: "$750,000",
                      ytdBudget: "$525,000",
                      ytdActual: "$475,000",
                      variance: "$50,000",
                      percentUsed: "63.3%",
                      positive: true,
                    },
                    {
                      category: "Rent & Utilities",
                      annualBudget: "$450,000",
                      ytdBudget: "$315,000",
                      ytdActual: "$315,000",
                      variance: "$0",
                      percentUsed: "70.0%",
                      positive: true,
                    },
                    {
                      category: "Other Expenses",
                      annualBudget: "$550,000",
                      ytdBudget: "$385,000",
                      ytdActual: "$385,000",
                      variance: "$0",
                      percentUsed: "70.0%",
                      positive: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-3 pl-4">{item.category}</div>
                      <div className="col-span-2">{item.annualBudget}</div>
                      <div className="col-span-2">{item.ytdBudget}</div>
                      <div className="col-span-2">{item.ytdActual}</div>
                      <div
                        className={`col-span-1 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.variance}
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center">
                          <div className="w-full bg-slate-700 h-1.5 rounded-full mr-2">
                            <div
                              className={`h-1.5 rounded-full ${item.positive ? "bg-emerald-500" : "bg-amber-500"}`}
                              style={{ width: item.percentUsed }}
                            ></div>
                          </div>
                          <span>{item.percentUsed}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-3">Total Expenses</div>
                    <div className="col-span-2">$8,750,000</div>
                    <div className="col-span-2">$6,125,000</div>
                    <div className="col-span-2">$6,075,000</div>
                    <div className="col-span-1 text-emerald-500">$50,000</div>
                    <div className="col-span-2">
                      <div className="flex items-center">
                        <div className="w-full bg-slate-700 h-1.5 rounded-full mr-2">
                          <div
                            className="h-1.5 rounded-full bg-emerald-500"
                            style={{ width: "69.4%" }}
                          ></div>
                        </div>
                        <span>69.4%</span>
                      </div>
                    </div>
                  </div>

                  {/* Net Income */}
                  <div className="p-3 text-sm font-bold text-white bg-slate-800/40 grid grid-cols-12 gap-4">
                    <div className="col-span-3">Net Income</div>
                    <div className="col-span-2">$3,750,000</div>
                    <div className="col-span-2">$2,625,000</div>
                    <div className="col-span-2">$2,875,000</div>
                    <div className="col-span-1 text-emerald-500">$250,000</div>
                    <div className="col-span-2">
                      <div className="flex items-center">
                        <div className="w-full bg-slate-700 h-1.5 rounded-full mr-2">
                          <div
                            className="h-1.5 rounded-full bg-emerald-500"
                            style={{ width: "76.7%" }}
                          ></div>
                        </div>
                        <span>76.7%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="department-budgets" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-3">Department</div>
                  <div className="col-span-2">Annual Budget</div>
                  <div className="col-span-2">YTD Budget</div>
                  <div className="col-span-2">YTD Actual</div>
                  <div className="col-span-1">Variance</div>
                  <div className="col-span-2">% of Budget Used</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      department: "Sales & Marketing",
                      annualBudget: "$2,250,000",
                      ytdBudget: "$1,575,000",
                      ytdActual: "$1,525,000",
                      variance: "$50,000",
                      percentUsed: "67.8%",
                      positive: true,
                    },
                    {
                      department: "Research & Development",
                      annualBudget: "$1,750,000",
                      ytdBudget: "$1,225,000",
                      ytdActual: "$1,275,000",
                      variance: "-$50,000",
                      percentUsed: "72.9%",
                      positive: false,
                    },
                    {
                      department: "Operations",
                      annualBudget: "$2,500,000",
                      ytdBudget: "$1,750,000",
                      ytdActual: "$1,700,000",
                      variance: "$50,000",
                      percentUsed: "68.0%",
                      positive: true,
                    },
                    {
                      department: "Human Resources",
                      annualBudget: "$750,000",
                      ytdBudget: "$525,000",
                      ytdActual: "$525,000",
                      variance: "$0",
                      percentUsed: "70.0%",
                      positive: true,
                    },
                    {
                      department: "Finance & Accounting",
                      annualBudget: "$850,000",
                      ytdBudget: "$595,000",
                      ytdActual: "$575,000",
                      variance: "$20,000",
                      percentUsed: "67.6%",
                      positive: true,
                    },
                    {
                      department: "Information Technology",
                      annualBudget: "$1,250,000",
                      ytdBudget: "$875,000",
                      ytdActual: "$895,000",
                      variance: "-$20,000",
                      percentUsed: "71.6%",
                      positive: false,
                    },
                    {
                      department: "Administration",
                      annualBudget: "$650,000",
                      ytdBudget: "$455,000",
                      ytdActual: "$455,000",
                      variance: "$0",
                      percentUsed: "70.0%",
                      positive: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-3">{item.department}</div>
                      <div className="col-span-2">{item.annualBudget}</div>
                      <div className="col-span-2">{item.ytdBudget}</div>
                      <div className="col-span-2">{item.ytdActual}</div>
                      <div
                        className={`col-span-1 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.variance}
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center">
                          <div className="w-full bg-slate-700 h-1.5 rounded-full mr-2">
                            <div
                              className={`h-1.5 rounded-full ${item.positive ? "bg-emerald-500" : "bg-amber-500"}`}
                              style={{ width: item.percentUsed }}
                            ></div>
                          </div>
                          <span>{item.percentUsed}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-sm font-bold text-white bg-slate-800/40 grid grid-cols-12 gap-4">
                    <div className="col-span-3">Total</div>
                    <div className="col-span-2">$10,000,000</div>
                    <div className="col-span-2">$7,000,000</div>
                    <div className="col-span-2">$6,950,000</div>
                    <div className="col-span-1 text-emerald-500">$50,000</div>
                    <div className="col-span-2">
                      <div className="flex items-center">
                        <div className="w-full bg-slate-700 h-1.5 rounded-full mr-2">
                          <div
                            className="h-1.5 rounded-full bg-emerald-500"
                            style={{ width: "69.5%" }}
                          ></div>
                        </div>
                        <span>69.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="forecasting" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-3">Category</div>
                  <div className="col-span-2">Annual Budget</div>
                  <div className="col-span-2">YTD Actual</div>
                  <div className="col-span-2">Forecast (EOY)</div>
                  <div className="col-span-1">Variance</div>
                  <div className="col-span-2">% Variance</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {/* Revenue Section */}
                  <div className="p-3 text-sm font-semibold text-white bg-slate-800/30 grid grid-cols-12 gap-4">
                    <div className="col-span-12">Revenue</div>
                  </div>
                  {[
                    {
                      category: "Product Sales",
                      annualBudget: "$9,500,000",
                      ytdActual: "$6,850,000",
                      forecast: "$9,800,000",
                      variance: "$300,000",
                      percentVariance: "+3.2%",
                      positive: true,
                    },
                    {
                      category: "Service Revenue",
                      annualBudget: "$2,750,000",
                      ytdActual: "$1,875,000",
                      forecast: "$2,700,000",
                      variance: "-$50,000",
                      percentVariance: "-1.8%",
                      positive: false,
                    },
                    {
                      category: "Other Revenue",
                      annualBudget: "$250,000",
                      ytdActual: "$225,000",
                      forecast: "$350,000",
                      variance: "$100,000",
                      percentVariance: "+40.0%",
                      positive: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-3 pl-4">{item.category}</div>
                      <div className="col-span-2">{item.annualBudget}</div>
                      <div className="col-span-2">{item.ytdActual}</div>
                      <div className="col-span-2">{item.forecast}</div>
                      <div
                        className={`col-span-1 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.variance}
                      </div>
                      <div
                        className={`col-span-2 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.percentVariance}
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-3">Total Revenue</div>
                    <div className="col-span-2">$12,500,000</div>
                    <div className="col-span-2">$8,950,000</div>
                    <div className="col-span-2">$12,850,000</div>
                    <div className="col-span-1 text-emerald-500">$350,000</div>
                    <div className="col-span-2 text-emerald-500">+2.8%</div>
                  </div>

                  {/* Expenses Section */}
                  <div className="p-3 text-sm font-semibold text-white bg-slate-800/30 grid grid-cols-12 gap-4">
                    <div className="col-span-12">Expenses</div>
                  </div>
                  {[
                    {
                      category: "Cost of Goods Sold",
                      annualBudget: "$4,750,000",
                      ytdActual: "$3,275,000",
                      forecast: "$4,700,000",
                      variance: "$50,000",
                      percentVariance: "+1.1%",
                      positive: true,
                    },
                    {
                      category: "Salaries & Wages",
                      annualBudget: "$2,250,000",
                      ytdActual: "$1,625,000",
                      forecast: "$2,300,000",
                      variance: "-$50,000",
                      percentVariance: "-2.2%",
                      positive: false,
                    },
                    {
                      category: "Marketing & Advertising",
                      annualBudget: "$750,000",
                      ytdActual: "$475,000",
                      forecast: "$700,000",
                      variance: "$50,000",
                      percentVariance: "+6.7%",
                      positive: true,
                    },
                    {
                      category: "Rent & Utilities",
                      annualBudget: "$450,000",
                      ytdActual: "$315,000",
                      forecast: "$450,000",
                      variance: "$0",
                      percentVariance: "0.0%",
                      positive: true,
                    },
                    {
                      category: "Other Expenses",
                      annualBudget: "$550,000",
                      ytdActual: "$385,000",
                      forecast: "$550,000",
                      variance: "$0",
                      percentVariance: "0.0%",
                      positive: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-3 pl-4">{item.category}</div>
                      <div className="col-span-2">{item.annualBudget}</div>
                      <div className="col-span-2">{item.ytdActual}</div>
                      <div className="col-span-2">{item.forecast}</div>
                      <div
                        className={`col-span-1 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.variance}
                      </div>
                      <div
                        className={`col-span-2 ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {item.percentVariance}
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-3">Total Expenses</div>
                    <div className="col-span-2">$8,750,000</div>
                    <div className="col-span-2">$6,075,000</div>
                    <div className="col-span-2">$8,700,000</div>
                    <div className="col-span-1 text-emerald-500">$50,000</div>
                    <div className="col-span-2 text-emerald-500">+0.6%</div>
                  </div>

                  {/* Net Income */}
                  <div className="p-3 text-sm font-bold text-white bg-slate-800/40 grid grid-cols-12 gap-4">
                    <div className="col-span-3">Net Income</div>
                    <div className="col-span-2">$3,750,000</div>
                    <div className="col-span-2">$2,875,000</div>
                    <div className="col-span-2">$4,150,000</div>
                    <div className="col-span-1 text-emerald-500">$400,000</div>
                    <div className="col-span-2 text-emerald-500">+10.7%</div>
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

export default Budgeting;
