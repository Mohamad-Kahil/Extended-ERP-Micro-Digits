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

interface FinancialKPIsProps {
  isEmployee?: boolean;
  isOperational?: boolean;
}

const FinancialKPIs = ({
  isEmployee = false,
  isOperational = false,
}: FinancialKPIsProps) => {
  const [timeRange, setTimeRange] = React.useState("quarterly");

  // Financial KPI data
  const financialData = {
    revenue: [
      { period: "Q1", value: 3200000 },
      { period: "Q2", value: 3600000 },
      { period: "Q3", value: 3800000 },
      { period: "Q4", value: 4200000 },
    ],
    expenses: [
      { period: "Q1", value: 1800000 },
      { period: "Q2", value: 2000000 },
      { period: "Q3", value: 2100000 },
      { period: "Q4", value: 2400000 },
    ],
    profit: [
      { period: "Q1", value: 1400000 },
      { period: "Q2", value: 1600000 },
      { period: "Q3", value: 1700000 },
      { period: "Q4", value: 1800000 },
    ],
    cashFlow: [
      { period: "Q1", value: 1200000 },
      { period: "Q2", value: 1400000 },
      { period: "Q3", value: 1500000 },
      { period: "Q4", value: 1600000 },
    ],
  };

  // Employee KPI data
  const employeeData = {
    productivity: [
      { period: "Q1", value: 82 },
      { period: "Q2", value: 85 },
      { period: "Q3", value: 87 },
      { period: "Q4", value: 90 },
    ],
    retention: [
      { period: "Q1", value: 92 },
      { period: "Q2", value: 93 },
      { period: "Q3", value: 94 },
      { period: "Q4", value: 95 },
    ],
    satisfaction: [
      { period: "Q1", value: 78 },
      { period: "Q2", value: 80 },
      { period: "Q3", value: 83 },
      { period: "Q4", value: 85 },
    ],
    training: [
      { period: "Q1", value: 65 },
      { period: "Q2", value: 70 },
      { period: "Q3", value: 75 },
      { period: "Q4", value: 80 },
    ],
  };

  // Operational KPI data
  const operationalData = {
    efficiency: [
      { period: "Q1", value: 76 },
      { period: "Q2", value: 79 },
      { period: "Q3", value: 82 },
      { period: "Q4", value: 85 },
    ],
    quality: [
      { period: "Q1", value: 88 },
      { period: "Q2", value: 90 },
      { period: "Q3", value: 92 },
      { period: "Q4", value: 94 },
    ],
    onTimeDelivery: [
      { period: "Q1", value: 85 },
      { period: "Q2", value: 87 },
      { period: "Q3", value: 89 },
      { period: "Q4", value: 92 },
    ],
    customerSatisfaction: [
      { period: "Q1", value: 87 },
      { period: "Q2", value: 89 },
      { period: "Q3", value: 91 },
      { period: "Q4", value: 92 },
    ],
  };

  // Determine which data to use based on props
  const data = isEmployee
    ? employeeData
    : isOperational
      ? operationalData
      : financialData;
  const metrics = isEmployee
    ? ["productivity", "retention", "satisfaction", "training"]
    : isOperational
      ? ["efficiency", "quality", "onTimeDelivery", "customerSatisfaction"]
      : ["revenue", "expenses", "profit", "cashFlow"];

  // Type assertion to help TypeScript understand the data structure
  type MetricDataType = { period: string; value: number }[];

  const metricLabels = {
    // Financial
    revenue: "Revenue",
    expenses: "Expenses",
    profit: "Net Profit",
    cashFlow: "Cash Flow",
    // Employee
    productivity: "Productivity",
    retention: "Retention Rate",
    satisfaction: "Satisfaction",
    training: "Training Completion",
    // Operational
    efficiency: "Operational Efficiency",
    quality: "Quality Score",
    onTimeDelivery: "On-Time Delivery",
    customerSatisfaction: "Customer Satisfaction",
  };

  const metricColors = {
    // Financial
    revenue: "bg-cyan-500",
    expenses: "bg-red-500",
    profit: "bg-emerald-500",
    cashFlow: "bg-blue-500",
    // Employee
    productivity: "bg-purple-500",
    retention: "bg-emerald-500",
    satisfaction: "bg-amber-500",
    training: "bg-blue-500",
    // Operational
    efficiency: "bg-cyan-500",
    quality: "bg-emerald-500",
    onTimeDelivery: "bg-amber-500",
    customerSatisfaction: "bg-purple-500",
  };

  const formatValue = (value: number, metric: string) => {
    if (
      metric === "revenue" ||
      metric === "expenses" ||
      metric === "profit" ||
      metric === "cashFlow"
    ) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
        maximumFractionDigits: 1,
      }).format(value);
    } else {
      return `${value}%`;
    }
  };

  const getPercentageChange = (currentValue: number, previousValue: number) => {
    return ((currentValue - previousValue) / previousValue) * 100;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <h3 className="text-lg font-semibold text-white">
          {isEmployee
            ? "Employee Performance Metrics"
            : isOperational
              ? "Operational Performance Metrics"
              : "Financial Performance Metrics"}
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {metrics.map((metric) => {
          const metricData = data[
            metric as keyof typeof data
          ] as MetricDataType;
          const currentValue = metricData[metricData.length - 1].value;
          const previousValue = metricData[metricData.length - 2].value;
          const percentageChange = getPercentageChange(
            currentValue,
            previousValue,
          );
          const isPositive = percentageChange > 0;
          const isNegative = percentageChange < 0;
          const changeColor = isPositive
            ? "text-emerald-500"
            : isNegative
              ? "text-red-500"
              : "text-slate-500";

          // For expenses, negative change is good
          const adjustedChangeColor =
            metric === "expenses"
              ? isNegative
                ? "text-emerald-500"
                : isPositive
                  ? "text-red-500"
                  : "text-slate-500"
              : changeColor;

          return (
            <Card key={metric} className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium text-white">
                    {metricLabels[metric as keyof typeof metricLabels]}
                  </h4>
                  <span
                    className={`flex items-center space-x-1 text-sm font-medium ${adjustedChangeColor}`}
                  >
                    {isPositive ? (
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
                        <path d="m5 12 7-7 7 7" />
                        <path d="M12 19V5" />
                      </svg>
                    ) : isNegative ? (
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
                        <path d="m19 12-7 7-7-7" />
                        <path d="M12 5v14" />
                      </svg>
                    ) : null}
                    <span>{Math.abs(percentageChange).toFixed(1)}%</span>
                  </span>
                </div>
                <div className="mt-2 text-3xl font-bold text-white">
                  {formatValue(currentValue, metric)}
                </div>
                <div className="mt-4">
                  <div className="h-16 w-full">
                    <div className="flex h-full items-end space-x-2">
                      {metricData.map((item, index) => {
                        const maxValue = Math.max(
                          ...metricData.map((d) => d.value),
                        );
                        const height = (item.value / maxValue) * 100;
                        return (
                          <div
                            key={index}
                            className="flex flex-1 flex-col items-center"
                          >
                            <div
                              className={`w-full ${metricColors[metric as keyof typeof metricColors]}`}
                              style={{ height: `${height}%` }}
                            ></div>
                            <div className="mt-2 text-xs text-slate-400">
                              {item.period}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-6">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              {isEmployee
                ? "Employee Performance Summary"
                : isOperational
                  ? "Operational Performance Summary"
                  : "Financial Performance Summary"}
            </h3>
            <p className="text-slate-300">
              {isEmployee
                ? "Employee performance metrics show positive trends across all key indicators. Productivity has increased by 3% quarter-over-quarter, while retention rates remain strong at 95%. Employee satisfaction has improved significantly, with a 2% increase from the previous quarter. Training completion rates have also improved, with 80% of employees completing required training programs."
                : isOperational
                  ? "Operational metrics demonstrate strong performance across all areas. Efficiency has improved by 3% this quarter, reaching 85%. Quality scores continue to rise, now at 94%, which is a 2% improvement. On-time delivery has reached 92%, and customer satisfaction remains high at 92%, showing our commitment to operational excellence."
                  : "Financial performance remains strong with revenue growth of 10.5% year-over-year. Expenses have been well-managed, increasing only 7.1% despite expansion efforts. Net profit margins are stable at 42.9%, and cash flow has improved by 6.7% compared to the previous quarter. Overall financial health is excellent with all key metrics trending positively."}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {metrics.map((metric) => {
                const metricData = data[
                  metric as keyof typeof data
                ] as MetricDataType;
                const currentValue = metricData[metricData.length - 1].value;
                const previousValue = metricData[metricData.length - 2].value;
                const percentageChange = getPercentageChange(
                  currentValue,
                  previousValue,
                );
                const isPositive = percentageChange > 0;
                const isNegative = percentageChange < 0;
                const changeColor = isPositive
                  ? "text-emerald-500"
                  : isNegative
                    ? "text-red-500"
                    : "text-slate-500";

                // For expenses, negative change is good
                const adjustedChangeColor =
                  metric === "expenses"
                    ? isNegative
                      ? "text-emerald-500"
                      : isPositive
                        ? "text-red-500"
                        : "text-slate-500"
                    : changeColor;

                return (
                  <div
                    key={metric}
                    className="rounded-lg border border-slate-700 bg-slate-800 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-slate-400">
                        {metricLabels[metric as keyof typeof metricLabels]}
                      </h4>
                      <span
                        className={`flex items-center space-x-1 text-xs font-medium ${adjustedChangeColor}`}
                      >
                        {isPositive ? (
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
                            className="h-3 w-3"
                          >
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                          </svg>
                        ) : isNegative ? (
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
                            className="h-3 w-3"
                          >
                            <path d="m19 12-7 7-7-7" />
                            <path d="M12 5v14" />
                          </svg>
                        ) : null}
                        <span>{Math.abs(percentageChange).toFixed(1)}%</span>
                      </span>
                    </div>
                    <p className="mt-2 text-lg font-bold text-white">
                      {formatValue(currentValue, metric)}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinancialKPIs;
