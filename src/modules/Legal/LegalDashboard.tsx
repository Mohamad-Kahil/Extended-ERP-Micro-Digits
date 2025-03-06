import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LegalOverview from "./components/LegalOverview";
import ContractManagement from "./components/ContractManagement/ContractManagement";
import RegulatoryCompliance from "./components/RegulatoryCompliance/RegulatoryCompliance";
import CaseManagement from "./components/CaseManagement/CaseManagement";

const LegalDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Legal & Compliance</h1>
          <p className="text-slate-400">
            Manage business contracts, regulatory compliance, and legal risk
            assessment
          </p>
        </div>

        <LegalOverview />

        <Tabs defaultValue="contract-management" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="contract-management">
              Contract Management
            </TabsTrigger>
            <TabsTrigger value="regulatory-compliance">
              Regulatory Compliance
            </TabsTrigger>
            <TabsTrigger value="case-management">Case Management</TabsTrigger>
          </TabsList>
          <TabsContent value="contract-management" className="mt-4">
            <ContractManagement />
          </TabsContent>
          <TabsContent value="regulatory-compliance" className="mt-4">
            <RegulatoryCompliance />
          </TabsContent>
          <TabsContent value="case-management" className="mt-4">
            <CaseManagement />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default LegalDashboard;
