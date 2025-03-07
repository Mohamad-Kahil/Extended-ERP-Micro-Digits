import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const FinancialKPIs = () => {
  const [timeRange, setTimeRange] = React.useState("quarterly");

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <h3 className="text-lg font-semibold text-white">
          Financial Performance Metrics
        </h3>
        <div className="flex space-x-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
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
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
            View Details
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">
                Revenue YTD
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
            <p className="text-3xl font-bold text-white">$24.5M</p>
            <p className="text-xs text-emerald-500 mt-1">
              ↑ 12.5% vs last year
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">
                EBITDA Margin
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
            <p className="text-3xl font-bold text-white">24.8%</p>
            <p className="text-xs text-emerald-500 mt-1">↑ 2.3% vs last year</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">
                Operating Cash Flow
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
                <path d="M2 16V8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6z" />
                <circle cx="12" cy="12" r="2" />
                <path d="M12 8v2" />
                <path d="M12 14v2" />
                <path d="M16 12h-2" />
                <path d="M10 12H8" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-white">$5.2M</p>
            <p className="text-xs text-emerald-500 mt-1">
              ↑ 15.6% vs last year
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Quarterly Financial Performance
          </h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-sm font-medium text-slate-400">
                  Revenue
                </div>
                <div className="h-40 flex items-end space-x-2">
                  {[
                    { quarter: "Q1", value: 5.8 },
                    { quarter: "Q2", value: 6.2 },
                    { quarter: "Q3", value: 6.5 },
                    { quarter: "Q4", value: 6.0 },
                  ].map((data, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className="w-full bg-cyan-500 rounded-t"
                        style={{ height: `${(data.value / 6.5) * 100}%` }}
                      ></div>
                      <span className="text-xs text-slate-400 mt-2">
                        {data.quarter}
                      </span>
                      <span className="text-xs font-medium text-white">
                        ${data.value}M
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-slate-400">EBITDA</div>
                <div className="h-40 flex items-end space-x-2">
                  {[
                    { quarter: "Q1", value: 1.3 },
                    { quarter: "Q2", value: 1.5 },
                    { quarter: "Q3", value: 1.6 },
                    { quarter: "Q4", value: 1.4 },
                  ].map((data, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className="w-full bg-emerald-500 rounded-t"
                        style={{ height: `${(data.value / 1.6) * 100}%` }}
                      ></div>
                      <span className="text-xs text-slate-400 mt-2">
                        {data.quarter}
                      </span>
                      <span className="text-xs font-medium text-white">
                        ${data.value}M
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-slate-400">
                  Cash Flow
                </div>
                <div className="h-40 flex items-end space-x-2">
                  {[
                    { quarter: "Q1", value: 1.1 },
                    { quarter: "Q2", value: 1.3 },
                    { quarter: "Q3", value: 1.4 },
                    { quarter: "Q4", value: 1.2 },
                  ].map((data, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className="w-full bg-purple-500 rounded-t"
                        style={{ height: `${(data.value / 1.4) * 100}%` }}
                      ></div>
                      <span className="text-xs text-slate-400 mt-2">
                        {data.quarter}
                      </span>
                      <span className="text-xs font-medium text-white">
                        ${data.value}M
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-sm font-medium text-white mb-3">
                Financial Ratios
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    {
                      name: "Gross Profit Margin",
                      value: 42,
                      target: 40,
                      unit: "%",
                    },
                    {
                      name: "Net Profit Margin",
                      value: 18,
                      target: 15,
                      unit: "%",
                    },
                    {
                      name: "Return on Assets (ROA)",
                      value: 12,
                      target: 10,
                      unit: "%",
                    },
                  ].map((ratio, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">{ratio.name}</span>
                        <div className="flex space-x-4">
                          <span className="text-slate-400">
                            Target: {ratio.target}
                            {ratio.unit}
                          </span>
                          <span className="text-white font-medium">
                            {ratio.value}
                            {ratio.unit}
                          </span>
                        </div>
                      </div>
                      <div className="relative h-2 w-full bg-slate-700 rounded-full">
                        <div
                          className="absolute h-2 rounded-full bg-emerald-500"
                          style={{
                            width: `${(ratio.value / (ratio.target * 1.5)) * 100}%`,
                          }}
                        ></div>
                        <div
                          className="absolute h-4 w-0.5 bg-white top-1/2 transform -translate-y-1/2"
                          style={{
                            left: `${(ratio.target / (ratio.target * 1.5)) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "Return on Equity (ROE)",
                      value: 22,
                      target: 20,
                      unit: "%",
                    },
                    {
                      name: "Current Ratio",
                      value: 2.4,
                      target: 2.0,
                      unit: "x",
                    },
                    {
                      name: "Debt to Equity",
                      value: 0.8,
                      target: 1.0,
                      unit: "x",
                    },
                  ].map((ratio, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">{ratio.name}</span>
                        <div className="flex space-x-4">
                          <span className="text-slate-400">
                            Target: {ratio.target}
                            {ratio.unit}
                          </span>
                          <span className="text-white font-medium">
                            {ratio.value}
                            {ratio.unit}
                          </span>
                        </div>
                      </div>
                      <div className="relative h-2 w-full bg-slate-700 rounded-full">
                        <div
                          className="absolute h-2 rounded-full bg-cyan-500"
                          style={{
                            width:
                              ratio.name === "Debt to Equity"
                                ? `${(1 - ratio.value / (ratio.target * 1.5)) * 100}%`
                                : `${(ratio.value / (ratio.target * 1.5)) * 100}%`,
                          }}
                        ></div>
                        <div
                          className="absolute h-4 w-0.5 bg-white top-1/2 transform -translate-y-1/2"
                          style={{
                            left: `${(ratio.target / (ratio.target * 1.5)) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Revenue by Business Unit
          </h3>
          <div className="space-y-4">
            {[
              {
                unit: "E-commerce",
                revenue: 8500000,
                growth: 18.5,
                target: 8000000,
              },
              {
                unit: "Retail Stores",
                revenue: 6200000,
                growth: 5.2,
                target: 6500000,
              },
              {
                unit: "B2B Sales",
                revenue: 4900000,
                growth: 12.8,
                target: 4500000,
              },
              {
                unit: "Wholesale",
                revenue: 2450000,
                growth: -2.3,
                target: 2800000,
              },
              {
                unit: "International",
                revenue: 2450000,
                growth: 24.5,
                target: 2000000,
              },
            ].map((unit) => (
              <div key={unit.unit} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">{unit.unit}</span>
                  <div className="flex space-x-4">
                    <span
                      className={`${unit.growth >= 0 ? "text-emerald-500" : "text-red-500"}`}
                    >
                      {unit.growth >= 0 ? "↑" : "↓"} {Math.abs(unit.growth)}%
                    </span>
                    <span className="text-slate-400">
                      Target: ${(unit.target / 1000000).toFixed(1)}M
                    </span>
                    <span className="text-white font-medium">
                      ${(unit.revenue / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>
                <div className="relative h-2 w-full bg-slate-700 rounded-full">
                  <div
                    className={`absolute h-2 rounded-full ${unit.revenue >= unit.target ? "bg-emerald-500" : "bg-amber-500"}`}
                    style={{ width: `${(unit.revenue / 10000000) * 100}%` }}
                  ></div>
                  <div
                    className="absolute h-4 w-0.5 bg-white top-1/2 transform -translate-y-1/2"
                    style={{ left: `${(unit.target / 10000000) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialKPIs;
