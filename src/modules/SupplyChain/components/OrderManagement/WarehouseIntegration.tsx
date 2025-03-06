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

interface Warehouse {
  id: string;
  name: string;
  location: string;
  status: "online" | "offline" | "maintenance";
  capacity: number;
  utilization: number;
  lastSync: string;
}

const warehouses: Warehouse[] = [
  {
    id: "1",
    name: "Warehouse A",
    location: "Chicago, IL",
    status: "online",
    capacity: 10000,
    utilization: 7500,
    lastSync: "2023-06-28T09:15:32",
  },
  {
    id: "2",
    name: "Warehouse B",
    location: "Dallas, TX",
    status: "online",
    capacity: 15000,
    utilization: 9200,
    lastSync: "2023-06-28T09:10:15",
  },
  {
    id: "3",
    name: "Warehouse C",
    location: "Atlanta, GA",
    status: "maintenance",
    capacity: 8000,
    utilization: 4500,
    lastSync: "2023-06-27T16:45:22",
  },
  {
    id: "4",
    name: "Warehouse D",
    location: "Los Angeles, CA",
    status: "online",
    capacity: 12000,
    utilization: 10800,
    lastSync: "2023-06-28T09:05:47",
  },
  {
    id: "5",
    name: "Warehouse E",
    location: "Seattle, WA",
    status: "offline",
    capacity: 7500,
    utilization: 6000,
    lastSync: "2023-06-27T14:30:10",
  },
];

interface Transfer {
  id: string;
  sourceWarehouse: string;
  destinationWarehouse: string;
  items: number;
  status: "pending" | "in-transit" | "completed" | "cancelled";
  createdDate: string;
  estimatedArrival: string;
}

const transfers: Transfer[] = [
  {
    id: "1",
    sourceWarehouse: "Warehouse A",
    destinationWarehouse: "Warehouse B",
    items: 15,
    status: "in-transit",
    createdDate: "2023-06-25",
    estimatedArrival: "2023-06-30",
  },
  {
    id: "2",
    sourceWarehouse: "Warehouse B",
    destinationWarehouse: "Warehouse C",
    items: 8,
    status: "pending",
    createdDate: "2023-06-27",
    estimatedArrival: "2023-07-02",
  },
  {
    id: "3",
    sourceWarehouse: "Warehouse D",
    destinationWarehouse: "Warehouse A",
    items: 12,
    status: "completed",
    createdDate: "2023-06-20",
    estimatedArrival: "2023-06-25",
  },
  {
    id: "4",
    sourceWarehouse: "Warehouse C",
    destinationWarehouse: "Warehouse E",
    items: 5,
    status: "cancelled",
    createdDate: "2023-06-22",
    estimatedArrival: "2023-06-27",
  },
];

const WarehouseIntegration = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const filteredWarehouses = warehouses.filter(
    (warehouse) =>
      warehouse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      warehouse.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredTransfers = transfers.filter(
    (transfer) =>
      (statusFilter === "all" || transfer.status === statusFilter) &&
      (transfer.sourceWarehouse
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        transfer.destinationWarehouse
          .toLowerCase()
          .includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-emerald-500/10 text-emerald-500";
      case "offline":
        return "bg-red-500/10 text-red-500";
      case "maintenance":
        return "bg-amber-500/10 text-amber-500";
      case "in-transit":
        return "bg-blue-500/10 text-blue-500";
      case "pending":
        return "bg-slate-500/10 text-slate-500";
      case "completed":
        return "bg-emerald-500/10 text-emerald-500";
      case "cancelled":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
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
            placeholder="Search warehouses or transfers..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
            Add Warehouse
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
              <path d="M17 3v10" />
              <path d="m12 8 5-5 5 5" />
              <path d="M7 21V11" />
              <path d="m2 16 5 5 5-5" />
            </svg>
            Create Transfer
          </Button>
        </div>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">Warehouses</h3>
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Name</TableHead>
                  <TableHead className="text-slate-300">Location</TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Capacity
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Utilization
                  </TableHead>
                  <TableHead className="text-slate-300">Last Sync</TableHead>
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
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(warehouse.status)}`}
                      >
                        {warehouse.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {warehouse.capacity} units
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <div className="w-24 rounded-full bg-slate-700">
                          <div
                            className={`h-2 rounded-full ${warehouse.utilization / warehouse.capacity > 0.9 ? "bg-red-500" : "bg-emerald-500"}`}
                            style={{
                              width: `${(warehouse.utilization / warehouse.capacity) * 100}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-xs">
                          {Math.round(
                            (warehouse.utilization / warehouse.capacity) * 100,
                          )}
                          %
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(warehouse.lastSync).toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
        </CardContent>
      </Card>

      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">
              Inventory Transfers
            </h3>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-transit">In Transit</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Source</TableHead>
                  <TableHead className="text-slate-300">Destination</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Items
                  </TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                  <TableHead className="text-slate-300">Created</TableHead>
                  <TableHead className="text-slate-300">Est. Arrival</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransfers.map((transfer) => (
                  <TableRow key={transfer.id} className="border-slate-800">
                    <TableCell className="font-medium text-slate-300">
                      {transfer.sourceWarehouse}
                    </TableCell>
                    <TableCell>{transfer.destinationWarehouse}</TableCell>
                    <TableCell className="text-right">
                      {transfer.items}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(transfer.status)}`}
                      >
                        {transfer.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      {new Date(transfer.createdDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {new Date(transfer.estimatedArrival).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
                        {transfer.status === "pending" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
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
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                            <span className="sr-only">Cancel</span>
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WarehouseIntegration;
