import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExecutiveOverview from "./components/ExecutiveOverview";
import KPIMonitoring from "./components/KPIMonitoring/KPIMonitoring";
import AIForecasting from "./components/AIForecasting/AIForecasting";
import DepartmentalInsights from "./components/DepartmentalInsights/DepartmentalInsights";

const ExecutiveDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Executive Dashboard</h1>
          <p className="text-slate-400">
            Company-wide business intelligence and performance monitoring
          </p>
        </div>

        <ExecutiveOverview />

        <Tabs defaultValue="kpi-monitoring" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="kpi-monitoring">KPI Monitoring</TabsTrigger>
            <TabsTrigger value="ai-forecasting">AI Forecasting</TabsTrigger>
            <TabsTrigger value="departmental-insights">
              Departmental Insights
            </TabsTrigger>
          </TabsList>
          <TabsContent value="kpi-monitoring" className="mt-4">
            <KPIMonitoring />
          </TabsContent>
          <TabsContent value="ai-forecasting" className="mt-4">
            <AIForecasting />
          </TabsContent>
          <TabsContent value="departmental-insights" className="mt-4">
            <DepartmentalInsights />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ExecutiveDashboard;
