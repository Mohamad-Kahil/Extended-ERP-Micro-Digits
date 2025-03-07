import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import CRMOverview from "./components/CRMOverview";
import ContactManagement from "./components/ContactManagement/ContactManagement";
import LeadManagement from "./components/LeadManagement/LeadManagement";
import OpportunityManagement from "./components/OpportunityManagement/OpportunityManagement";
import SalesChannels from "./components/SalesChannels/SalesChannels";
import CustomerService from "./components/CustomerService/CustomerService";
import CampaignManagement from "./components/CampaignManagement/CampaignManagement";

const CRMDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { id: "overview", label: "CRM Overview" },
    { id: "contacts", label: "Contact Management" },
    { id: "leads", label: "Lead Management" },
    { id: "opportunities", label: "Opportunity Management" },
    { id: "channels", label: "Sales Channels" },
    { id: "service", label: "Customer Service" },
    { id: "campaigns", label: "Campaign Management" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <CRMOverview />;
      case "contacts":
        return <ContactManagement />;
      case "leads":
        return <LeadManagement />;
      case "opportunities":
        return <OpportunityManagement />;
      case "channels":
        return <SalesChannels />;
      case "service":
        return <CustomerService />;
      case "campaigns":
        return <CampaignManagement />;
      default:
        return <CRMOverview />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const crmNavbar = (
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
    <DashboardLayout navbar={crmNavbar}>
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

export default CRMDashboard;
