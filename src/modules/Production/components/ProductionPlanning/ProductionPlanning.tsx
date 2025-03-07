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

const ProductionPlanning = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("production-plans");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Production Planning
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
              Create Plan
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
                placeholder="Search plans..."
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
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Active: 12
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Draft: 5
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                <span className="text-xs font-medium text-blue-500">
                  Completed: 28
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="production-plans">Production Plans</TabsTrigger>
            <TabsTrigger value="resource-allocation">
              Resource Allocation
            </TabsTrigger>
            <TabsTrigger value="material-requirements">
              Material Requirements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="production-plans" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Active Production Plans
              </h3>
              <div className="space-y-3">
                {[
                  {
                    id: "PP-2023-001",
                    name: "Q3 Manufacturing Plan",
                    status: "active",
                    progress: 65,
                    dueDate: "2023-09-30",
                  },
                  {
                    id: "PP-2023-002",
                    name: "Holiday Season Production",
                    status: "active",
                    progress: 40,
                    dueDate: "2023-11-15",
                  },
                  {
                    id: "PP-2023-003",
                    name: "New Product Line Setup",
                    status: "active",
                    progress: 25,
                    dueDate: "2023-10-20",
                  },
                ].map((plan) => (
                  <div
                    key={plan.id}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-md border border-slate-700"
                  >
                    <div>
                      <h4 className="font-medium text-white">{plan.name}</h4>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-slate-400 mr-3">
                          ID: {plan.id}
                        </span>
                        <span className="text-xs text-slate-400">
                          Due: {plan.dueDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-32">
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-slate-400">
                            Progress
                          </span>
                          <span className="text-xs font-medium text-white">
                            {plan.progress}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full">
                          <div
                            className="h-2 bg-cyan-600 rounded-full"
                            style={{ width: `${plan.progress}%` }}
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

          <TabsContent value="resource-allocation" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Resource Allocation
              </h3>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Manage and optimize resource allocation across production
                  lines and work centers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Assembly Line A",
                      allocation: 85,
                      status: "Optimal",
                    },
                    {
                      name: "Assembly Line B",
                      allocation: 92,
                      status: "Overallocated",
                    },
                    {
                      name: "Packaging Line 1",
                      allocation: 65,
                      status: "Underutilized",
                    },
                    {
                      name: "Quality Testing",
                      allocation: 78,
                      status: "Optimal",
                    },
                  ].map((resource, index) => (
                    <div
                      key={index}
                      className="p-3 bg-slate-800/50 rounded-md border border-slate-700"
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium text-white">
                          {resource.name}
                        </h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            resource.status === "Optimal"
                              ? "bg-emerald-500/10 text-emerald-500"
                              : resource.status === "Overallocated"
                                ? "bg-red-500/10 text-red-500"
                                : "bg-amber-500/10 text-amber-500"
                          }`}
                        >
                          {resource.status}
                        </span>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-slate-400">
                            Allocation
                          </span>
                          <span className="text-xs font-medium text-white">
                            {resource.allocation}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full">
                          <div
                            className={`h-2 rounded-full ${
                              resource.status === "Optimal"
                                ? "bg-emerald-500"
                                : resource.status === "Overallocated"
                                  ? "bg-red-500"
                                  : "bg-amber-500"
                            }`}
                            style={{ width: `${resource.allocation}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="material-requirements" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Material Requirements Planning
              </h3>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Track material requirements for upcoming production runs and
                  manage procurement needs.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Material
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Required
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          In Stock
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          To Order
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          material: "Aluminum Sheet 2mm",
                          required: 1500,
                          inStock: 800,
                          toOrder: 700,
                          status: "Pending Order",
                        },
                        {
                          material: "Circuit Board A1",
                          required: 2500,
                          inStock: 3000,
                          toOrder: 0,
                          status: "Sufficient",
                        },
                        {
                          material: "Power Supply Unit",
                          required: 1200,
                          inStock: 500,
                          toOrder: 700,
                          status: "Ordered",
                        },
                        {
                          material: "Packaging Material",
                          required: 5000,
                          inStock: 4800,
                          toOrder: 200,
                          status: "Sufficient",
                        },
                      ].map((item, index) => (
                        <tr key={index} className="border-b border-slate-800">
                          <td className="py-3 px-4 text-sm text-white">
                            {item.material}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {item.required}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {item.inStock}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {item.toOrder}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                item.status === "Sufficient"
                                  ? "bg-emerald-500/10 text-emerald-500"
                                  : item.status === "Ordered"
                                    ? "bg-blue-500/10 text-blue-500"
                                    : "bg-amber-500/10 text-amber-500"
                              }`}
                            >
                              {item.status}
                            </span>
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

export default ProductionPlanning;
