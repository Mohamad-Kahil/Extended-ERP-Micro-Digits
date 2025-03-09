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

const GovernmentDocuments = () => {
  const [activeTab, setActiveTab] = useState("company-licenses");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Government Documents</h2>
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
          Add New Document
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Total Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">124</div>
            <p className="text-xs text-slate-500">
              Company & Employee Documents
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Expiring Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">18</div>
            <p className="text-xs text-slate-500">Within next 30 days</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Expired
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">3</div>
            <p className="text-xs text-slate-500">
              Requires immediate attention
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              In Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-500">12</div>
            <p className="text-xs text-slate-500">
              Renewal/application in progress
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Document Management
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
                  placeholder="Search documents..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select
                value={selectedCountry}
                onValueChange={setSelectedCountry}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="kuwait">Kuwait</SelectItem>
                  <SelectItem value="uae">UAE</SelectItem>
                  <SelectItem value="qatar">Qatar</SelectItem>
                  <SelectItem value="saudi">Saudi Arabia</SelectItem>
                  <SelectItem value="bahrain">Bahrain</SelectItem>
                  <SelectItem value="oman">Oman</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="expiring">Expiring Soon</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                  <SelectItem value="processing">In Process</SelectItem>
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
              <TabsTrigger value="company-licenses">
                Company Licenses
              </TabsTrigger>
              <TabsTrigger value="employee-documents">
                Employee Documents
              </TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
            </TabsList>

            <TabsContent value="company-licenses" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Document Type</div>
                  <div className="col-span-2">Document ID</div>
                  <div className="col-span-2">Country</div>
                  <div className="col-span-2">Issue Date</div>
                  <div className="col-span-2">Expiry Date</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      type: "Trade License",
                      id: "TL-KW-2023-001",
                      country: "Kuwait",
                      issueDate: "15 Jan 2023",
                      expiryDate: "14 Jan 2024",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      type: "Commercial Registration",
                      id: "CR-KW-2023-002",
                      country: "Kuwait",
                      issueDate: "20 Feb 2023",
                      expiryDate: "19 Feb 2024",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      type: "Municipality License",
                      id: "ML-KW-2023-003",
                      country: "Kuwait",
                      issueDate: "05 Mar 2023",
                      expiryDate: "15 Nov 2023",
                      status: "Expiring",
                      statusColor: "bg-amber-500",
                    },
                    {
                      type: "Trade License",
                      id: "TL-UAE-2023-001",
                      country: "UAE",
                      issueDate: "10 Apr 2023",
                      expiryDate: "09 Apr 2024",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      type: "Tax Registration",
                      id: "TR-UAE-2023-002",
                      country: "UAE",
                      issueDate: "15 May 2023",
                      expiryDate: "14 May 2024",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      type: "Import License",
                      id: "IL-KW-2022-001",
                      country: "Kuwait",
                      issueDate: "01 Dec 2022",
                      expiryDate: "30 Nov 2023",
                      status: "Expiring",
                      statusColor: "bg-amber-500",
                    },
                    {
                      type: "Chamber of Commerce",
                      id: "CC-KW-2022-002",
                      country: "Kuwait",
                      issueDate: "15 Dec 2022",
                      expiryDate: "14 Dec 2023",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                  ].map((doc, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2">{doc.type}</div>
                      <div className="col-span-2 font-medium">{doc.id}</div>
                      <div className="col-span-2">{doc.country}</div>
                      <div className="col-span-2">{doc.issueDate}</div>
                      <div className="col-span-2">{doc.expiryDate}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${doc.statusColor} bg-opacity-20 text-white`}
                        >
                          {doc.status}
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

            <TabsContent value="employee-documents" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Employee</div>
                  <div className="col-span-2">Document Type</div>
                  <div className="col-span-2">Document ID</div>
                  <div className="col-span-1">Country</div>
                  <div className="col-span-2">Issue Date</div>
                  <div className="col-span-2">Expiry Date</div>
                  <div className="col-span-1">Status</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      employee: "Ahmed Khalid",
                      type: "Residency Permit",
                      id: "RP-KW-2023-001",
                      country: "Kuwait",
                      issueDate: "15 Jan 2023",
                      expiryDate: "22 Nov 2023",
                      status: "Expiring",
                      statusColor: "bg-amber-500",
                    },
                    {
                      employee: "Sarah Johnson",
                      type: "Residency Permit",
                      id: "RP-KW-2023-002",
                      country: "Kuwait",
                      issueDate: "20 Feb 2023",
                      expiryDate: "12 Dec 2023",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      employee: "Mohammed Al-Sayed",
                      type: "Work Permit",
                      id: "WP-KW-2023-003",
                      country: "Kuwait",
                      issueDate: "05 Mar 2023",
                      expiryDate: "04 Mar 2024",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      employee: "John Smith",
                      type: "Residency Permit",
                      id: "RP-UAE-2023-001",
                      country: "UAE",
                      issueDate: "10 Apr 2023",
                      expiryDate: "09 Apr 2024",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      employee: "Fatima Al-Qasim",
                      type: "Work Permit",
                      id: "WP-UAE-2023-002",
                      country: "UAE",
                      issueDate: "15 May 2023",
                      expiryDate: "14 May 2024",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      employee: "Ravi Kumar",
                      type: "Residency Permit",
                      id: "RP-KW-2022-001",
                      country: "Kuwait",
                      issueDate: "01 Dec 2022",
                      expiryDate: "30 Oct 2023",
                      status: "Expired",
                      statusColor: "bg-red-500",
                    },
                    {
                      employee: "Li Wei",
                      type: "Work Permit",
                      id: "WP-KW-2022-002",
                      country: "Kuwait",
                      issueDate: "15 Dec 2022",
                      expiryDate: "14 Dec 2023",
                      status: "Active",
                      statusColor: "bg-emerald-500",
                    },
                  ].map((doc, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2">{doc.employee}</div>
                      <div className="col-span-2">{doc.type}</div>
                      <div className="col-span-2 font-medium">{doc.id}</div>
                      <div className="col-span-1">{doc.country}</div>
                      <div className="col-span-2">{doc.issueDate}</div>
                      <div className="col-span-2">{doc.expiryDate}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${doc.statusColor} bg-opacity-20 text-white`}
                        >
                          {doc.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="compliance" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-3">Requirement</div>
                  <div className="col-span-2">Country</div>
                  <div className="col-span-2">Frequency</div>
                  <div className="col-span-2">Last Completed</div>
                  <div className="col-span-2">Next Due</div>
                  <div className="col-span-1">Status</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      requirement: "Annual Financial Audit",
                      country: "Kuwait",
                      frequency: "Annual",
                      lastCompleted: "15 Mar 2023",
                      nextDue: "15 Mar 2024",
                      status: "Compliant",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      requirement: "VAT Return Filing",
                      country: "UAE",
                      frequency: "Quarterly",
                      lastCompleted: "30 Sep 2023",
                      nextDue: "31 Dec 2023",
                      status: "Upcoming",
                      statusColor: "bg-amber-500",
                    },
                    {
                      requirement: "Labor Law Compliance Audit",
                      country: "Kuwait",
                      frequency: "Annual",
                      lastCompleted: "10 Jun 2023",
                      nextDue: "10 Jun 2024",
                      status: "Compliant",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      requirement: "Fire Safety Inspection",
                      country: "Kuwait",
                      frequency: "Annual",
                      lastCompleted: "05 May 2023",
                      nextDue: "05 May 2024",
                      status: "Compliant",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      requirement: "Data Protection Compliance",
                      country: "All GCC",
                      frequency: "Bi-annual",
                      lastCompleted: "20 Jul 2023",
                      nextDue: "20 Jan 2024",
                      status: "Upcoming",
                      statusColor: "bg-amber-500",
                    },
                    {
                      requirement: "Health & Safety Assessment",
                      country: "Kuwait",
                      frequency: "Annual",
                      lastCompleted: "15 Aug 2022",
                      nextDue: "15 Aug 2023",
                      status: "Non-compliant",
                      statusColor: "bg-red-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-3">{item.requirement}</div>
                      <div className="col-span-2">{item.country}</div>
                      <div className="col-span-2">{item.frequency}</div>
                      <div className="col-span-2">{item.lastCompleted}</div>
                      <div className="col-span-2">{item.nextDue}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${item.statusColor} bg-opacity-20 text-white`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Document Timeline */}
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            Upcoming Document Renewals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-800"></div>

            <div className="space-y-6 pl-12">
              {[
                {
                  date: "Nov 15, 2023",
                  title: "Trade License Renewal",
                  description: "Kuwait main office trade license expires",
                  status: "Critical",
                  statusColor: "bg-red-500",
                  assignee: "Mohammed Al-Sayed",
                },
                {
                  date: "Nov 22, 2023",
                  title: "Employee Residency Renewal",
                  description: "Ahmed Khalid's residency permit expires",
                  status: "In Progress",
                  statusColor: "bg-cyan-500",
                  assignee: "Sarah Johnson",
                },
                {
                  date: "Nov 30, 2023",
                  title: "Office Lease Renewal",
                  description: "Dubai Media City branch office lease expires",
                  status: "Scheduled",
                  statusColor: "bg-amber-500",
                  assignee: "John Smith",
                },
                {
                  date: "Dec 05, 2023",
                  title: "Insurance Policy Renewal",
                  description: "Office contents insurance policy expires",
                  status: "Scheduled",
                  statusColor: "bg-amber-500",
                  assignee: "Fatima Al-Qasim",
                },
                {
                  date: "Dec 12, 2023",
                  title: "Employee Residency Renewal",
                  description: "Sarah Johnson's residency permit expires",
                  status: "Scheduled",
                  statusColor: "bg-amber-500",
                  assignee: "Mohammed Al-Sayed",
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

export default GovernmentDocuments;
