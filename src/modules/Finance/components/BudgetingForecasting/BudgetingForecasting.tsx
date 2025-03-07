import React from "react";
import { Button } from "@/components/ui/button";
import BudgetOverview from "./BudgetOverview";
import RevenueExpenseTracking from "./RevenueExpenseTracking";

const BudgetingForecasting = () => {
  const [activeView, setActiveView] = React.useState<"overview" | "tracking">(
    "overview",
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
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
        </div>
      </div>

      {activeView === "overview" ? (
        <BudgetOverview />
      ) : (
        <RevenueExpenseTracking />
      )}
    </div>
  );
};

export default BudgetingForecasting;
