import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EcommerceOverview from "./components/EcommerceOverview";
import ProductManagement from "./components/ProductManagement/ProductManagement";
import OrderProcessing from "./components/OrderProcessing/OrderProcessing";
import CustomerManagement from "./components/CustomerManagement/CustomerManagement";

const EcommerceDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            E-commerce Dashboard
          </h1>
          <p className="text-slate-400">
            Manage your online store, products, orders, and customer
            relationships
          </p>
        </div>

        <EcommerceOverview />

        <Tabs defaultValue="product-management" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="product-management">
              Product Management
            </TabsTrigger>
            <TabsTrigger value="order-processing">Order Processing</TabsTrigger>
            <TabsTrigger value="customer-management">
              Customer Management
            </TabsTrigger>
          </TabsList>
          <TabsContent value="product-management" className="mt-4">
            <ProductManagement />
          </TabsContent>
          <TabsContent value="order-processing" className="mt-4">
            <OrderProcessing />
          </TabsContent>
          <TabsContent value="customer-management" className="mt-4">
            <CustomerManagement />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default EcommerceDashboard;
