import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CustomerService = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Customer Service
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
              Export Report
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
              Create Ticket
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
                placeholder="Search tickets..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Resolved: 128
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  In Progress: 45
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                <span className="text-xs font-medium text-red-500">
                  Open: 32
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
            <TabsTrigger value="feedback">Customer Feedback</TabsTrigger>
            <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Customer Satisfaction
                    </h3>
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
                      className="text-cyan-500"
                    >
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">92%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 3% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Avg. Response Time
                    </h3>
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
                      className="text-cyan-500"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">1.8h</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↓ 0.3h from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      First Contact Resolution
                    </h3>
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
                      className="text-cyan-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">78%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 5% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Ticket Volume Trends
                </h3>
                <div className="h-64 flex items-end space-x-2">
                  {[
                    { day: "Mon", count: 42 },
                    { day: "Tue", count: 38 },
                    { day: "Wed", count: 45 },
                    { day: "Thu", count: 32 },
                    { day: "Fri", count: 28 },
                    { day: "Sat", count: 15 },
                    { day: "Sun", count: 12 },
                  ].map((data, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className="w-full bg-cyan-500 rounded-t"
                        style={{ height: `${(data.count / 45) * 100}%` }}
                      ></div>
                      <span className="text-xs text-slate-400 mt-2">
                        {data.day}
                      </span>
                      <span className="text-xs font-medium text-white">
                        {data.count}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Ticket Categories
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        category: "Technical Support",
                        count: 68,
                        percentage: 32,
                      },
                      {
                        category: "Billing Inquiries",
                        count: 45,
                        percentage: 21,
                      },
                      {
                        category: "Product Information",
                        count: 38,
                        percentage: 18,
                      },
                      {
                        category: "Account Management",
                        count: 32,
                        percentage: 15,
                      },
                      {
                        category: "Feature Requests",
                        count: 18,
                        percentage: 8,
                      },
                      { category: "Other", count: 12, percentage: 6 },
                    ].map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white">
                            {category.category}
                          </span>
                          <div className="flex space-x-4">
                            <span className="text-slate-400">
                              {category.count} tickets
                            </span>
                            <span className="text-white font-medium">
                              {category.percentage}%
                            </span>
                          </div>
                        </div>
                        <Progress
                          value={category.percentage}
                          className="h-2 bg-slate-700"
                          indicatorClassName="bg-cyan-500"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Support Team Performance
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        agent: "Sarah Johnson",
                        resolved: 42,
                        satisfaction: 96,
                      },
                      { agent: "Michael Chen", resolved: 38, satisfaction: 94 },
                      {
                        agent: "Jessica Williams",
                        resolved: 35,
                        satisfaction: 92,
                      },
                      { agent: "David Miller", resolved: 32, satisfaction: 90 },
                      { agent: "Amanda Clark", resolved: 28, satisfaction: 88 },
                    ].map((agent, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${agent.agent}`}
                          />
                          <AvatarFallback>
                            {agent.agent.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-white">{agent.agent}</span>
                            <div className="flex space-x-4">
                              <span className="text-slate-400">
                                {agent.resolved} resolved
                              </span>
                              <span className="text-emerald-500">
                                {agent.satisfaction}% satisfaction
                              </span>
                            </div>
                          </div>
                          <Progress
                            value={agent.satisfaction}
                            className="h-2 bg-slate-700 mt-2"
                            indicatorClassName="bg-emerald-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tickets" className="mt-6 space-y-6">
            <div className="rounded-md border border-slate-800">
              <Table>
                <TableHeader className="bg-slate-800">
                  <TableRow>
                    <TableHead className="text-slate-300">Ticket ID</TableHead>
                    <TableHead className="text-slate-300">Customer</TableHead>
                    <TableHead className="text-slate-300">Subject</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-slate-300">Priority</TableHead>
                    <TableHead className="text-slate-300">Created</TableHead>
                    <TableHead className="text-slate-300">
                      Assigned To
                    </TableHead>
                    <TableHead className="text-right text-slate-300">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "TKT-001",
                      customer: "John Smith",
                      subject: "Login issues with mobile app",
                      status: "Open",
                      priority: "High",
                      created: "2023-09-15T10:30:00",
                      assignedTo: "Sarah Johnson",
                    },
                    {
                      id: "TKT-002",
                      customer: "Emily Davis",
                      subject: "Billing discrepancy on invoice #45678",
                      status: "In Progress",
                      priority: "Medium",
                      created: "2023-09-14T09:15:00",
                      assignedTo: "Michael Chen",
                    },
                    {
                      id: "TKT-003",
                      customer: "Robert Johnson",
                      subject: "Feature request: Dark mode",
                      status: "In Progress",
                      priority: "Low",
                      created: "2023-09-13T16:45:00",
                      assignedTo: "Jessica Williams",
                    },
                    {
                      id: "TKT-004",
                      customer: "Jennifer Wilson",
                      subject: "Cannot reset password",
                      status: "Resolved",
                      priority: "High",
                      created: "2023-09-12T08:20:00",
                      assignedTo: "David Miller",
                    },
                    {
                      id: "TKT-005",
                      customer: "Michael Brown",
                      subject: "Integration with third-party API",
                      status: "Open",
                      priority: "Medium",
                      created: "2023-09-11T14:30:00",
                      assignedTo: "Sarah Johnson",
                    },
                  ].map((ticket) => (
                    <TableRow key={ticket.id} className="border-slate-800">
                      <TableCell className="font-medium text-slate-300">
                        {ticket.id}
                      </TableCell>
                      <TableCell>{ticket.customer}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                            ticket.status === "Resolved"
                              ? "bg-emerald-500/10 text-emerald-500"
                              : ticket.status === "In Progress"
                                ? "bg-amber-500/10 text-amber-500"
                                : "bg-red-500/10 text-red-500"
                          }`}
                        >
                          {ticket.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                            ticket.priority === "High"
                              ? "bg-red-500/10 text-red-500"
                              : ticket.priority === "Medium"
                                ? "bg-amber-500/10 text-amber-500"
                                : "bg-blue-500/10 text-blue-500"
                          }`}
                        >
                          {ticket.priority}
                        </span>
                      </TableCell>
                      <TableCell>
                        {new Date(ticket.created).toLocaleString()}
                      </TableCell>
                      <TableCell>{ticket.assignedTo}</TableCell>
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

          <TabsContent value="feedback" className="mt-6 space-y-6">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Customer Feedback
                </h3>
                <p className="text-slate-400">
                  Customer feedback and survey results will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="knowledge" className="mt-6 space-y-6">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Knowledge Base
                </h3>
                <p className="text-slate-400">
                  Knowledge base articles and documentation will be displayed
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

export default CustomerService;
