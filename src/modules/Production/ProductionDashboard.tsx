import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ProductionOverview from "./components/ProductionOverview";
import ProductionPlanning from "./components/ProductionPlanning/ProductionPlanning";
import ProductionScheduling from "./components/Scheduling/ProductionScheduling";
import QualityControl from "./components/QualityControl/QualityControl";
import MaintenanceManagement from "./components/Maintenance/MaintenanceManagement";
import AssemblyLineManagement from "./components/AssemblyLines/AssemblyLineManagement";
import ProductionInventory from "./components/ProductionInventory/ProductionInventory";
import ProductionReporting from "./components/ProductionReporting/ProductionReporting";

const ProductionDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { id: "overview", label: "Production Overview" },
    { id: "planning", label: "Production Planning" },
    { id: "scheduling", label: "Scheduling" },
    { id: "quality", label: "Quality Control" },
    { id: "maintenance", label: "Maintenance" },
    { id: "assembly", label: "Assembly Lines" },
    { id: "inventory", label: "Production Inventory" },
    { id: "reporting", label: "Production Reports" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <ProductionOverview />;
      case "planning":
        return <ProductionPlanning />;
      case "scheduling":
        return <ProductionScheduling />;
      case "quality":
        return <QualityControl />;
      case "maintenance":
        return <MaintenanceManagement />;
      case "assembly":
        return <AssemblyLineManagement />;
      case "inventory":
        return <ProductionInventory />;
      case "reporting":
        return <ProductionReporting />;
      default:
        return <ProductionOverview />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const productionNavbar = (
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
    <DashboardLayout navbar={productionNavbar}>
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

export default ProductionDashboard;
