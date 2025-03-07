import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import MaintenanceOverview from "./components/MaintenanceOverview";
import WorkOrderManagement from "./components/WorkOrderManagement/WorkOrderManagement";
import PreventiveMaintenance from "./components/PreventiveMaintenance/PreventiveMaintenance";
import AssetManagement from "./components/AssetManagement/AssetManagement";
import MaintenanceReporting from "./components/MaintenanceReporting/MaintenanceReporting";
import InventoryManagement from "./components/InventoryManagement/InventoryManagement";
import TechnicianManagement from "./components/TechnicianManagement/TechnicianManagement";

const MaintenanceDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { id: "overview", label: "Maintenance Overview" },
    { id: "workorders", label: "Work Orders" },
    { id: "preventive", label: "Preventive Maintenance" },
    { id: "assets", label: "Asset Management" },
    { id: "inventory", label: "Inventory Management" },
    { id: "technicians", label: "Technician Management" },
    { id: "reporting", label: "Reporting & Analytics" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <MaintenanceOverview />;
      case "workorders":
        return <WorkOrderManagement />;
      case "preventive":
        return <PreventiveMaintenance />;
      case "assets":
        return <AssetManagement />;
      case "inventory":
        return <InventoryManagement />;
      case "technicians":
        return <TechnicianManagement />;
      case "reporting":
        return <MaintenanceReporting />;
      default:
        return <MaintenanceOverview />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const maintenanceNavbar = (
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
    <DashboardLayout navbar={maintenanceNavbar}>
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

export default MaintenanceDashboard;
