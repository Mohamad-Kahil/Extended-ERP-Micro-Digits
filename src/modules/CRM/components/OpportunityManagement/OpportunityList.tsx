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

interface Opportunity {
  id: string;
  name: string;
  company: string;
  value: number;
  stage: string;
  probability: number;
  expectedCloseDate: string;
  owner: string;
}

interface OpportunityListProps {
  searchTerm: string;
}

const opportunities: Opportunity[] = [
  {
    id: "OPP-001",
    name: "Enterprise Software Solution",
    company: "Acme Corporation",
    value: 120000,
    stage: "Proposal",
    probability: 60,
    expectedCloseDate: "2023-10-15",
    owner: "Sarah Johnson",
  },
  {
    id: "OPP-002",
    name: "Cloud Migration Project",
    company: "XYZ Industries",
    value: 85000,
    stage: "Negotiation",
    probability: 80,
    expectedCloseDate: "2023-09-30",
    owner: "Michael Chen",
  },
  {
    id: "OPP-003",
    name: "Security Infrastructure Upgrade",
    company: "Global Tech",
    value: 150000,
    stage: "Discovery",
    probability: 40,
    expectedCloseDate: "2023-11-20",
    owner: "Jessica Williams",
  },
  {
    id: "OPP-004",
    name: "Data Analytics Platform",
    company: "Innovative Solutions",
    value: 95000,
    stage: "Closed Won",
    probability: 100,
    expectedCloseDate: "2023-09-10",
    owner: "David Miller",
  },
  {
    id: "OPP-005",
    name: "Mobile App Development",
    company: "Future Systems",
    value: 75000,
    stage: "Proposal",
    probability: 55,
    expectedCloseDate: "2023-10-25",
    owner: "Sarah Johnson",
  },
  {
    id: "OPP-006",
    name: "Network Infrastructure Refresh",
    company: "Tech Innovations",
    value: 110000,
    stage: "Qualification",
    probability: 30,
    expectedCloseDate: "2023-12-05",
    owner: "Michael Chen",
  },
  {
    id: "OPP-007",
    name: "Managed Services Contract",
    company: "Alliance Group",
    value: 200000,
    stage: "Closed Lost",
    probability: 0,
    expectedCloseDate: "2023-09-05",
    owner: "Jessica Williams",
  },
];

const OpportunityList = ({ searchTerm }: OpportunityListProps) => {
  const [stageFilter, setStageFilter] = React.useState("all");

  const filteredOpportunities = opportunities.filter(
    (opportunity) =>
      (stageFilter === "all" || opportunity.stage === stageFilter) &&
      (opportunity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opportunity.company.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Get unique stages for filter
  const stages = [
    ...new Set(opportunities.map((opportunity) => opportunity.stage)),
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={stageFilter} onValueChange={setStageFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stages</SelectItem>
              {stages.map((stage) => (
                <SelectItem key={stage} value={stage}>
                  {stage}
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
              <TableHead className="text-slate-300">Opportunity</TableHead>
              <TableHead className="text-slate-300">Value</TableHead>
              <TableHead className="text-slate-300">Stage</TableHead>
              <TableHead className="text-slate-300">Probability</TableHead>
              <TableHead className="text-slate-300">Close Date</TableHead>
              <TableHead className="text-slate-300">Owner</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOpportunities.map((opportunity) => (
              <TableRow key={opportunity.id} className="border-slate-800">
                <TableCell>
                  <div>
                    <div className="font-medium text-slate-300">
                      {opportunity.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {opportunity.company}
                    </div>
                  </div>
                </TableCell>
                <TableCell>${opportunity.value.toLocaleString()}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      opportunity.stage === "Closed Won"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : opportunity.stage === "Closed Lost"
                          ? "bg-red-500/10 text-red-500"
                          : opportunity.stage === "Negotiation"
                            ? "bg-amber-500/10 text-amber-500"
                            : opportunity.stage === "Proposal"
                              ? "bg-blue-500/10 text-blue-500"
                              : opportunity.stage === "Discovery"
                                ? "bg-purple-500/10 text-purple-500"
                                : "bg-slate-500/10 text-slate-500"
                    }`}
                  >
                    {opportunity.stage}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-slate-700 rounded-full mr-2">
                      <div
                        className={`h-2 rounded-full ${
                          opportunity.probability >= 70
                            ? "bg-emerald-500"
                            : opportunity.probability >= 40
                              ? "bg-amber-500"
                              : opportunity.probability > 0
                                ? "bg-blue-500"
                                : "bg-red-500"
                        }`}
                        style={{ width: `${opportunity.probability}%` }}
                      ></div>
                    </div>
                    <span className="text-xs">{opportunity.probability}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(opportunity.expectedCloseDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{opportunity.owner}</TableCell>
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

export default OpportunityList;
