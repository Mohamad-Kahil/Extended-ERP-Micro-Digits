import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BudgetOverviewProps {
  searchTerm: string;
}

const BudgetOverview = ({ searchTerm }: BudgetOverviewProps) => {
  const [selectedYear, setSelectedYear] = React.useState("2023");
  const [selectedQuarter, setSelectedQuarter] = React.useState("Q2");

  // Sample data for budget vs actual
  const budgetData = [
    {
      category: "Revenue",
      budget: 1500000,
      actual: 1245300,
      variance: -254700,
    },
    {
      category: "Cost of Goods Sold",
      budget: 750000,
      actual: 623400,
      variance: 126600,
    },
    {
      category: "Gross Profit",
      budget: 750000,
      actual: 621900,
      variance: -128100,
    },
    {
      category: "Operating Expenses",
      budget: 300000,
      actual: 253020,
      variance: 46980,
    },
    {
      category: "Net Profit",
      budget: 450000,
      actual: 368880,
      variance: -81120,
    },
  ];

  // Sample data for department budgets
  const departmentBudgets = [
    {
      department: "Sales & Marketing",
      budget: 150000,
      actual: 142500,
      remaining: 7500,
    },
    {
      department: "Research & Development",
      budget: 200000,
      actual: 175000,
      remaining: 25000,
    },
    {
      department: "Operations",
      budget: 120000,
      actual: 110000,
      remaining: 10000,
    },
    {
      department: "Human Resources",
      budget: 80000,
      actual: 75000,
      remaining: 5000,
    },
    {
      department: "IT & Infrastructure",
      budget: 100000,
      actual: 90000,
      remaining: 10000,
    },
    {
      department: "Administration",
      budget: 50000,
      actual: 48000,
      remaining: 2000,
    },
  ];

  // Filter departments based on search term
  const filteredDepartments = departmentBudgets.filter((dept) =>
    dept.department.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedQuarter} onValueChange={setSelectedQuarter}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select Quarter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Q1">Q1</SelectItem>
              <SelectItem value="Q2">Q2</SelectItem>
              <SelectItem value="Q3">Q3</SelectItem>
              <SelectItem value="Q4">Q4</SelectItem>
              <SelectItem value="Annual">Annual</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Budget vs. Actual
            </h3>
            <div className="space-y-4">
              {budgetData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">
                      {item.category}
                    </span>
                    <span
                      className={`text-sm font-semibold ${item.variance >= 0 ? "text-emerald-500" : "text-red-500"}`}
                    >
                      {item.variance >= 0 ? "+" : ""}
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(item.variance)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 flex-1 rounded-full bg-slate-700">
                      <div
                        className={`h-2 rounded-full ${item.category === "Cost of Goods Sold" || item.category === "Operating Expenses" ? (item.actual <= item.budget ? "bg-emerald-500" : "bg-red-500") : item.actual >= item.budget ? "bg-emerald-500" : "bg-red-500"}`}
                        style={{
                          width: `${Math.min(100, (item.actual / item.budget) * 100)}%`,
                        }}
                      ></div>
                    </div>
                    <span className="w-24 text-right text-xs text-slate-400">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(item.actual)}
                      {" / "}
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(item.budget)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Department Budgets
            </h3>
            <div className="space-y-4">
              {filteredDepartments.map((dept, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">
                      {dept.department}
                    </span>
                    <span className="text-sm font-semibold text-emerald-500">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(dept.remaining)}
                      {" remaining"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 flex-1 rounded-full bg-slate-700">
                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{
                          width: `${(dept.actual / dept.budget) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="w-24 text-right text-xs text-slate-400">
                      {Math.round((dept.actual / dept.budget) * 100)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-800/50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">
              Financial Forecast
            </h3>
            <Select defaultValue="12">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Forecast Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3 Months</SelectItem>
                <SelectItem value="6">6 Months</SelectItem>
                <SelectItem value="12">12 Months</SelectItem>
                <SelectItem value="24">24 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4 h-64 rounded-md border border-slate-700 bg-slate-800/30 p-4">
            <div className="flex h-full items-center justify-center">
              <p className="text-slate-400">
                Financial forecast chart will be displayed here
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetOverview;
