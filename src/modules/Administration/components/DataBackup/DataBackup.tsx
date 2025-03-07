import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const DataBackup = () => {
  const [activeTab, setActiveTab] = useState("backups");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Data Backup & Recovery
          </CardTitle>
          <div className="flex space-x-2">
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              Create Backup
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="backups">Backup History</TabsTrigger>
            <TabsTrigger value="schedule">Backup Schedule</TabsTrigger>
            <TabsTrigger value="recovery">Recovery Options</TabsTrigger>
          </TabsList>

          <TabsContent value="backups" className="mt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <h3 className="text-sm font-medium text-slate-400 mb-2">
                    Last Backup
                  </h3>
                  <p className="text-3xl font-bold text-white">6 hours ago</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Completed successfully
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <h3 className="text-sm font-medium text-slate-400 mb-2">
                    Total Backups
                  </h3>
                  <p className="text-3xl font-bold text-white">128</p>
                  <p className="text-xs text-slate-400 mt-1">
                    In the last 30 days
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <h3 className="text-sm font-medium text-slate-400 mb-2">
                    Storage Used
                  </h3>
                  <p className="text-3xl font-bold text-white">1.2 TB</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Of 2 TB allocated
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-md border border-slate-800">
              <Table>
                <TableHeader className="bg-slate-800">
                  <TableRow>
                    <TableHead className="text-slate-300">Backup ID</TableHead>
                    <TableHead className="text-slate-300">
                      Date & Time
                    </TableHead>
                    <TableHead className="text-slate-300">Type</TableHead>
                    <TableHead className="text-slate-300">Size</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-right text-slate-300">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "BKP-20230915-001",
                      datetime: "2023-09-15T06:00:00",
                      type: "Automated",
                      size: "42.8 GB",
                      status: "completed",
                    },
                    {
                      id: "BKP-20230914-002",
                      datetime: "2023-09-14T18:00:00",
                      type: "Automated",
                      size: "43.2 GB",
                      status: "completed",
                    },
                    {
                      id: "BKP-20230914-001",
                      datetime: "2023-09-14T06:00:00",
                      type: "Automated",
                      size: "42.5 GB",
                      status: "completed",
                    },
                    {
                      id: "BKP-20230913-002",
                      datetime: "2023-09-13T18:00:00",
                      type: "Automated",
                      size: "42.7 GB",
                      status: "completed",
                    },
                    {
                      id: "BKP-20230913-001",
                      datetime: "2023-09-13T06:00:00",
                      type: "Automated",
                      size: "42.3 GB",
                      status: "completed",
                    },
                    {
                      id: "BKP-20230912-003",
                      datetime: "2023-09-12T14:32:00",
                      type: "Manual",
                      size: "42.1 GB",
                      status: "completed",
                    },
                  ].map((backup) => (
                    <TableRow key={backup.id} className="border-slate-800">
                      <TableCell className="font-medium text-slate-300">
                        {backup.id}
                      </TableCell>
                      <TableCell>
                        {new Date(backup.datetime).toLocaleString()}
                      </TableCell>
                      <TableCell>{backup.type}</TableCell>
                      <TableCell>{backup.size}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                            backup.status === "completed"
                              ? "bg-emerald-500/10 text-emerald-500"
                              : backup.status === "in-progress"
                                ? "bg-amber-500/10 text-amber-500"
                                : "bg-red-500/10 text-red-500"
                          }`}
                        >
                          {backup.status.replace("-", " ")}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
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
                              className="h-4 w-4 text-blue-500"
                            >
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1="12" x2="12" y1="15" y2="3" />
                            </svg>
                            <span className="sr-only">Download</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
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
                              className="h-4 w-4 text-emerald-500"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                            </svg>
                            <span className="sr-only">Restore</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Backup Schedule
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-white">
                      Full System Backup
                    </h4>
                    <p className="text-sm text-slate-400">
                      Complete backup of all databases and files
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-white">
                      Every 12 hours
                    </div>
                    <div className="text-xs text-slate-400">
                      Next: Today at 6:00 PM
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-white">Database Backup</h4>
                    <p className="text-sm text-slate-400">
                      Backup of all database content
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-white">
                      Every 6 hours
                    </div>
                    <div className="text-xs text-slate-400">
                      Next: Today at 12:00 PM
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-white">
                      Configuration Backup
                    </h4>
                    <p className="text-sm text-slate-400">
                      Backup of system configuration files
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-white">Daily</div>
                    <div className="text-xs text-slate-400">
                      Next: Tomorrow at 1:00 AM
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-white">User Data Backup</h4>
                    <p className="text-sm text-slate-400">
                      Backup of all user-generated content
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-white">
                      Every 4 hours
                    </div>
                    <div className="text-xs text-slate-400">
                      Next: Today at 2:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button variant="outline" className="mr-2">
                  Edit Schedule
                </Button>
                <Button className="bg-cyan-600 hover:bg-cyan-700">
                  Run Manual Backup
                </Button>
              </div>
            </div>

            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Retention Policy
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Hourly Backups</span>
                    <span>Keep for 24 hours</span>
                  </div>
                  <Progress
                    value={25}
                    className="h-2 bg-slate-700"
                    indicatorClassName="bg-cyan-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Daily Backups</span>
                    <span>Keep for 7 days</span>
                  </div>
                  <Progress
                    value={40}
                    className="h-2 bg-slate-700"
                    indicatorClassName="bg-cyan-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Weekly Backups</span>
                    <span>Keep for 4 weeks</span>
                  </div>
                  <Progress
                    value={60}
                    className="h-2 bg-slate-700"
                    indicatorClassName="bg-cyan-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Monthly Backups</span>
                    <span>Keep for 12 months</span>
                  </div>
                  <Progress
                    value={80}
                    className="h-2 bg-slate-700"
                    indicatorClassName="bg-cyan-500"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recovery" className="mt-4 space-y-4">
            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Recovery Options
              </h3>
              <div className="space-y-6">
                <div className="p-4 bg-slate-800/50 rounded-md border border-slate-700">
                  <h4 className="font-medium text-white mb-2">
                    Full System Restore
                  </h4>
                  <p className="text-sm text-slate-400 mb-4">
                    Restore the entire system to a previous backup point. This
                    will replace all current data and configurations.
                  </p>
                  <Button variant="outline">Start Full Restore</Button>
                </div>

                <div className="p-4 bg-slate-800/50 rounded-md border border-slate-700">
                  <h4 className="font-medium text-white mb-2">
                    Database Recovery
                  </h4>
                  <p className="text-sm text-slate-400 mb-4">
                    Restore specific databases to a previous state without
                    affecting other system components.
                  </p>
                  <Button variant="outline">Recover Databases</Button>
                </div>

                <div className="p-4 bg-slate-800/50 rounded-md border border-slate-700">
                  <h4 className="font-medium text-white mb-2">File Recovery</h4>
                  <p className="text-sm text-slate-400 mb-4">
                    Restore individual files or directories from a backup
                    without a full system restore.
                  </p>
                  <Button variant="outline">Recover Files</Button>
                </div>

                <div className="p-4 bg-slate-800/50 rounded-md border border-slate-700">
                  <h4 className="font-medium text-white mb-2">
                    Point-in-Time Recovery
                  </h4>
                  <p className="text-sm text-slate-400 mb-4">
                    Restore the system to a specific point in time using
                    transaction logs and backups.
                  </p>
                  <Button variant="outline">Point-in-Time Restore</Button>
                </div>
              </div>
            </div>

            <div className="rounded-md border border-slate-800 p-4">
              <h3 className="text-lg font-medium text-white mb-4">
                Recovery History
              </h3>
              <div className="space-y-3">
                {[
                  {
                    id: "REC-001",
                    date: "2023-09-10T14:25:00",
                    type: "Database Recovery",
                    details: "Restored customer database after data corruption",
                    user: "Admin User",
                    status: "completed",
                  },
                  {
                    id: "REC-002",
                    date: "2023-08-25T09:12:00",
                    type: "File Recovery",
                    details: "Recovered deleted configuration files",
                    user: "System Admin",
                    status: "completed",
                  },
                  {
                    id: "REC-003",
                    date: "2023-07-15T18:30:00",
                    type: "Full System Restore",
                    details: "Scheduled system upgrade rollback",
                    user: "Admin User",
                    status: "completed",
                  },
                ].map((recovery) => (
                  <div
                    key={recovery.id}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-md border border-slate-700"
                  >
                    <div>
                      <h4 className="font-medium text-white">
                        {recovery.type}
                      </h4>
                      <div className="text-sm text-slate-400 mt-1">
                        {recovery.details}
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-slate-400 mr-3">
                          ID: {recovery.id}
                        </span>
                        <span className="text-xs text-slate-400 mr-3">
                          Date: {new Date(recovery.date).toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-400">
                          By: {recovery.user}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-500">
                        {recovery.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DataBackup;
