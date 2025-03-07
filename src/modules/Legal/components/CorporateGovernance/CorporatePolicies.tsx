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

interface Policy {
  id: string;
  title: string;
  category: string;
  status: "Active" | "Under Review" | "Draft" | "Archived";
  effectiveDate: string;
  reviewDate: string;
  approvedBy: string;
  version: string;
}

interface CorporatePoliciesProps {
  searchTerm: string;
}

const CorporatePolicies = ({ searchTerm }: CorporatePoliciesProps) => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const policies: Policy[] = [
    {
      id: "POL-001",
      title: "Code of Business Conduct and Ethics",
      category: "Ethics",
      status: "Active",
      effectiveDate: "2022-01-15",
      reviewDate: "2024-01-15",
      approvedBy: "Board of Directors",
      version: "3.2",
    },
    {
      id: "POL-002",
      title: "Anti-Corruption and Bribery Policy",
      category: "Compliance",
      status: "Active",
      effectiveDate: "2022-03-10",
      reviewDate: "2024-03-10",
      approvedBy: "Board of Directors",
      version: "2.1",
    },
    {
      id: "POL-003",
      title: "Insider Trading Policy",
      category: "Securities",
      status: "Active",
      effectiveDate: "2022-02-05",
      reviewDate: "2024-02-05",
      approvedBy: "Board of Directors",
      version: "2.5",
    },
    {
      id: "POL-004",
      title: "Data Privacy Policy",
      category: "Privacy",
      status: "Under Review",
      effectiveDate: "2021-06-20",
      reviewDate: "2023-06-20",
      approvedBy: "Chief Privacy Officer",
      version: "2.0",
    },
    {
      id: "POL-005",
      title: "Whistleblower Protection Policy",
      category: "Ethics",
      status: "Active",
      effectiveDate: "2022-04-15",
      reviewDate: "2024-04-15",
      approvedBy: "Board of Directors",
      version: "1.3",
    },
    {
      id: "POL-006",
      title: "Corporate Social Responsibility Policy",
      category: "CSR",
      status: "Active",
      effectiveDate: "2022-05-10",
      reviewDate: "2024-05-10",
      approvedBy: "CEO",
      version: "1.0",
    },
    {
      id: "POL-007",
      title: "Information Security Policy",
      category: "Security",
      status: "Under Review",
      effectiveDate: "2021-08-15",
      reviewDate: "2023-08-15",
      approvedBy: "CISO",
      version: "2.2",
    },
    {
      id: "POL-008",
      title: "Environmental Sustainability Policy",
      category: "CSR",
      status: "Draft",
      effectiveDate: "",
      reviewDate: "",
      approvedBy: "Pending",
      version: "0.9",
    },
    {
      id: "POL-009",
      title: "Board Diversity Policy",
      category: "Governance",
      status: "Active",
      effectiveDate: "2022-07-20",
      reviewDate: "2024-07-20",
      approvedBy: "Board of Directors",
      version: "1.1",
    },
    {
      id: "POL-010",
      title: "Executive Compensation Policy",
      category: "Compensation",
      status: "Active",
      effectiveDate: "2022-06-05",
      reviewDate: "2024-06-05",
      approvedBy: "Compensation Committee",
      version: "2.0",
    },
  ];

  const filteredPolicies = policies.filter(
    (policy) =>
      (categoryFilter === "all" || policy.category === categoryFilter) &&
      (statusFilter === "all" || policy.status === statusFilter) &&
      (policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        policy.id.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Get unique categories for filter
  const categories = [...new Set(policies.map((policy) => policy.category))];

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Under Review">Under Review</SelectItem>
              <SelectItem value="Draft">Draft</SelectItem>
              <SelectItem value="Archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Policy ID</TableHead>
              <TableHead className="text-slate-300">Title</TableHead>
              <TableHead className="text-slate-300">Category</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Effective Date</TableHead>
              <TableHead className="text-slate-300">Review Date</TableHead>
              <TableHead className="text-slate-300">Version</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPolicies.map((policy) => (
              <TableRow key={policy.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {policy.id}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-slate-300">{policy.title}</div>
                    <div className="text-xs text-slate-500">
                      Approved by: {policy.approvedBy}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="inline-flex rounded-full bg-slate-800 px-2 py-1 text-xs font-semibold">
                    {policy.category}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      policy.status === "Active"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : policy.status === "Under Review"
                          ? "bg-amber-500/10 text-amber-500"
                          : policy.status === "Draft"
                            ? "bg-blue-500/10 text-blue-500"
                            : "bg-slate-500/10 text-slate-500"
                    }`}
                  >
                    {policy.status}
                  </span>
                </TableCell>
                <TableCell>
                  {policy.effectiveDate
                    ? new Date(policy.effectiveDate).toLocaleDateString()
                    : "--"}
                </TableCell>
                <TableCell>
                  {policy.reviewDate
                    ? new Date(policy.reviewDate).toLocaleDateString()
                    : "--"}
                </TableCell>
                <TableCell>v{policy.version}</TableCell>
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

export default CorporatePolicies;
