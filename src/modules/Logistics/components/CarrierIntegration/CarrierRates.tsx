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

interface CarrierRate {
  id: string;
  carrier: string;
  service: string;
  origin: string;
  destination: string;
  weightBreak: string;
  baseRate: number;
  fuelSurcharge: number;
  additionalFees: number;
  transitTime: string;
  effectiveDate: string;
  expirationDate: string;
}

const carrierRates: CarrierRate[] = [
  {
    id: "1",
    carrier: "FedEx",
    service: "Express",
    origin: "West Coast",
    destination: "East Coast",
    weightBreak: "1-5 lbs",
    baseRate: 15.75,
    fuelSurcharge: 2.35,
    additionalFees: 1.5,
    transitTime: "2 days",
    effectiveDate: "2023-01-01",
    expirationDate: "2023-12-31",
  },
  {
    id: "2",
    carrier: "FedEx",
    service: "Express",
    origin: "West Coast",
    destination: "East Coast",
    weightBreak: "6-10 lbs",
    baseRate: 22.5,
    fuelSurcharge: 3.38,
    additionalFees: 1.5,
    transitTime: "2 days",
    effectiveDate: "2023-01-01",
    expirationDate: "2023-12-31",
  },
  {
    id: "3",
    carrier: "FedEx",
    service: "Ground",
    origin: "West Coast",
    destination: "East Coast",
    weightBreak: "1-5 lbs",
    baseRate: 9.25,
    fuelSurcharge: 1.39,
    additionalFees: 1.0,
    transitTime: "5 days",
    effectiveDate: "2023-01-01",
    expirationDate: "2023-12-31",
  },
  {
    id: "4",
    carrier: "UPS",
    service: "Ground",
    origin: "Midwest",
    destination: "Southeast",
    weightBreak: "1-5 lbs",
    baseRate: 8.95,
    fuelSurcharge: 1.34,
    additionalFees: 1.0,
    transitTime: "3 days",
    effectiveDate: "2023-02-15",
    expirationDate: "2024-02-14",
  },
  {
    id: "5",
    carrier: "UPS",
    service: "2nd Day Air",
    origin: "Midwest",
    destination: "Southeast",
    weightBreak: "1-5 lbs",
    baseRate: 14.5,
    fuelSurcharge: 2.18,
    additionalFees: 1.25,
    transitTime: "2 days",
    effectiveDate: "2023-02-15",
    expirationDate: "2024-02-14",
  },
  {
    id: "6",
    carrier: "DHL",
    service: "International Express",
    origin: "United States",
    destination: "Europe",
    weightBreak: "1-5 lbs",
    baseRate: 42.75,
    fuelSurcharge: 6.41,
    additionalFees: 3.5,
    transitTime: "3-4 days",
    effectiveDate: "2023-03-10",
    expirationDate: "2023-09-10",
  },
  {
    id: "7",
    carrier: "USPS",
    service: "Priority Mail",
    origin: "United States",
    destination: "United States",
    weightBreak: "1-5 lbs",
    baseRate: 8.7,
    fuelSurcharge: 0.0,
    additionalFees: 0.0,
    transitTime: "1-3 days",
    effectiveDate: "2022-11-01",
    expirationDate: "2023-10-31",
  },
  {
    id: "8",
    carrier: "USPS",
    service: "First Class Package",
    origin: "United States",
    destination: "United States",
    weightBreak: "0-1 lbs",
    baseRate: 4.5,
    fuelSurcharge: 0.0,
    additionalFees: 0.0,
    transitTime: "2-5 days",
    effectiveDate: "2022-11-01",
    expirationDate: "2023-10-31",
  },
];

