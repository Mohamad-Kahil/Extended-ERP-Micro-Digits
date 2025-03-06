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

interface StockTransfer {
  id: string;
  transferId: string;
  sourceStore: string;
  destinationStore: string;
  status: "pending" | "in-transit" | "completed" | "cancelled";
  priority: "normal" | "high" | "urgent";
  items: number;
  totalValue: number;
  createdDate: string;
  estimatedArrival: string;
  completedDate?: string;
}

const stockTransfers: StockTransfer[] = [
  {
    id: "1",
    transferId: "TRF-2023-0001",
    sourceStore: "Boston Downtown",
    destinationStore: "New York Midtown",
    status: "in-transit",
    priority: "normal",
    items: 15,
    totalValue: 4250.75,
    createdDate: "2023-07-01",
    estimatedArrival: "2023-07-05",
  },
  {
    id: "2",
    transferId: "TRF-2023-0002",
    sourceStore: "Chicago Michigan Ave",
    destinationStore: "Dallas Galleria",
    status: "pending",
    priority: "high",
    items: 28,
    totalValue: 8750.5,
    createdDate: "2023-07-02",
    estimatedArrival: "2023-07-07",
  },
  {
    id: "3",
    transferId: "TRF-2023-0003",
    sourceStore: "San Francisco Union Square",
    destinationStore: "Los Angeles Beverly",
    status: "completed",
    priority: "normal",
    items: 12,
    totalValue: 3150.25,
    createdDate: "2023-06-25",
    estimatedArrival: "2023-06-30",
    completedDate: "2023-06-29",
  },
  {
    id: "4",
    transferId: "TRF-2023-0004",
    sourceStore: "Atlanta Peachtree",
    destinationStore: "Dallas Galleria",
    status: "pending",
    priority: "urgent",
    items: 8,
    totalValue: 5200.0,
    createdDate: "2023-07-03",
    estimatedArrival: "2023-07-05",
  },
  {
    id: "5",
    transferId: "TRF-2023-0005",
    sourceStore: "New York Midtown",
    destinationStore: "Boston Downtown",
    status: "cancelled",
    priority: "normal",
    items: 20,
    totalValue: 6800.5,
    createdDate: "2023-06-28",
    estimatedArrival: "2023-07-03",
  },
  {
    id: "6",
    transferId: "TRF-2023-0006",
    sourceStore: "Seattle Downtown",
    destinationStore: "San Francisco Union Square",
    status: "in-transit",
    priority: "high",
    items: 18,
    totalValue: 4950.75,
    createdDate: "2023-07-01",
    estimatedArrival: "2023-07-06",
  },
];

interface TransferItem {
  id: string;
  transferId: string;
  sku: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  category: string;
}

const transferItems: TransferItem[] = [
  {
    id: "1",
    transferId: "TRF-2023-0001",
    sku: "SH-THM-001",
    productName: "Smart Thermostat Model A",
    quantity: 5,
    unitPrice: 129.99,
    totalPrice: 649.95,
    category: "Smart Home",
  },
  {
    id: "2",
    transferId: "TRF-2023-0001",
    sku: "SH-LCK-002",
    productName: "Smart Lock System",
    quantity: 3,
    unitPrice: 199.99,
    totalPrice: 599.97,
    category: "Smart Home",
  },
  {
    id: "3",
    transferId: "TRF-2023-0001",
    sku: "SEC-CAM-003",
    productName: "Security Camera Indoor",
    quantity: 7,
    unitPrice: 89.99,
    totalPrice: 629.93,
    category: "Security",
  },
  {
    id: "4",
    transferId: "TRF-2023-0002",
    sku: "SH-SPK-004",
    productName: "Smart Speaker Pro",
    quantity: 10,
    unitPrice: 149.99,
    totalPrice: 1499.9,
    category: "Smart Home",
  },
  {
    id: "5",
    transferId: "TRF-2023-0002",
    sku: "SH-HUB-005",
    productName: "Smart Home Hub",
    quantity: 8,
    unitPrice: 199.99,
    totalPrice: 1599.92,
    category: "Smart Home",
  },
  {
    id: "6",
    transferId: "TRF-2023-0002",
    sku: "SEC-ALM-006",
    productName: "Security Alarm System",
    quantity: 10,
    unitPrice: 299.99,
    totalPrice: 2999.9,
    category: "Security",
  },
];

