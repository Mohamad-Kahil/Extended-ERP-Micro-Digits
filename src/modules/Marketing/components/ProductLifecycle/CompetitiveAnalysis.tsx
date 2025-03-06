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

interface Competitor {
  id: string;
  name: string;
  category: string;
  marketShare: number;
  pricePosition: "premium" | "mid-range" | "budget";
  strengthScore: number;
  weaknessScore: number;
  threatLevel: "high" | "medium" | "low";
  keyProducts: string[];
  lastUpdated: string;
}

const competitors: Competitor[] = [
  {
    id: "1",
    name: "TechGiant Inc.",
    category: "Smart Home",
    marketShare: 28.5,
    pricePosition: "premium",
    strengthScore: 85,
    weaknessScore: 35,
    threatLevel: "high",
    keyProducts: [
      "Smart Hub Pro",
      "Voice Assistant Plus",
      "Connected Thermostat",
    ],
    lastUpdated: "2023-06-15",
  },
  {
    id: "2",
    name: "SmartLife Systems",
    category: "Smart Home",
    marketShare: 18.2,
    pricePosition: "mid-range",
    strengthScore: 72,
    weaknessScore: 45,
    threatLevel: "medium",
    keyProducts: [
      "Home Control Center",
      "Smart Lighting Kit",
      "Security Bundle",
    ],
    lastUpdated: "2023-06-10",
  },
  {
    id: "3",
    name: "ConnectAll",
    category: "Smart Home",
    marketShare: 12.8,
    pricePosition: "budget",
    strengthScore: 65,
    weaknessScore: 55,
    threatLevel: "medium",
    keyProducts: ["Basic Smart Hub", "Entry Security Camera", "Smart Plug Set"],
    lastUpdated: "2023-06-05",
  },
  {
    id: "4",
    name: "SecureHome",
    category: "Security Systems",
    marketShare: 32.1,
    pricePosition: "premium",
    strengthScore: 90,
    weaknessScore: 30,
    threatLevel: "high",
    keyProducts: ["Pro Security System", "Video Doorbell Pro", "Smart Locks"],
    lastUpdated: "2023-06-20",
  },
  {
    id: "5",
    name: "EntertainTech",
    category: "Smart Entertainment",
    marketShare: 24.5,
    pricePosition: "mid-range",
    strengthScore: 78,
    weaknessScore: 40,
    threatLevel: "medium",
    keyProducts: [
      "Smart TV Hub",
      "Wireless Audio System",
      "Gaming Integration",
    ],
    lastUpdated: "2023-06-12",
  },
  {
    id: "6",
    name: "BudgetSmart",
    category: "Smart Home",
    marketShare: 8.5,
    pricePosition: "budget",
    strengthScore: 55,
    weaknessScore: 70,
    threatLevel: "low",
    keyProducts: ["Basic Smart Speakers", "Budget Cameras", "Simple Controls"],
    lastUpdated: "2023-06-01",
  },
];

