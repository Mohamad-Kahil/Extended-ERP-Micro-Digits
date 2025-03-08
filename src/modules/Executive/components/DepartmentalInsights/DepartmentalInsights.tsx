import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DepartmentalInsights = () => {
  return (
    <div className="space-y-3">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">Departments</h3>
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
          <p className="mt-1 text-lg font-bold text-white">6</p>
          <div className="flex items-center text-xs text-slate-400">
            <span>Core business units</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Avg. Performance
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
          <p className="mt-1 text-lg font-bold text-white">88.7%</p>
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
            <span>2.3% vs last quarter</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Total Headcount
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">1,248</p>
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
            <span>5.2% growth YTD</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Budget Utilization
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
          <p className="mt-1 text-lg font-bold text-white">72.4%</p>
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
            <span>3.1% under budget</span>
          </div>
        </Card>
      </div>

      {/* Two graphs in one row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Department Performance */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Departmental Performance
            </h3>
            <div className="space-y-2">
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
                <div key={dept.department} className="space-y-1">
                  <div className="flex justify-between text-xs">
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

        {/* Resource Allocation */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Resource Allocation
            </h3>
            <div className="space-y-2">
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
                <div key={dept.department} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white">{dept.department}</span>
                    <span className="text-slate-400">
                      {dept.headcount} employees
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">
                      Budget: ${(dept.budget / 1000000).toFixed(1)}M
                    </span>
                    <span className="text-white font-medium">
                      {dept.budgetUtilization}% utilized
                    </span>
                  </div>
                  <Progress
                    value={dept.budgetUtilization}
                    className="h-1.5 bg-slate-700"
                    indicatorClassName={
                      dept.budgetUtilization > 80
                        ? "bg-amber-500"
                        : "bg-emerald-500"
                    }
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second row of two graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cross-Department Collaboration */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Cross-Department Collaboration
            </h3>
            <div className="space-y-2">
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
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white">{project.project}</span>
                    <span className="text-slate-400">
                      {project.departments.join(" • ")}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Completion</span>
                    <span className="text-white font-medium">
                      {project.completion}%
                    </span>
                  </div>
                  <Progress
                    value={project.completion}
                    className="h-1.5 bg-slate-700"
                    indicatorClassName={
                      project.completion > 75
                        ? "bg-emerald-500"
                        : project.completion > 50
                          ? "bg-cyan-500"
                          : "bg-amber-500"
                    }
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Headcount Distribution */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Headcount Distribution
            </h3>
            <div className="relative h-36 mb-2">
              {/* Pie chart representation using colored segments */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  {/* Sales - 215 (17.2%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#0ea5e9"
                    strokeWidth="20"
                    strokeDasharray="108 252"
                    strokeDashoffset="0"
                  />
                  {/* Marketing - 124 (9.9%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#a855f7"
                    strokeWidth="20"
                    strokeDasharray="62 298"
                    strokeDashoffset="-108"
                  />
                  {/* Finance - 78 (6.3%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#10b981"
                    strokeWidth="20"
                    strokeDasharray="40 320"
                    strokeDashoffset="-170"
                  />
                  {/* Operations - 310 (24.8%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#f59e0b"
                    strokeWidth="20"
                    strokeDasharray="156 204"
                    strokeDashoffset="-210"
                  />
                  {/* HR - 42 (3.4%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#3b82f6"
                    strokeWidth="20"
                    strokeDasharray="21 339"
                    strokeDashoffset="-366"
                  />
                  {/* IT - 86 (6.9%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#6366f1"
                    strokeWidth="20"
                    strokeDasharray="43 317"
                    strokeDashoffset="-387"
                  />
                  {/* Customer Support - 298 (23.9%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#ef4444"
                    strokeWidth="20"
                    strokeDasharray="150 210"
                    strokeDashoffset="-430"
                  />
                </svg>
                <div className="absolute text-center">
                  <div className="text-lg font-bold text-white">1,248</div>
                  <div className="text-xs text-slate-400">Total</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 mt-2">
              {[
                {
                  department: "Sales",
                  count: 215,
                  percentage: 17.2,
                  color: "bg-cyan-500",
                },
                {
                  department: "Marketing",
                  count: 124,
                  percentage: 9.9,
                  color: "bg-purple-500",
                },
                {
                  department: "Finance",
                  count: 78,
                  percentage: 6.3,
                  color: "bg-emerald-500",
                },
                {
                  department: "Operations",
                  count: 310,
                  percentage: 24.8,
                  color: "bg-amber-500",
                },
                {
                  department: "HR",
                  count: 42,
                  percentage: 3.4,
                  color: "bg-blue-500",
                },
                {
                  department: "IT",
                  count: 86,
                  percentage: 6.9,
                  color: "bg-indigo-500",
                },
                {
                  department: "Customer Support",
                  count: 298,
                  percentage: 23.9,
                  color: "bg-red-500",
                },
              ].map((item) => (
                <div
                  key={item.department}
                  className="flex items-center space-x-1"
                >
                  <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                  <div className="text-xs">
                    <span className="text-white">{item.department}: </span>
                    <span className="text-slate-400">
                      {item.count} ({item.percentage}%)
                    </span>
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

export default DepartmentalInsights;
