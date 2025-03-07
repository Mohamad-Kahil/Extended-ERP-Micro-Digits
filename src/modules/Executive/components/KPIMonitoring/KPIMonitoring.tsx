import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import FinancialKPIs from "./FinancialKPIs";

const KPIMonitoring = () => {
  const [activeTab, setActiveTab] = useState("financial");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Key Performance Indicators
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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800">
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="operational">Operational</TabsTrigger>
            <TabsTrigger value="customer">Customer</TabsTrigger>
            <TabsTrigger value="employee">Employee</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          </TabsList>

          <TabsContent value="financial" className="mt-6 space-y-6">
            <FinancialKPIs />
          </TabsContent>

          <TabsContent value="operational" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Manufacturing Efficiency
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
                      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      <path d="M17 18h1" />
                      <path d="M12 18h1" />
                      <path d="M7 18h1" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">94.2%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 2.1% from last quarter
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      On-Time Delivery
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
                  <p className="text-3xl font-bold text-white">96.8%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 1.3% from last quarter
                  </p>
                </CardContent>
              </Card>

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
                      <path d="m7.5 4.27 9 5.15" />
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                      <path d="m3.3 7 8.7 5 8.7-5" />
                      <path d="M12 22V12" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">8.4x</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 0.6x from last quarter
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Operational Efficiency by Department
                </h3>
                <div className="space-y-4">
                  {[
                    { department: "Manufacturing", efficiency: 94, target: 95 },
                    { department: "Logistics", efficiency: 92, target: 90 },
                    { department: "Warehouse", efficiency: 88, target: 90 },
                    {
                      department: "Quality Control",
                      efficiency: 97,
                      target: 95,
                    },
                    { department: "Procurement", efficiency: 91, target: 92 },
                  ].map((dept) => (
                    <div key={dept.department} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">{dept.department}</span>
                        <div className="flex space-x-4">
                          <span className="text-slate-400">
                            Target: {dept.target}%
                          </span>
                          <span className="text-white font-medium">
                            {dept.efficiency}%
                          </span>
                        </div>
                      </div>
                      <div className="relative h-2 w-full bg-slate-700 rounded-full">
                        <div
                          className={`absolute h-2 rounded-full ${dept.efficiency >= dept.target ? "bg-emerald-500" : "bg-amber-500"}`}
                          style={{ width: `${dept.efficiency}%` }}
                        ></div>
                        <div
                          className="absolute h-4 w-0.5 bg-white top-1/2 transform -translate-y-1/2"
                          style={{ left: `${dept.target}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customer" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Customer Satisfaction
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
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">92%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 3% from last quarter
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Net Promoter Score
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
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">68</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 5 points from last quarter
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Customer Retention
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
                      <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
                      <path d="m15 2 5 5-5 5" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">94.5%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 1.2% from last quarter
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Customer Metrics by Region
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      region: "North America",
                      satisfaction: 94,
                      nps: 72,
                      retention: 96,
                    },
                    {
                      region: "Europe",
                      satisfaction: 91,
                      nps: 68,
                      retention: 93,
                    },
                    {
                      region: "Asia Pacific",
                      satisfaction: 89,
                      nps: 65,
                      retention: 92,
                    },
                    {
                      region: "Latin America",
                      satisfaction: 87,
                      nps: 62,
                      retention: 90,
                    },
                    {
                      region: "Middle East & Africa",
                      satisfaction: 85,
                      nps: 58,
                      retention: 88,
                    },
                  ].map((region) => (
                    <div
                      key={region.region}
                      className="border border-slate-800 rounded-md p-4"
                    >
                      <h4 className="font-medium text-white mb-3">
                        {region.region}
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-slate-400 mb-1">
                            Satisfaction
                          </div>
                          <div className="flex items-center">
                            <div className="w-full h-2 bg-slate-700 rounded-full mr-2">
                              <div
                                className="h-2 rounded-full bg-emerald-500"
                                style={{ width: `${region.satisfaction}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-white">
                              {region.satisfaction}%
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 mb-1">NPS</div>
                          <div className="flex items-center">
                            <div className="w-full h-2 bg-slate-700 rounded-full mr-2">
                              <div
                                className="h-2 rounded-full bg-cyan-500"
                                style={{
                                  width: `${(region.nps / 100) * 100}%`,
                                }}
                              ></div>
                            </div>
                            <span className="text-xs text-white">
                              {region.nps}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 mb-1">
                            Retention
                          </div>
                          <div className="flex items-center">
                            <div className="w-full h-2 bg-slate-700 rounded-full mr-2">
                              <div
                                className="h-2 rounded-full bg-purple-500"
                                style={{ width: `${region.retention}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-white">
                              {region.retention}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="employee" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Employee Engagement
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">87%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 4% from last year
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Retention Rate
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <polyline points="16 11 18 13 22 9" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">94.5%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 2.1% from industry average
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Training Completion
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
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">92.8%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 5.3% from last quarter
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Employee Metrics by Department
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      department: "Engineering",
                      engagement: 89,
                      retention: 96,
                      training: 94,
                    },
                    {
                      department: "Sales & Marketing",
                      engagement: 86,
                      retention: 92,
                      training: 90,
                    },
                    {
                      department: "Operations",
                      engagement: 84,
                      retention: 95,
                      training: 93,
                    },
                    {
                      department: "Customer Support",
                      engagement: 82,
                      retention: 91,
                      training: 95,
                    },
                    {
                      department: "Administration",
                      engagement: 88,
                      retention: 97,
                      training: 91,
                    },
                  ].map((dept) => (
                    <div
                      key={dept.department}
                      className="border border-slate-800 rounded-md p-4"
                    >
                      <h4 className="font-medium text-white mb-3">
                        {dept.department}
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-slate-400 mb-1">
                            Engagement
                          </div>
                          <div className="flex items-center">
                            <div className="w-full h-2 bg-slate-700 rounded-full mr-2">
                              <div
                                className="h-2 rounded-full bg-emerald-500"
                                style={{ width: `${dept.engagement}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-white">
                              {dept.engagement}%
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 mb-1">
                            Retention
                          </div>
                          <div className="flex items-center">
                            <div className="w-full h-2 bg-slate-700 rounded-full mr-2">
                              <div
                                className="h-2 rounded-full bg-cyan-500"
                                style={{ width: `${dept.retention}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-white">
                              {dept.retention}%
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 mb-1">
                            Training
                          </div>
                          <div className="flex items-center">
                            <div className="w-full h-2 bg-slate-700 rounded-full mr-2">
                              <div
                                className="h-2 rounded-full bg-purple-500"
                                style={{ width: `${dept.training}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-white">
                              {dept.training}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sustainability" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Carbon Footprint Reduction
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
                      <path d="M2 22v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                      <path d="M7 22v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                      <path d="M12 22v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                      <path d="M17 22v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                      <path d="M2 17v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                      <path d="M7 17v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                      <path d="M12 17v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                      <path d="M17 17v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                      <path d="M7 12v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                      <path d="M12 12v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                      <path d="M17 12v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                      <path d="M12 7V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">18.5%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 3.2% from last year
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Renewable Energy Usage
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
                      <path d="M8 12h8" />
                      <path d="m12 16 4-4-4-4" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">42%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 7% from last year
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Waste Reduction
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
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">24.8%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 5.3% from last year
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Sustainability Goals Progress
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      goal: "Carbon Neutrality by 2030",
                      progress: 42,
                      target: 100,
                      targetYear: 2030,
                    },
                    {
                      goal: "100% Renewable Energy",
                      progress: 42,
                      target: 100,
                      targetYear: 2028,
                    },
                    {
                      goal: "Zero Waste to Landfill",
                      progress: 68,
                      target: 100,
                      targetYear: 2025,
                    },
                    {
                      goal: "Sustainable Supply Chain",
                      progress: 56,
                      target: 100,
                      targetYear: 2026,
                    },
                    {
                      goal: "Water Usage Reduction",
                      progress: 61,
                      target: 75,
                      targetYear: 2025,
                    },
                  ].map((goal) => (
                    <div key={goal.goal} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">{goal.goal}</span>
                        <div className="flex space-x-4">
                          <span className="text-slate-400">
                            Target: {goal.targetYear}
                          </span>
                          <span className="text-white font-medium">
                            {goal.progress}%
                          </span>
                        </div>
                      </div>
                      <Progress
                        value={goal.progress}
                        className="h-2 bg-slate-700"
                        indicatorClassName="bg-emerald-500"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default KPIMonitoring;
