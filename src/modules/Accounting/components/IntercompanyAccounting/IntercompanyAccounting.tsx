import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useIntercompanyData } from "./hooks/useIntercompanyData";
import NewTransactionDialog from "./components/NewTransactionDialog";
import NewEntityDialog from "./components/NewEntityDialog";
import ViewTransactionDialog from "./components/ViewTransactionDialog";
import EditTransactionDialog from "./components/EditTransactionDialog";
import { intercompanyTransactionsApi } from "@/lib/api/accounting";

interface IntercompanyAccountingProps {
  currentEntity?: string;
}

const IntercompanyAccounting: React.FC<IntercompanyAccountingProps> = ({
  currentEntity,
}) => {
  const [activeTab, setActiveTab] = useState("transactions");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(
    currentEntity || "All Companies",
  );

  // Update selected company when currentEntity changes
  useEffect(() => {
    if (currentEntity) {
      setSelectedCompany(currentEntity);
    }
  }, [currentEntity]);

  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  // Fetch data from API
  const { entities, allEntities, transactions, loading, error, refetch } =
    useIntercompanyData(selectedCompany);

  // Extract company names for the dropdown
  const companies = allEntities.map((entity) => entity.name);

  // Handle transaction deletion
  const handleDeleteTransaction = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      try {
        await intercompanyTransactionsApi.delete(id);
        refetch(); // Refresh the data
      } catch (err) {
        console.error("Error deleting transaction:", err);
        alert("Failed to delete transaction. Please try again.");
      }
    }
  };

  // Filter transactions based on selected filters
  const filteredTransactions = transactions
    .filter(
      (transaction) =>
        statusFilter === "all" ||
        transaction.status.toLowerCase() === statusFilter.toLowerCase(),
    )
    .filter(
      (transaction) =>
        searchTerm === "" ||
        transaction.transaction_ref
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.from_entity?.name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.to_entity?.name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return (
          new Date(b.transaction_date).getTime() -
          new Date(a.transaction_date).getTime()
        );
      } else if (sortOrder === "oldest") {
        return (
          new Date(a.transaction_date).getTime() -
          new Date(b.transaction_date).getTime()
        );
      } else if (sortOrder === "amount-high") {
        return b.amount - a.amount;
      } else if (sortOrder === "amount-low") {
        return a.amount - b.amount;
      }
      return 0;
    });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-white">
            Intercompany Accounting
          </h2>
        </div>
        <NewEntityDialog entities={allEntities} onEntityCreated={refetch} />
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Intercompany Transactions
            </CardTitle>
            <div className="flex space-x-2">
              <Button variant="outline">
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
                Export
              </Button>
              <NewTransactionDialog
                entities={allEntities}
                onTransactionCreated={refetch}
                defaultEntityName={
                  selectedCompany !== "All Companies"
                    ? selectedCompany
                    : undefined
                }
              />
              <Button className="bg-purple-600 hover:bg-purple-700">
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
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                Reconcile
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center space-x-4 flex-wrap gap-y-2">
              <div className="relative w-64">
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
                  placeholder="Search transactions..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="matched">Matched</SelectItem>
                  <SelectItem value="unmatched">Unmatched</SelectItem>
                </SelectContent>
              </Select>
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="current-month">Current Month</SelectItem>
                  <SelectItem value="previous-month">Previous Month</SelectItem>
                  <SelectItem value="current-quarter">
                    Current Quarter
                  </SelectItem>
                  <SelectItem value="ytd">Year to Date</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="amount-high">
                    Amount (High to Low)
                  </SelectItem>
                  <SelectItem value="amount-low">
                    Amount (Low to High)
                  </SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="h-10">
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
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
                Analytics
              </Button>
              <Button variant="outline" size="sm" className="h-10">
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
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                </svg>
                Batch Process
              </Button>
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Matched:{" "}
                  {
                    filteredTransactions.filter((t) => t.status === "Matched")
                      .length
                  }
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Unmatched:{" "}
                  {
                    filteredTransactions.filter((t) => t.status === "Unmatched")
                      .length
                  }
                </span>
              </div>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-4 bg-slate-800">
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="reconciliation">Reconciliation</TabsTrigger>
              <TabsTrigger value="entities">Entities</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="transactions" className="mt-6 space-y-6">
              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
                </div>
              ) : error ? (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-md">
                  {error}
                </div>
              ) : filteredTransactions.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <p>
                    No transactions found. Create a new transaction to get
                    started.
                  </p>
                </div>
              ) : (
                <div className="rounded-md border border-slate-800">
                  <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                    <div className="col-span-1">Ref #</div>
                    <div className="col-span-2">Date</div>
                    <div className="col-span-2">From Entity</div>
                    <div className="col-span-2">To Entity</div>
                    <div className="col-span-1">Amount</div>
                    <div className="col-span-1">Currency</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-2">Actions</div>
                  </div>
                  <div className="divide-y divide-slate-800">
                    {filteredTransactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                      >
                        <div className="col-span-1 font-medium">
                          {transaction.transaction_ref}
                        </div>
                        <div className="col-span-2">
                          {new Date(
                            transaction.transaction_date,
                          ).toLocaleDateString()}
                        </div>
                        <div className="col-span-2">
                          {transaction.from_entity?.name}
                        </div>
                        <div className="col-span-2">
                          {transaction.to_entity?.name}
                        </div>
                        <div className="col-span-1">
                          $
                          {transaction.amount.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </div>
                        <div className="col-span-1">{transaction.currency}</div>
                        <div className="col-span-1">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${transaction.status === "Matched" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}`}
                          >
                            {transaction.status}
                          </span>
                        </div>
                        <div className="col-span-2 flex space-x-2">
                          <ViewTransactionDialog
                            transactionId={transaction.id}
                          />
                          <EditTransactionDialog
                            transactionId={transaction.id}
                            onTransactionUpdated={refetch}
                          />
                          <button
                            className="text-slate-400 hover:text-red-500 transition-colors"
                            onClick={() =>
                              handleDeleteTransaction(transaction.id)
                            }
                          >
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
                            >
                              <path d="M3 6h18" />
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="reconciliation" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Period</div>
                  <div className="col-span-2">Entity Pair</div>
                  <div className="col-span-2">Total Transactions</div>
                  <div className="col-span-2">Matched</div>
                  <div className="col-span-2">Unmatched</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      period: "Oct 2023",
                      entityPair: "Parent - Sub 1",
                      total: 12,
                      matched: 10,
                      unmatched: 2,
                    },
                    {
                      period: "Oct 2023",
                      entityPair: "Parent - Sub 2",
                      total: 8,
                      matched: 7,
                      unmatched: 1,
                    },
                    {
                      period: "Oct 2023",
                      entityPair: "Sub 1 - Sub 2",
                      total: 5,
                      matched: 3,
                      unmatched: 2,
                    },
                    {
                      period: "Sep 2023",
                      entityPair: "Parent - Sub 1",
                      total: 15,
                      matched: 15,
                      unmatched: 0,
                    },
                    {
                      period: "Sep 2023",
                      entityPair: "Parent - Sub 2",
                      total: 10,
                      matched: 10,
                      unmatched: 0,
                    },
                    {
                      period: "Sep 2023",
                      entityPair: "Sub 1 - Sub 2",
                      total: 7,
                      matched: 7,
                      unmatched: 0,
                    },
                  ].map((recon, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">
                        {recon.period}
                      </div>
                      <div className="col-span-2">{recon.entityPair}</div>
                      <div className="col-span-2">{recon.total}</div>
                      <div className="col-span-2 text-emerald-500">
                        {recon.matched}
                      </div>
                      <div className="col-span-2 text-amber-500">
                        {recon.unmatched}
                      </div>
                      <div className="col-span-2 flex space-x-2">
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="entities" className="mt-6 space-y-6">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium text-white">
                  Intercompany Entities
                </h3>
                <NewEntityDialog
                  entities={allEntities}
                  onEntityCreated={refetch}
                />
              </div>

              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
                </div>
              ) : error ? (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-md">
                  {error}
                </div>
              ) : entities.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <p>No entities found. Create a new entity to get started.</p>
                </div>
              ) : (
                <div className="rounded-md border border-slate-800">
                  <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                    <div className="col-span-2">Entity Name</div>
                    <div className="col-span-2">Type</div>
                    <div className="col-span-2">Country</div>
                    <div className="col-span-2">Currency</div>
                    <div className="col-span-2">Ownership %</div>
                    <div className="col-span-2">Actions</div>
                  </div>
                  <div className="divide-y divide-slate-800">
                    {entities.map((entity) => (
                      <div
                        key={entity.id}
                        className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                      >
                        <div className="col-span-2 font-medium">
                          {entity.name}
                        </div>
                        <div className="col-span-2">{entity.entity_type}</div>
                        <div className="col-span-2">
                          {entity.country || "-"}
                        </div>
                        <div className="col-span-2">{entity.currency}</div>
                        <div className="col-span-2">
                          {entity.ownership_percentage
                            ? `${entity.ownership_percentage}%`
                            : "-"}
                        </div>
                        <div className="col-span-2 flex space-x-2">
                          <button className="text-slate-400 hover:text-white transition-colors">
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
                            >
                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          </button>
                          <button className="text-slate-400 hover:text-white transition-colors">
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
                            >
                              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="reports" className="mt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-slate-800 bg-slate-900">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-white">
                      Intercompany Transaction Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center">
                      <div className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mx-auto mb-4 text-slate-600"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                          <path d="M3 9h18" />
                          <path d="M9 21V9" />
                        </svg>
                        <p className="text-slate-400">
                          Transaction summary report will be displayed here
                        </p>
                        <Button variant="outline" className="mt-4">
                          Generate Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-800 bg-slate-900">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-white">
                      Reconciliation Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center">
                      <div className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mx-auto mb-4 text-slate-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <p className="text-slate-400">
                          Reconciliation status report will be displayed here
                        </p>
                        <Button variant="outline" className="mt-4">
                          Generate Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntercompanyAccounting;
