import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const OpportunityPipeline = () => {
  const pipelineStages = [
    {
      name: "Qualification",
      count: 12,
      value: 320000,
      color: "bg-blue-500",
    },
    {
      name: "Discovery",
      count: 8,
      value: 240000,
      color: "bg-purple-500",
    },
    {
      name: "Proposal",
      count: 6,
      value: 380000,
      color: "bg-cyan-500",
    },
    {
      name: "Negotiation",
      count: 4,
      value: 450000,
      color: "bg-amber-500",
    },
    {
      name: "Closed Won",
      count: 7,
      value: 850000,
      color: "bg-emerald-500",
    },
    {
      name: "Closed Lost",
      count: 5,
      value: 320000,
      color: "bg-red-500",
    },
  ];

  const totalValue = pipelineStages.reduce(
    (sum, stage) => sum + stage.value,
    0,
  );
  const totalCount = pipelineStages.reduce(
    (sum, stage) => sum + stage.count,
    0,
  );

  // Calculate quarterly forecasts
  const quarterlyForecasts = [
    { quarter: "Q1", forecast: 520000, actual: 480000 },
    { quarter: "Q2", forecast: 650000, actual: 720000 },
    { quarter: "Q3", forecast: 800000, actual: 750000 },
    { quarter: "Q4", forecast: 950000, actual: 0 }, // Current quarter, no actuals yet
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pipeline Summary */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-white mb-4">
              Pipeline Summary
            </h3>
            <div className="space-y-4">
              {pipelineStages.map((stage) => (
                <div key={stage.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${stage.color} mr-2`}
                      ></div>
                      <span className="text-white">{stage.name}</span>
                    </div>
                    <div className="flex space-x-4">
                      <span className="text-slate-400">
                        {stage.count} deals
                      </span>
                      <span className="text-white font-medium">
                        ${stage.value.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Progress
                    value={(stage.value / totalValue) * 100}
                    className="h-2 bg-slate-700"
                    indicatorClassName={stage.color}
                  />
                </div>
              ))}
              <div className="pt-4 border-t border-slate-800 mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Total Pipeline Value</span>
                  <span className="text-white font-medium">
                    ${totalValue.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-slate-400">Total Opportunities</span>
                  <span className="text-white font-medium">{totalCount}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quarterly Forecast */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-white mb-4">
              Quarterly Forecast
            </h3>
            <div className="space-y-4">
              {quarterlyForecasts.map((quarter) => (
                <div key={quarter.quarter} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">{quarter.quarter}</span>
                    <div className="flex space-x-4">
                      <span className="text-slate-400">
                        Forecast: ${quarter.forecast.toLocaleString()}
                      </span>
                      {quarter.actual > 0 && (
                        <span
                          className={`font-medium ${quarter.actual >= quarter.forecast ? "text-emerald-500" : "text-red-500"}`}
                        >
                          Actual: ${quarter.actual.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="relative h-2 bg-slate-700 rounded-full">
                    <div
                      className="absolute h-2 bg-cyan-500 rounded-full"
                      style={{
                        width: `${(quarter.forecast / 1000000) * 100}%`,
                      }}
                    ></div>
                    {quarter.actual > 0 && (
                      <div
                        className={`absolute h-2 ${quarter.actual >= quarter.forecast ? "bg-emerald-500" : "bg-red-500"} rounded-full`}
                        style={{
                          width: `${(quarter.actual / 1000000) * 100}%`,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-slate-800 mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Annual Target</span>
                  <span className="text-white font-medium">$3,000,000</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-slate-400">YTD Achievement</span>
                  <span className="text-white font-medium">
                    $1,950,000 (65%)
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline by Owner */}
      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Pipeline by Owner
          </h3>
          <div className="space-y-4">
            {[
              { name: "Sarah Johnson", value: 620000, count: 8, progress: 75 },
              { name: "Michael Chen", value: 480000, count: 6, progress: 60 },
              {
                name: "Jessica Williams",
                value: 350000,
                count: 5,
                progress: 42,
              },
              { name: "David Miller", value: 290000, count: 4, progress: 35 },
            ].map((owner) => (
              <div key={owner.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">{owner.name}</span>
                  <div className="flex space-x-4">
                    <span className="text-slate-400">{owner.count} deals</span>
                    <span className="text-white font-medium">
                      ${owner.value.toLocaleString()}
                    </span>
                  </div>
                </div>
                <Progress
                  value={owner.progress}
                  className="h-2 bg-slate-700"
                  indicatorClassName="bg-cyan-500"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Win/Loss Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">Win Rate</h3>
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
                className="text-emerald-500"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-white">58.3%</p>
            <p className="text-xs text-emerald-500 mt-1">
              ↑ 4.2% from last quarter
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">
                Avg. Deal Size
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
                className="text-emerald-500"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-white">$78.5K</p>
            <p className="text-xs text-emerald-500 mt-1">
              ↑ $5.2K from last quarter
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">
                Sales Cycle
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
                className="text-red-500"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-white">42 days</p>
            <p className="text-xs text-red-500 mt-1">
              ↑ 3 days from last quarter
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OpportunityPipeline;