const CompetitiveAnalysis = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [threatFilter, setThreatFilter] = React.useState("all");
  const [selectedCompetitor, setSelectedCompetitor] = React.useState<
    string | null
  >(null);

  const categories = [...new Set(competitors.map((comp) => comp.category))];

  const filteredCompetitors = competitors.filter(
    (competitor) =>
      (categoryFilter === "all" || competitor.category === categoryFilter) &&
      (threatFilter === "all" || competitor.threatLevel === threatFilter) &&
      (competitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        competitor.category.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const selectedCompetitorData = selectedCompetitor
    ? competitors.find((comp) => comp.id === selectedCompetitor)
    : null;

  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-red-500/10 text-red-500";
      case "medium":
        return "bg-amber-500/10 text-amber-500";
      case "low":
        return "bg-emerald-500/10 text-emerald-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getPricePositionColor = (position: string) => {
    switch (position) {
      case "premium":
        return "bg-purple-500/10 text-purple-500";
      case "mid-range":
        return "bg-blue-500/10 text-blue-500";
      case "budget":
        return "bg-green-500/10 text-green-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Competitors
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {competitors.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">High Threat</div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {competitors.filter((c) => c.threatLevel === "high").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Avg. Market Share
          </div>
          <div className="mt-1 text-2xl font-bold text-cyan-500">
            {(
              competitors.reduce((sum, comp) => sum + comp.marketShare, 0) /
              competitors.length
            ).toFixed(1)}
            %
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Categories</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {categories.length}
          </div>
        </div>
      </div>

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
              placeholder="Search competitors..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={threatFilter} onValueChange={setThreatFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Threat Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Add Competitor
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Competitor</TableHead>
                  <TableHead className="text-slate-300">Category</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Market Share
                  </TableHead>
                  <TableHead className="text-slate-300">
                    Price Position
                  </TableHead>
                  <TableHead className="text-slate-300">Threat Level</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Strength
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Weakness
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCompetitors.map((competitor) => (
                  <TableRow
                    key={competitor.id}
                    className={`border-slate-800 ${selectedCompetitor === competitor.id ? "bg-slate-800/50" : ""}`}
                    onClick={() =>
                      setSelectedCompetitor(
                        selectedCompetitor === competitor.id
                          ? null
                          : competitor.id,
                      )
                    }
                  >
                    <TableCell className="font-medium text-slate-300">
                      {competitor.name}
                    </TableCell>
                    <TableCell>{competitor.category}</TableCell>
                    <TableCell className="text-right">
                      {competitor.marketShare}%
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getPricePositionColor(competitor.pricePosition)}`}
                      >
                        {competitor.pricePosition.charAt(0).toUpperCase() +
                          competitor.pricePosition.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getThreatLevelColor(competitor.threatLevel)}`}
                      >
                        {competitor.threatLevel.charAt(0).toUpperCase() +
                          competitor.threatLevel.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {competitor.strengthScore}
                    </TableCell>
                    <TableCell className="text-right">
                      {competitor.weaknessScore}
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
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                          </svg>
                          <span className="sr-only">View Details</span>
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
          {selectedCompetitorData ? (
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {selectedCompetitorData.name} - Analysis
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Key Products
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {selectedCompetitorData.keyProducts.map(
                        (product, index) => (
                          <li
                            key={index}
                            className="flex items-start text-sm text-slate-300"
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
                              className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500"
                            >
                              <path d="m5 12 5 5 9-9" />
                            </svg>
                            {product}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Market Share
                      </h4>
                      <p className="mt-1 text-xl font-bold text-white">
                        {selectedCompetitorData.marketShare}%
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Price Position
                      </h4>
                      <p className="mt-1 text-xl font-bold text-white">
                        {selectedCompetitorData.pricePosition
                          .charAt(0)
                          .toUpperCase() +
                          selectedCompetitorData.pricePosition.slice(1)}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Strength vs Weakness
                    </h4>
                    <div className="mt-2 flex items-center space-x-2">
                      <div className="h-2 flex-1 rounded-full bg-slate-700">
                        <div
                          className="h-2 rounded-full bg-emerald-500"
                          style={{
                            width: `${selectedCompetitorData.strengthScore}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-emerald-500">
                        {selectedCompetitorData.strengthScore}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center space-x-2">
                      <div className="h-2 flex-1 rounded-full bg-slate-700">
                        <div
                          className="h-2 rounded-full bg-red-500"
                          style={{
                            width: `${selectedCompetitorData.weaknessScore}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-red-500">
                        {selectedCompetitorData.weaknessScore}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Threat Assessment
                    </h4>
                    <div className="mt-2 flex items-center space-x-2">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getThreatLevelColor(selectedCompetitorData.threatLevel)}`}
                      >
                        {selectedCompetitorData.threatLevel
                          .charAt(0)
                          .toUpperCase() +
                          selectedCompetitorData.threatLevel.slice(1)}
                      </span>
                      <span className="text-sm text-slate-400">
                        Last updated:{" "}
                        {new Date(
                          selectedCompetitorData.lastUpdated,
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
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
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                      Update Analysis
                    </Button>
                    <Button variant="outline" className="w-full">
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
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="flex h-[400px] items-center justify-center p-6">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto mb-4 text-slate-600"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  <h3 className="mb-1 text-lg font-medium text-slate-400">
                    Select a competitor
                  </h3>
                  <p className="text-sm text-slate-500">
                    Click on a competitor to view detailed analysis
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetitiveAnalysis;
