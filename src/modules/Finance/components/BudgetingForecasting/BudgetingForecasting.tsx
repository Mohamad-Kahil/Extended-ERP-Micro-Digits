import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BudgetOverview from "./BudgetOverview";
import RevenueExpenseTracking from "./RevenueExpenseTracking";

const BudgetingForecasting = () => {
  const [activeView, setActiveView] = React.useState<"overview" | "tracking">(
    "overview",
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
              placeholder="Search budgets..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex space-x-3">
            <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
              <span className="text-xs font-medium text-emerald-500">
                Revenue: $4.2M
              </span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
              <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              <span className="text-xs font-medium text-blue-500">
                Expenses: $2.4M
              </span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20">
              <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
              <span className="text-xs font-medium text-purple-500">
                Profit: $1.8M
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={activeView === "overview" ? "default" : "outline"}
            onClick={() => setActiveView("overview")}
            className={
              activeView === "overview" ? "bg-cyan-600 hover:bg-cyan-700" : ""
            }
          >
            Budget Overview
          </Button>
          <Button
            variant={activeView === "tracking" ? "default" : "outline"}
            onClick={() => setActiveView("tracking")}
            className={
              activeView === "tracking" ? "bg-cyan-600 hover:bg-cyan-700" : ""
            }
          >
            Revenue & Expense Tracking
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
            Add Budget
          </Button>
        </div>
      </div>

      {activeView === "overview" ? (
        <BudgetOverview searchTerm={searchTerm} />
      ) : (
        <RevenueExpenseTracking searchTerm={searchTerm} />
      )}
    </div>
  );
};

export default BudgetingForecasting;
