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
import { Textarea } from "@/components/ui/textarea";

interface Notification {
  id: string;
  orderId: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  type:
    | "order-confirmation"
    | "shipment-confirmation"
    | "out-for-delivery"
    | "delivered"
    | "delay"
    | "exception";
  channel: "email" | "sms" | "app";
  status: "scheduled" | "sent" | "failed";
  scheduledTime: string;
  sentTime?: string;
  content: string;
}

const notifications: Notification[] = [
  {
    id: "1",
    orderId: "ORD-2023-0001",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "(555) 123-4567",
    },
    type: "shipment-confirmation",
    channel: "email",
    status: "sent",
    scheduledTime: "2023-07-04T10:30:00",
    sentTime: "2023-07-04T10:30:15",
    content:
      "Your order has been shipped! Track your package with tracking number TRK123456789.",
  },
  {
    id: "2",
    orderId: "ORD-2023-0001",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "(555) 123-4567",
    },
    type: "out-for-delivery",
    channel: "sms",
    status: "scheduled",
    scheduledTime: "2023-07-05T08:00:00",
    content:
      "Your package is out for delivery today! Expect delivery between 9am-12pm.",
  },
  {
    id: "3",
    orderId: "ORD-2023-0002",
    customer: {
      name: "Robert Brown",
      email: "r.brown@example.com",
      phone: "(555) 234-5678",
    },
    type: "order-confirmation",
    channel: "email",
    status: "sent",
    scheduledTime: "2023-07-03T14:15:00",
    sentTime: "2023-07-03T14:15:22",
    content:
      "Thank you for your order! Your order #ORD-2023-0002 has been confirmed and is being processed.",
  },
  {
    id: "4",
    orderId: "ORD-2023-0003",
    customer: {
      name: "Emily Wilson",
      email: "e.wilson@example.com",
      phone: "(555) 345-6789",
    },
    type: "delivered",
    channel: "email",
    status: "sent",
    scheduledTime: "2023-07-04T12:00:00",
    sentTime: "2023-07-04T12:00:05",
    content: "Your package has been delivered! Thank you for shopping with us.",
  },
  {
    id: "5",
    orderId: "ORD-2023-0004",
    customer: {
      name: "James Taylor",
      email: "j.taylor@example.com",
      phone: "(555) 456-7890",
    },
    type: "out-for-delivery",
    channel: "app",
    status: "sent",
    scheduledTime: "2023-07-05T07:30:00",
    sentTime: "2023-07-05T07:30:12",
    content:
      "Your package is out for delivery today! Expect delivery between 10am-1pm.",
  },
  {
    id: "6",
    orderId: "ORD-2023-0005",
    customer: {
      name: "Michael Anderson",
      email: "m.anderson@example.com",
      phone: "(555) 567-8901",
    },
    type: "exception",
    channel: "email",
    status: "failed",
    scheduledTime: "2023-07-04T17:00:00",
    content:
      "There's an issue with your delivery. Please contact customer service for more information.",
  },
  {
    id: "7",
    orderId: "ORD-2023-0006",
    customer: {
      name: "Jennifer Miller",
      email: "j.miller@example.com",
      phone: "(555) 678-9012",
    },
    type: "shipment-confirmation",
    channel: "sms",
    status: "scheduled",
    scheduledTime: "2023-07-06T09:00:00",
    content:
      "Your order has been shipped! Track your package with tracking number TRK654987321.",
  },
];

