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

interface LegalDocument {
  id: string;
  name: string;
  type: "contract" | "agreement" | "policy" | "license" | "nda";
  status: "active" | "expired" | "pending" | "draft" | "terminated";
  parties: string[];
  effectiveDate: string;
  expirationDate?: string;
  value?: number;
  department: string;
  lastUpdated: string;
}

const legalDocuments: LegalDocument[] = [
  {
    id: "1",
    name: "Supplier Agreement - TechSupply Inc.",
    type: "contract",
    status: "active",
    parties: ["Our Company", "TechSupply Inc."],
    effectiveDate: "2023-01-15",
    expirationDate: "2024-01-14",
    value: 125000,
    department: "Procurement",
    lastUpdated: "2023-01-15",
  },
  {
    id: "2",
    name: "Office Lease Agreement",
    type: "agreement",
    status: "active",
    parties: ["Our Company", "Skyline Properties LLC"],
    effectiveDate: "2022-05-01",
    expirationDate: "2027-04-30",
    value: 450000,
    department: "Facilities",
    lastUpdated: "2022-05-01",
  },
  {
    id: "3",
    name: "Software License - ERP System",
    type: "license",
    status: "active",
    parties: ["Our Company", "Enterprise Solutions Corp"],
    effectiveDate: "2023-03-10",
    expirationDate: "2026-03-09",
    value: 85000,
    department: "IT",
    lastUpdated: "2023-03-10",
  },
  {
    id: "4",
    name: "Employee Handbook v3.2",
    type: "policy",
    status: "active",
    parties: ["Our Company"],
    effectiveDate: "2023-02-01",
    department: "HR",
    lastUpdated: "2023-02-01",
  },
  {
    id: "5",
    name: "Consulting Agreement - MarketEdge",
    type: "contract",
    status: "pending",
    parties: ["Our Company", "MarketEdge Consulting"],
    effectiveDate: "2023-07-15",
    expirationDate: "2023-12-31",
    value: 45000,
    department: "Marketing",
    lastUpdated: "2023-06-28",
  },
  {
    id: "6",
    name: "Non-Disclosure Agreement - Project Falcon",
    type: "nda",
    status: "active",
    parties: ["Our Company", "Falcon Technologies"],
    effectiveDate: "2023-04-15",
    expirationDate: "2025-04-14",
    department: "R&D",
    lastUpdated: "2023-04-15",
  },
  {
    id: "7",
    name: "Distribution Agreement - East Region",
    type: "agreement",
    status: "expired",
    parties: ["Our Company", "Eastern Distributors LLC"],
    effectiveDate: "2022-01-01",
    expirationDate: "2023-01-01",
    value: 250000,
    department: "Sales",
    lastUpdated: "2023-01-02",
  },
  {
    id: "8",
    name: "Privacy Policy Update 2023",
    type: "policy",
    status: "draft",
    parties: ["Our Company"],
    effectiveDate: "2023-08-01",
    department: "Legal",
    lastUpdated: "2023-06-15",
  },
  {
    id: "9",
    name: "Manufacturing Contract - GlobalParts",
    type: "contract",
    status: "terminated",
    parties: ["Our Company", "GlobalParts Manufacturing"],
    effectiveDate: "2022-06-01",
    expirationDate: "2024-05-31",
    value: 350000,
    department: "Operations",
    lastUpdated: "2023-05-15",
  },
];

const LegalDocumentStorage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [departmentFilter, setDepartmentFilter] = React.useState("all");

  const departments = [...new Set(legalDocuments.map((doc) => doc.department))];

  const filteredDocuments = legalDocuments.filter(
    (doc) =>
      (typeFilter === "all" || doc.type === typeFilter) &&
      (statusFilter === "all" || doc.status === statusFilter) &&
      (departmentFilter === "all" || doc.department === departmentFilter) &&
      (doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.parties.some((party) =>
          party.toLowerCase().includes(searchTerm.toLowerCase()),
        )),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500/10 text-emerald-500";
      case "expired":
        return "bg-slate-500/10 text-slate-500";
      case "pending":
        return "bg-blue-500/10 text-blue-500";
      case "draft":
        return "bg-amber-500/10 text-amber-500";
      case "terminated":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "contract":
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
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
            <line x1="9" y1="9" x2="10" y2="9" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="15" y2="17" />
          </svg>
        );
      case "agreement":
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
            <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6" />
            <path d="M14 2v6h6" />
            <path d="M18 21v-6" />
            <path d="M15 18h6" />
          </svg>
        );
      case "policy":
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
            className="text-amber-500"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
            <path d="M10 9H8" />
          </svg>
        );
      case "license":
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
            className="text-emerald-500"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <line x1="9" y1="9" x2="15" y2="15" />
            <line x1="15" y1="9" x2="9" y2="15" />
          </svg>
        );
      case "nda":
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
            className="text-red-500"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <path d="M12 3v18" />
            <path d="M3 12h18" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Calculate statistics
  const activeDocuments = legalDocuments.filter(
    (doc) => doc.status === "active",
  ).length;
  const expiringDocuments = legalDocuments.filter(
    (doc) =>
      doc.status === "active" &&
      doc.expirationDate &&
      new Date(doc.expirationDate).getTime() - new Date().getTime() <
        90 * 24 * 60 * 60 * 1000,
  ).length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Documents
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {legalDocuments.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Active Documents
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {activeDocuments}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Expiring Soon
          </div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {expiringDocuments}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Departments</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {departments.length}
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
              placeholder="Search documents..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Document Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="agreement">Agreement</SelectItem>
              <SelectItem value="policy">Policy</SelectItem>
              <SelectItem value="license">License</SelectItem>
              <SelectItem value="nda">NDA</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="terminated">Terminated</SelectItem>
            </SelectContent>
          </Select>
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map((department) => (
                <SelectItem key={department} value={department}>
                  {department}
                </SelectItem>
              ))}
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
          Add Document
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Document Name</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Parties</TableHead>
              <TableHead className="text-slate-300">Department</TableHead>
              <TableHead className="text-slate-300">Effective Date</TableHead>
              <TableHead className="text-slate-300">Expiration Date</TableHead>
              <TableHead className="text-right text-slate-300">Value</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDocuments.map((doc) => (
              <TableRow key={doc.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {doc.name}
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(doc.type)}
                    <span className="text-sm">
                      {doc.type.charAt(0).toUpperCase() + doc.type.slice(1)}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(doc.status)}`}
                  >
                    {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col space-y-1">
                    {doc.parties.map((party, index) => (
                      <span key={index} className="text-sm">
                        {party}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{doc.department}</TableCell>
                <TableCell>
                  {new Date(doc.effectiveDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {doc.expirationDate
                    ? new Date(doc.expirationDate).toLocaleDateString()
                    : "N/A"}
                </TableCell>
                <TableCell className="text-right">
                  {doc.value
                    ? new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(doc.value)
                    : "N/A"}
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
                      <span className="sr-only">View</span>
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
                        className="h-4 w-4 text-slate-400"
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

export default LegalDocumentStorage;
