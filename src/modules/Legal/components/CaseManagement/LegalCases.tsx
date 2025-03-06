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

interface LegalCase {
  id: string;
  caseNumber: string;
  title: string;
  type:
    | "litigation"
    | "dispute"
    | "regulatory"
    | "internal"
    | "intellectual-property";
  status: "open" | "closed" | "pending" | "settled" | "on-hold";
  priority: "low" | "medium" | "high" | "urgent";
  assignedTo: string;
  openDate: string;
  closedDate?: string;
  opposingParty?: string;
  description: string;
  financialImpact?: number;
  nextHearing?: string;
}

const legalCases: LegalCase[] = [
  {
    id: "1",
    caseNumber: "LIT-2023-001",
    title: "Smith vs. Our Company - Breach of Contract",
    type: "litigation",
    status: "open",
    priority: "high",
    assignedTo: "Jane Wilson",
    openDate: "2023-03-15",
    opposingParty: "Smith Enterprises",
    description:
      "Alleged breach of service contract terms regarding delivery timelines",
    financialImpact: 250000,
    nextHearing: "2023-08-10",
  },
  {
    id: "2",
    caseNumber: "IP-2023-002",
    title: "Patent Infringement Claim - Smart Device Technology",
    type: "intellectual-property",
    status: "open",
    priority: "urgent",
    assignedTo: "Michael Chen",
    openDate: "2023-05-20",
    opposingParty: "TechInnovate Inc.",
    description:
      "Claim of patent infringement on smart device connectivity technology",
    financialImpact: 1500000,
    nextHearing: "2023-09-05",
  },
  {
    id: "3",
    caseNumber: "REG-2023-003",
    title: "Data Privacy Compliance Review",
    type: "regulatory",
    status: "pending",
    priority: "medium",
    assignedTo: "Sarah Johnson",
    openDate: "2023-04-10",
    description:
      "Internal review of data privacy practices following regulatory changes",
  },
  {
    id: "4",
    caseNumber: "DISP-2023-004",
    title: "Supplier Payment Dispute - GlobalParts",
    type: "dispute",
    status: "settled",
    priority: "medium",
    assignedTo: "Robert Martinez",
    openDate: "2023-02-05",
    closedDate: "2023-06-15",
    opposingParty: "GlobalParts Manufacturing",
    description:
      "Dispute over payment terms and quality issues with supplied components",
    financialImpact: 85000,
  },
  {
    id: "5",
    caseNumber: "INT-2023-005",
    title: "Employee Termination Review",
    type: "internal",
    status: "closed",
    priority: "medium",
    assignedTo: "Lisa Thompson",
    openDate: "2023-01-20",
    closedDate: "2023-03-10",
    description: "Review of legal compliance for senior employee termination",
  },
  {
    id: "6",
    caseNumber: "LIT-2023-006",
    title: "Customer Injury Claim - Store #142",
    type: "litigation",
    status: "open",
    priority: "high",
    assignedTo: "David Wilson",
    openDate: "2023-06-05",
    opposingParty: "John Doe",
    description:
      "Personal injury claim from customer who slipped in retail location",
    financialImpact: 350000,
    nextHearing: "2023-10-15",
  },
  {
    id: "7",
    caseNumber: "REG-2023-007",
    title: "Environmental Compliance Audit",
    type: "regulatory",
    status: "on-hold",
    priority: "low",
    assignedTo: "Emma Rodriguez",
    openDate: "2023-05-10",
    description:
      "Regulatory audit of manufacturing facility environmental compliance",
  },
  {
    id: "8",
    caseNumber: "IP-2023-008",
    title: "Trademark Dispute - Brand Logo",
    type: "intellectual-property",
    status: "pending",
    priority: "medium",
    assignedTo: "Michael Chen",
    openDate: "2023-06-25",
    opposingParty: "BrandRight LLC",
    description: "Dispute over similarity of logo design with competitor",
    nextHearing: "2023-08-30",
  },
  {
    id: "9",
    caseNumber: "DISP-2023-009",
    title: "Lease Agreement Dispute - Warehouse #5",
    type: "dispute",
    status: "open",
    priority: "medium",
    assignedTo: "Robert Martinez",
    openDate: "2023-06-10",
    opposingParty: "Commercial Properties Inc.",
    description: "Dispute over maintenance responsibilities in warehouse lease",
    financialImpact: 120000,
  },
];

