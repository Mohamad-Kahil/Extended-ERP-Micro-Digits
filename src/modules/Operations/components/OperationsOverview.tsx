import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const OperationsOverview = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Process Efficiency
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
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
        <p className="mt-2 text-3xl font-bold text-white">94%</p>
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
          <span>2.5% from last month</span>
        </div>
      </Card>

      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Resource Utilization
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
        <p className="mt-2 text-3xl font-bold text-white">87.5%</p>
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
          <span>1.2% from last quarter</span>
        </div>
      </Card>

      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Active Processes
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
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
          </svg>
        </div>
        <p className="mt-2 text-3xl font-bold text-white">28</p>
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
          <span>3 more than last week</span>
        </div>
      </Card>

      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Compliance Rate
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
        <p className="mt-2 text-3xl font-bold text-white">98.2%</p>
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
          <span>0.5% improvement from last month</span>
        </div>
      </Card>

      {/* Additional KPI Cards */}
      <Card className="border-slate-800 bg-slate-900 p-6 md:col-span-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Operational Costs
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
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <p className="mt-2 text-3xl font-bold text-white">$1.2M</p>
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
            <path d="m19 12-7 7-7-7" />
            <path d="M12 5v14" />
          </svg>
          <span>3.2% reduction this quarter</span>
        </div>
      </Card>

      <Card className="border-slate-800 bg-slate-900 p-6 md:col-span-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Risk Assessment
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
        <p className="mt-2 text-3xl font-bold text-white">Low</p>
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
            <path d="m19 12-7 7-7-7" />
            <path d="M12 5v14" />
          </svg>
          <span>2 fewer critical risks than last month</span>
        </div>
      </Card>
    </div>
  );
};

export default OperationsOverview;
