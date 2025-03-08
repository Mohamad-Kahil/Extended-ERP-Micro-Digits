import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

interface Warehouse {
  id: string;
  name: string;
  location: string;
  capacity: number;
  utilization: number;
  productCount: number;
  status: "Active" | "Maintenance" | "Inactive";
  lastUpdated: string;
}

const WarehouseManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState<string | null>(
    null,
  );

  const warehouses: Warehouse[] = [
    {
      id: "WH-001",
      name: "Main Distribution Center",
      location: "Chicago, IL",
      capacity: 10000,
      utilization: 78,
      productCount: 3245,
      status: "Active",
      lastUpdated: "2023-09-15",
    },
    {
      id: "WH-002",
      name: "East Coast Fulfillment",
      location: "Newark, NJ",
      capacity: 8500,
      utilization: 85,
      productCount: 2890,
      status: "Active",
      lastUpdated: "2023-09-12",
    },
    {
      id: "WH-003",
      name: "West Coast Fulfillment",
      location: "Los Angeles, CA",
      capacity: 9000,
      utilization: 72,
      productCount: 2580,
      status: "Active",
      lastUpdated: "2023-09-10",
    },
    {
      id: "WH-004",
      name: "Southern Distribution",
      location: "Dallas, TX",
      capacity: 7500,
      utilization: 65,
      productCount: 1950,
      status: "Active",
      lastUpdated: "2023-09-08",
    },
    {
      id: "WH-005",
      name: "International Shipping",
      location: "Miami, FL",
      capacity: 6000,
      utilization: 58,
      productCount: 1380,
      status: "Active",
      lastUpdated: "2023-09-05",
    },
    {
      id: "WH-006",
      name: "Northwest Storage",
      location: "Seattle, WA",
      capacity: 5500,
      utilization: 45,
      productCount: 980,
      status: "Active",
      lastUpdated: "2023-09-01",
    },
    {
      id: "WH-007",
      name: "Midwest Overflow",
      location: "Columbus, OH",
      capacity: 4000,
      utilization: 30,
      productCount: 480,
      status: "Active",
      lastUpdated: "2023-08-28",
    },
    {
      id: "WH-008",
      name: "Northeast Facility",
      location: "Boston, MA",
      capacity: 5000,
      utilization: 0,
      productCount: 0,
      status: "Maintenance",
      lastUpdated: "2023-08-15",
    },
  ];

  const filteredWarehouses = warehouses.filter(
    (warehouse) =>
      warehouse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      warehouse.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      warehouse.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const selectedWarehouseData = selectedWarehouse
    ? warehouses.find((warehouse) => warehouse.id === selectedWarehouse)
    : null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500/10 text-emerald-500";
      case "Maintenance":
        return "bg-amber-500/10 text-amber-500";
      case "Inactive":
        return "bg-slate-500/10 text-slate-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getUtilizationColor = (utilization: number) => {
    if (utilization >= 90) return "bg-red-500";
    if (utilization >= 75) return "bg-amber-500";
    return "bg-emerald-500";
  };

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Warehouse Management
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
              Add Warehouse
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
                placeholder="Search warehouses..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Active: 7
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Maintenance: 1
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-slate-500/10 border border-slate-500/20">
                <span className="h-2 w-2 rounded-full bg-slate-500 mr-2"></span>
                <span className="text-xs font-medium text-slate-500">
                  Inactive: 0
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-md border border-slate-800">
              <Table>
                <TableHeader className="bg-slate-800">
                  <TableRow>
                    <TableHead className="text-slate-300">
                      Warehouse ID
                    </TableHead>
                    <TableHead className="text-slate-300">Name</TableHead>
                    <TableHead className="text-slate-300">Location</TableHead>
                    <TableHead className="text-slate-300">
                      Utilization
                    </TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-right text-slate-300">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredWarehouses.map((warehouse) => (
                    <TableRow
                      key={warehouse.id}
                      className={`border-slate-800 ${selectedWarehouse === warehouse.id ? "bg-slate-800/50" : ""}`}
                      onClick={() =>
                        setSelectedWarehouse(
                          selectedWarehouse === warehouse.id
                            ? null
                            : warehouse.id,
                        )
                      }
                    >
                      <TableCell className="font-medium text-slate-300">
                        {warehouse.id}
                      </TableCell>
                      <TableCell>
                        <div className="text-slate-300">{warehouse.name}</div>
                      </TableCell>
                      <TableCell>{warehouse.location}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress
                            value={warehouse.utilization}
                            className="h-2 w-24 bg-slate-700"
                            indicatorClassName={getUtilizationColor(
                              warehouse.utilization,
                            )}
                          />
                          <span className="text-xs text-slate-400">
                            {warehouse.utilization}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(warehouse.status)}`}
                        >
                          {warehouse.status}
                        </span>
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
          </div>

          <div>
            {selectedWarehouseData ? (
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    {selectedWarehouseData.name}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Location
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedWarehouseData.location}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Status
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(selectedWarehouseData.status)}`}
                        >
                          {selectedWarehouseData.status}
                        </span>
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Capacity Utilization
                      </h4>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Utilization:</span>
                          <span className="text-white font-medium">
                            {selectedWarehouseData.utilization}%
                          </span>
                        </div>
                        <Progress
                          value={selectedWarehouseData.utilization}
                          className="h-2 bg-slate-700"
                          indicatorClassName={getUtilizationColor(
                            selectedWarehouseData.utilization,
                          )}
                        />
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>0%</span>
                          <span>50%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">
                          Total Capacity
                        </h4>
                        <p className="mt-1 text-sm text-slate-300">
                          {selectedWarehouseData.capacity.toLocaleString()}{" "}
                          units
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">
                          Product Count
                        </h4>
                        <p className="mt-1 text-sm text-slate-300">
                          {selectedWarehouseData.productCount.toLocaleString()}{" "}
                          items
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Last Updated
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {new Date(
                          selectedWarehouseData.lastUpdated,
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="mt-4 flex space-x-2">
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
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
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                        </svg>
                        Edit Warehouse
                      </Button>
                      <Button variant="outline" className="w-full">
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
                          <path d="m7.5 4.27 9 5.15" />
                          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                          <path d="m3.3 7 8.7 5 8.7-5" />
                          <path d="M12 22V12" />
                        </svg>
                        View Inventory
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="flex h-[400px] items-center justify-center p-6">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-4 text-slate-600"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <h3 className="mb-1 text-lg font-medium text-slate-400">
                      Select a warehouse
                    </h3>
                    <p className="text-sm text-slate-500">
                      Click on a warehouse to view detailed information
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WarehouseManagement;
