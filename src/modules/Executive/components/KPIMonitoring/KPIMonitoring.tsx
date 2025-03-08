import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import FinancialKPIs from "./FinancialKPIs";

const KPIMonitoring = () => {
  const [activeTab, setActiveTab] = useState("financial");

  return (
    <div className="space-y-3">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">Active KPIs</h3>
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
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">24</p>
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
            <span>+3 since last quarter</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">On Target</h3>
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
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">18</p>
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
            <span>75% success rate</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">At Risk</h3>
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
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">4</p>
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
              <path d="m19 12-7 7-7-7" />
              <path d="M12 19V5" />
            </svg>
            <span>Needs attention</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Critical KPIs
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
              <path d="M12 9v2m0 4h.01" />
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">2</p>
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
              <path d="m19 12-7 7-7-7" />
              <path d="M12 19V5" />
            </svg>
            <span>Immediate action required</span>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-3">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-5 bg-slate-800">
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="operational">Operational</TabsTrigger>
              <TabsTrigger value="customer">Customer</TabsTrigger>
              <TabsTrigger value="employee">Employee</TabsTrigger>
              <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
            </TabsList>

            <TabsContent value="financial" className="mt-4">
              <FinancialKPIs />
            </TabsContent>

            <TabsContent value="operational" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                <Card className="border-slate-800 bg-slate-900 p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-medium text-slate-400">
                      Manufacturing Efficiency
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
                      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      <path d="M17 18h1" />
                      <path d="M12 18h1" />
                      <path d="M7 18h1" />
                    </svg>
                  </div>
                  <p className="mt-1 text-lg font-bold text-white">94.2%</p>
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
                    <span>2.1% from last quarter</span>
                  </div>
                </Card>

                <Card className="border-slate-800 bg-slate-900 p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-medium text-slate-400">
                      On-Time Delivery
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
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <p className="mt-1 text-lg font-bold text-white">96.8%</p>
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
                    <span>1.3% from last quarter</span>
                  </div>
                </Card>

                <Card className="border-slate-800 bg-slate-900 p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-medium text-slate-400">
                      Inventory Turnover
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
                      <path d="m7.5 4.27 9 5.15" />
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                      <path d="m3.3 7 8.7 5 8.7-5" />
                      <path d="M12 22V12" />
                    </svg>
                  </div>
                  <p className="mt-1 text-lg font-bold text-white">8.4x</p>
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
                    <span>0.6x from last quarter</span>
                  </div>
                </Card>
              </div>

              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-3">
                  <h3 className="text-xs font-medium text-white mb-1.5">
                    Operational Efficiency by Department
                  </h3>
                  <div className="space-y-2">
                    {[
                      {
                        department: "Manufacturing",
                        efficiency: 94,
                        target: 95,
                      },
                      { department: "Logistics", efficiency: 92, target: 90 },
                      { department: "Warehouse", efficiency: 88, target: 90 },
                      {
                        department: "Quality Control",
                        efficiency: 97,
                        target: 95,
                      },
                      { department: "Procurement", efficiency: 91, target: 92 },
                    ].map((dept) => (
                      <div key={dept.department} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-white">{dept.department}</span>
                          <div className="flex space-x-3">
                            <span className="text-slate-400">
                              Target: {dept.target}%
                            </span>
                            <span
                              className={`font-medium ${dept.efficiency >= dept.target ? "text-emerald-500" : "text-amber-500"}`}
                            >
                              {dept.efficiency}%
                            </span>
                          </div>
                        </div>
                        <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                          <div
                            className={`absolute h-1.5 rounded-full ${dept.efficiency >= dept.target ? "bg-emerald-500" : "bg-amber-500"}`}
                            style={{ width: `${dept.efficiency}%` }}
                          ></div>
                          <div
                            className="absolute h-3 w-0.5 bg-white top-1/2 transform -translate-y-1/2"
                            style={{ left: `${dept.target}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customer" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                <Card className="border-slate-800 bg-slate-900 p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-medium text-slate-400">
                      Customer Satisfaction
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
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <p className="mt-1 text-lg font-bold text-white">92%</p>
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
                    <span>3% from last quarter</span>
                  </div>
                </Card>

                <Card className="border-slate-800 bg-slate-900 p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-medium text-slate-400">
                      Net Promoter Score
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
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </div>
                  <p className="mt-1 text-lg font-bold text-white">68</p>
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
                    <span>5 points from last quarter</span>
                  </div>
                </Card>

                <Card className="border-slate-800 bg-slate-900 p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-medium text-slate-400">
                      Customer Retention
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
                      <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
                      <path d="m15 2 5 5-5 5" />
                    </svg>
                  </div>
                  <p className="mt-1 text-lg font-bold text-white">94.5%</p>
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
                    <span>1.2% from last quarter</span>
                  </div>
                </Card>
              </div>

              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-3">
                  <h3 className="text-xs font-medium text-white mb-1.5">
                    Customer Metrics by Region
                  </h3>
                  <div className="space-y-2">
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
                        className="border border-slate-800 rounded-md p-2"
                      >
                        <div className="flex justify-between items-center mb-1.5">
                          <h4 className="text-xs font-medium text-white">
                            {region.region}
                          </h4>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <div className="text-xs text-slate-400 mb-1">
                              Satisfaction
                            </div>
                            <div className="flex items-center">
                              <div className="relative w-full h-1.5 bg-slate-700 rounded-full mr-2">
                                <div
                                  className="absolute h-1.5 rounded-full bg-emerald-500"
                                  style={{ width: `${region.satisfaction}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-white">
                                {region.satisfaction}%
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-400 mb-1">
                              NPS
                            </div>
                            <div className="flex items-center">
                              <div className="relative w-full h-1.5 bg-slate-700 rounded-full mr-2">
                                <div
                                  className="absolute h-1.5 rounded-full bg-cyan-500"
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
                              <div className="relative w-full h-1.5 bg-slate-700 rounded-full mr-2">
                                <div
                                  className="absolute h-1.5 rounded-full bg-purple-500"
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

            <TabsContent value="employee" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                <Card className="border-slate-800 bg-slate-900 p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-medium text-slate-400">
                      Employee Engagement
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
                  <p className="mt-1 text-lg font-bold text-white">87%</p>
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
                    <span>4% from last year</span>
                  </div>
                </Card>

                <Card className="border-slate-800 bg-slate-900 p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-medium text-slate-400">
                      Retention Rate
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
                      <polyline points="16 11 18 13 22 9" />
                    </svg>
                  </div>
                  <p className="mt-1 text-lg font-bold text-white">94.5%</p>
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
                    <span>2.1% from industry average</span>
                  </div>
                </Card>

                <Card className="border-slate-800 bg-slate-900 p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-medium text-slate-400">
                      Training Completion
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
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <p className="mt-1 text-lg font-bold text-white">92.8%</p>
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
                    <span>5.3% from last quarter</span>
                  </div>
                </Card>
              </div>

              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-3">
                  <h3 className="text-xs font-medium text-white mb-1.5">
                    Employee Metrics by Department
                  </h3>
                  <div className="space-y-2">
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
                        className="border border-slate-800 rounded-md p-2"
                      >
                        <div className="flex justify-between items-center mb-1.5">
                          <h4 className="text-xs font-medium text-white">
                            {dept.department}
                          </h4>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <div className="text-xs text-slate-400 mb-1">
                              Engagement
                            </div>
                            <div className="flex items-center">
                              <div className="relative w-full h-1.5 bg-slate-700 rounded-full mr-2">
                                <div
                                  className="absolute h-1.5 rounded-full bg-emerald-500"
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
                              <div className="relative w-full h-1.5 bg-slate-700 rounded-full mr-2">
                                <div
                                  className="absolute h-1.5 rounded-full bg-cyan-500"
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
                              <div className="relative w-full h-1.5 bg-slate-700 rounded-full mr-2">
                                <div
                                  className="absolute h-1.5 rounded-full bg-purple-500"
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

            <TabsContent value="sustainability" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                <Card className="border-slate-800 bg-slate-900 p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-medium text-slate-400">
                      Carbon Footprint Reduction
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
                  <p className="mt-1 text-lg font-bold text-white">18.5%</p>
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
                    <span>3.2% from last year</span>
                  </div>
                </Card>

                <Card className="border-slate-800 bg-slate-900 p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-medium text-slate-400">
                      Renewable Energy Usage
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                      <path d="m12 16 4-4-4-4" />
                    </svg>
                  </div>
                  <p className="mt-1 text-lg font-bold text-white">42%</p>
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
                    <span>7% from last year</span>
                  </div>
                </Card>

                <Card className="border-slate-800 bg-slate-900 p-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-medium text-slate-400">
                      Waste Reduction
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
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  </div>
                  <p className="mt-1 text-lg font-bold text-white">24.8%</p>
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
                    <span>5.3% from last year</span>
                  </div>
                </Card>
              </div>

              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-3">
                  <h3 className="text-xs font-medium text-white mb-1.5">
                    Sustainability Goals Progress
                  </h3>
                  <div className="space-y-2">
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
                      <div key={goal.goal} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-white">{goal.goal}</span>
                          <div className="flex space-x-3">
                            <span className="text-slate-400">
                              Target: {goal.targetYear}
                            </span>
                            <span className="text-white font-medium">
                              {goal.progress}%
                            </span>
                          </div>
                        </div>
                        <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                          <div
                            className="absolute h-1.5 rounded-full bg-emerald-500"
                            style={{ width: `${goal.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default KPIMonitoring;
