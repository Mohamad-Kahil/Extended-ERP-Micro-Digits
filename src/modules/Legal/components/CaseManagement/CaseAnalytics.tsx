import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const CaseAnalytics = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Case Types Distribution */}
      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Case Types Distribution
          </h3>
          <div className="space-y-4">
            {[
              {
                type: "Litigation",
                count: 12,
                percentage: 25,
                color: "bg-blue-500",
              },
              {
                type: "Intellectual Property",
                count: 10,
                percentage: 21,
                color: "bg-purple-500",
              },
              {
                type: "Contract",
                count: 8,
                percentage: 17,
                color: "bg-cyan-500",
              },
              {
                type: "Employment",
                count: 7,
                percentage: 15,
                color: "bg-amber-500",
              },
              {
                type: "Compliance",
                count: 6,
                percentage: 13,
                color: "bg-emerald-500",
              },
              {
                type: "Corporate",
                count: 4,
                percentage: 9,
                color: "bg-red-500",
              },
            ].map((item) => (
              <div key={item.type} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">{item.type}</span>
                  <div className="flex space-x-4">
                    <span className="text-slate-400">{item.count} cases</span>
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
        </CardContent>
      </Card>

      {/* Case Status */}
      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Case Status Overview
          </h3>
          <div className="space-y-4">
            {[
              {
                status: "Active",
                count: 24,
                percentage: 48,
                color: "bg-blue-500",
              },
              {
                status: "Pending",
                count: 15,
                percentage: 30,
                color: "bg-amber-500",
              },
              {
                status: "Resolved",
                count: 8,
                percentage: 16,
                color: "bg-emerald-500",
              },
              {
                status: "Closed",
                count: 3,
                percentage: 6,
                color: "bg-slate-500",
              },
            ].map((item) => (
              <div key={item.status} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">{item.status}</span>
                  <div className="flex space-x-4">
                    <span className="text-slate-400">{item.count} cases</span>
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
        </CardContent>
      </Card>

      {/* Case Resolution Time */}
      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Average Resolution Time
          </h3>
          <div className="space-y-4">
            {[
              {
                type: "Litigation",
                time: 180,
                unit: "days",
                color: "bg-blue-500",
              },
              {
                type: "Intellectual Property",
                time: 120,
                unit: "days",
                color: "bg-purple-500",
              },
              {
                type: "Contract",
                time: 45,
                unit: "days",
                color: "bg-cyan-500",
              },
              {
                type: "Employment",
                time: 90,
                unit: "days",
                color: "bg-amber-500",
              },
              {
                type: "Compliance",
                time: 30,
                unit: "days",
                color: "bg-emerald-500",
              },
              {
                type: "Corporate",
                time: 60,
                unit: "days",
                color: "bg-red-500",
              },
            ].map((item) => (
              <div key={item.type} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">{item.type}</span>
                  <span className="text-white font-medium">
                    {item.time} {item.unit}
                  </span>
                </div>
                <Progress
                  value={(item.time / 180) * 100}
                  className="h-2 bg-slate-700"
                  indicatorClassName={item.color}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Case Outcomes */}
      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Case Outcomes (Last 12 Months)
          </h3>
          <div className="space-y-4">
            {[
              {
                outcome: "Favorable",
                count: 18,
                percentage: 60,
                color: "bg-emerald-500",
              },
              {
                outcome: "Settlement",
                count: 8,
                percentage: 27,
                color: "bg-amber-500",
              },
              {
                outcome: "Unfavorable",
                count: 4,
                percentage: 13,
                color: "bg-red-500",
              },
            ].map((item) => (
              <div key={item.outcome} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">{item.outcome}</span>
                  <div className="flex space-x-4">
                    <span className="text-slate-400">{item.count} cases</span>
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
        </CardContent>
      </Card>

      {/* Case Cost Analysis */}
      <Card className="border-slate-800 bg-slate-900 md:col-span-2">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Legal Spend by Case Type (Current Year)
          </h3>
          <div className="h-64 flex items-end space-x-2">
            {[
              { type: "Litigation", amount: 450000, color: "bg-blue-500" },
              { type: "IP", amount: 320000, color: "bg-purple-500" },
              { type: "Contract", amount: 180000, color: "bg-cyan-500" },
              { type: "Employment", amount: 220000, color: "bg-amber-500" },
              { type: "Compliance", amount: 150000, color: "bg-emerald-500" },
              { type: "Corporate", amount: 280000, color: "bg-red-500" },
            ].map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full relative h-48">
                  <div
                    className={`absolute bottom-0 w-full ${data.color} rounded-t`}
                    style={{
                      height: `${(data.amount / 450000) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="text-xs text-slate-400 mt-2">{data.type}</span>
                <span className="text-xs font-medium text-white">
                  ${(data.amount / 1000).toFixed(0)}k
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseAnalytics;