const CustomerNotifications = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [channelFilter, setChannelFilter] = React.useState("all");
  const [selectedTemplate, setSelectedTemplate] =
    React.useState("order-confirmation");
  const [templateContent, setTemplateContent] = React.useState(
    "Thank you for your order! Your order #{{order_id}} has been confirmed and is being processed.",
  );

  const filteredNotifications = notifications.filter(
    (notification) =>
      (typeFilter === "all" || notification.type === typeFilter) &&
      (statusFilter === "all" || notification.status === statusFilter) &&
      (channelFilter === "all" || notification.channel === channelFilter) &&
      (notification.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notification.customer.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        notification.customer.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        notification.customer.phone.includes(searchTerm)),
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case "order-confirmation":
        return "bg-blue-500/10 text-blue-500";
      case "shipment-confirmation":
        return "bg-purple-500/10 text-purple-500";
      case "out-for-delivery":
        return "bg-amber-500/10 text-amber-500";
      case "delivered":
        return "bg-emerald-500/10 text-emerald-500";
      case "delay":
        return "bg-orange-500/10 text-orange-500";
      case "exception":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-500/10 text-blue-500";
      case "sent":
        return "bg-emerald-500/10 text-emerald-500";
      case "failed":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "email":
        return (
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
            className="text-blue-500"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        );
      case "sms":
        return (
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
            className="text-green-500"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        );
      case "app":
        return (
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
            className="text-purple-500"
          >
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <line x1="12" x2="12" y1="18" y2="18.01" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4 flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
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
                  placeholder="Search notifications..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="order-confirmation">
                    Order Confirmation
                  </SelectItem>
                  <SelectItem value="shipment-confirmation">
                    Shipment Confirmation
                  </SelectItem>
                  <SelectItem value="out-for-delivery">
                    Out for Delivery
                  </SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="delay">Delay</SelectItem>
                  <SelectItem value="exception">Exception</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={channelFilter} onValueChange={setChannelFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Channel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Channels</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="sms">SMS</SelectItem>
                  <SelectItem value="app">App</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Order ID</TableHead>
                  <TableHead className="text-slate-300">Customer</TableHead>
                  <TableHead className="text-slate-300">Type</TableHead>
                  <TableHead className="text-slate-300">Channel</TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                  <TableHead className="text-slate-300">Scheduled</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredNotifications.map((notification) => (
                  <TableRow key={notification.id} className="border-slate-800">
                    <TableCell className="font-medium text-slate-300">
                      {notification.orderId}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div>{notification.customer.name}</div>
                        <div className="text-xs text-slate-500">
                          {notification.customer.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getTypeColor(notification.type)}`}
                      >
                        {notification.type
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1),
                          )
                          .join(" ")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getChannelIcon(notification.channel)}
                        <span className="text-sm">
                          {notification.channel.charAt(0).toUpperCase() +
                            notification.channel.slice(1)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(notification.status)}`}
                      >
                        {notification.status.charAt(0).toUpperCase() +
                          notification.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      {new Date(notification.scheduledTime).toLocaleString()}
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
          <Card className="border-slate-800 bg-slate-800/50">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Notification Templates
              </h3>
              <p className="mb-6 text-sm text-slate-400">
                Create and manage notification templates for different events in
                the customer journey.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Template Type
                  </label>
                  <Select
                    value={selectedTemplate}
                    onValueChange={setSelectedTemplate}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select template type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="order-confirmation">
                        Order Confirmation
                      </SelectItem>
                      <SelectItem value="shipment-confirmation">
                        Shipment Confirmation
                      </SelectItem>
                      <SelectItem value="out-for-delivery">
                        Out for Delivery
                      </SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="delay">Delay</SelectItem>
                      <SelectItem value="exception">Exception</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Template Content
                  </label>
                  <Textarea
                    value={templateContent}
                    onChange={(e) => setTemplateContent(e.target.value)}
                    className="min-h-[150px]"
                    placeholder="Enter notification template content..."
                  />
                  <p className="mt-2 text-xs text-slate-500">
                    Use {"{{ order_id }}"}, {"{{ tracking_number }}"},{" "}
                    {"{{ customer_name }}"}, and
                    {"{{ delivery_date }}"} as placeholders.
                  </p>
                </div>

                <div className="pt-2">
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
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                      <polyline points="17 21 17 13 7 13 7 21" />
                      <polyline points="7 3 7 8 15 8" />
                    </svg>
                    Save Template
                  </Button>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="mb-2 text-sm font-medium text-white">
                  Send Test Notification
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Notification Channel
                    </label>
                    <Select defaultValue="email">
                      <SelectTrigger>
                        <SelectValue placeholder="Select channel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="sms">SMS</SelectItem>
                        <SelectItem value="app">App Notification</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Recipient
                    </label>
                    <Input placeholder="Enter email or phone number" />
                  </div>

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
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Test
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerNotifications;
