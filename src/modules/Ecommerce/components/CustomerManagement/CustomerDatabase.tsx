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

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "active" | "inactive" | "new";
  segment: "regular" | "vip" | "at-risk" | "new";
  totalSpent: number;
  orders: number;
  lastOrder: string;
  joinDate: string;
  avatar: string;
}

const customers: Customer[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    status: "active",
    segment: "vip",
    totalSpent: 1245.89,
    orders: 12,
    lastOrder: "2023-09-25",
    joinDate: "2022-03-15",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  },
  {
    id: "2",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    phone: "(555) 234-5678",
    status: "active",
    segment: "regular",
    totalSpent: 567.5,
    orders: 5,
    lastOrder: "2023-09-18",
    joinDate: "2022-06-22",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "(555) 345-6789",
    status: "inactive",
    segment: "at-risk",
    totalSpent: 320.75,
    orders: 3,
    lastOrder: "2023-06-10",
    joinDate: "2022-05-05",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah.w@example.com",
    phone: "(555) 456-7890",
    status: "new",
    segment: "new",
    totalSpent: 89.99,
    orders: 1,
    lastOrder: "2023-09-27",
    joinDate: "2023-09-20",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    id: "5",
    name: "David Lee",
    email: "david.lee@example.com",
    phone: "(555) 567-8901",
    status: "active",
    segment: "vip",
    totalSpent: 2150.25,
    orders: 18,
    lastOrder: "2023-09-26",
    joinDate: "2022-01-10",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
  },
  {
    id: "6",
    name: "Jennifer Martinez",
    email: "jennifer.m@example.com",
    phone: "(555) 678-9012",
    status: "active",
    segment: "regular",
    totalSpent: 745.3,
    orders: 7,
    lastOrder: "2023-09-15",
    joinDate: "2022-08-05",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer",
  },
  {
    id: "7",
    name: "Robert Taylor",
    email: "robert.t@example.com",
    phone: "(555) 789-0123",
    status: "inactive",
    segment: "at-risk",
    totalSpent: 210.45,
    orders: 2,
    lastOrder: "2023-05-20",
    joinDate: "2022-07-15",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
  },
  {
    id: "8",
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    phone: "(555) 890-1234",
    status: "active",
    segment: "regular",
    totalSpent: 495.75,
    orders: 4,
    lastOrder: "2023-09-05",
    joinDate: "2022-09-30",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
  },
  {
    id: "9",
    name: "James Wilson",
    email: "james.w@example.com",
    phone: "(555) 901-2345",
    status: "new",
    segment: "new",
    totalSpent: 125.5,
    orders: 1,
    lastOrder: "2023-09-24",
    joinDate: "2023-09-15",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
  },
  {
    id: "10",
    name: "Patricia Moore",
    email: "patricia.m@example.com",
    phone: "(555) 012-3456",
    status: "active",
    segment: "vip",
    totalSpent: 1875.6,
    orders: 15,
    lastOrder: "2023-09-22",
    joinDate: "2022-02-20",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=patricia",
  },
];

const CustomerDatabase = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [segmentFilter, setSegmentFilter] = React.useState("all");

  const filteredCustomers = customers.filter(
    (customer) =>
      (statusFilter === "all" || customer.status === statusFilter) &&
      (segmentFilter === "all" || customer.segment === segmentFilter) &&
      (customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm)),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500/10 text-emerald-500";
      case "inactive":
        return "bg-slate-500/10 text-slate-500";
      case "new":
        return "bg-blue-500/10 text-blue-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getSegmentColor = (segment: string) => {
    switch (segment) {
      case "vip":
        return "bg-purple-500/10 text-purple-500";
      case "regular":
        return "bg-blue-500/10 text-blue-500";
      case "at-risk":
        return "bg-amber-500/10 text-amber-500";
      case "new":
        return "bg-emerald-500/10 text-emerald-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  // Calculate statistics
  const activeCustomers = customers.filter(
    (customer) => customer.status === "active",
  ).length;
  const newCustomers = customers.filter(
    (customer) => customer.status === "new",
  ).length;
  const vipCustomers = customers.filter(
    (customer) => customer.segment === "vip",
  ).length;
  const atRiskCustomers = customers.filter(
    (customer) => customer.segment === "at-risk",
  ).length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Customers
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {customers.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Active Customers
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {activeCustomers}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            New Customers
          </div>
          <div className="mt-1 text-2xl font-bold text-blue-500">
            {newCustomers}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            VIP Customers
          </div>
          <div className="mt-1 text-2xl font-bold text-purple-500">
            {vipCustomers}
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
              placeholder="Search customers..."
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
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="new">New</SelectItem>
            </SelectContent>
          </Select>
          <Select value={segmentFilter} onValueChange={setSegmentFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Segment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Segments</SelectItem>
              <SelectItem value="vip">VIP</SelectItem>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="at-risk">At Risk</SelectItem>
              <SelectItem value="new">New</SelectItem>
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
          Add Customer
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Customer</TableHead>
              <TableHead className="text-slate-300">Email</TableHead>
              <TableHead className="text-slate-300">Phone</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Segment</TableHead>
              <TableHead className="text-right text-slate-300">
                Total Spent
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Orders
              </TableHead>
              <TableHead className="text-slate-300">Last Order</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  <div className="flex items-center space-x-3">
                    <img
                      src={customer.avatar}
                      alt={customer.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <span>{customer.name}</span>
                  </div>
                </TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(customer.status)}`}
                  >
                    {customer.status.charAt(0).toUpperCase() +
                      customer.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getSegmentColor(customer.segment)}`}
                  >
                    {customer.segment === "vip"
                      ? "VIP"
                      : customer.segment === "at-risk"
                        ? "At Risk"
                        : customer.segment.charAt(0).toUpperCase() +
                          customer.segment.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  ${customer.totalSpent.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">{customer.orders}</TableCell>
                <TableCell>
                  {new Date(customer.lastOrder).toLocaleDateString()}
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
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <span className="sr-only">View Profile</span>
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
                        className="h-4 w-4 text-purple-500"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span className="sr-only">View Orders</span>
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

export default CustomerDatabase;
