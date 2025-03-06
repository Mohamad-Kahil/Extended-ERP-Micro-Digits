import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StoreNetworkOverview from "./components/StoreNetworkOverview";
import StorePerformance from "./components/StorePerformance/StorePerformance";
import StockTransfer from "./components/StockTransfer/StockTransfer";

const StoreNetworkDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Store Network Management
          </h1>
          <p className="text-slate-400">
            Manage multiple store locations, track performance, and coordinate
            stock distribution
          </p>
        </div>

        <StoreNetworkOverview />

        <Tabs defaultValue="store-performance" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800">
            <TabsTrigger value="store-performance">
              Store Performance & Analytics
            </TabsTrigger>
            <TabsTrigger value="stock-transfer">
              Stock Transfer & Distribution
            </TabsTrigger>
          </TabsList>
          <TabsContent value="store-performance" className="mt-4">
            <StorePerformance />
          </TabsContent>
          <TabsContent value="stock-transfer" className="mt-4">
            <StockTransfer />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StoreNetworkDashboard;
