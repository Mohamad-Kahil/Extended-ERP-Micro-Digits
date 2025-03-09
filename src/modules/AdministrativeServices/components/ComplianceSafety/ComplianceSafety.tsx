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

const ComplianceSafety = () => {
  const [activeTab, setActiveTab] = useState("compliance");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Compliance & Safety</h2>
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
          Add Compliance Record
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Compliance Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-500">94%</div>
            <p className="text-xs text-slate-500">↑ 2% from last quarter</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Safety Incidents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">3</div>
            <p className="text-xs text-emerald-500">↓ 25% from last quarter</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Upcoming Audits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">5</div>
            <p className="text-xs text-slate-500">Next 30 days</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Non-Compliance Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">2</div>
            <p className="text-xs text-slate-500">
              Require immediate attention
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Compliance & Safety Management
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
                  placeholder="Search records..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="hq">Headquarters</SelectItem>
                  <SelectItem value="dubai">Dubai Office</SelectItem>
                  <SelectItem value="doha">Doha Office</SelectItem>
                  <SelectItem value="riyadh">Riyadh Office</SelectItem>
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
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="audits">Audits</TabsTrigger>
            </TabsList>

            <TabsContent value="compliance" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-3">Requirement</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Location</div>
                  <div className="col-span-1">Last Check</div>
                  <div className="col-span-1">Next Due</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      requirement: "Fire Safety Inspection",
                      category: "Safety",
                      location: "Headquarters",
                      lastCheck: "15 Aug 2023",
                      nextDue: "15 Feb 2024",
                      status: "Compliant",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      requirement: "Electrical Systems Audit",
                      category: "Safety",
                      location: "Headquarters",
                      lastCheck: "10 Sep 2023",
                      nextDue: "10 Mar 2024",
                      status: "Compliant",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      requirement: "Emergency Exit Inspection",
                      category: "Safety",
                      location: "Dubai Office",
                      lastCheck: "05 Jul 2023",
                      nextDue: "05 Jan 2024",
                      status: "Due Soon",
                      statusColor: "bg-amber-500",
                    },
                    {
                      requirement: "Health & Safety Training",
                      category: "Training",
                      location: "All Locations",
                      lastCheck: "20 Jun 2023",
                      nextDue: "20 Dec 2023",
                      status: "Due Soon",
                      statusColor: "bg-amber-500",
                    },
                    {
                      requirement: "Data Protection Compliance",
                      category: "Legal",
                      location: "All Locations",
                      lastCheck: "15 Oct 2023",
                      nextDue: "15 Apr 2024",
                      status: "Compliant",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      requirement: "Workplace Ergonomics Assessment",
                      category: "Health",
                      location: "Headquarters",
                      lastCheck: "01 May 2023",
                      nextDue: "01 Nov 2023",
                      status: "Non-Compliant",
                      statusColor: "bg-red-500",
                    },
                    {
                      requirement: "Air Quality Testing",
                      category: "Health",
                      location: "Doha Office",
                      lastCheck: "15 Aug 2023",
                      nextDue: "15 Feb 2024",
                      status: "Compliant",
                      statusColor: "bg-emerald-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-3 font-medium">
                        {item.requirement}
                      </div>
                      <div className="col-span-2">{item.category}</div>
                      <div className="col-span-2">{item.location}</div>
                      <div className="col-span-1">{item.lastCheck}</div>
                      <div className="col-span-1">{item.nextDue}</div>
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
                            <path d="m9 12 2 2 4-4" />
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                            <path d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="safety" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Incident ID</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-2">Location</div>
                  <div className="col-span-2">Date</div>
                  <div className="col-span-2">Reported By</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "INC-2023-001",
                      type: "Minor Injury",
                      location: "Headquarters",
                      date: "15 Sep 2023",
                      reportedBy: "Ahmed Khalid",
                      status: "Resolved",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "INC-2023-002",
                      type: "Near Miss",
                      location: "Dubai Office",
                      date: "22 Sep 2023",
                      reportedBy: "Sarah Johnson",
                      status: "Resolved",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "INC-2023-003",
                      type: "Equipment Failure",
                      location: "Headquarters",
                      date: "05 Oct 2023",
                      reportedBy: "Mohammed Al-Sayed",
                      status: "In Progress",
                      statusColor: "bg-amber-500",
                    },
                  ].map((incident, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">
                        {incident.id}
                      </div>
                      <div className="col-span-2">{incident.type}</div>
                      <div className="col-span-2">{incident.location}</div>
                      <div className="col-span-2">{incident.date}</div>
                      <div className="col-span-2">{incident.reportedBy}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${incident.statusColor} bg-opacity-20 text-white`}
                        >
                          {incident.status}
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

            <TabsContent value="audits" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Audit ID</div>
                  <div className="col-span-3">Type</div>
                  <div className="col-span-2">Location</div>
                  <div className="col-span-2">Scheduled Date</div>
                  <div className="col-span-1">Auditor</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "AUD-2023-001",
                      type: "Fire Safety Compliance",
                      location: "Headquarters",
                      date: "15 Nov 2023",
                      auditor: "External",
                      status: "Scheduled",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "AUD-2023-002",
                      type: "Health & Safety Compliance",
                      location: "Dubai Office",
                      date: "22 Nov 2023",
                      auditor: "Internal",
                      status: "Scheduled",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "AUD-2023-003",
                      type: "Environmental Compliance",
                      location: "All Locations",
                      date: "05 Dec 2023",
                      auditor: "External",
                      status: "Scheduled",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "AUD-2023-004",
                      type: "Data Protection Compliance",
                      location: "All Locations",
                      date: "12 Dec 2023",
                      auditor: "Internal",
                      status: "Scheduled",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "AUD-2023-005",
                      type: "Workplace Ergonomics",
                      location: "Headquarters",
                      date: "18 Dec 2023",
                      auditor: "Internal",
                      status: "Scheduled",
                      statusColor: "bg-amber-500",
                    },
                  ].map((audit, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">{audit.id}</div>
                      <div className="col-span-3">{audit.type}</div>
                      <div className="col-span-2">{audit.location}</div>
                      <div className="col-span-2">{audit.date}</div>
                      <div className="col-span-1">{audit.auditor}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${audit.statusColor} bg-opacity-20 text-white`}
                        >
                          {audit.status}
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

      {/* Safety Metrics */}
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            Safety Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                metric: "Days Without Incident",
                value: 45,
                target: 90,
                percentage: 50,
                color: "bg-amber-500",
              },
              {
                metric: "Safety Training Completion",
                value: 92,
                target: 100,
                percentage: 92,
                color: "bg-emerald-500",
              },
              {
                metric: "Hazard Reporting Rate",
                value: 85,
                target: 100,
                percentage: 85,
                color: "bg-emerald-500",
              },
              {
                metric: "Safety Inspection Completion",
                value: 100,
                target: 100,
                percentage: 100,
                color: "bg-emerald-500",
              },
              {
                metric: "Emergency Drill Participation",
                value: 78,
                target: 100,
                percentage: 78,
                color: "bg-amber-500",
              },
            ].map((metric, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-white">{metric.metric}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-white">
                      {metric.value}/{metric.target}
                    </span>
                    <span className="text-xs text-slate-400">
                      ({metric.percentage}%)
                    </span>
                  </div>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-800">
                  <div
                    className={`h-2 rounded-full ${metric.color}`}
                    style={{ width: `${metric.percentage}%` }}
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

export default ComplianceSafety;
