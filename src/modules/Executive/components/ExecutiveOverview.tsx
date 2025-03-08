import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ExecutiveOverview = () => {
  return (
    <div className="space-y-6">
      {/* KPI Cards - 4 in a row */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-3">
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
          <p className="mt-1 text-xl font-bold text-white">$24.5M</p>
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

        <Card className="border-slate-800 bg-slate-900 p-3">
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
          <p className="mt-1 text-xl font-bold text-white">$4.2M</p>
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

        <Card className="border-slate-800 bg-slate-900 p-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Customer Satisfaction
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
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <p className="mt-1 text-xl font-bold text-white">92%</p>
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
            <span>3% vs last quarter</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Employee Retention
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
          <p className="mt-1 text-xl font-bold text-white">94.5%</p>
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
            <span>2.1% vs industry average</span>
          </div>
        </Card>
      </div>

      {/* Two graphs in one row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue by Department */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-5">
            <h3 className="text-lg font-medium text-white mb-4">
              Revenue by Department
            </h3>
            <div className="space-y-3">
              {[
                {
                  unit: "E-commerce",
                  value: 8.5,
                  percentage: 35,
                  color: "bg-cyan-500",
                },
                {
                  unit: "Retail Stores",
                  value: 6.2,
                  percentage: 25,
                  color: "bg-purple-500",
                },
                {
                  unit: "B2B Sales",
                  value: 4.9,
                  percentage: 20,
                  color: "bg-emerald-500",
                },
                {
                  unit: "Wholesale",
                  value: 2.5,
                  percentage: 10,
                  color: "bg-amber-500",
                },
                {
                  unit: "International",
                  value: 2.5,
                  percentage: 10,
                  color: "bg-blue-500",
                },
              ].map((item) => (
                <div key={item.unit} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">{item.unit}</span>
                    <div className="flex space-x-3">
                      <span className="text-white font-medium">
                        ${item.value}M
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

        {/* Strategic Initiatives Progress */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-5">
            <h3 className="text-lg font-medium text-white mb-4">
              Strategic Initiatives Progress
            </h3>
            <div className="space-y-3">
              {[
                {
                  name: "Digital Transformation",
                  progress: 75,
                  status: "On Track",
                  statusColor: "text-emerald-500",
                },
                {
                  name: "Market Expansion - APAC",
                  progress: 60,
                  status: "On Track",
                  statusColor: "text-emerald-500",
                },
                {
                  name: "Sustainability Program",
                  progress: 40,
                  status: "At Risk",
                  statusColor: "text-amber-500",
                },
                {
                  name: "Supply Chain Optimization",
                  progress: 85,
                  status: "On Track",
                  statusColor: "text-emerald-500",
                },
                {
                  name: "New Product Launch",
                  progress: 30,
                  status: "Delayed",
                  statusColor: "text-red-500",
                },
              ].map((initiative, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white">{initiative.name}</span>
                    <span className={initiative.statusColor}>
                      {initiative.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress
                      value={initiative.progress}
                      className="h-1.5 bg-slate-700 flex-1"
                      indicatorClassName={
                        initiative.status === "On Track"
                          ? "bg-emerald-500"
                          : initiative.status === "At Risk"
                            ? "bg-amber-500"
                            : "bg-red-500"
                      }
                    />
                    <span className="text-xs text-slate-400 w-8 text-right">
                      {initiative.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second row of two graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Financial Performance Trends */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-5">
            <h3 className="text-lg font-medium text-white mb-4">
              Financial Performance Trends
            </h3>
            <div className="relative h-48 mb-6">
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
                  points="0,144 80,136 160,126 240,132 320,120 400,108 480,114 560,102 640,108 720,96 800,90 880,84"
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
                  points="0,168 80,162 160,156 240,162 320,150 400,144 480,150 560,144 640,150 720,138 800,138 880,132"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Data points for Revenue */}
              <div className="absolute inset-0 flex justify-between">
                {[
                  { month: "Jan", value: 144 },
                  { month: "Feb", value: 136 },
                  { month: "Mar", value: 126 },
                  { month: "Apr", value: 132 },
                  { month: "May", value: 120 },
                  { month: "Jun", value: 108 },
                  { month: "Jul", value: 114 },
                  { month: "Aug", value: 102 },
                  { month: "Sep", value: 108 },
                  { month: "Oct", value: 96 },
                  { month: "Nov", value: 90 },
                  { month: "Dec", value: 84 },
                ].map((point, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center"
                    style={{ height: "100%" }}
                  >
                    <div
                      className="absolute w-2 h-2 rounded-full bg-slate-500"
                      style={{ top: `${point.value}px` }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Data points for Profit */}
              <div className="absolute inset-0 flex justify-between">
                {[
                  { month: "Jan", value: 168 },
                  { month: "Feb", value: 162 },
                  { month: "Mar", value: 156 },
                  { month: "Apr", value: 162 },
                  { month: "May", value: 150 },
                  { month: "Jun", value: 144 },
                  { month: "Jul", value: 150 },
                  { month: "Aug", value: 144 },
                  { month: "Sep", value: 150 },
                  { month: "Oct", value: 138 },
                  { month: "Nov", value: 138 },
                  { month: "Dec", value: 132 },
                ].map((point, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center"
                    style={{ height: "100%" }}
                  >
                    <div
                      className="absolute w-2 h-2 rounded-full bg-cyan-500"
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

            <div className="mt-3 flex justify-center space-x-6">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-slate-500 mr-2"></div>
                <span className="text-xs text-slate-300">Revenue</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></div>
                <span className="text-xs text-slate-300">Profit</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Departmental Performance */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-5">
            <h3 className="text-lg font-medium text-white mb-4">
              Departmental Performance
            </h3>
            <div className="space-y-3">
              {[
                {
                  department: "Sales",
                  performance: 95,
                  target: 90,
                  status: "Exceeding",
                },
                {
                  department: "Marketing",
                  performance: 87,
                  target: 85,
                  status: "On Track",
                },
                {
                  department: "Operations",
                  performance: 78,
                  target: 85,
                  status: "At Risk",
                },
                {
                  department: "Finance",
                  performance: 92,
                  target: 90,
                  status: "On Track",
                },
                {
                  department: "HR",
                  performance: 89,
                  target: 85,
                  status: "On Track",
                },
              ].map((dept) => (
                <div key={dept.department} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">{dept.department}</span>
                    <div className="flex space-x-3">
                      <span className="text-slate-400">
                        Target: {dept.target}%
                      </span>
                      <span
                        className={`font-medium ${dept.performance >= dept.target ? "text-emerald-500" : "text-amber-500"}`}
                      >
                        {dept.performance}%
                      </span>
                    </div>
                  </div>
                  <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                    <div
                      className={`absolute h-1.5 rounded-full ${dept.performance >= dept.target ? "bg-emerald-500" : "bg-amber-500"}`}
                      style={{ width: `${dept.performance}%` }}
                    ></div>
                    <div
                      className="absolute h-3 w-0.5 bg-white top-1/2 transform -translate-y-1/2"
                      style={{ left: `${dept.target}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExecutiveOverview;
