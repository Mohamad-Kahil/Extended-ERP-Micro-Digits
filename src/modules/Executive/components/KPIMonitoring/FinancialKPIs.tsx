import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const FinancialKPIs = () => {
  return (
    <div className="space-y-3">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Revenue Growth
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
          <p className="mt-1 text-lg font-bold text-white">12.5%</p>
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
            <span>2.5% above target</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Profit Margin
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
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">18.2%</p>
          <div className="flex items-center text-xs text-amber-500">
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
              <path d="m19 12-7 7-7-7" />
              <path d="M12 19V5" />
            </svg>
            <span>1.8% below target</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">EBITDA</h3>
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
          <p className="mt-1 text-lg font-bold text-white">$4.2M</p>
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
            <span>8.3% vs last year</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">Cash Flow</h3>
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
          <p className="mt-1 text-lg font-bold text-white">$3.8M</p>
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
            <span>5.2% above forecast</span>
          </div>
        </Card>
      </div>

      {/* Two graphs in one row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Revenue & Profit Trends */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Revenue & Profit Trends
            </h3>
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

              {/* Profit line */}
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

            <div className="mt-1 flex justify-center space-x-6">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-1"></div>
                <span className="text-xs text-slate-300">Revenue</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-1"></div>
                <span className="text-xs text-slate-300">Profit</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Ratios */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Financial Ratios
            </h3>
            <div className="space-y-2">
              {[
                {
                  name: "Current Ratio",
                  current: 2.1,
                  target: 2.0,
                  status: "On Track",
                },
                {
                  name: "Debt-to-Equity",
                  current: 0.45,
                  target: 0.5,
                  status: "On Track",
                  inverse: true,
                },
                {
                  name: "Return on Assets",
                  current: 12.8,
                  target: 15.0,
                  status: "At Risk",
                },
                {
                  name: "Return on Equity",
                  current: 18.5,
                  target: 20.0,
                  status: "At Risk",
                },
                {
                  name: "Gross Profit Margin",
                  current: 42.3,
                  target: 40.0,
                  status: "On Track",
                },
              ].map((ratio) => (
                <div key={ratio.name} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white">{ratio.name}</span>
                    <div className="flex space-x-3">
                      <span className="text-slate-400">
                        Target: {ratio.target}
                        {ratio.name.includes("Ratio") ||
                        ratio.name.includes("Equity")
                          ? ""
                          : "%"}
                      </span>
                      <span
                        className={`font-medium ${ratio.status === "On Track" ? "text-emerald-500" : "text-amber-500"}`}
                      >
                        {ratio.current}
                        {ratio.name.includes("Ratio") ||
                        ratio.name.includes("Equity")
                          ? ""
                          : "%"}
                      </span>
                    </div>
                  </div>
                  <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                    <div
                      className={`absolute h-1.5 rounded-full ${ratio.status === "On Track" ? "bg-emerald-500" : "bg-amber-500"}`}
                      style={{
                        width: ratio.inverse
                          ? `${(1 - ratio.current / (ratio.target * 1.5)) * 100}%`
                          : `${(ratio.current / (ratio.target * 1.2)) * 100}%`,
                      }}
                    ></div>
                    <div
                      className="absolute h-3 w-0.5 bg-white top-1/2 transform -translate-y-1/2"
                      style={{
                        left: ratio.inverse
                          ? `${(1 - ratio.target / (ratio.target * 1.5)) * 100}%`
                          : `${(ratio.target / (ratio.target * 1.2)) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second row of two graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Budget vs Actual */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Budget vs Actual (YTD)
            </h3>
            <div className="space-y-2">
              {[
                {
                  category: "Revenue",
                  budget: 24000000,
                  actual: 24500000,
                  variance: 2.1,
                  positive: true,
                },
                {
                  category: "Cost of Goods Sold",
                  budget: 14400000,
                  actual: 14150000,
                  variance: 1.7,
                  positive: true,
                  inverse: true,
                },
                {
                  category: "Operating Expenses",
                  budget: 5500000,
                  actual: 5600000,
                  variance: 1.8,
                  positive: false,
                  inverse: true,
                },
                {
                  category: "Marketing",
                  budget: 1200000,
                  actual: 1250000,
                  variance: 4.2,
                  positive: false,
                  inverse: true,
                },
                {
                  category: "Net Profit",
                  budget: 4100000,
                  actual: 4200000,
                  variance: 2.4,
                  positive: true,
                },
              ].map((item) => (
                <div key={item.category} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white">{item.category}</span>
                    <div className="flex space-x-3">
                      <span className="text-slate-400">
                        Budget: ${(item.budget / 1000000).toFixed(1)}M
                      </span>
                      <span
                        className={`font-medium ${item.positive ? "text-emerald-500" : "text-amber-500"}`}
                      >
                        ${(item.actual / 1000000).toFixed(1)}M
                      </span>
                    </div>
                  </div>
                  <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                    <div
                      className="absolute h-1.5 rounded-full bg-slate-500"
                      style={{ width: `${(item.budget / 25000000) * 100}%` }}
                    ></div>
                    <div
                      className={`absolute h-1.5 rounded-full ${item.positive ? "bg-emerald-500" : "bg-amber-500"}`}
                      style={{ width: `${(item.actual / 25000000) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-end text-xs">
                    <span
                      className={
                        item.positive ? "text-emerald-500" : "text-amber-500"
                      }
                    >
                      {item.positive ? "+" : "-"}
                      {item.variance}%{" "}
                      {item.inverse
                        ? "over"
                        : item.positive
                          ? "above"
                          : "below"}{" "}
                      budget
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cash Flow Analysis */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Cash Flow Analysis
            </h3>
            <div className="space-y-2">
              {[
                {
                  type: "Operating Cash Flow",
                  amount: 5200000,
                  change: 8.3,
                  positive: true,
                },
                {
                  type: "Investing Cash Flow",
                  amount: -2100000,
                  change: 12.5,
                  positive: false,
                },
                {
                  type: "Financing Cash Flow",
                  amount: -1300000,
                  change: 5.2,
                  positive: true,
                },
                {
                  type: "Free Cash Flow",
                  amount: 3800000,
                  change: 10.4,
                  positive: true,
                },
                {
                  type: "Cash Conversion Cycle",
                  amount: 42,
                  change: 3.5,
                  positive: true,
                  unit: " days",
                  inverse: true,
                },
              ].map((flow) => (
                <div key={flow.type} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white">{flow.type}</span>
                    <div className="flex space-x-3">
                      <span
                        className={`font-medium ${flow.type === "Cash Conversion Cycle" ? (flow.positive ? "text-emerald-500" : "text-amber-500") : "text-white"}`}
                      >
                        {flow.type === "Cash Conversion Cycle"
                          ? flow.amount
                          : `$${(Math.abs(flow.amount) / 1000000).toFixed(1)}M`}
                        {flow.unit || ""}
                      </span>
                      <span
                        className={`${flow.positive ? "text-emerald-500" : "text-amber-500"}`}
                      >
                        {flow.positive ? "↑" : "↓"} {flow.change}%
                      </span>
                    </div>
                  </div>
                  <Progress
                    value={
                      flow.type === "Cash Conversion Cycle"
                        ? 60 - flow.amount
                        : (Math.abs(flow.amount) / 6000000) * 100
                    }
                    className="h-1.5 bg-slate-700"
                    indicatorClassName={
                      flow.amount > 0 ? "bg-emerald-500" : "bg-amber-500"
                    }
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinancialKPIs;
