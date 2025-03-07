import React from "react";
import { Button } from "@/components/ui/button";
import AccountsPayable from "./AccountsPayable";
import AccountsReceivable from "./AccountsReceivable";

const AccountsPayableReceivable = () => {
  const [activeView, setActiveView] = React.useState<"payable" | "receivable">(
    "payable",
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
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
        </div>
      </div>

      {activeView === "payable" ? <AccountsPayable /> : <AccountsReceivable />}
    </div>
  );
};

export default AccountsPayableReceivable;
