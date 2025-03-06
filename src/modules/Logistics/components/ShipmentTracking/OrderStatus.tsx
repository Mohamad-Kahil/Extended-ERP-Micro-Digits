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

interface ShipmentStatus {
  id: string;
  trackingNumber: string;
  orderId: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  destination: string;
  carrier: string;
  status:
    | "processing"
    | "shipped"
    | "in-transit"
    | "out-for-delivery"
    | "delivered"
    | "exception";
  estimatedDelivery: string;
  lastUpdate: string;
  items: number;
  weight: number;
}

const shipments: ShipmentStatus[] = [
  {
    id: "1",
    trackingNumber: "TRK123456789",
    orderId: "ORD-2023-0001",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "(555) 123-4567",
    },
    destination: "123 Main St, Anytown, CA 90210",
    carrier: "FedEx",
    status: "in-transit",
    estimatedDelivery: "2023-07-06",
    lastUpdate: "2023-07-04T14:30:00",
    items: 3,
    weight: 4.5,
  },
  {
    id: "2",
    trackingNumber: "TRK987654321",
    orderId: "ORD-2023-0002",
    customer: {
      name: "Robert Brown",
      email: "r.brown@example.com",
      phone: "(555) 234-5678",
    },
    destination: "456 Oak Ave, Somewhere, CA 90211",
    carrier: "UPS",
    status: "shipped",
    estimatedDelivery: "2023-07-07",
    lastUpdate: "2023-07-04T10:15:00",
    items: 1,
    weight: 2.2,
  },
  {
    id: "3",
    trackingNumber: "TRK456789123",
    orderId: "ORD-2023-0003",
    customer: {
      name: "Emily Wilson",
      email: "e.wilson@example.com",
      phone: "(555) 345-6789",
    },
    destination: "789 Pine Rd, Nowhere, CA 90212",
    carrier: "USPS",
    status: "delivered",
    estimatedDelivery: "2023-07-04",
    lastUpdate: "2023-07-04T09:45:00",
    items: 2,
    weight: 1.8,
  },
  {
    id: "4",
    trackingNumber: "TRK789123456",
    orderId: "ORD-2023-0004",
    customer: {
      name: "James Taylor",
      email: "j.taylor@example.com",
      phone: "(555) 456-7890",
    },
    destination: "101 Cedar Ln, Elsewhere, CA 90213",
    carrier: "DHL",
    status: "out-for-delivery",
    estimatedDelivery: "2023-07-05",
    lastUpdate: "2023-07-05T08:20:00",
    items: 4,
    weight: 5.7,
  },
  {
    id: "5",
    trackingNumber: "TRK321654987",
    orderId: "ORD-2023-0005",
    customer: {
      name: "Michael Anderson",
      email: "m.anderson@example.com",
      phone: "(555) 567-8901",
    },
    destination: "202 Maple Dr, Anywhere, CA 90214",
    carrier: "FedEx",
    status: "exception",
    estimatedDelivery: "2023-07-05",
    lastUpdate: "2023-07-04T16:50:00",
    items: 1,
    weight: 3.2,
  },
  {
    id: "6",
    trackingNumber: "TRK654987321",
    orderId: "ORD-2023-0006",
    customer: {
      name: "Jennifer Miller",
      email: "j.miller@example.com",
      phone: "(555) 678-9012",
    },
    destination: "303 Birch Blvd, Someplace, CA 90215",
    carrier: "UPS",
    status: "processing",
    estimatedDelivery: "2023-07-08",
    lastUpdate: "2023-07-04T11:10:00",
    items: 2,
    weight: 1.5,
  },
];

