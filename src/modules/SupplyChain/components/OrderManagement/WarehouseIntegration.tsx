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

interface Warehouse {
  id: string;
  name: string;
  location: string;
  type: "owned" | "3pl" | "partner";
  integrationStatus: "connected" | "syncing" | "error" | "offline";
  lastSync: string;
  inventoryCount: number;
  utilizationRate: number;
}

interface WarehouseIntegrationProps {
  searchTerm: string;
}

const warehouses: Warehouse[] = [
  {
    id: "1",
    name: "Main Distribution Center",
    location: "Chicago, IL",
    type: "owned",
    integrationStatus: "connected",
    lastSync: "2023-09-28T14:30:00",
    inventoryCount: 12500,
    utilizationRate: 78,
  },
  {
    id: "2",
    name: "West Coast Fulfillment",
    location: "Los Angeles, CA",
    type: "owned",
    integrationStatus: "syncing",
    lastSync: "2023-09-28T13:45:00",
    inventoryCount: 8750,
    utilizationRate: 65,
  },
  {
    id: "3",
    name: "East Coast Storage",
    location: "Newark, NJ",
    type: "owned",
    integrationStatus: "connected",
    lastSync: "2023-09-28T12:15:00",
    inventoryCount: 9250,
    utilizationRate: 72,
  },
  {
    id: "4",
    name: "Southern Distribution",
    location: "Atlanta, GA",
    type: "3pl",
    integrationStatus: "connected",
    lastSync: "2023-09-28T11:30:00",
    inventoryCount: 5500,
    utilizationRate: 58,
  },
  {
    id: "5",
    name: "Midwest Logistics Center",
    location: "Indianapolis, IN",
    type: "3pl",
    integrationStatus: "error",
    lastSync: "2023-09-27T16:45:00",
    inventoryCount: 7250,
    utilizationRate: 62,
  },
  {
    id: "6",
    name: "International Hub",
    location: "Miami, FL",
    type: "partner",
    integrationStatus: "offline",
    lastSync: "2023-09-25T09:30:00",
    inventoryCount: 4500,
    utilizationRate: 45,
  },
  {
    id: "7",
    name: "Northwest Facility",
    location: "Seattle, WA",
    type: "partner",
    integrationStatus: "connected",
    lastSync: "2023-09-28T10:15:00",
    inventoryCount: 6250,
    utilizationRate: 55,
  },
];

const WarehouseIntegration = ({ searchTerm }: WarehouseIntegrationProps) => {
  const [typeFilter, setTypeFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const filteredWarehouses = warehouses.filter(
    (warehouse) =>
      (typeFilter === "all" || warehouse.type === typeFilter) &&
      (statusFilter === "all" ||
        warehouse.integrationStatus === statusFilter) &&
      (warehouse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        warehouse.location.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
        return "bg-emerald-500/10 text-emerald-500";
      case "syncing":
        return "bg-blue-500/10 text-blue-500";
      case "error":
        return "bg-red-500/10 text-red-500";
      case "offline":
        return "bg-slate-500/10 text-slate-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "owned":
        return "Company Owned";
      case "3pl":
        return "3PL";
      case "partner":
        return "Partner";
      default:
        return type;
    }
  };

  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString();
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Warehouses
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {warehouses.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Connected Warehouses
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {
              warehouses.filter((w) => w.integrationStatus === "connected")
                .length
            }
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Inventory
          </div>
          <div className="mt-1 text-2xl font-bold text-cyan-500">
            {warehouses
              .reduce((sum, w) => sum + w.inventoryCount, 0)
              .toLocaleString()}{" "}
            units
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="owned">Company Owned</SelectItem>
              <SelectItem value="3pl">3PL</SelectItem>
              <SelectItem value="partner">Partner</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="connected">Connected</SelectItem>
              <SelectItem value="syncing">Syncing</SelectItem>
              <SelectItem value="error">Error</SelectItem>
              <SelectItem value="offline">Offline</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Warehouse Name</TableHead>
              <TableHead className="text-slate-300">Location</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Last Sync</TableHead>
              <TableHead className="text-right text-slate-300">
                Inventory Count
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Utilization
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredWarehouses.map((warehouse) => (
              <TableRow key={warehouse.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {warehouse.name}
                </TableCell>
                <TableCell>{warehouse.location}</TableCell>
                <TableCell>{getTypeLabel(warehouse.type)}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(warehouse.integrationStatus)}`}
                  >
                    {warehouse.integrationStatus.charAt(0).toUpperCase() +
                      warehouse.integrationStatus.slice(1)}
                  </span>
                </TableCell>
                <TableCell>{formatDateTime(warehouse.lastSync)}</TableCell>
                <TableCell className="text-right">
                  {warehouse.inventoryCount.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <div className="w-24 rounded-full bg-slate-700">
                      <div
                        className={`h-2 rounded-full ${warehouse.utilizationRate > 90 ? "bg-red-500" : warehouse.utilizationRate > 75 ? "bg-amber-500" : "bg-emerald-500"}`}
                        style={{
                          width: `${warehouse.utilizationRate}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-xs">
                      {warehouse.utilizationRate}%
                    </span>
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
                        className="h-4 w-4 text-blue-500"
                      >
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                        <line x1="16" x2="22" y1="5" y2="5" />
                        <line x1="19" x2="19" y1="2" y2="8" />
                      </svg>
                      <span className="sr-only">Sync Now</span>
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

export default WarehouseIntegration;
