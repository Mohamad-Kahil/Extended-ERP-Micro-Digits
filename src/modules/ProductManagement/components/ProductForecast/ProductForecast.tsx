import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductForecast = () => {
  const [activeTab, setActiveTab] = useState("forecast");
  const [selectedProduct, setSelectedProduct] = useState("iphone-16");
  const [selectedYear, setSelectedYear] = useState("2024");

  // Sample products
  const products = [
    { id: "iphone-16", name: "iPhone 16 Pro Max" },
    { id: "galaxy-s24", name: "Galaxy S24 Ultra" },
    { id: "pixel-8", name: "Pixel 8 Pro" },
  ];

  // Sample years
  const years = ["2023", "2024", "2025"];

  // Sample forecast data
  const forecastData = {
    "iphone-16": {
      "2024": {
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        salesForecast: [
          450, 470, 490, 510, 530, 550, 570, 590, 610, 630, 650, 670,
        ],
        stockInventory: [
          530, 610, 670, 710, 730, 730, 710, 670, 610, 530, 430, 310,
        ],
        supplierOrders: [
          430, 510, 550, 550, 550, 550, 550, 550, 550, 550, 550, 550,
        ],
        stockArrival: [
          350, 550, 550, 550, 550, 550, 550, 550, 550, 550, 550, 550,
        ],
      },
    },
  };

  // Financial data
  const financialData = {
    "iphone-16": {
      "2024": {
        supplierPrice: 850,
        landingCost: 900,
        netSalesPrice: 1350,
        avgCostInventory: 875,
      },
    },
  };

  // Get data for selected product and year
  const getProductData = () => {
    return (
      forecastData[selectedProduct]?.[selectedYear] || {
        months: [],
        salesForecast: [],
        stockInventory: [],
        supplierOrders: [],
        stockArrival: [],
      }
    );
  };

  const getFinancialData = () => {
    return (
      financialData[selectedProduct]?.[selectedYear] || {
        supplierPrice: 0,
        landingCost: 0,
        netSalesPrice: 0,
        avgCostInventory: 0,
      }
    );
  };

  const productData = getProductData();
  const financials = getFinancialData();

  // Calculate financial totals
  const calculateFinancialTotals = () => {
    const totalSales = productData.salesForecast.reduce(
      (sum, val) => sum + val,
      0,
    );
    const totalSupplierOrders = productData.supplierOrders.reduce(
      (sum, val) => sum + val,
      0,
    );

    return {
      supplierPriceTotal: totalSupplierOrders * financials.supplierPrice,
      landingCostTotal: totalSupplierOrders * financials.landingCost,
      netSalesPriceTotal: totalSales * financials.netSalesPrice,
      avgCostInventoryTotal:
        productData.stockInventory[productData.stockInventory.length - 1] *
        financials.avgCostInventory,
    };
  };

  const financialTotals = calculateFinancialTotals();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Product Forecast</h2>
        <div className="flex space-x-2">
          <Select value={selectedProduct} onValueChange={setSelectedProduct}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select Product" />
            </SelectTrigger>
            <SelectContent>
              {products.map((product) => (
                <SelectItem key={product.id} value={product.id}>
                  {product.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            New Forecast
          </Button>
        </div>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              {products.find((p) => p.id === selectedProduct)?.name} -{" "}
              {selectedYear} Forecast
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-slate-800">
              <TabsTrigger value="forecast">Forecast Data</TabsTrigger>
              <TabsTrigger value="financials">Financial Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="forecast" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-800/50 text-xs font-medium text-slate-300">
                      <th className="p-3 text-left">Month</th>
                      {productData.months.map((month, index) => (
                        <th key={index} className="p-3 text-center">
                          {month}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr className="text-sm text-slate-300 hover:bg-slate-800/30 transition-colors">
                      <td className="p-3 font-medium">Supplier Orders</td>
                      {productData.supplierOrders.map((value, index) => (
                        <td key={index} className="p-3 text-center">
                          {value}
                        </td>
                      ))}
                    </tr>
                    <tr className="text-sm text-slate-300 hover:bg-slate-800/30 transition-colors">
                      <td className="p-3 font-medium">Stock Arrival</td>
                      {productData.stockArrival.map((value, index) => (
                        <td key={index} className="p-3 text-center">
                          {value}
                        </td>
                      ))}
                    </tr>
                    <tr className="text-sm text-slate-300 hover:bg-slate-800/30 transition-colors">
                      <td className="p-3 font-medium">Sales Forecast</td>
                      {productData.salesForecast.map((value, index) => (
                        <td key={index} className="p-3 text-center">
                          {value}
                        </td>
                      ))}
                    </tr>
                    <tr className="text-sm text-slate-300 hover:bg-slate-800/30 transition-colors">
                      <td className="p-3 font-medium">Stock Inventory</td>
                      {productData.stockInventory.map((value, index) => (
                        <td key={index} className="p-3 text-center">
                          {value}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Card className="border-slate-800 bg-slate-900/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">
                      Total Sales Forecast
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">
                      {productData.salesForecast
                        .reduce((sum, val) => sum + val, 0)
                        .toLocaleString()}
                    </div>
                    <p className="text-xs text-slate-500">
                      Units for {selectedYear}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-800 bg-slate-900/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">
                      Total Supplier Orders
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">
                      {productData.supplierOrders
                        .reduce((sum, val) => sum + val, 0)
                        .toLocaleString()}
                    </div>
                    <p className="text-xs text-slate-500">
                      Units for {selectedYear}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="financials" className="mt-6 space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-slate-800 bg-slate-900/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">
                      Supplier Price
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">
                      ${financials.supplierPrice.toLocaleString()}
                    </div>
                    <p className="text-xs text-slate-500">Per Unit</p>
                  </CardContent>
                </Card>

                <Card className="border-slate-800 bg-slate-900/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">
                      Landing Cost
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">
                      ${financials.landingCost.toLocaleString()}
                    </div>
                    <p className="text-xs text-slate-500">Per Unit</p>
                  </CardContent>
                </Card>

                <Card className="border-slate-800 bg-slate-900/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">
                      Net Sales Price
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">
                      ${financials.netSalesPrice.toLocaleString()}
                    </div>
                    <p className="text-xs text-slate-500">Per Unit</p>
                  </CardContent>
                </Card>

                <Card className="border-slate-800 bg-slate-900/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">
                      Avg Cost Inventory
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">
                      ${financials.avgCostInventory.toLocaleString()}
                    </div>
                    <p className="text-xs text-slate-500">Per Unit</p>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-4">Financial Metric</div>
                  <div className="col-span-4">Total Value</div>
                  <div className="col-span-4">Notes</div>
                </div>
                <div className="divide-y divide-slate-800">
                  <div className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors">
                    <div className="col-span-4 font-medium">
                      Supplier Price Total
                    </div>
                    <div className="col-span-4">
                      ${financialTotals.supplierPriceTotal.toLocaleString()}
                    </div>
                    <div className="col-span-4 text-slate-400">
                      Based on total supplier orders
                    </div>
                  </div>
                  <div className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors">
                    <div className="col-span-4 font-medium">
                      Landing Cost Total
                    </div>
                    <div className="col-span-4">
                      ${financialTotals.landingCostTotal.toLocaleString()}
                    </div>
                    <div className="col-span-4 text-slate-400">
                      Includes shipping, duties, etc.
                    </div>
                  </div>
                  <div className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors">
                    <div className="col-span-4 font-medium">
                      Net Sales Price Total
                    </div>
                    <div className="col-span-4">
                      ${financialTotals.netSalesPriceTotal.toLocaleString()}
                    </div>
                    <div className="col-span-4 text-slate-400">
                      Based on sales forecast
                    </div>
                  </div>
                  <div className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors">
                    <div className="col-span-4 font-medium">
                      Ending Inventory Value
                    </div>
                    <div className="col-span-4">
                      ${financialTotals.avgCostInventoryTotal.toLocaleString()}
                    </div>
                    <div className="col-span-4 text-slate-400">
                      Based on Dec stock inventory
                    </div>
                  </div>
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-4">Gross Profit</div>
                    <div className="col-span-4">
                      $
                      {(
                        financialTotals.netSalesPriceTotal -
                        financialTotals.landingCostTotal
                      ).toLocaleString()}
                    </div>
                    <div className="col-span-4 text-slate-400">
                      Net Sales - Landing Cost
                    </div>
                  </div>
                  <div className="p-3 text-sm font-medium text-white bg-slate-800/20 grid grid-cols-12 gap-4">
                    <div className="col-span-4">Gross Margin</div>
                    <div className="col-span-4">
                      {(
                        ((financialTotals.netSalesPriceTotal -
                          financialTotals.landingCostTotal) /
                          financialTotals.netSalesPriceTotal) *
                        100
                      ).toFixed(2)}
                      %
                    </div>
                    <div className="col-span-4 text-slate-400">
                      (Gross Profit / Net Sales) × 100
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductForecast;
