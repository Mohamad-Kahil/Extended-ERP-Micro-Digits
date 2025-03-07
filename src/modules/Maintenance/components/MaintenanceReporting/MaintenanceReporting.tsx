import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const MaintenanceReporting = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Reporting & Analytics
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
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
              Schedule Report
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="kpi">KPI Tracking</TabsTrigger>
            <TabsTrigger value="cost">Cost Analysis</TabsTrigger>
            <TabsTrigger value="compliance">Compliance Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Maintenance Costs
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
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">$128.5K</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↓ 8.2% from last quarter
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Mean Time Between Failures
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
                    ↑ 5 days from last quarter
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Preventive Maintenance Compliance
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
                  <p className="text-3xl font-bold text-white">94.2%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 2.5% from last quarter
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Maintenance Costs by Type
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        type: "Preventive",
                        cost: 45000,
                        percentage: 35,
                        color: "bg-emerald-500",
                      },
                      {
                        type: "Corrective",
                        cost: 58000,
                        percentage: 45,
                        color: "bg-amber-500",
                      },
                      {
                        type: "Predictive",
                        cost: 15000,
                        percentage: 12,
                        color: "bg-blue-500",
                      },
                      {
                        type: "Emergency",
                        cost: 10500,
                        percentage: 8,
                        color: "bg-red-500",
                      },
                    ].map((item) => (
                      <div key={item.type} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white">{item.type}</span>
                          <div className="flex space-x-4">
                            <span className="text-slate-400">
                              ${item.cost.toLocaleString()}
                            </span>
                            <span className="text-white font-medium">
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

              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Work Order Completion Trend
                  </h3>
                  <div className="h-64 flex items-end space-x-2">
                    {[
                      { month: "Jul", completed: 42, onTime: 38 },
                      { month: "Aug", completed: 48, onTime: 45 },
                      { month: "Sep", completed: 45, onTime: 42 },
                      { month: "Oct", completed: 52, onTime: 48 },
                      { month: "Nov", completed: 58, onTime: 55 },
                      { month: "Dec", completed: 62, onTime: 60 },
                    ].map((data, index) => (
                      <div
                        key={index}
                        className="flex-1 flex flex-col items-center"
                      >
                        <div className="w-full relative h-48">
                          <div
                            className="absolute bottom-0 w-full bg-slate-600 rounded-t"
                            style={{
                              height: `${(data.completed / 62) * 100}%`,
                            }}
                          ></div>
                          <div
                            className="absolute bottom-0 w-full bg-cyan-500 rounded-t"
                            style={{ height: `${(data.onTime / 62) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-slate-400 mt-2">
                          {data.month}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-slate-600 mr-2"></div>
                      <span className="text-xs text-slate-300">
                        Total Completed
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-500 mr-2"></div>
                      <span className="text-xs text-slate-300">
                        Completed On Time
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="kpi" className="mt-6 space-y-6">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Key Performance Indicators
                </h3>
                <p className="text-slate-400">
                  Detailed KPI tracking and metrics will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cost" className="mt-6 space-y-6">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Cost Analysis
                </h3>
                <p className="text-slate-400">
                  Detailed cost analysis and breakdowns will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="mt-6 space-y-6">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Compliance Reports
                </h3>
                <p className="text-slate-400">
                  Compliance reporting and regulatory tracking will be displayed
                  here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MaintenanceReporting;
