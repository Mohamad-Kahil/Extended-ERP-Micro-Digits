import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const StrategicPlanning = () => {
  return (
    <div className="space-y-6">
      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">
            Strategic Initiatives
          </h3>
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
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            New Initiative
          </Button>
        </div>
        <div className="space-y-6">
          {[
            {
              name: "Digital Transformation",
              description:
                "Modernize IT infrastructure and digitize key business processes",
              progress: 75,
              status: "On Track",
              statusColor: "text-emerald-500",
              owner: "Sarah Chen, CTO",
              timeline: "Q1 2023 - Q4 2024",
            },
            {
              name: "Market Expansion - APAC",
              description:
                "Establish presence in key Asian markets with focus on Japan and Singapore",
              progress: 60,
              status: "On Track",
              statusColor: "text-emerald-500",
              owner: "Michael Wong, VP International",
              timeline: "Q2 2023 - Q3 2025",
            },
            {
              name: "Sustainability Program",
              description:
                "Reduce carbon footprint by 30% and implement sustainable practices",
              progress: 40,
              status: "At Risk",
              statusColor: "text-amber-500",
              owner: "Jessica Miller, Sustainability Director",
              timeline: "Q3 2022 - Q4 2025",
            },
            {
              name: "Supply Chain Optimization",
              description:
                "Streamline logistics and reduce delivery times by 25%",
              progress: 85,
              status: "On Track",
              statusColor: "text-emerald-500",
              owner: "Robert Johnson, COO",
              timeline: "Q1 2023 - Q2 2024",
            },
            {
              name: "New Product Line Launch",
              description:
                "Develop and launch premium product tier for enterprise customers",
              progress: 30,
              status: "Delayed",
              statusColor: "text-red-500",
              owner: "Amanda Lewis, Product Director",
              timeline: "Q4 2023 - Q3 2024",
            },
          ].map((initiative, index) => (
            <div key={index} className="border border-slate-800 rounded-md p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-white">{initiative.name}</h4>
                <span className={initiative.statusColor}>
                  {initiative.status}
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                {initiative.description}
              </p>
              <div className="flex items-center space-x-4 mb-3">
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
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500">Owner</span>
                  <p className="text-slate-300">{initiative.owner}</p>
                </div>
                <div>
                  <span className="text-slate-500">Timeline</span>
                  <p className="text-slate-300">{initiative.timeline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Strategic Goals
          </h3>
          <div className="space-y-4">
            {[
              {
                goal: "Increase Market Share",
                target: "25% in key markets",
                timeline: "By Q4 2024",
                priority: "High",
              },
              {
                goal: "Improve Customer Retention",
                target: "95% retention rate",
                timeline: "By Q2 2024",
                priority: "High",
              },
              {
                goal: "Launch New Product Categories",
                target: "3 new categories",
                timeline: "By Q3 2025",
                priority: "Medium",
              },
              {
                goal: "Expand International Presence",
                target: "5 new countries",
                timeline: "By Q4 2025",
                priority: "Medium",
              },
              {
                goal: "Achieve Carbon Neutrality",
                target: "Net zero emissions",
                timeline: "By 2030",
                priority: "Medium",
              },
            ].map((goal, index) => (
              <div
                key={index}
                className="border border-slate-800 rounded-md p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-white">{goal.goal}</h4>
                  <div
                    className={`px-2 py-1 rounded-full text-xs ${
                      goal.priority === "High"
                        ? "bg-red-500/20 text-red-500"
                        : goal.priority === "Medium"
                          ? "bg-amber-500/20 text-amber-500"
                          : "bg-blue-500/20 text-blue-500"
                    }`}
                  >
                    {goal.priority} Priority
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs mt-2">
                  <div>
                    <span className="text-slate-500">Target</span>
                    <p className="text-slate-300">{goal.target}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Timeline</span>
                    <p className="text-slate-300">{goal.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-medium text-white mb-4">SWOT Analysis</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-emerald-500/20 bg-emerald-500/5 rounded-md p-4">
              <h4 className="font-medium text-emerald-500 mb-2">Strengths</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Strong brand recognition</li>
                <li>• Innovative product portfolio</li>
                <li>• Robust financial position</li>
                <li>• Talented engineering team</li>
                <li>• Established customer base</li>
              </ul>
            </div>
            <div className="border border-red-500/20 bg-red-500/5 rounded-md p-4">
              <h4 className="font-medium text-red-500 mb-2">Weaknesses</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• High operational costs</li>
                <li>• Limited international presence</li>
                <li>• Legacy IT systems</li>
                <li>• Product line gaps</li>
                <li>• Slow decision-making process</li>
              </ul>
            </div>
            <div className="border border-blue-500/20 bg-blue-500/5 rounded-md p-4">
              <h4 className="font-medium text-blue-500 mb-2">Opportunities</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Emerging markets in Asia</li>
                <li>• Digital transformation trends</li>
                <li>• Strategic acquisitions</li>
                <li>• Sustainability-focused products</li>
                <li>• AI and automation integration</li>
              </ul>
            </div>
            <div className="border border-amber-500/20 bg-amber-500/5 rounded-md p-4">
              <h4 className="font-medium text-amber-500 mb-2">Threats</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Increasing competition</li>
                <li>• Regulatory changes</li>
                <li>• Economic uncertainty</li>
                <li>• Supply chain disruptions</li>
                <li>• Rapid technological changes</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StrategicPlanning;
