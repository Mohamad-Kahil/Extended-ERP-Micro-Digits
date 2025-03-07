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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface WorkOrder {
  id: string;
  title: string;
  assetName: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "In Progress" | "On Hold" | "Completed";
  type: "Preventive" | "Corrective" | "Predictive" | "Emergency";
  dueDate: string;
  assignedTo: string;
}

interface WorkOrderListProps {
  searchTerm: string;
}

const workOrders: WorkOrder[] = [
  {
    id: "WO-001",
    title: "HVAC System Maintenance",
    assetName: "Building A - HVAC Unit",
    priority: "High",
    status: "In Progress",
    type: "Preventive",
    dueDate: "2023-09-20",
    assignedTo: "John Smith",
  },
  {
    id: "WO-002",
    title: "Conveyor Belt Repair",
    assetName: "Production Line #2",
    priority: "High",
    status: "Open",
    type: "Corrective",
    dueDate: "2023-09-18",
    assignedTo: "Sarah Johnson",
  },
  {
    id: "WO-003",
    title: "Forklift Scheduled Maintenance",
    assetName: "Forklift #5",
    priority: "Medium",
    status: "Open",
    type: "Preventive",
    dueDate: "2023-09-25",
    assignedTo: "Michael Chen",
  },
  {
    id: "WO-004",
    title: "Electrical Panel Inspection",
    assetName: "Main Distribution Panel",
    priority: "Medium",
    status: "Completed",
    type: "Preventive",
    dueDate: "2023-09-15",
    assignedTo: "Emily Davis",
  },
  {
    id: "WO-005",
    title: "Hydraulic Pump Replacement",
    assetName: "Press Machine #3",
    priority: "High",
    status: "In Progress",
    type: "Corrective",
    dueDate: "2023-09-19",
    assignedTo: "John Smith",
  },
  {
    id: "WO-006",
    title: "Compressor Vibration Analysis",
    assetName: "Air Compressor #2",
    priority: "Low",
    status: "Open",
    type: "Predictive",
    dueDate: "2023-09-28",
    assignedTo: "Sarah Johnson",
  },
  {
    id: "WO-007",
    title: "Emergency Generator Test",
    assetName: "Backup Generator",
    priority: "Medium",
    status: "Completed",
    type: "Preventive",
    dueDate: "2023-09-14",
    assignedTo: "Michael Chen",
  },
];

const WorkOrderList = ({ searchTerm }: WorkOrderListProps) => {
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [priorityFilter, setPriorityFilter] = React.useState("all");
  const [typeFilter, setTypeFilter] = React.useState("all");

  const filteredWorkOrders = workOrders.filter(
    (workOrder) =>
      (statusFilter === "all" || workOrder.status === statusFilter) &&
      (priorityFilter === "all" || workOrder.priority === priorityFilter) &&
      (typeFilter === "all" || workOrder.type === typeFilter) &&
      (workOrder.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workOrder.assetName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workOrder.id.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Open">Open</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="On Hold">On Hold</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>

          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Preventive">Preventive</SelectItem>
              <SelectItem value="Corrective">Corrective</SelectItem>
              <SelectItem value="Predictive">Predictive</SelectItem>
              <SelectItem value="Emergency">Emergency</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Work Order</TableHead>
              <TableHead className="text-slate-300">Asset</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Priority</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Due Date</TableHead>
              <TableHead className="text-slate-300">Assigned To</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredWorkOrders.map((workOrder) => (
              <TableRow key={workOrder.id} className="border-slate-800">
                <TableCell>
                  <div>
                    <div className="font-medium text-slate-300">
                      {workOrder.id}
                    </div>
                    <div className="text-sm text-slate-400">
                      {workOrder.title}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{workOrder.assetName}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      workOrder.status === "Completed"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : workOrder.status === "In Progress"
                          ? "bg-blue-500/10 text-blue-500"
                          : workOrder.status === "On Hold"
                            ? "bg-purple-500/10 text-purple-500"
                            : "bg-amber-500/10 text-amber-500"
                    }`}
                  >
                    {workOrder.status}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      workOrder.priority === "High"
                        ? "bg-red-500/10 text-red-500"
                        : workOrder.priority === "Medium"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {workOrder.priority}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      workOrder.type === "Preventive"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : workOrder.type === "Corrective"
                          ? "bg-amber-500/10 text-amber-500"
                          : workOrder.type === "Predictive"
                            ? "bg-blue-500/10 text-blue-500"
                            : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {workOrder.type}
                  </span>
                </TableCell>
                <TableCell>
                  {new Date(workOrder.dueDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${workOrder.assignedTo}`}
                      />
                      <AvatarFallback>
                        {workOrder.assignedTo.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span>{workOrder.assignedTo}</span>
                  </div>
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

export default WorkOrderList;
