import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const AccountingOverview = () => {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Total Revenue
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
              Accounts Receivable
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$1.8M</p>
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
            <span>5.2% increase</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Accounts Payable
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
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c.88 0 1.73-.09 2.5-.26.3-.06.6-.15.88-.27.35-.14.65-.3.89-.49a6 6 0 0 0 .64-.64c.15-.18.27-.37.36-.56.13-.25.22-.5.29-.76.09-.33.13-.67.13-1.02v0c0-.83-.34-1.6-.91-2.16A3.1 3.1 0 0 0 16.66 7H16a6 6 0 0 0-6 6v4" />
              <path d="M20 8v6a2 2 0 0 1-2 2h-2" />
              <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v4" />
              <path d="M18 22H4" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$1.2M</p>
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
            <span>3.1% decrease</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">Fixed Assets</h3>
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
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
              <path d="M12 3v6" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$5.6M</p>
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
            <span>2.8% vs last quarter</span>
          </div>
        </Card>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Revenue vs Expenses
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

              {/* Expenses line */}
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
                      className="absolute w-1.5 h-1.5 rounded-full bg-slate-500"
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

      {/* Accounting Modules */}
      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-3">
          <h3 className="text-xs font-medium text-white mb-1.5">
            Accounting Module Status
          </h3>
          <div className="space-y-2">
            {[
              {
                module: "Chart of Accounts",
                status: "Active",
                lastUpdated: "Today",
                entities: 3,
                health: 98,
              },
              {
                module: "General Ledger",
                status: "Active",
                lastUpdated: "Today",
                entities: 3,
                health: 100,
              },
              {
                module: "Accounts Payable",
                status: "Active",
                lastUpdated: "Yesterday",
                entities: 3,
                health: 95,
              },
              {
                module: "Accounts Receivable",
                status: "Active",
                lastUpdated: "Today",
                entities: 3,
                health: 92,
              },
              {
                module: "Fixed Assets",
                status: "Active",
                lastUpdated: "3 days ago",
                entities: 3,
                health: 97,
              },
              {
                module: "Procurement",
                status: "Active",
                lastUpdated: "Yesterday",
                entities: 3,
                health: 94,
              },
              {
                module: "Taxation & Compliance",
                status: "Active",
                lastUpdated: "1 week ago",
                entities: 3,
                health: 90,
              },
              {
                module: "Intercompany Accounting",
                status: "Active",
                lastUpdated: "2 days ago",
                entities: 3,
                health: 96,
              },
            ].map((module) => (
              <div key={module.module} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-white">{module.module}</span>
                  <div className="flex space-x-3">
                    <span className="text-slate-400">
                      Last updated: {module.lastUpdated}
                    </span>
                    <span
                      className={`font-medium ${module.health > 95 ? "text-emerald-500" : module.health > 90 ? "text-amber-500" : "text-red-500"}`}
                    >
                      {module.health}% health
                    </span>
                  </div>
                </div>
                <Progress
                  value={module.health}
                  className="h-1.5 bg-slate-700"
                  indicatorClassName={
                    module.health > 95
                      ? "bg-emerald-500"
                      : module.health > 90
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountingOverview;
