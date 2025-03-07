import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ExecutiveOverview = () => {
  return (
    <div className="space-y-6">
      {/* Executive KPI Summary */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-400">Revenue YTD</h3>
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
          <p className="mt-2 text-3xl font-bold text-white">$24.5M</p>
          <div className="mt-2 flex items-center text-xs text-emerald-500">
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
              className="mr-1"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
            <span>12.5% vs last year</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-400">Net Profit</h3>
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
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">$4.2M</p>
          <div className="mt-2 flex items-center text-xs text-emerald-500">
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
              className="mr-1"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
            <span>8.3% vs last year</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-400">
              Customer Satisfaction
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
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">92%</p>
          <div className="mt-2 flex items-center text-xs text-emerald-500">
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
              className="mr-1"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
            <span>3% vs last quarter</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-400">
              Employee Retention
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">94.5%</p>
          <div className="mt-2 flex items-center text-xs text-emerald-500">
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
              className="mr-1"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
            <span>2.1% vs industry average</span>
          </div>
        </Card>
      </div>

      {/* Revenue by Department */}
      <Card className="border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-medium text-white mb-4">
          Revenue by Department
        </h3>
        <div className="space-y-4">
          {[
            {
              department: "E-commerce",
              revenue: 8500000,
              percentage: 35,
              color: "bg-cyan-500",
            },
            {
              department: "Retail Stores",
              revenue: 6200000,
              percentage: 25,
              color: "bg-purple-500",
            },
            {
              department: "B2B Sales",
              revenue: 4900000,
              percentage: 20,
              color: "bg-emerald-500",
            },
            {
              department: "Wholesale",
              revenue: 2450000,
              percentage: 10,
              color: "bg-amber-500",
            },
            {
              department: "International",
              revenue: 2450000,
              percentage: 10,
              color: "bg-blue-500",
            },
          ].map((item) => (
            <div key={item.department} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">{item.department}</span>
                <div className="flex space-x-4">
                  <span className="text-slate-400">
                    ${(item.revenue / 1000000).toFixed(1)}M
                  </span>
                  <span className="text-white font-medium">
                    {item.percentage}%
                  </span>
                </div>
              </div>
              <Progress
                value={item.percentage}
                className="h-2 bg-slate-700"
                indicatorClassName={item.color}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Strategic Initiatives */}
      <Card className="border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-medium text-white mb-4">
          Strategic Initiatives Progress
        </h3>
        <div className="space-y-4">
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
              name: "New Product Line Launch",
              progress: 30,
              status: "Delayed",
              statusColor: "text-red-500",
            },
          ].map((initiative, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">{initiative.name}</span>
                <span className={initiative.statusColor}>
                  {initiative.status}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Progress
                  value={initiative.progress}
                  className="h-2 bg-slate-700 flex-1"
                  indicatorClassName={
                    initiative.status === "On Track"
                      ? "bg-emerald-500"
                      : initiative.status === "At Risk"
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }
                />
                <span className="text-xs text-slate-400 w-10 text-right">
                  {initiative.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Risk Assessment */}
      <Card className="border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-medium text-white mb-4">
          Corporate Risk Assessment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              category: "Market Volatility",
              level: "Medium",
              impact: "Moderate",
              trend: "Increasing",
              color: "bg-amber-500",
            },
            {
              category: "Regulatory Compliance",
              level: "Low",
              impact: "Significant",
              trend: "Stable",
              color: "bg-emerald-500",
            },
            {
              category: "Cybersecurity",
              level: "High",
              impact: "Severe",
              trend: "Stable",
              color: "bg-red-500",
            },
            {
              category: "Supply Chain Disruption",
              level: "Medium",
              impact: "Moderate",
              trend: "Decreasing",
              color: "bg-amber-500",
            },
            {
              category: "Talent Acquisition",
              level: "Medium",
              impact: "Moderate",
              trend: "Increasing",
              color: "bg-amber-500",
            },
            {
              category: "Competitive Pressure",
              level: "High",
              impact: "Significant",
              trend: "Increasing",
              color: "bg-red-500",
            },
          ].map((risk, index) => (
            <div key={index} className="border border-slate-800 rounded-md p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-white">{risk.category}</h4>
                <div
                  className={`px-2 py-1 rounded-full text-xs ${
                    risk.level === "High"
                      ? "bg-red-500/20 text-red-500"
                      : risk.level === "Medium"
                        ? "bg-amber-500/20 text-amber-500"
                        : "bg-emerald-500/20 text-emerald-500"
                  }`}
                >
                  {risk.level} Risk
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Impact:</span>
                  <span className="text-slate-300">{risk.impact}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Trend:</span>
                  <span
                    className={`${
                      risk.trend === "Increasing"
                        ? "text-red-500"
                        : risk.trend === "Decreasing"
                          ? "text-emerald-500"
                          : "text-amber-500"
                    }`}
                  >
                    {risk.trend}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Executive Calendar */}
      <Card className="border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-medium text-white mb-4">
          Executive Calendar - Upcoming Events
        </h3>
        <div className="space-y-3">
          {[
            {
              date: "2023-10-15",
              title: "Board of Directors Meeting",
              type: "Board Meeting",
              location: "Corporate HQ - Boardroom A",
            },
            {
              date: "2023-10-18",
              title: "Q3 Earnings Call",
              type: "Financial",
              location: "Virtual",
            },
            {
              date: "2023-10-22",
              title: "Executive Leadership Retreat",
              type: "Strategic Planning",
              location: "Mountain View Resort",
            },
            {
              date: "2023-10-25",
              title: "Industry Conference Keynote",
              type: "External",
              location: "Tech Convention Center",
            },
            {
              date: "2023-11-02",
              title: "Annual Strategy Review",
              type: "Strategic Planning",
              location: "Corporate HQ - Conference Center",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="flex items-start p-3 border border-slate-800 rounded-md hover:bg-slate-800/50 transition-colors"
            >
              <div className="min-w-24 text-right mr-4">
                <div className="text-sm font-medium text-white">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <div className="text-xs text-slate-500">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white">
                  {event.title}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {event.location}
                </div>
              </div>
              <div
                className={`px-2 py-1 rounded-full text-xs ${
                  event.type === "Board Meeting"
                    ? "bg-purple-500/20 text-purple-500"
                    : event.type === "Financial"
                      ? "bg-cyan-500/20 text-cyan-500"
                      : event.type === "Strategic Planning"
                        ? "bg-emerald-500/20 text-emerald-500"
                        : "bg-amber-500/20 text-amber-500"
                }`}
              >
                {event.type}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ExecutiveOverview;
