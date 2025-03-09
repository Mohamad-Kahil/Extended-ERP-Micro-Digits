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

const OfficeSupplies = () => {
  const [activeTab, setActiveTab] = useState("inventory");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Office Supplies Management
        </h2>
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
          New Order
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Total Inventory Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$24,850</div>
            <p className="text-xs text-emerald-500">↑ 5% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Low Stock Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">12</div>
            <p className="text-xs text-slate-500">Require reordering</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Pending Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-500">3</div>
            <p className="text-xs text-slate-500">Expected within 7 days</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Monthly Spend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$3,850</div>
            <p className="text-xs text-red-500">↑ 12% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Office Supplies Management
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
                  placeholder="Search supplies..."
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
                  <SelectItem value="stationery">Stationery</SelectItem>
                  <SelectItem value="printing">Printing Supplies</SelectItem>
                  <SelectItem value="cleaning">Cleaning Supplies</SelectItem>
                  <SelectItem value="kitchen">Kitchen Supplies</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
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
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="vendors">Vendors</TabsTrigger>
            </TabsList>

            <TabsContent value="inventory" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-3">Item</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-1">Unit</div>
                  <div className="col-span-1">Price</div>
                  <div className="col-span-1">In Stock</div>
                  <div className="col-span-1">Min Level</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      item: "A4 Paper (80gsm)",
                      category: "Stationery",
                      unit: "Box",
                      price: 25.99,
                      inStock: 42,
                      minLevel: 20,
                      status: "Adequate",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      item: "Printer Ink - Black",
                      category: "Printing Supplies",
                      unit: "Cartridge",
                      price: 45.5,
                      inStock: 8,
                      minLevel: 10,
                      status: "Low Stock",
                      statusColor: "bg-amber-500",
                    },
                    {
                      item: "Printer Ink - Color Set",
                      category: "Printing Supplies",
                      unit: "Set",
                      price: 89.99,
                      inStock: 5,
                      minLevel: 8,
                      status: "Low Stock",
                      statusColor: "bg-amber-500",
                    },
                    {
                      item: "Ballpoint Pens (Blue)",
                      category: "Stationery",
                      unit: "Box",
                      price: 12.5,
                      inStock: 35,
                      minLevel: 15,
                      status: "Adequate",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      item: "Notebooks (A5)",
                      category: "Stationery",
                      unit: "Piece",
                      price: 3.99,
                      inStock: 48,
                      minLevel: 20,
                      status: "Adequate",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      item: "Hand Sanitizer",
                      category: "Cleaning Supplies",
                      unit: "Bottle",
                      price: 5.99,
                      inStock: 12,
                      minLevel: 15,
                      status: "Low Stock",
                      statusColor: "bg-amber-500",
                    },
                    {
                      item: "Disinfectant Wipes",
                      category: "Cleaning Supplies",
                      unit: "Pack",
                      price: 7.5,
                      inStock: 8,
                      minLevel: 10,
                      status: "Low Stock",
                      statusColor: "bg-amber-500",
                    },
                    {
                      item: "Coffee Pods",
                      category: "Kitchen Supplies",
                      unit: "Box",
                      price: 18.99,
                      inStock: 3,
                      minLevel: 5,
                      status: "Critical",
                      statusColor: "bg-red-500",
                    },
                    {
                      item: "Paper Towels",
                      category: "Kitchen Supplies",
                      unit: "Roll",
                      price: 2.5,
                      inStock: 24,
                      minLevel: 12,
                      status: "Adequate",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      item: "USB Flash Drives (32GB)",
                      category: "Electronics",
                      unit: "Piece",
                      price: 14.99,
                      inStock: 7,
                      minLevel: 10,
                      status: "Low Stock",
                      statusColor: "bg-amber-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-3 font-medium">{item.item}</div>
                      <div className="col-span-2">{item.category}</div>
                      <div className="col-span-1">{item.unit}</div>
                      <div className="col-span-1">${item.price}</div>
                      <div className="col-span-1">{item.inStock}</div>
                      <div className="col-span-1">{item.minLevel}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${item.statusColor} bg-opacity-20 text-white`}
                        >
                          {item.status}
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
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Order ID</div>
                  <div className="col-span-2">Date</div>
                  <div className="col-span-2">Vendor</div>
                  <div className="col-span-2">Items</div>
                  <div className="col-span-1">Total</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "ORD-2023-1042",
                      date: "Nov 10, 2023",
                      vendor: "Office Supplies Co.",
                      items: 12,
                      total: 1250.0,
                      status: "Delivered",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "ORD-2023-1041",
                      date: "Nov 05, 2023",
                      vendor: "Tech Solutions Inc.",
                      items: 3,
                      total: 899.99,
                      status: "Delivered",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "ORD-2023-1040",
                      date: "Oct 28, 2023",
                      vendor: "Clean & Clear Ltd.",
                      items: 8,
                      total: 345.5,
                      status: "Delivered",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "ORD-2023-1039",
                      date: "Oct 22, 2023",
                      vendor: "Office Supplies Co.",
                      items: 15,
                      total: 1875.25,
                      status: "Delivered",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "ORD-2023-1043",
                      date: "Nov 12, 2023",
                      vendor: "Printing Experts",
                      items: 5,
                      total: 750.0,
                      status: "Processing",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "ORD-2023-1044",
                      date: "Nov 15, 2023",
                      vendor: "Kitchen Essentials",
                      items: 7,
                      total: 425.75,
                      status: "Pending",
                      statusColor: "bg-cyan-500",
                    },
                  ].map((order, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">{order.id}</div>
                      <div className="col-span-2">{order.date}</div>
                      <div className="col-span-2">{order.vendor}</div>
                      <div className="col-span-2">{order.items} items</div>
                      <div className="col-span-1">
                        ${order.total.toFixed(2)}
                      </div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${order.statusColor} bg-opacity-20 text-white`}
                        >
                          {order.status}
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
                            <path d="M12 3v12" />
                            <path d="m8 11 4 4 4-4" />
                            <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vendors" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-3">Vendor</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-3">Contact</div>
                  <div className="col-span-2">Last Order</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      name: "Office Supplies Co.",
                      category: "General Office Supplies",
                      contact: "sales@officesupplies.com",
                      lastOrder: "Nov 10, 2023",
                    },
                    {
                      name: "Tech Solutions Inc.",
                      category: "Electronics",
                      contact: "orders@techsolutions.com",
                      lastOrder: "Nov 05, 2023",
                    },
                    {
                      name: "Clean & Clear Ltd.",
                      category: "Cleaning Supplies",
                      contact: "info@cleanandclear.com",
                      lastOrder: "Oct 28, 2023",
                    },
                    {
                      name: "Printing Experts",
                      category: "Printing Supplies",
                      contact: "sales@printingexperts.com",
                      lastOrder: "Nov 12, 2023",
                    },
                    {
                      name: "Kitchen Essentials",
                      category: "Kitchen Supplies",
                      contact: "orders@kitchenessentials.com",
                      lastOrder: "Nov 15, 2023",
                    },
                    {
                      name: "Stationery World",
                      category: "Stationery",
                      contact: "contact@stationeryworld.com",
                      lastOrder: "Oct 15, 2023",
                    },
                  ].map((vendor, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-3 font-medium">
                        {vendor.name}
                      </div>
                      <div className="col-span-2">{vendor.category}</div>
                      <div className="col-span-3">{vendor.contact}</div>
                      <div className="col-span-2">{vendor.lastOrder}</div>
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

      {/* Low Stock Alert */}
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            Low Stock Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                item: "Printer Ink - Black",
                category: "Printing Supplies",
                inStock: 8,
                minLevel: 10,
                status: "Low Stock",
                statusColor: "bg-amber-500",
              },
              {
                item: "Printer Ink - Color Set",
                category: "Printing Supplies",
                inStock: 5,
                minLevel: 8,
                status: "Low Stock",
                statusColor: "bg-amber-500",
              },
              {
                item: "Hand Sanitizer",
                category: "Cleaning Supplies",
                inStock: 12,
                minLevel: 15,
                status: "Low Stock",
                statusColor: "bg-amber-500",
              },
              {
                item: "Disinfectant Wipes",
                category: "Cleaning Supplies",
                inStock: 8,
                minLevel: 10,
                status: "Low Stock",
                statusColor: "bg-amber-500",
              },
              {
                item: "Coffee Pods",
                category: "Kitchen Supplies",
                inStock: 3,
                minLevel: 5,
                status: "Critical",
                statusColor: "bg-red-500",
              },
              {
                item: "USB Flash Drives (32GB)",
                category: "Electronics",
                inStock: 7,
                minLevel: 10,
                status: "Low Stock",
                statusColor: "bg-amber-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md border border-slate-800 p-3 hover:bg-slate-800/50"
              >
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white">
                    {item.item}
                  </h4>
                  <p className="text-xs text-slate-400">{item.category}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-xs text-slate-400">
                    <span className="text-white">{item.inStock}</span> /{" "}
                    <span>{item.minLevel}</span> units
                  </div>
                  <div
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${item.statusColor} bg-opacity-20 text-white`}
                  >
                    {item.status}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 px-2 text-xs border-slate-700"
                  >
                    Order
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfficeSupplies;
