import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StockLevels from "./StockLevels";
import DemandForecasting from "./DemandForecasting";

const InventoryControl = () => {
  const [activeView, setActiveView] = React.useState<"stock" | "demand">(
    "stock",
  );

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Inventory Control & Demand Forecasting
          </CardTitle>
          <div className="flex space-x-2">
            <Button
              variant={activeView === "stock" ? "default" : "outline"}
              onClick={() => setActiveView("stock")}
              className={
                activeView === "stock" ? "bg-cyan-600 hover:bg-cyan-700" : ""
              }
            >
              Stock Levels
            </Button>
            <Button
              variant={activeView === "demand" ? "default" : "outline"}
              onClick={() => setActiveView("demand")}
              className={
                activeView === "demand" ? "bg-cyan-600 hover:bg-cyan-700" : ""
              }
            >
              Demand Forecasting
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
        {activeView === "stock" ? <StockLevels /> : <DemandForecasting />}
      </CardContent>
    </Card>
  );
};

export default InventoryControl;
