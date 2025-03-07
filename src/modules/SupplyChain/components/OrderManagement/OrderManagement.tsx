import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MultiSupplierOrders from "./MultiSupplierOrders";
import WarehouseIntegration from "./WarehouseIntegration";

const OrderManagement = () => {
  const [activeView, setActiveView] = useState<"orders" | "warehouse">(
    "orders",
  );
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Order Management
          </CardTitle>
          <div className="flex space-x-2">
            <Button
              variant={activeView === "orders" ? "default" : "outline"}
              onClick={() => setActiveView("orders")}
              className={
                activeView === "orders" ? "bg-cyan-600 hover:bg-cyan-700" : ""
              }
            >
              Multi-Supplier Orders
            </Button>
            <Button
              variant={activeView === "warehouse" ? "default" : "outline"}
              onClick={() => setActiveView("warehouse")}
              className={
                activeView === "warehouse"
                  ? "bg-cyan-600 hover:bg-cyan-700"
                  : ""
              }
            >
              Warehouse Integration
            </Button>
            <Button variant="outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-2 top-2.5 h-4 w-4 text-slate-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <Input
                placeholder={
                  activeView === "orders"
                    ? "Search orders..."
                    : "Search warehouses..."
                }
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  {activeView === "orders" ? "Completed: 32" : "Connected: 8"}
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                <span className="text-xs font-medium text-blue-500">
                  {activeView === "orders" ? "In Progress: 18" : "Syncing: 3"}
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  {activeView === "orders" ? "Pending: 12" : "Issues: 2"}
                </span>
              </div>
            </div>
          </div>
          <Button className="bg-cyan-600 hover:bg-cyan-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            {activeView === "orders" ? "Create Order" : "Add Warehouse"}
          </Button>
        </div>

        {activeView === "orders" ? (
          <MultiSupplierOrders searchTerm={searchTerm} />
        ) : (
          <WarehouseIntegration searchTerm={searchTerm} />
        )}
      </CardContent>
    </Card>
  );
};

export default OrderManagement;
