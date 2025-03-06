import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OperationsOverview from "./components/OperationsOverview";
import WorkflowAutomation from "./components/WorkflowAutomation/WorkflowAutomation";
import BusinessProcessOptimization from "./components/BusinessProcessOptimization/BusinessProcessOptimization";

const OperationsDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Operations Management
          </h1>
          <p className="text-slate-400">
            Standardize business process automation across departments
          </p>
        </div>

        <OperationsOverview />

        <Tabs defaultValue="workflow-automation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800">
            <TabsTrigger value="workflow-automation">
              Workflow Automation
            </TabsTrigger>
            <TabsTrigger value="business-process-optimization">
              Business Process Optimization
            </TabsTrigger>
          </TabsList>
          <TabsContent value="workflow-automation" className="mt-4">
            <WorkflowAutomation />
          </TabsContent>
          <TabsContent value="business-process-optimization" className="mt-4">
            <BusinessProcessOptimization />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default OperationsDashboard;
