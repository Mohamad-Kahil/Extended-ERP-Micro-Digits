import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const FinancialOverview = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">Revenue YTD</h3>
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
          <p className="mt-1 text-lg font-bold text-white">$24.5M</p>
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
            <span>12.5% vs last year</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">Net Profit</h3>
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
            <h3 className="text-xs font-medium text-slate-400">
              Cash Position
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
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$8.7M</p>
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
            <span>15.2% vs last quarter</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Debt-to-Equity
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
              <path d="M12 22V8" />
              <path d="m5 12-2-2 2-2" />
              <path d="m19 12 2-2-2-2" />
              <path d="M5 10h14" />
              <path d="m15 5-3-3-3 3" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">0.42</p>
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
              <path d="m19 12-7 7-7-7" />
              <path d="M12 19V5" />
            </svg>
            <span>Decreased by 0.08</span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Revenue vs Expenses (YTD)
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
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Expenses line */}
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,100 80,96 160,92 240,96 320,88 400,84 480,88 560,84 640,88 720,80 800,80 880,76"
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1"></div>
                <span className="text-xs text-slate-300">Revenue</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-1"></div>
                <span className="text-xs text-slate-300">Expenses</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Financial Ratios
            </h3>
            <div className="space-y-2">
              {[
                {
                  ratio: "Current Ratio",
                  value: 2.4,
                  target: 2.0,
                  status: "Healthy",
                },
                {
                  ratio: "Quick Ratio",
                  value: 1.8,
                  target: 1.5,
                  status: "Healthy",
                },
                {
                  ratio: "Return on Assets",
                  value: 12.5,
                  target: 10.0,
                  status: "Healthy",
                },
                {
                  ratio: "Return on Equity",
                  value: 18.7,
                  target: 15.0,
                  status: "Healthy",
                },
                {
                  ratio: "Gross Margin",
                  value: 42.5,
                  target: 40.0,
                  status: "Healthy",
                },
              ].map((ratio) => (
                <div key={ratio.ratio} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white">{ratio.ratio}</span>
                    <div className="flex space-x-3">
                      <span className="text-slate-400">
                        Target: {ratio.target}%
                      </span>
                      <span
                        className={`font-medium ${ratio.value >= ratio.target ? "text-emerald-500" : "text-amber-500"}`}
                      >
                        {ratio.value}%
                      </span>
                    </div>
                  </div>
                  <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                    <div
                      className={`absolute h-1.5 rounded-full ${ratio.value >= ratio.target ? "bg-emerald-500" : "bg-amber-500"}`}
                      style={{ width: `${(ratio.value / 25) * 100}%` }}
                    ></div>
                    <div
                      className="absolute h-3 w-0.5 bg-white top-1/2 transform -translate-y-1/2"
                      style={{ left: `${(ratio.target / 25) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Accounts Receivable Aging
            </h3>
            <div className="space-y-2">
              {[
                {
                  period: "Current",
                  amount: 1250000,
                  percentage: 62.5,
                  color: "bg-emerald-500",
                },
                {
                  period: "1-30 Days",
                  amount: 450000,
                  percentage: 22.5,
                  color: "bg-blue-500",
                },
                {
                  period: "31-60 Days",
                  amount: 180000,
                  percentage: 9.0,
                  color: "bg-amber-500",
                },
                {
                  period: "61-90 Days",
                  amount: 80000,
                  percentage: 4.0,
                  color: "bg-orange-500",
                },
                {
                  period: ">90 Days",
                  amount: 40000,
                  percentage: 2.0,
                  color: "bg-red-500",
                },
              ].map((item) => (
                <div key={item.period} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white">{item.period}</span>
                    <div className="flex space-x-3">
                      <span className="text-white font-medium">
                        ${(item.amount / 1000000).toFixed(2)}M
                      </span>
                      <span className="text-slate-400 w-8 text-right">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                  <Progress
                    value={item.percentage}
                    className="h-1.5 bg-slate-700"
                    indicatorClassName={item.color}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Cash Flow Summary
            </h3>
            <div className="space-y-2">
              {[
                {
                  category: "Operating Activities",
                  value: 3200000,
                  isPositive: true,
                },
                {
                  category: "Investing Activities",
                  value: -1800000,
                  isPositive: false,
                },
                {
                  category: "Financing Activities",
                  value: -800000,
                  isPositive: false,
                },
                {
                  category: "Net Change in Cash",
                  value: 600000,
                  isPositive: true,
                  isBold: true,
                },
                {
                  category: "Beginning Cash Balance",
                  value: 8100000,
                  isPositive: true,
                },
                {
                  category: "Ending Cash Balance",
                  value: 8700000,
                  isPositive: true,
                  isBold: true,
                },
              ].map((item, index) => (
                <div key={index} className="flex justify-between text-xs">
                  <span
                    className={
                      item.isBold ? "text-white font-medium" : "text-slate-300"
                    }
                  >
                    {item.category}
                  </span>
                  <span
                    className={`${item.isBold ? "font-medium" : ""} ${item.isPositive ? "text-emerald-500" : "text-rose-500"}`}
                  >
                    {item.isPositive ? "" : "-"}$
                    {Math.abs(item.value / 1000000).toFixed(2)}M
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinancialOverview;
