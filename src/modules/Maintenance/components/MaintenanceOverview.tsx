import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MaintenanceOverview = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Maintenance Overview</h2>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Open Work Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">24</div>
            <p className="text-xs text-slate-500">5 high priority</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Scheduled Maintenance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">12</div>
            <p className="text-xs text-slate-500">Next 30 days</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Completed This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">38</div>
            <p className="text-xs text-emerald-500">↑ 15% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Average Resolution Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-500">1.5 days</div>
            <p className="text-xs text-emerald-500">
              ↓ 0.5 days from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            Maintenance Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-400">
            Select a section from the navigation bar above to view detailed
            maintenance information.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaintenanceOverview;
