import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import AdministrativeServicesOverview from "./components/AdministrativeServicesOverview";
import OfficeLease from "./components/OfficeLease/OfficeLease";
import OfficeSupplies from "./components/OfficeSupplies/OfficeSupplies";
import AssetManagement from "./components/AssetManagement/AssetManagement";
import FacilitiesManagement from "./components/FacilitiesManagement/FacilitiesManagement";
import VendorManagement from "./components/VendorManagement/VendorManagement";
import WorkplaceManagement from "./components/WorkplaceManagement/WorkplaceManagement";
import HelpdeskServices from "./components/HelpdeskServices/HelpdeskServices";
import BudgetingExpenses from "./components/BudgetingExpenses/BudgetingExpenses";
import ComplianceSafety from "./components/ComplianceSafety/ComplianceSafety";
import GovernmentDocuments from "./components/GovernmentDocuments/GovernmentDocuments";

const AdministrativeServicesDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "office-lease", label: "Office Lease" },
    { id: "office-supplies", label: "Office Supplies" },
    { id: "asset-management", label: "Asset Management" },
    { id: "facilities", label: "Facilities" },
    { id: "vendor-management", label: "Vendor Management" },
    { id: "workplace", label: "Workplace" },
    { id: "helpdesk", label: "Helpdesk" },
    { id: "budgeting", label: "Budgeting" },
    { id: "compliance", label: "Compliance" },
    { id: "government-docs", label: "Government Documents" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <AdministrativeServicesOverview />;
      case "office-lease":
        return <OfficeLease />;
      case "office-supplies":
        return <OfficeSupplies />;
      case "asset-management":
        return <AssetManagement />;
      case "facilities":
        return <FacilitiesManagement />;
      case "vendor-management":
        return <VendorManagement />;
      case "workplace":
        return <WorkplaceManagement />;
      case "helpdesk":
        return <HelpdeskServices />;
      case "budgeting":
        return <BudgetingExpenses />;
      case "compliance":
        return <ComplianceSafety />;
      case "government-docs":
        return <GovernmentDocuments />;
      default:
        return <AdministrativeServicesOverview />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const administrativeServicesNavbar = (
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
    <DashboardLayout navbar={administrativeServicesNavbar}>
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

export default AdministrativeServicesDashboard;
