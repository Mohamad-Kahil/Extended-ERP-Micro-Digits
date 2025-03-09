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

const HelpdeskServices = () => {
  const [activeTab, setActiveTab] = useState("tickets");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("all");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Helpdesk Services</h2>
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
          Create Ticket
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Open Tickets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">24</div>
            <p className="text-xs text-slate-500">5 high priority</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Average Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-500">2.5 hrs</div>
            <p className="text-xs text-slate-500">↓ 15% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Resolved This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">42</div>
            <p className="text-xs text-emerald-500">↑ 8% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Satisfaction Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">92%</div>
            <p className="text-xs text-emerald-500">↑ 3% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Ticket Management
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
                  placeholder="Search tickets..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select
                value={selectedPriority}
                onValueChange={setSelectedPriority}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
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
              <TabsTrigger value="tickets">Active Tickets</TabsTrigger>
              <TabsTrigger value="resolved">Resolved</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="tickets" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Ticket ID</div>
                  <div className="col-span-3">Subject</div>
                  <div className="col-span-2">Requester</div>
                  <div className="col-span-1">Created</div>
                  <div className="col-span-1">Priority</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "TKT-1082",
                      subject: "AC not working in meeting room",
                      requester: "Sarah Johnson",
                      created: "2 hours ago",
                      priority: "High",
                      priorityColor: "bg-red-500",
                      status: "Open",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "TKT-1081",
                      subject: "Printer configuration issue",
                      requester: "Ahmed Khalid",
                      created: "5 hours ago",
                      priority: "Medium",
                      priorityColor: "bg-amber-500",
                      status: "In Progress",
                      statusColor: "bg-cyan-500",
                    },
                    {
                      id: "TKT-1080",
                      subject: "Request for additional monitor",
                      requester: "Mohammed Al-Sayed",
                      created: "1 day ago",
                      priority: "Low",
                      priorityColor: "bg-emerald-500",
                      status: "Pending",
                      statusColor: "bg-purple-500",
                    },
                    {
                      id: "TKT-1079",
                      subject: "Network connectivity issues",
                      requester: "Fatima Al-Qasim",
                      created: "1 day ago",
                      priority: "High",
                      priorityColor: "bg-red-500",
                      status: "In Progress",
                      statusColor: "bg-cyan-500",
                    },
                    {
                      id: "TKT-1078",
                      subject: "Software installation request",
                      requester: "John Smith",
                      created: "2 days ago",
                      priority: "Medium",
                      priorityColor: "bg-amber-500",
                      status: "Open",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "TKT-1077",
                      subject: "Keyboard replacement needed",
                      requester: "Ravi Kumar",
                      created: "2 days ago",
                      priority: "Low",
                      priorityColor: "bg-emerald-500",
                      status: "In Progress",
                      statusColor: "bg-cyan-500",
                    },
                    {
                      id: "TKT-1076",
                      subject: "Meeting room projector not working",
                      requester: "Li Wei",
                      created: "3 days ago",
                      priority: "High",
                      priorityColor: "bg-red-500",
                      status: "Open",
                      statusColor: "bg-amber-500",
                    },
                  ].map((ticket, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">{ticket.id}</div>
                      <div className="col-span-3">{ticket.subject}</div>
                      <div className="col-span-2">{ticket.requester}</div>
                      <div className="col-span-1">{ticket.created}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${ticket.priorityColor} bg-opacity-20 text-white`}
                        >
                          {ticket.priority}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${ticket.statusColor} bg-opacity-20 text-white`}
                        >
                          {ticket.status}
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

            <TabsContent value="resolved" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Ticket ID</div>
                  <div className="col-span-3">Subject</div>
                  <div className="col-span-2">Requester</div>
                  <div className="col-span-1">Resolved</div>
                  <div className="col-span-2">Resolution Time</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "TKT-1075",
                      subject: "Email configuration issue",
                      requester: "Sarah Johnson",
                      resolved: "Today",
                      resolutionTime: "3 hours",
                    },
                    {
                      id: "TKT-1074",
                      subject: "VPN access problem",
                      requester: "Ahmed Khalid",
                      resolved: "Yesterday",
                      resolutionTime: "5 hours",
                    },
                    {
                      id: "TKT-1073",
                      subject: "Password reset request",
                      requester: "Mohammed Al-Sayed",
                      resolved: "Yesterday",
                      resolutionTime: "30 minutes",
                    },
                    {
                      id: "TKT-1072",
                      subject: "Software license activation",
                      requester: "Fatima Al-Qasim",
                      resolved: "2 days ago",
                      resolutionTime: "2 hours",
                    },
                    {
                      id: "TKT-1071",
                      subject: "Printer paper jam",
                      requester: "John Smith",
                      resolved: "2 days ago",
                      resolutionTime: "1 hour",
                    },
                  ].map((ticket, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">{ticket.id}</div>
                      <div className="col-span-3">{ticket.subject}</div>
                      <div className="col-span-2">{ticket.requester}</div>
                      <div className="col-span-1">{ticket.resolved}</div>
                      <div className="col-span-2">{ticket.resolutionTime}</div>
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
                            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                            <path d="M12 3v6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-6 space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="border-slate-800 bg-slate-900">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-white">
                      Tickets by Category
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          category: "Hardware Issues",
                          count: 18,
                          percentage: 35,
                          color: "bg-cyan-500",
                        },
                        {
                          category: "Software Issues",
                          count: 15,
                          percentage: 29,
                          color: "bg-purple-500",
                        },
                        {
                          category: "Network Issues",
                          count: 8,
                          percentage: 15,
                          color: "bg-amber-500",
                        },
                        {
                          category: "Access Requests",
                          count: 6,
                          percentage: 12,
                          color: "bg-emerald-500",
                        },
                        {
                          category: "Other Requests",
                          count: 5,
                          percentage: 9,
                          color: "bg-red-500",
                        },
                      ].map((category, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-sm text-white">
                                {category.category}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-medium text-white">
                                {category.count}
                              </span>
                              <span className="text-xs text-slate-400">
                                ({category.percentage}%)
                              </span>
                            </div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-800">
                            <div
                              className={`h-2 rounded-full ${category.color}`}
                              style={{ width: `${category.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-800 bg-slate-900">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-white">
                      Tickets by Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          location: "Headquarters",
                          count: 28,
                          percentage: 54,
                          color: "bg-cyan-500",
                        },
                        {
                          location: "Dubai Office",
                          count: 12,
                          percentage: 23,
                          color: "bg-purple-500",
                        },
                        {
                          location: "Doha Office",
                          count: 8,
                          percentage: 15,
                          color: "bg-amber-500",
                        },
                        {
                          location: "Riyadh Office",
                          count: 4,
                          percentage: 8,
                          color: "bg-emerald-500",
                        },
                      ].map((location, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-sm text-white">
                                {location.location}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-medium text-white">
                                {location.count}
                              </span>
                              <span className="text-xs text-slate-400">
                                ({location.percentage}%)
                              </span>
                            </div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-800">
                            <div
                              className={`h-2 rounded-full ${location.color}`}
                              style={{ width: `${location.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-slate-800 bg-slate-900">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-white">
                    Monthly Ticket Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center text-sm text-slate-400 mt-4">
                    Bar chart visualization would appear here showing ticket
                    volume trends over the past 6 months
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Service Level Metrics */}
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            Service Level Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                metric: "First Response Time",
                value: "1.8 hours",
                target: "2 hours",
                status: "Meeting Target",
                statusColor: "bg-emerald-500",
              },
              {
                metric: "Resolution Time",
                value: "8.5 hours",
                target: "8 hours",
                status: "Slightly Off Target",
                statusColor: "bg-amber-500",
              },
              {
                metric: "First Contact Resolution",
                value: "78%",
                target: "75%",
                status: "Meeting Target",
                statusColor: "bg-emerald-500",
              },
              {
                metric: "Customer Satisfaction",
                value: "92%",
                target: "90%",
                status: "Meeting Target",
                statusColor: "bg-emerald-500",
              },
              {
                metric: "Ticket Backlog",
                value: "24 tickets",
                target: "< 20 tickets",
                status: "Slightly Off Target",
                statusColor: "bg-amber-500",
              },
            ].map((metric, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md border border-slate-800 p-3 hover:bg-slate-800/50"
              >
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white">
                    {metric.metric}
                  </h4>
                  <p className="text-xs text-slate-400">
                    Current: {metric.value} | Target: {metric.target}
                  </p>
                </div>
                <div
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${metric.statusColor} bg-opacity-20 text-white`}
                >
                  {metric.status}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpdeskServices;
