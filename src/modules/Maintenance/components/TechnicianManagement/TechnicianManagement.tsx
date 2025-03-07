import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const TechnicianManagement = () => {
  const [activeTab, setActiveTab] = useState("technicians");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Technician Management
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
              Add Technician
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
                placeholder="Search technicians..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Available: 12
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Assigned: 8
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                <span className="text-xs font-medium text-blue-500">
                  On Leave: 2
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="technicians">Technicians</TabsTrigger>
            <TabsTrigger value="scheduling">Scheduling</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="technicians" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800">
              <Table>
                <TableHeader className="bg-slate-800">
                  <TableRow>
                    <TableHead className="text-slate-300">Technician</TableHead>
                    <TableHead className="text-slate-300">ID</TableHead>
                    <TableHead className="text-slate-300">
                      Specialization
                    </TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-slate-300">
                      Current Assignment
                    </TableHead>
                    <TableHead className="text-slate-300">
                      Certifications
                    </TableHead>
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
                      id: "TECH-001",
                      name: "John Smith",
                      specialization: "HVAC",
                      status: "Available",
                      currentAssignment: "None",
                      certifications: ["HVAC Certified", "Electrical Safety"],
                      performance: 92,
                    },
                    {
                      id: "TECH-002",
                      name: "Sarah Johnson",
                      specialization: "Electrical",
                      status: "Assigned",
                      currentAssignment: "WO-002: Conveyor Belt Repair",
                      certifications: [
                        "Electrical Certified",
                        "PLC Programming",
                      ],
                      performance: 88,
                    },
                    {
                      id: "TECH-003",
                      name: "Michael Chen",
                      specialization: "Mechanical",
                      status: "Assigned",
                      currentAssignment: "WO-003: Forklift Maintenance",
                      certifications: ["Mechanical Systems", "Hydraulics"],
                      performance: 95,
                    },
                    {
                      id: "TECH-004",
                      name: "Emily Davis",
                      specialization: "Plumbing",
                      status: "Available",
                      currentAssignment: "None",
                      certifications: [
                        "Plumbing Certified",
                        "Backflow Prevention",
                      ],
                      performance: 85,
                    },
                    {
                      id: "TECH-005",
                      name: "Robert Wilson",
                      specialization: "HVAC",
                      status: "On Leave",
                      currentAssignment: "Vacation until 09/25/2023",
                      certifications: ["HVAC Certified", "Refrigeration"],
                      performance: 90,
                    },
                    {
                      id: "TECH-006",
                      name: "Jennifer Lee",
                      specialization: "Electrical",
                      status: "Available",
                      currentAssignment: "None",
                      certifications: [
                        "Electrical Certified",
                        "Industrial Controls",
                      ],
                      performance: 87,
                    },
                    {
                      id: "TECH-007",
                      name: "David Martinez",
                      specialization: "Mechanical",
                      status: "Assigned",
                      currentAssignment: "WO-005: Hydraulic Pump Replacement",
                      certifications: ["Mechanical Systems", "Welding"],
                      performance: 91,
                    },
                  ]
                    .filter(
                      (tech) =>
                        tech.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        tech.id
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        tech.specialization
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()),
                    )
                    .map((tech) => (
                      <TableRow key={tech.id} className="border-slate-800">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${tech.name}`}
                              />
                              <AvatarFallback>
                                {tech.name.substring(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-slate-300">
                              {tech.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{tech.id}</TableCell>
                        <TableCell>{tech.specialization}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                              tech.status === "Available"
                                ? "bg-emerald-500/10 text-emerald-500"
                                : tech.status === "Assigned"
                                  ? "bg-amber-500/10 text-amber-500"
                                  : "bg-blue-500/10 text-blue-500"
                            }`}
                          >
                            {tech.status}
                          </span>
                        </TableCell>
                        <TableCell>{tech.currentAssignment}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {tech.certifications.map((cert, index) => (
                              <span
                                key={index}
                                className="inline-flex rounded-full px-2 py-0.5 text-xs bg-slate-700 text-slate-300"
                              >
                                {cert}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="w-16 h-2 bg-slate-700 rounded-full mr-2">
                              <div
                                className={`h-2 rounded-full ${
                                  tech.performance >= 90
                                    ? "bg-emerald-500"
                                    : tech.performance >= 80
                                      ? "bg-amber-500"
                                      : "bg-red-500"
                                }`}
                                style={{ width: `${tech.performance}%` }}
                              ></div>
                            </div>
                            <span className="text-xs">{tech.performance}%</span>
                          </div>
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
                                <rect
                                  x="3"
                                  y="4"
                                  width="18"
                                  height="18"
                                  rx="2"
                                  ry="2"
                                />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                              </svg>
                              <span className="sr-only">Schedule</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="scheduling" className="mt-4 space-y-4">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Technician Scheduling
                </h3>
                <p className="text-slate-400">
                  Technician scheduling and availability management will be
                  displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="mt-4 space-y-4">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Performance Metrics
                </h3>
                <p className="text-slate-400">
                  Technician performance metrics and analytics will be displayed
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

export default TechnicianManagement;
