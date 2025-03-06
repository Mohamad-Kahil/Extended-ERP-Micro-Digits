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

interface RegionalSales {
  id: string;
  region: string;
  storeCount: number;
  totalSales: number;
  growth: number;
  topCategory: string;
  avgTicketSize: number;
  conversionRate: number;
}

const regionalSalesData: RegionalSales[] = [
  {
    id: "1",
    region: "Northeast",
    storeCount: 8,
    totalSales: 1850000,
    growth: 12.5,
    topCategory: "Smart Home",
    avgTicketSize: 175.5,
    conversionRate: 4.2,
  },
  {
    id: "2",
    region: "Southeast",
    storeCount: 10,
    totalSales: 2100000,
    growth: 8.3,
    topCategory: "Security Systems",
    avgTicketSize: 210.75,
    conversionRate: 3.8,
  },
  {
    id: "3",
    region: "Midwest",
    storeCount: 12,
    totalSales: 1950000,
    growth: 5.7,
    topCategory: "Smart Appliances",
    avgTicketSize: 195.25,
    conversionRate: 3.5,
  },
  {
    id: "4",
    region: "Southwest",
    storeCount: 6,
    totalSales: 1250000,
    growth: 15.2,
    topCategory: "Home Automation",
    avgTicketSize: 165.8,
    conversionRate: 4.5,
  },
  {
    id: "5",
    region: "West Coast",
    storeCount: 9,
    totalSales: 2450000,
    growth: 10.1,
    topCategory: "Smart Entertainment",
    avgTicketSize: 225.3,
    conversionRate: 5.1,
  },
  {
    id: "6",
    region: "Northwest",
    storeCount: 5,
    totalSales: 980000,
    growth: 7.8,
    topCategory: "Smart Lighting",
    avgTicketSize: 145.6,
    conversionRate: 3.9,
  },
];

interface StoreSales {
  id: string;
  storeId: string;
  name: string;
  region: string;
  address: string;
  monthlySales: number;
  growth: number;
  transactions: number;
  avgTicketSize: number;
}

const storeSalesData: StoreSales[] = [
  {
    id: "1",
    storeId: "NE-001",
    name: "Boston Downtown",
    region: "Northeast",
    address: "123 Newbury St, Boston, MA",
    monthlySales: 245000,
    growth: 14.2,
    transactions: 1350,
    avgTicketSize: 181.48,
  },
  {
    id: "2",
    storeId: "NE-002",
    name: "New York Midtown",
    region: "Northeast",
    address: "401 5th Ave, New York, NY",
    monthlySales: 310000,
    growth: 11.8,
    transactions: 1680,
    avgTicketSize: 184.52,
  },
  {
    id: "3",
    storeId: "SE-001",
    name: "Atlanta Peachtree",
    region: "Southeast",
    address: "2850 Peachtree Rd, Atlanta, GA",
    monthlySales: 225000,
    growth: 9.5,
    transactions: 1120,
    avgTicketSize: 200.89,
  },
  {
    id: "4",
    storeId: "MW-001",
    name: "Chicago Michigan Ave",
    region: "Midwest",
    address: "540 N Michigan Ave, Chicago, IL",
    monthlySales: 275000,
    growth: 6.8,
    transactions: 1450,
    avgTicketSize: 189.66,
  },
  {
    id: "5",
    storeId: "SW-001",
    name: "Dallas Galleria",
    region: "Southwest",
    address: "13350 Dallas Pkwy, Dallas, TX",
    monthlySales: 195000,
    growth: 16.5,
    transactions: 1050,
    avgTicketSize: 185.71,
  },
  {
    id: "6",
    storeId: "WC-001",
    name: "San Francisco Union Square",
    region: "West Coast",
    address: "865 Market St, San Francisco, CA",
    monthlySales: 320000,
    growth: 12.3,
    transactions: 1580,
    avgTicketSize: 202.53,
  },
  {
    id: "7",
    storeId: "WC-002",
    name: "Los Angeles Beverly",
    region: "West Coast",
    address: "8500 Beverly Blvd, Los Angeles, CA",
    monthlySales: 290000,
    growth: 8.7,
    transactions: 1420,
    avgTicketSize: 204.23,
  },
  {
    id: "8",
    storeId: "NW-001",
    name: "Seattle Downtown",
    region: "Northwest",
    address: "1420 5th Ave, Seattle, WA",
    monthlySales: 185000,
    growth: 9.2,
    transactions: 980,
    avgTicketSize: 188.78,
  },
];

