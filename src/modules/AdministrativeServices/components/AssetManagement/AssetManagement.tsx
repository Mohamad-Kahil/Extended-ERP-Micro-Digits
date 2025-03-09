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
import { Badge } from "@/components/ui/badge";

const AssetManagement = () => {
  const [activeTab, setActiveTab] = useState("assets");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Asset Management</h2>
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
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
          Add New Asset
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Total Assets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">248</div>
            <p className="text-xs text-slate-500">Across all categories</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Asset Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$1.24M</div>
            <p className="text-xs text-emerald-500">↑ 3% from last quarter</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Maintenance Due
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">12</div>
            <p className="text-xs text-slate-500">Assets need attention</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Depreciation (YTD)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$85,420</div>
            <p className="text-xs text-slate-500">For current fiscal year</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Asset Management
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
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
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
                  placeholder="Search assets..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="it-equipment">IT Equipment</SelectItem>
                  <SelectItem value="office-equipment">
                    Office Equipment
                  </SelectItem>
                  <SelectItem value="vehicles">Vehicles</SelectItem>
                  <SelectItem value="buildings">
                    Buildings & Facilities
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-slate-800">
              <TabsTrigger value="assets">Assets</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="depreciation">Depreciation</TabsTrigger>
            </TabsList>

            <TabsContent value="assets" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Asset ID</div>
                  <div className="col-span-3">Description</div>
                  <div className="col-span-1">Category</div>
                  <div className="col-span-1">Location</div>
                  <div className="col-span-1">Purchase Date</div>
                  <div className="col-span-1">Value</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "AST-001245",
                      description: "Dell XPS 15 Laptop",
                      category: "IT Equipment",
                      location: "HQ - Floor 3",
                      purchaseDate: "15 Jan 2023",
                      value: 1899.99,
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "AST-001246",
                      description: "Herman Miller Aeron Chair",
                      category: "Furniture",
                      location: "HQ - Floor 2",
                      purchaseDate: "10 Feb 2023",
                      value: 1395.0,
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "AST-001247",
                      description: "Conference Room Table",
                      category: "Furniture",
                      location: "HQ - Floor 4",
                      purchaseDate: "05 Mar 2023",
                      value: 2500.0,
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "AST-001248",
                      description: "Xerox WorkCentre Printer",
                      category: "Office Equipment",
                      location: "HQ - Floor 1",
                      purchaseDate: "20 Mar 2023",
                      value: 3200.0,
                      status: "Maintenance",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "AST-001249",
                      description: "Toyota Camry - Company Car",
                      category: "Vehicles",
                      location: "HQ - Parking",
                      purchaseDate: "15 Apr 2023",
                      value: 28500.0,
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "AST-001250",
                      description: 'Apple iMac 27"',
                      category: "IT Equipment",
                      location: "Branch - Dubai",
                      purchaseDate: "10 May 2023",
                      value: 2199.99,
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "AST-001251",
                      description: 'Meeting Room Display 65"',
                      category: "IT Equipment",
                      location: "HQ - Floor 3",
                      purchaseDate: "05 Jun 2023",
                      value: 1800.0,
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "AST-001252",
                      description: "Office Desk Set (5 units)",
                      category: "Furniture",
                      location: "Branch - Doha",
                      purchaseDate: "20 Jun 2023",
                      value: 3750.0,
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "AST-001253",
                      description: "Air Conditioning System",
                      category: "Buildings & Facilities",
                      location: "HQ - All Floors",
                      purchaseDate: "15 Jul 2023",
                      value: 12500.0,
                      status: "Maintenance",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "AST-001254",
                      description: "Security Camera System",
                      category: "Buildings & Facilities",
                      location: "HQ - All Floors",
                      purchaseDate: "10 Aug 2023",
                      value: 8500.0,
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                  ].map((asset, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">{asset.id}</div>
                      <div className="col-span-3">{asset.description}</div>
                      <div className="col-span-1">{asset.category}</div>
                      <div className="col-span-1">{asset.location}</div>
                      <div className="col-span-1">{asset.purchaseDate}</div>
                      <div className="col-span-1">
                        ${asset.value.toLocaleString()}
                      </div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${asset.statusColor} bg-opacity-20 text-white`}
                        >
                          {asset.status}
                        </span>
                      </div>
                      <div className="col-span-2 flex space-x-2">
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="maintenance" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Asset ID</div>
                  <div className="col-span-3">Description</div>
                  <div className="col-span-2">Maintenance Type</div>
                  <div className="col-span-1">Last Service</div>
                  <div className="col-span-1">Next Due</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "AST-001248",
                      description: "Xerox WorkCentre Printer",
                      maintenanceType: "Regular Service",
                      lastService: "15 Aug 2023",
                      nextDue: "15 Nov 2023",
                      status: "Due Soon",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "AST-001253",
                      description: "Air Conditioning System",
                      maintenanceType: "Filter Replacement",
                      lastService: "10 Sep 2023",
                      nextDue: "10 Dec 2023",
                      status: "Due Soon",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "AST-001249",
                      description: "Toyota Camry - Company Car",
                      maintenanceType: "Oil Change",
                      lastService: "05 Oct 2023",
                      nextDue: "05 Jan 2024",
                      status: "Scheduled",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "AST-001254",
                      description: "Security Camera System",
                      maintenanceType: "Software Update",
                      lastService: "20 Oct 2023",
                      nextDue: "20 Jan 2024",
                      status: "Scheduled",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "AST-001245",
                      description: "Dell XPS 15 Laptop",
                      maintenanceType: "Hardware Check",
                      lastService: "15 Jul 2023",
                      nextDue: "15 Jan 2024",
                      status: "Scheduled",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "AST-001251",
                      description: 'Meeting Room Display 65"',
                      maintenanceType: "Calibration",
                      lastService: "01 Aug 2023",
                      nextDue: "01 Feb 2024",
                      status: "Scheduled",
                      statusColor: "bg-emerald-500",
                    },
                  ].map((maintenance, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">
                        {maintenance.id}
                      </div>
                      <div className="col-span-3">
                        {maintenance.description}
                      </div>
                      <div className="col-span-2">
                        {maintenance.maintenanceType}
                      </div>
                      <div className="col-span-1">
                        {maintenance.lastService}
                      </div>
                      <div className="col-span-1">{maintenance.nextDue}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${maintenance.statusColor} bg-opacity-20 text-white`}
                        >
                          {maintenance.status}
                        </span>
                      </div>
                      <div className="col-span-2 flex space-x-2">
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M3 9h18" />
                            <path d="M9 21V9" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="depreciation" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Asset ID</div>
                  <div className="col-span-3">Description</div>
                  <div className="col-span-1">Purchase Value</div>
                  <div className="col-span-1">Current Value</div>
                  <div className="col-span-1">Depreciation</div>
                  <div className="col-span-1">Method</div>
                  <div className="col-span-1">Life (Years)</div>
                  <div className="col-span-2">End of Life</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "AST-001245",
                      description: "Dell XPS 15 Laptop",
                      purchaseValue: 1899.99,
                      currentValue: 1266.66,
                      depreciation: 633.33,
                      method: "Straight Line",
                      lifeYears: 3,
                      endOfLife: "15 Jan 2026",
                    },
                    {
                      id: "AST-001246",
                      description: "Herman Miller Aeron Chair",
                      purchaseValue: 1395.0,
                      currentValue: 1116.0,
                      depreciation: 279.0,
                      method: "Straight Line",
                      lifeYears: 5,
                      endOfLife: "10 Feb 2028",
                    },
                    {
                      id: "AST-001247",
                      description: "Conference Room Table",
                      purchaseValue: 2500.0,
                      currentValue: 2125.0,
                      depreciation: 375.0,
                      method: "Straight Line",
                      lifeYears: 10,
                      endOfLife: "05 Mar 2033",
                    },
                    {
                      id: "AST-001248",
                      description: "Xerox WorkCentre Printer",
                      purchaseValue: 3200.0,
                      currentValue: 2560.0,
                      depreciation: 640.0,
                      method: "Straight Line",
                      lifeYears: 5,
                      endOfLife: "20 Mar 2028",
                    },
                    {
                      id: "AST-001249",
                      description: "Toyota Camry - Company Car",
                      purchaseValue: 28500.0,
                      currentValue: 22800.0,
                      depreciation: 5700.0,
                      method: "Reducing Balance",
                      lifeYears: 5,
                      endOfLife: "15 Apr 2028",
                    },
                    {
                      id: "AST-001250",
                      description: 'Apple iMac 27"',
                      purchaseValue: 2199.99,
                      currentValue: 1833.33,
                      depreciation: 366.66,
                      method: "Straight Line",
                      lifeYears: 3,
                      endOfLife: "10 May 2026",
                    },
                  ].map((asset, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">{asset.id}</div>
                      <div className="col-span-3">{asset.description}</div>
                      <div className="col-span-1">
                        ${asset.purchaseValue.toLocaleString()}
                      </div>
                      <div className="col-span-1">
                        ${asset.currentValue.toLocaleString()}
                      </div>
                      <div className="col-span-1">
                        ${asset.depreciation.toLocaleString()}
                      </div>
                      <div className="col-span-1">{asset.method}</div>
                      <div className="col-span-1">{asset.lifeYears}</div>
                      <div className="col-span-2">{asset.endOfLife}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Asset Distribution */}
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            Asset Distribution by Category
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                category: "IT Equipment",
                count: 87,
                value: 182500,
                percentage: 35,
                color: "bg-cyan-500",
              },
              {
                category: "Furniture",
                count: 124,
                value: 98750,
                percentage: 25,
                color: "bg-purple-500",
              },
              {
                category: "Office Equipment",
                count: 56,
                value: 75200,
                percentage: 15,
                color: "bg-amber-500",
              },
              {
                category: "Vehicles",
                count: 12,
                value: 342000,
                percentage: 20,
                color: "bg-emerald-500",
              },
              {
                category: "Buildings & Facilities",
                count: 8,
                value: 540000,
                percentage: 5,
                color: "bg-red-500",
              },
            ].map((category, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-white">
                      {category.category}
                    </span>
                    <span className="ml-2 text-xs text-slate-400">
                      {category.count} items
                    </span>
                  </div>
                  <span className="text-xs font-medium text-white">
                    ${category.value.toLocaleString()}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-800">
                  <div
                    className={`h-2 rounded-full ${category.color}`}
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssetManagement;
