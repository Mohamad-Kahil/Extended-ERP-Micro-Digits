import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import AccountingOverview from "./components/AccountingOverview";
import ChartOfAccounts from "./components/ChartOfAccounts/ChartOfAccounts";
import GeneralLedger from "./components/GeneralLedger/GeneralLedger";
import AccountsPayable from "./components/AccountsPayable/AccountsPayable";
import AccountsReceivable from "./components/AccountsReceivable/AccountsReceivable";
import FixedAssets from "./components/FixedAssets/FixedAssets";
import Procurement from "./components/Procurement/Procurement";
import Taxation from "./components/Taxation/Taxation";
import IntercompanyAccounting from "./components/IntercompanyAccounting/IntercompanyAccounting";

const AccountingDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { id: "overview", label: "Accounting Overview" },
    { id: "coa", label: "Chart of Accounts" },
    { id: "gl", label: "General Ledger" },
    { id: "ap", label: "Accounts Payable" },
    { id: "ar", label: "Accounts Receivable" },
    { id: "assets", label: "Fixed Assets" },
    { id: "procurement", label: "Procurement" },
    { id: "taxation", label: "Taxation & Compliance" },
    { id: "intercompany", label: "Intercompany" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <AccountingOverview />;
      case "coa":
        return <ChartOfAccounts />;
      case "gl":
        return <GeneralLedger />;
      case "ap":
        return <AccountsPayable />;
      case "ar":
        return <AccountsReceivable />;
      case "assets":
        return <FixedAssets />;
      case "procurement":
        return <Procurement />;
      case "taxation":
        return <Taxation />;
      case "intercompany":
        return <IntercompanyAccounting />;
      default:
        return <AccountingOverview />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const accountingNavbar = (
    <div className="flex items-center w-full overflow-x-auto">
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant={activeSection === item.id ? "default" : "ghost"}
          className={`${activeSection === item.id ? "bg-cyan-600 hover:bg-cyan-700" : "hover:bg-slate-700"} text-sm`}
          onClick={() => setActiveSection(item.id)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );

  return (
    <DashboardLayout navbar={accountingNavbar}>
      <div className="space-y-6">
        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
};

export default AccountingDashboard;
