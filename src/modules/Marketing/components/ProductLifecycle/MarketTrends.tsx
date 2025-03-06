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

interface MarketTrend {
  id: string;
  trend: string;
  category: string;
  growthRate: number;
  marketSize: number;
  relevanceScore: number;
  competitorActivity: "low" | "medium" | "high";
  consumerDemand: "decreasing" | "stable" | "increasing" | "surging";
  timeFrame: "short-term" | "mid-term" | "long-term";
  lastUpdated: string;
}

const marketTrends: MarketTrend[] = [
  {
    id: "1",
    trend: "Voice-Controlled Smart Home",
    category: "Smart Home",
    growthRate: 28.5,
    marketSize: 12500000,
    relevanceScore: 95,
    competitorActivity: "high",
    consumerDemand: "increasing",
    timeFrame: "short-term",
    lastUpdated: "2023-06-15",
  },
  {
    id: "2",
    trend: "AI-Powered Security Systems",
    category: "Security Systems",
    growthRate: 32.1,
    marketSize: 8750000,
    relevanceScore: 90,
    competitorActivity: "high",
    consumerDemand: "surging",
    timeFrame: "short-term",
    lastUpdated: "2023-06-20",
  },
  {
    id: "3",
    trend: "Integrated Smart Entertainment",
    category: "Smart Entertainment",
    growthRate: 18.5,
    marketSize: 15200000,
    relevanceScore: 85,
    competitorActivity: "medium",
    consumerDemand: "increasing",
    timeFrame: "mid-term",
    lastUpdated: "2023-06-10",
  },
  {
    id: "4",
    trend: "Energy Efficient Smart Appliances",
    category: "Smart Appliances",
    growthRate: 15.2,
    marketSize: 9800000,
    relevanceScore: 80,
    competitorActivity: "medium",
    consumerDemand: "stable",
    timeFrame: "mid-term",
    lastUpdated: "2023-06-05",
  },
  {
    id: "5",
    trend: "Wearable Smart Home Controls",
    category: "Smart Home",
    growthRate: 12.8,
    marketSize: 4500000,
    relevanceScore: 75,
    competitorActivity: "low",
    consumerDemand: "increasing",
    timeFrame: "long-term",
    lastUpdated: "2023-06-01",
  },
  {
    id: "6",
    trend: "Blockchain Security for Smart Homes",
    category: "Security Systems",
    growthRate: 8.5,
    marketSize: 2250000,
    relevanceScore: 65,
    competitorActivity: "low",
    consumerDemand: "stable",
    timeFrame: "long-term",
    lastUpdated: "2023-05-25",
  },
];

