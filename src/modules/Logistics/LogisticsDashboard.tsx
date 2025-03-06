import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LogisticsOverview from "./components/LogisticsOverview";
import FleetManagement from "./components/FleetManagement/FleetManagement";
import ShipmentTracking from "./components/ShipmentTracking/ShipmentTracking";
import CarrierIntegration from "./components/CarrierIntegration/CarrierIntegration";

const LogisticsDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Logistics & Distribution
          </h1>
          <p className="text-slate-400">
            Manage fleet operations, shipment tracking, and carrier integrations
          </p>
        </div>

        <LogisticsOverview />

        <Tabs defaultValue="fleet-management" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="fleet-management">Fleet Management</TabsTrigger>
            <TabsTrigger value="shipment-tracking">
              Shipment Tracking
            </TabsTrigger>
            <TabsTrigger value="carrier-integration">
              Carrier Integration
            </TabsTrigger>
          </TabsList>
          <TabsContent value="fleet-management" className="mt-4">
            <FleetManagement />
          </TabsContent>
          <TabsContent value="shipment-tracking" className="mt-4">
            <ShipmentTracking />
          </TabsContent>
          <TabsContent value="carrier-integration" className="mt-4">
            <CarrierIntegration />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default LogisticsDashboard;
