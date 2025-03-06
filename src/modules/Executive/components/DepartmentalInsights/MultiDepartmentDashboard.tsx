import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MultiDepartmentDashboardProps {
  isFinance?: boolean;
  isHR?: boolean;
  isOperations?: boolean;
}

const MultiDepartmentDashboard = ({
  isFinance = false,
  isHR = false,
  isOperations = false,
}: MultiDepartmentDashboardProps) => {
  const [timeRange, setTimeRange] = React.useState("quarterly");

  // Department performance data
  const departmentData = {
    finance: {
      performance: 92,
      trend: "up",
      change: 3.5,
      metrics: [
        { name: "Revenue Growth", value: "10.5%", status: "positive" },
        { name: "Profit Margin", value: "24.8%", status: "positive" },
        { name: "Operating Expenses", value: "$2.4M", status: "neutral" },
        { name: "Cash Flow", value: "$1.6M", status: "positive" },
      ],
      alerts: [
        { message: "Q4 budget planning due in 2 weeks", priority: "medium" },
        {
          message: "Tax compliance audit scheduled for next month",
          priority: "high",
        },
      ],
    },
    hr: {
      performance: 87,
      trend: "up",
      change: 2.1,
      metrics: [
        { name: "Employee Retention", value: "94.5%", status: "positive" },
        { name: "Time to Hire", value: "24 days", status: "neutral" },
        { name: "Training Completion", value: "82%", status: "positive" },
        { name: "Employee Satisfaction", value: "4.2/5", status: "positive" },
      ],
      alerts: [
        {
          message: "Annual performance reviews starting next week",
          priority: "medium",
        },
        {
          message: "5 key positions still open in Engineering",
          priority: "high",
        },
      ],
    },
    operations: {
      performance: 89,
      trend: "up",
      change: 4.2,
      metrics: [
        { name: "On-Time Delivery", value: "92%", status: "positive" },
        { name: "Quality Score", value: "94%", status: "positive" },
        { name: "Inventory Turnover", value: "12.5x", status: "positive" },
        { name: "Production Efficiency", value: "85%", status: "neutral" },
      ],
      alerts: [
        {
          message: "Supply chain disruption affecting raw materials",
          priority: "high",
        },
        {
          message: "Maintenance scheduled for production line B",
          priority: "medium",
        },
      ],
    },
    marketing: {
      performance: 85,
      trend: "up",
      change: 5.8,
      metrics: [
        { name: "Customer Acquisition", value: "$42", status: "positive" },
        { name: "Conversion Rate", value: "3.8%", status: "positive" },
        { name: "Campaign ROI", value: "285%", status: "positive" },
        { name: "Market Share", value: "28.5%", status: "neutral" },
      ],
      alerts: [
        {
          message: "Q4 marketing campaign launch in 3 weeks",
          priority: "medium",
        },
        {
          message: "Social media engagement down 5% this month",
          priority: "medium",
        },
      ],
    },
    sales: {
      performance: 91,
      trend: "up",
      change: 2.7,
      metrics: [
        { name: "Sales Growth", value: "12.5%", status: "positive" },
        { name: "Deal Closure Rate", value: "32%", status: "positive" },
        { name: "Average Deal Size", value: "$48K", status: "positive" },
        { name: "Sales Cycle Length", value: "45 days", status: "neutral" },
      ],
      alerts: [
        { message: "Enterprise deal pipeline at record high", priority: "low" },
        {
          message: "New sales incentive program launching next quarter",
          priority: "medium",
        },
      ],
    },
    it: {
      performance: 88,
      trend: "up",
      change: 1.5,
      metrics: [
        { name: "System Uptime", value: "99.98%", status: "positive" },
        { name: "Ticket Resolution", value: "92%", status: "positive" },
        { name: "Security Incidents", value: "0", status: "positive" },
        { name: "Project Completion", value: "85%", status: "neutral" },
      ],
      alerts: [
        {
          message: "Major system upgrade scheduled for next weekend",
          priority: "high",
        },
        { message: "Cloud migration 75% complete", priority: "medium" },
      ],
    },
  };

  // Determine which departments to show based on props
  const departments = isFinance
    ? ["finance"]
    : isHR
      ? ["hr"]
      : isOperations
        ? ["operations"]
        : ["finance", "hr", "operations", "sales", "marketing", "it"];

  const departmentNames = {
    finance: "Finance",
    hr: "Human Resources",
    operations: "Operations",
    marketing: "Marketing",
    sales: "Sales",
    it: "Information Technology",
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "positive":
        return "text-emerald-500";
      case "negative":
        return "text-red-500";
      case "neutral":
        return "text-amber-500";
      default:
        return "text-slate-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "medium":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "low":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-slate-500/10 text-slate-500 border-slate-500/20";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <h3 className="text-lg font-semibold text-white">
          {isFinance
            ? "Finance Department Dashboard"
            : isHR
              ? "Human Resources Dashboard"
              : isOperations
                ? "Operations Dashboard"
                : "Cross-Departmental Performance"}
        </h3>
        <div className="flex space-x-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="h-10">
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
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
            View Details
          </Button>
        </div>
      </div>

      {!isFinance && !isHR && !isOperations && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {Object.entries(departmentData).map(([dept, data]) => (
            <Card key={dept} className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium text-white">
                    {departmentNames[dept as keyof typeof departmentNames]}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">
                      {data.performance}
                    </span>
                    <div
                      className={`flex items-center text-sm ${data.trend === "up" ? "text-emerald-500" : "text-red-500"}`}
                    >
                      {data.trend === "up" ? (
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
                          className="mr-1"
                        >
                          <path d="m5 12 7-7 7 7" />
                          <path d="M12 19V5" />
                        </svg>
                      ) : (
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
                          className="mr-1"
                        >
                          <path d="m19 12-7 7-7-7" />
                          <path d="M12 5v14" />
                        </svg>
                      )}
                      <span>{data.change}%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {data.metrics.slice(0, 4).map((metric, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-slate-700 bg-slate-800 p-2"
                    >
                      <div className="text-xs font-medium text-slate-400">
                        {metric.name}
                      </div>
                      <div
                        className={`mt-1 text-sm font-bold ${getStatusColor(metric.status)}`}
                      >
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {data.alerts && data.alerts.length > 0 && (
                  <div className="mt-4">
                    <h5 className="mb-2 text-sm font-medium text-slate-400">
                      Alerts
                    </h5>
                    <div className="space-y-2">
                      {data.alerts.map((alert, index) => (
                        <div
                          key={index}
                          className={`rounded-lg border p-2 text-xs ${getPriorityColor(alert.priority)}`}
                        >
                          {alert.message}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {(isFinance || isHR || isOperations) && (
        <div className="space-y-6">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-medium text-white">
                  {
                    departmentNames[
                      departments[0] as keyof typeof departmentNames
                    ]
                  }{" "}
                  Performance
                </h4>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-white">
                    {
                      departmentData[
                        departments[0] as keyof typeof departmentData
                      ].performance
                    }
                  </span>
                  <div
                    className={`flex items-center text-sm ${departmentData[departments[0] as keyof typeof departmentData].trend === "up" ? "text-emerald-500" : "text-red-500"}`}
                  >
                    {departmentData[
                      departments[0] as keyof typeof departmentData
                    ].trend === "up" ? (
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
                        className="mr-1"
                      >
                        <path d="m5 12 7-7 7 7" />
                        <path d="M12 19V5" />
                      </svg>
                    ) : (
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
                        className="mr-1"
                      >
                        <path d="m19 12-7 7-7-7" />
                        <path d="M12 5v14" />
                      </svg>
                    )}
                    <span>
                      {
                        departmentData[
                          departments[0] as keyof typeof departmentData
                        ].change
                      }
                      %
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
                {departmentData[
                  departments[0] as keyof typeof departmentData
                ].metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-slate-700 bg-slate-800 p-4"
                  >
                    <div className="text-sm font-medium text-slate-400">
                      {metric.name}
                    </div>
                    <div
                      className={`mt-2 text-xl font-bold ${getStatusColor(metric.status)}`}
                    >
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h5 className="mb-3 text-lg font-medium text-white">
                  Performance Trends
                </h5>
                <div className="h-64 w-full rounded-lg border border-slate-700 bg-slate-800 p-4">
                  <div className="flex h-full items-end space-x-8">
                    {["Q1", "Q2", "Q3", "Q4"].map((quarter, index) => {
                      const height = [65, 72, 80, 92][index];
                      return (
                        <div
                          key={quarter}
                          className="flex flex-1 flex-col items-center"
                        >
                          <div
                            className="w-full rounded-t bg-cyan-500"
                            style={{ height: `${height}%` }}
                          ></div>
                          <div className="mt-2 text-xs text-slate-400">
                            {quarter}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {departmentData[departments[0] as keyof typeof departmentData]
                .alerts && (
                <div className="mt-6">
                  <h5 className="mb-3 text-lg font-medium text-white">
                    Department Alerts
                  </h5>
                  <div className="space-y-3">
                    {departmentData[
                      departments[0] as keyof typeof departmentData
                    ].alerts.map((alert, index) => (
                      <div
                        key={index}
                        className={`rounded-lg border p-3 ${getPriorityColor(alert.priority)}`}
                      >
                        <div className="flex items-center">
                          {alert.priority === "high" ? (
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
                              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                              <line x1="12" x2="12" y1="9" y2="13" />
                              <line x1="12" x2="12.01" y1="17" y2="17" />
                            </svg>
                          ) : (
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
                              <circle cx="12" cy="12" r="10" />
                              <line x1="12" x2="12" y1="8" y2="12" />
                              <line x1="12" x2="12.01" y1="16" y2="16" />
                            </svg>
                          )}
                          <span>{alert.message}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-800/50">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                {
                  departmentNames[
                    departments[0] as keyof typeof departmentNames
                  ]
                }{" "}
                Summary
              </h3>
              <p className="text-slate-300">
                {isFinance
                  ? "The Finance department is performing strongly with a 92 performance score, up 3.5% from last quarter. Revenue growth remains robust at 10.5%, and profit margins are healthy at 24.8%. Cash flow is positive at $1.6M, providing strong liquidity for operations and investments. The department is currently preparing for Q4 budget planning and an upcoming tax compliance audit."
                  : isHR
                    ? "Human Resources is showing solid performance with an 87 score, up 2.1% from last quarter. Employee retention remains high at 94.5%, while satisfaction scores have improved to 4.2/5. Training completion rates are at 82%, showing good progress toward development goals. Current focus areas include completing annual performance reviews and filling 5 key engineering positions."
                    : "Operations is demonstrating excellent performance with an 89 score, up 4.2% from last quarter. On-time delivery has improved to 92%, and quality scores remain high at 94%. Inventory turnover is efficient at 12.5x, though production efficiency at 85% has room for improvement. The department is currently managing a supply chain disruption affecting raw materials and preparing for scheduled maintenance."}
              </p>

              <div className="mt-6 flex justify-end space-x-4">
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
                  Download Report
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
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                  View Detailed Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {!isFinance && !isHR && !isOperations && (
        <div className="mt-6">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Cross-Departmental Summary
              </h3>
              <p className="text-slate-300">
                All departments are showing positive performance trends this
                quarter, with an average improvement of 3.3% across the
                organization. Finance leads with a 92 performance score,
                followed by Sales at 91 and Operations at 89. The strongest
                growth is in Marketing, which improved 5.8% this quarter. Key
                areas requiring attention include supply chain disruptions
                affecting Operations, open engineering positions in HR, and the
                upcoming system upgrade in IT. Overall organizational health is
                strong with positive indicators across all major departments.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                  <h4 className="text-sm font-medium text-slate-400">
                    Overall Health
                  </h4>
                  <p className="mt-1 text-xl font-bold text-emerald-500">
                    Strong
                  </p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                  <h4 className="text-sm font-medium text-slate-400">
                    Growth Trend
                  </h4>
                  <p className="mt-1 text-xl font-bold text-emerald-500">
                    Positive
                  </p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                  <h4 className="text-sm font-medium text-slate-400">
                    Risk Assessment
                  </h4>
                  <p className="mt-1 text-xl font-bold text-amber-500">Low</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MultiDepartmentDashboard;
