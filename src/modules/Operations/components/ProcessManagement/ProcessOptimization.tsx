import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface Optimization {
  id: string;
  processName: string;
  description: string;
  status: "planned" | "in-progress" | "completed";
  impact: "high" | "medium" | "low";
  owner: string;
  startDate: string;
  completionDate?: string;
  expectedImprovement: number;
}

interface ProcessOptimizationProps {
  searchTerm: string;
}

const optimizations: Optimization[] = [
  {
    id: "OPT-001",
    processName: "Order Fulfillment",
    description: "Streamline order processing steps",
    status: "completed",
    impact: "high",
    owner: "Sarah Johnson",
    startDate: "2023-08-01",
    completionDate: "2023-08-15",
    expectedImprovement: 15,
  },
  {
    id: "OPT-002",
    processName: "Customer Onboarding",
    description: "Automate document verification",
    status: "in-progress",
    impact: "medium",
    owner: "Michael Chen",
    startDate: "2023-08-15",
    expectedImprovement: 12,
  },
  {
    id: "OPT-003",
    processName: "Invoice Processing",
    description: "Implement AI-based data extraction",
    status: "planned",
    impact: "high",
    owner: "Jessica Williams",
    startDate: "2023-09-20",
    expectedImprovement: 25,
  },
  {
    id: "OPT-004",
    processName: "Quality Assurance",
    description: "Introduce automated testing",
    status: "in-progress",
    impact: "high",
    owner: "Robert Garcia",
    startDate: "2023-08-10",
    expectedImprovement: 20,
  },
  {
    id: "OPT-005",
    processName: "Employee Onboarding",
    description: "Digitize all paperwork",
    status: "completed",
    impact: "medium",
    owner: "David Miller",
    startDate: "2023-07-15",
    completionDate: "2023-08-20",
    expectedImprovement: 10,
  },
];

const ProcessOptimization = ({ searchTerm }: ProcessOptimizationProps) => {
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [impactFilter, setImpactFilter] = React.useState("all");

  const filteredOptimizations = optimizations.filter(
    (optimization) =>
      (statusFilter === "all" || optimization.status === statusFilter) &&
      (impactFilter === "all" || optimization.impact === impactFilter) &&
      (optimization.processName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        optimization.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        optimization.owner.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Calculate optimization metrics
  const completedOptimizations = optimizations.filter(
    (opt) => opt.status === "completed",
  ).length;
  const inProgressOptimizations = optimizations.filter(
    (opt) => opt.status === "in-progress",
  ).length;
  const plannedOptimizations = optimizations.filter(
    (opt) => opt.status === "planned",
  ).length;

  const totalExpectedImprovement = optimizations.reduce(
    (sum, opt) => sum + opt.expectedImprovement,
    0,
  );
  const averageImprovement =
    optimizations.length > 0
      ? totalExpectedImprovement / optimizations.length
      : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Optimization Status
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Completed</span>
                  <span>{completedOptimizations} initiatives</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full">
                  <div
                    className="h-2 bg-emerald-500 rounded-full"
                    style={{
                      width: `${(completedOptimizations / optimizations.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>In Progress</span>
                  <span>{inProgressOptimizations} initiatives</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full">
                  <div
                    className="h-2 bg-amber-500 rounded-full"
                    style={{
                      width: `${(inProgressOptimizations / optimizations.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Planned</span>
                  <span>{plannedOptimizations} initiatives</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full">
                  <div
                    className="h-2 bg-blue-500 rounded-full"
                    style={{
                      width: `${(plannedOptimizations / optimizations.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Expected Improvement
            </h3>
            <p className="text-3xl font-bold text-white">
              {averageImprovement.toFixed(1)}%
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Average per initiative
            </p>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Total Expected Improvement</span>
                <span>{totalExpectedImprovement}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full">
                <div
                  className="h-2 bg-cyan-500 rounded-full"
                  style={{
                    width: `${Math.min(100, totalExpectedImprovement)}%`,
                  }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Impact Distribution
            </h3>
            <div className="flex items-center justify-between h-32">
              <div className="flex flex-col items-center">
                <div className="h-24 w-12 bg-slate-700 rounded-t relative overflow-hidden">
                  <div
                    className="absolute bottom-0 w-full bg-red-500"
                    style={{
                      height: `${(optimizations.filter((o) => o.impact === "high").length / optimizations.length) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="text-xs text-slate-400 mt-1">High</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-24 w-12 bg-slate-700 rounded-t relative overflow-hidden">
                  <div
                    className="absolute bottom-0 w-full bg-amber-500"
                    style={{
                      height: `${(optimizations.filter((o) => o.impact === "medium").length / optimizations.length) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="text-xs text-slate-400 mt-1">Medium</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-24 w-12 bg-slate-700 rounded-t relative overflow-hidden">
                  <div
                    className="absolute bottom-0 w-full bg-blue-500"
                    style={{
                      height: `${(optimizations.filter((o) => o.impact === "low").length / optimizations.length) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="text-xs text-slate-400 mt-1">Low</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="planned">Planned</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={impactFilter} onValueChange={setImpactFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Impact" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Impact Levels</SelectItem>
              <SelectItem value="high">High Impact</SelectItem>
              <SelectItem value="medium">Medium Impact</SelectItem>
              <SelectItem value="low">Low Impact</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">ID</TableHead>
              <TableHead className="text-slate-300">Process</TableHead>
              <TableHead className="text-slate-300">Description</TableHead>
              <TableHead className="text-slate-300">Owner</TableHead>
              <TableHead className="text-slate-300">Start Date</TableHead>
              <TableHead className="text-slate-300">Completion</TableHead>
              <TableHead className="text-slate-300">Impact</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOptimizations.map((optimization) => (
              <TableRow key={optimization.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {optimization.id}
                </TableCell>
                <TableCell>{optimization.processName}</TableCell>
                <TableCell className="max-w-xs truncate">
                  {optimization.description}
                </TableCell>
                <TableCell>{optimization.owner}</TableCell>
                <TableCell>
                  {new Date(optimization.startDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {optimization.completionDate
                    ? new Date(optimization.completionDate).toLocaleDateString()
                    : "-"}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      optimization.impact === "high"
                        ? "bg-red-500/10 text-red-500"
                        : optimization.impact === "medium"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {optimization.impact}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      optimization.status === "completed"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : optimization.status === "in-progress"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {optimization.status.replace("-", " ")}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-1">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
                        className="h-4 w-4"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
                        className="h-4 w-4 text-blue-500"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <span className="sr-only">View Details</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProcessOptimization;
