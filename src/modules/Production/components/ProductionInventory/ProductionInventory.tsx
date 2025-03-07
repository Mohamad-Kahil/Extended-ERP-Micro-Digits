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

const ProductionInventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("raw-materials");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Production Inventory
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
              Add Inventory
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
                placeholder="Search inventory..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="mechanical">Mechanical</SelectItem>
                <SelectItem value="packaging">Packaging</SelectItem>
                <SelectItem value="chemicals">Chemicals</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  In Stock: 245
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Low Stock: 18
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                <span className="text-xs font-medium text-red-500">
                  Out of Stock: 7
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="raw-materials">Raw Materials</TabsTrigger>
            <TabsTrigger value="wip">Work In Progress</TabsTrigger>
            <TabsTrigger value="finished-goods">Finished Goods</TabsTrigger>
          </TabsList>

          <TabsContent value="raw-materials" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Raw Materials Inventory
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                        Item Code
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                        Description
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                        Category
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                        Location
                      </th>
                      <th className="py-2 px-4 text-right text-sm font-medium text-slate-300">
                        Quantity
                      </th>
                      <th className="py-2 px-4 text-right text-sm font-medium text-slate-300">
                        Min. Level
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
                        code: "RM-1001",
                        description: "Aluminum Sheet 2mm",
                        category: "Mechanical",
                        location: "Warehouse A",
                        quantity: 250,
                        minLevel: 100,
                        status: "In Stock",
                      },
                      {
                        code: "RM-1002",
                        description: "Steel Rod 10mm",
                        category: "Mechanical",
                        location: "Warehouse A",
                        quantity: 120,
                        minLevel: 50,
                        status: "In Stock",
                      },
                      {
                        code: "RM-2001",
                        description: "Circuit Board Base",
                        category: "Electronics",
                        location: "Warehouse B",
                        quantity: 85,
                        minLevel: 100,
                        status: "Low Stock",
                      },
                      {
                        code: "RM-2002",
                        description: "Capacitors 10uF",
                        category: "Electronics",
                        location: "Warehouse B",
                        quantity: 1200,
                        minLevel: 500,
                        status: "In Stock",
                      },
                      {
                        code: "RM-3001",
                        description: "Cardboard Box Large",
                        category: "Packaging",
                        location: "Warehouse C",
                        quantity: 350,
                        minLevel: 200,
                        status: "In Stock",
                      },
                      {
                        code: "RM-3002",
                        description: "Bubble Wrap Roll",
                        category: "Packaging",
                        location: "Warehouse C",
                        quantity: 28,
                        minLevel: 30,
                        status: "Low Stock",
                      },
                      {
                        code: "RM-4001",
                        description: "Industrial Solvent",
                        category: "Chemicals",
                        location: "Warehouse D",
                        quantity: 15,
                        minLevel: 20,
                        status: "Low Stock",
                      },
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-slate-800">
                        <td className="py-3 px-4 text-sm text-white">
                          {item.code}
                        </td>
                        <td className="py-3 px-4 text-sm text-slate-300">
                          {item.description}
                        </td>
                        <td className="py-3 px-4 text-sm text-slate-300">
                          {item.category}
                        </td>
                        <td className="py-3 px-4 text-sm text-slate-300">
                          {item.location}
                        </td>
                        <td className="py-3 px-4 text-sm text-right text-slate-300">
                          {item.quantity}
                        </td>
                        <td className="py-3 px-4 text-sm text-right text-slate-300">
                          {item.minLevel}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              item.status === "In Stock"
                                ? "bg-emerald-500/10 text-emerald-500"
                                : item.status === "Low Stock"
                                  ? "bg-amber-500/10 text-amber-500"
                                  : "bg-red-500/10 text-red-500"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex justify-end space-x-1">
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
                            {item.status === "Low Stock" && (
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
                                  className="h-4 w-4 text-blue-500"
                                >
                                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                  <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                                </svg>
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="wip" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Work In Progress Inventory
              </h3>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          WIP ID
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Product
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Work Order
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Current Stage
                        </th>
                        <th className="py-2 px-4 text-right text-sm font-medium text-slate-300">
                          Quantity
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Start Date
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Status
                        </th>
                        <th className="py-2 px-4 text-right text-sm font-medium text-slate-300">
                          Progress
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          id: "WIP-2023-001",
                          product: "Circuit Board Assembly",
                          workOrder: "WO-2023-1234",
                          stage: "Soldering",
                          quantity: 350,
                          startDate: "2023-09-05",
                          status: "In Progress",
                          progress: 65,
                        },
                        {
                          id: "WIP-2023-002",
                          product: "Power Supply Unit",
                          workOrder: "WO-2023-1235",
                          stage: "Component Assembly",
                          quantity: 200,
                          startDate: "2023-09-06",
                          status: "In Progress",
                          progress: 40,
                        },
                        {
                          id: "WIP-2023-003",
                          product: "Sensor Module",
                          workOrder: "WO-2023-1236",
                          stage: "PCB Placement",
                          quantity: 500,
                          startDate: "2023-09-07",
                          status: "In Progress",
                          progress: 25,
                        },
                        {
                          id: "WIP-2023-004",
                          product: "Control Panel",
                          workOrder: "WO-2023-1237",
                          stage: "Quality Testing",
                          quantity: 150,
                          startDate: "2023-09-04",
                          status: "On Hold",
                          progress: 80,
                        },
                      ].map((item, index) => (
                        <tr key={index} className="border-b border-slate-800">
                          <td className="py-3 px-4 text-sm text-white">
                            {item.id}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {item.product}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {item.workOrder}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {item.stage}
                          </td>
                          <td className="py-3 px-4 text-sm text-right text-slate-300">
                            {item.quantity}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {item.startDate}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                item.status === "In Progress"
                                  ? "bg-emerald-500/10 text-emerald-500"
                                  : item.status === "On Hold"
                                    ? "bg-amber-500/10 text-amber-500"
                                    : "bg-red-500/10 text-red-500"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center justify-end space-x-2">
                              <div className="w-24 bg-slate-700 rounded-full h-2">
                                <div
                                  className="bg-cyan-600 h-2 rounded-full"
                                  style={{ width: `${item.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-slate-300">
                                {item.progress}%
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-slate-800/50 rounded-md border border-slate-700">
                  <h4 className="text-white font-medium mb-3">
                    WIP Value by Stage
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      {[
                        {
                          stage: "Component Preparation",
                          value: 45000,
                          percentage: 15,
                        },
                        {
                          stage: "PCB Placement",
                          value: 60000,
                          percentage: 20,
                        },
                        { stage: "Soldering", value: 75000, percentage: 25 },
                        {
                          stage: "Component Assembly",
                          value: 60000,
                          percentage: 20,
                        },
                        {
                          stage: "Quality Testing",
                          value: 45000,
                          percentage: 15,
                        },
                        { stage: "Packaging", value: 15000, percentage: 5 },
                      ].map((stage, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-xs text-slate-300 mb-1">
                            <span>{stage.stage}</span>
                            <span>
                              ${stage.value.toLocaleString()} (
                              {stage.percentage}%)
                            </span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full">
                            <div
                              className="h-2 bg-cyan-600 rounded-full"
                              style={{ width: `${stage.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                          $300,000
                        </div>
                        <div className="text-sm text-slate-400">
                          Total WIP Value
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="finished-goods" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Finished Goods Inventory
              </h3>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          SKU
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Product Name
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Category
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Location
                        </th>
                        <th className="py-2 px-4 text-right text-sm font-medium text-slate-300">
                          Quantity
                        </th>
                        <th className="py-2 px-4 text-right text-sm font-medium text-slate-300">
                          Min. Level
                        </th>
                        <th className="py-2 px-4 text-right text-sm font-medium text-slate-300">
                          Value
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          sku: "FG-1001",
                          name: "Circuit Board Assembly A1",
                          category: "Electronics",
                          location: "Finished Goods A",
                          quantity: 450,
                          minLevel: 100,
                          value: 56250,
                          status: "In Stock",
                        },
                        {
                          sku: "FG-1002",
                          name: "Power Supply Unit 500W",
                          category: "Electronics",
                          location: "Finished Goods A",
                          quantity: 320,
                          minLevel: 80,
                          value: 48000,
                          status: "In Stock",
                        },
                        {
                          sku: "FG-1003",
                          name: "Sensor Module S1",
                          category: "Electronics",
                          location: "Finished Goods B",
                          quantity: 180,
                          minLevel: 50,
                          value: 18000,
                          status: "In Stock",
                        },
                        {
                          sku: "FG-1004",
                          name: "Control Panel CP-100",
                          category: "Electronics",
                          location: "Finished Goods B",
                          quantity: 65,
                          minLevel: 75,
                          value: 13000,
                          status: "Low Stock",
                        },
                        {
                          sku: "FG-1005",
                          name: "Industrial Controller IC-200",
                          category: "Electronics",
                          location: "Finished Goods C",
                          quantity: 25,
                          minLevel: 30,
                          value: 12500,
                          status: "Low Stock",
                        },
                      ].map((item, index) => (
                        <tr key={index} className="border-b border-slate-800">
                          <td className="py-3 px-4 text-sm text-white">
                            {item.sku}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {item.name}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {item.category}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {item.location}
                          </td>
                          <td className="py-3 px-4 text-sm text-right text-slate-300">
                            {item.quantity}
                          </td>
                          <td className="py-3 px-4 text-sm text-right text-slate-300">
                            {item.minLevel}
                          </td>
                          <td className="py-3 px-4 text-sm text-right text-slate-300">
                            ${item.value.toLocaleString()}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                item.status === "In Stock"
                                  ? "bg-emerald-500/10 text-emerald-500"
                                  : item.status === "Low Stock"
                                    ? "bg-amber-500/10 text-amber-500"
                                    : "bg-red-500/10 text-red-500"
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Total Finished Goods",
                      value: "1,040 units",
                      trend: "up",
                      change: "+120 units",
                    },
                    {
                      title: "Inventory Value",
                      value: "$147,750",
                      trend: "up",
                      change: "+$15,500",
                    },
                    {
                      title: "Inventory Turnover",
                      value: "4.2x",
                      trend: "down",
                      change: "-0.3x",
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
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProductionInventory;
