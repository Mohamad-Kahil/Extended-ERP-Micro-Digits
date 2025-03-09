import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdministrativeServicesOverview = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Administrative Services Dashboard
        </h2>
        <div className="flex space-x-2">
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
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            New Request
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Active Leases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-slate-500">3 renewals due in 30 days</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Supply Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">28</div>
            <p className="text-xs text-emerald-500">↑ 12% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Maintenance Tickets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">17</div>
            <p className="text-xs text-amber-500">5 high priority</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Document Renewals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">8</div>
            <p className="text-xs text-red-500">3 expiring this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Office Lease Renewal",
                  description: "Main HQ lease renewal processed",
                  date: "Today",
                  icon: (
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
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                      <path d="M12 3v6" />
                    </svg>
                  ),
                },
                {
                  title: "Employee Residency Renewal",
                  description: "5 employee residency permits processed",
                  date: "Yesterday",
                  icon: (
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
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  ),
                },
                {
                  title: "Office Supplies Order",
                  description: "Monthly office supplies order placed",
                  date: "2 days ago",
                  icon: (
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
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  ),
                },
                {
                  title: "Maintenance Request",
                  description: "AC repair in meeting room completed",
                  date: "3 days ago",
                  icon: (
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
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  ),
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 rounded-full bg-slate-800 p-1">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white">
                      {activity.title}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {activity.description}
                    </p>
                  </div>
                  <div className="text-xs text-slate-500">{activity.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Upcoming Renewals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Trade License",
                  description: "Main business trade license renewal",
                  dueDate: "15 Nov 2023",
                  status: "Critical",
                  statusColor: "bg-red-500",
                },
                {
                  title: "Employee Residency",
                  description: "Ahmed Khalid - Senior Developer",
                  dueDate: "22 Nov 2023",
                  status: "Upcoming",
                  statusColor: "bg-amber-500",
                },
                {
                  title: "Office Lease",
                  description: "Branch office - Dubai Media City",
                  dueDate: "30 Nov 2023",
                  status: "Upcoming",
                  statusColor: "bg-amber-500",
                },
                {
                  title: "Insurance Policy",
                  description: "Office contents insurance renewal",
                  dueDate: "05 Dec 2023",
                  status: "Planned",
                  statusColor: "bg-emerald-500",
                },
                {
                  title: "Employee Residency",
                  description: "Sarah Johnson - Marketing Director",
                  dueDate: "12 Dec 2023",
                  status: "Planned",
                  statusColor: "bg-emerald-500",
                },
              ].map((renewal, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md border border-slate-800 p-3 hover:bg-slate-800/50"
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white">
                      {renewal.title}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {renewal.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-xs text-slate-400">
                      {renewal.dueDate}
                    </div>
                    <div
                      className={`h-2 w-2 rounded-full ${renewal.statusColor}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Office Supplies Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Printer Paper",
                  current: 65,
                  status: "Adequate",
                  statusColor: "bg-emerald-500",
                },
                {
                  name: "Ink Cartridges",
                  current: 30,
                  status: "Low",
                  statusColor: "bg-amber-500",
                },
                {
                  name: "Stationery",
                  current: 80,
                  status: "Adequate",
                  statusColor: "bg-emerald-500",
                },
                {
                  name: "Cleaning Supplies",
                  current: 15,
                  status: "Critical",
                  statusColor: "bg-red-500",
                },
              ].map((supply, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">{supply.name}</span>
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-xs text-white ${supply.statusColor}`}
                    >
                      {supply.current}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-800">
                    <div
                      className={`h-2 rounded-full ${supply.statusColor}`}
                      style={{ width: `${supply.current}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Helpdesk Tickets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-white">24</div>
                  <p className="text-xs text-slate-400">Active tickets</p>
                </div>
                <div className="flex space-x-1">
                  <div className="flex flex-col items-center rounded-md bg-slate-800 px-2 py-1">
                    <span className="text-xs font-medium text-red-500">5</span>
                    <span className="text-[10px] text-slate-500">High</span>
                  </div>
                  <div className="flex flex-col items-center rounded-md bg-slate-800 px-2 py-1">
                    <span className="text-xs font-medium text-amber-500">
                      12
                    </span>
                    <span className="text-[10px] text-slate-500">Medium</span>
                  </div>
                  <div className="flex flex-col items-center rounded-md bg-slate-800 px-2 py-1">
                    <span className="text-xs font-medium text-emerald-500">
                      7
                    </span>
                    <span className="text-[10px] text-slate-500">Low</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {[
                  {
                    id: "TKT-1082",
                    title: "AC not working in meeting room",
                    priority: "High",
                    priorityColor: "bg-red-500",
                  },
                  {
                    id: "TKT-1081",
                    title: "Printer configuration issue",
                    priority: "Medium",
                    priorityColor: "bg-amber-500",
                  },
                  {
                    id: "TKT-1080",
                    title: "Request for additional monitor",
                    priority: "Low",
                    priorityColor: "bg-emerald-500",
                  },
                ].map((ticket, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-md border border-slate-800 p-2 hover:bg-slate-800/50"
                  >
                    <div className="flex items-center space-x-2">
                      <div
                        className={`h-2 w-2 rounded-full ${ticket.priorityColor}`}
                      ></div>
                      <div className="text-xs font-medium text-slate-400">
                        {ticket.id}
                      </div>
                    </div>
                    <div className="text-xs text-white">{ticket.title}</div>
                    <div
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium text-white ${ticket.priorityColor}`}
                    >
                      {ticket.priority}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Monthly Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-2xl font-bold text-white">$42,580</div>
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
                <span>3.2% under budget</span>
              </div>

              <div className="space-y-2">
                {[
                  {
                    category: "Rent & Leases",
                    amount: "$28,500",
                    percentage: 67,
                    color: "bg-cyan-500",
                  },
                  {
                    category: "Utilities",
                    amount: "$5,230",
                    percentage: 12,
                    color: "bg-purple-500",
                  },
                  {
                    category: "Office Supplies",
                    amount: "$3,850",
                    percentage: 9,
                    color: "bg-amber-500",
                  },
                  {
                    category: "Maintenance",
                    amount: "$5,000",
                    percentage: 12,
                    color: "bg-emerald-500",
                  },
                ].map((expense, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        {expense.category}
                      </span>
                      <span className="text-xs font-medium text-white">
                        {expense.amount}
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-800">
                      <div
                        className={`h-1.5 rounded-full ${expense.color}`}
                        style={{ width: `${expense.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdministrativeServicesOverview;
