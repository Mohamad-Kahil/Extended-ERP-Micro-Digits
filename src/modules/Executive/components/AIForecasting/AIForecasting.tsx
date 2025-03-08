import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const AIForecasting = () => {
  const [activeTab, setActiveTab] = useState("revenue");

  return (
    <div className="space-y-3">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Forecasted Revenue
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-500"
            >
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$28.7M</p>
          <div className="flex items-center text-xs text-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
            <span>17.1% vs current year</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Forecast Confidence
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-500"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">87%</p>
          <div className="flex items-center text-xs text-slate-400">
            <span>Based on 24 months of data</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Forecast Variance
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-500"
            >
              <path d="M3 3v18h18" />
              <path d="m3 8 4 4 6-6 8 8" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">±5.2%</p>
          <div className="flex items-center text-xs text-slate-400">
            <span>Range: $27.2M - $30.2M</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              AI Confidence Level
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-500"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">High</p>
          <div className="flex items-center text-xs text-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
            <span>Based on 24 months of data</span>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-3">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 bg-slate-800">
              <TabsTrigger value="revenue">Revenue Forecasting</TabsTrigger>
              <TabsTrigger value="market">Market Trends</TabsTrigger>
              <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
              <TabsTrigger value="predictive">Predictive Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="revenue" className="mt-4 space-y-4">
              <div className="relative h-36 mb-2">
                {/* Chart background grid */}
                <div className="absolute inset-0 grid grid-cols-12 gap-0">
                  {Array(12)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="border-r border-slate-800 h-full"
                      ></div>
                    ))}
                </div>

                {/* Revenue line */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                >
                  <polyline
                    points="0,84 80,78 160,72 240,76 320,68 400,60 480,64 560,56 640,60 720,52 800,48 880,44"
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Forecast line */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                >
                  <polyline
                    points="0,100 80,96 160,92 240,96 320,88 400,84 480,88 560,84 640,88 720,80 800,80 880,76"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Data points */}
                <div className="absolute inset-0 flex justify-between">
                  {[
                    { month: "Jan", value: 84 },
                    { month: "Feb", value: 78 },
                    { month: "Mar", value: 72 },
                    { month: "Apr", value: 76 },
                    { month: "May", value: 68 },
                    { month: "Jun", value: 60 },
                    { month: "Jul", value: 64 },
                    { month: "Aug", value: 56 },
                    { month: "Sep", value: 60 },
                    { month: "Oct", value: 52 },
                    { month: "Nov", value: 48 },
                    { month: "Dec", value: 44 },
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="relative flex flex-col items-center"
                      style={{ height: "100%" }}
                    >
                      <div
                        className="absolute w-1.5 h-1.5 rounded-full bg-cyan-500"
                        style={{ top: `${point.value}px` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* X-axis labels */}
              <div className="grid grid-cols-12 gap-0 text-center">
                {[
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
                ].map((month) => (
                  <div key={month} className="text-xs text-slate-400">
                    {month}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-medium text-white mb-1.5">
                  Revenue Forecast by Business Unit
                </h3>
                {[
                  {
                    unit: "E-commerce",
                    current: 8.5,
                    forecast: 10.2,
                    growth: 20.0,
                  },
                  {
                    unit: "Retail Stores",
                    current: 6.2,
                    forecast: 6.8,
                    growth: 9.7,
                  },
                  {
                    unit: "B2B Sales",
                    current: 4.9,
                    forecast: 5.8,
                    growth: 18.4,
                  },
                  {
                    unit: "Wholesale",
                    current: 2.45,
                    forecast: 2.6,
                    growth: 6.1,
                  },
                  {
                    unit: "International",
                    current: 2.45,
                    forecast: 3.3,
                    growth: 34.7,
                  },
                ].map((unit) => (
                  <div key={unit.unit} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-white">{unit.unit}</span>
                      <div className="flex space-x-3">
                        <span className="text-slate-400">
                          Current: ${unit.current}M
                        </span>
                        <span className="text-emerald-500">
                          ↑ {unit.growth}%
                        </span>
                        <span className="text-white font-medium">
                          ${unit.forecast}M
                        </span>
                      </div>
                    </div>
                    <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                      <div
                        className="absolute h-1.5 rounded-full bg-slate-500"
                        style={{ width: `${(unit.current / 12) * 100}%` }}
                      ></div>
                      <div
                        className="absolute h-1.5 rounded-full bg-cyan-500"
                        style={{ width: `${(unit.forecast / 12) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="market" className="mt-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xs font-medium text-white mb-1.5">
                  Market Growth Predictions
                </h3>
                {[
                  {
                    market: "North America",
                    growth: 5.8,
                    confidence: 92,
                  },
                  {
                    market: "Europe",
                    growth: 4.2,
                    confidence: 88,
                  },
                  {
                    market: "Asia Pacific",
                    growth: 7.5,
                    confidence: 85,
                  },
                  {
                    market: "Latin America",
                    growth: 3.9,
                    confidence: 80,
                  },
                  {
                    market: "Middle East & Africa",
                    growth: 4.7,
                    confidence: 78,
                  },
                ].map((market) => (
                  <div key={market.market} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-white">{market.market}</span>
                      <div className="flex space-x-3">
                        <span className="text-emerald-500">
                          {market.growth > 0 ? "+" : ""}
                          {market.growth}%
                        </span>
                        <span className="text-slate-400">
                          {market.confidence}% confidence
                        </span>
                      </div>
                    </div>
                    <Progress
                      value={market.growth * 10}
                      className="h-1.5 bg-slate-700"
                      indicatorClassName="bg-cyan-500"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="risk" className="mt-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xs font-medium text-white mb-1.5">
                  Risk Assessment
                </h3>
                {[
                  {
                    risk: "Market Volatility",
                    impact: "High",
                    probability: "Medium",
                    score: 65,
                  },
                  {
                    risk: "Competitive Pressure",
                    impact: "Medium",
                    probability: "High",
                    score: 70,
                  },
                  {
                    risk: "Supply Chain Disruption",
                    impact: "High",
                    probability: "Low",
                    score: 55,
                  },
                  {
                    risk: "Regulatory Changes",
                    impact: "Medium",
                    probability: "Medium",
                    score: 60,
                  },
                  {
                    risk: "Technology Disruption",
                    impact: "High",
                    probability: "Medium",
                    score: 75,
                  },
                ].map((risk) => (
                  <div key={risk.risk} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-white">{risk.risk}</span>
                      <div className="flex space-x-3">
                        <span
                          className={
                            risk.impact === "High"
                              ? "text-red-500"
                              : "text-amber-500"
                          }
                        >
                          {risk.impact} Impact
                        </span>
                        <span
                          className={
                            risk.probability === "High"
                              ? "text-red-500"
                              : risk.probability === "Medium"
                                ? "text-amber-500"
                                : "text-emerald-500"
                          }
                        >
                          {risk.probability} Probability
                        </span>
                      </div>
                    </div>
                    <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                      <div
                        className={`absolute h-1.5 rounded-full ${risk.score > 70 ? "bg-red-500" : risk.score > 60 ? "bg-amber-500" : "bg-emerald-500"}`}
                        style={{ width: `${risk.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="predictive" className="mt-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xs font-medium text-white mb-1.5">
                  Predictive Model Performance
                </h3>
                {[
                  {
                    model: "Revenue Forecasting",
                    accuracy: 92.7,
                    improvement: 3.2,
                  },
                  {
                    model: "Customer Behavior",
                    accuracy: 88.5,
                    improvement: 5.1,
                  },
                  {
                    model: "Market Trends",
                    accuracy: 85.3,
                    improvement: 2.8,
                  },
                  {
                    model: "Supply Chain Optimization",
                    accuracy: 90.2,
                    improvement: 4.5,
                  },
                  {
                    model: "Risk Assessment",
                    accuracy: 87.9,
                    improvement: 3.7,
                  },
                ].map((model) => (
                  <div key={model.model} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-white">{model.model}</span>
                      <div className="flex space-x-3">
                        <span className="text-white font-medium">
                          {model.accuracy}%
                        </span>
                        <span className="text-emerald-500">
                          ↑ {model.improvement}%
                        </span>
                      </div>
                    </div>
                    <Progress
                      value={model.accuracy}
                      className="h-1.5 bg-slate-700"
                      indicatorClassName="bg-cyan-500"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIForecasting;
