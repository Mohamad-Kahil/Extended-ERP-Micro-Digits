import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CampaignManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Campaign Management
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
              Create Campaign
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
                placeholder="Search campaigns..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Active: 8
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Scheduled: 3
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-slate-500/10 border border-slate-500/20">
                <span className="h-2 w-2 rounded-full bg-slate-500 mr-2"></span>
                <span className="text-xs font-medium text-slate-500">
                  Completed: 12
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800">
            <TabsTrigger value="active">Active Campaigns</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Total Reach
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">45.2K</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Engagement Rate
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
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">4.8%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 0.5% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Conversion Rate
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
                      <path d="m2 12 5.25 5 2-2-3.25-3 3.25-3-2-2L2 12z" />
                      <path d="m22 12-5.25-5-2 2 3.25 3-3.25 3 2 2L22 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">2.1%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 0.3% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-md border border-slate-800">
              <Table>
                <TableHeader className="bg-slate-800">
                  <TableRow>
                    <TableHead className="text-slate-300">Campaign</TableHead>
                    <TableHead className="text-slate-300">Type</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-slate-300">Start Date</TableHead>
                    <TableHead className="text-slate-300">End Date</TableHead>
                    <TableHead className="text-slate-300">Budget</TableHead>
                    <TableHead className="text-slate-300">
                      Performance
                    </TableHead>
                    <TableHead className="text-right text-slate-300">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "CAM-001",
                      name: "Summer Sale Promotion",
                      type: "Email",
                      status: "Active",
                      startDate: "2023-06-01",
                      endDate: "2023-09-30",
                      budget: 5000,
                      performance: 78,
                    },
                    {
                      id: "CAM-002",
                      name: "Product Launch - XYZ Pro",
                      type: "Social Media",
                      status: "Active",
                      startDate: "2023-07-15",
                      endDate: "2023-10-15",
                      budget: 8000,
                      performance: 85,
                    },
                    {
                      id: "CAM-003",
                      name: "Customer Loyalty Program",
                      type: "Email",
                      status: "Active",
                      startDate: "2023-01-01",
                      endDate: "2023-12-31",
                      budget: 12000,
                      performance: 92,
                    },
                    {
                      id: "CAM-004",
                      name: "Trade Show Follow-up",
                      type: "Email",
                      status: "Active",
                      startDate: "2023-08-15",
                      endDate: "2023-09-15",
                      budget: 3000,
                      performance: 65,
                    },
                    {
                      id: "CAM-005",
                      name: "Holiday Season Promotion",
                      type: "Multi-channel",
                      status: "Active",
                      startDate: "2023-11-01",
                      endDate: "2023-12-31",
                      budget: 15000,
                      performance: 0,
                    },
                  ]
                    .filter((campaign) =>
                      campaign.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                    )
                    .map((campaign) => (
                      <TableRow key={campaign.id} className="border-slate-800">
                        <TableCell className="font-medium text-slate-300">
                          {campaign.name}
                        </TableCell>
                        <TableCell>{campaign.type}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                              campaign.status === "Active"
                                ? "bg-emerald-500/10 text-emerald-500"
                                : campaign.status === "Scheduled"
                                  ? "bg-amber-500/10 text-amber-500"
                                  : "bg-slate-500/10 text-slate-500"
                            }`}
                          >
                            {campaign.status}
                          </span>
                        </TableCell>
                        <TableCell>{campaign.startDate}</TableCell>
                        <TableCell>{campaign.endDate}</TableCell>
                        <TableCell>
                          ${campaign.budget.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          {campaign.performance > 0 ? (
                            <div className="flex items-center">
                              <div className="w-16 h-2 bg-slate-700 rounded-full mr-2">
                                <div
                                  className={`h-2 rounded-full ${
                                    campaign.performance >= 80
                                      ? "bg-emerald-500"
                                      : campaign.performance >= 60
                                        ? "bg-amber-500"
                                        : "bg-blue-500"
                                  }`}
                                  style={{ width: `${campaign.performance}%` }}
                                ></div>
                              </div>
                              <span className="text-xs">
                                {campaign.performance}%
                              </span>
                            </div>
                          ) : (
                            <span className="text-xs text-slate-500">
                              Not started
                            </span>
                          )}
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
          </TabsContent>

          <TabsContent value="scheduled" className="mt-6 space-y-6">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Scheduled Campaigns
                </h3>
                <p className="text-slate-400">
                  Scheduled campaigns will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed" className="mt-6 space-y-6">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Completed Campaigns
                </h3>
                <p className="text-slate-400">
                  Completed campaigns and their results will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6 space-y-6">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Campaign Analytics
                </h3>
                <p className="text-slate-400">
                  Detailed analytics and performance metrics will be displayed
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

export default CampaignManagement;
