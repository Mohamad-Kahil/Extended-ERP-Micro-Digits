import React from "react";

const LegalOverview = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Active Contracts
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
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
            <line x1="9" y1="9" x2="10" y2="9" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="15" y2="17" />
          </svg>
        </div>
        <p className="mt-2 text-3xl font-bold text-white">87</p>
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
          <span>5 new this month</span>
        </div>
      </div>

      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
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
            className="text-blue-500"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <p className="mt-2 text-3xl font-bold text-white">94.2%</p>
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
          <span>2.3% from last quarter</span>
        </div>
      </div>

      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Active Legal Cases
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
            <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
          </svg>
        </div>
        <p className="mt-2 text-3xl font-bold text-white">12</p>
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
          <span>3 new cases opened</span>
        </div>
      </div>

      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
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
            className="text-purple-500"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
          </svg>
          <span>Improved from Medium</span>
        </div>
      </div>
    </div>
  );
};

export default LegalOverview;
