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

interface Meeting {
  id: string;
  title: string;
  type: "Board" | "Committee" | "Shareholder" | "Special";
  date: string;
  status:
    | "Scheduled"
    | "Completed"
    | "Cancelled"
    | "Draft Minutes"
    | "Approved Minutes";
  attendees: string[];
  location: string;
  documents: string[];
}

interface BoardMeetingsProps {
  searchTerm: string;
}

const BoardMeetings = ({ searchTerm }: BoardMeetingsProps) => {
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const meetings: Meeting[] = [
    {
      id: "MTG-001",
      title: "Q3 2023 Board Meeting",
      type: "Board",
      date: "2023-09-15",
      status: "Approved Minutes",
      attendees: [
        "John Smith",
        "Sarah Johnson",
        "Michael Chen",
        "Emily Davis",
        "Robert Wilson",
      ],
      location: "Corporate Headquarters - Boardroom A",
      documents: ["Minutes", "Financial Report", "Strategic Plan Update"],
    },
    {
      id: "MTG-002",
      title: "Audit Committee Meeting",
      type: "Committee",
      date: "2023-08-22",
      status: "Approved Minutes",
      attendees: ["Michael Chen", "Robert Wilson", "Patricia Taylor"],
      location: "Virtual Meeting",
      documents: ["Minutes", "Audit Report", "Risk Assessment"],
    },
    {
      id: "MTG-003",
      title: "Annual Shareholder Meeting",
      type: "Shareholder",
      date: "2023-05-10",
      status: "Approved Minutes",
      attendees: [
        "John Smith",
        "Sarah Johnson",
        "Michael Chen",
        "Emily Davis",
        "Shareholders",
      ],
      location: "Grand Hotel Conference Center",
      documents: ["Minutes", "Annual Report", "Voting Results"],
    },
    {
      id: "MTG-004",
      title: "Compensation Committee Meeting",
      type: "Committee",
      date: "2023-07-18",
      status: "Approved Minutes",
      attendees: ["Sarah Johnson", "Emily Davis", "Lisa Garcia"],
      location: "Corporate Headquarters - Conference Room B",
      documents: ["Minutes", "Executive Compensation Review"],
    },
    {
      id: "MTG-005",
      title: "Special Board Meeting - Acquisition Review",
      type: "Special",
      date: "2023-08-05",
      status: "Approved Minutes",
      attendees: [
        "John Smith",
        "Sarah Johnson",
        "Michael Chen",
        "Emily Davis",
        "Robert Wilson",
      ],
      location: "Corporate Headquarters - Boardroom A",
      documents: ["Minutes", "Acquisition Proposal", "Due Diligence Report"],
    },
    {
      id: "MTG-006",
      title: "Q4 2023 Board Meeting",
      type: "Board",
      date: "2023-12-15",
      status: "Scheduled",
      attendees: [
        "John Smith",
        "Sarah Johnson",
        "Michael Chen",
        "Emily Davis",
        "Robert Wilson",
      ],
      location: "Corporate Headquarters - Boardroom A",
      documents: ["Agenda", "Q4 Forecast"],
    },
    {
      id: "MTG-007",
      title: "Governance Committee Meeting",
      type: "Committee",
      date: "2023-11-10",
      status: "Scheduled",
      attendees: ["John Smith", "Emily Davis", "Jessica Williams"],
      location: "Virtual Meeting",
      documents: ["Agenda", "Governance Policy Review"],
    },
  ];

  const filteredMeetings = meetings.filter(
    (meeting) =>
      (typeFilter === "all" || meeting.type === typeFilter) &&
      (statusFilter === "all" || meeting.status === statusFilter) &&
      (meeting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        meeting.id.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Meeting Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Board">Board</SelectItem>
              <SelectItem value="Committee">Committee</SelectItem>
              <SelectItem value="Shareholder">Shareholder</SelectItem>
              <SelectItem value="Special">Special</SelectItem>
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Scheduled">Scheduled</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
              <SelectItem value="Draft Minutes">Draft Minutes</SelectItem>
              <SelectItem value="Approved Minutes">Approved Minutes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Meeting ID</TableHead>
              <TableHead className="text-slate-300">Title</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Date</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Location</TableHead>
              <TableHead className="text-slate-300">Documents</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMeetings.map((meeting) => (
              <TableRow key={meeting.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {meeting.id}
                </TableCell>
                <TableCell>{meeting.title}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      meeting.type === "Board"
                        ? "bg-blue-500/10 text-blue-500"
                        : meeting.type === "Committee"
                          ? "bg-purple-500/10 text-purple-500"
                          : meeting.type === "Shareholder"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : "bg-amber-500/10 text-amber-500"
                    }`}
                  >
                    {meeting.type}
                  </span>
                </TableCell>
                <TableCell>
                  {new Date(meeting.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      meeting.status === "Approved Minutes"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : meeting.status === "Draft Minutes"
                          ? "bg-amber-500/10 text-amber-500"
                          : meeting.status === "Scheduled"
                            ? "bg-blue-500/10 text-blue-500"
                            : meeting.status === "Completed"
                              ? "bg-purple-500/10 text-purple-500"
                              : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {meeting.status}
                  </span>
                </TableCell>
                <TableCell>{meeting.location}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {meeting.documents.map((doc, index) => (
                      <span
                        key={index}
                        className="inline-flex rounded-full bg-slate-800 px-2 py-0.5 text-xs"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
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
                      <span className="sr-only">View Documents</span>
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

export default BoardMeetings;
