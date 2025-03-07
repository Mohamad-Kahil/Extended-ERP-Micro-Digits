import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const MaintenanceOverview = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Open Work Orders
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
        <p className="mt-2 text-3xl font-bold text-white">42</p>
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
          <span>8 new orders today</span>
        </div>
      </Card>

      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Scheduled Maintenance
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
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
          </svg>
        </div>
        <p className="mt-2 text-3xl font-bold text-white">18</p>
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
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span>3 completed today</span>
        </div>
      </Card>

      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">Asset Uptime</h3>
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
        <p className="mt-2 text-3xl font-bold text-white">97.2%</p>
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
          <span>1.5% from last month</span>
        </div>
      </Card>

      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Inventory Status
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
            <path d="M20 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
            <path d="M2 4v16" />
            <path d="M8 10h8" />
            <path d="M8 14h4" />
          </svg>
        </div>
        <p className="mt-2 text-3xl font-bold text-white">85%</p>
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
            <path d="m19 12-7 7-7-7" />
            <path d="M12 19V5" />
          </svg>
          <span>12 parts low in stock</span>
        </div>
      </Card>

      {/* Work Order Status */}
      <Card className="border-slate-800 bg-slate-900 p-6 md:col-span-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Work Order Status
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
            <path d="M3 3v18h18" />
            <path d="m3 15 4-4a3 3 0 0 1 4 0l5 5" />
            <path d="m14 14 1-1a3 3 0 0 1 4 0l2 2" />
          </svg>
        </div>
        <div className="mt-4 space-y-3">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Open (42)</span>
              <span>42%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-amber-500 rounded-full"
                style={{ width: "42%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>In Progress (28)</span>
              <span>28%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: "28%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>On Hold (12)</span>
              <span>12%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-purple-500 rounded-full"
                style={{ width: "12%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Completed (18)</span>
              <span>18%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-emerald-500 rounded-full"
                style={{ width: "18%" }}
              ></div>
            </div>
          </div>
        </div>
      </Card>

      {/* Maintenance by Type */}
      <Card className="border-slate-800 bg-slate-900 p-6 md:col-span-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Maintenance by Type
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
            <path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
          </svg>
        </div>
        <div className="mt-4 space-y-3">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Preventive (35)</span>
              <span>35%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-emerald-500 rounded-full"
                style={{ width: "35%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Corrective (45)</span>
              <span>45%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-amber-500 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Predictive (12)</span>
              <span>12%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: "12%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Emergency (8)</span>
              <span>8%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-red-500 rounded-full"
                style={{ width: "8%" }}
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
              action: "Work order completed",
              subject: "HVAC System Maintenance",
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
              action: "New work order assigned to",
              subject: "John Smith",
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
              action: "Inventory alert",
              subject: "Hydraulic Filters Low Stock",
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
              action: "Emergency maintenance required",
              subject: "Production Line #3",
              time: "2 hours ago",
              icon: (
                <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
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
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
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

      {/* Technician Performance */}
      <Card className="border-slate-800 bg-slate-900 p-6 md:col-span-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-400">
            Technician Performance
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div className="mt-4 space-y-3">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>John Smith</span>
              <span>18 work orders (92% on time)</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-emerald-500 rounded-full"
                style={{ width: "92%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Sarah Johnson</span>
              <span>15 work orders (88% on time)</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-emerald-500 rounded-full"
                style={{ width: "88%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Michael Chen</span>
              <span>12 work orders (95% on time)</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-emerald-500 rounded-full"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Emily Davis</span>
              <span>10 work orders (85% on time)</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className="h-2 bg-emerald-500 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MaintenanceOverview;
