import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const InventoryOverview = () => {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-400">
              Total Products
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
              <path d="m7.5 4.27 9 5.15" />
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
            </svg>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">4,285</p>
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
            <span>8.2% from last month</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-400">Stock Value</h3>
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
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">$1.24M</p>
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
            <span>12.5% from last quarter</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-400">
              Low Stock Items
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
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">128</p>
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
              <path d="M12 19V5" />
            </svg>
            <span>15.3% increase from last week</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-400">
              Inventory Turnover
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
              <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
            </svg>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">6.8x</p>
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
            <span>0.5x from industry average</span>
          </div>
        </Card>
      </div>

      {/* Inventory by Category */}
      <Card className="border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-medium text-white mb-4">
          Inventory by Category
        </h3>
        <div className="space-y-4">
          {[
            {
              category: "Electronics",
              count: 1245,
              value: 450000,
              percentage: 36,
              color: "bg-cyan-500",
            },
            {
              category: "Furniture",
              count: 856,
              value: 320000,
              percentage: 26,
              color: "bg-purple-500",
            },
            {
              category: "Clothing",
              count: 1120,
              value: 280000,
              percentage: 22,
              color: "bg-emerald-500",
            },
            {
              category: "Home Appliances",
              count: 645,
              value: 150000,
              percentage: 12,
              color: "bg-amber-500",
            },
            {
              category: "Others",
              count: 419,
              value: 40000,
              percentage: 4,
              color: "bg-blue-500",
            },
          ].map((item) => (
            <div key={item.category} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">{item.category}</span>
                <div className="flex space-x-4">
                  <span className="text-slate-400">{item.count} items</span>
                  <span className="text-white font-medium">
                    ${(item.value / 1000).toFixed(1)}K
                  </span>
                </div>
              </div>
              <Progress
                value={item.percentage}
                className="h-2 bg-slate-700"
                indicatorClassName={item.color}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Inventory Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-medium text-white mb-4">Stock Status</h3>
          <div className="flex h-64 items-center justify-center">
            <div className="relative h-64 w-64">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="10"
                />
                {/* In Stock: 65% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="10"
                  strokeDasharray="251.2"
                  strokeDashoffset="87.92"
                  transform="rotate(-90 50 50)"
                />
                {/* Low Stock: 20% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="10"
                  strokeDasharray="251.2"
                  strokeDashoffset="201.0"
                  strokeDashoffset="87.92"
                  transform="rotate(-90 50 50)"
                />
                {/* Out of Stock: 15% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="10"
                  strokeDasharray="251.2"
                  strokeDashoffset="213.52"
                  strokeDashoffset="50.24"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-white">4,285</span>
                <span className="text-sm text-slate-400">Total Products</span>
              </div>
            </div>
            <div className="ml-8 space-y-4">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-cyan-500 mr-2"></div>
                <span className="text-sm text-slate-300">In Stock (65%)</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                <span className="text-sm text-slate-300">Low Stock (20%)</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm text-slate-300">
                  Out of Stock (15%)
                </span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Inventory Turnover by Month
          </h3>
          <div className="h-64 flex items-end space-x-2">
            {[
              { month: "Jan", value: 5.8 },
              { month: "Feb", value: 6.2 },
              { month: "Mar", value: 6.5 },
              { month: "Apr", value: 6.3 },
              { month: "May", value: 6.7 },
              { month: "Jun", value: 7.1 },
              { month: "Jul", value: 6.9 },
              { month: "Aug", value: 7.2 },
              { month: "Sep", value: 6.8 },
              { month: "Oct", value: 7.0 },
              { month: "Nov", value: 7.3 },
              { month: "Dec", value: 7.5 },
            ].map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-cyan-500 rounded-t"
                  style={{ height: `${(data.value / 7.5) * 100}%` }}
                ></div>
                <span className="text-xs text-slate-400 mt-2">
                  {data.month}
                </span>
                <span className="text-xs font-medium text-white">
                  {data.value}x
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activities & Low Stock Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Recent Activities
          </h3>
          <div className="space-y-4">
            {[
              {
                action: "Stock received",
                subject: "Electronics - Smartphones",
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
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                ),
              },
              {
                action: "Stock transfer",
                subject: "Warehouse A to Warehouse B",
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
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                    </svg>
                  </div>
                ),
              },
              {
                action: "Inventory count",
                subject: "Furniture - Office Chairs",
                time: "1 hour ago",
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
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    </svg>
                  </div>
                ),
              },
              {
                action: "Product added",
                subject: "Clothing - Winter Collection",
                time: "2 hours ago",
                icon: (
                  <div className="h-8 w-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500">
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
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
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

        <Card className="border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Low Stock Alerts
          </h3>
          <div className="space-y-3">
            {[
              {
                product: "iPhone 13 Pro - 256GB",
                category: "Electronics",
                currentStock: 5,
                minStock: 10,
                status: "Critical",
              },
              {
                product: "Ergonomic Office Chair",
                category: "Furniture",
                currentStock: 8,
                minStock: 15,
                status: "Low",
              },
              {
                product: "Winter Jacket - Large",
                category: "Clothing",
                currentStock: 12,
                minStock: 20,
                status: "Low",
              },
              {
                product: "Smart TV - 55 inch",
                category: "Electronics",
                currentStock: 3,
                minStock: 8,
                status: "Critical",
              },
              {
                product: "Coffee Maker - Premium",
                category: "Home Appliances",
                currentStock: 6,
                minStock: 10,
                status: "Low",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border border-slate-800 rounded-md hover:bg-slate-800/50 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-white">
                    {item.product}
                  </p>
                  <p className="text-xs text-slate-400">{item.category}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      item.status === "Critical"
                        ? "bg-red-500/10 text-red-500"
                        : "bg-amber-500/10 text-amber-500"
                    }`}
                  >
                    {item.currentStock} / {item.minStock}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InventoryOverview;
