import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
  {
    id: "WO-008",
    title: "Cooling Tower Inspection",
    assetName: "Cooling Tower #1",
    priority: "Medium",
    status: "On Hold",
    type: "Preventive",
    dueDate: "2023-09-22",
    assignedTo: "Emily Davis",
  },
  {
    id: "WO-009",
    title: "Boiler Pressure Relief Valve Test",
    assetName: "Boiler #2",
    priority: "High",
    status: "On Hold",
    type: "Preventive",
    dueDate: "2023-09-21",
    assignedTo: "John Smith",
  },
];

const WorkOrderKanban = () => {
  const columns = [
    { id: "Open", title: "Open", color: "bg-amber-500" },
    { id: "In Progress", title: "In Progress", color: "bg-blue-500" },
    { id: "On Hold", title: "On Hold", color: "bg-purple-500" },
    { id: "Completed", title: "Completed", color: "bg-emerald-500" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-500/10 text-red-500";
      case "Medium":
        return "bg-amber-500/10 text-amber-500";
      case "Low":
        return "bg-blue-500/10 text-blue-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Preventive":
        return "bg-emerald-500/10 text-emerald-500";
      case "Corrective":
        return "bg-amber-500/10 text-amber-500";
      case "Predictive":
        return "bg-blue-500/10 text-blue-500";
      case "Emergency":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 h-[calc(100vh-300px)] overflow-hidden">
      {columns.map((column) => {
        const columnWorkOrders = workOrders.filter(
          (workOrder) => workOrder.status === column.id,
        );

        return (
          <div key={column.id} className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-2 px-2">
              <div className="flex items-center space-x-2">
                <div className={`h-3 w-3 rounded-full ${column.color}`}></div>
                <h3 className="font-medium text-white">{column.title}</h3>
              </div>
              <span className="text-xs text-slate-400">
                {columnWorkOrders.length}
              </span>
            </div>
            <div className="flex-1 bg-slate-800/30 rounded-md p-2 overflow-y-auto space-y-2">
              {columnWorkOrders.map((workOrder) => (
                <Card
                  key={workOrder.id}
                  className="border-slate-700 bg-slate-800 hover:bg-slate-700/80 transition-colors cursor-pointer"
                >
                  <CardContent className="p-3 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-slate-400">
                        {workOrder.id}
                      </span>
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${getPriorityColor(workOrder.priority)}`}
                      >
                        {workOrder.priority}
                      </span>
                    </div>
                    <h4 className="font-medium text-white">
                      {workOrder.title}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {workOrder.assetName}
                    </p>
                    <div className="flex justify-between items-center">
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${getTypeColor(workOrder.type)}`}
                      >
                        {workOrder.type}
                      </span>
                      <span className="text-xs text-slate-400">
                        Due: {new Date(workOrder.dueDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <div className="flex items-center space-x-1">
                        <Avatar className="h-5 w-5">
                          <AvatarImage
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${workOrder.assignedTo}`}
                          />
                          <AvatarFallback>
                            {workOrder.assignedTo.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-slate-400">
                          {workOrder.assignedTo}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                        <span className="sr-only">Menu</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button
                variant="ghost"
                className="w-full border border-dashed border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 text-slate-400 hover:text-slate-300 mt-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                Add Work Order
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkOrderKanban;
