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

interface Order {
  id: string;
  orderNumber: string;
  product: string;
  quantity: number;
  suppliers: {
    name: string;
    status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
    deliveryDate: string;
  }[];
  totalValue: number;
  createdDate: string;
  priority: "low" | "medium" | "high" | "critical";
}

interface MultiSupplierOrdersProps {
  searchTerm: string;
}

const orders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2023-0001",
    product: "Circuit Board A1",
    quantity: 500,
    suppliers: [
      {
        name: "Tech Components Ltd.",
        status: "confirmed",
        deliveryDate: "2023-07-15",
      },
      {
        name: "Global Electronics Inc.",
        status: "pending",
        deliveryDate: "2023-07-20",
      },
    ],
    totalValue: 62500,
    createdDate: "2023-06-15",
    priority: "high",
  },
  {
    id: "2",
    orderNumber: "ORD-2023-0002",
    product: "Aluminum Sheet 2mm",
    quantity: 1000,
    suppliers: [
      {
        name: "Global Manufacturing Inc.",
        status: "shipped",
        deliveryDate: "2023-07-05",
      },
      {
        name: "Precision Metals Corp.",
        status: "confirmed",
        deliveryDate: "2023-07-10",
      },
    ],
    totalValue: 45750,
    createdDate: "2023-06-10",
    priority: "medium",
  },
  {
    id: "3",
    orderNumber: "ORD-2023-0003",
    product: "Power Supply Unit",
    quantity: 300,
    suppliers: [
      {
        name: "Tech Components Ltd.",
        status: "delivered",
        deliveryDate: "2023-06-25",
      },
    ],
    totalValue: 28575,
    createdDate: "2023-06-05",
    priority: "low",
  },
  {
    id: "4",
    orderNumber: "ORD-2023-0004",
    product: "Industrial Solvent",
    quantity: 50,
    suppliers: [
      {
        name: "Quality Chemical Supply",
        status: "cancelled",
        deliveryDate: "2023-06-30",
      },
      {
        name: "Industrial Chemicals Co.",
        status: "confirmed",
        deliveryDate: "2023-07-08",
      },
    ],
    totalValue: 3250,
    createdDate: "2023-06-12",
    priority: "medium",
  },
  {
    id: "5",
    orderNumber: "ORD-2023-0005",
    product: "Cardboard Box Large",
    quantity: 2000,
    suppliers: [
      {
        name: "Packaging Solutions Co.",
        status: "confirmed",
        deliveryDate: "2023-07-01",
      },
      {
        name: "EcoPackage Industries",
        status: "pending",
        deliveryDate: "2023-07-05",
      },
    ],
    totalValue: 5500,
    createdDate: "2023-06-20",
    priority: "critical",
  },
];

const MultiSupplierOrders = ({ searchTerm }: MultiSupplierOrdersProps) => {
  const [priorityFilter, setPriorityFilter] = React.useState("all");

  const filteredOrders = orders.filter(
    (order) =>
      (priorityFilter === "all" || order.priority === priorityFilter) &&
      (order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.suppliers.some((s) =>
          s.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-500/10 text-blue-500";
      case "shipped":
        return "bg-amber-500/10 text-amber-500";
      case "delivered":
        return "bg-emerald-500/10 text-emerald-500";
      case "cancelled":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "bg-slate-500/10 text-slate-500";
      case "medium":
        return "bg-blue-500/10 text-blue-500";
      case "high":
        return "bg-amber-500/10 text-amber-500";
      case "critical":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Order #</TableHead>
              <TableHead className="text-slate-300">Product</TableHead>
              <TableHead className="text-slate-300">Quantity</TableHead>
              <TableHead className="text-slate-300">Suppliers</TableHead>
              <TableHead className="text-right text-slate-300">
                Total Value
              </TableHead>
              <TableHead className="text-slate-300">Created</TableHead>
              <TableHead className="text-slate-300">Priority</TableHead>
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
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    {order.suppliers.map((supplier, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="text-slate-300">{supplier.name}</span>
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${getStatusColor(supplier.status)}`}
                        >
                          {supplier.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(order.totalValue)}
                </TableCell>
                <TableCell>
                  {new Date(order.createdDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getPriorityColor(order.priority)}`}
                  >
                    {order.priority.charAt(0).toUpperCase() +
                      order.priority.slice(1)}
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

export default MultiSupplierOrders;
