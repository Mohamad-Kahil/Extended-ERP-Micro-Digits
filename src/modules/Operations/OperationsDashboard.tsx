import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import OperationsOverview from "./components/OperationsOverview";
import ProcessManagement from "./components/ProcessManagement/ProcessManagement";
import ResourceAllocation from "./components/ResourceAllocation/ResourceAllocation";
import PerformanceMetrics from "./components/PerformanceMetrics/PerformanceMetrics";
import ComplianceTracking from "./components/ComplianceTracking/ComplianceTracking";
import RiskManagement from "./components/RiskManagement/RiskManagement";

const OperationsDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { id: "overview", label: "Operations Overview" },
    { id: "process", label: "Process Management" },
    { id: "resources", label: "Resource Allocation" },
    { id: "performance", label: "Performance Metrics" },
    { id: "compliance", label: "Compliance Tracking" },
    { id: "risk", label: "Risk Management" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <OperationsOverview />;
      case "process":
        return <ProcessManagement />;
      case "resources":
        return <ResourceAllocation />;
      case "performance":
        return <PerformanceMetrics />;
      case "compliance":
        return <ComplianceTracking />;
      case "risk":
        return <RiskManagement />;
      default:
        return <OperationsOverview />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const operationsNavbar = (
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
    <DashboardLayout navbar={operationsNavbar}>
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

export default OperationsDashboard;
