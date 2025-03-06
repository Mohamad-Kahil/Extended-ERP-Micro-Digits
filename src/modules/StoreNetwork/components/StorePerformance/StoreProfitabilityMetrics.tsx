import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface StoreProfitability {
  id: string;
  storeId: string;
  name: string;
  region: string;
  revenue: number;
  cogs: number;
  grossProfit: number;
  operatingExpenses: number;
  netProfit: number;
  profitMargin: number;
  roiPercent: number;
  salesPerSqFt: number;
  laborCostPercent: number;
  inventoryTurnover: number;
}

const storeProfitabilityData: StoreProfitability[] = [
  {
    id: "1",
    storeId: "NE-001",
    name: "Boston Downtown",
    region: "Northeast",
    revenue: 245000,
    cogs: 147000,
    grossProfit: 98000,
    operatingExpenses: 68000,
    netProfit: 30000,
    profitMargin: 12.24,
    roiPercent: 18.5,
    salesPerSqFt: 425.5,
    laborCostPercent: 15.2,
    inventoryTurnover: 4.8,
  },
  {
    id: "2",
    storeId: "NE-002",
    name: "New York Midtown",
    region: "Northeast",
    revenue: 310000,
    cogs: 186000,
    grossProfit: 124000,
    operatingExpenses: 92000,
    netProfit: 32000,
    profitMargin: 10.32,
    roiPercent: 14.8,
    salesPerSqFt: 520.3,
    laborCostPercent: 18.5,
    inventoryTurnover: 5.2,
  },
  {
    id: "3",
    storeId: "SE-001",
    name: "Atlanta Peachtree",
    region: "Southeast",
    revenue: 225000,
    cogs: 135000,
    grossProfit: 90000,
    operatingExpenses: 65000,
    netProfit: 25000,
    profitMargin: 11.11,
    roiPercent: 16.2,
    salesPerSqFt: 380.8,
    laborCostPercent: 14.8,
    inventoryTurnover: 4.5,
  },
  {
    id: "4",
    storeId: "MW-001",
    name: "Chicago Michigan Ave",
    region: "Midwest",
    revenue: 275000,
    cogs: 165000,
    grossProfit: 110000,
    operatingExpenses: 78000,
    netProfit: 32000,
    profitMargin: 11.64,
    roiPercent: 17.5,
    salesPerSqFt: 410.2,
    laborCostPercent: 16.3,
    inventoryTurnover: 4.9,
  },
  {
    id: "5",
    storeId: "SW-001",
    name: "Dallas Galleria",
    region: "Southwest",
    revenue: 195000,
    cogs: 117000,
    grossProfit: 78000,
    operatingExpenses: 58000,
    netProfit: 20000,
    profitMargin: 10.26,
    roiPercent: 15.8,
    salesPerSqFt: 350.5,
    laborCostPercent: 15.5,
    inventoryTurnover: 4.2,
  },
  {
    id: "6",
    storeId: "WC-001",
    name: "San Francisco Union Square",
    region: "West Coast",
    revenue: 320000,
    cogs: 192000,
    grossProfit: 128000,
    operatingExpenses: 96000,
    netProfit: 32000,
    profitMargin: 10.0,
    roiPercent: 14.2,
    salesPerSqFt: 540.8,
    laborCostPercent: 19.2,
    inventoryTurnover: 5.5,
  },
  {
    id: "7",
    storeId: "WC-002",
    name: "Los Angeles Beverly",
    region: "West Coast",
    revenue: 290000,
    cogs: 174000,
    grossProfit: 116000,
    operatingExpenses: 84000,
    netProfit: 32000,
    profitMargin: 11.03,
    roiPercent: 16.8,
    salesPerSqFt: 485.5,
    laborCostPercent: 17.8,
    inventoryTurnover: 5.1,
  },
  {
    id: "8",
    storeId: "NW-001",
    name: "Seattle Downtown",
    region: "Northwest",
    revenue: 185000,
    cogs: 111000,
    grossProfit: 74000,
    operatingExpenses: 54000,
    netProfit: 20000,
    profitMargin: 10.81,
    roiPercent: 15.5,
    salesPerSqFt: 375.2,
    laborCostPercent: 16.1,
    inventoryTurnover: 4.6,
  },
];

