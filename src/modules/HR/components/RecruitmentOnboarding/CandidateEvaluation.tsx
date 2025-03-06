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

interface Candidate {
  id: string;
  name: string;
  email: string;
  position: string;
  appliedDate: string;
  status: "new" | "screening" | "interview" | "offer" | "rejected";
  source: string;
  rating: number;
}

const candidates: Candidate[] = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    position: "Senior Frontend Developer",
    appliedDate: "2023-06-15",
    status: "interview",
    source: "LinkedIn",
    rating: 4,
  },
  {
    id: "2",
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    position: "Product Manager",
    appliedDate: "2023-06-18",
    status: "screening",
    source: "Indeed",
    rating: 3,
  },
  {
    id: "3",
    name: "David Kim",
    email: "david.kim@example.com",
    position: "DevOps Engineer",
    appliedDate: "2023-06-20",
    status: "new",
    source: "Referral",
    rating: 0,
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    position: "UX/UI Designer",
    appliedDate: "2023-06-22",
    status: "offer",
    source: "Company Website",
    rating: 5,
  },
  {
    id: "5",
    name: "James Brown",
    email: "james.brown@example.com",
    position: "Marketing Specialist",
    appliedDate: "2023-06-25",
    status: "interview",
    source: "LinkedIn",
    rating: 4,
  },
  {
    id: "6",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    position: "Senior Frontend Developer",
    appliedDate: "2023-06-10",
    status: "rejected",
    source: "Indeed",
    rating: 2,
  },
  {
    id: "7",
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    position: "DevOps Engineer",
    appliedDate: "2023-06-12",
    status: "screening",
    source: "Glassdoor",
    rating: 3,
  },
];

const CandidateEvaluation = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const filteredCandidates = candidates.filter(
    (candidate) =>
      (statusFilter === "all" || candidate.status === statusFilter) &&
      (candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.email.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const renderRatingStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={i < rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={i < rating ? "text-amber-500" : "text-slate-600"}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Candidates
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {candidates.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">In Interview</div>
          <div className="mt-1 text-2xl font-bold text-blue-500">
            {candidates.filter((c) => c.status === "interview").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Offers Extended
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {candidates.filter((c) => c.status === "offer").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            New Applications
          </div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {candidates.filter((c) => c.status === "new").length}
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
              placeholder="Search candidates..."
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
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="screening">Screening</SelectItem>
              <SelectItem value="interview">Interview</SelectItem>
              <SelectItem value="offer">Offer</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
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
          Add Candidate
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Name</TableHead>
              <TableHead className="text-slate-300">Position</TableHead>
              <TableHead className="text-slate-300">Applied Date</TableHead>
              <TableHead className="text-slate-300">Source</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Rating</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCandidates.map((candidate) => (
              <TableRow key={candidate.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  <div>
                    <div>{candidate.name}</div>
                    <div className="text-xs text-slate-500">
                      {candidate.email}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{candidate.position}</TableCell>
                <TableCell>
                  {new Date(candidate.appliedDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{candidate.source}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      candidate.status === "new"
                        ? "bg-blue-500/10 text-blue-500"
                        : candidate.status === "screening"
                          ? "bg-purple-500/10 text-purple-500"
                          : candidate.status === "interview"
                            ? "bg-amber-500/10 text-amber-500"
                            : candidate.status === "offer"
                              ? "bg-emerald-500/10 text-emerald-500"
                              : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {candidate.status.charAt(0).toUpperCase() +
                      candidate.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>{renderRatingStars(candidate.rating)}</TableCell>
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

export default CandidateEvaluation;
