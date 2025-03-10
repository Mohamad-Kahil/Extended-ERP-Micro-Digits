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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Edit, Eye, Search, Plus, FileText, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface JournalEntry {
  id: string;
  entryNumber: string;
  date: string;
  description: string;
  reference?: string;
  amount: number;
  entityId: string;
  status: "draft" | "posted" | "approved" | "rejected";
  createdBy: string;
  createdAt: string;
  lineItems: {
    id: string;
    accountId: string;
    accountNumber: string;
    accountName: string;
    description?: string;
    debit?: number;
    credit?: number;
  }[];
}

interface JournalEntryListProps {
  entries: JournalEntry[];
  onAddEntry: () => void;
  onViewEntry: (entry: JournalEntry) => void;
  onEditEntry: (entry: JournalEntry) => void;
}

export function JournalEntryList({
  entries,
  onAddEntry,
  onViewEntry,
  onEditEntry,
}: JournalEntryListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft":
        return "border-amber-500 text-amber-500";
      case "posted":
        return "border-emerald-500 text-emerald-500";
      case "approved":
        return "border-blue-500 text-blue-500";
      case "rejected":
        return "border-red-500 text-red-500";
      default:
        return "border-slate-500 text-slate-500";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const filterEntries = () => {
    return entries.filter((entry) => {
      // Search term filter
      const matchesSearch =
        searchTerm === "" ||
        entry.entryNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (entry.reference &&
          entry.reference.toLowerCase().includes(searchTerm.toLowerCase()));

      // Status filter
      const matchesStatus =
        statusFilter === "all" || entry.status === statusFilter;

      // Date filter (simplified for demo)
      let matchesDate = true;
      if (dateFilter === "today") {
        const today = new Date().toISOString().split("T")[0];
        matchesDate = entry.date === today;
      } else if (dateFilter === "this-week") {
        const now = new Date();
        const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
        const entryDate = new Date(entry.date);
        matchesDate = entryDate >= startOfWeek;
      } else if (dateFilter === "this-month") {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const entryDate = new Date(entry.date);
        matchesDate = entryDate >= startOfMonth;
      }

      return matchesSearch && matchesStatus && matchesDate;
    });
  };

  const filteredEntries = filterEntries();

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search entries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="posted">Posted</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>

            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dates</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="w-full md:w-auto">
            <FileText className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button
            onClick={onAddEntry}
            className="bg-cyan-600 hover:bg-cyan-700 w-full md:w-auto"
          >
            <Plus className="mr-2 h-4 w-4" /> New Journal Entry
          </Button>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800/50">
            <TableRow>
              <TableHead className="w-[120px]">Entry #</TableHead>
              <TableHead className="w-[120px]">Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-[120px]">Reference</TableHead>
              <TableHead className="text-right w-[120px]">Amount</TableHead>
              <TableHead className="w-[120px]">Status</TableHead>
              <TableHead className="text-right w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEntries.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-4 text-slate-400"
                >
                  {searchTerm || statusFilter !== "all" || dateFilter !== "all"
                    ? "No journal entries match your filters"
                    : "No journal entries found. Click 'New Journal Entry' to create one."}
                </TableCell>
              </TableRow>
            ) : (
              filteredEntries.map((entry) => (
                <TableRow key={entry.id} className="hover:bg-slate-800/50">
                  <TableCell className="font-medium">
                    {entry.entryNumber}
                  </TableCell>
                  <TableCell>{formatDate(entry.date)}</TableCell>
                  <TableCell className="max-w-[300px] truncate">
                    {entry.description}
                  </TableCell>
                  <TableCell>{entry.reference || "-"}</TableCell>
                  <TableCell className="text-right">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(entry.amount)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={getStatusColor(entry.status)}
                    >
                      {entry.status.charAt(0).toUpperCase() +
                        entry.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => onViewEntry(entry)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      {entry.status === "draft" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => onEditEntry(entry)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
