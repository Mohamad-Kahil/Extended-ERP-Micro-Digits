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

const Procurement = () => {
  const [activeTab, setActiveTab] = useState("purchase-orders");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4">
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Procurement & Purchase Orders
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
                New Purchase Order
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
                  placeholder="Search orders..."
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
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="pending">Pending Approval</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="received">Received</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Approved: 42
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Pending: 15
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                <span className="text-xs font-medium text-blue-500">
                  Draft: 8
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
              <TabsTrigger value="purchase-orders">Purchase Orders</TabsTrigger>
              <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
              <TabsTrigger value="catalog">Catalog</TabsTrigger>
            </TabsList>

            <TabsContent value="purchase-orders" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">PO #</div>
                  <div className="col-span-2">Date</div>
                  <div className="col-span-2">Supplier</div>
                  <div className="col-span-2">Items</div>
                  <div className="col-span-1">Total</div>
                  <div className="col-span-1">Currency</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "PO-2023-1001",
                      date: "2023-10-15",
                      supplier: "ABC Supplies Inc.",
                      items: 12,
                      total: "$12,500.00",
                      currency: "USD",
                      status: "Approved",
                    },
                    {
                      id: "PO-2023-1002",
                      date: "2023-10-18",
                      supplier: "XYZ Manufacturing",
                      items: 5,
                      total: "$8,750.00",
                      currency: "USD",
                      status: "Received",
                    },
                    {
                      id: "PO-2023-1003",
                      date: "2023-10-20",
                      supplier: "Global Parts Co.",
                      items: 8,
                      total: "$15,200.00",
                      currency: "USD",
                      status: "Pending Approval",
                    },
                    {
                      id: "PO-2023-1004",
                      date: "2023-10-22",
                      supplier: "Office Supplies Ltd.",
                      items: 20,
                      total: "$3,800.00",
                      currency: "USD",
                      status: "Draft",
                    },
                    {
                      id: "PO-2023-1005",
                      date: "2023-10-25",
                      supplier: "Tech Solutions Inc.",
                      items: 3,
                      total: "$7,350.00",
                      currency: "USD",
                      status: "Pending Approval",
                    },
                    {
                      id: "PO-2023-1006",
                      date: "2023-10-28",
                      supplier: "Industrial Supplies Co.",
                      items: 15,
                      total: "$22,500.00",
                      currency: "USD",
                      status: "Approved",
                    },
                    {
                      id: "PO-2023-1007",
                      date: "2023-10-30",
                      supplier: "Packaging Solutions",
                      items: 7,
                      total: "$6,500.00",
                      currency: "USD",
                      status: "Cancelled",
                    },
                  ].map((po, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{po.id}</div>
                      <div className="col-span-2">
                        {new Date(po.date).toLocaleDateString()}
                      </div>
                      <div className="col-span-2">{po.supplier}</div>
                      <div className="col-span-2">{po.items} items</div>
                      <div className="col-span-1">{po.total}</div>
                      <div className="col-span-1">{po.currency}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${po.status === "Approved" ? "bg-emerald-500/10 text-emerald-500" : po.status === "Received" ? "bg-cyan-500/10 text-cyan-500" : po.status === "Pending Approval" ? "bg-amber-500/10 text-amber-500" : po.status === "Draft" ? "bg-blue-500/10 text-blue-500" : "bg-red-500/10 text-red-500"}`}
                        >
                          {po.status}
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

            <TabsContent value="suppliers" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Supplier Name</div>
                  <div className="col-span-2">Contact</div>
                  <div className="col-span-2">Email</div>
                  <div className="col-span-1">Phone</div>
                  <div className="col-span-1">Country</div>
                  <div className="col-span-1">Active POs</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      name: "ABC Supplies Inc.",
                      contact: "John Smith",
                      email: "john@abcsupplies.com",
                      phone: "+1 (555) 123-4567",
                      country: "USA",
                      activePOs: 3,
                      status: "Active",
                    },
                    {
                      name: "XYZ Manufacturing",
                      contact: "Jane Doe",
                      email: "jane@xyzmanufacturing.com",
                      phone: "+1 (555) 987-6543",
                      country: "USA",
                      activePOs: 1,
                      status: "Active",
                    },
                    {
                      name: "Global Parts Co.",
                      contact: "Michael Johnson",
                      email: "michael@globalparts.com",
                      phone: "+44 20 1234 5678",
                      country: "UK",
                      activePOs: 2,
                      status: "Active",
                    },
                    {
                      name: "Office Supplies Ltd.",
                      contact: "Sarah Williams",
                      email: "sarah@officesupplies.com",
                      phone: "+1 (555) 456-7890",
                      country: "Canada",
                      activePOs: 1,
                      status: "Active",
                    },
                    {
                      name: "Tech Solutions Inc.",
                      contact: "David Brown",
                      email: "david@techsolutions.com",
                      phone: "+1 (555) 789-0123",
                      country: "USA",
                      activePOs: 1,
                      status: "Active",
                    },
                    {
                      name: "Industrial Supplies Co.",
                      contact: "Robert Miller",
                      email: "robert@industrialsupplies.com",
                      phone: "+1 (555) 234-5678",
                      country: "USA",
                      activePOs: 1,
                      status: "Active",
                    },
                    {
                      name: "Packaging Solutions",
                      contact: "Jennifer Wilson",
                      email: "jennifer@packagingsolutions.com",
                      phone: "+1 (555) 345-6789",
                      country: "USA",
                      activePOs: 0,
                      status: "Inactive",
                    },
                  ].map((supplier, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">
                        {supplier.name}
                      </div>
                      <div className="col-span-2">{supplier.contact}</div>
                      <div className="col-span-2">{supplier.email}</div>
                      <div className="col-span-1">{supplier.phone}</div>
                      <div className="col-span-1">{supplier.country}</div>
                      <div className="col-span-1">{supplier.activePOs}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${supplier.status === "Active" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}`}
                        >
                          {supplier.status}
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

            <TabsContent value="catalog" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">SKU</div>
                  <div className="col-span-2">Item Name</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Supplier</div>
                  <div className="col-span-1">Unit Price</div>
                  <div className="col-span-1">Currency</div>
                  <div className="col-span-1">Lead Time</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      sku: "IT-001",
                      name: "Office Desk",
                      category: "Furniture",
                      supplier: "Office Supplies Ltd.",
                      price: "$350.00",
                      currency: "USD",
                      leadTime: "2 weeks",
                    },
                    {
                      sku: "IT-002",
                      name: "Office Chair",
                      category: "Furniture",
                      supplier: "Office Supplies Ltd.",
                      price: "$150.00",
                      currency: "USD",
                      leadTime: "2 weeks",
                    },
                    {
                      sku: "IT-003",
                      name: "Desktop Computer",
                      category: "Electronics",
                      supplier: "Tech Solutions Inc.",
                      price: "$1,200.00",
                      currency: "USD",
                      leadTime: "1 week",
                    },
                    {
                      sku: "IT-004",
                      name: "Laptop",
                      category: "Electronics",
                      supplier: "Tech Solutions Inc.",
                      price: "$1,500.00",
                      currency: "USD",
                      leadTime: "1 week",
                    },
                    {
                      sku: "IT-005",
                      name: "Printer",
                      category: "Electronics",
                      supplier: "Tech Solutions Inc.",
                      price: "$350.00",
                      currency: "USD",
                      leadTime: "1 week",
                    },
                    {
                      sku: "IT-006",
                      name: "Filing Cabinet",
                      category: "Furniture",
                      supplier: "Office Supplies Ltd.",
                      price: "$250.00",
                      currency: "USD",
                      leadTime: "2 weeks",
                    },
                    {
                      sku: "IT-007",
                      name: "Paper (Box)",
                      category: "Office Supplies",
                      supplier: "Office Supplies Ltd.",
                      price: "$45.00",
                      currency: "USD",
                      leadTime: "3 days",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{item.sku}</div>
                      <div className="col-span-2">{item.name}</div>
                      <div className="col-span-2">{item.category}</div>
                      <div className="col-span-2">{item.supplier}</div>
                      <div className="col-span-1">{item.price}</div>
                      <div className="col-span-1">{item.currency}</div>
                      <div className="col-span-1">{item.leadTime}</div>
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
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Procurement;
