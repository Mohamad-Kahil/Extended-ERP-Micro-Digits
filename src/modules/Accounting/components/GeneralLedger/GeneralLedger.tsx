import React, { useState } from "react";
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

const GeneralLedger = () => {
  const [activeTab, setActiveTab] = useState("journal");
  const [selectedPeriod, setSelectedPeriod] = useState("current");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4">
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              General Ledger
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
              <Button className="bg-cyan-600 hover:bg-cyan-700">
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
                New Journal Entry
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center space-x-4">
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
                  placeholder="Search entries..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Current Period</SelectItem>
                  <SelectItem value="previous">Previous Period</SelectItem>
                  <SelectItem value="ytd">Year to Date</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Posted: 128
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Pending: 12
                </span>
              </div>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-slate-800">
              <TabsTrigger value="journal">Journal Entries</TabsTrigger>
              <TabsTrigger value="ledger">Ledger Accounts</TabsTrigger>
              <TabsTrigger value="reconciliation">Reconciliation</TabsTrigger>
            </TabsList>

            <TabsContent value="journal" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">Entry #</div>
                  <div className="col-span-2">Date</div>
                  <div className="col-span-3">Description</div>
                  <div className="col-span-1">Debit</div>
                  <div className="col-span-1">Credit</div>
                  <div className="col-span-1">Currency</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "JE-2023-1001",
                      date: "2023-10-15",
                      description: "Monthly Rent Payment",
                      debit: "$2,500.00",
                      credit: "$2,500.00",
                      currency: "USD",
                      status: "Posted",
                    },
                    {
                      id: "JE-2023-1002",
                      date: "2023-10-15",
                      description: "Utility Payments",
                      debit: "$850.00",
                      credit: "$850.00",
                      currency: "USD",
                      status: "Posted",
                    },
                    {
                      id: "JE-2023-1003",
                      date: "2023-10-16",
                      description: "Sales Revenue",
                      debit: "$12,450.00",
                      credit: "$12,450.00",
                      currency: "USD",
                      status: "Posted",
                    },
                    {
                      id: "JE-2023-1004",
                      date: "2023-10-17",
                      description: "Payroll Processing",
                      debit: "$18,750.00",
                      credit: "$18,750.00",
                      currency: "USD",
                      status: "Posted",
                    },
                    {
                      id: "JE-2023-1005",
                      date: "2023-10-18",
                      description: "Inventory Purchase",
                      debit: "$5,200.00",
                      credit: "$5,200.00",
                      currency: "USD",
                      status: "Posted",
                    },
                    {
                      id: "JE-2023-1006",
                      date: "2023-10-19",
                      description: "Marketing Expenses",
                      debit: "$3,500.00",
                      credit: "$3,500.00",
                      currency: "USD",
                      status: "Pending",
                    },
                    {
                      id: "JE-2023-1007",
                      date: "2023-10-20",
                      description: "Equipment Purchase",
                      debit: "$8,750.00",
                      credit: "$8,750.00",
                      currency: "USD",
                      status: "Pending",
                    },
                  ].map((entry, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{entry.id}</div>
                      <div className="col-span-2">
                        {new Date(entry.date).toLocaleDateString()}
                      </div>
                      <div className="col-span-3">{entry.description}</div>
                      <div className="col-span-1">{entry.debit}</div>
                      <div className="col-span-1">{entry.credit}</div>
                      <div className="col-span-1">{entry.currency}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${entry.status === "Posted" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}`}
                        >
                          {entry.status}
                        </span>
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
            </TabsContent>

            <TabsContent value="ledger" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">Account #</div>
                  <div className="col-span-3">Account Name</div>
                  <div className="col-span-2">Opening Balance</div>
                  <div className="col-span-2">Debits</div>
                  <div className="col-span-2">Credits</div>
                  <div className="col-span-2">Ending Balance</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      code: "1000",
                      name: "Cash and Cash Equivalents",
                      opening: "$125,000.00",
                      debits: "$45,000.00",
                      credits: "$38,500.00",
                      ending: "$131,500.00",
                    },
                    {
                      code: "1100",
                      name: "Accounts Receivable",
                      opening: "$78,500.00",
                      debits: "$32,450.00",
                      credits: "$28,750.00",
                      ending: "$82,200.00",
                    },
                    {
                      code: "1200",
                      name: "Inventory",
                      opening: "$95,200.00",
                      debits: "$18,500.00",
                      credits: "$22,300.00",
                      ending: "$91,400.00",
                    },
                    {
                      code: "1500",
                      name: "Fixed Assets",
                      opening: "$250,000.00",
                      debits: "$8,750.00",
                      credits: "$2,500.00",
                      ending: "$256,250.00",
                    },
                    {
                      code: "2000",
                      name: "Accounts Payable",
                      opening: "$45,200.00",
                      debits: "$28,500.00",
                      credits: "$32,750.00",
                      ending: "$49,450.00",
                    },
                    {
                      code: "3000",
                      name: "Common Stock",
                      opening: "$500,000.00",
                      debits: "$0.00",
                      credits: "$0.00",
                      ending: "$500,000.00",
                    },
                    {
                      code: "4000",
                      name: "Revenue",
                      opening: "$0.00",
                      debits: "$0.00",
                      credits: "$125,450.00",
                      ending: "$125,450.00",
                    },
                    {
                      code: "5000",
                      name: "Cost of Goods Sold",
                      opening: "$0.00",
                      debits: "$78,500.00",
                      credits: "$0.00",
                      ending: "$78,500.00",
                    },
                    {
                      code: "6000",
                      name: "Operating Expenses",
                      opening: "$0.00",
                      debits: "$45,750.00",
                      credits: "$0.00",
                      ending: "$45,750.00",
                    },
                  ].map((account, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">
                        {account.code}
                      </div>
                      <div className="col-span-3">{account.name}</div>
                      <div className="col-span-2">{account.opening}</div>
                      <div className="col-span-2">{account.debits}</div>
                      <div className="col-span-2">{account.credits}</div>
                      <div className="col-span-2 font-medium">
                        {account.ending}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reconciliation" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Account</div>
                  <div className="col-span-2">Period</div>
                  <div className="col-span-2">Book Balance</div>
                  <div className="col-span-2">Bank Balance</div>
                  <div className="col-span-2">Difference</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      account: "1000 - Cash",
                      period: "Oct 2023",
                      book: "$131,500.00",
                      bank: "$131,500.00",
                      difference: "$0.00",
                      status: "Reconciled",
                    },
                    {
                      account: "1001 - Checking",
                      period: "Oct 2023",
                      book: "$85,750.00",
                      bank: "$85,750.00",
                      difference: "$0.00",
                      status: "Reconciled",
                    },
                    {
                      account: "1002 - Savings",
                      period: "Oct 2023",
                      book: "$250,000.00",
                      bank: "$250,000.00",
                      difference: "$0.00",
                      status: "Reconciled",
                    },
                    {
                      account: "1100 - AR",
                      period: "Oct 2023",
                      book: "$82,200.00",
                      bank: "$80,450.00",
                      difference: "$1,750.00",
                      status: "In Progress",
                    },
                    {
                      account: "2000 - AP",
                      period: "Oct 2023",
                      book: "$49,450.00",
                      bank: "$48,200.00",
                      difference: "$1,250.00",
                      status: "In Progress",
                    },
                  ].map((recon, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">
                        {recon.account}
                      </div>
                      <div className="col-span-2">{recon.period}</div>
                      <div className="col-span-2">{recon.book}</div>
                      <div className="col-span-2">{recon.bank}</div>
                      <div className="col-span-2">{recon.difference}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${recon.status === "Reconciled" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}`}
                        >
                          {recon.status}
                        </span>
                      </div>
                      <div className="col-span-1 flex space-x-2">
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneralLedger;
