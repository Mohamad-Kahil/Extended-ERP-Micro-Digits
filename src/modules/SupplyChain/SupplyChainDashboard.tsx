import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProcurementSupplier from "./components/ProcurementSupplier/ProcurementSupplier";
import InventoryControl from "./components/InventoryControl/InventoryControl";
import OrderManagement from "./components/OrderManagement/OrderManagement";
import SCMOverview from "./components/SCMOverview";
import { motion, AnimatePresence } from "framer-motion";

const SupplyChainDashboard = () => {
  const [activeSection, setActiveSection] = useState("procurement");

  const navItems = [
    { id: "overview", label: "SCM Overview" },
    { id: "procurement", label: "Procurement & Suppliers" },
    { id: "inventory", label: "Inventory Control" },
    { id: "orders", label: "Order Management" },
    { id: "forecasting", label: "Demand Forecasting" },
    { id: "analytics", label: "Supply Chain Analytics" },
    { id: "sustainability", label: "Sustainability" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <SCMOverview />;
      case "procurement":
        return <ProcurementSupplier />;
      case "inventory":
        return <InventoryControl />;
      case "orders":
        return <OrderManagement />;
      case "forecasting":
      case "analytics":
      case "sustainability":
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
        return <ProcurementSupplier />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const supplyChainNavbar = (
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
    <DashboardLayout navbar={supplyChainNavbar}>
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

export default SupplyChainDashboard;
