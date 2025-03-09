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

const VendorManagement = () => {
  const [activeTab, setActiveTab] = useState("vendors");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Vendor Management</h2>
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
          Add New Vendor
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Total Vendors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">48</div>
            <p className="text-xs text-slate-500">Across all categories</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Active Contracts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-500">32</div>
            <p className="text-xs text-slate-500">5 renewals due soon</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Monthly Spend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$124,850</div>
            <p className="text-xs text-emerald-500">↓ 3% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Pending Approvals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">7</div>
            <p className="text-xs text-slate-500">Require review</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Vendor Management
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
                  placeholder="Search vendors..."
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
                  <SelectItem value="office-supplies">
                    Office Supplies
                  </SelectItem>
                  <SelectItem value="it-services">IT Services</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="professional">
                    Professional Services
                  </SelectItem>
                  <SelectItem value="utilities">Utilities</SelectItem>
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
              <TabsTrigger value="vendors">Vendors</TabsTrigger>
              <TabsTrigger value="contracts">Contracts</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="vendors" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Vendor ID</div>
                  <div className="col-span-3">Name</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Contact</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "VEN-001",
                      name: "Office Supplies Co.",
                      category: "Office Supplies",
                      contact: "sales@officesupplies.com",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "VEN-002",
                      name: "Tech Solutions Inc.",
                      category: "IT Services",
                      contact: "support@techsolutions.com",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "VEN-003",
                      name: "Clean & Clear Ltd.",
                      category: "Maintenance",
                      contact: "info@cleanandclear.com",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "VEN-004",
                      name: "Legal Advisors Group",
                      category: "Professional Services",
                      contact: "contact@legaladvisors.com",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "VEN-005",
                      name: "Kuwait Electricity",
                      category: "Utilities",
                      contact: "service@kuwaitelectricity.com",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "VEN-006",
                      name: "Gulf Maintenance Co.",
                      category: "Maintenance",
                      contact: "service@gulfmaintenance.com",
                      status: "Under Review",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "VEN-007",
                      name: "Dubai IT Solutions",
                      category: "IT Services",
                      contact: "info@dubaiitsolutions.com",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "VEN-008",
                      name: "Stationery World",
                      category: "Office Supplies",
                      contact: "orders@stationeryworld.com",
                      status: "Inactive",
                      statusColor: "bg-red-500",
                    },
                  ].map((vendor, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">{vendor.id}</div>
                      <div className="col-span-3">{vendor.name}</div>
                      <div className="col-span-2">{vendor.category}</div>
                      <div className="col-span-2">{vendor.contact}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${vendor.statusColor} bg-opacity-20 text-white`}
                        >
                          {vendor.status}
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

            <TabsContent value="contracts" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Contract ID</div>
                  <div className="col-span-2">Vendor</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-1">Start Date</div>
                  <div className="col-span-1">End Date</div>
                  <div className="col-span-1">Value</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "CON-2023-001",
                      vendor: "Office Supplies Co.",
                      type: "Annual Supply",
                      startDate: "Jan 15, 2023",
                      endDate: "Jan 14, 2024",
                      value: "$24,000",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "CON-2023-002",
                      vendor: "Tech Solutions Inc.",
                      type: "IT Support",
                      startDate: "Feb 01, 2023",
                      endDate: "Jan 31, 2024",
                      value: "$36,000",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "CON-2023-003",
                      vendor: "Clean & Clear Ltd.",
                      type: "Cleaning Services",
                      startDate: "Mar 10, 2023",
                      endDate: "Mar 09, 2024",
                      value: "$18,000",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "CON-2023-004",
                      vendor: "Legal Advisors Group",
                      type: "Legal Services",
                      startDate: "Apr 01, 2023",
                      endDate: "Mar 31, 2024",
                      value: "$48,000",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "CON-2023-005",
                      vendor: "Gulf Maintenance Co.",
                      type: "HVAC Maintenance",
                      startDate: "May 15, 2023",
                      endDate: "May 14, 2024",
                      value: "$12,000",
                      status: "Under Review",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "CON-2023-006",
                      vendor: "Dubai IT Solutions",
                      type: "Software License",
                      startDate: "Jun 01, 2023",
                      endDate: "May 31, 2024",
                      value: "$22,500",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                  ].map((contract, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">
                        {contract.id}
                      </div>
                      <div className="col-span-2">{contract.vendor}</div>
                      <div className="col-span-2">{contract.type}</div>
                      <div className="col-span-1">{contract.startDate}</div>
                      <div className="col-span-1">{contract.endDate}</div>
                      <div className="col-span-1">{contract.value}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${contract.statusColor} bg-opacity-20 text-white`}
                        >
                          {contract.status}
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
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M3 9h18" />
                            <path d="M9 21V9" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-3">Vendor</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-1">Reliability</div>
                  <div className="col-span-1">Quality</div>
                  <div className="col-span-1">Pricing</div>
                  <div className="col-span-1">Response</div>
                  <div className="col-span-1">Overall</div>
                  <div className="col-span-2">Last Review</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      vendor: "Office Supplies Co.",
                      category: "Office Supplies",
                      reliability: 4.5,
                      quality: 4.2,
                      pricing: 3.8,
                      response: 4.0,
                      overall: 4.1,
                      lastReview: "Oct 15, 2023",
                    },
                    {
                      vendor: "Tech Solutions Inc.",
                      category: "IT Services",
                      reliability: 4.8,
                      quality: 4.7,
                      pricing: 3.5,
                      response: 4.6,
                      overall: 4.4,
                      lastReview: "Sep 30, 2023",
                    },
                    {
                      vendor: "Clean & Clear Ltd.",
                      category: "Maintenance",
                      reliability: 4.2,
                      quality: 4.0,
                      pricing: 4.3,
                      response: 3.9,
                      overall: 4.1,
                      lastReview: "Oct 05, 2023",
                    },
                    {
                      vendor: "Legal Advisors Group",
                      category: "Professional Services",
                      reliability: 4.9,
                      quality: 4.8,
                      pricing: 3.2,
                      response: 4.5,
                      overall: 4.3,
                      lastReview: "Aug 22, 2023",
                    },
                    {
                      vendor: "Gulf Maintenance Co.",
                      category: "Maintenance",
                      reliability: 3.5,
                      quality: 3.7,
                      pricing: 4.2,
                      response: 3.4,
                      overall: 3.7,
                      lastReview: "Oct 10, 2023",
                    },
                    {
                      vendor: "Dubai IT Solutions",
                      category: "IT Services",
                      reliability: 4.6,
                      quality: 4.5,
                      pricing: 3.9,
                      response: 4.3,
                      overall: 4.3,
                      lastReview: "Sep 15, 2023",
                    },
                  ].map((performance, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-3 font-medium">
                        {performance.vendor}
                      </div>
                      <div className="col-span-2">{performance.category}</div>
                      <div className="col-span-1">
                        {performance.reliability}
                      </div>
                      <div className="col-span-1">{performance.quality}</div>
                      <div className="col-span-1">{performance.pricing}</div>
                      <div className="col-span-1">{performance.response}</div>
                      <div className="col-span-1 font-medium">
                        {performance.overall}
                      </div>
                      <div className="col-span-2">{performance.lastReview}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Contract Renewals */}
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            Upcoming Contract Renewals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: "CON-2023-001",
                vendor: "Office Supplies Co.",
                type: "Annual Supply",
                expiryDate: "Jan 14, 2024",
                daysLeft: 65,
                status: "Upcoming",
                statusColor: "bg-amber-500",
              },
              {
                id: "CON-2023-002",
                vendor: "Tech Solutions Inc.",
                type: "IT Support",
                expiryDate: "Jan 31, 2024",
                daysLeft: 82,
                status: "Upcoming",
                statusColor: "bg-amber-500",
              },
              {
                id: "CON-2023-003",
                vendor: "Clean & Clear Ltd.",
                type: "Cleaning Services",
                expiryDate: "Mar 09, 2024",
                daysLeft: 120,
                status: "Planned",
                statusColor: "bg-emerald-500",
              },
              {
                id: "CON-2023-004",
                vendor: "Legal Advisors Group",
                type: "Legal Services",
                expiryDate: "Mar 31, 2024",
                daysLeft: 142,
                status: "Planned",
                statusColor: "bg-emerald-500",
              },
            ].map((contract, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md border border-slate-800 p-3 hover:bg-slate-800/50"
              >
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white">
                    {contract.vendor} - {contract.type}
                  </h4>
                  <p className="text-xs text-slate-400">
                    Contract ID: {contract.id}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-xs text-slate-400">
                    Expires:{" "}
                    <span className="text-white">{contract.expiryDate}</span>
                    <span className="ml-2 text-amber-500">
                      ({contract.daysLeft} days)
                    </span>
                  </div>
                  <div
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${contract.statusColor} bg-opacity-20 text-white`}
                  >
                    {contract.status}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 px-2 text-xs border-slate-700"
                  >
                    Renew
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

export default VendorManagement;
