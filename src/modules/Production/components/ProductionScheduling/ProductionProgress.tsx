import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface ProductionTask {
  id: string;
  workOrder: string;
  product: string;
  stage: string;
  startTime: string;
  estimatedCompletion: string;
  progress: number;
  status: "not-started" | "in-progress" | "completed" | "delayed";
  assignedTo: string;
  notes: string;
}

const productionTasks: ProductionTask[] = [
  {
    id: "1",
    workOrder: "WO-2023-0001",
    product: "Smart Thermostat Model A",
    stage: "Assembly",
    startTime: "2023-06-15T08:00:00",
    estimatedCompletion: "2023-06-18T17:00:00",
    progress: 75,
    status: "in-progress",
    assignedTo: "Production Team A",
    notes: "On schedule, no issues reported",
  },
  {
    id: "2",
    workOrder: "WO-2023-0001",
    product: "Smart Thermostat Model A",
    stage: "PCB Fabrication",
    startTime: "2023-06-15T08:00:00",
    estimatedCompletion: "2023-06-17T12:00:00",
    progress: 100,
    status: "completed",
    assignedTo: "Production Team B",
    notes: "Completed ahead of schedule",
  },
  {
    id: "3",
    workOrder: "WO-2023-0001",
    product: "Smart Thermostat Model A",
    stage: "Testing",
    startTime: "2023-06-18T08:00:00",
    estimatedCompletion: "2023-06-20T17:00:00",
    progress: 0,
    status: "not-started",
    assignedTo: "Quality Team A",
    notes: "Waiting for assembly completion",
  },
  {
    id: "4",
    workOrder: "WO-2023-0004",
    product: "Smart Doorbell Pro",
    stage: "Molding",
    startTime: "2023-06-18T08:00:00",
    estimatedCompletion: "2023-06-19T17:00:00",
    progress: 45,
    status: "delayed",
    assignedTo: "Production Team C",
    notes: "Material shortage causing delays",
  },
  {
    id: "5",
    workOrder: "WO-2023-0004",
    product: "Smart Doorbell Pro",
    stage: "PCB Fabrication",
    startTime: "2023-06-18T08:00:00",
    estimatedCompletion: "2023-06-20T12:00:00",
    progress: 60,
    status: "in-progress",
    assignedTo: "Production Team B",
    notes: "On schedule",
  },
  {
    id: "6",
    workOrder: "WO-2023-0002",
    product: "Smart Lock System",
    stage: "Component Preparation",
    startTime: "2023-06-20T08:00:00",
    estimatedCompletion: "2023-06-22T17:00:00",
    progress: 30,
    status: "in-progress",
    assignedTo: "Production Team D",
    notes: "On schedule",
  },
];

const ProductionProgress = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [workOrderFilter, setWorkOrderFilter] = React.useState("all");

  const filteredTasks = productionTasks.filter(
    (task) =>
      (statusFilter === "all" || task.status === statusFilter) &&
      (workOrderFilter === "all" || task.workOrder === workOrderFilter) &&
      (task.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.stage.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const workOrders = [
    ...new Set(productionTasks.map((task) => task.workOrder)),
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/10 text-emerald-500";
      case "in-progress":
        return "bg-blue-500/10 text-blue-500";
      case "not-started":
        return "bg-slate-500/10 text-slate-500";
      case "delayed":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getProgressColor = (progress: number, status: string) => {
    if (status === "delayed") return "bg-red-500";
    if (progress === 100) return "bg-emerald-500";
    return "bg-blue-500";
  };

  // Calculate overall progress for each work order
  const workOrderProgress = workOrders.map((wo) => {
    const tasks = productionTasks.filter((task) => task.workOrder === wo);
    const totalProgress = tasks.reduce((sum, task) => sum + task.progress, 0);
    const avgProgress = Math.round(totalProgress / tasks.length);
    const product = tasks[0].product;
    const delayed = tasks.some((task) => task.status === "delayed");

    return {
      workOrder: wo,
      product,
      progress: avgProgress,
      delayed,
      totalTasks: tasks.length,
      completedTasks: tasks.filter((t) => t.status === "completed").length,
    };
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Total Tasks</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {productionTasks.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Completed Tasks
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {productionTasks.filter((t) => t.status === "completed").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Delayed Tasks
          </div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {productionTasks.filter((t) => t.status === "delayed").length}
          </div>
        </div>
      </div>

      <Card className="border-slate-800 bg-slate-800/50">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Work Order Progress
          </h3>
          <div className="space-y-4">
            {workOrderProgress.map((wo) => (
              <div key={wo.workOrder} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-slate-300">
                      {wo.workOrder} - {wo.product}
                    </span>
                    {wo.delayed && (
                      <span className="ml-2 rounded-full bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-500">
                        Delayed
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium text-slate-300">
                    {wo.completedTasks}/{wo.totalTasks} tasks
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 flex-1 rounded-full bg-slate-700">
                    <div
                      className={`h-2 rounded-full ${wo.delayed ? "bg-red-500" : "bg-blue-500"}`}
                      style={{ width: `${wo.progress}%` }}
                    ></div>
                  </div>
                  <span className="w-12 text-right text-xs text-slate-400">
                    {wo.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <div className="relative w-full md:w-64">
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
              placeholder="Search tasks..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={workOrderFilter} onValueChange={setWorkOrderFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Work Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Work Orders</SelectItem>
              {workOrders.map((wo) => (
                <SelectItem key={wo} value={wo}>
                  {wo}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="not-started">Not Started</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="delayed">Delayed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 md:w-auto">
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
          Add Task
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Work Order</TableHead>
              <TableHead className="text-slate-300">Product</TableHead>
              <TableHead className="text-slate-300">Stage</TableHead>
              <TableHead className="text-slate-300">Assigned To</TableHead>
              <TableHead className="text-slate-300">Timeline</TableHead>
              <TableHead className="text-slate-300">Progress</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTasks.map((task) => (
              <TableRow key={task.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {task.workOrder}
                </TableCell>
                <TableCell>{task.product}</TableCell>
                <TableCell>{task.stage}</TableCell>
                <TableCell>{task.assignedTo}</TableCell>
                <TableCell className="text-xs">
                  <div>Start: {new Date(task.startTime).toLocaleString()}</div>
                  <div>
                    Est. Completion:{" "}
                    {new Date(task.estimatedCompletion).toLocaleString()}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 rounded-full bg-slate-700">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(task.progress, task.status)}`}
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs">{task.progress}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(task.status)}`}
                  >
                    {task.status
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")}
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

export default ProductionProgress;
