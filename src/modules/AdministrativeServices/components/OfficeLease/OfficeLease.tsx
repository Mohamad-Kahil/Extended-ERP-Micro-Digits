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

const OfficeLease = () => {
  const [activeTab, setActiveTab] = useState("leases");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Office Lease Management
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
          Add New Lease
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Active Leases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-slate-500">Across 4 countries</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Monthly Rent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$28,500</div>
            <p className="text-xs text-slate-500">Total monthly expenditure</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Upcoming Renewals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">3</div>
            <p className="text-xs text-slate-500">Within next 90 days</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Total Area
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">4,850 m²</div>
            <p className="text-xs text-slate-500">Combined office space</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Lease Management
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
                  placeholder="Search leases..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="expiring">Expiring Soon</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                  <SelectItem value="renewal">In Renewal</SelectItem>
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
              <TabsTrigger value="leases">Leases</TabsTrigger>
              <TabsTrigger value="utilities">Utilities</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>

            <TabsContent value="leases" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Property</div>
                  <div className="col-span-2">Location</div>
                  <div className="col-span-1">Area (m²)</div>
                  <div className="col-span-1">Monthly Rent</div>
                  <div className="col-span-1">Currency</div>
                  <div className="col-span-1">Start Date</div>
                  <div className="col-span-1">End Date</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      property: "Main Headquarters",
                      location: "Kuwait City, Kuwait",
                      area: 1200,
                      rent: 8500,
                      currency: "KWD",
                      startDate: "01 Jan 2023",
                      endDate: "31 Dec 2025",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      property: "Regional Office",
                      location: "Dubai Media City, UAE",
                      area: 850,
                      rent: 12000,
                      currency: "AED",
                      startDate: "01 Dec 2022",
                      endDate: "30 Nov 2023",
                      status: "Expiring",
                      statusColor: "bg-amber-500",
                    },
                    {
                      property: "Branch Office",
                      location: "Doha, Qatar",
                      area: 650,
                      rent: 9000,
                      currency: "QAR",
                      startDate: "15 Mar 2023",
                      endDate: "14 Mar 2024",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      property: "Sales Office",
                      location: "Riyadh, Saudi Arabia",
                      area: 450,
                      rent: 7500,
                      currency: "SAR",
                      startDate: "01 May 2023",
                      endDate: "30 Apr 2024",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      property: "Support Center",
                      location: "Manama, Bahrain",
                      area: 350,
                      rent: 2200,
                      currency: "BHD",
                      startDate: "01 Jun 2023",
                      endDate: "31 May 2024",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      property: "Training Center",
                      location: "Kuwait City, Kuwait",
                      area: 300,
                      rent: 1800,
                      currency: "KWD",
                      startDate: "01 Jul 2023",
                      endDate: "30 Jun 2024",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      property: "Warehouse",
                      location: "Shuwaikh, Kuwait",
                      area: 1050,
                      rent: 2500,
                      currency: "KWD",
                      startDate: "01 Jan 2023",
                      endDate: "31 Dec 2023",
                      status: "Expiring",
                      statusColor: "bg-amber-500",
                    },
                  ].map((lease, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">
                        {lease.property}
                      </div>
                      <div className="col-span-2">{lease.location}</div>
                      <div className="col-span-1">{lease.area}</div>
                      <div className="col-span-1">
                        {lease.rent.toLocaleString()}
                      </div>
                      <div className="col-span-1">{lease.currency}</div>
                      <div className="col-span-1">{lease.startDate}</div>
                      <div className="col-span-1">{lease.endDate}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${lease.statusColor} bg-opacity-20 text-white`}
                        >
                          {lease.status}
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

            <TabsContent value="utilities" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Property</div>
                  <div className="col-span-2">Utility Type</div>
                  <div className="col-span-2">Provider</div>
                  <div className="col-span-1">Account #</div>
                  <div className="col-span-1">Monthly Avg.</div>
                  <div className="col-span-1">Currency</div>
                  <div className="col-span-1">Last Bill</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      property: "Main Headquarters",
                      type: "Electricity",
                      provider: "Kuwait Electricity",
                      account: "EL-12345",
                      average: 850,
                      currency: "KWD",
                      lastBill: "Oct 2023",
                      status: "Paid",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      property: "Main Headquarters",
                      type: "Water",
                      provider: "Kuwait Water",
                      account: "WA-12345",
                      average: 120,
                      currency: "KWD",
                      lastBill: "Oct 2023",
                      status: "Paid",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      property: "Main Headquarters",
                      type: "Internet",
                      provider: "Kuwait Telecom",
                      account: "IN-12345",
                      average: 200,
                      currency: "KWD",
                      lastBill: "Oct 2023",
                      status: "Paid",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      property: "Regional Office",
                      type: "Electricity",
                      provider: "Dubai Electricity",
                      account: "EL-67890",
                      average: 1200,
                      currency: "AED",
                      lastBill: "Oct 2023",
                      status: "Pending",
                      statusColor: "bg-amber-500",
                    },
                    {
                      property: "Regional Office",
                      type: "Water",
                      provider: "Dubai Water",
                      account: "WA-67890",
                      average: 300,
                      currency: "AED",
                      lastBill: "Oct 2023",
                      status: "Paid",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      property: "Regional Office",
                      type: "Internet",
                      provider: "UAE Telecom",
                      account: "IN-67890",
                      average: 500,
                      currency: "AED",
                      lastBill: "Oct 2023",
                      status: "Paid",
                      statusColor: "bg-emerald-500",
                    },
                  ].map((utility, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2">{utility.property}</div>
                      <div className="col-span-2 font-medium">
                        {utility.type}
                      </div>
                      <div className="col-span-2">{utility.provider}</div>
                      <div className="col-span-1">{utility.account}</div>
                      <div className="col-span-1">{utility.average}</div>
                      <div className="col-span-1">{utility.currency}</div>
                      <div className="col-span-1">{utility.lastBill}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${utility.statusColor} bg-opacity-20 text-white`}
                        >
                          {utility.status}
                        </span>
                      </div>
                      <div className="col-span-1 flex space-x-2">
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="maintenance" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Property</div>
                  <div className="col-span-2">Maintenance Type</div>
                  <div className="col-span-2">Vendor</div>
                  <div className="col-span-2">Last Service</div>
                  <div className="col-span-2">Next Service</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      property: "Main Headquarters",
                      type: "HVAC Maintenance",
                      vendor: "Kuwait Cooling Systems",
                      lastService: "15 Aug 2023",
                      nextService: "15 Nov 2023",
                      status: "Scheduled",
                      statusColor: "bg-amber-500",
                    },
                    {
                      property: "Main Headquarters",
                      type: "Elevator Maintenance",
                      vendor: "Gulf Elevators",
                      lastService: "10 Sep 2023",
                      nextService: "10 Dec 2023",
                      status: "Scheduled",
                      statusColor: "bg-amber-500",
                    },
                    {
                      property: "Main Headquarters",
                      type: "Fire Safety Inspection",
                      vendor: "Safety First Co.",
                      lastService: "05 Jul 2023",
                      nextService: "05 Jan 2024",
                      status: "Upcoming",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      property: "Regional Office",
                      type: "HVAC Maintenance",
                      vendor: "Dubai Cooling Systems",
                      lastService: "20 Sep 2023",
                      nextService: "20 Dec 2023",
                      status: "Scheduled",
                      statusColor: "bg-amber-500",
                    },
                    {
                      property: "Regional Office",
                      type: "Pest Control",
                      vendor: "UAE Pest Control",
                      lastService: "15 Oct 2023",
                      nextService: "15 Jan 2024",
                      status: "Upcoming",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      property: "Warehouse",
                      type: "Security System Check",
                      vendor: "Kuwait Security Solutions",
                      lastService: "01 Oct 2023",
                      nextService: "01 Jan 2024",
                      status: "Upcoming",
                      statusColor: "bg-emerald-500",
                    },
                  ].map((maintenance, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2">{maintenance.property}</div>
                      <div className="col-span-2 font-medium">
                        {maintenance.type}
                      </div>
                      <div className="col-span-2">{maintenance.vendor}</div>
                      <div className="col-span-2">
                        {maintenance.lastService}
                      </div>
                      <div className="col-span-2">
                        {maintenance.nextService}
                      </div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${maintenance.statusColor} bg-opacity-20 text-white`}
                        >
                          {maintenance.status}
                        </span>
                      </div>
                      <div className="col-span-1 flex space-x-2">
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Lease Details */}
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            Lease Renewal Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-800"></div>

            <div className="space-y-6 pl-12">
              {[
                {
                  date: "Nov 30, 2023",
                  title: "Dubai Media City Office Lease Renewal",
                  description: "Regional office lease expires",
                  status: "Upcoming",
                  statusColor: "bg-amber-500",
                  assignee: "John Smith",
                },
                {
                  date: "Dec 31, 2023",
                  title: "Shuwaikh Warehouse Lease Renewal",
                  description: "Warehouse lease expires",
                  status: "Upcoming",
                  statusColor: "bg-amber-500",
                  assignee: "Mohammed Al-Sayed",
                },
                {
                  date: "Mar 14, 2024",
                  title: "Doha Office Lease Renewal",
                  description: "Branch office lease expires",
                  status: "Planned",
                  statusColor: "bg-emerald-500",
                  assignee: "Sarah Johnson",
                },
                {
                  date: "Apr 30, 2024",
                  title: "Riyadh Office Lease Renewal",
                  description: "Sales office lease expires",
                  status: "Planned",
                  statusColor: "bg-emerald-500",
                  assignee: "Fatima Al-Qasim",
                },
                {
                  date: "May 31, 2024",
                  title: "Manama Office Lease Renewal",
                  description: "Support center lease expires",
                  status: "Planned",
                  statusColor: "bg-emerald-500",
                  assignee: "Ahmed Khalid",
                },
              ].map((event, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-12 top-1 h-4 w-4 rounded-full ${event.statusColor}`}
                  ></div>

                  <div className="rounded-md border border-slate-800 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-sm font-medium text-white">
                        {event.title}
                      </div>
                      <Badge
                        className={`${event.statusColor} bg-opacity-20 text-white`}
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <p className="mb-2 text-xs text-slate-400">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="text-slate-500">
                        Due:{" "}
                        <span className="text-amber-500">{event.date}</span>
                      </div>
                      <div className="text-slate-500">
                        Assigned to:{" "}
                        <span className="text-cyan-500">{event.assignee}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfficeLease;
