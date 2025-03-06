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

interface Task {
  id: string;
  name: string;
  workflow: string;
  department: string;
  assignee: string;
  priority: "low" | "medium" | "high" | "critical";
  status: "pending" | "in-progress" | "completed" | "escalated" | "on-hold";
  dueDate: string;
  createdDate: string;
  escalationLevel?: number;
  escalationReason?: string;
}

const tasks: Task[] = [
  {
    id: "1",
    name: "Review Q3 Financial Reports",
    workflow: "Financial Reporting",
    department: "Finance",
    assignee: "John Smith",
    priority: "high",
    status: "in-progress",
    dueDate: "2023-10-15",
    createdDate: "2023-10-01",
  },
  {
    id: "2",
    name: "Approve New Vendor Onboarding",
    workflow: "Vendor Management",
    department: "Procurement",
    assignee: "Lisa Johnson",
    priority: "medium",
    status: "pending",
    dueDate: "2023-10-12",
    createdDate: "2023-10-05",
  },
  {
    id: "3",
    name: "Resolve Customer Billing Dispute",
    workflow: "Customer Support",
    department: "Finance",
    assignee: "Michael Chen",
    priority: "critical",
    status: "escalated",
    dueDate: "2023-10-08",
    createdDate: "2023-10-02",
    escalationLevel: 2,
    escalationReason: "Customer threatening legal action",
  },
  {
    id: "4",
    name: "Update Employee Handbook",
    workflow: "HR Documentation",
    department: "HR",
    assignee: "Sarah Williams",
    priority: "low",
    status: "in-progress",
    dueDate: "2023-10-30",
    createdDate: "2023-09-25",
  },
  {
    id: "5",
    name: "Prepare Monthly Inventory Report",
    workflow: "Inventory Management",
    department: "Operations",
    assignee: "David Rodriguez",
    priority: "medium",
    status: "completed",
    dueDate: "2023-10-05",
    createdDate: "2023-09-28",
  },
  {
    id: "6",
    name: "Review Marketing Campaign Results",
    workflow: "Marketing Analytics",
    department: "Marketing",
    assignee: "Emma Thompson",
    priority: "medium",
    status: "in-progress",
    dueDate: "2023-10-18",
    createdDate: "2023-10-03",
  },
  {
    id: "7",
    name: "Investigate Production Line Delay",
    workflow: "Production Management",
    department: "Manufacturing",
    assignee: "Robert Lee",
    priority: "critical",
    status: "escalated",
    dueDate: "2023-10-07",
    createdDate: "2023-10-06",
    escalationLevel: 1,
    escalationReason: "Affecting delivery schedules",
  },
  {
    id: "8",
    name: "Approve IT Security Updates",
    workflow: "IT Security",
    department: "IT",
    assignee: "Jennifer Garcia",
    priority: "high",
    status: "pending",
    dueDate: "2023-10-10",
    createdDate: "2023-10-04",
  },
  {
    id: "9",
    name: "Process Quarterly Tax Filings",
    workflow: "Tax Compliance",
    department: "Finance",
    assignee: "Thomas Wilson",
    priority: "high",
    status: "on-hold",
    dueDate: "2023-10-20",
    createdDate: "2023-09-30",
  },
  {
    id: "10",
    name: "Review New Product Specifications",
    workflow: "Product Development",
    department: "R&D",
    assignee: "Michelle Park",
    priority: "medium",
    status: "in-progress",
    dueDate: "2023-10-25",
    createdDate: "2023-10-02",
  },
];

interface TaskAssignmentsProps {
  isEscalation?: boolean;
}

