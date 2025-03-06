import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProcurementSupplier from "./components/ProcurementSupplier/ProcurementSupplier";
import InventoryControl from "./components/InventoryControl/InventoryControl";
import OrderManagement from "./components/OrderManagement/OrderManagement";
import SCMOverview from "./components/SCMOverview";

const SupplyChainDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Supply Chain Management
          </h1>
          <p className="text-slate-400">
            Manage procurement, inventory, and supplier coordination
          </p>
        </div>

        <SCMOverview />

        <Tabs defaultValue="procurement" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="procurement">
              Procurement & Suppliers
            </TabsTrigger>
            <TabsTrigger value="inventory">Inventory Control</TabsTrigger>
            <TabsTrigger value="orders">Order Management</TabsTrigger>
          </TabsList>
          <TabsContent value="procurement" className="mt-4">
            <ProcurementSupplier />
          </TabsContent>
          <TabsContent value="inventory" className="mt-4">
            <InventoryControl />
          </TabsContent>
          <TabsContent value="orders" className="mt-4">
            <OrderManagement />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SupplyChainDashboard;
