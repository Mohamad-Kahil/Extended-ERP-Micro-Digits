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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: string;
  source: string;
  score: number;
  temperature: "hot" | "warm" | "cold";
  createdAt: string;
  assignedTo: string;
}

interface LeadsListProps {
  searchTerm: string;
}

const leads: Lead[] = [
  {
    id: "LEAD-001",
    name: "John Smith",
    company: "Acme Corporation",
    email: "john.smith@acme.com",
    phone: "(555) 123-4567",
    status: "New",
    source: "Website",
    score: 85,
    temperature: "hot",
    createdAt: "2023-09-15T10:30:00",
    assignedTo: "Sarah Johnson",
  },
  {
    id: "LEAD-002",
    name: "Emily Davis",
    company: "XYZ Industries",
    email: "emily.davis@xyz.com",
    phone: "(555) 234-5678",
    status: "Contacted",
    source: "Referral",
    score: 72,
    temperature: "warm",
    createdAt: "2023-09-14T09:15:00",
    assignedTo: "Michael Chen",
  },
  {
    id: "LEAD-003",
    name: "Robert Johnson",
    company: "Global Tech",
    email: "robert.johnson@globaltech.com",
    phone: "(555) 345-6789",
    status: "Qualified",
    source: "Trade Show",
    score: 91,
    temperature: "hot",
    createdAt: "2023-09-13T16:45:00",
    assignedTo: "Sarah Johnson",
  },
  {
    id: "LEAD-004",
    name: "Jennifer Wilson",
    company: "Innovative Solutions",
    email: "jennifer.wilson@innovative.com",
    phone: "(555) 456-7890",
    status: "New",
    source: "Email Campaign",
    score: 45,
    temperature: "cold",
    createdAt: "2023-09-12T08:20:00",
    assignedTo: "David Miller",
  },
  {
    id: "LEAD-005",
    name: "Michael Brown",
    company: "Future Systems",
    email: "michael.brown@future.com",
    phone: "(555) 567-8901",
    status: "Contacted",
    source: "Social Media",
    score: 68,
    temperature: "warm",
    createdAt: "2023-09-11T14:30:00",
    assignedTo: "Jessica Williams",
  },
  {
    id: "LEAD-006",
    name: "Lisa Garcia",
    company: "Tech Innovations",
    email: "lisa.garcia@techinnovations.com",
    phone: "(555) 678-9012",
    status: "Qualified",
    source: "Webinar",
    score: 88,
    temperature: "hot",
    createdAt: "2023-09-10T11:30:00",
    assignedTo: "Michael Chen",
  },
  {
    id: "LEAD-007",
    name: "David Martinez",
    company: "Alliance Group",
    email: "david.martinez@alliance.com",
    phone: "(555) 789-0123",
    status: "New",
    source: "Partner Referral",
    score: 52,
    temperature: "cold",
    createdAt: "2023-09-09T14:10:00",
    assignedTo: "Sarah Johnson",
  },
];

const LeadsList = ({ searchTerm }: LeadsListProps) => {
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [temperatureFilter, setTemperatureFilter] = React.useState("all");
  const [sourceFilter, setSourceFilter] = React.useState("all");

  const filteredLeads = leads.filter(
    (lead) =>
      (statusFilter === "all" || lead.status === statusFilter) &&
      (temperatureFilter === "all" || lead.temperature === temperatureFilter) &&
      (sourceFilter === "all" || lead.source === sourceFilter) &&
      (lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Get unique statuses, sources for filters
  const statuses = [...new Set(leads.map((lead) => lead.status))];
  const sources = [...new Set(leads.map((lead) => lead.source))];

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
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={temperatureFilter}
            onValueChange={setTemperatureFilter}
          >
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Temperature" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Temperatures</SelectItem>
              <SelectItem value="hot">Hot</SelectItem>
              <SelectItem value="warm">Warm</SelectItem>
              <SelectItem value="cold">Cold</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sourceFilter} onValueChange={setSourceFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              {sources.map((source) => (
                <SelectItem key={source} value={source}>
                  {source}
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
              <TableHead className="text-slate-300">Lead</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Source</TableHead>
              <TableHead className="text-slate-300">Score</TableHead>
              <TableHead className="text-slate-300">Created</TableHead>
              <TableHead className="text-slate-300">Assigned To</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.map((lead) => (
              <TableRow key={lead.id} className="border-slate-800">
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${lead.name}`}
                      />
                      <AvatarFallback>
                        {lead.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-slate-300">
                        {lead.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {lead.company}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      lead.status === "New"
                        ? "bg-blue-500/10 text-blue-500"
                        : lead.status === "Contacted"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-emerald-500/10 text-emerald-500"
                    }`}
                  >
                    {lead.status}
                  </span>
                </TableCell>
                <TableCell>{lead.source}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-slate-700 rounded-full mr-2">
                      <div
                        className={`h-2 rounded-full ${
                          lead.score >= 80
                            ? "bg-emerald-500"
                            : lead.score >= 60
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }`}
                        style={{ width: `${lead.score}%` }}
                      ></div>
                    </div>
                    <span className="text-xs">{lead.score}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(lead.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>{lead.assignedTo}</TableCell>
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

export default LeadsList;
