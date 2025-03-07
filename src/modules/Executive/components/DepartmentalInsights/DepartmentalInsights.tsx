import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DepartmentalInsights = () => {
  return (
    <div className="space-y-6">
      <Card className="border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-medium text-white mb-4">
          Departmental Performance Overview
        </h3>
        <div className="space-y-6">
          {[
            {
              department: "Finance",
              performance: 92,
              target: 90,
              status: "On Track",
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
              department: "Sales",
              performance: 95,
              target: 90,
              status: "Exceeding",
            },
            {
              department: "HR",
              performance: 89,
              target: 85,
              status: "On Track",
            },
            {
              department: "IT",
              performance: 91,
              target: 90,
              status: "On Track",
            },
          ].map((dept) => (
            <div key={dept.department} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">{dept.department}</span>
                <div className="flex space-x-4">
                  <span className="text-slate-400">Target: {dept.target}%</span>
                  <span
                    className={`font-medium ${dept.performance >= dept.target ? "text-emerald-500" : "text-amber-500"}`}
                  >
                    {dept.performance}%
                  </span>
                </div>
              </div>
              <div className="relative h-2 w-full bg-slate-700 rounded-full">
                <div
                  className={`absolute h-2 rounded-full ${dept.performance >= dept.target ? "bg-emerald-500" : "bg-amber-500"}`}
                  style={{ width: `${dept.performance}%` }}
                ></div>
                <div
                  className="absolute h-4 w-0.5 bg-white top-1/2 transform -translate-y-1/2"
                  style={{ left: `${dept.target}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Cross-Department Collaboration
          </h3>
          <div className="space-y-4">
            {[
              {
                project: "Digital Transformation",
                departments: ["IT", "Marketing", "Operations"],
                completion: 65,
              },
              {
                project: "Customer Experience Initiative",
                departments: ["Sales", "Marketing", "Customer Support"],
                completion: 78,
              },
              {
                project: "Supply Chain Optimization",
                departments: ["Operations", "Finance", "Logistics"],
                completion: 42,
              },
              {
                project: "Employee Engagement Program",
                departments: ["HR", "Internal Comms", "Executive"],
                completion: 89,
              },
            ].map((project, index) => (
              <div
                key={index}
                className="border border-slate-800 rounded-md p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-white">{project.project}</h4>
                  <div className="text-xs text-slate-400">
                    {project.departments.join(" • ")}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Completion</span>
                    <span className="text-white font-medium">
                      {project.completion}%
                    </span>
                  </div>
                  <Progress
                    value={project.completion}
                    className="h-2 bg-slate-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Resource Allocation
          </h3>
          <div className="space-y-4">
            {[
              {
                department: "IT",
                budget: 4200000,
                headcount: 45,
                budgetUtilization: 68,
              },
              {
                department: "Marketing",
                budget: 3800000,
                headcount: 32,
                budgetUtilization: 72,
              },
              {
                department: "Operations",
                budget: 5600000,
                headcount: 78,
                budgetUtilization: 81,
              },
              {
                department: "Sales",
                budget: 4900000,
                headcount: 64,
                budgetUtilization: 75,
              },
              {
                department: "HR",
                budget: 2100000,
                headcount: 24,
                budgetUtilization: 62,
              },
            ].map((dept) => (
              <div
                key={dept.department}
                className="border border-slate-800 rounded-md p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-white">{dept.department}</h4>
                  <div className="text-xs text-slate-400">
                    {dept.headcount} employees
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Annual Budget</span>
                    <span className="text-white font-medium">
                      ${(dept.budget / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Budget Utilization</span>
                    <span className="text-white font-medium">
                      {dept.budgetUtilization}%
                    </span>
                  </div>
                  <Progress
                    value={dept.budgetUtilization}
                    className="h-2 bg-slate-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DepartmentalInsights;