const InterStoreTransfers = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [priorityFilter, setPriorityFilter] = React.useState("all");
  const [selectedTransfer, setSelectedTransfer] = React.useState<string | null>(
    null,
  );

  const filteredTransfers = stockTransfers.filter(
    (transfer) =>
      (statusFilter === "all" || transfer.status === statusFilter) &&
      (priorityFilter === "all" || transfer.priority === priorityFilter) &&
      (transfer.transferId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transfer.sourceStore.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transfer.destinationStore
          .toLowerCase()
          .includes(searchTerm.toLowerCase())),
  );

  const selectedTransferItems = selectedTransfer
    ? transferItems.filter((item) => item.transferId === selectedTransfer)
    : [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-blue-500/10 text-blue-500";
      case "in-transit":
        return "bg-amber-500/10 text-amber-500";
      case "completed":
        return "bg-emerald-500/10 text-emerald-500";
      case "cancelled":
        return "bg-red-500/10 text-red-500";
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
      case "urgent":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Transfers
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {stockTransfers.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">In Transit</div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {stockTransfers.filter((t) => t.status === "in-transit").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Pending Transfers
          </div>
          <div className="mt-1 text-2xl font-bold text-blue-500">
            {stockTransfers.filter((t) => t.status === "pending").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Urgent Transfers
          </div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {stockTransfers.filter((t) => t.priority === "urgent").length}
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
              placeholder="Search transfers..."
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
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
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
          New Transfer
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Transfer ID</TableHead>
              <TableHead className="text-slate-300">Source Store</TableHead>
              <TableHead className="text-slate-300">
                Destination Store
              </TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Priority</TableHead>
              <TableHead className="text-right text-slate-300">Items</TableHead>
              <TableHead className="text-right text-slate-300">
                Total Value
              </TableHead>
              <TableHead className="text-slate-300">Created Date</TableHead>
              <TableHead className="text-slate-300">Est. Arrival</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransfers.map((transfer) => (
              <TableRow
                key={transfer.id}
                className={`border-slate-800 ${selectedTransfer === transfer.transferId ? "bg-slate-800/50" : ""}`}
                onClick={() =>
                  setSelectedTransfer(
                    selectedTransfer === transfer.transferId
                      ? null
                      : transfer.transferId,
                  )
                }
              >
                <TableCell className="font-medium text-slate-300">
                  {transfer.transferId}
                </TableCell>
                <TableCell>{transfer.sourceStore}</TableCell>
                <TableCell>{transfer.destinationStore}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(transfer.status)}`}
                  >
                    {transfer.status.charAt(0).toUpperCase() +
                      transfer.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getPriorityColor(transfer.priority)}`}
                  >
                    {transfer.priority.charAt(0).toUpperCase() +
                      transfer.priority.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="text-right">{transfer.items}</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 2,
                  }).format(transfer.totalValue)}
                </TableCell>
                <TableCell>
                  {new Date(transfer.createdDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(transfer.estimatedArrival).toLocaleDateString()}
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

      {selectedTransfer && selectedTransferItems.length > 0 && (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Transfer Items - {selectedTransfer}
          </h3>
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">SKU</TableHead>
                  <TableHead className="text-slate-300">Product Name</TableHead>
                  <TableHead className="text-slate-300">Category</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Quantity
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Unit Price
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Total Price
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedTransferItems.map((item) => (
                  <TableRow key={item.id} className="border-slate-800">
                    <TableCell className="font-medium text-slate-300">
                      {item.sku}
                    </TableCell>
                    <TableCell>{item.productName}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell className="text-right">
                      {item.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 2,
                      }).format(item.unitPrice)}
                    </TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 2,
                      }).format(item.totalPrice)}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="border-slate-800 bg-slate-800/30">
                  <TableCell
                    colSpan={3}
                    className="text-right font-medium text-slate-300"
                  >
                    Total:
                  </TableCell>
                  <TableCell className="text-right font-medium text-slate-300">
                    {selectedTransferItems.reduce(
                      (sum, item) => sum + item.quantity,
                      0,
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right font-medium text-slate-300">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 2,
                    }).format(
                      selectedTransferItems.reduce(
                        (sum, item) => sum + item.totalPrice,
                        0,
                      ),
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterStoreTransfers;
