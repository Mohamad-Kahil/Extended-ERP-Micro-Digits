import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import LegalOverview from "./components/LegalOverview";
import CaseManagement from "./components/CaseManagement/CaseManagement";
import ContractManagement from "./components/ContractManagement/ContractManagement";
import RegulatoryCompliance from "./components/RegulatoryCompliance/RegulatoryCompliance";
import IntellectualProperty from "./components/IntellectualProperty/IntellectualProperty";
import CorporateGovernance from "./components/CorporateGovernance/CorporateGovernance";

const LegalDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { id: "overview", label: "Legal Overview" },
    { id: "cases", label: "Case Management" },
    { id: "contracts", label: "Contract Management" },
    { id: "compliance", label: "Regulatory Compliance" },
    { id: "ip", label: "Intellectual Property" },
    { id: "governance", label: "Corporate Governance" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <LegalOverview />;
      case "cases":
        return <CaseManagement />;
      case "contracts":
        return <ContractManagement />;
      case "compliance":
        return <RegulatoryCompliance />;
      case "ip":
        return <IntellectualProperty />;
      case "governance":
        return <CorporateGovernance />;
      default:
        return <LegalOverview />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const legalNavbar = (
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
    <DashboardLayout navbar={legalNavbar}>
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

export default LegalDashboard;
