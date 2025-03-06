import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketingOverview from "./components/MarketingOverview";
import MarketingAutomation from "./components/MarketingAutomation/MarketingAutomation";
import ProductLifecycle from "./components/ProductLifecycle/ProductLifecycle";
import CustomerEngagement from "./components/CustomerEngagement/CustomerEngagement";

const MarketingDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Marketing & Product Planning
          </h1>
          <p className="text-slate-400">
            Manage marketing campaigns, product lifecycle, and customer
            engagement strategies
          </p>
        </div>

        <MarketingOverview />

        <Tabs defaultValue="marketing-automation" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="marketing-automation">
              Marketing Automation
            </TabsTrigger>
            <TabsTrigger value="product-lifecycle">
              Product Lifecycle
            </TabsTrigger>
            <TabsTrigger value="customer-engagement">
              Customer Engagement
            </TabsTrigger>
          </TabsList>
          <TabsContent value="marketing-automation" className="mt-4">
            <MarketingAutomation />
          </TabsContent>
          <TabsContent value="product-lifecycle" className="mt-4">
            <ProductLifecycle />
          </TabsContent>
          <TabsContent value="customer-engagement" className="mt-4">
            <CustomerEngagement />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MarketingDashboard;
