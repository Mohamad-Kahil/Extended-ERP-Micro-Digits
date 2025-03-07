import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const AssetManagement = () => {
  const [activeTab, setActiveTab] = useState("assets");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
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
                placeholder="Search assets..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Operational: 85
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Needs Maintenance: 12
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                <span className="text-xs font-medium text-red-500">
                  Out of Service: 3
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="assets">Asset Registry</TabsTrigger>
            <TabsTrigger value="lifecycle">Lifecycle Management</TabsTrigger>
            <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="assets" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800">
              <Table>
                <TableHeader className="bg-slate-800">
                  <TableRow>
                    <TableHead className="text-slate-300">Asset ID</TableHead>
                    <TableHead className="text-slate-300">Name</TableHead>
                    <TableHead className="text-slate-300">Category</TableHead>
                    <TableHead className="text-slate-300">Location</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-slate-300">
                      Last Maintenance
                    </TableHead>
                    <TableHead className="text-slate-300">
                      Health Score
                    </TableHead>
                    <TableHead className="text-right text-slate-300">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "AST-001",
                      name: "HVAC Unit - Building A",
                      category: "HVAC",
                      location: "Building A - Roof",
                      status: "Operational",
                      lastMaintenance: "2023-08-15",
                      healthScore: 92,
                    },
                    {
                      id: "AST-002",
                      name: "Conveyor Belt - Line 1",
                      category: "Production",
                      location: "Factory Floor - Line 1",
                      status: "Needs Maintenance",
                      lastMaintenance: "2023-07-10",
                      healthScore: 68,
                    },
                    {
                      id: "AST-003",
                      name: "Forklift #5",
                      category: "Transportation",
                      location: "Warehouse B",
                      status: "Operational",
                      lastMaintenance: "2023-09-01",
                      healthScore: 85,
                    },
                    {
                      id: "AST-004",
                      name: "Main Electrical Panel",
                      category: "Electrical",
                      location: "Utility Room - Building A",
                      status: "Operational",
                      lastMaintenance: "2023-06-20",
                      healthScore: 90,
                    },
                    {
                      id: "AST-005",
                      name: "Air Compressor #2",
                      category: "Pneumatic",
                      location: "Utility Room - Building B",
                      status: "Operational",
                      lastMaintenance: "2023-08-05",
                      healthScore: 78,
                    },
                    {
                      id: "AST-006",
                      name: "Boiler System",
                      category: "HVAC",
                      location: "Boiler Room - Building A",
                      status: "Operational",
                      lastMaintenance: "2023-08-12",
                      healthScore: 88,
                    },
                    {
                      id: "AST-007",
                      name: "Packaging Machine #3",
                      category: "Production",
                      location: "Factory Floor - Line 3",
                      status: "Out of Service",
                      lastMaintenance: "2023-07-25",
                      healthScore: 45,
                    },
                  ]
                    .filter(
                      (asset) =>
                        asset.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        asset.id
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        asset.category
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()),
                    )
                    .map((asset) => (
                      <TableRow key={asset.id} className="border-slate-800">
                        <TableCell className="font-medium text-slate-300">
                          {asset.id}
                        </TableCell>
                        <TableCell>{asset.name}</TableCell>
                        <TableCell>{asset.category}</TableCell>
                        <TableCell>{asset.location}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                              asset.status === "Operational"
                                ? "bg-emerald-500/10 text-emerald-500"
                                : asset.status === "Needs Maintenance"
                                  ? "bg-amber-500/10 text-amber-500"
                                  : "bg-red-500/10 text-red-500"
                            }`}
                          >
                            {asset.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          {new Date(asset.lastMaintenance).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="w-16 h-2 bg-slate-700 rounded-full mr-2">
                              <div
                                className={`h-2 rounded-full ${
                                  asset.healthScore >= 80
                                    ? "bg-emerald-500"
                                    : asset.healthScore >= 60
                                      ? "bg-amber-500"
                                      : "bg-red-500"
                                }`}
                                style={{ width: `${asset.healthScore}%` }}
                              ></div>
                            </div>
                            <span className="text-xs">
                              {asset.healthScore}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
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
                              <span className="sr-only">Edit</span>
                            </Button>
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
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                              </svg>
                              <span className="sr-only">View Details</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="lifecycle" className="mt-4 space-y-4">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Asset Lifecycle Management
                </h3>
                <p className="text-slate-400">
                  Asset lifecycle tracking and management information will be
                  displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="mt-4 space-y-4">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Asset Performance Metrics
                </h3>
                <p className="text-slate-400">
                  Performance metrics and analytics for assets will be displayed
                  here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AssetManagement;
