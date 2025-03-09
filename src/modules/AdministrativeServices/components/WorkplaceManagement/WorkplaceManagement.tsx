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

const WorkplaceManagement = () => {
  const [activeTab, setActiveTab] = useState("workspaces");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Workplace Management</h2>
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
          Assign Workspace
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Total Workspaces
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">185</div>
            <p className="text-xs text-slate-500">Across all locations</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Occupancy Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-500">78%</div>
            <p className="text-xs text-slate-500">↑ 5% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Meeting Rooms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">24</div>
            <p className="text-xs text-slate-500">12 currently available</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Pending Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">8</div>
            <p className="text-xs text-slate-500">Workspace & equipment</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Workplace Management
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
                  placeholder="Search workspaces..."
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
              <TabsTrigger value="workspaces">Workspaces</TabsTrigger>
              <TabsTrigger value="meeting-rooms">Meeting Rooms</TabsTrigger>
              <TabsTrigger value="requests">Requests</TabsTrigger>
            </TabsList>

            <TabsContent value="workspaces" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Workspace ID</div>
                  <div className="col-span-2">Location</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-2">Assigned To</div>
                  <div className="col-span-1">Department</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "WS-HQ-101",
                      location: "HQ - Floor 1",
                      type: "Desk",
                      assignedTo: "Ahmed Khalid",
                      department: "IT",
                      status: "Occupied",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "WS-HQ-102",
                      location: "HQ - Floor 1",
                      type: "Desk",
                      assignedTo: "Sarah Johnson",
                      department: "HR",
                      status: "Occupied",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "WS-HQ-103",
                      location: "HQ - Floor 1",
                      type: "Desk",
                      assignedTo: "-",
                      department: "-",
                      status: "Available",
                      statusColor: "bg-blue-500",
                    },
                    {
                      id: "WS-HQ-201",
                      location: "HQ - Floor 2",
                      type: "Office",
                      assignedTo: "Mohammed Al-Sayed",
                      department: "Finance",
                      status: "Occupied",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "WS-HQ-202",
                      location: "HQ - Floor 2",
                      type: "Office",
                      assignedTo: "John Smith",
                      department: "Legal",
                      status: "Occupied",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "WS-DXB-101",
                      location: "Dubai Office",
                      type: "Desk",
                      assignedTo: "Fatima Al-Qasim",
                      department: "Marketing",
                      status: "Occupied",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "WS-DXB-102",
                      location: "Dubai Office",
                      type: "Desk",
                      assignedTo: "-",
                      department: "-",
                      status: "Maintenance",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "WS-DOH-101",
                      location: "Doha Office",
                      type: "Desk",
                      assignedTo: "Ravi Kumar",
                      department: "Sales",
                      status: "Occupied",
                      statusColor: "bg-emerald-500",
                    },
                  ].map((workspace, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">
                        {workspace.id}
                      </div>
                      <div className="col-span-2">{workspace.location}</div>
                      <div className="col-span-2">{workspace.type}</div>
                      <div className="col-span-2">{workspace.assignedTo}</div>
                      <div className="col-span-1">{workspace.department}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${workspace.statusColor} bg-opacity-20 text-white`}
                        >
                          {workspace.status}
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
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="meeting-rooms" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Room ID</div>
                  <div className="col-span-2">Location</div>
                  <div className="col-span-2">Name</div>
                  <div className="col-span-1">Capacity</div>
                  <div className="col-span-2">Equipment</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "MR-HQ-101",
                      location: "HQ - Floor 1",
                      name: "Boardroom",
                      capacity: 20,
                      equipment: "Projector, VC System",
                      status: "Available",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "MR-HQ-102",
                      location: "HQ - Floor 1",
                      name: "Meeting Room A",
                      capacity: 8,
                      equipment: "TV, VC System",
                      status: "Booked",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "MR-HQ-103",
                      location: "HQ - Floor 1",
                      name: "Meeting Room B",
                      capacity: 6,
                      equipment: "TV",
                      status: "Available",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "MR-HQ-201",
                      location: "HQ - Floor 2",
                      name: "Executive Room",
                      capacity: 12,
                      equipment: "Projector, VC System",
                      status: "Booked",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "MR-HQ-202",
                      location: "HQ - Floor 2",
                      name: "Meeting Room C",
                      capacity: 8,
                      equipment: "TV, VC System",
                      status: "Available",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "MR-DXB-101",
                      location: "Dubai Office",
                      name: "Conference Room",
                      capacity: 16,
                      equipment: "Projector, VC System",
                      status: "Available",
                      statusColor: "bg-emerald-500",
                    },
                  ].map((room, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">{room.id}</div>
                      <div className="col-span-2">{room.location}</div>
                      <div className="col-span-2">{room.name}</div>
                      <div className="col-span-1">{room.capacity}</div>
                      <div className="col-span-2">{room.equipment}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${room.statusColor} bg-opacity-20 text-white`}
                        >
                          {room.status}
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
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M3 9h18" />
                            <path d="M9 21V9" />
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

            <TabsContent value="requests" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Request ID</div>
                  <div className="col-span-2">Requester</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-3">Description</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "REQ-2023-042",
                      requester: "Li Wei",
                      type: "Workspace",
                      description: "Request for standing desk",
                      status: "Pending",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "REQ-2023-041",
                      requester: "Ravi Kumar",
                      type: "Equipment",
                      description: "Additional monitor for workstation",
                      status: "Approved",
                      statusColor: "bg-emerald-500",
                    },
                    {
                      id: "REQ-2023-040",
                      requester: "Sarah Johnson",
                      type: "Relocation",
                      description: "Move to quiet area due to project needs",
                      status: "Pending",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "REQ-2023-039",
                      requester: "Ahmed Khalid",
                      type: "Equipment",
                      description: "Ergonomic chair replacement",
                      status: "Pending",
                      statusColor: "bg-amber-500",
                    },
                    {
                      id: "REQ-2023-038",
                      requester: "Fatima Al-Qasim",
                      type: "Workspace",
                      description: "Request for private office space",
                      status: "Under Review",
                      statusColor: "bg-cyan-500",
                    },
                    {
                      id: "REQ-2023-037",
                      requester: "John Smith",
                      type: "Equipment",
                      description: "Laptop upgrade for development work",
                      status: "Approved",
                      statusColor: "bg-emerald-500",
                    },
                  ].map((request, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">{request.id}</div>
                      <div className="col-span-2">{request.requester}</div>
                      <div className="col-span-2">{request.type}</div>
                      <div className="col-span-3">{request.description}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${request.statusColor} bg-opacity-20 text-white`}
                        >
                          {request.status}
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
                            <path d="m9 12 2 2 4-4" />
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                            <path d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
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

      {/* Floor Plan */}
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            Workspace Allocation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                location: "Headquarters",
                totalSpaces: 120,
                allocated: 98,
                percentage: 82,
                color: "bg-emerald-500",
              },
              {
                location: "Dubai Office",
                totalSpaces: 45,
                allocated: 38,
                percentage: 84,
                color: "bg-emerald-500",
              },
              {
                location: "Doha Office",
                totalSpaces: 30,
                allocated: 22,
                percentage: 73,
                color: "bg-cyan-500",
              },
              {
                location: "Riyadh Office",
                totalSpaces: 25,
                allocated: 15,
                percentage: 60,
                color: "bg-amber-500",
              },
            ].map((location, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-white">
                      {location.location}
                    </span>
                    <span className="ml-2 text-xs text-slate-400">
                      {location.allocated}/{location.totalSpaces} workspaces
                    </span>
                  </div>
                  <span className="text-xs font-medium text-white">
                    {location.percentage}% occupied
                  </span>
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
  );
};

export default WorkplaceManagement;
