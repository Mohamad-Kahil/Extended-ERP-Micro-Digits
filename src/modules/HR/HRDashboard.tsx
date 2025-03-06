import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeeManagement from "./components/EmployeeManagement/EmployeeManagement";
import PayrollProcessing from "./components/PayrollProcessing/PayrollProcessing";
import RecruitmentOnboarding from "./components/RecruitmentOnboarding/RecruitmentOnboarding";
import PerformanceTraining from "./components/PerformanceTraining/PerformanceTraining";
import HROverview from "./components/HROverview";

const HRDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Human Resources & Payroll
          </h1>
          <p className="text-slate-400">
            Manage employee data, payroll, and performance tracking
          </p>
        </div>

        <HROverview />

        <Tabs defaultValue="employee-management" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800">
            <TabsTrigger value="employee-management">
              Employee Management
            </TabsTrigger>
            <TabsTrigger value="payroll">Payroll Processing</TabsTrigger>
            <TabsTrigger value="recruitment">
              Recruitment & Onboarding
            </TabsTrigger>
            <TabsTrigger value="performance">
              Performance & Training
            </TabsTrigger>
          </TabsList>
          <TabsContent value="employee-management" className="mt-4">
            <EmployeeManagement />
          </TabsContent>
          <TabsContent value="payroll" className="mt-4">
            <PayrollProcessing />
          </TabsContent>
          <TabsContent value="recruitment" className="mt-4">
            <RecruitmentOnboarding />
          </TabsContent>
          <TabsContent value="performance" className="mt-4">
            <PerformanceTraining />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default HRDashboard;
