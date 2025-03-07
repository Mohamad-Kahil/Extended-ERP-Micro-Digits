import React from "react";
import { Button } from "@/components/ui/button";
import ChartOfAccounts from "./ChartOfAccounts";
import JournalEntries from "./JournalEntries";

const GeneralLedger = () => {
  const [activeView, setActiveView] = React.useState<"accounts" | "journal">(
    "accounts",
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <div className="flex space-x-2">
          <Button
            variant={activeView === "accounts" ? "default" : "outline"}
            onClick={() => setActiveView("accounts")}
            className={
              activeView === "accounts" ? "bg-cyan-600 hover:bg-cyan-700" : ""
            }
          >
            + Add Account
          </Button>
          <Button
            variant={activeView === "accounts" ? "default" : "outline"}
            onClick={() => setActiveView("accounts")}
            className={
              activeView === "accounts" ? "bg-cyan-600 hover:bg-cyan-700" : ""
            }
          >
            Chart of Accounts
          </Button>
          <Button
            variant={activeView === "journal" ? "default" : "outline"}
            onClick={() => setActiveView("journal")}
            className={
              activeView === "journal" ? "bg-cyan-600 hover:bg-cyan-700" : ""
            }
          >
            Journal Entries
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

      {activeView === "accounts" ? <ChartOfAccounts /> : <JournalEntries />}
    </div>
  );
};

export default GeneralLedger;
