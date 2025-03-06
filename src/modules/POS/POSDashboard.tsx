import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import POSOverview from "./components/POSOverview";
import CounterSales from "./components/CounterSales/CounterSales";
import CustomerLoyalty from "./components/CustomerLoyalty/CustomerLoyalty";
import PaymentGateways from "./components/PaymentGateways/PaymentGateways";

const POSDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Point of Sale (POS) System
          </h1>
          <p className="text-slate-400">
            Manage in-store sales, payments, and customer loyalty programs
          </p>
        </div>

        <POSOverview />

        <Tabs defaultValue="counter-sales" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="counter-sales">Counter Sales</TabsTrigger>
            <TabsTrigger value="payment-gateways">Payment Gateways</TabsTrigger>
            <TabsTrigger value="customer-loyalty">Customer Loyalty</TabsTrigger>
          </TabsList>
          <TabsContent value="counter-sales" className="mt-4">
            <CounterSales />
          </TabsContent>
          <TabsContent value="payment-gateways" className="mt-4">
            <PaymentGateways />
          </TabsContent>
          <TabsContent value="customer-loyalty" className="mt-4">
            <CustomerLoyalty />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default POSDashboard;
