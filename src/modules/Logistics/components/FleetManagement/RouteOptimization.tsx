import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Route {
  id: string;
  name: string;
  driver: string;
  vehicle: string;
  startLocation: string;
  stops: number;
  estimatedDistance: number;
  estimatedDuration: string;
  status: "planned" | "in-progress" | "completed" | "delayed";
  fuelConsumption: number;
  co2Emissions: number;
}

const routes: Route[] = [
  {
    id: "1",
    name: "Route A - North District",
    driver: "Michael Rodriguez",
    vehicle: "Van #103 (Ford Transit)",
    startLocation: "Main Warehouse",
    stops: 8,
    estimatedDistance: 42.5,
    estimatedDuration: "3h 15m",
    status: "in-progress",
    fuelConsumption: 12.8,
    co2Emissions: 34.2,
  },
  {
    id: "2",
    name: "Route B - East District",
    driver: "Jennifer Davis",
    vehicle: "Truck #205 (Isuzu NPR)",
    startLocation: "Main Warehouse",
    stops: 6,
    estimatedDistance: 38.2,
    estimatedDuration: "2h 45m",
    status: "planned",
    fuelConsumption: 15.3,
    co2Emissions: 40.8,
  },
  {
    id: "3",
    name: "Route C - South District",
    driver: "David Martinez",
    vehicle: "Van #105 (Mercedes Sprinter)",
    startLocation: "Distribution Center B",
    stops: 10,
    estimatedDistance: 51.7,
    estimatedDuration: "4h 00m",
    status: "completed",
    fuelConsumption: 14.2,
    co2Emissions: 37.9,
  },
  {
    id: "4",
    name: "Route D - West District",
    driver: "Lisa Thompson",
    vehicle: "Van #102 (Ford Transit)",
    startLocation: "Distribution Center A",
    stops: 7,
    estimatedDistance: 35.8,
    estimatedDuration: "2h 50m",
    status: "delayed",
    fuelConsumption: 10.7,
    co2Emissions: 28.6,
  },
  {
    id: "5",
    name: "Route E - Central District",
    driver: "Robert Wilson",
    vehicle: "Truck #201 (Isuzu NPR)",
    startLocation: "Main Warehouse",
    stops: 12,
    estimatedDistance: 28.3,
    estimatedDuration: "3h 30m",
    status: "planned",
    fuelConsumption: 11.3,
    co2Emissions: 30.2,
  },
];

const RouteOptimization = () => {
  const [selectedRoute, setSelectedRoute] = React.useState<string | null>(null);
  const [statusFilter, setStatusFilter] = React.useState("all");

  const filteredRoutes = routes.filter(
    (route) => statusFilter === "all" || route.status === statusFilter,
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "planned":
        return "bg-blue-500/10 text-blue-500";
      case "in-progress":
        return "bg-amber-500/10 text-amber-500";
      case "completed":
        return "bg-emerald-500/10 text-emerald-500";
      case "delayed":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  // Calculate statistics
  const totalDistance = routes.reduce(
    (sum, route) => sum + route.estimatedDistance,
    0,
  );
  const totalFuel = routes.reduce(
    (sum, route) => sum + route.fuelConsumption,
    0,
  );
  const totalEmissions = routes.reduce(
    (sum, route) => sum + route.co2Emissions,
    0,
  );
  const avgStopsPerRoute = Math.round(
    routes.reduce((sum, route) => sum + route.stops, 0) / routes.length,
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Distance
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {totalDistance.toFixed(1)} km
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Fuel Consumption
          </div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {totalFuel.toFixed(1)} L
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            CO₂ Emissions
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {totalEmissions.toFixed(1)} kg
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Avg. Stops/Route
          </div>
          <div className="mt-1 text-2xl font-bold text-cyan-500">
            {avgStopsPerRoute}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Route Planning</h3>
            <div className="flex space-x-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="planned">Planned</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="delayed">Delayed</SelectItem>
                </SelectContent>
              </Select>
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
                New Route
              </Button>
            </div>
          </div>

          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Route Name</TableHead>
                  <TableHead className="text-slate-300">Driver</TableHead>
                  <TableHead className="text-slate-300">Stops</TableHead>
                  <TableHead className="text-slate-300">Distance</TableHead>
                  <TableHead className="text-slate-300">Duration</TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRoutes.map((route) => (
                  <TableRow
                    key={route.id}
                    className={`border-slate-800 ${selectedRoute === route.id ? "bg-slate-800/50" : ""}`}
                    onClick={() => setSelectedRoute(route.id)}
                  >
                    <TableCell className="font-medium text-slate-300">
                      {route.name}
                    </TableCell>
                    <TableCell>{route.driver}</TableCell>
                    <TableCell>{route.stops}</TableCell>
                    <TableCell>{route.estimatedDistance} km</TableCell>
                    <TableCell>{route.estimatedDuration}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(route.status)}`}
                      >
                        {route.status
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1),
                          )
                          .join(" ")}
                      </span>
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
                            className="h-4 w-4"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                          </svg>
                          <span className="sr-only">Edit</span>
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
                            className="h-4 w-4 text-blue-500"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span className="sr-only">View Map</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div>
          <Card className="border-slate-800 bg-slate-800/50">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Route Optimization
              </h3>
              <p className="mb-6 text-sm text-slate-400">
                Optimize delivery routes based on various parameters to reduce
                fuel consumption, emissions, and delivery time.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Optimization Priority
                  </label>
                  <Select defaultValue="balanced">
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="time">Delivery Time</SelectItem>
                      <SelectItem value="fuel">Fuel Efficiency</SelectItem>
                      <SelectItem value="balanced">Balanced</SelectItem>
                      <SelectItem value="emissions">
                        Lowest Emissions
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Traffic Conditions
                  </label>
                  <Select defaultValue="moderate">
                    <SelectTrigger>
                      <SelectValue placeholder="Select traffic conditions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light Traffic</SelectItem>
                      <SelectItem value="moderate">Moderate Traffic</SelectItem>
                      <SelectItem value="heavy">Heavy Traffic</SelectItem>
                      <SelectItem value="realtime">Real-time Data</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Vehicle Type Preference
                  </label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Vehicles</SelectItem>
                      <SelectItem value="van">Vans Only</SelectItem>
                      <SelectItem value="truck">Trucks Only</SelectItem>
                      <SelectItem value="electric">
                        Electric Vehicles
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-2">
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
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                    Optimize Routes
                  </Button>
                </div>
              </div>

              <div className="mt-6 rounded-md border border-slate-700 bg-slate-800 p-4">
                <h4 className="mb-2 text-sm font-medium text-white">
                  Optimization Results
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Estimated Savings</span>
                    <span className="font-medium text-emerald-500">12.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Distance Reduction</span>
                    <span className="font-medium text-slate-300">18.3 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Fuel Savings</span>
                    <span className="font-medium text-slate-300">5.2 L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">CO₂ Reduction</span>
                    <span className="font-medium text-slate-300">13.8 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Time Saved</span>
                    <span className="font-medium text-slate-300">
                      45 minutes
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RouteOptimization;
