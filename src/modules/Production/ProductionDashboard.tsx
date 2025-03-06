import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BOMWorkOrders from "./components/BOMWorkOrders/BOMWorkOrders";
import ProductionScheduling from "./components/ProductionScheduling/ProductionScheduling";
import QualityControl from "./components/QualityControl/QualityControl";
import ProductionOverview from "./components/ProductionOverview";

const ProductionDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Production & Manufacturing
          </h1>
          <p className="text-slate-400">
            Manage production planning, work orders, and quality control
          </p>
        </div>

        <ProductionOverview />

        <Tabs defaultValue="bom-work-orders" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="bom-work-orders">BOM & Work Orders</TabsTrigger>
            <TabsTrigger value="production-scheduling">
              Production Scheduling
            </TabsTrigger>
            <TabsTrigger value="quality-control">Quality Control</TabsTrigger>
          </TabsList>
          <TabsContent value="bom-work-orders" className="mt-4">
            <BOMWorkOrders />
          </TabsContent>
          <TabsContent value="production-scheduling" className="mt-4">
            <ProductionScheduling />
          </TabsContent>
          <TabsContent value="quality-control" className="mt-4">
            <QualityControl />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ProductionDashboard;
