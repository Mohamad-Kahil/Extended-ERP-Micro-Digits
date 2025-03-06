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

interface Order {
  id: string;
  orderNumber: string;
  customer: string;
  date: string;
  total: number;
  status:
    | "pending"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled"
    | "refunded";
  paymentStatus: "paid" | "pending" | "failed" | "refunded";
  items: number;
  shippingMethod: string;
}

const orders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2023-1001",
    customer: "John Smith",
    date: "2023-09-28",
    total: 149.99,
    status: "delivered",
    paymentStatus: "paid",
    items: 2,
    shippingMethod: "Express",
  },
  {
    id: "2",
    orderNumber: "ORD-2023-1002",
    customer: "Emily Johnson",
    date: "2023-09-28",
    total: 89.95,
    status: "processing",
    paymentStatus: "paid",
    items: 1,
    shippingMethod: "Standard",
  },
  {
    id: "3",
    orderNumber: "ORD-2023-1003",
    customer: "Michael Brown",
    date: "2023-09-27",
    total: 245.5,
    status: "shipped",
    paymentStatus: "paid",
    items: 3,
    shippingMethod: "Express",
  },
  {
    id: "4",
    orderNumber: "ORD-2023-1004",
    customer: "Sarah Wilson",
    date: "2023-09-27",
    total: 59.99,
    status: "pending",
    paymentStatus: "pending",
    items: 1,
    shippingMethod: "Standard",
  },
  {
    id: "5",
    orderNumber: "ORD-2023-1005",
    customer: "David Lee",
    date: "2023-09-26",
    total: 129.99,
    status: "cancelled",
    paymentStatus: "refunded",
    items: 1,
    shippingMethod: "Express",
  },
  {
    id: "6",
    orderNumber: "ORD-2023-1006",
    customer: "Jennifer Martinez",
    date: "2023-09-26",
    total: 324.75,
    status: "delivered",
    paymentStatus: "paid",
    items: 4,
    shippingMethod: "Standard",
  },
  {
    id: "7",
    orderNumber: "ORD-2023-1007",
    customer: "Robert Taylor",
    date: "2023-09-25",
    total: 79.99,
    status: "shipped",
    paymentStatus: "paid",
    items: 1,
    shippingMethod: "Standard",
  },
  {
    id: "8",
    orderNumber: "ORD-2023-1008",
    customer: "Lisa Anderson",
    date: "2023-09-25",
    total: 189.95,
    status: "processing",
    paymentStatus: "paid",
    items: 2,
    shippingMethod: "Express",
  },
  {
    id: "9",
    orderNumber: "ORD-2023-1009",
    customer: "James Wilson",
    date: "2023-09-24",
    total: 45.5,
    status: "delivered",
    paymentStatus: "paid",
    items: 1,
    shippingMethod: "Standard",
  },
  {
    id: "10",
    orderNumber: "ORD-2023-1010",
    customer: "Patricia Moore",
    date: "2023-09-24",
    total: 299.99,
    status: "refunded",
    paymentStatus: "refunded",
    items: 1,
    shippingMethod: "Express",
  },
];

const OrderManagement = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [paymentFilter, setPaymentFilter] = React.useState("all");

  const filteredOrders = orders.filter(
    (order) =>
      (statusFilter === "all" || order.status === statusFilter) &&
      (paymentFilter === "all" || order.paymentStatus === paymentFilter) &&
      (order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-amber-500/10 text-amber-500";
      case "processing":
        return "bg-blue-500/10 text-blue-500";
      case "shipped":
        return "bg-purple-500/10 text-purple-500";
      case "delivered":
        return "bg-emerald-500/10 text-emerald-500";
      case "cancelled":
        return "bg-red-500/10 text-red-500";
      case "refunded":
        return "bg-slate-500/10 text-slate-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-emerald-500/10 text-emerald-500";
      case "pending":
        return "bg-amber-500/10 text-amber-500";
      case "failed":
        return "bg-red-500/10 text-red-500";
      case "refunded":
        return "bg-slate-500/10 text-slate-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  // Calculate statistics
  const pendingOrders = orders.filter(
    (order) => order.status === "pending",
  ).length;
  const processingOrders = orders.filter(
    (order) => order.status === "processing",
  ).length;
  const shippedOrders = orders.filter(
    (order) => order.status === "shipped",
  ).length;
  const deliveredOrders = orders.filter(
    (order) => order.status === "delivered",
  ).length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Total Orders</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {orders.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Pending</div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {pendingOrders}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Processing</div>
          <div className="mt-1 text-2xl font-bold text-blue-500">
            {processingOrders}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Shipped</div>
          <div className="mt-1 text-2xl font-bold text-purple-500">
            {shippedOrders}
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
              placeholder="Search orders..."
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
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
              <SelectItem value="refunded">Refunded</SelectItem>
            </SelectContent>
          </Select>
          <Select value={paymentFilter} onValueChange={setPaymentFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Payment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Payments</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
              <SelectItem value="refunded">Refunded</SelectItem>
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
          Create Order
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Order Number</TableHead>
              <TableHead className="text-slate-300">Customer</TableHead>
              <TableHead className="text-slate-300">Date</TableHead>
              <TableHead className="text-right text-slate-300">Total</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Payment</TableHead>
              <TableHead className="text-right text-slate-300">Items</TableHead>
              <TableHead className="text-slate-300">Shipping</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {order.orderNumber}
                </TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>
                  {new Date(order.date).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  ${order.total.toFixed(2)}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(order.status)}`}
                  >
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getPaymentStatusColor(order.paymentStatus)}`}
                  >
                    {order.paymentStatus.charAt(0).toUpperCase() +
                      order.paymentStatus.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="text-right">{order.items}</TableCell>
                <TableCell>{order.shippingMethod}</TableCell>
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
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <span className="sr-only">View Details</span>
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
                        className="h-4 w-4 text-emerald-500"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      <span className="sr-only">Download Invoice</span>
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

export default OrderManagement;
