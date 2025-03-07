import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface Schedule {
  id: string;
  resourceName: string;
  resourceType: "human" | "equipment" | "facility" | "digital";
  project: string;
  startDate: string;
  endDate: string;
  allocation: number;
  status: "available" | "partially-booked" | "fully-booked";
  assignedBy: string;
}

interface ResourceSchedulingProps {
  searchTerm: string;
}

const schedules: Schedule[] = [
  {
    id: "SCH-001",
    resourceName: "Production Team Alpha",
    resourceType: "human",
    project: "Product Launch Q4",
    startDate: "2023-10-01",
    endDate: "2023-12-15",
    allocation: 75,
    status: "partially-booked",
    assignedBy: "Sarah Johnson",
  },
  {
    id: "SCH-002",
    resourceName: "Assembly Line A",
    resourceType: "equipment",
    project: "New Product Manufacturing",
    startDate: "2023-09-15",
    endDate: "2023-11-30",
    allocation: 100,
    status: "fully-booked",
    assignedBy: "Michael Chen",
  },
  {
    id: "SCH-003",
    resourceName: "Warehouse Space B",
    resourceType: "facility",
    project: "Inventory Expansion",
    startDate: "2023-10-01",
    endDate: "2023-12-31",
    allocation: 65,
    status: "partially-booked",
    assignedBy: "Jessica Williams",
  },
  {
    id: "SCH-004",
    resourceName: "Cloud Computing Resources",
    resourceType: "digital",
    project: "System Migration",
    startDate: "2023-09-20",
    endDate: "2023-10-15",
    allocation: 90,
    status: "partially-booked",
    assignedBy: "David Miller",
  },
  {
    id: "SCH-005",
    resourceName: "Customer Service Team",
    resourceType: "human",
    project: "Holiday Support",
    startDate: "2023-11-15",
    endDate: "2024-01-15",
    allocation: 100,
    status: "fully-booked",
    assignedBy: "Emily Taylor",
  },
  {
    id: "SCH-006",
    resourceName: "Quality Control Equipment",
    resourceType: "equipment",
    project: "Quality Improvement Initiative",
    startDate: "2023-10-01",
    endDate: "2023-11-15",
    allocation: 50,
    status: "partially-booked",
    assignedBy: "Robert Garcia",
  },
  {
    id: "SCH-007",
    resourceName: "Meeting Rooms",
    resourceType: "facility",
    project: "Annual Planning Sessions",
    startDate: "2023-12-01",
    endDate: "2023-12-15",
    allocation: 0,
    status: "available",
    assignedBy: "Amanda Lewis",
  },
];

