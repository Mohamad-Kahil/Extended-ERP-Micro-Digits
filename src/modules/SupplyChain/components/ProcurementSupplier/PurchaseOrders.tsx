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

interface PurchaseOrder {
  id: string;
  poNumber: string;
  vendor: string;
  orderDate: string;
  deliveryDate: string;
  items: number;
  totalAmount: number;
  status: "draft" | "sent" | "confirmed" | "received" | "cancelled";
}

interface PurchaseOrdersProps {
  searchTerm: string;
}

const purchaseOrders: PurchaseOrder[] = [
  {
    id: "1",
    poNumber: "PO-2023-0001",
    vendor: "Global Manufacturing Inc.",
    orderDate: "2023-06-15",
    deliveryDate: "2023-07-05",
    items: 12,
    totalAmount: 24500,
    status: "confirmed",
  },
  {
    id: "2",
    poNumber: "PO-2023-0002",
    vendor: "Tech Components Ltd.",
    orderDate: "2023-06-18",
    deliveryDate: "2023-07-10",
    items: 8,
    totalAmount: 15750,
    status: "sent",
  },
  {
    id: "3",
    poNumber: "PO-2023-0003",
    vendor: "Packaging Solutions Co.",
    orderDate: "2023-06-20",
    deliveryDate: "2023-07-01",
    items: 5,
    totalAmount: 8200,
    status: "confirmed",
  },
  {
    id: "4",
    poNumber: "PO-2023-0004",
    vendor: "Quality Chemical Supply",
    orderDate: "2023-06-22",
    deliveryDate: "2023-07-15",
    items: 3,
    totalAmount: 12800,
    status: "sent",
  },
  {
    id: "5",
    poNumber: "PO-2023-0005",
    vendor: "Precision Metals Corp.",
    orderDate: "2023-06-25",
    deliveryDate: "2023-07-20",
    items: 7,
    totalAmount: 18500,
    status: "draft",
  },
  {
    id: "6",
    poNumber: "PO-2023-0006",
    vendor: "Global Manufacturing Inc.",
    orderDate: "2023-06-10",
    deliveryDate: "2023-06-25",
    items: 10,
    totalAmount: 22000,
    status: "received",
  },
  {
    id: "7",
    poNumber: "PO-2023-0007",
    vendor: "EcoPackage Industries",
    orderDate: "2023-06-05",
    deliveryDate: "2023-06-20",
    items: 4,
    totalAmount: 6500,
    status: "cancelled",
  },
];

const PurchaseOrders = ({ searchTerm }: PurchaseOrdersProps) => {
  const [statusFilter, setStatusFilter] = React.useState("all");

  const filteredOrders = purchaseOrders.filter(
    (order) =>
      (statusFilter === "all" || order.status === statusFilter) &&
      (order.poNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.vendor.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const totalPendingAmount = purchaseOrders
    .filter((order) => order.status === "sent" || order.status === "confirmed")
    .reduce((sum, order) => sum + order.totalAmount, 0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Total Orders</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {purchaseOrders.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Pending Delivery
          </div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {
              purchaseOrders.filter(
                (o) => o.status === "sent" || o.status === "confirmed",
              ).length
            }
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Pending Amount
          </div>
          <div className="mt-1 text-2xl font-bold text-cyan-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalPendingAmount)}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="sent">Sent</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="received">Received</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">PO Number</TableHead>
              <TableHead className="text-slate-300">Vendor</TableHead>
              <TableHead className="text-slate-300">Order Date</TableHead>
              <TableHead className="text-slate-300">Delivery Date</TableHead>
              <TableHead className="text-slate-300">Items</TableHead>
              <TableHead className="text-right text-slate-300">
                Total Amount
              </TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {order.poNumber}
                </TableCell>
                <TableCell>{order.vendor}</TableCell>
                <TableCell>
                  {new Date(order.orderDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(order.deliveryDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(order.totalAmount)}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      order.status === "received"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : order.status === "confirmed"
                          ? "bg-blue-500/10 text-blue-500"
                          : order.status === "sent"
                            ? "bg-amber-500/10 text-amber-500"
                            : order.status === "draft"
                              ? "bg-slate-500/10 text-slate-500"
                              : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      <span className="sr-only">Download</span>
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

export default PurchaseOrders;
