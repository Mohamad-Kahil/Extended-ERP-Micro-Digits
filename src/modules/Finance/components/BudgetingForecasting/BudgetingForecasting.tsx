import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface BudgetingForecastingProps {
  currentEntity?: string;
}

const BudgetingForecasting: React.FC<BudgetingForecastingProps> = ({
  currentEntity,
}) => {
  return (
    <div className="space-y-4">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Annual Budget
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
          <p className="mt-1 text-lg font-bold text-white">$8.5M</p>
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
            <span>12% from last year</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">YTD Spending</h3>
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
              <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
              <path d="M17 18h1" />
              <path d="M12 18h1" />
              <path d="M7 18h1" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$5.2M</p>
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
            <span>3.5% under budget</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Budget Variance
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
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
              <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">+$320K</p>
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
            <span>Favorable variance</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Forecast Accuracy
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
              <path d="M12 6V2H8" />
              <path d="m8 2 4 4" />
              <path d="M12 18v4h4" />
              <path d="m16 22-4-4" />
              <path d="M6 12H2v4" />
              <path d="m2 16 4-4" />
              <path d="M18 12h4v-4" />
              <path d="m22 8-4 4" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">92.5%</p>
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
            <span>2.5% from last quarter</span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Budget vs Actual by Department
              {currentEntity && (
                <span className="ml-2 text-sm text-slate-400">
                  ({currentEntity})
                </span>
              )}
            </h3>
            <div className="space-y-2">
              {[
                {
                  department: "Sales & Marketing",
                  budget: 1850000,
                  actual: 1720000,
                  variance: 130000,
                },
                {
                  department: "Research & Development",
                  budget: 2200000,
                  actual: 2350000,
                  variance: -150000,
                },
                {
                  department: "Operations",
                  budget: 1650000,
                  actual: 1580000,
                  variance: 70000,
                },
                {
                  department: "Administration",
                  budget: 950000,
                  actual: 920000,
                  variance: 30000,
                },
                {
                  department: "IT",
                  budget: 1250000,
                  actual: 1180000,
                  variance: 70000,
                },
              ].map((dept) => (
                <div key={dept.department} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white">{dept.department}</span>
                    <div className="flex space-x-3">
                      <span className="text-slate-400">
                        Budget: ${(dept.budget / 1000000).toFixed(2)}M
                      </span>
                      <span
                        className={`font-medium ${dept.variance >= 0 ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {dept.variance >= 0 ? "+" : ""}$
                        {Math.abs(dept.variance / 1000).toFixed(0)}K
                      </span>
                    </div>
                  </div>
                  <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                    <div
                      className="absolute h-1.5 rounded-full bg-slate-500"
                      style={{ width: `${(dept.budget / 2500000) * 100}%` }}
                    ></div>
                    <div
                      className={`absolute h-1.5 rounded-full ${dept.variance >= 0 ? "bg-emerald-500" : "bg-red-500"}`}
                      style={{ width: `${(dept.actual / 2500000) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Budget Utilization by Quarter
            </h3>
            <div className="space-y-2">
              {[
                {
                  quarter: "Q1 2023",
                  budget: 2125000,
                  actual: 2050000,
                  percentage: 96.5,
                },
                {
                  quarter: "Q2 2023",
                  budget: 2125000,
                  actual: 2180000,
                  percentage: 102.6,
                },
                {
                  quarter: "Q3 2023",
                  budget: 2125000,
                  actual: 1980000,
                  percentage: 93.2,
                },
                {
                  quarter: "Q4 2023",
                  budget: 2125000,
                  actual: 0,
                  percentage: 0,
                  forecast: 2050000,
                  forecastPercentage: 96.5,
                },
              ].map((quarter) => (
                <div key={quarter.quarter} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white">{quarter.quarter}</span>
                    <div className="flex space-x-3">
                      <span className="text-slate-400">
                        Budget: ${(quarter.budget / 1000000).toFixed(2)}M
                      </span>
                      {quarter.actual > 0 ? (
                        <span
                          className={`font-medium ${quarter.percentage <= 100 ? "text-emerald-500" : "text-red-500"}`}
                        >
                          {quarter.percentage}%
                        </span>
                      ) : (
                        <span className="font-medium text-blue-500">
                          {quarter.forecastPercentage}% (Forecast)
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                    <div
                      className="absolute h-1.5 rounded-full bg-slate-500"
                      style={{ width: "100%" }}
                    ></div>
                    {quarter.actual > 0 ? (
                      <div
                        className={`absolute h-1.5 rounded-full ${quarter.percentage <= 100 ? "bg-emerald-500" : "bg-red-500"}`}
                        style={{
                          width: `${Math.min(quarter.percentage, 110)}%`,
                        }}
                      ></div>
                    ) : (
                      <div
                        className="absolute h-1.5 rounded-full bg-blue-500 opacity-50"
                        style={{ width: `${quarter.forecastPercentage}%` }}
                      ></div>
                    )}
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
              Revenue Forecast vs Actual
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

              {/* Forecast line */}
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
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Actual line */}
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,80 80,75 160,70 240,78 320,65 400,58 480,62 560,54 640,58"
                  fill="none"
                  stroke="#0ea5e9"
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
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-1"></div>
                <span className="text-xs text-slate-300">Forecast</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-1"></div>
                <span className="text-xs text-slate-300">Actual</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Budget Allocation by Category
            </h3>
            <div className="space-y-2">
              {[
                {
                  category: "Personnel",
                  amount: 3850000,
                  percentage: 45.3,
                  color: "bg-cyan-500",
                },
                {
                  category: "Operations",
                  amount: 1750000,
                  percentage: 20.6,
                  color: "bg-purple-500",
                },
                {
                  category: "Marketing",
                  amount: 1250000,
                  percentage: 14.7,
                  color: "bg-emerald-500",
                },
                {
                  category: "Research & Development",
                  amount: 850000,
                  percentage: 10.0,
                  color: "bg-amber-500",
                },
                {
                  category: "Administrative",
                  amount: 450000,
                  percentage: 5.3,
                  color: "bg-blue-500",
                },
                {
                  category: "Capital Expenditures",
                  amount: 350000,
                  percentage: 4.1,
                  color: "bg-red-500",
                },
              ].map((item) => (
                <div key={item.category} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white">{item.category}</span>
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
      </div>
    </div>
  );
};

export default BudgetingForecasting;
