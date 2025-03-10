import React, { useState, useEffect } from "react";
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
import FinancialReporting from "./components/FinancialReporting/FinancialReporting";
import Budgeting from "./components/Budgeting/Budgeting";
import AuditControls from "./components/AuditControls/AuditControls";
import CostAccounting from "./components/CostAccounting/CostAccounting";
import { intercompanyEntitiesApi } from "@/lib/api/accounting";

const AccountingDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [currentEntity, setCurrentEntity] = useState("");
  const [availableEntities, setAvailableEntities] = useState<string[]>([]);

  // Fetch available entities when component mounts
  useEffect(() => {
    const fetchEntities = async () => {
      try {
        const entities = await intercompanyEntitiesApi.getAll();
        const entityNames = entities.map((entity) => entity.name);
        setAvailableEntities(entityNames);

        // Set default entity if available
        if (entityNames.length > 0) {
          setCurrentEntity(entityNames[0]);
        }
      } catch (error) {
        console.error("Failed to fetch entities:", error);
        // Fallback to mock data
        const mockEntityNames = [
          "Parent Company",
          "Subsidiary 1",
          "Subsidiary 2",
          "Joint Venture",
        ];
        setAvailableEntities(mockEntityNames);
        setCurrentEntity(mockEntityNames[0]);
      }
    };

    fetchEntities();
  }, []);

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "coa", label: "CoA" },
    { id: "gl", label: "General Ledger" },
    { id: "ap", label: "Accounts Payable" },
    { id: "ar", label: "Accounts Receivable" },
    { id: "assets", label: "Fixed Assets" },
    { id: "procurement", label: "Procurement" },
    { id: "taxation", label: "Taxation" },
    { id: "intercompany", label: "Intercompany" },
    { id: "financial-reporting", label: "Financial Reporting" },
    { id: "budgeting", label: "Budgeting" },
    { id: "audit-controls", label: "Audit Controls" },
    { id: "cost-accounting", label: "Cost Accounting" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <AccountingOverview currentEntity={currentEntity} />;
      case "coa":
        return <ChartOfAccounts currentEntity={currentEntity} />;
      case "gl":
        return <GeneralLedger currentEntity={currentEntity} />;
      case "ap":
        return <AccountsPayable currentEntity={currentEntity} />;
      case "ar":
        return <AccountsReceivable currentEntity={currentEntity} />;
      case "assets":
        return <FixedAssets currentEntity={currentEntity} />;
      case "procurement":
        return <Procurement currentEntity={currentEntity} />;
      case "taxation":
        return <Taxation currentEntity={currentEntity} />;
      case "intercompany":
        return <IntercompanyAccounting />;
      case "financial-reporting":
        return <FinancialReporting currentEntity={currentEntity} />;
      case "budgeting":
        return <Budgeting currentEntity={currentEntity} />;
      case "audit-controls":
        return <AuditControls currentEntity={currentEntity} />;
      case "cost-accounting":
        return <CostAccounting currentEntity={currentEntity} />;
      default:
        return <AccountingOverview currentEntity={currentEntity} />;
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
    <DashboardLayout
      navbar={accountingNavbar}
      currentEntity={currentEntity}
      onEntityChange={setCurrentEntity}
      availableEntities={availableEntities}
    >
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
