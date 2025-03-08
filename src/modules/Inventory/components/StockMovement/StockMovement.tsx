import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StockMovement {
  id: string;
  type: "Inbound" | "Outbound" | "Transfer";
  source: string;
  destination: string;
  productCount: number;
  status: "Completed" | "In Transit" | "Scheduled" | "Cancelled";
  date: string;
  reference: string;
}

const StockMovement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedMovement, setSelectedMovement] = useState<string | null>(null);

  const movements: StockMovement[] = [
    {
      id: "MOV-001",
      type: "Inbound",
      source: "Supplier: Tech Innovations Inc",
      destination: "Main Distribution Center",
      productCount: 250,
      status: "Completed",
      date: "2023-09-15",
      reference: "PO-78542",
    },
    {
      id: "MOV-002",
      type: "Outbound",
      source: "East Coast Fulfillment",
      destination: "Customer Order #12458",
      productCount: 12,
      status: "Completed",
      date: "2023-09-14",
      reference: "ORD-12458",
    },
    {
      id: "MOV-003",
      type: "Transfer",
      source: "Main Distribution Center",
      destination: "West Coast Fulfillment",
      productCount: 180,
      status: "In Transit",
      date: "2023-09-13",
      reference: "TRF-4521",
    },
    {
      id: "MOV-004",
      type: "Inbound",
      source: "Supplier: Office Furniture Co",
      destination: "Southern Distribution",
      productCount: 85,
      status: "Completed",
      date: "2023-09-12",
      reference: "PO-78543",
    },
    {
      id: "MOV-005",
      type: "Outbound",
      source: "West Coast Fulfillment",
      destination: "Customer Order #12459",
      productCount: 5,
      status: "Completed",
      date: "2023-09-11",
      reference: "ORD-12459",
    },
    {
      id: "MOV-006",
      type: "Transfer",
      source: "East Coast Fulfillment",
      destination: "Southern Distribution",
      productCount: 120,
      status: "Scheduled",
      date: "2023-09-18",
      reference: "TRF-4522",
    },
    {
      id: "MOV-007",
      type: "Inbound",
      source: "Supplier: Fashion Trends Ltd",
      destination: "Main Distribution Center",
      productCount: 320,
      status: "Scheduled",
      date: "2023-09-20",
      reference: "PO-78544",
    },
    {
      id: "MOV-008",
      type: "Outbound",
      source: "Southern Distribution",
      destination: "Customer Order #12460",
      productCount: 8,
      status: "Cancelled",
      date: "2023-09-10",
      reference: "ORD-12460",
    },
  ];

  const filteredMovements = movements.filter(
    (movement) =>
      (typeFilter === "all" || movement.type === typeFilter) &&
      (statusFilter === "all" || movement.status === statusFilter) &&
      (movement.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movement.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movement.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movement.reference.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const selectedMovementData = selectedMovement
    ? movements.find((movement) => movement.id === selectedMovement)
    : null;

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Inbound":
        return "bg-emerald-500/10 text-emerald-500";
      case "Outbound":
        return "bg-blue-500/10 text-blue-500";
      case "Transfer":
        return "bg-purple-500/10 text-purple-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-500/10 text-emerald-500";
      case "In Transit":
        return "bg-amber-500/10 text-amber-500";
      case "Scheduled":
        return "bg-blue-500/10 text-blue-500";
      case "Cancelled":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Stock Movement
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline">
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
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Export
            </Button>
            <Button className="bg-cyan-600 hover:bg-cyan-700">
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
              New Movement
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative w-64">
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
                placeholder="Search movements..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Movement Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Inbound">Inbound</SelectItem>
                <SelectItem value="Outbound">Outbound</SelectItem>
                <SelectItem value="Transfer">Transfer</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="In Transit">In Transit</SelectItem>
                <SelectItem value="Scheduled">Scheduled</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-md border border-slate-800">
              <Table>
                <TableHeader className="bg-slate-800">
                  <TableRow>
                    <TableHead className="text-slate-300">
                      Movement ID
                    </TableHead>
                    <TableHead className="text-slate-300">Type</TableHead>
                    <TableHead className="text-slate-300">
                      Source/Destination
                    </TableHead>
                    <TableHead className="text-slate-300">Date</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-right text-slate-300">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMovements.map((movement) => (
                    <TableRow
                      key={movement.id}
                      className={`border-slate-800 ${selectedMovement === movement.id ? "bg-slate-800/50" : ""}`}
                      onClick={() =>
                        setSelectedMovement(
                          selectedMovement === movement.id ? null : movement.id,
                        )
                      }
                    >
                      <TableCell className="font-medium text-slate-300">
                        {movement.id}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getTypeColor(movement.type)}`}
                        >
                          {movement.type}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="text-xs">
                          <div className="text-slate-300">
                            {movement.type === "Outbound" ? "From: " : "From: "}
                            {movement.source}
                          </div>
                          <div className="text-slate-400 mt-1">
                            {movement.type === "Outbound" ? "To: " : "To: "}
                            {movement.destination}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(movement.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(movement.status)}`}
                        >
                          {movement.status}
                        </span>
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
          </div>

          <div>
            {selectedMovementData ? (
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    Movement Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Movement ID
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedMovementData.id}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Reference
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedMovementData.reference}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Type
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getTypeColor(selectedMovementData.type)}`}
                        >
                          {selectedMovementData.type}
                        </span>
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Status
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(selectedMovementData.status)}`}
                        >
                          {selectedMovementData.status}
                        </span>
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Source
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedMovementData.source}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Destination
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedMovementData.destination}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">
                          Product Count
                        </h4>
                        <p className="mt-1 text-sm text-slate-300">
                          {selectedMovementData.productCount} items
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">
                          Date
                        </h4>
                        <p className="mt-1 text-sm text-slate-300">
                          {new Date(
                            selectedMovementData.date,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

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
                        Edit Movement
                      </Button>
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
                          className="mr-2"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        Export Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="flex h-[400px] items-center justify-center p-6">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-4 text-slate-600"
                    >
                      <circle cx="16" cy="19" r="2" />
                      <circle cx="6" cy="19" r="2" />
                      <path d="M10 17H4V5h12v12h-2" />
                      <path d="m17 5 4 5h-4" />
                    </svg>
                    <h3 className="mb-1 text-lg font-medium text-slate-400">
                      Select a movement
                    </h3>
                    <p className="text-sm text-slate-500">
                      Click on a movement to view detailed information
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockMovement;
