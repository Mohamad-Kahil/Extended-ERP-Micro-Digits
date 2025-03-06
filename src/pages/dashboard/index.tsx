import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ModuleGrid from "@/components/dashboard/ModuleGrid";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Welcome back, John</h1>
          <p className="text-slate-400">
            Here's an overview of your ERP system
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-400">
                Total Revenue
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
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">$24,563.00</p>
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
              <span>12% from last month</span>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-400">
                Active Orders
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
                className="text-blue-500"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                <path d="M12 11h4" />
                <path d="M12 16h4" />
                <path d="M8 11h.01" />
                <path d="M8 16h.01" />
              </svg>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">237</p>
            <div className="mt-2 flex items-center text-xs text-blue-500">
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
              <span>8% from last week</span>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-400">
                Inventory Items
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
                className="text-amber-500"
              >
                <path d="m7.5 4.27 9 5.15" />
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">1,856</p>
            <div className="mt-2 flex items-center text-xs text-red-500">
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
              <span>3% from last month</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-white">Modules</h2>
          <ModuleGrid />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
