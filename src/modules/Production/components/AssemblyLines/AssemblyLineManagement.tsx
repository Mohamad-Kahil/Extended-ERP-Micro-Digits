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

const AssemblyLineManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("lines");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Assembly Line Management
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
              Configure Line
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
                placeholder="Search assembly lines..."
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="idle">Idle</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="setup">Setup</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Active: 5
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Idle: 2
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                <span className="text-xs font-medium text-blue-500">
                  Setup: 1
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="lines">Assembly Lines</TabsTrigger>
            <TabsTrigger value="workstations">Workstations</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="lines" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Assembly Line Overview
              </h3>
              <div className="space-y-3">
                {[
                  {
                    id: "AL-001",
                    name: "Main Assembly Line A",
                    product: "Circuit Board Assembly",
                    stations: 8,
                    status: "active",
                    efficiency: 92,
                    currentOrder: "WO-2023-1234",
                  },
                  {
                    id: "AL-002",
                    name: "Main Assembly Line B",
                    product: "Power Supply Unit",
                    stations: 6,
                    status: "active",
                    efficiency: 88,
                    currentOrder: "WO-2023-1235",
                  },
                  {
                    id: "AL-003",
                    name: "Secondary Line 1",
                    product: "Sensor Module",
                    stations: 5,
                    status: "active",
                    efficiency: 90,
                    currentOrder: "WO-2023-1236",
                  },
                  {
                    id: "AL-004",
                    name: "Secondary Line 2",
                    product: "Control Panel",
                    stations: 4,
                    status: "idle",
                    efficiency: 85,
                    currentOrder: null,
                  },
                  {
                    id: "AL-005",
                    name: "Specialty Line",
                    product: "Custom Components",
                    stations: 7,
                    status: "setup",
                    efficiency: 0,
                    currentOrder: "WO-2023-1240",
                  },
                ].map((line) => (
                  <div
                    key={line.id}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-md border border-slate-700"
                  >
                    <div>
                      <h4 className="font-medium text-white">{line.name}</h4>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-slate-400 mr-3">
                          ID: {line.id}
                        </span>
                        <span className="text-xs text-slate-400 mr-3">
                          Product: {line.product}
                        </span>
                        <span className="text-xs text-slate-400">
                          Stations: {line.stations}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {line.currentOrder && (
                        <div className="text-sm text-slate-300">
                          <span className="text-slate-400">Order:</span>{" "}
                          {line.currentOrder}
                        </div>
                      )}
                      {line.status !== "setup" && (
                        <div className="w-24">
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-slate-400">
                              Efficiency
                            </span>
                            <span className="text-xs font-medium text-white">
                              {line.efficiency}%
                            </span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full">
                            <div
                              className={`h-2 rounded-full ${
                                line.efficiency >= 90
                                  ? "bg-emerald-500"
                                  : line.efficiency >= 80
                                    ? "bg-amber-500"
                                    : "bg-red-500"
                              }`}
                              style={{ width: `${line.efficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          line.status === "active"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : line.status === "idle"
                              ? "bg-amber-500/10 text-amber-500"
                              : line.status === "setup"
                                ? "bg-blue-500/10 text-blue-500"
                                : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {line.status}
                      </span>
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
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="workstations" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Workstation Management
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <Select defaultValue="AL-001">
                    <SelectTrigger className="w-64">
                      <SelectValue placeholder="Select Assembly Line" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AL-001">
                        Main Assembly Line A
                      </SelectItem>
                      <SelectItem value="AL-002">
                        Main Assembly Line B
                      </SelectItem>
                      <SelectItem value="AL-003">Secondary Line 1</SelectItem>
                      <SelectItem value="AL-004">Secondary Line 2</SelectItem>
                      <SelectItem value="AL-005">Specialty Line</SelectItem>
                    </SelectContent>
                  </Select>
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
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    Add Workstation
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Station ID
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Name
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Operation
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Operator
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Cycle Time
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Status
                        </th>
                        <th className="py-2 px-4 text-right text-sm font-medium text-slate-300">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          id: "WS-A1",
                          name: "Station 1",
                          operation: "Component Preparation",
                          operator: "John Smith",
                          cycleTime: "45 sec",
                          status: "Active",
                        },
                        {
                          id: "WS-A2",
                          name: "Station 2",
                          operation: "PCB Placement",
                          operator: "Maria Garcia",
                          cycleTime: "60 sec",
                          status: "Active",
                        },
                        {
                          id: "WS-A3",
                          name: "Station 3",
                          operation: "Soldering",
                          operator: "David Chen",
                          cycleTime: "90 sec",
                          status: "Active",
                        },
                        {
                          id: "WS-A4",
                          name: "Station 4",
                          operation: "Component Assembly",
                          operator: "Sarah Johnson",
                          cycleTime: "75 sec",
                          status: "Active",
                        },
                        {
                          id: "WS-A5",
                          name: "Station 5",
                          operation: "Quality Check",
                          operator: "Robert Brown",
                          cycleTime: "30 sec",
                          status: "Active",
                        },
                        {
                          id: "WS-A6",
                          name: "Station 6",
                          operation: "Functional Testing",
                          operator: "Jennifer Lee",
                          cycleTime: "120 sec",
                          status: "Active",
                        },
                        {
                          id: "WS-A7",
                          name: "Station 7",
                          operation: "Final Assembly",
                          operator: "Michael Wilson",
                          cycleTime: "60 sec",
                          status: "Active",
                        },
                        {
                          id: "WS-A8",
                          name: "Station 8",
                          operation: "Packaging",
                          operator: "Lisa Chen",
                          cycleTime: "45 sec",
                          status: "Active",
                        },
                      ].map((station, index) => (
                        <tr key={index} className="border-b border-slate-800">
                          <td className="py-3 px-4 text-sm text-white">
                            {station.id}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {station.name}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {station.operation}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {station.operator}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {station.cycleTime}
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500">
                              {station.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
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
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Line Performance Metrics
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {[
                    {
                      title: "Overall Equipment Effectiveness",
                      value: "87.5%",
                      trend: "up",
                      change: "+2.3%",
                    },
                    {
                      title: "Throughput Rate",
                      value: "42 units/hr",
                      trend: "up",
                      change: "+5 units",
                    },
                    {
                      title: "First Pass Yield",
                      value: "94.2%",
                      trend: "down",
                      change: "-0.8%",
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
                              className="text-red-500"
                            >
                              <path d="m19 12-7 7-7-7" />
                              <path d="M12 5v14" />
                            </svg>
                          )}
                          <span
                            className={`text-xs ${metric.trend === "up" ? "text-emerald-500" : "text-red-500"} ml-1`}
                          >
                            {metric.change}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-800/50 rounded-md border border-slate-700">
                    <h4 className="text-white font-medium mb-3">
                      Cycle Time by Station
                    </h4>
                    <div className="space-y-2">
                      {[
                        { station: "Station 1", actual: 45, target: 50 },
                        { station: "Station 2", actual: 60, target: 55 },
                        { station: "Station 3", actual: 90, target: 85 },
                        { station: "Station 4", actual: 75, target: 70 },
                        { station: "Station 5", actual: 30, target: 35 },
                      ].map((station, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-xs text-slate-300 mb-1">
                            <span>{station.station}</span>
                            <span>
                              {station.actual} sec / {station.target} sec
                            </span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full">
                            <div
                              className={`h-2 rounded-full ${station.actual <= station.target ? "bg-emerald-500" : "bg-amber-500"}`}
                              style={{
                                width: `${Math.min(100, (station.actual / 120) * 100)}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-slate-800/50 rounded-md border border-slate-700">
                    <h4 className="text-white font-medium mb-3">
                      Line Balancing Efficiency
                    </h4>
                    <div className="h-48 flex items-end space-x-1">
                      {[45, 60, 90, 75, 30, 120, 60, 45].map((value, index) => (
                        <div
                          key={index}
                          className={`flex-1 rounded-t ${value <= 60 ? "bg-emerald-500" : value <= 90 ? "bg-amber-500" : "bg-red-500"}`}
                          style={{ height: `${(value / 120) * 100}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-400">
                      <span>S1</span>
                      <span>S2</span>
                      <span>S3</span>
                      <span>S4</span>
                      <span>S5</span>
                      <span>S6</span>
                      <span>S7</span>
                      <span>S8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AssemblyLineManagement;