const CarrierRates = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [carrierFilter, setCarrierFilter] = React.useState("all");
  const [serviceFilter, setServiceFilter] = React.useState("all");

  const filteredRates = carrierRates.filter(
    (rate) =>
      (carrierFilter === "all" || rate.carrier === carrierFilter) &&
      (serviceFilter === "all" || rate.service === serviceFilter) &&
      (rate.carrier.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rate.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rate.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rate.destination.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Get unique carriers and services for filters
  const carriers = [...new Set(carrierRates.map((rate) => rate.carrier))];
  const services = [...new Set(carrierRates.map((rate) => rate.service))];

  // Calculate total rate (base + fuel + additional)
  const calculateTotalRate = (rate: CarrierRate) => {
    return rate.baseRate + rate.fuelSurcharge + rate.additionalFees;
  };

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
              placeholder="Search rates..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={carrierFilter} onValueChange={setCarrierFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Carrier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Carriers</SelectItem>
              {carriers.map((carrier) => (
                <SelectItem key={carrier} value={carrier}>
                  {carrier}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={serviceFilter} onValueChange={setServiceFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Services</SelectItem>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full space-x-2 md:w-auto">
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
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add Rate
          </Button>
          <Button variant="outline" className="w-full md:w-auto">
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
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            Import Rates
          </Button>
        </div>
      </div>

      <Card className="border-slate-800 bg-slate-800/50">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Rate Comparison Tool
          </h3>
          <p className="mb-6 text-sm text-slate-400">
            Compare shipping rates across carriers for different weight breaks
            and destinations.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Origin
              </label>
              <Select defaultValue="west">
                <SelectTrigger>
                  <SelectValue placeholder="Select origin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="west">West Coast</SelectItem>
                  <SelectItem value="midwest">Midwest</SelectItem>
                  <SelectItem value="east">East Coast</SelectItem>
                  <SelectItem value="south">Southeast</SelectItem>
                  <SelectItem value="all-us">United States (All)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Destination
              </label>
              <Select defaultValue="east">
                <SelectTrigger>
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="west">West Coast</SelectItem>
                  <SelectItem value="midwest">Midwest</SelectItem>
                  <SelectItem value="east">East Coast</SelectItem>
                  <SelectItem value="south">Southeast</SelectItem>
                  <SelectItem value="all-us">United States (All)</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Package Weight
              </label>
              <Select defaultValue="1-5">
                <SelectTrigger>
                  <SelectValue placeholder="Select weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">0-1 lbs</SelectItem>
                  <SelectItem value="1-5">1-5 lbs</SelectItem>
                  <SelectItem value="6-10">6-10 lbs</SelectItem>
                  <SelectItem value="11-20">11-20 lbs</SelectItem>
                  <SelectItem value="21+">21+ lbs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700">
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
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            Compare Rates
          </Button>
        </CardContent>
      </Card>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Carrier</TableHead>
              <TableHead className="text-slate-300">Service</TableHead>
              <TableHead className="text-slate-300">Origin</TableHead>
              <TableHead className="text-slate-300">Destination</TableHead>
              <TableHead className="text-slate-300">Weight Break</TableHead>
              <TableHead className="text-right text-slate-300">
                Base Rate
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Fuel Surcharge
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Additional Fees
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Total Rate
              </TableHead>
              <TableHead className="text-slate-300">Transit Time</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRates.map((rate) => (
              <TableRow key={rate.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {rate.carrier}
                </TableCell>
                <TableCell>{rate.service}</TableCell>
                <TableCell>{rate.origin}</TableCell>
                <TableCell>{rate.destination}</TableCell>
                <TableCell>{rate.weightBreak}</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(rate.baseRate)}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(rate.fuelSurcharge)}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(rate.additionalFees)}
                </TableCell>
                <TableCell className="text-right font-medium text-white">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(calculateTotalRate(rate))}
                </TableCell>
                <TableCell>{rate.transitTime}</TableCell>
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
                        className="h-4 w-4"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                      <span className="sr-only">Edit</span>
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
                        className="h-4 w-4 text-red-500"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      </svg>
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CarrierRates;