const OrderStatus = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [carrierFilter, setCarrierFilter] = React.useState("all");
  const [selectedShipment, setSelectedShipment] = React.useState<string | null>(
    null,
  );

  const filteredShipments = shipments.filter(
    (shipment) =>
      (statusFilter === "all" || shipment.status === statusFilter) &&
      (carrierFilter === "all" || shipment.carrier === carrierFilter) &&
      (shipment.trackingNumber
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        shipment.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shipment.customer.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        shipment.customer.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "processing":
        return "bg-slate-500/10 text-slate-500";
      case "shipped":
        return "bg-blue-500/10 text-blue-500";
      case "in-transit":
        return "bg-amber-500/10 text-amber-500";
      case "out-for-delivery":
        return "bg-purple-500/10 text-purple-500";
      case "delivered":
        return "bg-emerald-500/10 text-emerald-500";
      case "exception":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  // Get unique carriers for the filter
  const carriers = [...new Set(shipments.map((shipment) => shipment.carrier))];

  // Get the selected shipment details
  const shipmentDetails = selectedShipment
    ? shipments.find((s) => s.id === selectedShipment)
    : null;

  // Mock tracking events for the selected shipment
  const trackingEvents = [
    {
      date: "2023-07-05T08:20:00",
      location: "Local Distribution Center",
      status: "Out for delivery",
      description: "Package is out for delivery",
    },
    {
      date: "2023-07-05T06:45:00",
      location: "Local Distribution Center",
      status: "Arrived at facility",
      description: "Package has arrived at local facility",
    },
    {
      date: "2023-07-04T22:30:00",
      location: "Regional Hub, Los Angeles CA",
      status: "Departed",
      description: "Package has left the regional hub",
    },
    {
      date: "2023-07-04T18:15:00",
      location: "Regional Hub, Los Angeles CA",
      status: "Arrived",
      description: "Package has arrived at regional hub",
    },
    {
      date: "2023-07-04T14:30:00",
      location: "Shipping Partner Facility, San Francisco CA",
      status: "Departed",
      description: "Package has departed from origin facility",
    },
    {
      date: "2023-07-04T10:15:00",
      location: "Shipping Partner Facility, San Francisco CA",
      status: "Shipped",
      description: "Shipper has processed and shipped the package",
    },
    {
      date: "2023-07-03T16:45:00",
      location: "Seller Facility",
      status: "Processing",
      description: "Order has been processed and is ready for shipment",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Shipments
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {shipments.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">In Transit</div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {shipments.filter((s) => s.status === "in-transit").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Delivered Today
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {
              shipments.filter(
                (s) =>
                  s.status === "delivered" &&
                  new Date(s.lastUpdate).toDateString() ===
                    new Date().toDateString(),
              ).length
            }
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Exceptions</div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {shipments.filter((s) => s.status === "exception").length}
          </div>
        </div>
      </div>

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
                  placeholder="Search by tracking #, order ID, or customer..."
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
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="in-transit">In Transit</SelectItem>
                  <SelectItem value="out-for-delivery">
                    Out for Delivery
                  </SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="exception">Exception</SelectItem>
                </SelectContent>
              </Select>
              <Select value={carrierFilter} onValueChange={setCarrierFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Carrier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Carriers</SelectItem>
                  {carriers.map((carrier) => (
                    <SelectItem key={carrier} value={carrier}>
                      {carrier}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Tracking #</TableHead>
                  <TableHead className="text-slate-300">Order ID</TableHead>
                  <TableHead className="text-slate-300">Customer</TableHead>
                  <TableHead className="text-slate-300">Carrier</TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                  <TableHead className="text-slate-300">
                    Est. Delivery
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredShipments.map((shipment) => (
                  <TableRow
                    key={shipment.id}
                    className={`border-slate-800 ${selectedShipment === shipment.id ? "bg-slate-800/50" : ""}`}
                    onClick={() => setSelectedShipment(shipment.id)}
                  >
                    <TableCell className="font-medium text-slate-300">
                      {shipment.trackingNumber}
                    </TableCell>
                    <TableCell>{shipment.orderId}</TableCell>
                    <TableCell>
                      <div>
                        <div>{shipment.customer.name}</div>
                        <div className="text-xs text-slate-500">
                          {shipment.customer.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{shipment.carrier}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(shipment.status)}`}
                      >
                        {shipment.status
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1),
                          )
                          .join(" ")}
                      </span>
                    </TableCell>
                    <TableCell>
                      {new Date(
                        shipment.estimatedDelivery,
                      ).toLocaleDateString()}
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
                            className="h-4 w-4 text-blue-500"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span className="sr-only">Track</span>
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
                            className="h-4 w-4"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                          </svg>
                          <span className="sr-only">Edit</span>
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
          {shipmentDetails ? (
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    Shipment Details
                  </h3>
                  <Button variant="outline" size="sm">
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
                      <path d="M3 7h18" />
                      <path d="M6 10h13" />
                      <path d="M9 13h10" />
                      <path d="M17 16h3" />
                      <path d="M12 16h.01" />
                      <path d="M21 16v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                    </svg>
                    Print Label
                  </Button>
                </div>

                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="text-xs font-medium uppercase text-slate-500">
                      Tracking Number
                    </h4>
                    <p className="text-sm font-medium text-slate-300">
                      {shipmentDetails.trackingNumber}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-medium uppercase text-slate-500">
                        Order ID
                      </h4>
                      <p className="text-sm font-medium text-slate-300">
                        {shipmentDetails.orderId}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium uppercase text-slate-500">
                        Carrier
                      </h4>
                      <p className="text-sm font-medium text-slate-300">
                        {shipmentDetails.carrier}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium uppercase text-slate-500">
                      Destination
                    </h4>
                    <p className="text-sm font-medium text-slate-300">
                      {shipmentDetails.destination}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-medium uppercase text-slate-500">
                        Items
                      </h4>
                      <p className="text-sm font-medium text-slate-300">
                        {shipmentDetails.items}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium uppercase text-slate-500">
                        Weight
                      </h4>
                      <p className="text-sm font-medium text-slate-300">
                        {shipmentDetails.weight} kg
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-medium uppercase text-slate-500">
                        Status
                      </h4>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(shipmentDetails.status)}`}
                      >
                        {shipmentDetails.status
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1),
                          )
                          .join(" ")}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium uppercase text-slate-500">
                        Est. Delivery
                      </h4>
                      <p className="text-sm font-medium text-slate-300">
                        {new Date(
                          shipmentDetails.estimatedDelivery,
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="mb-2 text-sm font-medium text-white">
                  Tracking History
                </h4>
                <div className="space-y-4">
                  {trackingEvents.map((event, index) => (
                    <div key={index} className="relative pl-6">
                      {index < trackingEvents.length - 1 && (
                        <div className="absolute left-[0.4375rem] top-2 h-full w-0.5 bg-slate-700"></div>
                      )}
                      <div className="absolute left-0 top-1 h-2 w-2 rounded-full bg-cyan-500"></div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-medium text-slate-300">
                            {event.status}
                          </p>
                          <p className="text-xs text-slate-500">
                            {new Date(event.date).toLocaleString()}
                          </p>
                        </div>
                        <p className="text-xs text-slate-400">
                          {event.location}
                        </p>
                        <p className="text-xs text-slate-500">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="flex h-[600px] items-center justify-center p-6">
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <h3 className="mb-1 text-lg font-medium text-slate-400">
                    Select a shipment
                  </h3>
                  <p className="text-sm text-slate-500">
                    Click on a shipment to view detailed tracking information
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
