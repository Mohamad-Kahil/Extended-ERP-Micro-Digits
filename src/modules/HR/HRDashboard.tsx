import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EmployeeTable from "./components/EmployeeManagement/EmployeeTable";
import PayrollProcessing from "./components/PayrollProcessing/PayrollProcessing";
import RecruitmentOnboarding from "./components/RecruitmentOnboarding/RecruitmentOnboarding";
import PerformanceTraining from "./components/PerformanceTraining/PerformanceTraining";
import { motion, AnimatePresence } from "framer-motion";

const HRDashboard = () => {
  const [activeSection, setActiveSection] = useState("employee");

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
        return (
          <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">
              HR Overview Dashboard
            </h2>
            <p className="text-base text-slate-300">
              Welcome to the Human Resources management system.
            </p>
          </div>
        );
      case "employee":
        return <EmployeeTable />;
      case "payroll":
        return <PayrollProcessing />;
      case "recruitment":
      case "onboarding":
        return <RecruitmentOnboarding />;
      case "performance":
      case "training":
        return <PerformanceTraining />;
      case "attendance":
        return (
          <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">
              Attendance Module
            </h2>
            <p className="text-base text-slate-300">
              Track employee attendance and time-off requests.
            </p>
          </div>
        );
      default:
        return <EmployeeTable />;
    }
  };

  // Create a custom navbar to be passed to DashboardLayout
  const hrNavbar = (
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
    <DashboardLayout navbar={hrNavbar}>
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

export default HRDashboard;
