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

const FixedAssets = () => {
  const [activeTab, setActiveTab] = useState("assets");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4">
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Fixed Assets Management
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
                Add Asset
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
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Asset Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="equipment">Equipment</SelectItem>
                  <SelectItem value="vehicle">Vehicles</SelectItem>
                  <SelectItem value="building">Buildings</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Active: 128
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Disposed: 24
                </span>
              </div>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-slate-800">
              <TabsTrigger value="assets">Asset Registry</TabsTrigger>
              <TabsTrigger value="depreciation">Depreciation</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>

            <TabsContent value="assets" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">Asset ID</div>
                  <div className="col-span-2">Name</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-1">Purchase Date</div>
                  <div className="col-span-1">Cost</div>
                  <div className="col-span-1">Current Value</div>
                  <div className="col-span-1">Location</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "FA-001",
                      name: "Dell XPS Workstation",
                      type: "Equipment",
                      purchaseDate: "2022-05-15",
                      cost: "$2,500.00",
                      currentValue: "$1,875.00",
                      location: "HQ - Floor 2",
                      status: "Active",
                    },
                    {
                      id: "FA-002",
                      name: "Office Furniture Set",
                      type: "Furniture",
                      purchaseDate: "2022-03-10",
                      cost: "$12,000.00",
                      currentValue: "$10,800.00",
                      location: "HQ - Floor 1",
                      status: "Active",
                    },
                    {
                      id: "FA-003",
                      name: "Company Van",
                      type: "Vehicle",
                      purchaseDate: "2021-11-22",
                      cost: "$35,000.00",
                      currentValue: "$28,000.00",
                      location: "Warehouse",
                      status: "Active",
                    },
                    {
                      id: "FA-004",
                      name: "Manufacturing Equipment",
                      type: "Equipment",
                      purchaseDate: "2020-08-05",
                      cost: "$85,000.00",
                      currentValue: "$59,500.00",
                      location: "Factory",
                      status: "Active",
                    },
                    {
                      id: "FA-005",
                      name: "Office Building",
                      type: "Building",
                      purchaseDate: "2018-01-15",
                      cost: "$1,200,000.00",
                      currentValue: "$1,320,000.00",
                      location: "Downtown",
                      status: "Active",
                    },
                    {
                      id: "FA-006",
                      name: "Old Printer",
                      type: "Equipment",
                      purchaseDate: "2019-04-20",
                      cost: "$1,200.00",
                      currentValue: "$0.00",
                      location: "Storage",
                      status: "Disposed",
                    },
                    {
                      id: "FA-007",
                      name: "Land Plot",
                      type: "Land",
                      purchaseDate: "2017-06-30",
                      cost: "$500,000.00",
                      currentValue: "$650,000.00",
                      location: "Suburban",
                      status: "Active",
                    },
                  ].map((asset, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{asset.id}</div>
                      <div className="col-span-2">{asset.name}</div>
                      <div className="col-span-2">{asset.type}</div>
                      <div className="col-span-1">
                        {new Date(asset.purchaseDate).toLocaleDateString()}
                      </div>
                      <div className="col-span-1">{asset.cost}</div>
                      <div className="col-span-1">{asset.currentValue}</div>
                      <div className="col-span-1">{asset.location}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${asset.status === "Active" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}`}
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
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
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
                  <div className="col-span-1">Asset ID</div>
                  <div className="col-span-2">Name</div>
                  <div className="col-span-1">Cost</div>
                  <div className="col-span-2">Depreciation Method</div>
                  <div className="col-span-1">Useful Life</div>
                  <div className="col-span-1">Salvage Value</div>
                  <div className="col-span-1">Current Value</div>
                  <div className="col-span-1">Depreciation YTD</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "FA-001",
                      name: "Dell XPS Workstation",
                      cost: "$2,500.00",
                      method: "Straight Line",
                      life: "5 years",
                      salvage: "$500.00",
                      currentValue: "$1,875.00",
                      ytd: "$500.00",
                    },
                    {
                      id: "FA-002",
                      name: "Office Furniture Set",
                      cost: "$12,000.00",
                      method: "Straight Line",
                      life: "10 years",
                      salvage: "$1,200.00",
                      currentValue: "$10,800.00",
                      ytd: "$1,200.00",
                    },
                    {
                      id: "FA-003",
                      name: "Company Van",
                      cost: "$35,000.00",
                      method: "Declining Balance",
                      life: "7 years",
                      salvage: "$7,000.00",
                      currentValue: "$28,000.00",
                      ytd: "$7,000.00",
                    },
                    {
                      id: "FA-004",
                      name: "Manufacturing Equipment",
                      cost: "$85,000.00",
                      method: "Units of Production",
                      life: "10 years",
                      salvage: "$8,500.00",
                      currentValue: "$59,500.00",
                      ytd: "$8,500.00",
                    },
                    {
                      id: "FA-005",
                      name: "Office Building",
                      cost: "$1,200,000.00",
                      method: "Straight Line",
                      life: "39 years",
                      salvage: "$200,000.00",
                      currentValue: "$1,320,000.00",
                      ytd: "$30,769.23",
                    },
                    {
                      id: "FA-007",
                      name: "Land Plot",
                      cost: "$500,000.00",
                      method: "Non-Depreciable",
                      life: "N/A",
                      salvage: "N/A",
                      currentValue: "$650,000.00",
                      ytd: "$0.00",
                    },
                  ].map((asset, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{asset.id}</div>
                      <div className="col-span-2">{asset.name}</div>
                      <div className="col-span-1">{asset.cost}</div>
                      <div className="col-span-2">{asset.method}</div>
                      <div className="col-span-1">{asset.life}</div>
                      <div className="col-span-1">{asset.salvage}</div>
                      <div className="col-span-1">{asset.currentValue}</div>
                      <div className="col-span-1">{asset.ytd}</div>
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="maintenance" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">Asset ID</div>
                  <div className="col-span-2">Name</div>
                  <div className="col-span-2">Maintenance Type</div>
                  <div className="col-span-1">Last Service</div>
                  <div className="col-span-1">Next Service</div>
                  <div className="col-span-1">Frequency</div>
                  <div className="col-span-1">Cost YTD</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "FA-001",
                      name: "Dell XPS Workstation",
                      type: "Preventive",
                      last: "2023-08-15",
                      next: "2024-02-15",
                      frequency: "6 months",
                      cost: "$150.00",
                      status: "Up to date",
                    },
                    {
                      id: "FA-003",
                      name: "Company Van",
                      type: "Preventive",
                      last: "2023-09-22",
                      next: "2023-12-22",
                      frequency: "3 months",
                      cost: "$850.00",
                      status: "Up to date",
                    },
                    {
                      id: "FA-004",
                      name: "Manufacturing Equipment",
                      type: "Preventive",
                      last: "2023-07-05",
                      next: "2023-11-05",
                      frequency: "4 months",
                      cost: "$2,500.00",
                      status: "Due soon",
                    },
                    {
                      id: "FA-005",
                      name: "Office Building",
                      type: "Inspection",
                      last: "2023-06-15",
                      next: "2023-12-15",
                      frequency: "6 months",
                      cost: "$5,000.00",
                      status: "Up to date",
                    },
                  ].map((asset, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{asset.id}</div>
                      <div className="col-span-2">{asset.name}</div>
                      <div className="col-span-2">{asset.type}</div>
                      <div className="col-span-1">
                        {new Date(asset.last).toLocaleDateString()}
                      </div>
                      <div className="col-span-1">
                        {new Date(asset.next).toLocaleDateString()}
                      </div>
                      <div className="col-span-1">{asset.frequency}</div>
                      <div className="col-span-1">{asset.cost}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${asset.status === "Up to date" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}`}
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
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default FixedAssets;
