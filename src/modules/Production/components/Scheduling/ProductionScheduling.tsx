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

const ProductionScheduling = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("work-orders");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Production Scheduling
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
              Create Work Order
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 flex items-center justify-between">
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
                placeholder="Search work orders..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="delayed">Delayed</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                <span className="text-xs font-medium text-blue-500">
                  Scheduled: 15
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  In Progress: 8
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Delayed: 3
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="work-orders">Work Orders</TabsTrigger>
            <TabsTrigger value="production-calendar">
              Production Calendar
            </TabsTrigger>
            <TabsTrigger value="bottlenecks">Bottleneck Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="work-orders" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Active Work Orders
              </h3>
              <div className="space-y-3">
                {[
                  {
                    id: "WO-2023-1234",
                    product: "Circuit Board Assembly",
                    quantity: 500,
                    status: "in-progress",
                    progress: 65,
                    dueDate: "2023-09-15",
                    priority: "high",
                  },
                  {
                    id: "WO-2023-1235",
                    product: "Power Supply Unit",
                    quantity: 350,
                    status: "scheduled",
                    progress: 0,
                    dueDate: "2023-09-20",
                    priority: "medium",
                  },
                  {
                    id: "WO-2023-1236",
                    product: "Sensor Module",
                    quantity: 1200,
                    status: "in-progress",
                    progress: 30,
                    dueDate: "2023-09-18",
                    priority: "high",
                  },
                  {
                    id: "WO-2023-1237",
                    product: "Control Panel",
                    quantity: 200,
                    status: "delayed",
                    progress: 45,
                    dueDate: "2023-09-10",
                    priority: "critical",
                  },
                ].map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-md border border-slate-700"
                  >
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium text-white">
                          {order.product}
                        </h4>
                        <span
                          className={`ml-3 text-xs px-2 py-0.5 rounded-full ${
                            order.priority === "critical"
                              ? "bg-red-500/10 text-red-500"
                              : order.priority === "high"
                                ? "bg-amber-500/10 text-amber-500"
                                : "bg-blue-500/10 text-blue-500"
                          }`}
                        >
                          {order.priority}
                        </span>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-slate-400 mr-3">
                          ID: {order.id}
                        </span>
                        <span className="text-xs text-slate-400 mr-3">
                          Qty: {order.quantity}
                        </span>
                        <span className="text-xs text-slate-400">
                          Due: {order.dueDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          order.status === "in-progress"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : order.status === "scheduled"
                              ? "bg-blue-500/10 text-blue-500"
                              : "bg-amber-500/10 text-amber-500"
                        }`}
                      >
                        {order.status.replace("-", " ")}
                      </span>
                      <div className="w-32">
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-slate-400">
                            Progress
                          </span>
                          <span className="text-xs font-medium text-white">
                            {order.progress}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full">
                          <div
                            className={`h-2 rounded-full ${
                              order.status === "delayed"
                                ? "bg-amber-500"
                                : "bg-cyan-600"
                            }`}
                            style={{ width: `${order.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
                          className="h-4 w-4"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="production-calendar" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Production Calendar
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <Button variant="outline" size="sm">
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
                      className="mr-2 h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    Previous
                  </Button>
                  <h4 className="text-white font-medium">September 2023</h4>
                  <Button variant="outline" size="sm">
                    Next
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
                      className="ml-2 h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <div
                        key={day}
                        className="py-1 text-xs font-medium text-slate-400"
                      >
                        {day}
                      </div>
                    ),
                  )}
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => (
                    <div
                      key={date}
                      className={`p-2 text-sm rounded-md border ${date === 15 ? "bg-cyan-600/20 border-cyan-600/50 text-white" : "border-slate-800 hover:border-slate-700"}`}
                    >
                      <div className="font-medium">{date}</div>
                      {date === 15 && (
                        <div className="mt-1 text-xs text-cyan-400">
                          3 Orders
                        </div>
                      )}
                      {date === 20 && (
                        <div className="mt-1 text-xs text-slate-500">
                          1 Order
                        </div>
                      )}
                      {date === 25 && (
                        <div className="mt-1 text-xs text-slate-500">
                          2 Orders
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bottlenecks" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Bottleneck Analysis
              </h3>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Identify and resolve production bottlenecks to optimize
                  throughput and efficiency.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      station: "Assembly Station 3",
                      utilization: 95,
                      status: "Critical",
                      impact: "High",
                      recommendation: "Add additional capacity",
                    },
                    {
                      station: "Quality Testing",
                      utilization: 88,
                      status: "Warning",
                      impact: "Medium",
                      recommendation: "Optimize test procedures",
                    },
                    {
                      station: "Packaging Line 2",
                      utilization: 75,
                      status: "Normal",
                      impact: "Low",
                      recommendation: "Monitor for changes",
                    },
                    {
                      station: "Component Preparation",
                      utilization: 82,
                      status: "Warning",
                      impact: "Medium",
                      recommendation: "Review process efficiency",
                    },
                  ].map((bottleneck, index) => (
                    <div
                      key={index}
                      className="p-3 bg-slate-800/50 rounded-md border border-slate-700"
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium text-white">
                          {bottleneck.station}
                        </h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            bottleneck.status === "Critical"
                              ? "bg-red-500/10 text-red-500"
                              : bottleneck.status === "Warning"
                                ? "bg-amber-500/10 text-amber-500"
                                : "bg-emerald-500/10 text-emerald-500"
                          }`}
                        >
                          {bottleneck.status}
                        </span>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-slate-400">
                            Utilization
                          </span>
                          <span className="text-xs font-medium text-white">
                            {bottleneck.utilization}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full">
                          <div
                            className={`h-2 rounded-full ${
                              bottleneck.status === "Critical"
                                ? "bg-red-500"
                                : bottleneck.status === "Warning"
                                  ? "bg-amber-500"
                                  : "bg-emerald-500"
                            }`}
                            style={{ width: `${bottleneck.utilization}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-slate-400">
                        <div>
                          <span className="text-slate-300">Impact:</span>{" "}
                          {bottleneck.impact}
                        </div>
                        <div>
                          <span className="text-slate-300">
                            Recommendation:
                          </span>{" "}
                          {bottleneck.recommendation}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProductionScheduling;