const LegalCases = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [priorityFilter, setPriorityFilter] = React.useState("all");
  const [selectedCase, setSelectedCase] = React.useState<string | null>(null);

  const attorneys = [...new Set(legalCases.map((lCase) => lCase.assignedTo))];

  const filteredCases = legalCases.filter(
    (lCase) =>
      (typeFilter === "all" || lCase.type === typeFilter) &&
      (statusFilter === "all" || lCase.status === statusFilter) &&
      (priorityFilter === "all" || lCase.priority === priorityFilter) &&
      (lCase.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lCase.caseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (lCase.opposingParty &&
          lCase.opposingParty
            .toLowerCase()
            .includes(searchTerm.toLowerCase()))),
  );

  const selectedCaseData = selectedCase
    ? legalCases.find((lCase) => lCase.id === selectedCase)
    : null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-500/10 text-blue-500";
      case "closed":
        return "bg-slate-500/10 text-slate-500";
      case "pending":
        return "bg-amber-500/10 text-amber-500";
      case "settled":
        return "bg-emerald-500/10 text-emerald-500";
      case "on-hold":
        return "bg-purple-500/10 text-purple-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "bg-emerald-500/10 text-emerald-500";
      case "medium":
        return "bg-amber-500/10 text-amber-500";
      case "high":
        return "bg-orange-500/10 text-orange-500";
      case "urgent":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "litigation":
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
            <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
          </svg>
        );
      case "dispute":
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
            <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
            <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
            <path d="M12 12v6" />
            <path d="M8 21h8" />
            <path d="M4 12h16" />
          </svg>
        );
      case "regulatory":
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
            <path d="M2 3h20" />
            <path d="M21 3v17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3" />
            <path d="M7 3v17" />
            <path d="M17 3v17" />
            <path d="M2 9h5" />
            <path d="M2 15h5" />
            <path d="M17 9h5" />
            <path d="M17 15h5" />
          </svg>
        );
      case "internal":
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "intellectual-property":
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
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Calculate statistics
  const openCases = legalCases.filter(
    (lCase) => lCase.status === "open",
  ).length;
  const pendingCases = legalCases.filter(
    (lCase) => lCase.status === "pending",
  ).length;
  const closedCases = legalCases.filter(
    (lCase) => lCase.status === "closed" || lCase.status === "settled",
  ).length;
  const highPriorityCases = legalCases.filter(
    (lCase) => lCase.priority === "high" || lCase.priority === "urgent",
  ).length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Total Cases</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {legalCases.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Open Cases</div>
          <div className="mt-1 text-2xl font-bold text-blue-500">
            {openCases}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            High Priority
          </div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {highPriorityCases}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Closed Cases</div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {closedCases}
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
              placeholder="Search cases..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Case Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="litigation">Litigation</SelectItem>
              <SelectItem value="dispute">Dispute</SelectItem>
              <SelectItem value="regulatory">Regulatory</SelectItem>
              <SelectItem value="internal">Internal</SelectItem>
              <SelectItem value="intellectual-property">
                Intellectual Property
              </SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="settled">Settled</SelectItem>
              <SelectItem value="on-hold">On Hold</SelectItem>
            </SelectContent>
          </Select>
          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
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
          Add Case
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Case Number</TableHead>
              <TableHead className="text-slate-300">Title</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Priority</TableHead>
              <TableHead className="text-slate-300">Assigned To</TableHead>
              <TableHead className="text-slate-300">Open Date</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCases.map((lCase) => (
              <TableRow
                key={lCase.id}
                className={`border-slate-800 ${selectedCase === lCase.id ? "bg-slate-800/50" : ""}`}
                onClick={() =>
                  setSelectedCase(selectedCase === lCase.id ? null : lCase.id)
                }
              >
                <TableCell className="font-medium text-slate-300">
                  {lCase.caseNumber}
                </TableCell>
                <TableCell>{lCase.title}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(lCase.type)}
                    <span className="text-sm">
                      {lCase.type
                        .split("-")
                        .map(
                          (word) =>
                            word.charAt(0).toUpperCase() + word.slice(1),
                        )
                        .join(" ")}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(lCase.status)}`}
                  >
                    {lCase.status.charAt(0).toUpperCase() +
                      lCase.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getPriorityColor(lCase.priority)}`}
                  >
                    {lCase.priority.charAt(0).toUpperCase() +
                      lCase.priority.slice(1)}
                  </span>
                </TableCell>
                <TableCell>{lCase.assignedTo}</TableCell>
                <TableCell>
                  {new Date(lCase.openDate).toLocaleDateString()}
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
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedCaseData && (
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {selectedCaseData.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Description
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {selectedCaseData.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Case Number
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedCaseData.caseNumber}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Assigned To
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedCaseData.assignedTo}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Status
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(selectedCaseData.status)}`}
                        >
                          {selectedCaseData.status.charAt(0).toUpperCase() +
                            selectedCaseData.status.slice(1)}
                        </span>
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Priority
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getPriorityColor(selectedCaseData.priority)}`}
                        >
                          {selectedCaseData.priority.charAt(0).toUpperCase() +
                            selectedCaseData.priority.slice(1)}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Open Date
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {new Date(
                          selectedCaseData.openDate,
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Closed Date
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedCaseData.closedDate
                          ? new Date(
                              selectedCaseData.closedDate,
                            ).toLocaleDateString()
                          : "N/A"}
                      </p>
                    </div>
                  </div>

                  {selectedCaseData.opposingParty && (
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Opposing Party
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedCaseData.opposingParty}
                      </p>
                    </div>
                  )}

                  {selectedCaseData.financialImpact && (
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Financial Impact
                      </h4>
                      <p className="mt-1 text-sm font-medium text-white">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          maximumFractionDigits: 0,
                        }).format(selectedCaseData.financialImpact)}
                      </p>
                    </div>
                  )}

                  {selectedCaseData.nextHearing && (
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Next Hearing
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {new Date(
                          selectedCaseData.nextHearing,
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  )}

                  <div className="mt-4 flex space-x-2">
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
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                      Update Case
                    </Button>
                    <Button variant="outline" className="w-full">
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      Export Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Case Timeline
                </h3>
                <div className="space-y-4">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1 h-full w-px bg-slate-700"></div>
                    <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-emerald-500"></div>
                    <div>
                      <p className="text-sm font-medium text-slate-300">
                        {new Date(
                          selectedCaseData.openDate,
                        ).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-slate-500">Case opened</p>
                    </div>
                  </div>

                  {selectedCaseData.nextHearing && (
                    <div className="relative pl-6">
                      <div className="absolute left-0 top-1 h-full w-px bg-slate-700"></div>
                      <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-amber-500"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-300">
                          {new Date(
                            selectedCaseData.nextHearing,
                          ).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-slate-500">
                          Scheduled hearing
                        </p>
                      </div>
                    </div>
                  )}

                  {selectedCaseData.closedDate && (
                    <div className="relative pl-6">
                      <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-blue-500"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-300">
                          {new Date(
                            selectedCaseData.closedDate,
                          ).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-slate-500">Case closed</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegalCases;
