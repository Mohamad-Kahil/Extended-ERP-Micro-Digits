import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ComplianceTrackingProps {
  searchTerm: string;
}

const ComplianceTracking = ({ searchTerm }: ComplianceTrackingProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">
                Overall Compliance
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
            <p className="text-3xl font-bold text-white">94.2%</p>
            <p className="text-xs text-emerald-500 mt-1">
              ↑ 2.5% from last quarter
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">
                Regulatory Audits
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-white">3/3</p>
            <p className="text-xs text-emerald-500 mt-1">
              All audits passed this year
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">
                Overdue Tasks
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
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-white">5</p>
            <p className="text-xs text-amber-500 mt-1">↓ 3 from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Compliance by Category
          </h3>
          <div className="space-y-4">
            {[
              {
                category: "Safety Inspections",
                compliance: 98,
                required: 45,
                completed: 44,
              },
              {
                category: "Equipment Certifications",
                compliance: 100,
                required: 12,
                completed: 12,
              },
              {
                category: "Environmental Compliance",
                compliance: 92,
                required: 25,
                completed: 23,
              },
              {
                category: "Regulatory Requirements",
                compliance: 95,
                required: 20,
                completed: 19,
              },
              {
                category: "Quality Assurance",
                compliance: 88,
                required: 50,
                completed: 44,
              },
            ]
              .filter((item) =>
                item.category.toLowerCase().includes(searchTerm.toLowerCase()),
              )
              .map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">{category.category}</span>
                    <div className="flex space-x-4">
                      <span className="text-slate-400">
                        {category.completed}/{category.required} completed
                      </span>
                      <span className="text-white font-medium">
                        {category.compliance}%
                      </span>
                    </div>
                  </div>
                  <Progress
                    value={category.compliance}
                    className="h-2 bg-slate-700"
                    indicatorClassName={
                      category.compliance >= 95
                        ? "bg-emerald-500"
                        : category.compliance >= 85
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }
                  />
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Upcoming Compliance Tasks
          </h3>
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Task ID</TableHead>
                  <TableHead className="text-slate-300">Description</TableHead>
                  <TableHead className="text-slate-300">Category</TableHead>
                  <TableHead className="text-slate-300">Asset</TableHead>
                  <TableHead className="text-slate-300">Due Date</TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                  <TableHead className="text-slate-300">Priority</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    id: "COMP-001",
                    description: "Annual Fire Safety Inspection",
                    category: "Safety Inspections",
                    asset: "Building A",
                    dueDate: "2023-10-15",
                    status: "Scheduled",
                    priority: "High",
                  },
                  {
                    id: "COMP-002",
                    description: "Quarterly Air Quality Testing",
                    category: "Environmental Compliance",
                    asset: "Production Area",
                    dueDate: "2023-09-30",
                    status: "Due Soon",
                    priority: "Medium",
                  },
                  {
                    id: "COMP-003",
                    description: "Pressure Vessel Certification",
                    category: "Equipment Certifications",
                    asset: "Boiler System",
                    dueDate: "2023-11-10",
                    status: "Scheduled",
                    priority: "High",
                  },
                  {
                    id: "COMP-004",
                    description: "Electrical Safety Audit",
                    category: "Regulatory Requirements",
                    asset: "Main Electrical Room",
                    dueDate: "2023-09-25",
                    status: "Due Soon",
                    priority: "High",
                  },
                  {
                    id: "COMP-005",
                    description: "Wastewater Discharge Testing",
                    category: "Environmental Compliance",
                    asset: "Wastewater Treatment",
                    dueDate: "2023-10-05",
                    status: "Scheduled",
                    priority: "Medium",
                  },
                ]
                  .filter(
                    (task) =>
                      task.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      task.id
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      task.category
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                  )
                  .map((task) => (
                    <TableRow key={task.id} className="border-slate-800">
                      <TableCell className="font-medium text-slate-300">
                        {task.id}
                      </TableCell>
                      <TableCell>{task.description}</TableCell>
                      <TableCell>{task.category}</TableCell>
                      <TableCell>{task.asset}</TableCell>
                      <TableCell>
                        {new Date(task.dueDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                            task.status === "Completed"
                              ? "bg-emerald-500/10 text-emerald-500"
                              : task.status === "Due Soon"
                                ? "bg-amber-500/10 text-amber-500"
                                : task.status === "Overdue"
                                  ? "bg-red-500/10 text-red-500"
                                  : "bg-blue-500/10 text-blue-500"
                          }`}
                        >
                          {task.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                            task.priority === "High"
                              ? "bg-red-500/10 text-red-500"
                              : task.priority === "Medium"
                                ? "bg-amber-500/10 text-amber-500"
                                : "bg-blue-500/10 text-blue-500"
                          }`}
                        >
                          {task.priority}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComplianceTracking;
