import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FinancialOverview from "./components/FinancialOverview";
import GeneralLedger from "./components/GeneralLedger/GeneralLedger";
import BudgetingForecasting from "./components/BudgetingForecasting/BudgetingForecasting";
import AccountsPayableReceivable from "./components/AccountsPayableReceivable/AccountsPayableReceivable";
import AuditCompliance from "./components/AuditCompliance/AuditCompliance";
import { motion, AnimatePresence } from "framer-motion";

const FinanceDashboard = () => {
  const [activeSection, setActiveSection] = useState("general-ledger");

  const navItems = [
    { id: "overview", label: "Finance Overview" },
    { id: "general-ledger", label: "General Ledger" },
    { id: "accounts", label: "AP/AR" },
    { id: "budgeting", label: "Budgeting" },
    { id: "audit", label: "Audit & Compliance" },
    { id: "tax", label: "Tax Management" },
    { id: "reporting", label: "Financial Reporting" },
    { id: "treasury", label: "Treasury" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">
              Finance Overview Dashboard
            </h2>
            <p className="text-base text-slate-300">
              Welcome to the Finance management system.
            </p>
          </div>
        );
      case "general-ledger":
        return <GeneralLedger />;
      case "accounts":
        return <AccountsPayableReceivable />;
      case "budgeting":
        return <BudgetingForecasting />;
      case "audit":
        return <AuditCompliance />;
      case "tax":
      case "reporting":
      case "treasury":
        return (
          <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">
              {navItems.find((item) => item.id === activeSection)?.label} Module
            </h2>
            <p className="text-base text-slate-300">
              This module is currently under development.
            </p>
          </div>
        );
      default:
        return <GeneralLedger />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const financeNavbar = (
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
    <DashboardLayout navbar={financeNavbar}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Finance & Accounting
          </h1>
          <p className="text-slate-400">
            Manage financial transactions, reporting, and compliance
          </p>
        </div>

        {/* Status Summary Boxes */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
            <div className="text-sm font-medium text-slate-400">
              Total Transactions
            </div>
            <div className="mt-1 text-2xl font-bold text-white">1,248</div>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
            <div className="text-sm font-medium text-slate-400">
              Pending Approvals
            </div>
            <div className="mt-1 text-2xl font-bold text-amber-500">24</div>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
            <div className="text-sm font-medium text-slate-400">
              Monthly Revenue
            </div>
            <div className="mt-1 text-2xl font-bold text-emerald-500">
              $128,450
            </div>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
            <div className="text-sm font-medium text-slate-400">
              Outstanding Invoices
            </div>
            <div className="mt-1 text-2xl font-bold text-red-500">18</div>
          </div>
        </div>

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

export default FinanceDashboard;
