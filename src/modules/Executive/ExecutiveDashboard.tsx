import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ExecutiveOverview from "./components/ExecutiveOverview";
import KPIMonitoring from "./components/KPIMonitoring/KPIMonitoring";
import AIForecasting from "./components/AIForecasting/AIForecasting";
import DepartmentalInsights from "./components/DepartmentalInsights/DepartmentalInsights";
import StrategicPlanning from "./components/StrategicPlanning/StrategicPlanning";
import BoardReporting from "./components/BoardReporting/BoardReporting";

const ExecutiveDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { id: "overview", label: "Executive Overview" },
    { id: "kpi", label: "KPI Monitoring" },
    { id: "ai", label: "AI Forecasting" },
    { id: "insights", label: "Departmental Insights" },
    { id: "strategic", label: "Strategic Planning" },
    { id: "board", label: "Board Reporting" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <ExecutiveOverview />;
      case "kpi":
        return <KPIMonitoring />;
      case "ai":
        return <AIForecasting />;
      case "insights":
        return <DepartmentalInsights />;
      case "strategic":
        return <StrategicPlanning />;
      case "board":
        return <BoardReporting />;
      default:
        return <ExecutiveOverview />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const executiveNavbar = (
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
    <DashboardLayout navbar={executiveNavbar}>
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

export default ExecutiveDashboard;
