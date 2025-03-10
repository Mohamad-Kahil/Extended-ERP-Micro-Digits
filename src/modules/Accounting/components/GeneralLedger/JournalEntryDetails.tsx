import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit, CheckCircle, XCircle } from "lucide-react";
import { JournalEntry } from "./JournalEntryList";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface JournalEntryDetailsProps {
  entry: JournalEntry;
  onBack: () => void;
  onEdit: (entry: JournalEntry) => void;
  onPost?: (entry: JournalEntry) => void;
  onApprove?: (entry: JournalEntry) => void;
  onReject?: (entry: JournalEntry) => void;
}

export function JournalEntryDetails({
  entry,
  onBack,
  onEdit,
  onPost,
  onApprove,
  onReject,
}: JournalEntryDetailsProps) {
  // Ensure we have a valid entry object
  if (!entry) {
    return (
      <div className="p-4 text-center">
        <p>Journal entry not found or data is loading...</p>
        <Button variant="ghost" onClick={onBack} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Journal Entries
        </Button>
      </div>
    );
  }
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

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(date);
  };

  // Calculate totals
  const totalDebits = entry.lineItems.reduce(
    (sum, item) => sum + (item.debit || 0),
    0,
  );
  const totalCredits = entry.lineItems.reduce(
    (sum, item) => sum + (item.credit || 0),
    0,
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="pl-0">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Journal Entries
        </Button>
        <div className="flex space-x-2">
          {entry.status === "draft" && onPost && (
            <Button
              onClick={() => onPost(entry)}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <CheckCircle className="mr-2 h-4 w-4" /> Post Entry
            </Button>
          )}
          {entry.status === "posted" && onApprove && (
            <Button
              onClick={() => onApprove(entry)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <CheckCircle className="mr-2 h-4 w-4" /> Approve
            </Button>
          )}
          {entry.status === "posted" && onReject && (
            <Button
              onClick={() => onReject(entry)}
              variant="outline"
              className="text-red-500 border-red-500 hover:bg-red-500/10"
            >
              <XCircle className="mr-2 h-4 w-4" /> Reject
            </Button>
          )}
          {entry.status === "draft" && (
            <Button
              onClick={() => onEdit(entry)}
              className="bg-cyan-600 hover:bg-cyan-700"
            >
              <Edit className="mr-2 h-4 w-4" /> Edit Entry
            </Button>
          )}
        </div>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Journal Entry: {entry.entryNumber}
            </CardTitle>
            <Badge variant="outline" className={getStatusColor(entry.status)}>
              {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-slate-400">Date</h3>
                <p className="mt-1 text-white">{formatDate(entry.date)}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-400">
                  Description
                </h3>
                <p className="mt-1 text-white">{entry.description}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-400">
                  Reference
                </h3>
                <p className="mt-1 text-white">
                  {entry.reference || "Not specified"}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-400">Amount</h3>
                <p className="mt-1 text-lg font-bold text-white">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(entry.amount)}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-slate-400">
                  Created By
                </h3>
                <p className="mt-1 text-white">{entry.createdBy}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-400">
                  Created At
                </h3>
                <p className="mt-1 text-white">
                  {formatDateTime(entry.createdAt)}
                </p>
              </div>

              {entry.status !== "draft" && (
                <div>
                  <h3 className="text-sm font-medium text-slate-400">
                    Posted At
                  </h3>
                  <p className="mt-1 text-white">[Posted Date]</p>
                </div>
              )}

              {entry.status === "approved" && (
                <div>
                  <h3 className="text-sm font-medium text-slate-400">
                    Approved By
                  </h3>
                  <p className="mt-1 text-white">[Approver Name]</p>
                </div>
              )}

              {entry.status === "rejected" && (
                <div>
                  <h3 className="text-sm font-medium text-slate-400">
                    Rejected By
                  </h3>
                  <p className="mt-1 text-white">[Rejector Name]</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-slate-400 mb-3">
              Line Items
            </h3>
            <div className="rounded-md border border-slate-800">
              <Table>
                <TableHeader className="bg-slate-800/50">
                  <TableRow>
                    <TableHead className="w-[180px]">Account</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right w-[150px]">
                      Debit
                    </TableHead>
                    <TableHead className="text-right w-[150px]">
                      Credit
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {entry.lineItems.map((item, index) => (
                    <TableRow key={item.id} className="hover:bg-slate-800/50">
                      <TableCell className="font-medium">
                        {item.accountNumber} - {item.accountName}
                      </TableCell>
                      <TableCell>{item.description || "-"}</TableCell>
                      <TableCell className="text-right">
                        {item.debit
                          ? new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(item.debit)
                          : "-"}
                      </TableCell>
                      <TableCell className="text-right">
                        {item.credit
                          ? new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(item.credit)
                          : "-"}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-slate-800/20 font-medium">
                    <TableCell colSpan={2} className="text-right">
                      Totals
                    </TableCell>
                    <TableCell className="text-right text-emerald-500">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(totalDebits)}
                    </TableCell>
                    <TableCell className="text-right text-emerald-500">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(totalCredits)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {(entry.status === "rejected" || entry.status === "approved") && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-slate-400 mb-3">
                {entry.status === "rejected" ? "Rejection" : "Approval"} Notes
              </h3>
              <div className="rounded-md border border-slate-800 p-4 text-slate-300">
                {entry.status === "rejected"
                  ? "[Rejection notes would appear here]"
                  : "[Approval notes would appear here]"}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
