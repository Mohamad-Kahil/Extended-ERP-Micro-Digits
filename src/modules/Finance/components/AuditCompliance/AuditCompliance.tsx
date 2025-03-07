import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TransactionLogs from "./TransactionLogs";
import TaxCompliance from "./TaxCompliance";

const AuditCompliance = () => {
  const [activeView, setActiveView] = React.useState<"logs" | "tax">("logs");
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
                Compliant: 95%
              </span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
              <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
              <span className="text-xs font-medium text-amber-500">
                Pending Review: 8
              </span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
              <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
              <span className="text-xs font-medium text-red-500">
                Issues: 2
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={activeView === "logs" ? "default" : "outline"}
            onClick={() => setActiveView("logs")}
            className={
              activeView === "logs" ? "bg-cyan-600 hover:bg-cyan-700" : ""
            }
          >
            Transaction Logs
          </Button>
          <Button
            variant={activeView === "tax" ? "default" : "outline"}
            onClick={() => setActiveView("tax")}
            className={
              activeView === "tax" ? "bg-cyan-600 hover:bg-cyan-700" : ""
            }
          >
            Tax Compliance
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
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
              <path d="M16 5V3" />
              <path d="M8 5V3" />
              <path d="M3 9h18" />
              <path d="M18 4l3 3-3 3" />
            </svg>
            Schedule Audit
          </Button>
        </div>
      </div>

      {activeView === "logs" ? (
        <TransactionLogs searchTerm={searchTerm} />
      ) : (
        <TaxCompliance searchTerm={searchTerm} />
      )}
    </div>
  );
};

export default AuditCompliance;
