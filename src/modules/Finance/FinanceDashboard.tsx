import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralLedger from "./components/GeneralLedger/GeneralLedger";
import AccountsPayableReceivable from "./components/AccountsPayableReceivable/AccountsPayableReceivable";
import BudgetingForecasting from "./components/BudgetingForecasting/BudgetingForecasting";
import AuditCompliance from "./components/AuditCompliance/AuditCompliance";
import FinancialOverview from "./components/FinancialOverview";

const FinanceDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Finance & Accounting
          </h1>
          <p className="text-slate-400">
            Manage financial transactions, reporting, and compliance
          </p>
        </div>

        <FinancialOverview />

        <Tabs defaultValue="general-ledger" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800">
            <TabsTrigger value="general-ledger">General Ledger</TabsTrigger>
            <TabsTrigger value="ap-ar">AP/AR</TabsTrigger>
            <TabsTrigger value="budgeting">Budgeting</TabsTrigger>
            <TabsTrigger value="audit">Audit & Compliance</TabsTrigger>
          </TabsList>
          <TabsContent value="general-ledger" className="mt-4">
            <GeneralLedger />
          </TabsContent>
          <TabsContent value="ap-ar" className="mt-4">
            <AccountsPayableReceivable />
          </TabsContent>
          <TabsContent value="budgeting" className="mt-4">
            <BudgetingForecasting />
          </TabsContent>
          <TabsContent value="audit" className="mt-4">
            <AuditCompliance />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default FinanceDashboard;
