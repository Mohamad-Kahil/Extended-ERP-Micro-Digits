import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import AdministrationOverview from "./components/AdministrationOverview";
import UserManagement from "./components/UserManagement/UserManagement";
import SystemConfiguration from "./components/SystemConfiguration/SystemConfiguration";
import AuditLogs from "./components/AuditLogs/AuditLogs";
import DataBackup from "./components/DataBackup/DataBackup";
import SecuritySettings from "./components/SecuritySettings/SecuritySettings";

const AdministrationDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { id: "overview", label: "Administration Overview" },
    { id: "users", label: "User Management" },
    { id: "system", label: "System Configuration" },
    { id: "audit", label: "Audit Logs" },
    { id: "backup", label: "Data Backup" },
    { id: "security", label: "Security Settings" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <AdministrationOverview />;
      case "users":
        return <UserManagement />;
      case "system":
        return <SystemConfiguration />;
      case "audit":
        return <AuditLogs />;
      case "backup":
        return <DataBackup />;
      case "security":
        return <SecuritySettings />;
      default:
        return <AdministrationOverview />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const administrationNavbar = (
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
    <DashboardLayout navbar={administrationNavbar}>
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

export default AdministrationDashboard;
