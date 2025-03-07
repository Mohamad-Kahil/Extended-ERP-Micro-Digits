import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProcessWorkflows from "./ProcessWorkflows";
import ProcessOptimization from "./ProcessOptimization";

const ProcessManagement = () => {
  const [activeView, setActiveView] = useState<"workflows" | "optimization">(
    "workflows",
  );
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Process Management
          </CardTitle>
          <div className="flex space-x-2">
            <Button
              variant={activeView === "workflows" ? "default" : "outline"}
              onClick={() => setActiveView("workflows")}
              className={
                activeView === "workflows"
                  ? "bg-cyan-600 hover:bg-cyan-700"
                  : ""
              }
            >
              Process Workflows
            </Button>
            <Button
              variant={activeView === "optimization" ? "default" : "outline"}
              onClick={() => setActiveView("optimization")}
              className={
                activeView === "optimization"
                  ? "bg-cyan-600 hover:bg-cyan-700"
                  : ""
              }
            >
              Process Optimization
            </Button>
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
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative w-64">
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
                className="absolute left-2 top-2.5 h-4 w-4 text-slate-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <Input
                placeholder={
                  activeView === "workflows"
                    ? "Search processes..."
                    : "Search optimizations..."
                }
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex space-x-3">
              <div className="flex items-center px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                <span className="text-xs font-medium text-emerald-500">
                  {activeView === "workflows" ? "Active: 28" : "Completed: 15"}
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span className="text-xs font-medium text-amber-500">
                  {activeView === "workflows" ? "Pending: 8" : "In Progress: 7"}
                </span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                <span className="text-xs font-medium text-blue-500">
                  {activeView === "workflows" ? "Draft: 5" : "Planned: 12"}
                </span>
              </div>
            </div>
          </div>
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
            {activeView === "workflows" ? "Create Process" : "Add Optimization"}
          </Button>
        </div>

        {activeView === "workflows" ? (
          <ProcessWorkflows searchTerm={searchTerm} />
        ) : (
          <ProcessOptimization searchTerm={searchTerm} />
        )}
      </CardContent>
    </Card>
  );
};

export default ProcessManagement;
