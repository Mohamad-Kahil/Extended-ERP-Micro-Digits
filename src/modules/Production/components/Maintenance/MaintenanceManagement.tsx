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

const MaintenanceManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("scheduled");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Maintenance Management
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
              Schedule Maintenance
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
                placeholder="Search maintenance..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Equipment Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="assembly">Assembly Lines</SelectItem>
                <SelectItem value="packaging">Packaging Equipment</SelectItem>
                <SelectItem value="testing">Testing Equipment</SelectItem>
                <SelectItem value="utility">Utility Systems</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Operational: 42
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Maintenance Due: 8
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                <span className="text-xs font-medium text-red-500">
                  Down: 3
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="scheduled">Scheduled Maintenance</TabsTrigger>
            <TabsTrigger value="equipment">Equipment Health</TabsTrigger>
            <TabsTrigger value="requests">Maintenance Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="scheduled" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Upcoming Maintenance Schedule
              </h3>
              <div className="space-y-3">
                {[
                  {
                    id: "PM-2023-0045",
                    equipment: "Assembly Line A",
                    type: "Preventive",
                    date: "2023-09-15",
                    duration: "4 hours",
                    assignee: "John Smith",
                    status: "scheduled",
                  },
                  {
                    id: "PM-2023-0046",
                    equipment: "Packaging Machine 2",
                    type: "Calibration",
                    date: "2023-09-16",
                    duration: "2 hours",
                    assignee: "Maria Garcia",
                    status: "scheduled",
                  },
                  {
                    id: "PM-2023-0047",
                    equipment: "Testing Station B",
                    type: "Preventive",
                    date: "2023-09-18",
                    duration: "3 hours",
                    assignee: "David Chen",
                    status: "scheduled",
                  },
                  {
                    id: "PM-2023-0048",
                    equipment: "Utility System - HVAC",
                    type: "Inspection",
                    date: "2023-09-20",
                    duration: "2 hours",
                    assignee: "Sarah Johnson",
                    status: "scheduled",
                  },
                ].map((maintenance) => (
                  <div
                    key={maintenance.id}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-md border border-slate-700"
                  >
                    <div>
                      <h4 className="font-medium text-white">
                        {maintenance.equipment}
                      </h4>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-slate-400 mr-3">
                          ID: {maintenance.id}
                        </span>
                        <span className="text-xs text-slate-400 mr-3">
                          Type: {maintenance.type}
                        </span>
                        <span className="text-xs text-slate-400">
                          Date: {maintenance.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-slate-300">
                        <span className="text-slate-400">Duration:</span>{" "}
                        {maintenance.duration}
                      </div>
                      <div className="text-sm text-slate-300">
                        <span className="text-slate-400">Assignee:</span>{" "}
                        {maintenance.assignee}
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-500">
                        {maintenance.status}
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

          <TabsContent value="equipment" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Equipment Health Monitoring
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Assembly Line A",
                      health: 92,
                      status: "Operational",
                      lastMaintenance: "2023-08-15",
                      nextMaintenance: "2023-09-15",
                    },
                    {
                      name: "Assembly Line B",
                      health: 78,
                      status: "Maintenance Due",
                      lastMaintenance: "2023-07-20",
                      nextMaintenance: "2023-09-20",
                    },
                    {
                      name: "Packaging Machine 1",
                      health: 95,
                      status: "Operational",
                      lastMaintenance: "2023-08-25",
                      nextMaintenance: "2023-10-25",
                    },
                    {
                      name: "Packaging Machine 2",
                      health: 65,
                      status: "Maintenance Due",
                      lastMaintenance: "2023-07-16",
                      nextMaintenance: "2023-09-16",
                    },
                  ].map((equipment, index) => (
                    <div
                      key={index}
                      className="p-3 bg-slate-800/50 rounded-md border border-slate-700"
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium text-white">
                          {equipment.name}
                        </h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            equipment.status === "Operational"
                              ? "bg-emerald-500/10 text-emerald-500"
                              : equipment.status === "Maintenance Due"
                                ? "bg-amber-500/10 text-amber-500"
                                : "bg-red-500/10 text-red-500"
                          }`}
                        >
                          {equipment.status}
                        </span>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-slate-400">
                            Health Score
                          </span>
                          <span className="text-xs font-medium text-white">
                            {equipment.health}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full">
                          <div
                            className={`h-2 rounded-full ${
                              equipment.health > 90
                                ? "bg-emerald-500"
                                : equipment.health > 70
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                            }`}
                            style={{ width: `${equipment.health}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-400">
                        <div>
                          <span className="text-slate-300">Last:</span>{" "}
                          {equipment.lastMaintenance}
                        </div>
                        <div>
                          <span className="text-slate-300">Next:</span>{" "}
                          {equipment.nextMaintenance}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-800/50 rounded-md border border-slate-700">
                  <h4 className="text-white font-medium mb-3">
                    Equipment Performance Trends
                  </h4>
                  <div className="h-48 flex items-end space-x-1">
                    {[
                      85, 87, 86, 88, 90, 89, 91, 90, 92, 91, 93, 92, 90, 88,
                      87, 85, 83, 82, 80, 78,
                    ].map((value, index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-t ${value > 90 ? "bg-emerald-500" : value > 80 ? "bg-amber-500" : "bg-red-500"}`}
                        style={{ height: `${value}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-400">
                    <span>Aug 1</span>
                    <span>Aug 15</span>
                    <span>Sept 1</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="requests" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Maintenance Requests
              </h3>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Request ID
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Equipment
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Issue
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Requested By
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Date
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Priority
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
                          id: "MR-2023-0089",
                          equipment: "Assembly Line B",
                          issue: "Unusual noise from conveyor belt",
                          requestedBy: "Mark Wilson",
                          date: "2023-09-05",
                          priority: "High",
                          status: "In Progress",
                        },
                        {
                          id: "MR-2023-0090",
                          equipment: "Testing Station A",
                          issue: "Calibration error",
                          requestedBy: "Jennifer Lee",
                          date: "2023-09-06",
                          priority: "Medium",
                          status: "Assigned",
                        },
                        {
                          id: "MR-2023-0091",
                          equipment: "Packaging Machine 2",
                          issue: "Seal quality issues",
                          requestedBy: "Robert Brown",
                          date: "2023-09-06",
                          priority: "High",
                          status: "Pending",
                        },
                        {
                          id: "MR-2023-0092",
                          equipment: "Utility System - Compressed Air",
                          issue: "Pressure drop",
                          requestedBy: "Lisa Chen",
                          date: "2023-09-07",
                          priority: "Critical",
                          status: "In Progress",
                        },
                      ].map((request, index) => (
                        <tr key={index} className="border-b border-slate-800">
                          <td className="py-3 px-4 text-sm text-white">
                            {request.id}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {request.equipment}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {request.issue}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {request.requestedBy}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {request.date}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                request.priority === "Critical"
                                  ? "bg-red-500/10 text-red-500"
                                  : request.priority === "High"
                                    ? "bg-amber-500/10 text-amber-500"
                                    : "bg-blue-500/10 text-blue-500"
                              }`}
                            >
                              {request.priority}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                request.status === "Pending"
                                  ? "bg-slate-500/10 text-slate-500"
                                  : request.status === "Assigned"
                                    ? "bg-blue-500/10 text-blue-500"
                                    : request.status === "In Progress"
                                      ? "bg-amber-500/10 text-amber-500"
                                      : "bg-emerald-500/10 text-emerald-500"
                              }`}
                            >
                              {request.status}
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
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MaintenanceManagement;
