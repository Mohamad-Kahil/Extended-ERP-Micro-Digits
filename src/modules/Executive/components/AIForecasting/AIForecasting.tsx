import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const AIForecasting = () => {
  const [activeTab, setActiveTab] = useState("revenue");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            AI-Powered Forecasting & Predictive Analytics
          </CardTitle>
          <div className="flex space-x-2">
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
              Export Report
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
                <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
              Run New Forecast
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800">
            <TabsTrigger value="revenue">Revenue Forecasting</TabsTrigger>
            <TabsTrigger value="market">Market Trends</TabsTrigger>
            <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
            <TabsTrigger value="predictive">Predictive Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Forecasted Annual Revenue
                    </h3>
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
                      className="text-cyan-500"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">$28.7M</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 17.1% vs current year
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Forecast Confidence
                    </h3>
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
                      className="text-cyan-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">87%</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Based on 24 months of historical data
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Forecast Variance
                    </h3>
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
                      className="text-cyan-500"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m3 8 4 4 6-6 8 8" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">±5.2%</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Range: $27.2M - $30.2M
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Revenue Forecast - Next 12 Months
                </h3>
                <div className="h-64 flex items-end space-x-2">
                  {[
                    {
                      month: "Jan",
                      forecast: 2.4,
                      actual: 2.4,
                      range: [2.2, 2.6],
                    },
                    {
                      month: "Feb",
                      forecast: 2.5,
                      actual: 2.6,
                      range: [2.3, 2.7],
                    },
                    {
                      month: "Mar",
                      forecast: 2.7,
                      actual: 2.8,
                      range: [2.5, 2.9],
                    },
                    {
                      month: "Apr",
                      forecast: 2.6,
                      actual: 2.5,
                      range: [2.4, 2.8],
                    },
                    {
                      month: "May",
                      forecast: 2.8,
                      actual: null,
                      range: [2.6, 3.0],
                    },
                    {
                      month: "Jun",
                      forecast: 2.9,
                      actual: null,
                      range: [2.7, 3.1],
                    },
                    {
                      month: "Jul",
                      forecast: 3.0,
                      actual: null,
                      range: [2.8, 3.2],
                    },
                    {
                      month: "Aug",
                      forecast: 3.1,
                      actual: null,
                      range: [2.9, 3.3],
                    },
                    {
                      month: "Sep",
                      forecast: 3.2,
                      actual: null,
                      range: [3.0, 3.4],
                    },
                    {
                      month: "Oct",
                      forecast: 3.3,
                      actual: null,
                      range: [3.1, 3.5],
                    },
                    {
                      month: "Nov",
                      forecast: 3.4,
                      actual: null,
                      range: [3.2, 3.6],
                    },
                    {
                      month: "Dec",
                      forecast: 3.5,
                      actual: null,
                      range: [3.3, 3.7],
                    },
                  ].map((data, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center relative"
                    >
                      {/* Range indicator */}
                      <div
                        className="absolute w-4 bg-slate-700/50 rounded-t"
                        style={{
                          height: `${(data.range[1] / 3.7) * 100}%`,
                          bottom: 0,
                          left: "calc(50% - 0.5rem)",
                        }}
                      ></div>

                      {/* Forecast bar */}
                      <div
                        className="w-8 bg-cyan-500 rounded-t z-10"
                        style={{ height: `${(data.forecast / 3.7) * 100}%` }}
                      ></div>

                      {/* Actual bar if exists */}
                      {data.actual && (
                        <div
                          className="absolute w-8 bg-emerald-500 border-2 border-white rounded-t z-20"
                          style={{
                            height: `${(data.actual / 3.7) * 100}%`,
                            bottom: 0,
                            left: "calc(50% - 1rem)",
                          }}
                        ></div>
                      )}

                      <span className="text-xs text-slate-400 mt-2">
                        {data.month}
                      </span>
                      <span className="text-xs font-medium text-white">
                        ${data.forecast}M
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 mr-2"></div>
                    <span className="text-xs text-slate-300">Forecast</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                    <span className="text-xs text-slate-300">Actual</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-slate-700/50 mr-2"></div>
                    <span className="text-xs text-slate-300">
                      Confidence Range
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Revenue Forecast by Business Unit
                </h3>
                <div className="space-y-4">
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
                    <div key={unit.unit} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">{unit.unit}</span>
                        <div className="flex space-x-4">
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
                      <div className="relative h-2 w-full bg-slate-700 rounded-full">
                        <div
                          className="absolute h-2 rounded-full bg-slate-500"
                          style={{ width: `${(unit.current / 12) * 100}%` }}
                        ></div>
                        <div
                          className="absolute h-2 rounded-full bg-cyan-500"
                          style={{ width: `${(unit.forecast / 12) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Key Forecast Drivers & Assumptions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      factor: "Market Growth Rate",
                      impact: "High",
                      assumption: "5.8% industry growth",
                      sensitivity: "±1% change results in ±$0.8M revenue",
                    },
                    {
                      factor: "New Product Launches",
                      impact: "Medium",
                      assumption: "3 major launches in Q2-Q3",
                      sensitivity:
                        "Delay of 1 quarter results in -$1.2M revenue",
                    },
                    {
                      factor: "Customer Acquisition Cost",
                      impact: "Medium",
                      assumption: "$42 per customer",
                      sensitivity: "±$5 change results in ±$0.6M revenue",
                    },
                    {
                      factor: "Competitive Pressure",
                      impact: "Medium",
                      assumption: "Stable competitive landscape",
                      sensitivity: "New competitor entry: -$1.5M revenue",
                    },
                  ].map((factor, index) => (
                    <div
                      key={index}
                      className="border border-slate-800 rounded-md p-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-white">
                          {factor.factor}
                        </h4>
                        <div
                          className={`px-2 py-1 rounded-full text-xs ${
                            factor.impact === "High"
                              ? "bg-red-500/20 text-red-500"
                              : factor.impact === "Medium"
                                ? "bg-amber-500/20 text-amber-500"
                                : "bg-blue-500/20 text-blue-500"
                          }`}
                        >
                          {factor.impact} Impact
                        </div>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Assumption:</span>
                          <span className="text-slate-300">
                            {factor.assumption}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Sensitivity:</span>
                          <span className="text-slate-300">
                            {factor.sensitivity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="market" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Market Growth Prediction
                    </h3>
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
                      className="text-cyan-500"
                    >
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">5.8%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 1.2% vs previous forecast
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Competitive Position
                    </h3>
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
                      className="text-cyan-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">Strong</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Top 3 in 4/5 key markets
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Market Share Trend
                    </h3>
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
                      className="text-cyan-500"
                    >
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">+2.4%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    Year-over-year growth
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="risk" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Overall Risk Score
                    </h3>
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
                      className="text-amber-500"
                    >
                      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">Medium</p>
                  <p className="text-xs text-amber-500 mt-1">Score: 65/100</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="predictive" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      AI Confidence Level
                    </h3>
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
                      className="text-cyan-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">High</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    Based on 24 months of data
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AIForecasting;