const TaskAssignments = ({ isEscalation = false }: TaskAssignmentsProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [departmentFilter, setDepartmentFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [priorityFilter, setPriorityFilter] = React.useState("all");
  const [selectedTask, setSelectedTask] = React.useState<string | null>(null);

  const departments = [...new Set(tasks.map((task) => task.department))];
  const workflows = [...new Set(tasks.map((task) => task.workflow))];

  // Filter tasks based on whether we're in escalation view or not
  const filteredTasks = tasks
    .filter((task) => (isEscalation ? task.status === "escalated" : true))
    .filter(
      (task) =>
        (departmentFilter === "all" || task.department === departmentFilter) &&
        (statusFilter === "all" || task.status === statusFilter) &&
        (priorityFilter === "all" || task.priority === priorityFilter) &&
        (task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.assignee.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.workflow.toLowerCase().includes(searchTerm.toLowerCase())),
    );

  const selectedTaskData = selectedTask
    ? tasks.find((task) => task.id === selectedTask)
    : null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-amber-500/10 text-amber-500";
      case "in-progress":
        return "bg-blue-500/10 text-blue-500";
      case "completed":
        return "bg-emerald-500/10 text-emerald-500";
      case "escalated":
        return "bg-red-500/10 text-red-500";
      case "on-hold":
        return "bg-slate-500/10 text-slate-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "bg-emerald-500/10 text-emerald-500";
      case "medium":
        return "bg-blue-500/10 text-blue-500";
      case "high":
        return "bg-amber-500/10 text-amber-500";
      case "critical":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  // Calculate statistics
  const pendingTasks = tasks.filter((task) => task.status === "pending").length;
  const inProgressTasks = tasks.filter(
    (task) => task.status === "in-progress",
  ).length;
  const completedTasks = tasks.filter(
    (task) => task.status === "completed",
  ).length;
  const escalatedTasks = tasks.filter(
    (task) => task.status === "escalated",
  ).length;

  // Calculate overdue tasks
  const overdueTasks = tasks.filter(
    (task) =>
      task.status !== "completed" &&
      new Date(task.dueDate) < new Date() &&
      task.status !== "escalated",
  ).length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Total Tasks</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {tasks.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Pending</div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {pendingTasks}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">In Progress</div>
          <div className="mt-1 text-2xl font-bold text-blue-500">
            {inProgressTasks}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Completed</div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {completedTasks}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            {isEscalation ? "Escalated" : "Overdue"}
          </div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {isEscalation ? escalatedTasks : overdueTasks}
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
              placeholder="Search tasks..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map((department) => (
                <SelectItem key={department} value={department}>
                  {department}
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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="escalated">Escalated</SelectItem>
              <SelectItem value="on-hold">On Hold</SelectItem>
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
              <SelectItem value="critical">Critical</SelectItem>
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
          {isEscalation ? "Create Escalation" : "Create Task"}
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Task Name</TableHead>
              <TableHead className="text-slate-300">Workflow</TableHead>
              <TableHead className="text-slate-300">Department</TableHead>
              <TableHead className="text-slate-300">Assignee</TableHead>
              <TableHead className="text-slate-300">Priority</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Due Date</TableHead>
              {isEscalation && (
                <TableHead className="text-slate-300">
                  Escalation Level
                </TableHead>
              )}
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTasks.map((task) => (
              <TableRow
                key={task.id}
                className={`border-slate-800 ${selectedTask === task.id ? "bg-slate-800/50" : ""}`}
                onClick={() =>
                  setSelectedTask(selectedTask === task.id ? null : task.id)
                }
              >
                <TableCell className="font-medium text-slate-300">
                  {task.name}
                </TableCell>
                <TableCell>{task.workflow}</TableCell>
                <TableCell>{task.department}</TableCell>
                <TableCell>{task.assignee}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getPriorityColor(task.priority)}`}
                  >
                    {task.priority.charAt(0).toUpperCase() +
                      task.priority.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(task.status)}`}
                  >
                    {task.status === "in-progress"
                      ? "In Progress"
                      : task.status.charAt(0).toUpperCase() +
                        task.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  {new Date(task.dueDate).toLocaleDateString()}
                  {task.status !== "completed" &&
                    new Date(task.dueDate) < new Date() &&
                    task.status !== "escalated" && (
                      <span className="ml-2 text-xs text-red-500">
                        (Overdue)
                      </span>
                    )}
                </TableCell>
                {isEscalation && (
                  <TableCell>
                    {task.escalationLevel ? (
                      <span className="text-red-500">
                        Level {task.escalationLevel}
                      </span>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                )}
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
                        className="h-4 w-4 text-blue-500"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <span className="sr-only">View Details</span>
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
                        className="h-4 w-4"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                      <span className="sr-only">Edit</span>
                    </Button>
                    {!isEscalation && task.status !== "escalated" && (
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
                          className="h-4 w-4 text-red-500"
                        >
                          <path d="m3 8 4-4 4 4" />
                          <path d="M7 4v16" />
                          <path d="m21 16-4 4-4-4" />
                          <path d="M17 20V4" />
                        </svg>
                        <span className="sr-only">Escalate</span>
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedTaskData && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {selectedTaskData.name}
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Workflow
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedTaskData.workflow}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Department
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedTaskData.department}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Assignee
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedTaskData.assignee}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Created Date
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {new Date(
                          selectedTaskData.createdDate,
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Status
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(selectedTaskData.status)}`}
                        >
                          {selectedTaskData.status === "in-progress"
                            ? "In Progress"
                            : selectedTaskData.status.charAt(0).toUpperCase() +
                              selectedTaskData.status.slice(1)}
                        </span>
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Priority
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getPriorityColor(selectedTaskData.priority)}`}
                        >
                          {selectedTaskData.priority.charAt(0).toUpperCase() +
                            selectedTaskData.priority.slice(1)}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Due Date
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {new Date(selectedTaskData.dueDate).toLocaleDateString()}
                      {selectedTaskData.status !== "completed" &&
                        new Date(selectedTaskData.dueDate) < new Date() &&
                        selectedTaskData.status !== "escalated" && (
                          <span className="ml-2 text-xs text-red-500">
                            (Overdue)
                          </span>
                        )}
                    </p>
                  </div>

                  {selectedTaskData.status === "escalated" && (
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Escalation Details
                      </h4>
                      <div className="mt-2 rounded-md border border-red-500/20 bg-red-500/5 p-3">
                        <div className="flex items-center">
                          <span className="mr-2 rounded-full bg-red-500/20 px-2 py-1 text-xs font-semibold text-red-500">
                            Level {selectedTaskData.escalationLevel}
                          </span>
                          <span className="text-sm text-slate-300">
                            {selectedTaskData.escalationReason}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 flex space-x-2">
                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
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
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                      Update Task
                    </Button>
                    {selectedTaskData.status !== "completed" && (
                      <Button variant="outline" className="w-full">
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
                          className="mr-2 text-emerald-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Mark as Completed
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Task Timeline
                </h3>
                <div className="space-y-4">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1 h-full w-px bg-slate-700"></div>
                    <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-emerald-500"></div>
                    <div>
                      <p className="text-sm font-medium text-slate-300">
                        {new Date(
                          selectedTaskData.createdDate,
                        ).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-slate-500">Task created</p>
                    </div>
                  </div>

                  {selectedTaskData.status === "in-progress" && (
                    <div className="relative pl-6">
                      <div className="absolute left-0 top-1 h-full w-px bg-slate-700"></div>
                      <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-blue-500"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-300">
                          {new Date(
                            new Date(selectedTaskData.createdDate).getTime() +
                              86400000,
                          ).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-slate-500">Work started</p>
                      </div>
                    </div>
                  )}

                  {selectedTaskData.status === "escalated" && (
                    <div className="relative pl-6">
                      <div className="absolute left-0 top-1 h-full w-px bg-slate-700"></div>
                      <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-red-500"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-300">
                          {new Date(
                            new Date(selectedTaskData.createdDate).getTime() +
                              172800000,
                          ).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-slate-500">
                          Escalated to Level {selectedTaskData.escalationLevel}
                        </p>
                      </div>
                    </div>
                  )}

                  {selectedTaskData.status === "completed" && (
                    <div className="relative pl-6">
                      <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-emerald-500"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-300">
                          {new Date(
                            new Date(selectedTaskData.dueDate).getTime() -
                              86400000,
                          ).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-slate-500">Task completed</p>
                      </div>
                    </div>
                  )}

                  {selectedTaskData.status !== "completed" && (
                    <div className="relative pl-6">
                      <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-amber-500"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-300">
                          {new Date(
                            selectedTaskData.dueDate,
                          ).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-slate-500">Due date</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskAssignments;
