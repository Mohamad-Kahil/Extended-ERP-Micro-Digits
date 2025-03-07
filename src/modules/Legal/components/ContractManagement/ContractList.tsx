import React, { useState } from "react";
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

interface Contract {
  id: string;
  title: string;
  type: string;
  status:
    | "Active"
    | "Pending Review"
    | "Expired"
    | "Terminated"
    | "Draft"
    | "Expiring Soon";
  counterparty: string;
  effectiveDate: string;
  expirationDate: string;
  value: number;
  owner: string;
}

interface ContractListProps {
  searchTerm: string;
}

const ContractList = ({ searchTerm }: ContractListProps) => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const contracts: Contract[] = [
    {
      id: "CONT-001",
      title: "Master Service Agreement",
      type: "Vendor Agreement",
      status: "Active",
      counterparty: "Tech Solutions Inc.",
      effectiveDate: "2023-01-15",
      expirationDate: "2024-01-14",
      value: 120000,
      owner: "Sarah Johnson",
    },
    {
      id: "CONT-002",
      title: "Software License Agreement",
      type: "Licensing",
      status: "Active",
      counterparty: "Software Corp.",
      effectiveDate: "2022-11-01",
      expirationDate: "2023-10-31",
      value: 85000,
      owner: "Michael Chen",
    },
    {
      id: "CONT-003",
      title: "Employment Agreement - Executive",
      type: "Employment",
      status: "Active",
      counterparty: "John Smith",
      effectiveDate: "2022-06-15",
      expirationDate: "2025-06-14",
      value: 0,
      owner: "Jessica Williams",
    },
    {
      id: "CONT-004",
      title: "Office Lease Agreement",
      type: "Real Estate",
      status: "Active",
      counterparty: "Property Management LLC",
      effectiveDate: "2021-05-01",
      expirationDate: "2026-04-30",
      value: 450000,
      owner: "David Miller",
    },
    {
      id: "CONT-005",
      title: "Non-Disclosure Agreement",
      type: "NDA",
      status: "Pending Review",
      counterparty: "Potential Partner Inc.",
      effectiveDate: "",
      expirationDate: "",
      value: 0,
      owner: "Sarah Johnson",
    },
    {
      id: "CONT-006",
      title: "Manufacturing Agreement",
      type: "Vendor Agreement",
      status: "Expiring Soon",
      counterparty: "Manufacturing Partners Co.",
      effectiveDate: "2022-10-15",
      expirationDate: "2023-10-14",
      value: 250000,
      owner: "Michael Chen",
    },
    {
      id: "CONT-007",
      title: "Distribution Agreement",
      type: "Sales",
      status: "Draft",
      counterparty: "Global Distributors Inc.",
      effectiveDate: "",
      expirationDate: "",
      value: 180000,
      owner: "Jessica Williams",
    },
  ];

  const filteredContracts = contracts.filter(
    (contract) =>
      (statusFilter === "all" || contract.status === statusFilter) &&
      (typeFilter === "all" || contract.type === typeFilter) &&
      (contract.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contract.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contract.counterparty.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Get unique contract types for filter
  const contractTypes = [
    ...new Set(contracts.map((contract) => contract.type)),
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Pending Review">Pending Review</SelectItem>
              <SelectItem value="Expired">Expired</SelectItem>
              <SelectItem value="Terminated">Terminated</SelectItem>
              <SelectItem value="Draft">Draft</SelectItem>
              <SelectItem value="Expiring Soon">Expiring Soon</SelectItem>
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Contract Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {contractTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
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
              <TableHead className="text-slate-300">Contract ID</TableHead>
              <TableHead className="text-slate-300">Title</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Counterparty</TableHead>
              <TableHead className="text-slate-300">Effective Date</TableHead>
              <TableHead className="text-slate-300">Expiration Date</TableHead>
              <TableHead className="text-slate-300">Value</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContracts.map((contract) => (
              <TableRow key={contract.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {contract.id}
                </TableCell>
                <TableCell>{contract.title}</TableCell>
                <TableCell>{contract.type}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      contract.status === "Active"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : contract.status === "Pending Review"
                          ? "bg-amber-500/10 text-amber-500"
                          : contract.status === "Expired"
                            ? "bg-slate-500/10 text-slate-500"
                            : contract.status === "Terminated"
                              ? "bg-red-500/10 text-red-500"
                              : contract.status === "Draft"
                                ? "bg-blue-500/10 text-blue-500"
                                : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {contract.status}
                  </span>
                </TableCell>
                <TableCell>{contract.counterparty}</TableCell>
                <TableCell>
                  {contract.effectiveDate
                    ? new Date(contract.effectiveDate).toLocaleDateString()
                    : "--"}
                </TableCell>
                <TableCell>
                  {contract.expirationDate
                    ? new Date(contract.expirationDate).toLocaleDateString()
                    : "--"}
                </TableCell>
                <TableCell>
                  {contract.value > 0
                    ? `$${contract.value.toLocaleString()}`
                    : "--"}
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
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <span className="sr-only">View Document</span>
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

export default ContractList;