const StoreProfitabilityMetrics = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [regionFilter, setRegionFilter] = React.useState("all");
  const [timeFrame, setTimeFrame] = React.useState("month");
  const [selectedStore, setSelectedStore] = React.useState<string | null>(null);

  const regions = [
    ...new Set(storeProfitabilityData.map((store) => store.region)),
  ];

  const filteredStores = storeProfitabilityData.filter(
    (store) =>
      (regionFilter === "all" || store.region === regionFilter) &&
      (store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.storeId.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const selectedStoreData = selectedStore
    ? storeProfitabilityData.find((store) => store.id === selectedStore)
    : null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <div className="relative w-full md:w-64">
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
              placeholder="Search stores..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={regionFilter} onValueChange={setRegionFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={timeFrame} onValueChange={setTimeFrame}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Time Frame" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          Export Report
        </Button>
      </div>

      {selectedStoreData && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card className="border-slate-800 bg-slate-800/50 p-4">
            <div className="text-sm font-medium text-slate-400">Revenue</div>
            <div className="mt-1 text-2xl font-bold text-white">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(selectedStoreData.revenue)}
            </div>
          </Card>
          <Card className="border-slate-800 bg-slate-800/50 p-4">
            <div className="text-sm font-medium text-slate-400">
              Gross Profit
            </div>
            <div className="mt-1 text-2xl font-bold text-emerald-500">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(selectedStoreData.grossProfit)}
            </div>
          </Card>
          <Card className="border-slate-800 bg-slate-800/50 p-4">
            <div className="text-sm font-medium text-slate-400">Net Profit</div>
            <div className="mt-1 text-2xl font-bold text-cyan-500">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(selectedStoreData.netProfit)}
            </div>
          </Card>
          <Card className="border-slate-800 bg-slate-800/50 p-4">
            <div className="text-sm font-medium text-slate-400">
              Profit Margin
            </div>
            <div className="mt-1 text-2xl font-bold text-amber-500">
              {selectedStoreData.profitMargin}%
            </div>
          </Card>
        </div>
      )}

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Store ID</TableHead>
              <TableHead className="text-slate-300">Store Name</TableHead>
              <TableHead className="text-slate-300">Region</TableHead>
              <TableHead className="text-right text-slate-300">
                Revenue
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Gross Profit
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Net Profit
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Profit Margin
              </TableHead>
              <TableHead className="text-right text-slate-300">ROI</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStores.map((store) => (
              <TableRow
                key={store.id}
                className={`border-slate-800 ${selectedStore === store.id ? "bg-slate-800/50" : ""}`}
                onClick={() =>
                  setSelectedStore(selectedStore === store.id ? null : store.id)
                }
              >
                <TableCell className="font-medium text-slate-300">
                  {store.storeId}
                </TableCell>
                <TableCell>{store.name}</TableCell>
                <TableCell>{store.region}</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(store.revenue)}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(store.grossProfit)}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(store.netProfit)}
                </TableCell>
                <TableCell className="text-right">
                  {store.profitMargin}%
                </TableCell>
                <TableCell className="text-right">
                  {store.roiPercent}%
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-1">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
                        className="h-4 w-4 text-blue-500"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <span className="sr-only">View Details</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
                        className="h-4 w-4"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                      <span className="sr-only">Edit</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedStoreData && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                {selectedStoreData.name} - Detailed Metrics
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-slate-400">
                      Sales per Sq Ft
                    </div>
                    <div className="mt-1 text-xl font-bold text-white">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 2,
                      }).format(selectedStoreData.salesPerSqFt)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-400">
                      Labor Cost %
                    </div>
                    <div className="mt-1 text-xl font-bold text-white">
                      {selectedStoreData.laborCostPercent}%
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-slate-400">
                      Inventory Turnover
                    </div>
                    <div className="mt-1 text-xl font-bold text-white">
                      {selectedStoreData.inventoryTurnover}x
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-400">
                      Operating Expenses
                    </div>
                    <div className="mt-1 text-xl font-bold text-white">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(selectedStoreData.operatingExpenses)}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-slate-400">
                      COGS
                    </div>
                    <div className="mt-1 text-xl font-bold text-white">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(selectedStoreData.cogs)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-400">
                      COGS %
                    </div>
                    <div className="mt-1 text-xl font-bold text-white">
                      {(
                        (selectedStoreData.cogs / selectedStoreData.revenue) *
                        100
                      ).toFixed(2)}
                      %
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-800/50">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Profitability Analysis
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      Gross Profit Margin
                    </span>
                    <span className="text-sm font-medium text-slate-300">
                      {(
                        (selectedStoreData.grossProfit /
                          selectedStoreData.revenue) *
                        100
                      ).toFixed(2)}
                      %
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-700">
                    <div
                      className="h-2 rounded-full bg-emerald-500"
                      style={{
                        width: `${(selectedStoreData.grossProfit / selectedStoreData.revenue) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      Net Profit Margin
                    </span>
                    <span className="text-sm font-medium text-slate-300">
                      {selectedStoreData.profitMargin}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-700">
                    <div
                      className="h-2 rounded-full bg-cyan-500"
                      style={{ width: `${selectedStoreData.profitMargin}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      Operating Expense Ratio
                    </span>
                    <span className="text-sm font-medium text-slate-300">
                      {(
                        (selectedStoreData.operatingExpenses /
                          selectedStoreData.revenue) *
                        100
                      ).toFixed(2)}
                      %
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-700">
                    <div
                      className="h-2 rounded-full bg-amber-500"
                      style={{
                        width: `${(selectedStoreData.operatingExpenses / selectedStoreData.revenue) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      Return on Investment
                    </span>
                    <span className="text-sm font-medium text-slate-300">
                      {selectedStoreData.roiPercent}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-700">
                    <div
                      className="h-2 rounded-full bg-purple-500"
                      style={{ width: `${selectedStoreData.roiPercent * 2}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
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
                  Download Full Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default StoreProfitabilityMetrics;
