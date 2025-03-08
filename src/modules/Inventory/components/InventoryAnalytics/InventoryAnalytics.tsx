import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InventoryAnalytics = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState("quarterly");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Inventory Analytics
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
              Export Report
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Schedule Report
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-slate-800">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="forecasting">Forecasting</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center space-x-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-slate-400">
                    Inventory Turnover
                  </h3>
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
                    className="text-cyan-500"
                  >
                    <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-white">6.8x</p>
                <p className="text-xs text-emerald-500 mt-1">
                  ↑ 0.5x from last year
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-slate-400">
                    Days Inventory Outstanding
                  </h3>
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
                    className="text-cyan-500"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-white">42 days</p>
                <p className="text-xs text-emerald-500 mt-1">
                  ↓ 5 days from last year
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-slate-400">
                    Inventory Accuracy
                  </h3>
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
                    className="text-cyan-500"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-white">98.2%</p>
                <p className="text-xs text-emerald-500 mt-1">
                  ↑ 1.5% from last year
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-slate-800 bg-slate-900">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-white mb-4">
                Inventory Value by Category
              </h3>
              <div className="space-y-4">
                {[
                  {
                    category: "Electronics",
                    value: 450000,
                    percentage: 36,
                    color: "bg-cyan-500",
                  },
                  {
                    category: "Furniture",
                    value: 320000,
                    percentage: 26,
                    color: "bg-purple-500",
                  },
                  {
                    category: "Clothing",
                    value: 280000,
                    percentage: 22,
                    color: "bg-emerald-500",
                  },
                  {
                    category: "Home Appliances",
                    value: 150000,
                    percentage: 12,
                    color: "bg-amber-500",
                  },
                  {
                    category: "Others",
                    value: 40000,
                    percentage: 4,
                    color: "bg-blue-500",
                  },
                ].map((item) => (
                  <div key={item.category} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white">{item.category}</span>
                      <div className="flex space-x-4">
                        <span className="text-white font-medium">
                          ${(item.value / 1000).toFixed(1)}K
                        </span>
                        <span className="text-slate-400 w-8 text-right">
                          {item.percentage}%
                        </span>
                      </div>
                    </div>
                    <Progress
                      value={item.percentage}
                      className="h-2 bg-slate-700"
                      indicatorClassName={item.color}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Inventory Turnover by Category
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      category: "Electronics",
                      turnover: 8.2,
                      target: 8.0,
                      status: "Good",
                    },
                    {
                      category: "Furniture",
                      turnover: 4.5,
                      target: 5.0,
                      status: "Needs Improvement",
                    },
                    {
                      category: "Clothing",
                      turnover: 9.8,
                      target: 9.0,
                      status: "Excellent",
                    },
                    {
                      category: "Home Appliances",
                      turnover: 6.3,
                      target: 6.0,
                      status: "Good",
                    },
                    {
                      category: "Others",
                      turnover: 5.1,
                      target: 5.0,
                      status: "Good",
                    },
                  ].map((item) => (
                    <div key={item.category} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">{item.category}</span>
                        <div className="flex space-x-4">
                          <span className="text-slate-400">
                            Target: {item.target}x
                          </span>
                          <span
                            className={`font-medium ${item.turnover >= item.target ? "text-emerald-500" : "text-amber-500"}`}
                          >
                            {item.turnover}x
                          </span>
                        </div>
                      </div>
                      <div className="relative h-2 w-full bg-slate-700 rounded-full">
                        <div
                          className={`absolute h-2 rounded-full ${item.turnover >= item.target ? "bg-emerald-500" : "bg-amber-500"}`}
                          style={{ width: `${(item.turnover / 10) * 100}%` }}
                        ></div>
                        <div
                          className="absolute h-4 w-0.5 bg-white top-1/2 transform -translate-y-1/2"
                          style={{ left: `${(item.target / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Stock Status Distribution
                </h3>
                <div className="flex h-64 items-center justify-center">
                  <div className="relative h-64 w-64">
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth="10"
                      />
                      {/* In Stock: 65% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#0ea5e9"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeDashoffset="87.92"
                        transform="rotate(-90 50 50)"
                      />
                      {/* Low Stock: 20% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeDashoffset="201.0"
                        transform="rotate(-90 50 50)"
                      />
                      {/* Out of Stock: 15% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeDashoffset="213.52"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-bold text-white">
                        4,285
                      </span>
                      <span className="text-sm text-slate-400">
                        Total Products
                      </span>
                    </div>
                  </div>
                  <div className="ml-8 space-y-4">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-cyan-500 mr-2"></div>
                      <span className="text-sm text-slate-300">
                        In Stock (65%)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                      <span className="text-sm text-slate-300">
                        Low Stock (20%)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm text-slate-300">
                        Out of Stock (15%)
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="mt-6 space-y-6">
          <Card className="border-slate-800 bg-slate-900">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-white mb-4">
                Inventory Turnover Trend
              </h3>
              <div className="h-64 flex items-end space-x-2">
                {[
                  { month: "Jan", value: 5.8 },
                  { month: "Feb", value: 6.2 },
                  { month: "Mar", value: 6.5 },
                  { month: "Apr", value: 6.3 },
                  { month: "May", value: 6.7 },
                  { month: "Jun", value: 7.1 },
                  { month: "Jul", value: 6.9 },
                  { month: "Aug", value: 7.2 },
                  { month: "Sep", value: 6.8 },
                  { month: "Oct", value: 7.0 },
                  { month: "Nov", value: 7.3 },
                  { month: "Dec", value: 7.5 },
                ].map((data, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center"
                  >
                    <div
                      className="w-full bg-cyan-500 rounded-t"
                      style={{ height: `${(data.value / 7.5) * 100}%` }}
                    ></div>
                    <span className="text-xs text-slate-400 mt-2">
                      {data.month}
                    </span>
                    <span className="text-xs font-medium text-white">
                      {data.value}x
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecasting" className="mt-6 space-y-6">
          <Card className="border-slate-800 bg-slate-900">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-white mb-4">
                Inventory Forecast - Next 6 Months
              </h3>
              <div className="space-y-4">
                {[
                  {
                    category: "Electronics",
                    current: 450000,
                    forecast: 520000,
                    growth: 15.6,
                  },
                  {
                    category: "Furniture",
                    current: 320000,
                    forecast: 340000,
                    growth: 6.3,
                  },
                  {
                    category: "Clothing",
                    current: 280000,
                    forecast: 350000,
                    growth: 25.0,
                  },
                  {
                    category: "Home Appliances",
                    current: 150000,
                    forecast: 165000,
                    growth: 10.0,
                  },
                  {
                    category: "Others",
                    current: 40000,
                    forecast: 45000,
                    growth: 12.5,
                  },
                ].map((item) => (
                  <div key={item.category} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white">{item.category}</span>
                      <div className="flex space-x-4">
                        <span className="text-slate-400">
                          Current: ${(item.current / 1000).toFixed(1)}K
                        </span>
                        <span className="text-emerald-500">
                          ↑ {item.growth}%
                        </span>
                        <span className="text-white font-medium">
                          ${(item.forecast / 1000).toFixed(1)}K
                        </span>
                      </div>
                    </div>
                    <div className="relative h-2 w-full bg-slate-700 rounded-full">
                      <div
                        className="absolute h-2 rounded-full bg-slate-500"
                        style={{ width: `${(item.current / 600000) * 100}%` }}
                      ></div>
                      <div
                        className="absolute h-2 rounded-full bg-cyan-500"
                        style={{ width: `${(item.forecast / 600000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </CardContent>
    </Card>
  );
};

export default InventoryAnalytics;
