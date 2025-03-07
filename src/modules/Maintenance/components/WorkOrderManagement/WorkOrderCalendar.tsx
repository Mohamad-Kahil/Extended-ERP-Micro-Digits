import React from "react";
import { Card, CardContent } from "@/components/ui/card";

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
];

const WorkOrderCalendar = () => {
  // Get current date and month information
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Create calendar days array
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null); // Empty cells for days before the 1st of the month
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Group work orders by due date
  const workOrdersByDate: Record<string, WorkOrder[]> = {};
  workOrders.forEach((workOrder) => {
    const date = workOrder.dueDate;
    if (!workOrdersByDate[date]) {
      workOrdersByDate[date] = [];
    }
    workOrdersByDate[date].push(workOrder);
  });

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-500";
      case "In Progress":
        return "bg-blue-500";
      case "On Hold":
        return "bg-purple-500";
      case "Open":
        return "bg-amber-500";
      default:
        return "bg-slate-500";
    }
  };

  // Format date to YYYY-MM-DD
  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentYear}
        </h2>
        <div className="flex space-x-2">
          <button className="p-1 rounded-md hover:bg-slate-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button className="p-1 rounded-md hover:bg-slate-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div
            key={index}
            className="text-center font-medium text-slate-400 py-2"
          >
            {day}
          </div>
        ))}

        {days.map((day, index) => {
          if (day === null) {
            return (
              <div
                key={`empty-${index}`}
                className="h-32 bg-slate-800/30 rounded-md"
              ></div>
            );
          }

          const dateString = formatDate(currentYear, currentMonth, day);
          const dayWorkOrders = workOrdersByDate[dateString] || [];
          const isToday =
            day === currentDate.getDate() &&
            currentMonth === currentDate.getMonth() &&
            currentYear === currentDate.getFullYear();

          return (
            <Card
              key={`day-${day}`}
              className={`h-32 border-slate-700 ${isToday ? "bg-slate-700/50" : "bg-slate-800/30"} hover:bg-slate-700/30 transition-colors overflow-hidden`}
            >
              <CardContent className="p-2 h-full flex flex-col">
                <div
                  className={`text-right text-sm ${isToday ? "font-bold text-white" : "text-slate-400"}`}
                >
                  {day}
                </div>
                <div className="flex-1 overflow-y-auto space-y-1 mt-1">
                  {dayWorkOrders.map((workOrder) => (
                    <div
                      key={workOrder.id}
                      className="text-xs p-1 rounded bg-slate-800 hover:bg-slate-700 cursor-pointer"
                    >
                      <div className="flex items-center space-x-1">
                        <div
                          className={`h-2 w-2 rounded-full ${getStatusColor(workOrder.status)}`}
                        ></div>
                        <span className="truncate">{workOrder.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default WorkOrderCalendar;
