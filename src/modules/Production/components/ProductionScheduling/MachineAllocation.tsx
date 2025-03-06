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

interface Machine {
  id: string;
  name: string;
  type: string;
  status: "operational" | "maintenance" | "offline";
  currentJob: string | null;
  efficiency: number;
  nextMaintenance: string;
  operator: string | null;
}

const machines: Machine[] = [
  {
    id: "1",
    name: "CNC Machine A1",
    type: "CNC",
    status: "operational",
    currentJob: "WO-2023-0001",
    efficiency: 92,
    nextMaintenance: "2023-07-15",
    operator: "John Smith",
  },
  {
    id: "2",
    name: "Assembly Line B2",
    type: "Assembly",
    status: "operational",
    currentJob: "WO-2023-0004",
    efficiency: 88,
    nextMaintenance: "2023-07-10",
    operator: "Sarah Johnson",
  },
  {
    id: "3",
    name: "Injection Molder C3",
    type: "Molding",
    status: "maintenance",
    currentJob: null,
    efficiency: 0,
    nextMaintenance: "2023-06-30",
    operator: null,
  },
  {
    id: "4",
    name: "PCB Printer D4",
    type: "Electronics",
    status: "operational",
    currentJob: "WO-2023-0002",
    efficiency: 95,
    nextMaintenance: "2023-08-05",
    operator: "Michael Brown",
  },
  {
    id: "5",
    name: "Packaging Line E5",
    type: "Packaging",
    status: "offline",
    currentJob: null,
    efficiency: 0,
    nextMaintenance: "2023-07-01",
    operator: null,
  },
  {
    id: "6",
    name: "Testing Station F6",
    type: "Quality",
    status: "operational",
    currentJob: "WO-2023-0001",
    efficiency: 90,
    nextMaintenance: "2023-07-20",
    operator: "Emily Davis",
  },
  {
    id: "7",
    name: "CNC Machine A2",
    type: "CNC",
    status: "operational",
    currentJob: null,
    efficiency: 87,
    nextMaintenance: "2023-07-05",
    operator: "Robert Wilson",
  },
];

interface LaborAllocation {
  id: string;
  team: string;
  members: number;
  shift: "morning" | "afternoon" | "night";
  assignedTo: string | null;
  startTime: string;
  endTime: string;
  status: "active" | "standby" | "off-duty";
}

const laborAllocations: LaborAllocation[] = [
  {
    id: "1",
    team: "Production Team A",
    members: 8,
    shift: "morning",
    assignedTo: "WO-2023-0001",
    startTime: "07:00",
    endTime: "15:00",
    status: "active",
  },
  {
    id: "2",
    team: "Production Team B",
    members: 6,
    shift: "morning",
    assignedTo: "WO-2023-0002",
    startTime: "07:00",
    endTime: "15:00",
    status: "active",
  },
  {
    id: "3",
    team: "Production Team C",
    members: 7,
    shift: "afternoon",
    assignedTo: "WO-2023-0004",
    startTime: "15:00",
    endTime: "23:00",
    status: "standby",
  },
  {
    id: "4",
    team: "Production Team D",
    members: 5,
    shift: "night",
    assignedTo: null,
    startTime: "23:00",
    endTime: "07:00",
    status: "off-duty",
  },
];

