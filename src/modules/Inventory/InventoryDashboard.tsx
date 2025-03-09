import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import InventoryOverview from "./components/InventoryOverview";
import ProductManagement from "./components/ProductManagement/ProductManagement";
import CategoryManagement from "./components/CategoryManagement/CategoryManagement";
import WarehouseManagement from "./components/WarehouseManagement/WarehouseManagement";
import StockMovement from "./components/StockMovement/StockMovement";
import InventoryAudit from "./components/InventoryAudit/InventoryAudit";

const InventoryDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { id: "overview", label: "Inventory Overview" },
    { id: "products", label: "Product Management" },
    { id: "categories", label: "Category Management" },
    { id: "warehouse", label: "Warehouse Management" },
    { id: "stock", label: "Stock Movement" },
    { id: "audit", label: "Inventory Audit" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <InventoryOverview />;
      case "products":
        return <ProductManagement />;
      case "categories":
        return <CategoryManagement />;
      case "warehouse":
        return <WarehouseManagement />;
      case "stock":
        return <StockMovement />;
      case "audit":
        return <InventoryAudit />;
      default:
        return <InventoryOverview />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const inventoryNavbar = (
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
    <DashboardLayout navbar={inventoryNavbar}>
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

export default InventoryDashboard;
