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

const ProductionReporting = () => {
  const [activeTab, setActiveTab] = useState("performance");
  const [timePeriod, setTimePeriod] = useState("month");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Production Reporting
          </CardTitle>
          <div className="flex space-x-2">
            <Select value={timePeriod} onValueChange={setTimePeriod}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Last Week</SelectItem>
                <SelectItem value="month">Last Month</SelectItem>
                <SelectItem value="quarter">Last Quarter</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
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
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
            <TabsTrigger value="quality">Quality</TabsTrigger>
            <TabsTrigger value="costs">Costs</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="mt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[
                {
                  title: "Production Volume",
                  value: "12,450 units",
                  trend: "up",
                  change: "+8.5%",
                  color: "emerald",
                },
                {
                  title: "On-Time Completion",
                  value: "94.2%",
                  trend: "up",
                  change: "+2.1%",
                  color: "emerald",
                },
                {
                  title: "Capacity Utilization",
                  value: "87.5%",
                  trend: "down",
                  change: "-1.3%",
                  color: "red",
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
                          className={`text-${metric.color}-500`}
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
                          className={`text-${metric.color}-500`}
                        >
                          <path d="m19 12-7 7-7-7" />
                          <path d="M12 5v14" />
                        </svg>
                      )}
                      <span className={`text-xs text-${metric.color}-500 ml-1`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Production Volume by Product Line
              </h3>
              <div className="h-64 flex items-end space-x-1">
                {[
                  { name: "Circuit Boards", value: 4250, percentage: 85 },
                  { name: "Power Supplies", value: 3200, percentage: 64 },
                  { name: "Sensor Modules", value: 2800, percentage: 56 },
                  { name: "Control Panels", value: 2200, percentage: 44 },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1"
                  >
                    <div
                      className="w-full bg-cyan-600 rounded-t"
                      style={{ height: `${product.percentage}%` }}
                    ></div>
                    <div className="mt-2 text-xs text-slate-400 text-center">
                      {product.name}
                    </div>
                    <div className="text-xs font-medium text-white">
                      {product.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Production Trends
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-medium mb-3">
                    Monthly Production Volume
                  </h4>
                  <div className="h-48 flex items-end space-x-1">
                    {[65, 70, 68, 72, 75, 78, 80, 82, 85, 88, 92, 95].map(
                      (value, index) => (
                        <div
                          key={index}
                          className="flex-1 bg-cyan-600 rounded-t"
                          style={{ height: `${value}%` }}
                        ></div>
                      ),
                    )}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-400">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">
                    Production by Assembly Line
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        line: "Main Assembly Line A",
                        value: 4500,
                        percentage: 90,
                      },
                      {
                        line: "Main Assembly Line B",
                        value: 4000,
                        percentage: 80,
                      },
                      { line: "Secondary Line 1", value: 2500, percentage: 50 },
                      { line: "Secondary Line 2", value: 1450, percentage: 29 },
                    ].map((line, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>{line.line}</span>
                          <span>{line.value} units</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full">
                          <div
                            className="h-2 bg-cyan-600 rounded-full"
                            style={{ width: `${line.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="efficiency" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Efficiency Metrics
              </h3>
              <p className="text-slate-300">
                Efficiency metrics content will be displayed here.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="quality" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Quality Metrics
              </h3>
              <p className="text-slate-300">
                Quality metrics content will be displayed here.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="costs" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Cost Analysis
              </h3>
              <p className="text-slate-300">
                Cost analysis content will be displayed here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProductionReporting;