const MarketTrends = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [timeFrameFilter, setTimeFrameFilter] = React.useState("all");
  const [selectedTrend, setSelectedTrend] = React.useState<string | null>(null);

  const categories = [...new Set(marketTrends.map((trend) => trend.category))];

  const filteredTrends = marketTrends.filter(
    (trend) =>
      (categoryFilter === "all" || trend.category === categoryFilter) &&
      (timeFrameFilter === "all" || trend.timeFrame === timeFrameFilter) &&
      (trend.trend.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trend.category.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const selectedTrendData = selectedTrend
    ? marketTrends.find((trend) => trend.id === selectedTrend)
    : null;

  const getCompetitorActivityColor = (activity: string) => {
    switch (activity) {
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

  const getConsumerDemandColor = (demand: string) => {
    switch (demand) {
      case "surging":
        return "bg-purple-500/10 text-purple-500";
      case "increasing":
        return "bg-emerald-500/10 text-emerald-500";
      case "stable":
        return "bg-blue-500/10 text-blue-500";
      case "decreasing":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getTimeFrameColor = (timeFrame: string) => {
    switch (timeFrame) {
      case "short-term":
        return "bg-emerald-500/10 text-emerald-500";
      case "mid-term":
        return "bg-amber-500/10 text-amber-500";
      case "long-term":
        return "bg-blue-500/10 text-blue-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Total Trends</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {marketTrends.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Avg. Growth Rate
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {(
              marketTrends.reduce((sum, trend) => sum + trend.growthRate, 0) /
              marketTrends.length
            ).toFixed(1)}
            %
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            High Relevance
          </div>
          <div className="mt-1 text-2xl font-bold text-cyan-500">
            {marketTrends.filter((trend) => trend.relevanceScore >= 85).length}
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
              placeholder="Search trends..."
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
          <Select value={timeFrameFilter} onValueChange={setTimeFrameFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Time Frame" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time Frames</SelectItem>
              <SelectItem value="short-term">Short Term</SelectItem>
              <SelectItem value="mid-term">Mid Term</SelectItem>
              <SelectItem value="long-term">Long Term</SelectItem>
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
          Add Trend
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Trend</TableHead>
                  <TableHead className="text-slate-300">Category</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Growth Rate
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Relevance
                  </TableHead>
                  <TableHead className="text-slate-300">Time Frame</TableHead>
                  <TableHead className="text-slate-300">
                    Consumer Demand
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTrends.map((trend) => (
                  <TableRow
                    key={trend.id}
                    className={`border-slate-800 ${selectedTrend === trend.id ? "bg-slate-800/50" : ""}`}
                    onClick={() =>
                      setSelectedTrend(
                        selectedTrend === trend.id ? null : trend.id,
                      )
                    }
                  >
                    <TableCell className="font-medium text-slate-300">
                      {trend.trend}
                    </TableCell>
                    <TableCell>{trend.category}</TableCell>
                    <TableCell className="text-right">
                      <span className="text-emerald-500">
                        {trend.growthRate}%
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {trend.relevanceScore}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getTimeFrameColor(trend.timeFrame)}`}
                      >
                        {trend.timeFrame
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1),
                          )
                          .join(" ")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getConsumerDemandColor(trend.consumerDemand)}`}
                      >
                        {trend.consumerDemand.charAt(0).toUpperCase() +
                          trend.consumerDemand.slice(1)}
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
          {selectedTrendData ? (
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {selectedTrendData.trend} - Details
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Category
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedTrendData.category}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Time Frame
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedTrendData.timeFrame
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1),
                          )
                          .join(" ")}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Growth Rate
                      </h4>
                      <p className="mt-1 text-xl font-bold text-emerald-500">
                        {selectedTrendData.growthRate}%
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Market Size
                      </h4>
                      <p className="mt-1 text-xl font-bold text-white">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          maximumFractionDigits: 0,
                        }).format(selectedTrendData.marketSize)}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Relevance Score
                    </h4>
                    <div className="mt-2 flex items-center space-x-2">
                      <div className="h-2 flex-1 rounded-full bg-slate-700">
                        <div
                          className="h-2 rounded-full bg-cyan-500"
                          style={{
                            width: `${selectedTrendData.relevanceScore}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-cyan-500">
                        {selectedTrendData.relevanceScore}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Competitor Activity
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getCompetitorActivityColor(selectedTrendData.competitorActivity)}`}
                        >
                          {selectedTrendData.competitorActivity
                            .charAt(0)
                            .toUpperCase() +
                            selectedTrendData.competitorActivity.slice(1)}
                        </span>
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Consumer Demand
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getConsumerDemandColor(selectedTrendData.consumerDemand)}`}
                        >
                          {selectedTrendData.consumerDemand
                            .charAt(0)
                            .toUpperCase() +
                            selectedTrendData.consumerDemand.slice(1)}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Last Updated
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {new Date(
                        selectedTrendData.lastUpdated,
                      ).toLocaleDateString()}
                    </p>
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
                      Update Trend
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
                      Export Data
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
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  <h3 className="mb-1 text-lg font-medium text-slate-400">
                    Select a trend
                  </h3>
                  <p className="text-sm text-slate-500">
                    Click on a trend to view detailed information
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

export default MarketTrends;
