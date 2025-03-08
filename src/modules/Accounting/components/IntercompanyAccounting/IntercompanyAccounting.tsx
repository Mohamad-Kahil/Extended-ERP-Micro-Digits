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

const IntercompanyAccounting = () => {
  const [activeTab, setActiveTab] = useState("transactions");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4">
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Intercompany Accounting
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
                New Transaction
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
                  placeholder="Search transactions..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Entity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Entities</SelectItem>
                  <SelectItem value="parent">Parent Company</SelectItem>
                  <SelectItem value="subsidiary1">Subsidiary 1</SelectItem>
                  <SelectItem value="subsidiary2">Subsidiary 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Matched: 42
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Unmatched: 8
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
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="reconciliation">Reconciliation</TabsTrigger>
              <TabsTrigger value="entities">Entities</TabsTrigger>
            </TabsList>

            <TabsContent value="transactions" className="mt-6 space-y-6">
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
                  {[
                    {
                      id: "IC-2023-1001",
                      date: "2023-10-15",
                      fromEntity: "Parent Company",
                      toEntity: "Subsidiary 1",
                      amount: "$125,000.00",
                      currency: "USD",
                      status: "Matched",
                    },
                    {
                      id: "IC-2023-1002",
                      date: "2023-10-18",
                      fromEntity: "Subsidiary 2",
                      toEntity: "Parent Company",
                      amount: "$78,500.00",
                      currency: "USD",
                      status: "Matched",
                    },
                    {
                      id: "IC-2023-1003",
                      date: "2023-10-20",
                      fromEntity: "Subsidiary 1",
                      toEntity: "Subsidiary 2",
                      amount: "$45,200.00",
                      currency: "USD",
                      status: "Unmatched",
                    },
                    {
                      id: "IC-2023-1004",
                      date: "2023-10-22",
                      fromEntity: "Parent Company",
                      toEntity: "Subsidiary 2",
                      amount: "$92,800.00",
                      currency: "USD",
                      status: "Matched",
                    },
                    {
                      id: "IC-2023-1005",
                      date: "2023-10-25",
                      fromEntity: "Subsidiary 1",
                      toEntity: "Parent Company",
                      amount: "$37,350.00",
                      currency: "USD",
                      status: "Unmatched",
                    },
                    {
                      id: "IC-2023-1006",
                      date: "2023-10-28",
                      fromEntity: "Subsidiary 2",
                      toEntity: "Subsidiary 1",
                      amount: "$62,500.00",
                      currency: "USD",
                      status: "Matched",
                    },
                  ].map((transaction, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">
                        {transaction.id}
                      </div>
                      <div className="col-span-2">
                        {new Date(transaction.date).toLocaleDateString()}
                      </div>
                      <div className="col-span-2">{transaction.fromEntity}</div>
                      <div className="col-span-2">{transaction.toEntity}</div>
                      <div className="col-span-1">{transaction.amount}</div>
                      <div className="col-span-1">{transaction.currency}</div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${transaction.status === "Matched" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}`}
                        >
                          {transaction.status}
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
                  {[
                    {
                      name: "Global Holdings Inc.",
                      type: "Parent",
                      country: "USA",
                      currency: "USD",
                      ownership: "100%",
                    },
                    {
                      name: "European Operations Ltd.",
                      type: "Subsidiary",
                      country: "UK",
                      currency: "GBP",
                      ownership: "100%",
                    },
                    {
                      name: "Asia Pacific Services Co.",
                      type: "Subsidiary",
                      country: "Singapore",
                      currency: "SGD",
                      ownership: "85%",
                    },
                    {
                      name: "Latin America Division S.A.",
                      type: "Subsidiary",
                      country: "Mexico",
                      currency: "MXN",
                      ownership: "75%",
                    },
                    {
                      name: "Middle East Branch LLC",
                      type: "Branch",
                      country: "UAE",
                      currency: "AED",
                      ownership: "100%",
                    },
                    {
                      name: "African Operations Ltd.",
                      type: "Joint Venture",
                      country: "South Africa",
                      currency: "ZAR",
                      ownership: "51%",
                    },
                  ].map((entity, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">
                        {entity.name}
                      </div>
                      <div className="col-span-2">{entity.type}</div>
                      <div className="col-span-2">{entity.country}</div>
                      <div className="col-span-2">{entity.currency}</div>
                      <div className="col-span-2">{entity.ownership}</div>
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
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntercompanyAccounting;
