import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PredictiveAnalyticsProps {
  isMarket?: boolean;
  isTrends?: boolean;
}

const PredictiveAnalytics = ({
  isMarket = false,
  isTrends = false,
}: PredictiveAnalyticsProps) => {
  const [timeRange, setTimeRange] = React.useState("6months");
  const [confidenceLevel, setConfidenceLevel] = React.useState("medium");

  // Revenue forecast data
  const revenueData = {
    historical: [
      { month: "Jan", value: 3200000 },
      { month: "Feb", value: 3300000 },
      { month: "Mar", value: 3400000 },
      { month: "Apr", value: 3600000 },
      { month: "May", value: 3700000 },
      { month: "Jun", value: 3800000 },
    ],
    forecast: [
      { month: "Jul", value: 3900000, min: 3800000, max: 4000000 },
      { month: "Aug", value: 4000000, min: 3850000, max: 4150000 },
      { month: "Sep", value: 4100000, min: 3900000, max: 4300000 },
      { month: "Oct", value: 4200000, min: 3950000, max: 4450000 },
      { month: "Nov", value: 4300000, min: 4000000, max: 4600000 },
      { month: "Dec", value: 4500000, min: 4100000, max: 4900000 },
    ],
    growthRate: 5.8,
    confidenceScore: 85,
    keyDrivers: [
      { name: "Product Line Expansion", impact: "High Positive" },
      { name: "Seasonal Demand", impact: "Medium Positive" },
      { name: "Market Competition", impact: "Low Negative" },
      { name: "Economic Conditions", impact: "Medium Positive" },
    ],
  };

  // Market analysis data
  const marketData = {
    historical: [
      { month: "Jan", value: 28 },
      { month: "Feb", value: 28.5 },
      { month: "Mar", value: 29 },
      { month: "Apr", value: 29.5 },
      { month: "May", value: 30 },
      { month: "Jun", value: 30.5 },
    ],
    forecast: [
      { month: "Jul", value: 31, min: 30.5, max: 31.5 },
      { month: "Aug", value: 31.5, min: 30.8, max: 32.2 },
      { month: "Sep", value: 32, min: 31, max: 33 },
      { month: "Oct", value: 32.5, min: 31.2, max: 33.8 },
      { month: "Nov", value: 33, min: 31.5, max: 34.5 },
      { month: "Dec", value: 33.5, min: 31.8, max: 35.2 },
    ],
    growthRate: 3.2,
    confidenceScore: 78,
    keyDrivers: [
      { name: "Competitor Activity", impact: "Medium Negative" },
      { name: "Customer Preferences", impact: "High Positive" },
      { name: "Regulatory Changes", impact: "Low Negative" },
      { name: "Technology Adoption", impact: "High Positive" },
    ],
  };

  // Future trends data
  const trendsData = {
    historical: [
      { month: "Jan", value: 65 },
      { month: "Feb", value: 67 },
      { month: "Mar", value: 70 },
      { month: "Apr", value: 72 },
      { month: "May", value: 75 },
      { month: "Jun", value: 78 },
    ],
    forecast: [
      { month: "Jul", value: 80, min: 78, max: 82 },
      { month: "Aug", value: 83, min: 80, max: 86 },
      { month: "Sep", value: 85, min: 82, max: 88 },
      { month: "Oct", value: 88, min: 84, max: 92 },
      { month: "Nov", value: 90, min: 86, max: 94 },
      { month: "Dec", value: 92, min: 87, max: 97 },
    ],
    growthRate: 15.2,
    confidenceScore: 72,
    keyDrivers: [
      { name: "Digital Transformation", impact: "High Positive" },
      { name: "Consumer Behavior Shift", impact: "High Positive" },
      { name: "Supply Chain Disruption", impact: "Medium Negative" },
      { name: "Sustainability Focus", impact: "Medium Positive" },
    ],
  };

  // Determine which data to use based on props
  const data = isMarket ? marketData : isTrends ? trendsData : revenueData;

  // Format value based on data type
  const formatValue = (value: number) => {
    if (!isMarket && !isTrends) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
        maximumFractionDigits: 1,
      }).format(value);
    } else if (isMarket) {
      return `${value}%`;
    } else {
      return value.toString();
    }
  };

  // Get impact color for key drivers
  const getImpactColor = (impact: string) => {
    if (impact.includes("High Positive")) return "text-emerald-500";
    if (impact.includes("Medium Positive")) return "text-emerald-400";
    if (impact.includes("Low Positive")) return "text-emerald-300";
    if (impact.includes("High Negative")) return "text-red-500";
    if (impact.includes("Medium Negative")) return "text-red-400";
    if (impact.includes("Low Negative")) return "text-red-300";
    return "text-slate-400";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <h3 className="text-lg font-semibold text-white">
          {isMarket
            ? "Market Share Prediction"
            : isTrends
              ? "Emerging Trends Analysis"
              : "Revenue Forecast"}
        </h3>
        <div className="flex space-x-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3months">3 Months</SelectItem>
              <SelectItem value="6months">6 Months</SelectItem>
              <SelectItem value="12months">12 Months</SelectItem>
            </SelectContent>
          </Select>
          <Select value={confidenceLevel} onValueChange={setConfidenceLevel}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Confidence" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low (70%)</SelectItem>
              <SelectItem value="medium">Medium (85%)</SelectItem>
              <SelectItem value="high">High (95%)</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="h-10">
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
              <line x1="16" x2="22" y1="5" y2="5" />
              <line x1="19" x2="19" y1="2" y2="8" />
            </svg>
            Recalculate
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardContent className="p-6">
              <h4 className="mb-4 text-lg font-medium text-white">
                {isMarket
                  ? "Predicted Market Share"
                  : isTrends
                    ? "Trend Adoption Rate"
                    : "Projected Revenue"}
              </h4>
              <div className="h-64 w-full">
                <div className="relative h-full w-full">
                  {/* Historical data line */}
                  <div className="absolute bottom-0 left-0 h-full w-full">
                    <svg
                      className="h-full w-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d={`M0,${100 - (data.historical[0].value / (isMarket ? 40 : isTrends ? 100 : 5000000)) * 100} ${data.historical
                          .map(
                            (point, i) =>
                              `L${(i / (data.historical.length - 1)) * 50},${100 - (point.value / (isMarket ? 40 : isTrends ? 100 : 5000000)) * 100}`,
                          )
                          .join(" ")}`}
                        stroke="#0ea5e9"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>

                  {/* Forecast data line */}
                  <div className="absolute bottom-0 left-0 h-full w-full">
                    <svg
                      className="h-full w-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d={`M${50},${100 - (data.historical[data.historical.length - 1].value / (isMarket ? 40 : isTrends ? 100 : 5000000)) * 100} ${data.forecast
                          .map(
                            (point, i) =>
                              `L${50 + ((i + 1) / data.forecast.length) * 50},${100 - (point.value / (isMarket ? 40 : isTrends ? 100 : 5000000)) * 100}`,
                          )
                          .join(" ")}`}
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        fill="none"
                      />
                    </svg>
                  </div>

                  {/* Confidence interval area */}
                  <div className="absolute bottom-0 left-0 h-full w-full">
                    <svg
                      className="h-full w-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d={`M${50},${100 - (data.forecast[0].max / (isMarket ? 40 : isTrends ? 100 : 5000000)) * 100} ${data.forecast
                          .map(
                            (point, i) =>
                              `L${50 + ((i + 1) / data.forecast.length) * 50},${100 - (point.max / (isMarket ? 40 : isTrends ? 100 : 5000000)) * 100}`,
                          )
                          .join(
                            " ",
                          )} L${100},${100 - (data.forecast[data.forecast.length - 1].min / (isMarket ? 40 : isTrends ? 100 : 5000000)) * 100} ${data.forecast
                          .slice()
                          .reverse()
                          .map(
                            (point, i) =>
                              `L${100 - ((i + 1) / data.forecast.length) * 50},${100 - (point.min / (isMarket ? 40 : isTrends ? 100 : 5000000)) * 100}`,
                          )
                          .join(" ")} Z`}
                        fill="rgba(16, 185, 129, 0.1)"
                        stroke="none"
                      />
                    </svg>
                  </div>

                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-0 flex w-full justify-between px-2 text-xs text-slate-400">
                    {data.historical.map((point, i) => (
                      <div
                        key={`hist-${i}`}
                        className="text-center"
                        style={{
                          width: `${100 / (data.historical.length + data.forecast.length)}%`,
                        }}
                      >
                        {point.month}
                      </div>
                    ))}
                    {data.forecast.map((point, i) => (
                      <div
                        key={`fore-${i}`}
                        className="text-center"
                        style={{
                          width: `${100 / (data.historical.length + data.forecast.length)}%`,
                        }}
                      >
                        {point.month}
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="absolute right-0 top-0 flex items-center space-x-4 text-xs">
                    <div className="flex items-center">
                      <div className="mr-1 h-1 w-6 bg-blue-500"></div>
                      <span className="text-slate-400">Historical</span>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-1 h-1 w-6 bg-emerald-500"></div>
                      <span className="text-slate-400">Forecast</span>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-1 h-3 w-3 bg-emerald-500/10"></div>
                      <span className="text-slate-400">
                        Confidence Interval
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                  <h5 className="text-sm font-medium text-slate-400">
                    {isMarket
                      ? "Current Share"
                      : isTrends
                        ? "Current Adoption"
                        : "Current Value"}
                  </h5>
                  <p className="mt-1 text-xl font-bold text-white">
                    {formatValue(
                      data.historical[data.historical.length - 1].value,
                    )}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                  <h5 className="text-sm font-medium text-slate-400">
                    {isMarket
                      ? "Projected Share"
                      : isTrends
                        ? "Projected Adoption"
                        : "Projected Value"}
                  </h5>
                  <p className="mt-1 text-xl font-bold text-emerald-500">
                    {formatValue(data.forecast[data.forecast.length - 1].value)}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                  <h5 className="text-sm font-medium text-slate-400">
                    Growth Rate
                  </h5>
                  <p className="mt-1 text-xl font-bold text-emerald-500">
                    {data.growthRate}%
                  </p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                  <h5 className="text-sm font-medium text-slate-400">
                    Confidence Score
                  </h5>
                  <p className="mt-1 text-xl font-bold text-white">
                    {data.confidenceScore}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-slate-800 bg-slate-800/50">
            <CardContent className="p-6">
              <h4 className="mb-4 text-lg font-medium text-white">
                Key Drivers
              </h4>
              <div className="space-y-4">
                {data.keyDrivers.map((driver, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-slate-700 bg-slate-800 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-medium text-slate-300">
                        {driver.name}
                      </h5>
                      <span
                        className={`text-xs font-medium ${getImpactColor(driver.impact)}`}
                      >
                        {driver.impact}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-slate-700">
                      <div
                        className={`h-1.5 rounded-full ${driver.impact.includes("Positive") ? "bg-emerald-500" : "bg-red-500"}`}
                        style={{
                          width: `${driver.impact.includes("High") ? "85%" : driver.impact.includes("Medium") ? "60%" : "30%"}`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="mb-3 text-lg font-medium text-white">
                  AI Insights
                </h4>
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4 text-sm text-slate-300">
                  {isMarket ? (
                    <p>
                      Our AI analysis predicts a steady increase in market share
                      over the next 6 months, driven primarily by customer
                      preference shifts and technology adoption. Competitor
                      activity poses some challenges, but overall trajectory
                      remains positive with 78% confidence.
                    </p>
                  ) : isTrends ? (
                    <p>
                      AI models indicate accelerating adoption of digital
                      transformation initiatives across the industry. The trend
                      is expected to continue with 72% confidence, potentially
                      reaching 92% adoption by year-end. Supply chain
                      disruptions remain a concern but are outweighed by
                      positive drivers.
                    </p>
                  ) : (
                    <p>
                      Revenue forecast shows strong positive momentum with 85%
                      confidence. Product line expansion is the primary growth
                      driver, with seasonal factors also contributing
                      positively. Economic indicators support continued growth,
                      though increased market competition may create some
                      headwinds in Q4.
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  View Full Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-6">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              {isMarket
                ? "Market Analysis Summary"
                : isTrends
                  ? "Trend Analysis Summary"
                  : "Revenue Forecast Summary"}
            </h3>
            <p className="text-slate-300">
              {isMarket ? (
                <>
                  Our AI-powered market analysis predicts a steady increase in
                  market share from the current 30.5% to 33.5% by the end of the
                  year. This represents a 3.2% growth rate with a confidence
                  score of 78%. The primary drivers for this growth are shifting
                  customer preferences and accelerated technology adoption
                  within our sector. Competitor activity poses some challenges,
                  particularly in Q3, but our strategic positioning remains
                  strong. The forecast accounts for seasonal variations and
                  regulatory changes expected in the coming months.
                </>
              ) : isTrends ? (
                <>
                  The AI trend analysis indicates a significant acceleration in
                  adoption rates for key technologies and business practices,
                  with projected growth from 78% to 92% by year-end. This
                  represents a 15.2% growth rate with a confidence score of 72%.
                  Digital transformation initiatives and changing consumer
                  behaviors are the primary drivers, while supply chain
                  disruptions present the main challenge. The model suggests
                  preparing for rapid adoption in Q4, with particular focus on
                  sustainability initiatives which show increasing importance
                  across all market segments.
                </>
              ) : (
                <>
                  Our AI revenue forecasting model projects continued strong
                  growth from the current $3.8M to $4.5M by December,
                  representing a 5.8% growth rate with 85% confidence. The
                  forecast incorporates seasonal patterns, market conditions,
                  and company-specific factors. Product line expansion remains
                  the strongest positive driver, while increased market
                  competition may create some pressure in Q4. The model suggests
                  maintaining current growth strategies with potential for
                  exceeding projections if economic conditions remain favorable
                  through year-end.
                </>
              )}
            </p>

            <div className="mt-6 flex justify-end space-x-4">
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
                Download Forecast
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
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                  <line x1="16" x2="22" y1="5" y2="5" />
                  <line x1="19" x2="19" y1="2" y2="8" />
                </svg>
                Run Advanced Analysis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;
