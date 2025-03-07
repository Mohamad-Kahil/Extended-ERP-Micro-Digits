import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const OpportunityForecast = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">
                Current Quarter
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-white">Q4 2023</p>
            <p className="text-xs text-slate-400 mt-1">Oct 1 - Dec 31, 2023</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">
                Quarterly Target
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
            <p className="text-3xl font-bold text-white">$950,000</p>
            <p className="text-xs text-slate-400 mt-1">25% increase from Q3</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">
                Current Progress
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
            <p className="text-3xl font-bold text-white">$380,000</p>
            <p className="text-xs text-slate-400 mt-1">
              40% of quarterly target
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Forecast Breakdown */}
      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Forecast Breakdown
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">Closed Won</span>
                <span className="text-white font-medium">$180,000</span>
              </div>
              <Progress
                value={19}
                className="h-2 bg-slate-700"
                indicatorClassName="bg-emerald-500"
              />
              <p className="text-xs text-slate-400">
                19% of target - already closed deals
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">Commit</span>
                <span className="text-white font-medium">$350,000</span>
              </div>
              <Progress
                value={37}
                className="h-2 bg-slate-700"
                indicatorClassName="bg-blue-500"
              />
              <p className="text-xs text-slate-400">
                37% of target - high probability deals (&gt;80%)
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">Best Case</span>
                <span className="text-white font-medium">$520,000</span>
              </div>
              <Progress
                value={55}
                className="h-2 bg-slate-700"
                indicatorClassName="bg-amber-500"
              />
              <p className="text-xs text-slate-400">
                55% of target - medium probability deals (50-80%)
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">Pipeline</span>
                <span className="text-white font-medium">$850,000</span>
              </div>
              <Progress
                value={89}
                className="h-2 bg-slate-700"
                indicatorClassName="bg-purple-500"
              />
              <p className="text-xs text-slate-400">
                89% of target - all active opportunities
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 mt-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Gap to Target</span>
                <span className="text-red-500 font-medium">$100,000</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Additional opportunities needed to reach target
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Forecast */}
      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Monthly Forecast
          </h3>
          <div className="space-y-4">
            {[
              {
                month: "October",
                forecast: 280000,
                actual: 200000,
                target: 300000,
              },
              {
                month: "November",
                forecast: 320000,
                actual: 0,
                target: 320000,
              },
              {
                month: "December",
                forecast: 250000,
                actual: 0,
                target: 330000,
              },
            ].map((month) => (
              <div key={month.month} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">{month.month}</span>
                  <div className="flex space-x-4">
                    <span className="text-slate-400">
                      Target: ${month.target.toLocaleString()}
                    </span>
                    <span className="text-white font-medium">
                      Forecast: ${month.forecast.toLocaleString()}
                    </span>
                    {month.actual > 0 && (
                      <span className="text-emerald-500 font-medium">
                        Actual: ${month.actual.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
                <div className="relative h-2 bg-slate-700 rounded-full">
                  <div
                    className="absolute h-2 bg-slate-500 rounded-full"
                    style={{ width: `${(month.target / 350000) * 100}%` }}
                  ></div>
                  <div
                    className="absolute h-2 bg-cyan-500 rounded-full"
                    style={{ width: `${(month.forecast / 350000) * 100}%` }}
                  ></div>
                  {month.actual > 0 && (
                    <div
                      className="absolute h-2 bg-emerald-500 rounded-full"
                      style={{ width: `${(month.actual / 350000) * 100}%` }}
                    ></div>
                  )}
                </div>
                <p className="text-xs text-slate-400">
                  {month.actual > 0
                    ? `${Math.round((month.actual / month.target) * 100)}% of target achieved`
                    : `${Math.round((month.forecast / month.target) * 100)}% of target forecasted`}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-end space-x-4">
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
          Export Forecast
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
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          Adjust Forecast
        </Button>
      </div>
    </div>
  );
};

export default OpportunityForecast;
