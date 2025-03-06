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

interface DeliverySchedule {
  id: string;
  orderId: string;
  customer: string;
  address: string;
  scheduledDate: string;
  timeWindow: string;
  status: "pending" | "in-transit" | "delivered" | "failed" | "rescheduled";
  driver: string;
  vehicle: string;
  priority: "normal" | "high" | "express";
}

const deliverySchedules: DeliverySchedule[] = [
  {
    id: "1",
    orderId: "ORD-2023-0001",
    customer: "Sarah Johnson",
    address: "123 Main St, Anytown, CA 90210",
    scheduledDate: "2023-07-05",
    timeWindow: "09:00 - 12:00",
    status: "pending",
    driver: "Michael Rodriguez",
    vehicle: "Van #103 (Ford Transit)",
    priority: "normal",
  },
  {
    id: "2",
    orderId: "ORD-2023-0002",
    customer: "Robert Brown",
    address: "456 Oak Ave, Somewhere, CA 90211",
    scheduledDate: "2023-07-05",
    timeWindow: "10:00 - 13:00",
    status: "in-transit",
    driver: "Jennifer Davis",
    vehicle: "Truck #205 (Isuzu NPR)",
    priority: "high",
  },
  {
    id: "3",
    orderId: "ORD-2023-0003",
    customer: "Emily Wilson",
    address: "789 Pine Rd, Nowhere, CA 90212",
    scheduledDate: "2023-07-05",
    timeWindow: "13:00 - 16:00",
    status: "delivered",
    driver: "David Martinez",
    vehicle: "Van #105 (Mercedes Sprinter)",
    priority: "normal",
  },
  {
    id: "4",
    orderId: "ORD-2023-0004",
    customer: "James Taylor",
    address: "101 Cedar Ln, Elsewhere, CA 90213",
    scheduledDate: "2023-07-05",
    timeWindow: "14:00 - 17:00",
    status: "failed",
    driver: "Lisa Thompson",
    vehicle: "Van #102 (Ford Transit)",
    priority: "normal",
  },
  {
    id: "5",
    orderId: "ORD-2023-0005",
    customer: "Michael Anderson",
    address: "202 Maple Dr, Anywhere, CA 90214",
    scheduledDate: "2023-07-06",
    timeWindow: "09:00 - 12:00",
    status: "pending",
    driver: "Robert Wilson",
    vehicle: "Truck #201 (Isuzu NPR)",
    priority: "express",
  },
  {
    id: "6",
    orderId: "ORD-2023-0006",
    customer: "Jennifer Miller",
    address: "303 Birch Blvd, Someplace, CA 90215",
    scheduledDate: "2023-07-06",
    timeWindow: "10:00 - 13:00",
    status: "rescheduled",
    driver: "Michael Rodriguez",
    vehicle: "Van #104 (Mercedes Sprinter)",
    priority: "high",
  },
  {
    id: "7",
    orderId: "ORD-2023-0007",
    customer: "David Garcia",
    address: "404 Elm St, Othertown, CA 90216",
    scheduledDate: "2023-07-06",
    timeWindow: "13:00 - 16:00",
    status: "pending",
    driver: "Jennifer Davis",
    vehicle: "Van #101 (Ford Transit)",
    priority: "normal",
  },
];

const DeliveryScheduling = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [dateFilter, setDateFilter] = React.useState("all");

  const filteredSchedules = deliverySchedules.filter(
    (schedule) =>
      (statusFilter === "all" || schedule.status === statusFilter) &&
      (dateFilter === "all" || schedule.scheduledDate === dateFilter) &&
      (schedule.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.address.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-blue-500/10 text-blue-500";
      case "in-transit":
        return "bg-amber-500/10 text-amber-500";
      case "delivered":
        return "bg-emerald-500/10 text-emerald-500";
      case "failed":
        return "bg-red-500/10 text-red-500";
      case "rescheduled":
        return "bg-purple-500/10 text-purple-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "normal":
        return "bg-slate-500/10 text-slate-500";
      case "high":
        return "bg-amber-500/10 text-amber-500";
      case "express":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  // Get unique dates for the filter
  const uniqueDates = [
    ...new Set(deliverySchedules.map((schedule) => schedule.scheduledDate)),
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Today's Deliveries
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {
              deliverySchedules.filter((s) => s.scheduledDate === "2023-07-05")
                .length
            }
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">In Transit</div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {deliverySchedules.filter((s) => s.status === "in-transit").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Completed Today
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {
              deliverySchedules.filter(
                (s) =>
                  s.status === "delivered" && s.scheduledDate === "2023-07-05",
              ).length
            }
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Issues</div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {
              deliverySchedules.filter(
                (s) => s.status === "failed" || s.status === "rescheduled",
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
              placeholder="Search deliveries..."
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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-transit">In Transit</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
              <SelectItem value="rescheduled">Rescheduled</SelectItem>
            </SelectContent>
          </Select>
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              {uniqueDates.map((date) => (
                <SelectItem key={date} value={date}>
                  {new Date(date).toLocaleDateString()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full space-x-2 md:w-auto">
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
            Schedule Delivery
          </Button>
          <Button variant="outline" className="w-full md:w-auto">
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
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            Import
          </Button>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Order ID</TableHead>
              <TableHead className="text-slate-300">Customer</TableHead>
              <TableHead className="text-slate-300">Scheduled Date</TableHead>
              <TableHead className="text-slate-300">Time Window</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Priority</TableHead>
              <TableHead className="text-slate-300">Driver</TableHead>
              <TableHead className="text-slate-300">Vehicle</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSchedules.map((schedule) => (
              <TableRow key={schedule.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {schedule.orderId}
                </TableCell>
                <TableCell>
                  <div>
                    <div>{schedule.customer}</div>
                    <div className="text-xs text-slate-500">
                      {schedule.address}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(schedule.scheduledDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{schedule.timeWindow}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(schedule.status)}`}
                  >
                    {schedule.status
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getPriorityColor(schedule.priority)}`}
                  >
                    {schedule.priority.charAt(0).toUpperCase() +
                      schedule.priority.slice(1)}
                  </span>
                </TableCell>
                <TableCell>{schedule.driver}</TableCell>
                <TableCell>{schedule.vehicle}</TableCell>
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
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span className="sr-only">Complete</span>
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

export default DeliveryScheduling;
