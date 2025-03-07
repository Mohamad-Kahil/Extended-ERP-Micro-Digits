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

const QualityControl = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("inspections");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Quality Control
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
              New Inspection
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
                placeholder="Search inspections..."
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
                <SelectItem value="passed">Passed</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Passed: 85
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                <span className="text-xs font-medium text-red-500">
                  Failed: 12
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                <span className="text-xs font-medium text-blue-500">
                  Pending: 23
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="inspections">Quality Inspections</TabsTrigger>
            <TabsTrigger value="defects">Defect Analysis</TabsTrigger>
            <TabsTrigger value="metrics">Quality Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="inspections" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Recent Quality Inspections
              </h3>
              <div className="space-y-3">
                {[
                  {
                    id: "QC-2023-0125",
                    product: "Circuit Board Assembly",
                    batch: "B-2023-089",
                    date: "2023-09-05",
                    inspector: "John Smith",
                    status: "passed",
                    score: 98,
                  },
                  {
                    id: "QC-2023-0126",
                    product: "Power Supply Unit",
                    batch: "B-2023-090",
                    date: "2023-09-05",
                    inspector: "Maria Garcia",
                    status: "failed",
                    score: 65,
                  },
                  {
                    id: "QC-2023-0127",
                    product: "Sensor Module",
                    batch: "B-2023-091",
                    date: "2023-09-06",
                    inspector: "David Chen",
                    status: "passed",
                    score: 92,
                  },
                  {
                    id: "QC-2023-0128",
                    product: "Control Panel",
                    batch: "B-2023-092",
                    date: "2023-09-06",
                    inspector: "Sarah Johnson",
                    status: "pending",
                    score: null,
                  },
                ].map((inspection) => (
                  <div
                    key={inspection.id}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-md border border-slate-700"
                  >
                    <div>
                      <h4 className="font-medium text-white">
                        {inspection.product}
                      </h4>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-slate-400 mr-3">
                          ID: {inspection.id}
                        </span>
                        <span className="text-xs text-slate-400 mr-3">
                          Batch: {inspection.batch}
                        </span>
                        <span className="text-xs text-slate-400">
                          Date: {inspection.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-slate-300">
                        <span className="text-slate-400">Inspector:</span>{" "}
                        {inspection.inspector}
                      </div>
                      {inspection.score !== null && (
                        <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-slate-700 bg-slate-800">
                          <span
                            className={`text-sm font-medium ${
                              inspection.status === "passed"
                                ? "text-emerald-500"
                                : inspection.status === "failed"
                                  ? "text-red-500"
                                  : "text-slate-400"
                            }`}
                          >
                            {inspection.score}
                          </span>
                        </div>
                      )}
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          inspection.status === "passed"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : inspection.status === "failed"
                              ? "bg-red-500/10 text-red-500"
                              : "bg-blue-500/10 text-blue-500"
                        }`}
                      >
                        {inspection.status}
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

          <TabsContent value="defects" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Defect Analysis
              </h3>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Track and analyze defects to identify root causes and
                  implement corrective actions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-slate-800/50 rounded-md border border-slate-700">
                    <h4 className="text-white font-medium mb-2">
                      Defect Categories
                    </h4>
                    <div className="space-y-2">
                      {[
                        {
                          category: "Soldering Issues",
                          count: 28,
                          percentage: 35,
                        },
                        {
                          category: "Component Misalignment",
                          count: 22,
                          percentage: 27.5,
                        },
                        {
                          category: "PCB Defects",
                          count: 15,
                          percentage: 18.75,
                        },
                        {
                          category: "Connection Problems",
                          count: 10,
                          percentage: 12.5,
                        },
                        { category: "Other", count: 5, percentage: 6.25 },
                      ].map((defect, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-xs text-slate-300 mb-1">
                            <span>{defect.category}</span>
                            <span>
                              {defect.count} ({defect.percentage}%)
                            </span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full">
                            <div
                              className="h-2 bg-cyan-600 rounded-full"
                              style={{ width: `${defect.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-slate-800/50 rounded-md border border-slate-700">
                    <h4 className="text-white font-medium mb-2">
                      Defect Trend (Last 30 Days)
                    </h4>
                    <div className="h-40 flex items-end space-x-1">
                      {[
                        18, 15, 22, 19, 25, 20, 16, 14, 12, 10, 8, 9, 11, 13,
                        15,
                      ].map((value, index) => (
                        <div
                          key={index}
                          className="flex-1 bg-cyan-600/80 rounded-t"
                          style={{ height: `${value * 2}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-400">
                      <span>Aug 22</span>
                      <span>Sept 5</span>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Defect ID
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Product
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Category
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Severity
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Date
                        </th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          id: "DEF-2023-0056",
                          product: "Circuit Board Assembly",
                          category: "Soldering Issues",
                          severity: "High",
                          date: "2023-09-05",
                          status: "Open",
                        },
                        {
                          id: "DEF-2023-0057",
                          product: "Power Supply Unit",
                          category: "Component Misalignment",
                          severity: "Medium",
                          date: "2023-09-05",
                          status: "In Progress",
                        },
                        {
                          id: "DEF-2023-0058",
                          product: "Sensor Module",
                          category: "PCB Defects",
                          severity: "Low",
                          date: "2023-09-04",
                          status: "Resolved",
                        },
                        {
                          id: "DEF-2023-0059",
                          product: "Control Panel",
                          category: "Connection Problems",
                          severity: "Medium",
                          date: "2023-09-03",
                          status: "Resolved",
                        },
                      ].map((defect, index) => (
                        <tr key={index} className="border-b border-slate-800">
                          <td className="py-3 px-4 text-sm text-white">
                            {defect.id}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {defect.product}
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {defect.category}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                defect.severity === "High"
                                  ? "bg-red-500/10 text-red-500"
                                  : defect.severity === "Medium"
                                    ? "bg-amber-500/10 text-amber-500"
                                    : "bg-blue-500/10 text-blue-500"
                              }`}
                            >
                              {defect.severity}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-slate-300">
                            {defect.date}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                defect.status === "Open"
                                  ? "bg-red-500/10 text-red-500"
                                  : defect.status === "In Progress"
                                    ? "bg-amber-500/10 text-amber-500"
                                    : "bg-emerald-500/10 text-emerald-500"
                              }`}
                            >
                              {defect.status}
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

          <TabsContent value="metrics" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Quality Metrics
              </h3>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Monitor key quality metrics to ensure continuous improvement
                  in product quality.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {[
                    {
                      title: "First Pass Yield",
                      value: "92.5%",
                      trend: "up",
                      change: "+1.5%",
                    },
                    {
                      title: "Defect Rate",
                      value: "2.8%",
                      trend: "down",
                      change: "-0.7%",
                    },
                    {
                      title: "Customer Returns",
                      value: "0.5%",
                      trend: "down",
                      change: "-0.2%",
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

                <div className="p-4 bg-slate-800/50 rounded-md border border-slate-700">
                  <h4 className="text-white font-medium mb-3">
                    Quality Metrics by Product Line
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-slate-700">
                          <th className="py-2 px-4 text-left text-sm font-medium text-slate-300">
                            Product Line
                          </th>
                          <th className="py-2 px-4 text-right text-sm font-medium text-slate-300">
                            First Pass Yield
                          </th>
                          <th className="py-2 px-4 text-right text-sm font-medium text-slate-300">
                            Defect Rate
                          </th>
                          <th className="py-2 px-4 text-right text-sm font-medium text-slate-300">
                            On-Time Delivery
                          </th>
                          <th className="py-2 px-4 text-right text-sm font-medium text-slate-300">
                            Customer Satisfaction
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            line: "Circuit Boards",
                            fpy: 94.2,
                            defectRate: 2.1,
                            otd: 98.5,
                            csat: 4.7,
                          },
                          {
                            line: "Power Supplies",
                            fpy: 91.8,
                            defectRate: 3.2,
                            otd: 97.2,
                            csat: 4.5,
                          },
                          {
                            line: "Sensor Modules",
                            fpy: 95.5,
                            defectRate: 1.8,
                            otd: 99.1,
                            csat: 4.8,
                          },
                          {
                            line: "Control Panels",
                            fpy: 90.2,
                            defectRate: 3.5,
                            otd: 96.8,
                            csat: 4.4,
                          },
                        ].map((line, index) => (
                          <tr key={index} className="border-b border-slate-800">
                            <td className="py-3 px-4 text-sm text-white">
                              {line.line}
                            </td>
                            <td className="py-3 px-4 text-sm text-right text-slate-300">
                              {line.fpy}%
                            </td>
                            <td className="py-3 px-4 text-sm text-right text-slate-300">
                              {line.defectRate}%
                            </td>
                            <td className="py-3 px-4 text-sm text-right text-slate-300">
                              {line.otd}%
                            </td>
                            <td className="py-3 px-4 text-sm text-right text-slate-300">
                              {line.csat}/5.0
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default QualityControl;
