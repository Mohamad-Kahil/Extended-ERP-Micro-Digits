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

const InventoryManagement = () => {
  const [activeTab, setActiveTab] = useState("parts");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Inventory Management
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
              Add Item
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
            <TabsTrigger value="parts">Parts & Supplies</TabsTrigger>
            <TabsTrigger value="orders">Purchase Orders</TabsTrigger>
            <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="parts" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800">
              <Table>
                <TableHeader className="bg-slate-800">
                  <TableRow>
                    <TableHead className="text-slate-300">Item ID</TableHead>
                    <TableHead className="text-slate-300">Name</TableHead>
                    <TableHead className="text-slate-300">Category</TableHead>
                    <TableHead className="text-slate-300">Location</TableHead>
                    <TableHead className="text-slate-300">Quantity</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-slate-300">
                      Last Ordered
                    </TableHead>
                    <TableHead className="text-right text-slate-300">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "INV-001",
                      name: "HVAC Filters",
                      category: "HVAC",
                      location: "Warehouse A - Shelf 3",
                      quantity: 45,
                      minQuantity: 20,
                      status: "In Stock",
                      lastOrdered: "2023-08-15",
                    },
                    {
                      id: "INV-002",
                      name: "Conveyor Belt Rollers",
                      category: "Production",
                      location: "Warehouse B - Shelf 2",
                      quantity: 12,
                      minQuantity: 15,
                      status: "Low Stock",
                      lastOrdered: "2023-07-10",
                    },
                    {
                      id: "INV-003",
                      name: "Hydraulic Fluid",
                      category: "Hydraulic",
                      location: "Warehouse A - Shelf 5",
                      quantity: 28,
                      minQuantity: 10,
                      status: "In Stock",
                      lastOrdered: "2023-09-01",
                    },
                    {
                      id: "INV-004",
                      name: "Circuit Breakers",
                      category: "Electrical",
                      location: "Warehouse A - Shelf 1",
                      quantity: 35,
                      minQuantity: 20,
                      status: "In Stock",
                      lastOrdered: "2023-06-20",
                    },
                    {
                      id: "INV-005",
                      name: "Air Compressor Filters",
                      category: "Pneumatic",
                      location: "Warehouse B - Shelf 4",
                      quantity: 0,
                      minQuantity: 5,
                      status: "Out of Stock",
                      lastOrdered: "2023-08-05",
                    },
                    {
                      id: "INV-006",
                      name: "Boiler Gaskets",
                      category: "HVAC",
                      location: "Warehouse A - Shelf 2",
                      quantity: 8,
                      minQuantity: 10,
                      status: "Low Stock",
                      lastOrdered: "2023-08-12",
                    },
                    {
                      id: "INV-007",
                      name: "Packaging Machine Belts",
                      category: "Production",
                      location: "Warehouse B - Shelf 1",
                      quantity: 5,
                      minQuantity: 8,
                      status: "Low Stock",
                      lastOrdered: "2023-07-25",
                    },
                  ]
                    .filter(
                      (item) =>
                        item.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        item.id
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        item.category
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()),
                    )
                    .map((item) => (
                      <TableRow key={item.id} className="border-slate-800">
                        <TableCell className="font-medium text-slate-300">
                          {item.id}
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                              item.status === "In Stock"
                                ? "bg-emerald-500/10 text-emerald-500"
                                : item.status === "Low Stock"
                                  ? "bg-amber-500/10 text-amber-500"
                                  : "bg-red-500/10 text-red-500"
                            }`}
                          >
                            {item.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          {new Date(item.lastOrdered).toLocaleDateString()}
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
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <line x1="20" y1="8" x2="20" y2="14" />
                                <line x1="23" y1="11" x2="17" y2="11" />
                              </svg>
                              <span className="sr-only">Order</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="mt-4 space-y-4">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Purchase Orders
                </h3>
                <p className="text-slate-400">
                  Purchase order management and tracking will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="mt-4 space-y-4">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Usage Analytics
                </h3>
                <p className="text-slate-400">
                  Inventory usage patterns and analytics will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default InventoryManagement;
