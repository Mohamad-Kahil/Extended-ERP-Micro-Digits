import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DemandForecastingProps {
  searchTerm: string;
}

const DemandForecasting = ({ searchTerm }: DemandForecastingProps) => {
  const [forecastPeriod, setForecastPeriod] = React.useState("3");
  const [forecastMethod, setForecastMethod] = React.useState("moving-average");

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={forecastPeriod} onValueChange={setForecastPeriod}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Forecast Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Month</SelectItem>
              <SelectItem value="3">3 Months</SelectItem>
              <SelectItem value="6">6 Months</SelectItem>
              <SelectItem value="12">12 Months</SelectItem>
            </SelectContent>
          </Select>
          <Select value={forecastMethod} onValueChange={setForecastMethod}>
            <SelectTrigger className="w-full md:w-56">
              <SelectValue placeholder="Forecasting Method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="moving-average">Moving Average</SelectItem>
              <SelectItem value="exponential-smoothing">
                Exponential Smoothing
              </SelectItem>
              <SelectItem value="linear-regression">
                Linear Regression
              </SelectItem>
              <SelectItem value="seasonal">Seasonal Analysis</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 md:w-auto">
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
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
            <path d="m15 3 6 6" />
            <path d="m21 3-6 6" />
          </svg>
          Run Forecast
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Top Products by Demand
            </h3>
            <div className="space-y-4">
              {[
                { name: "Aluminum Sheet 2mm", forecast: 1250, trend: 8.5 },
                { name: "Circuit Board A1", forecast: 950, trend: -3.2 },
                { name: "Power Supply Unit", forecast: 780, trend: 12.1 },
                { name: "Steel Rod 10mm", forecast: 650, trend: 5.7 },
                { name: "Cardboard Box Large", forecast: 580, trend: 2.3 },
              ].map((product, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">
                      {product.name}
                    </span>
                    <span
                      className={`text-sm font-semibold ${product.trend >= 0 ? "text-emerald-500" : "text-red-500"}`}
                    >
                      {product.trend >= 0 ? "+" : ""}
                      {product.trend}%
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 flex-1 rounded-full bg-slate-700">
                      <div
                        className={`h-2 rounded-full ${product.trend >= 0 ? "bg-emerald-500" : "bg-red-500"}`}
                        style={{
                          width: `${Math.min(100, (product.forecast / 1500) * 100)}%`,
                        }}
                      ></div>
                    </div>
                    <span className="w-20 text-right text-xs text-slate-400">
                      {product.forecast} units
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Seasonal Demand Patterns
            </h3>
            <div className="h-64 rounded-md border border-slate-700 bg-slate-800/30 p-4">
              <div className="flex h-full items-center justify-center">
                <p className="text-slate-400">
                  Seasonal demand chart will be displayed here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-800/50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">
              Auto-Replenishment Recommendations
            </h3>
            <Button variant="outline" size="sm">
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
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
              </svg>
              Create Purchase Orders
            </Button>
          </div>
          <div className="mt-4 space-y-4">
            {[
              {
                sku: "CP-2001",
                name: "Circuit Board A1",
                current: 85,
                recommended: 150,
                supplier: "Tech Components Ltd.",
              },
              {
                sku: "CP-2002",
                name: "Power Supply Unit",
                current: 45,
                recommended: 100,
                supplier: "Tech Components Ltd.",
              },
              {
                sku: "PK-3002",
                name: "Bubble Wrap Roll",
                current: 28,
                recommended: 50,
                supplier: "Packaging Solutions Co.",
              },
              {
                sku: "CH-4001",
                name: "Industrial Solvent",
                current: 15,
                recommended: 40,
                supplier: "Quality Chemical Supply",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-md border border-slate-700 bg-slate-800/30 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="mb-2 md:mb-0">
                  <div className="font-medium text-white">{item.name}</div>
                  <div className="text-xs text-slate-400">
                    {item.sku} • {item.supplier}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="text-xs text-slate-400">Current</div>
                    <div className="text-sm font-medium text-red-500">
                      {item.current} units
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Recommended</div>
                    <div className="text-sm font-medium text-emerald-500">
                      {item.recommended} units
                    </div>
                  </div>
                  <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                    Order
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DemandForecasting;