const RegionalSalesReports = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [regionFilter, setRegionFilter] = React.useState("all");
  const [timeFrame, setTimeFrame] = React.useState("month");
  const [selectedRegion, setSelectedRegion] = React.useState<string | null>(
    null,
  );

  const regions = [
    ...new Set(regionalSalesData.map((region) => region.region)),
  ];

  const filteredStores = storeSalesData.filter(
    (store) =>
      (regionFilter === "all" || store.region === regionFilter) &&
      (store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.storeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.address.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const filteredRegionalData = selectedRegion
    ? storeSalesData.filter((store) => store.region === selectedRegion)
    : [];

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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-3">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Regional Performance Overview
          </h3>
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Region</TableHead>
                  <TableHead className="text-center text-slate-300">
                    Store Count
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Total Sales
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Growth
                  </TableHead>
                  <TableHead className="text-slate-300">Top Category</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Avg. Ticket Size
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Conversion Rate
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {regionalSalesData.map((region) => (
                  <TableRow
                    key={region.id}
                    className={`border-slate-800 ${selectedRegion === region.region ? "bg-slate-800/50" : ""}`}
                    onClick={() =>
                      setSelectedRegion(
                        selectedRegion === region.region ? null : region.region,
                      )
                    }
                  >
                    <TableCell className="font-medium text-slate-300">
                      {region.region}
                    </TableCell>
                    <TableCell className="text-center">
                      {region.storeCount}
                    </TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(region.totalSales)}
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={
                          region.growth > 0
                            ? "text-emerald-500"
                            : "text-red-500"
                        }
                      >
                        {region.growth > 0 ? "+" : ""}
                        {region.growth}%
                      </span>
                    </TableCell>
                    <TableCell>{region.topCategory}</TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 2,
                      }).format(region.avgTicketSize)}
                    </TableCell>
                    <TableCell className="text-right">
                      {region.conversionRate}%
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
                            <path d="M2 12h5" />
                            <path d="M17 12h5" />
                            <path d="M7 17 17 7" />
                            <path d="m7 7 10 10" />
                          </svg>
                          <span className="sr-only">Expand</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
        </div>
      </div>

      {selectedRegion && (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            {selectedRegion} Region - Store Performance
          </h3>
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Store ID</TableHead>
                  <TableHead className="text-slate-300">Store Name</TableHead>
                  <TableHead className="text-slate-300">Address</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Monthly Sales
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Growth
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Transactions
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Avg. Ticket Size
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRegionalData.map((store) => (
                  <TableRow key={store.id} className="border-slate-800">
                    <TableCell className="font-medium text-slate-300">
                      {store.storeId}
                    </TableCell>
                    <TableCell>{store.name}</TableCell>
                    <TableCell>{store.address}</TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(store.monthlySales)}
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={
                          store.growth > 0 ? "text-emerald-500" : "text-red-500"
                        }
                      >
                        {store.growth > 0 ? "+" : ""}
                        {store.growth}%
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {store.transactions.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 2,
                      }).format(store.avgTicketSize)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-3">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Store Performance
          </h3>
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Store ID</TableHead>
                  <TableHead className="text-slate-300">Store Name</TableHead>
                  <TableHead className="text-slate-300">Region</TableHead>
                  <TableHead className="text-slate-300">Address</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Monthly Sales
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Growth
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Transactions
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Avg. Ticket Size
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStores.map((store) => (
                  <TableRow key={store.id} className="border-slate-800">
                    <TableCell className="font-medium text-slate-300">
                      {store.storeId}
                    </TableCell>
                    <TableCell>{store.name}</TableCell>
                    <TableCell>{store.region}</TableCell>
                    <TableCell>{store.address}</TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(store.monthlySales)}
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={
                          store.growth > 0 ? "text-emerald-500" : "text-red-500"
                        }
                      >
                        {store.growth > 0 ? "+" : ""}
                        {store.growth}%
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {store.transactions.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 2,
                      }).format(store.avgTicketSize)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
        </div>
      </div>
    </div>
  );
};

export default RegionalSalesReports;
