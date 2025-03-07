import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import HROverview from "./components/HROverview";
import EmployeeManagement from "./components/EmployeeManagement/EmployeeManagement";
import RecruitmentOnboarding from "./components/RecruitmentOnboarding/RecruitmentOnboarding";
import PayrollProcessing from "./components/PayrollProcessing/PayrollProcessing";
import PerformanceTraining from "./components/PerformanceTraining/PerformanceTraining";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/dashboard/Header";

const HRDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { id: "overview", label: "HR Overview" },
    { id: "employee", label: "Employee Management" },
    { id: "attendance", label: "Attendance" },
    { id: "payroll", label: "Payroll" },
    { id: "recruitment", label: "Recruitment" },
    { id: "onboarding", label: "Onboarding" },
    { id: "performance", label: "Performance" },
    { id: "training", label: "Training" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <HROverview />;
      case "employee":
        return <EmployeeManagement />;
      case "payroll":
        return <PayrollProcessing />;
      case "recruitment":
      case "onboarding":
        return <RecruitmentOnboarding />;
      case "performance":
      case "training":
        return <PerformanceTraining />;
      default:
        return <HROverview />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const hrNavbar = (
    <div className="flex items-center overflow-x-auto">
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant={activeSection === item.id ? "default" : "ghost"}
          className={`${activeSection === item.id ? "bg-cyan-600 hover:bg-cyan-700" : "hover:bg-slate-700"}`}
          onClick={() => setActiveSection(item.id)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );

  return (
    <DashboardLayout navbar={hrNavbar}>
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex space-x-2">
            <Button variant="outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Export
            </Button>
            <Button variant="outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Search
            </Button>
          </div>
        </div>

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

export default HRDashboard;