const MachineAllocation = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [activeTab, setActiveTab] = React.useState<"machines" | "labor">(
    "machines",
  );

  const filteredMachines = machines.filter(
    (machine) =>
      (statusFilter === "all" || machine.status === statusFilter) &&
      (machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        machine.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (machine.operator &&
          machine.operator.toLowerCase().includes(searchTerm.toLowerCase()))),
  );

  const filteredLabor = laborAllocations.filter(
    (labor) =>
      (statusFilter === "all" || labor.status === statusFilter) &&
      (labor.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (labor.assignedTo &&
          labor.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()))),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
      case "active":
        return "bg-emerald-500/10 text-emerald-500";
      case "maintenance":
      case "standby":
        return "bg-amber-500/10 text-amber-500";
      case "offline":
      case "off-duty":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-2 border-b border-slate-800">
        <Button
          variant="ghost"
          className={`rounded-none border-b-2 px-4 py-2 ${activeTab === "machines" ? "border-cyan-500 text-cyan-500" : "border-transparent"}`}
          onClick={() => setActiveTab("machines")}
        >
          Machines
        </Button>
        <Button
          variant="ghost"
          className={`rounded-none border-b-2 px-4 py-2 ${activeTab === "labor" ? "border-cyan-500 text-cyan-500" : "border-transparent"}`}
          onClick={() => setActiveTab("labor")}
        >
          Labor Teams
        </Button>
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
              placeholder={`Search ${activeTab === "machines" ? "machines" : "labor teams"}...`}
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
              {activeTab === "machines" ? (
                <>
                  <SelectItem value="operational">Operational</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                </>
              ) : (
                <>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="standby">Standby</SelectItem>
                  <SelectItem value="off-duty">Off Duty</SelectItem>
                </>
              )}
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
          {activeTab === "machines" ? "Add Machine" : "Add Labor Team"}
        </Button>
      </div>

      {activeTab === "machines" ? (
        <div className="rounded-md border border-slate-800">
          <Table>
            <TableHeader className="bg-slate-800">
              <TableRow>
                <TableHead className="text-slate-300">Machine Name</TableHead>
                <TableHead className="text-slate-300">Type</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Current Job</TableHead>
                <TableHead className="text-right text-slate-300">
                  Efficiency
                </TableHead>
                <TableHead className="text-slate-300">
                  Next Maintenance
                </TableHead>
                <TableHead className="text-slate-300">Operator</TableHead>
                <TableHead className="text-right text-slate-300">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMachines.map((machine) => (
                <TableRow key={machine.id} className="border-slate-800">
                  <TableCell className="font-medium text-slate-300">
                    {machine.name}
                  </TableCell>
                  <TableCell>{machine.type}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(machine.status)}`}
                    >
                      {machine.status.charAt(0).toUpperCase() +
                        machine.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>
                    {machine.currentJob ? machine.currentJob : "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    {machine.status === "operational" ? (
                      <div className="flex items-center justify-end space-x-2">
                        <div className="w-16 rounded-full bg-slate-700">
                          <div
                            className={`h-2 rounded-full ${machine.efficiency >= 90 ? "bg-emerald-500" : machine.efficiency >= 75 ? "bg-amber-500" : "bg-red-500"}`}
                            style={{ width: `${machine.efficiency}%` }}
                          ></div>
                        </div>
                        <span className="text-xs">{machine.efficiency}%</span>
                      </div>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell>
                    {new Date(machine.nextMaintenance).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{machine.operator || "-"}</TableCell>
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
                          <path d="m15 9-6 6" />
                          <path d="m9 9 6 6" />
                        </svg>
                        <span className="sr-only">Assign</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="rounded-md border border-slate-800">
          <Table>
            <TableHeader className="bg-slate-800">
              <TableRow>
                <TableHead className="text-slate-300">Team</TableHead>
                <TableHead className="text-right text-slate-300">
                  Members
                </TableHead>
                <TableHead className="text-slate-300">Shift</TableHead>
                <TableHead className="text-slate-300">Assigned To</TableHead>
                <TableHead className="text-slate-300">Hours</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-right text-slate-300">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLabor.map((labor) => (
                <TableRow key={labor.id} className="border-slate-800">
                  <TableCell className="font-medium text-slate-300">
                    {labor.team}
                  </TableCell>
                  <TableCell className="text-right">{labor.members}</TableCell>
                  <TableCell>
                    {labor.shift.charAt(0).toUpperCase() + labor.shift.slice(1)}
                  </TableCell>
                  <TableCell>{labor.assignedTo || "-"}</TableCell>
                  <TableCell>
                    {labor.startTime} - {labor.endTime}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(labor.status)}`}
                    >
                      {labor.status
                        .split("-")
                        .map(
                          (word) =>
                            word.charAt(0).toUpperCase() + word.slice(1),
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
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                          <path d="m15 9-6 6" />
                          <path d="m9 9 6 6" />
                        </svg>
                        <span className="sr-only">Assign</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default MachineAllocation;