const ResourceScheduling = ({ searchTerm }: ResourceSchedulingProps) => {
  const [typeFilter, setTypeFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const filteredSchedules = schedules.filter(
    (schedule) =>
      (typeFilter === "all" || schedule.resourceType === typeFilter) &&
      (statusFilter === "all" || schedule.status === statusFilter) &&
      (schedule.resourceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.assignedBy.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Calculate scheduling metrics
  const totalSchedules = schedules.length;
  const availableResources = schedules.filter(
    (s) => s.status === "available",
  ).length;
  const partiallyBookedResources = schedules.filter(
    (s) => s.status === "partially-booked",
  ).length;
  const fullyBookedResources = schedules.filter(
    (s) => s.status === "fully-booked",
  ).length;

  const averageAllocation =
    schedules.reduce((sum, s) => sum + s.allocation, 0) / totalSchedules;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Resource Allocation
            </h3>
            <p className="text-3xl font-bold text-white">
              {averageAllocation.toFixed(1)}%
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Average allocation across resources
            </p>
            <div className="mt-4 space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Available ({availableResources})</span>
                  <span>
                    {((availableResources / totalSchedules) * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full">
                  <div
                    className="h-2 bg-emerald-500 rounded-full"
                    style={{
                      width: `${(availableResources / totalSchedules) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Partially Booked ({partiallyBookedResources})</span>
                  <span>
                    {(
                      (partiallyBookedResources / totalSchedules) *
                      100
                    ).toFixed(0)}
                    %
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full">
                  <div
                    className="h-2 bg-amber-500 rounded-full"
                    style={{
                      width: `${(partiallyBookedResources / totalSchedules) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Fully Booked ({fullyBookedResources})</span>
                  <span>
                    {((fullyBookedResources / totalSchedules) * 100).toFixed(0)}
                    %
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full">
                  <div
                    className="h-2 bg-red-500 rounded-full"
                    style={{
                      width: `${(fullyBookedResources / totalSchedules) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Upcoming Schedule
            </h3>
            <div className="space-y-3 mt-2">
              {[
                { month: "September", allocation: 85 },
                { month: "October", allocation: 92 },
                { month: "November", allocation: 78 },
                { month: "December", allocation: 65 },
                { month: "January", allocation: 45 },
              ].map((month) => (
                <div key={month.month}>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>{month.month}</span>
                    <span>{month.allocation}% allocated</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full">
                    <div
                      className={`h-2 rounded-full ${
                        month.allocation > 90
                          ? "bg-red-500"
                          : month.allocation > 70
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                      }`}
                      style={{ width: `${month.allocation}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Resource Type Allocation
            </h3>
            <div className="flex items-center justify-between h-32">
              {[
                { type: "human", color: "bg-emerald-500" },
                { type: "equipment", color: "bg-blue-500" },
                { type: "facility", color: "bg-amber-500" },
                { type: "digital", color: "bg-purple-500" },
              ].map((resourceType) => {
                const typeSchedules = schedules.filter(
                  (s) => s.resourceType === resourceType.type,
                );
                const typeAllocation =
                  typeSchedules.length > 0
                    ? typeSchedules.reduce((sum, s) => sum + s.allocation, 0) /
                      typeSchedules.length
                    : 0;
                return (
                  <div
                    key={resourceType.type}
                    className="flex flex-col items-center"
                  >
                    <div className="h-24 w-12 bg-slate-700 rounded-t relative overflow-hidden">
                      <div
                        className={`absolute bottom-0 w-full ${resourceType.color}`}
                        style={{ height: `${typeAllocation}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-slate-400 mt-1">
                      {resourceType.type.charAt(0).toUpperCase() +
                        resourceType.type.slice(1)}
                    </span>
                    <span className="text-xs font-medium text-white">
                      {typeAllocation.toFixed(0)}%
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Resource Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="human">Human</SelectItem>
              <SelectItem value="equipment">Equipment</SelectItem>
              <SelectItem value="facility">Facility</SelectItem>
              <SelectItem value="digital">Digital</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="partially-booked">Partially Booked</SelectItem>
              <SelectItem value="fully-booked">Fully Booked</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">ID</TableHead>
              <TableHead className="text-slate-300">Resource</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Project</TableHead>
              <TableHead className="text-slate-300">Start Date</TableHead>
              <TableHead className="text-slate-300">End Date</TableHead>
              <TableHead className="text-slate-300">Allocation</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSchedules.map((schedule) => (
              <TableRow key={schedule.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {schedule.id}
                </TableCell>
                <TableCell>{schedule.resourceName}</TableCell>
                <TableCell>
                  {schedule.resourceType.charAt(0).toUpperCase() +
                    schedule.resourceType.slice(1)}
                </TableCell>
                <TableCell>{schedule.project}</TableCell>
                <TableCell>
                  {new Date(schedule.startDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(schedule.endDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-slate-700 rounded-full mr-2">
                      <div
                        className={`h-2 rounded-full ${
                          schedule.status === "available"
                            ? "bg-emerald-500"
                            : schedule.status === "partially-booked"
                              ? "bg-amber-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${schedule.allocation}%` }}
                      ></div>
                    </div>
                    <span className="text-xs">{schedule.allocation}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      schedule.status === "available"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : schedule.status === "partially-booked"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {schedule.status.replace("-", " ")}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-1">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
    </div>
  );
};

export default ResourceScheduling;
