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

interface ShippingContract {
  id: string;
  contractId: string;
  carrier: string;
  type: "primary" | "secondary" | "spot" | "3pl";
  startDate: string;
  endDate: string;
  status: "active" | "pending" | "expired" | "negotiating";
  services: string[];
  contactPerson: string;
  contactEmail: string;
  annualValue: number;
}

const shippingContracts: ShippingContract[] = [
  {
    id: "1",
    contractId: "CNT-2023-001",
    carrier: "FedEx",
    type: "primary",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    status: "active",
    services: ["Express", "Ground", "International"],
    contactPerson: "John Smith",
    contactEmail: "j.smith@fedex.example.com",
    annualValue: 125000,
  },
  {
    id: "2",
    contractId: "CNT-2023-002",
    carrier: "UPS",
    type: "secondary",
    startDate: "2023-02-15",
    endDate: "2024-02-14",
    status: "active",
    services: ["Ground", "Freight"],
    contactPerson: "Sarah Johnson",
    contactEmail: "s.johnson@ups.example.com",
    annualValue: 85000,
  },
  {
    id: "3",
    contractId: "CNT-2023-003",
    carrier: "DHL",
    type: "spot",
    startDate: "2023-03-10",
    endDate: "2023-09-10",
    status: "active",
    services: ["International Express"],
    contactPerson: "Michael Brown",
    contactEmail: "m.brown@dhl.example.com",
    annualValue: 45000,
  },
  {
    id: "4",
    contractId: "CNT-2023-004",
    carrier: "XPO Logistics",
    type: "3pl",
    startDate: "2023-01-15",
    endDate: "2025-01-14",
    status: "active",
    services: ["Warehousing", "Distribution", "Freight"],
    contactPerson: "Emily Davis",
    contactEmail: "e.davis@xpo.example.com",
    annualValue: 230000,
  },
  {
    id: "5",
    contractId: "CNT-2023-005",
    carrier: "USPS",
    type: "secondary",
    startDate: "2022-11-01",
    endDate: "2023-10-31",
    status: "active",
    services: ["First Class", "Priority", "Parcel Select"],
    contactPerson: "Robert Wilson",
    contactEmail: "r.wilson@usps.example.com",
    annualValue: 65000,
  },
  {
    id: "6",
    contractId: "CNT-2023-006",
    carrier: "C.H. Robinson",
    type: "3pl",
    startDate: "2023-07-01",
    endDate: "2024-06-30",
    status: "pending",
    services: ["LTL", "FTL", "Intermodal"],
    contactPerson: "Jennifer Miller",
    contactEmail: "j.miller@chrobinson.example.com",
    annualValue: 175000,
  },
  {
    id: "7",
    contractId: "CNT-2022-007",
    carrier: "Maersk",
    type: "primary",
    startDate: "2022-06-01",
    endDate: "2023-05-31",
    status: "expired",
    services: ["Ocean Freight", "Container Shipping"],
    contactPerson: "David Garcia",
    contactEmail: "d.garcia@maersk.example.com",
    annualValue: 320000,
  },
  {
    id: "8",
    contractId: "CNT-2023-008",
    carrier: "Kuehne + Nagel",
    type: "spot",
    startDate: "2023-08-15",
    endDate: "2024-02-15",
    status: "negotiating",
    services: ["Air Freight", "Sea Freight", "Road Logistics"],
    contactPerson: "Lisa Thompson",
    contactEmail: "l.thompson@kuehne-nagel.example.com",
    annualValue: 95000,
  },
];

const ShippingContracts = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [typeFilter, setTypeFilter] = React.useState("all");

  const filteredContracts = shippingContracts.filter(
    (contract) =>
      (statusFilter === "all" || contract.status === statusFilter) &&
      (typeFilter === "all" || contract.type === typeFilter) &&
      (contract.contractId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contract.carrier.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contract.contactPerson
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        contract.contactEmail.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500/10 text-emerald-500";
      case "pending":
        return "bg-blue-500/10 text-blue-500";
      case "expired":
        return "bg-slate-500/10 text-slate-500";
      case "negotiating":
        return "bg-amber-500/10 text-amber-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "primary":
        return "bg-purple-500/10 text-purple-500";
      case "secondary":
        return "bg-blue-500/10 text-blue-500";
      case "spot":
        return "bg-amber-500/10 text-amber-500";
      case "3pl":
        return "bg-green-500/10 text-green-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  // Calculate statistics
  const totalActiveContracts = shippingContracts.filter(
    (c) => c.status === "active",
  ).length;
  const totalAnnualValue = shippingContracts
    .filter((c) => c.status === "active")
    .reduce((sum, contract) => sum + contract.annualValue, 0);
  const expiringContracts = shippingContracts.filter((c) => {
    if (c.status !== "active") return false;
    const endDate = new Date(c.endDate);
    const today = new Date();
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 90; // Contracts expiring in the next 90 days
  }).length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Active Contracts
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {totalActiveContracts}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Annual Contract Value
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(totalAnnualValue)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Contracts Expiring Soon
          </div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {expiringContracts}
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
              placeholder="Search contracts..."
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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
              <SelectItem value="negotiating">Negotiating</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="primary">Primary</SelectItem>
              <SelectItem value="secondary">Secondary</SelectItem>
              <SelectItem value="spot">Spot</SelectItem>
              <SelectItem value="3pl">3PL</SelectItem>
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
          Add Contract
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Contract ID</TableHead>
              <TableHead className="text-slate-300">Carrier</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Date Range</TableHead>
              <TableHead className="text-slate-300">Services</TableHead>
              <TableHead className="text-slate-300">Contact</TableHead>
              <TableHead className="text-right text-slate-300">
                Annual Value
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContracts.map((contract) => (
              <TableRow key={contract.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {contract.contractId}
                </TableCell>
                <TableCell>{contract.carrier}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getTypeColor(contract.type)}`}
                  >
                    {contract.type === "3pl"
                      ? "3PL"
                      : contract.type.charAt(0).toUpperCase() +
                        contract.type.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(contract.status)}`}
                  >
                    {contract.status.charAt(0).toUpperCase() +
                      contract.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  {new Date(contract.startDate).toLocaleDateString()} -{" "}
                  {new Date(contract.endDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {contract.services.map((service, index) => (
                      <span
                        key={index}
                        className="inline-flex rounded-full bg-slate-700 px-2 py-0.5 text-xs font-medium text-slate-300"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-sm">{contract.contactPerson}</div>
                    <div className="text-xs text-slate-500">
                      {contract.contactEmail}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(contract.annualValue)}
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

export default ShippingContracts;
