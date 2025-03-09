import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ProductDefinition from "./components/ProductDefinition/ProductDefinition";
import ModelNumberGeneration from "./components/ModelNumberGeneration/ModelNumberGeneration";
import ProductForecast from "./components/ProductForecast/ProductForecast";
import ProductFiltration from "./components/ProductFiltration/ProductFiltration";

const ProductManagementDashboard = () => {
  const [activeSection, setActiveSection] = useState("definition");

  const navItems = [
    { id: "definition", label: "Product Definition" },
    { id: "model-number", label: "Model Number Generation" },
    { id: "forecast", label: "Product Forecast" },
    { id: "filtration", label: "Filtration & Reporting" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "definition":
        return <ProductDefinition />;
      case "model-number":
        return <ModelNumberGeneration />;
      case "forecast":
        return <ProductForecast />;
      case "filtration":
        return <ProductFiltration />;
      default:
        return <ProductDefinition />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const productManagementNavbar = (
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
    <DashboardLayout navbar={productManagementNavbar}>
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

export default ProductManagementDashboard;
