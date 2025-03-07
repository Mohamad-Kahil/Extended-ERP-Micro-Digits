import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PerformanceMetrics = () => {
  const [activeTab, setActiveTab] = useState("kpis");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Performance Metrics
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
              Add Metric
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="kpis">Key Performance Indicators</TabsTrigger>
            <TabsTrigger value="trends">Performance Trends</TabsTrigger>
            <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
          </TabsList>

          <TabsContent value="kpis" className="mt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[
                {
                  title: "Operational Efficiency",
                  value: "92.5%",
                  trend: "up",
                  change: "+1.5%",
                  color: "emerald",
                },
                {
                  title: "Process Cycle Time",
                  value: "4.2 days",
                  trend: "down",
                  change: "-0.3 days",
                  color: "emerald",
                },
                {
                  title: "Resource Utilization",
                  value: "87.8%",
                  trend: "up",
                  change: "+2.1%",
                  color: "emerald",
                },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-800/50 rounded-md border border-slate-700"
                >
                  <h4 className="text-slate-400 text-sm mb-1">
                    {metric.title}
                  </h4>
                  <div className="flex items-end">
                    <span className="text-2xl font-bold text-white">
                      {metric.value}
                    </span>
                    <div className="flex items-center ml-2 mb-1">
                      {metric.trend === "up" ? (
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
                          className="text-emerald-500"
                        >
                          <path d="m5 12 7-7 7 7" />
                          <path d="M12 19V5" />
                        </svg>
                      ) : (
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
                          className="text-emerald-500"
                        >
                          <path d="m19 12-7 7-7-7" />
                          <path d="M12 5v14" />
                        </svg>
                      )}
                      <span className="text-xs text-emerald-500 ml-1">
                        {metric.change}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Department Performance
              </h3>
              <div className="space-y-4">
                {[
                  { department: "Production", score: 94, target: 90 },
                  { department: "Logistics", score: 88, target: 85 },
                  { department: "Quality Control", score: 92, target: 95 },
                  { department: "Customer Service", score: 96, target: 90 },
                  { department: "Procurement", score: 85, target: 88 },
                ].map((dept, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>{dept.department}</span>
                      <span>
                        {dept.score}% / {dept.target}% target
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full">
                      <div
                        className={`h-2 rounded-full ${dept.score >= dept.target ? "bg-emerald-500" : "bg-amber-500"}`}
                        style={{ width: `${dept.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Performance Trends
              </h3>
              <div className="h-64 flex items-end space-x-1">
                {[
                  { month: "Jan", value: 82 },
                  { month: "Feb", value: 84 },
                  { month: "Mar", value: 85 },
                  { month: "Apr", value: 87 },
                  { month: "May", value: 84 },
                  { month: "Jun", value: 86 },
                  { month: "Jul", value: 88 },
                  { month: "Aug", value: 90 },
                  { month: "Sep", value: 92 },
                  { month: "Oct", value: 93 },
                  { month: "Nov", value: 91 },
                  { month: "Dec", value: 94 },
                ].map((month, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1"
                  >
                    <div
                      className="w-full bg-cyan-600 rounded-t"
                      style={{ height: `${month.value}%` }}
                    ></div>
                    <div className="mt-2 text-xs text-slate-400">
                      {month.month}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="benchmarks" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Industry Benchmarks
              </h3>
              <div className="space-y-4">
                {[
                  {
                    metric: "Operational Efficiency",
                    company: 92.5,
                    industry: 85.0,
                    best: 96.0,
                  },
                  {
                    metric: "Process Cycle Time (days)",
                    company: 4.2,
                    industry: 5.8,
                    best: 3.5,
                  },
                  {
                    metric: "Resource Utilization",
                    company: 87.8,
                    industry: 80.0,
                    best: 92.0,
                  },
                  {
                    metric: "Cost Efficiency",
                    company: 88.5,
                    industry: 82.0,
                    best: 94.0,
                  },
                  {
                    metric: "Quality Rating",
                    company: 95.2,
                    industry: 90.0,
                    best: 98.5,
                  },
                ].map((benchmark, index) => (
                  <div
                    key={index}
                    className="p-3 bg-slate-800/50 rounded-md border border-slate-700"
                  >
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium text-white">
                        {benchmark.metric}
                      </h4>
                      <div className="flex space-x-4">
                        <div className="flex items-center">
                          <span className="h-3 w-3 rounded-full bg-cyan-500 mr-2"></span>
                          <span className="text-xs text-slate-300">
                            Your Company
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="h-3 w-3 rounded-full bg-slate-500 mr-2"></span>
                          <span className="text-xs text-slate-300">
                            Industry Avg
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="h-3 w-3 rounded-full bg-emerald-500 mr-2"></span>
                          <span className="text-xs text-slate-300">
                            Industry Best
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="h-4 bg-slate-700 rounded-full relative">
                      {/* Industry Average */}
                      <div
                        className="absolute h-4 bg-slate-500 rounded-full"
                        style={{ width: `${benchmark.industry}%` }}
                      ></div>
                      {/* Company Performance */}
                      <div
                        className="absolute h-4 bg-cyan-500 rounded-full"
                        style={{ width: `${benchmark.company}%` }}
                      ></div>
                      {/* Industry Best */}
                      <div
                        className="absolute top-0 bottom-0 w-1 bg-emerald-500"
                        style={{ left: `${benchmark.best}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-slate-400">
                      <span>0%</span>
                      <span>100%</span>
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

export default PerformanceMetrics;
