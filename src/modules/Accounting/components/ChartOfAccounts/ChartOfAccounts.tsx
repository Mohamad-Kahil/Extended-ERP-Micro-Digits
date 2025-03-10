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

interface ChartOfAccountsProps {
  currentEntity?: string;
}

const ChartOfAccounts: React.FC<ChartOfAccountsProps> = ({ currentEntity }) => {
  const [activeTab, setActiveTab] = useState("accounts");
  const [selectedEntity, setSelectedEntity] = useState(currentEntity || "all");
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch accounts based on selected entity
  useEffect(() => {
    const fetchAccounts = async () => {
      setLoading(true);
      try {
        // In a real implementation, you would call the API with the entity ID
        // For now, we'll just simulate filtering based on the entity name
        const mockAccounts = [
          {
            code: "1000",
            name: "Cash and Cash Equivalents",
            type: "Asset",
            category: "Current Asset",
            currency: "USD",
            entity: selectedEntity !== "all" ? selectedEntity : "All",
            status: "Active",
          },
          {
            code: "1100",
            name: "Accounts Receivable",
            type: "Asset",
            category: "Current Asset",
            currency: "USD",
            entity: selectedEntity !== "all" ? selectedEntity : "All",
            status: "Active",
          },
          // More accounts would be here
        ];

        // Filter accounts if a specific entity is selected
        const filteredAccounts =
          selectedEntity !== "all"
            ? mockAccounts.filter(
                (account) =>
                  account.entity === selectedEntity || account.entity === "All",
              )
            : mockAccounts;

        setAccounts(filteredAccounts);
      } catch (err) {
        console.error("Error fetching accounts:", err);
        setError("Failed to load accounts");
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [selectedEntity]);

  // Update selected entity when currentEntity changes
  useEffect(() => {
    if (currentEntity) {
      setSelectedEntity(currentEntity);
    }
  }, [currentEntity]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4">
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Chart of Accounts
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
                Add Account
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
                  placeholder="Search accounts..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedEntity} onValueChange={setSelectedEntity}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select Entity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Entities</SelectItem>
                  <SelectItem value="Parent Company">Parent Company</SelectItem>
                  <SelectItem value="Subsidiary 1">Subsidiary 1</SelectItem>
                  <SelectItem value="Subsidiary 2">Subsidiary 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  Active: 245
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  Inactive: 32
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
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
              <TabsTrigger value="structure">Structure</TabsTrigger>
              <TabsTrigger value="mapping">Mapping</TabsTrigger>
            </TabsList>

            <TabsContent value="accounts" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">Code</div>
                  <div className="col-span-3">Account Name</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-1">Currency</div>
                  <div className="col-span-1">Entity</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      code: "1000",
                      name: "Cash and Cash Equivalents",
                      type: "Asset",
                      category: "Current Asset",
                      currency: "USD",
                      entity: "Parent Company",
                      status: "Active",
                    },
                    {
                      code: "1100",
                      name: "Accounts Receivable",
                      type: "Asset",
                      category: "Current Asset",
                      currency: "USD",
                      entity: "Parent Company",
                      status: "Active",
                    },
                    {
                      code: "1200",
                      name: "Inventory",
                      type: "Asset",
                      category: "Current Asset",
                      currency: "USD",
                      entity: "Subsidiary 1",
                      status: "Active",
                    },
                    {
                      code: "1500",
                      name: "Fixed Assets",
                      type: "Asset",
                      category: "Non-Current Asset",
                      currency: "USD",
                      entity: "Subsidiary 1",
                      status: "Active",
                    },
                    {
                      code: "2000",
                      name: "Accounts Payable",
                      type: "Liability",
                      category: "Current Liability",
                      currency: "USD",
                      entity: "Subsidiary 1",
                      status: "Active",
                    },
                    {
                      code: "2100",
                      name: "Accrued Liabilities",
                      type: "Liability",
                      category: "Current Liability",
                      currency: "USD",
                      entity: "Subsidiary 2",
                      status: "Active",
                    },
                    {
                      code: "2500",
                      name: "Long-term Debt",
                      type: "Liability",
                      category: "Non-Current Liability",
                      currency: "USD",
                      entity: "Subsidiary 2",
                      status: "Active",
                    },
                    {
                      code: "3000",
                      name: "Common Stock",
                      type: "Equity",
                      category: "Equity",
                      currency: "USD",
                      entity: "Parent Company",
                      status: "Active",
                    },
                    {
                      code: "3100",
                      name: "Retained Earnings",
                      type: "Equity",
                      category: "Equity",
                      currency: "USD",
                      entity: "Parent Company",
                      status: "Active",
                    },
                    {
                      code: "4000",
                      name: "Revenue",
                      type: "Revenue",
                      category: "Income",
                      currency: "USD",
                      entity: "Subsidiary 2",
                      status: "Active",
                    },
                    {
                      code: "5000",
                      name: "Cost of Goods Sold",
                      type: "Expense",
                      category: "Cost of Sales",
                      currency: "USD",
                      entity: "Subsidiary 2",
                      status: "Active",
                    },
                    {
                      code: "6000",
                      name: "Operating Expenses",
                      type: "Expense",
                      category: "Expense",
                      currency: "USD",
                      entity: "Subsidiary 2",
                      status: "Active",
                    },
                  ]
                    .filter(
                      (account) =>
                        selectedEntity === "all" ||
                        account.entity === selectedEntity,
                    )
                    .map((account, index) => (
                      <div
                        key={index}
                        className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                      >
                        <div className="col-span-1 font-medium">
                          {account.code}
                        </div>
                        <div className="col-span-3">{account.name}</div>
                        <div className="col-span-2">{account.type}</div>
                        <div className="col-span-2">{account.category}</div>
                        <div className="col-span-1">{account.currency}</div>
                        <div className="col-span-1">{account.entity}</div>
                        <div className="col-span-1">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${account.status === "Active" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}`}
                          >
                            {account.status}
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

            <TabsContent value="structure" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800 p-4">
                <div className="text-sm font-medium text-white mb-4">
                  Account Hierarchy
                </div>
                <div className="space-y-2">
                  <div className="pl-0 py-2 border-b border-slate-800">
                    <div className="flex items-center">
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
                        className="mr-2 text-cyan-500"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span className="text-sm font-medium text-white">
                        Assets (1000-1999)
                      </span>
                    </div>
                  </div>
                  <div className="pl-6 py-2 border-b border-slate-800">
                    <div className="flex items-center">
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
                        className="mr-2 text-cyan-500"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span className="text-sm font-medium text-white">
                        Current Assets (1000-1499)
                      </span>
                    </div>
                  </div>
                  <div className="pl-12 py-2 border-b border-slate-800">
                    <div className="flex items-center">
                      <span className="text-sm text-slate-300">
                        1000 - Cash and Cash Equivalents
                      </span>
                    </div>
                  </div>
                  <div className="pl-12 py-2 border-b border-slate-800">
                    <div className="flex items-center">
                      <span className="text-sm text-slate-300">
                        1100 - Accounts Receivable
                      </span>
                    </div>
                  </div>
                  <div className="pl-12 py-2 border-b border-slate-800">
                    <div className="flex items-center">
                      <span className="text-sm text-slate-300">
                        1200 - Inventory
                      </span>
                    </div>
                  </div>
                  <div className="pl-6 py-2 border-b border-slate-800">
                    <div className="flex items-center">
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
                        className="mr-2 text-cyan-500"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span className="text-sm font-medium text-white">
                        Non-Current Assets (1500-1999)
                      </span>
                    </div>
                  </div>
                  <div className="pl-12 py-2 border-b border-slate-800">
                    <div className="flex items-center">
                      <span className="text-sm text-slate-300">
                        1500 - Fixed Assets
                      </span>
                    </div>
                  </div>
                  <div className="pl-0 py-2 border-b border-slate-800">
                    <div className="flex items-center">
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
                        className="mr-2 text-cyan-500"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span className="text-sm font-medium text-white">
                        Liabilities (2000-2999)
                      </span>
                    </div>
                  </div>
                  <div className="pl-0 py-2 border-b border-slate-800">
                    <div className="flex items-center">
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
                        className="mr-2 text-cyan-500"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span className="text-sm font-medium text-white">
                        Equity (3000-3999)
                      </span>
                    </div>
                  </div>
                  <div className="pl-0 py-2 border-b border-slate-800">
                    <div className="flex items-center">
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
                        className="mr-2 text-cyan-500"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span className="text-sm font-medium text-white">
                        Revenue (4000-4999)
                      </span>
                    </div>
                  </div>
                  <div className="pl-0 py-2 border-b border-slate-800">
                    <div className="flex items-center">
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
                        className="mr-2 text-cyan-500"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span className="text-sm font-medium text-white">
                        Expenses (5000-9999)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mapping" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Account Code</div>
                  <div className="col-span-3">Account Name</div>
                  <div className="col-span-3">Financial Statement</div>
                  <div className="col-span-2">Tax Mapping</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      code: "1000",
                      name: "Cash and Cash Equivalents",
                      statement: "Balance Sheet",
                      taxMapping: "Cash",
                    },
                    {
                      code: "1100",
                      name: "Accounts Receivable",
                      statement: "Balance Sheet",
                      taxMapping: "Receivables",
                    },
                    {
                      code: "1200",
                      name: "Inventory",
                      statement: "Balance Sheet",
                      taxMapping: "Inventory",
                    },
                    {
                      code: "1500",
                      name: "Fixed Assets",
                      statement: "Balance Sheet",
                      taxMapping: "Fixed Assets",
                    },
                    {
                      code: "2000",
                      name: "Accounts Payable",
                      statement: "Balance Sheet",
                      taxMapping: "Payables",
                    },
                    {
                      code: "3000",
                      name: "Common Stock",
                      statement: "Balance Sheet",
                      taxMapping: "Equity",
                    },
                    {
                      code: "4000",
                      name: "Revenue",
                      statement: "Income Statement",
                      taxMapping: "Revenue",
                    },
                    {
                      code: "5000",
                      name: "Cost of Goods Sold",
                      statement: "Income Statement",
                      taxMapping: "COGS",
                    },
                    {
                      code: "6000",
                      name: "Operating Expenses",
                      statement: "Income Statement",
                      taxMapping: "Expenses",
                    },
                  ].map((account, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2 font-medium">
                        {account.code}
                      </div>
                      <div className="col-span-3">{account.name}</div>
                      <div className="col-span-3">{account.statement}</div>
                      <div className="col-span-2">{account.taxMapping}</div>
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
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartOfAccounts;
