import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const LegalOverview = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">Active Cases</h3>
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
        <p className="mt-2 text-3xl font-bold text-white">24</p>
        <div className="mt-2 flex items-center text-xs text-amber-500">
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
          <span>3 new cases this month</span>
        </div>
      </Card>

      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Contracts Pending Review
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
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
            <path d="M10 9H8" />
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
            <path d="M12 5v14" />
            <path d="M19 12H5" />
          </svg>
          <span>5 high priority</span>
        </div>
      </Card>

      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Compliance Status
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
          <span>2% from last quarter</span>
        </div>
      </Card>

      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">IP Portfolio</h3>
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
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <p className="mt-2 text-3xl font-bold text-white">78</p>
        <div className="mt-2 flex items-center text-xs text-amber-500">
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
            <path d="M12 5v14" />
            <path d="M19 12H5" />
          </svg>
          <span>3 renewals due</span>
        </div>
      </Card>

      {/* Case Status */}
      <Card className="border-slate-800 bg-slate-900 p-6 md:col-span-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">Case Status</h3>
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
            <path d="M3 3v18h18" />
            <path d="m3 15 4-4a3 3 0 0 1 4 0l5 5" />
            <path d="m14 14 1-1a3 3 0 0 1 4 0l2 2" />
          </svg>
        </div>
        <div className="mt-4 space-y-3">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Active (24)</span>
              <span>48%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: "48%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Pending (15)</span>
              <span>30%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-amber-500 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Resolved (8)</span>
              <span>16%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-emerald-500 rounded-full"
                style={{ width: "16%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Closed (3)</span>
              <span>6%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-slate-500 rounded-full"
                style={{ width: "6%" }}
              ></div>
            </div>
          </div>
        </div>
      </Card>

      {/* Contract Types */}
      <Card className="border-slate-800 bg-slate-900 p-6 md:col-span-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">Contract Types</h3>
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
            <path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
          </svg>
        </div>
        <div className="mt-4 space-y-3">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Vendor Agreements (32)</span>
              <span>35%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-cyan-500 rounded-full"
                style={{ width: "35%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Employment Contracts (28)</span>
              <span>30%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-purple-500 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>NDAs (15)</span>
              <span>16%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-emerald-500 rounded-full"
                style={{ width: "16%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Licensing Agreements (12)</span>
              <span>13%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-amber-500 rounded-full"
                style={{ width: "13%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Other (6)</span>
              <span>6%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-slate-500 rounded-full"
                style={{ width: "6%" }}
              ></div>
            </div>
          </div>
        </div>
      </Card>

      {/* Recent Activities */}
      <Card className="border-slate-800 bg-slate-900 p-6 md:col-span-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Recent Activities
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
            <path d="M12 2v4" />
            <path d="M12 18v4" />
            <path d="M4.93 4.93l2.83 2.83" />
            <path d="M16.24 16.24l2.83 2.83" />
            <path d="M2 12h4" />
            <path d="M18 12h4" />
            <path d="M4.93 19.07l2.83-2.83" />
            <path d="M16.24 7.76l2.83-2.83" />
          </svg>
        </div>
        <div className="mt-4 space-y-3">
          {[
            {
              action: "Contract approved",
              subject: "Vendor Agreement with Acme Corp",
              time: "10 minutes ago",
              icon: (
                <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
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
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              ),
            },
            {
              action: "New case assigned to",
              subject: "Sarah Johnson",
              time: "25 minutes ago",
              icon: (
                <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
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
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
              ),
            },
            {
              action: "Compliance alert",
              subject: "GDPR Documentation Update Required",
              time: "1 hour ago",
              icon: (
                <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
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
                  >
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
              ),
            },
            {
              action: "Patent application filed",
              subject: "New Product Technology",
              time: "2 hours ago",
              icon: (
                <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
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
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
              ),
            },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3">
              {activity.icon}
              <div>
                <p className="text-sm text-slate-300">
                  {activity.action}{" "}
                  <span className="font-medium text-white">
                    {activity.subject}
                  </span>
                </p>
                <p className="text-xs text-slate-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Upcoming Deadlines */}
      <Card className="border-slate-800 bg-slate-900 p-6 md:col-span-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Upcoming Deadlines
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
        <div className="mt-4 space-y-3">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Contract Renewal - Tech Solutions Inc</span>
              <span className="text-red-500">2 days</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-red-500 rounded-full"
                style={{ width: "10%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Trademark Renewal - Brand Logo</span>
              <span className="text-amber-500">7 days</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-amber-500 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Legal Brief Submission - Smith v. Company</span>
              <span className="text-amber-500">10 days</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-amber-500 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Regulatory Filing - Q3 Compliance Report</span>
              <span className="text-blue-500">15 days</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LegalOverview;
