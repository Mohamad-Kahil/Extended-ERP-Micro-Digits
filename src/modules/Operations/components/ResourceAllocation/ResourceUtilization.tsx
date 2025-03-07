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

interface Resource {
  id: string;
  name: string;
  type: "human" | "equipment" | "facility" | "digital";
  department: string;
  capacity: number;
  utilization: number;
  status: "optimal" | "underutilized" | "overutilized";
  cost: number;
  lastUpdated: string;
}

interface ResourceUtilizationProps {
  searchTerm: string;
}

const resources: Resource[] = [
  {
    id: "RES-001",
    name: "Production Team Alpha",
    type: "human",
    department: "Production",
    capacity: 100,
    utilization: 85,
    status: "optimal",
    cost: 12500,
    lastUpdated: "2023-09-15",
  },
  {
    id: "RES-002",
    name: "Assembly Line A",
    type: "equipment",
    department: "Production",
    capacity: 100,
    utilization: 92,
    status: "optimal",
    cost: 8500,
    lastUpdated: "2023-09-15",
  },
  {
    id: "RES-003",
    name: "Warehouse Space B",
    type: "facility",
    department: "Logistics",
    capacity: 100,
    utilization: 65,
    status: "underutilized",
    cost: 15000,
    lastUpdated: "2023-09-14",
  },
  {
    id: "RES-004",
    name: "Cloud Computing Resources",
    type: "digital",
    department: "IT",
    capacity: 100,
    utilization: 78,
    status: "optimal",
    cost: 5000,
    lastUpdated: "2023-09-15",
  },
  {
    id: "RES-005",
    name: "Customer Service Team",
    type: "human",
    department: "Customer Support",
    capacity: 100,
    utilization: 95,
    status: "overutilized",
    cost: 9500,
    lastUpdated: "2023-09-15",
  },
  {
    id: "RES-006",
    name: "Quality Control Equipment",
    type: "equipment",
    department: "Quality Assurance",
    capacity: 100,
    utilization: 45,
    status: "underutilized",
    cost: 7500,
    lastUpdated: "2023-09-13",
  },
  {
    id: "RES-007",
    name: "Meeting Rooms",
    type: "facility",
    department: "Administration",
    capacity: 100,
    utilization: 55,
    status: "underutilized",
    cost: 3000,
    lastUpdated: "2023-09-14",
  },
];

const ResourceUtilization = ({ searchTerm }: ResourceUtilizationProps) => {
  const [typeFilter, setTypeFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const filteredResources = resources.filter(
    (resource) =>
      (typeFilter === "all" || resource.type === typeFilter) &&
      (statusFilter === "all" || resource.status === statusFilter) &&
      (resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.id.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Calculate utilization metrics
  const totalResources = resources.length;
  const optimalResources = resources.filter(
    (r) => r.status === "optimal",
  ).length;
  const underutilizedResources = resources.filter(
    (r) => r.status === "underutilized",
  ).length;
  const overutilizedResources = resources.filter(
    (r) => r.status === "overutilized",
  ).length;

  const totalCost = resources.reduce((sum, r) => sum + r.cost, 0);
  const averageUtilization =
    resources.reduce((sum, r) => sum + r.utilization, 0) / totalResources;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Resource Utilization
            </h3>
            <p className="text-3xl font-bold text-white">
              {averageUtilization.toFixed(1)}%
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Average across all resources
            </p>
            <div className="mt-4 space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Optimal ({optimalResources})</span>
                  <span>
                    {((optimalResources / totalResources) * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full">
                  <div
                    className="h-2 bg-emerald-500 rounded-full"
                    style={{
                      width: `${(optimalResources / totalResources) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Underutilized ({underutilizedResources})</span>
                  <span>
                    {((underutilizedResources / totalResources) * 100).toFixed(
                      0,
                    )}
                    %
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full">
                  <div
                    className="h-2 bg-amber-500 rounded-full"
                    style={{
                      width: `${(underutilizedResources / totalResources) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Overutilized ({overutilizedResources})</span>
                  <span>
                    {((overutilizedResources / totalResources) * 100).toFixed(
                      0,
                    )}
                    %
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full">
                  <div
                    className="h-2 bg-red-500 rounded-full"
                    style={{
                      width: `${(overutilizedResources / totalResources) * 100}%`,
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
              Resource Cost
            </h3>
            <p className="text-3xl font-bold text-white">
              ${totalCost.toLocaleString()}
            </p>
            <p className="text-xs text-slate-400 mt-1">Total monthly cost</p>
            <div className="mt-4 space-y-3">
              {[
                { type: "human", label: "Human Resources" },
                { type: "equipment", label: "Equipment" },
                { type: "facility", label: "Facilities" },
                { type: "digital", label: "Digital Resources" },
              ].map((resourceType) => {
                const typeCost = resources
                  .filter((r) => r.type === resourceType.type)
                  .reduce((sum, r) => sum + r.cost, 0);
                return (
                  <div key={resourceType.type}>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>{resourceType.label}</span>
                      <span>${typeCost.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full">
                      <div
                        className="h-2 bg-cyan-500 rounded-full"
                        style={{ width: `${(typeCost / totalCost) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Resource Distribution
            </h3>
            <div className="flex items-center justify-between h-32">
              {[
                { type: "human", color: "bg-emerald-500" },
                { type: "equipment", color: "bg-blue-500" },
                { type: "facility", color: "bg-amber-500" },
                { type: "digital", color: "bg-purple-500" },
              ].map((resourceType) => {
                const typeCount = resources.filter(
                  (r) => r.type === resourceType.type,
                ).length;
                return (
                  <div
                    key={resourceType.type}
                    className="flex flex-col items-center"
                  >
                    <div className="h-24 w-12 bg-slate-700 rounded-t relative overflow-hidden">
                      <div
                        className={`absolute bottom-0 w-full ${resourceType.color}`}
                        style={{
                          height: `${(typeCount / totalResources) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-xs text-slate-400 mt-1">
                      {resourceType.type.charAt(0).toUpperCase() +
                        resourceType.type.slice(1)}
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
              <SelectItem value="optimal">Optimal</SelectItem>
              <SelectItem value="underutilized">Underutilized</SelectItem>
              <SelectItem value="overutilized">Overutilized</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">ID</TableHead>
              <TableHead className="text-slate-300">Resource Name</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Department</TableHead>
              <TableHead className="text-slate-300">Utilization</TableHead>
              <TableHead className="text-right text-slate-300">
                Monthly Cost
              </TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Last Updated</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredResources.map((resource) => (
              <TableRow key={resource.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {resource.id}
                </TableCell>
                <TableCell>{resource.name}</TableCell>
                <TableCell>
                  {resource.type.charAt(0).toUpperCase() +
                    resource.type.slice(1)}
                </TableCell>
                <TableCell>{resource.department}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-slate-700 rounded-full mr-2">
                      <div
                        className={`h-2 rounded-full ${
                          resource.status === "optimal"
                            ? "bg-emerald-500"
                            : resource.status === "underutilized"
                              ? "bg-amber-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${resource.utilization}%` }}
                      ></div>
                    </div>
                    <span className="text-xs">{resource.utilization}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${resource.cost.toLocaleString()}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      resource.status === "optimal"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : resource.status === "underutilized"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {resource.status}
                  </span>
                </TableCell>
                <TableCell>
                  {new Date(resource.lastUpdated).toLocaleDateString()}
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

export default ResourceUtilization;
