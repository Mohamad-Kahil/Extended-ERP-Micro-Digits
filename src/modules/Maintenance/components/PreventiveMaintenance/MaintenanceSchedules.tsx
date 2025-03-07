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

interface MaintenanceSchedule {
  id: string;
  assetName: string;
  assetId: string;
  frequency: string;
  lastCompleted: string;
  nextDue: string;
  status: "Active" | "Inactive" | "Overdue" | "Due Soon";
  compliance: number;
}

interface MaintenanceSchedulesProps {
  searchTerm: string;
}

const schedules: MaintenanceSchedule[] = [
  {
    id: "PM-001",
    assetName: "HVAC System - Building A",
    assetId: "HVAC-001",
    frequency: "Monthly",
    lastCompleted: "2023-08-15",
    nextDue: "2023-09-15",
    status: "Due Soon",
    compliance: 100,
  },
  {
    id: "PM-002",
    assetName: "Conveyor Belt - Line 1",
    assetId: "CONV-001",
    frequency: "Weekly",
    lastCompleted: "2023-09-08",
    nextDue: "2023-09-15",
    status: "Due Soon",
    compliance: 100,
  },
  {
    id: "PM-003",
    assetName: "Forklift #5",
    assetId: "FL-005",
    frequency: "Quarterly",
    lastCompleted: "2023-06-20",
    nextDue: "2023-09-20",
    status: "Active",
    compliance: 100,
  },
  {
    id: "PM-004",
    assetName: "Electrical Panel - Main",
    assetId: "ELEC-001",
    frequency: "Annually",
    lastCompleted: "2023-01-15",
    nextDue: "2024-01-15",
    status: "Active",
    compliance: 100,
  },
  {
    id: "PM-005",
    assetName: "Air Compressor #2",
    assetId: "COMP-002",
    frequency: "Monthly",
    lastCompleted: "2023-08-05",
    nextDue: "2023-09-05",
    status: "Overdue",
    compliance: 92,
  },
  {
    id: "PM-006",
    assetName: "Boiler System",
    assetId: "BOIL-001",
    frequency: "Monthly",
    lastCompleted: "2023-08-12",
    nextDue: "2023-09-12",
    status: "Overdue",
    compliance: 95,
  },
  {
    id: "PM-007",
    assetName: "Packaging Machine #3",
    assetId: "PACK-003",
    frequency: "Bi-weekly",
    lastCompleted: "2023-09-01",
    nextDue: "2023-09-15",
    status: "Due Soon",
    compliance: 100,
  },
];

const MaintenanceSchedules = ({ searchTerm }: MaintenanceSchedulesProps) => {
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [frequencyFilter, setFrequencyFilter] = React.useState("all");

  const filteredSchedules = schedules.filter(
    (schedule) =>
      (statusFilter === "all" || schedule.status === statusFilter) &&
      (frequencyFilter === "all" || schedule.frequency === frequencyFilter) &&
      (schedule.assetName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.assetId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.id.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Get unique frequencies for filter
  const frequencies = [
    ...new Set(schedules.map((schedule) => schedule.frequency)),
  ];

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
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
              <SelectItem value="Overdue">Overdue</SelectItem>
              <SelectItem value="Due Soon">Due Soon</SelectItem>
            </SelectContent>
          </Select>

          <Select value={frequencyFilter} onValueChange={setFrequencyFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Frequencies</SelectItem>
              {frequencies.map((frequency) => (
                <SelectItem key={frequency} value={frequency}>
                  {frequency}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Schedule ID</TableHead>
              <TableHead className="text-slate-300">Asset</TableHead>
              <TableHead className="text-slate-300">Frequency</TableHead>
              <TableHead className="text-slate-300">Last Completed</TableHead>
              <TableHead className="text-slate-300">Next Due</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Compliance</TableHead>
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
                <TableCell>
                  <div>
                    <div className="text-slate-300">{schedule.assetName}</div>
                    <div className="text-xs text-slate-500">
                      {schedule.assetId}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{schedule.frequency}</TableCell>
                <TableCell>
                  {new Date(schedule.lastCompleted).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(schedule.nextDue).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      schedule.status === "Active"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : schedule.status === "Inactive"
                          ? "bg-slate-500/10 text-slate-500"
                          : schedule.status === "Overdue"
                            ? "bg-red-500/10 text-red-500"
                            : "bg-amber-500/10 text-amber-500"
                    }`}
                  >
                    {schedule.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-slate-700 rounded-full mr-2">
                      <div
                        className={`h-2 rounded-full ${
                          schedule.compliance >= 90
                            ? "bg-emerald-500"
                            : schedule.compliance >= 70
                              ? "bg-amber-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${schedule.compliance}%` }}
                      ></div>
                    </div>
                    <span className="text-xs">{schedule.compliance}%</span>
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
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <path d="M16 13H8" />
                        <path d="M16 17H8" />
                        <path d="M10 9H8" />
                      </svg>
                      <span className="sr-only">Generate Work Order</span>
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

export default MaintenanceSchedules;
