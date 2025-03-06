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

interface WorkOrder {
  id: string;
  orderNumber: string;
  product: string;
  quantity: number;
  startDate: string;
  dueDate: string;
  status: "planned" | "in-progress" | "completed" | "on-hold" | "cancelled";
  assignedTo: string;
  priority: "low" | "medium" | "high" | "urgent";
}

const workOrders: WorkOrder[] = [
  {
    id: "1",
    orderNumber: "WO-2023-0001",
    product: "Smart Thermostat Model A",
    quantity: 500,
    startDate: "2023-06-15",
    dueDate: "2023-06-30",
    status: "in-progress",
    assignedTo: "Production Team A",
    priority: "high",
  },
  {
    id: "2",
    orderNumber: "WO-2023-0002",
    product: "Smart Lock System",
    quantity: 350,
    startDate: "2023-06-20",
    dueDate: "2023-07-10",
    status: "planned",
    assignedTo: "Production Team B",
    priority: "medium",
  },
  {
    id: "3",
    orderNumber: "WO-2023-0003",
    product: "Security Camera Indoor",
    quantity: 750,
    startDate: "2023-06-10",
    dueDate: "2023-06-25",
    status: "completed",
    assignedTo: "Production Team C",
    priority: "medium",
  },
  {
    id: "4",
    orderNumber: "WO-2023-0004",
    product: "Smart Doorbell Pro",
    quantity: 600,
    startDate: "2023-06-18",
    dueDate: "2023-07-05",
    status: "in-progress",
    assignedTo: "Production Team A",
    priority: "high",
  },
  {
    id: "5",
    orderNumber: "WO-2023-0005",
    product: "Motion Sensor V2",
    quantity: 1200,
    startDate: "2023-06-25",
    dueDate: "2023-07-15",
    status: "planned",
    assignedTo: "Production Team D",
    priority: "low",
  },
  {
    id: "6",
    orderNumber: "WO-2023-0006",
    product: "Smart Thermostat Model B",
    quantity: 400,
    startDate: "2023-06-05",
    dueDate: "2023-06-20",
    status: "on-hold",
    assignedTo: "Production Team B",
    priority: "medium",
  },
  {
    id: "7",
    orderNumber: "WO-2023-0007",
    product: "Security Camera Outdoor",
    quantity: 550,
    startDate: "2023-06-01",
    dueDate: "2023-06-15",
    status: "cancelled",
    assignedTo: "Production Team C",
    priority: "low",
  },
];

const WorkOrderManagement = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [priorityFilter, setPriorityFilter] = React.useState("all");

  const filteredOrders = workOrders.filter(
    (order) =>
      (statusFilter === "all" || order.status === statusFilter) &&
      (priorityFilter === "all" || order.priority === priorityFilter) &&
      (order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "planned":
        return "bg-blue-500/10 text-blue-500";
      case "in-progress":
        return "bg-amber-500/10 text-amber-500";
      case "completed":
        return "bg-emerald-500/10 text-emerald-500";
      case "on-hold":
        return "bg-purple-500/10 text-purple-500";
      case "cancelled":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "bg-slate-500/10 text-slate-500";
      case "medium":
        return "bg-blue-500/10 text-blue-500";
      case "high":
        return "bg-amber-500/10 text-amber-500";
      case "urgent":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Work Orders
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {workOrders.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">In Progress</div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {workOrders.filter((o) => o.status === "in-progress").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Completed</div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {workOrders.filter((o) => o.status === "completed").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            High Priority
          </div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {
              workOrders.filter(
                (o) => o.priority === "high" || o.priority === "urgent",
              ).length
            }
          </div>
        </div>
      </div>

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
              placeholder="Search work orders..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="planned">Planned</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="on-hold">On Hold</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
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
          Create Work Order
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Order #</TableHead>
              <TableHead className="text-slate-300">Product</TableHead>
              <TableHead className="text-right text-slate-300">
                Quantity
              </TableHead>
              <TableHead className="text-slate-300">Start Date</TableHead>
              <TableHead className="text-slate-300">Due Date</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Assigned To</TableHead>
              <TableHead className="text-slate-300">Priority</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {order.orderNumber}
                </TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell className="text-right">{order.quantity}</TableCell>
                <TableCell>
                  {new Date(order.startDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(order.dueDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(order.status)}`}
                  >
                    {order.status
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")}
                  </span>
                </TableCell>
                <TableCell>{order.assignedTo}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getPriorityColor(order.priority)}`}
                  >
                    {order.priority.charAt(0).toUpperCase() +
                      order.priority.slice(1)}
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

export default WorkOrderManagement;
