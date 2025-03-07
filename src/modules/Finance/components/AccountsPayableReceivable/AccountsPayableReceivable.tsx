import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AccountsPayable from "./AccountsPayable";
import AccountsReceivable from "./AccountsReceivable";

const AccountsPayableReceivable = () => {
  const [activeView, setActiveView] = React.useState<"payable" | "receivable">(
    "payable",
  );
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="space-y-4">
      <div className="mb-4 flex items-center justify-between">
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

          <div className="flex space-x-3">
            <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
              <span className="text-xs font-medium text-emerald-500">
                Paid: $125,400
              </span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
              <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              <span className="text-xs font-medium text-blue-500">
                Receivable: $187,500
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
        <div className="flex space-x-2">
          <Button
            variant={activeView === "payable" ? "default" : "outline"}
            onClick={() => setActiveView("payable")}
            className={
              activeView === "payable" ? "bg-cyan-600 hover:bg-cyan-700" : ""
            }
          >
            Accounts Payable
          </Button>
          <Button
            variant={activeView === "receivable" ? "default" : "outline"}
            onClick={() => setActiveView("receivable")}
            className={
              activeView === "receivable" ? "bg-cyan-600 hover:bg-cyan-700" : ""
            }
          >
            Accounts Receivable
          </Button>
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
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add Transaction
          </Button>
        </div>
      </div>

      {activeView === "payable" ? (
        <AccountsPayable searchTerm={searchTerm} />
      ) : (
        <AccountsReceivable searchTerm={searchTerm} />
      )}
    </div>
  );
};

export default AccountsPayableReceivable;
