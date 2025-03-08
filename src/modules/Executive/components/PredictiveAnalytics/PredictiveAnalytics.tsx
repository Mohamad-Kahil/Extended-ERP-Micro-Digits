import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PredictiveAnalytics = () => {
  return (
    <div className="space-y-3">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Prediction Accuracy
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
          <p className="mt-1 text-lg font-bold text-white">94.2%</p>
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
            <span>2.1% vs last quarter</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">Data Points</h3>
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
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">1.2M</p>
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
            <span>+250K this month</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Processing Time
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
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">0.8s</p>
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
            <span>-0.3s from last version</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Active Models
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
              <path d="m2 12 5-3 2 6 5-5 2 4 6-4" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">8</p>
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
            <span>+2 new models</span>
          </div>
        </Card>
      </div>

      {/* Two graphs in one row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Model Performance */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Model Performance by Department
            </h3>
            <div className="space-y-2">
              {[
                {
                  department: "Sales",
                  accuracy: 96.2,
                  dataPoints: 450000,
                  color: "bg-cyan-500",
                },
                {
                  department: "Marketing",
                  accuracy: 94.5,
                  dataPoints: 320000,
                  color: "bg-purple-500",
                },
                {
                  department: "Finance",
                  accuracy: 97.8,
                  dataPoints: 180000,
                  color: "bg-emerald-500",
                },
                {
                  department: "Operations",
                  accuracy: 92.3,
                  dataPoints: 210000,
                  color: "bg-amber-500",
                },
                {
                  department: "Supply Chain",
                  accuracy: 91.7,
                  dataPoints: 150000,
                  color: "bg-blue-500",
                },
              ].map((item) => (
                <div key={item.department} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white">{item.department}</span>
                    <div className="flex space-x-3">
                      <span className="text-slate-400">
                        {(item.dataPoints / 1000).toFixed(0)}K data points
                      </span>
                      <span className="text-white font-medium">
                        {item.accuracy}%
                      </span>
                    </div>
                  </div>
                  <Progress
                    value={item.accuracy}
                    className="h-1.5 bg-slate-700"
                    indicatorClassName={item.color}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Prediction Accuracy Trend */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Prediction Accuracy Trend
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

              {/* Accuracy line */}
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,60 80,58 160,55 240,50 320,45 400,42 480,38 560,35 640,30 720,28 800,25 880,20"
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
                  { month: "Jan", value: 60 },
                  { month: "Feb", value: 58 },
                  { month: "Mar", value: 55 },
                  { month: "Apr", value: 50 },
                  { month: "May", value: 45 },
                  { month: "Jun", value: 42 },
                  { month: "Jul", value: 38 },
                  { month: "Aug", value: 35 },
                  { month: "Sep", value: 30 },
                  { month: "Oct", value: 28 },
                  { month: "Nov", value: 25 },
                  { month: "Dec", value: 20 },
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

            <div className="mt-1 flex justify-between text-xs">
              <span className="text-slate-400">Starting: 88.5%</span>
              <span className="text-emerald-500 font-medium">
                Current: 94.2%
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second row of two graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Prediction Categories */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Prediction Categories
            </h3>
            <div className="space-y-2">
              {[
                {
                  category: "Revenue Forecasting",
                  accuracy: 95.3,
                  confidence: 92,
                  status: "High",
                },
                {
                  category: "Customer Behavior",
                  accuracy: 91.7,
                  confidence: 88,
                  status: "Medium",
                },
                {
                  category: "Market Trends",
                  accuracy: 89.5,
                  confidence: 85,
                  status: "Medium",
                },
                {
                  category: "Inventory Optimization",
                  accuracy: 96.8,
                  confidence: 94,
                  status: "High",
                },
                {
                  category: "Risk Assessment",
                  accuracy: 93.2,
                  confidence: 90,
                  status: "High",
                },
              ].map((category) => (
                <div key={category.category} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white">{category.category}</span>
                    <div className="flex space-x-3">
                      <span className="text-slate-400">
                        Accuracy: {category.accuracy}%
                      </span>
                      <span
                        className={`font-medium ${category.status === "High" ? "text-emerald-500" : category.status === "Medium" ? "text-amber-500" : "text-red-500"}`}
                      >
                        {category.status} Confidence
                      </span>
                    </div>
                  </div>
                  <div className="relative h-1.5 w-full bg-slate-700 rounded-full">
                    <div
                      className={`absolute h-1.5 rounded-full ${category.status === "High" ? "bg-emerald-500" : category.status === "Medium" ? "bg-amber-500" : "bg-red-500"}`}
                      style={{ width: `${category.confidence}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Sources */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Data Sources & Quality
            </h3>
            <div className="space-y-2">
              {[
                {
                  source: "Internal ERP",
                  dataPoints: 520000,
                  quality: 98.5,
                  status: "Excellent",
                },
                {
                  source: "CRM System",
                  dataPoints: 350000,
                  quality: 97.2,
                  status: "Excellent",
                },
                {
                  source: "Market Research",
                  dataPoints: 120000,
                  quality: 92.8,
                  status: "Good",
                },
                {
                  source: "Social Media",
                  dataPoints: 180000,
                  quality: 85.4,
                  status: "Fair",
                },
                {
                  source: "IoT Sensors",
                  dataPoints: 95000,
                  quality: 99.1,
                  status: "Excellent",
                },
              ].map((source) => (
                <div key={source.source} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white">{source.source}</span>
                    <div className="flex space-x-3">
                      <span className="text-slate-400">
                        {(source.dataPoints / 1000).toFixed(0)}K records
                      </span>
                      <span
                        className={`font-medium ${source.quality > 95 ? "text-emerald-500" : source.quality > 90 ? "text-cyan-500" : "text-amber-500"}`}
                      >
                        {source.quality}% quality
                      </span>
                    </div>
                  </div>
                  <Progress
                    value={source.quality}
                    className="h-1.5 bg-slate-700"
                    indicatorClassName={
                      source.quality > 95
                        ? "bg-emerald-500"
                        : source.quality > 90
                          ? "bg-cyan-500"
                          : "bg-amber-500"
                    }
                  />
                </div>
              ))}

              <div className="mt-4 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-medium text-white mb-1.5">
                  Data Refresh Status
                </h4>
                <div className="space-y-2">
                  {[
                    {
                      source: "Internal ERP",
                      lastUpdate: "10 minutes ago",
                      status: "Real-time",
                      color: "text-emerald-500",
                    },
                    {
                      source: "CRM System",
                      lastUpdate: "25 minutes ago",
                      status: "Real-time",
                      color: "text-emerald-500",
                    },
                    {
                      source: "Market Research",
                      lastUpdate: "2 days ago",
                      status: "Scheduled",
                      color: "text-amber-500",
                    },
                    {
                      source: "Social Media",
                      lastUpdate: "4 hours ago",
                      status: "Periodic",
                      color: "text-cyan-500",
                    },
                    {
                      source: "IoT Sensors",
                      lastUpdate: "5 minutes ago",
                      status: "Real-time",
                      color: "text-emerald-500",
                    },
                  ].map((item) => (
                    <div
                      key={item.source}
                      className="flex justify-between text-xs"
                    >
                      <span className="text-slate-300">{item.source}</span>
                      <div className="flex space-x-3">
                        <span className="text-slate-400">
                          {item.lastUpdate}
                        </span>
                        <span className={item.color}>{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;
