import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const SalesChannels = () => {
  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Sales Channels
          </CardTitle>
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
              Export Report
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
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              Add Channel
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="direct">Direct Sales</TabsTrigger>
            <TabsTrigger value="partner">Partner Network</TabsTrigger>
            <TabsTrigger value="online">Online Channels</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Total Revenue
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
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">$2.4M</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 12% from last quarter
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Active Channels
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
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">8</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    2 new channels added
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-slate-400">
                      Avg. Conversion Rate
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
                      <path d="m2 12 5.25 5 2-2-3.25-3 3.25-3-2-2L2 12z" />
                      <path d="m22 12-5.25-5-2 2 3.25 3-3.25 3 2 2L22 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-white">3.8%</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    ↑ 0.5% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Channel Performance
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Direct Sales",
                      revenue: 850000,
                      target: 1000000,
                      growth: 8.5,
                      color: "bg-cyan-500",
                    },
                    {
                      name: "Partner Network",
                      revenue: 620000,
                      target: 750000,
                      growth: 12.3,
                      color: "bg-emerald-500",
                    },
                    {
                      name: "Online Channels",
                      revenue: 480000,
                      target: 500000,
                      growth: 15.7,
                      color: "bg-blue-500",
                    },
                    {
                      name: "Referral Program",
                      revenue: 320000,
                      target: 300000,
                      growth: 22.1,
                      color: "bg-purple-500",
                    },
                    {
                      name: "Field Sales",
                      revenue: 180000,
                      target: 200000,
                      growth: -2.3,
                      color: "bg-amber-500",
                    },
                  ].map((channel) => (
                    <div key={channel.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full ${channel.color} mr-2`}
                          ></div>
                          <span className="text-white">{channel.name}</span>
                        </div>
                        <div className="flex space-x-4">
                          <span className="text-slate-400">
                            ${channel.revenue.toLocaleString()}
                          </span>
                          <span className="text-white font-medium">
                            {Math.round(
                              (channel.revenue / channel.target) * 100,
                            )}
                            % of target
                          </span>
                          <span
                            className={
                              channel.growth >= 0
                                ? "text-emerald-500"
                                : "text-red-500"
                            }
                          >
                            {channel.growth >= 0 ? "↑" : "↓"}{" "}
                            {Math.abs(channel.growth)}%
                          </span>
                        </div>
                      </div>
                      <Progress
                        value={(channel.revenue / channel.target) * 100}
                        className="h-2 bg-slate-700"
                        indicatorClassName={channel.color}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Channel Distribution
                  </h3>
                  <div className="flex items-center justify-center h-64">
                    <div className="w-64 h-64 relative rounded-full bg-slate-800 flex items-center justify-center">
                      {/* Donut chart segments */}
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#0ea5e9"
                          strokeWidth="5"
                          strokeDasharray="35, 100"
                          className="stroke-[5px]"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="5"
                          strokeDasharray="25, 100"
                          strokeDashoffset="-35"
                          className="stroke-[5px]"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="5"
                          strokeDasharray="20, 100"
                          strokeDashoffset="-60"
                          className="stroke-[5px]"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#a855f7"
                          strokeWidth="5"
                          strokeDasharray="13, 100"
                          strokeDashoffset="-80"
                          className="stroke-[5px]"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="5"
                          strokeDasharray="7, 100"
                          strokeDashoffset="-93"
                          className="stroke-[5px]"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-3xl font-bold text-white">
                          $2.4M
                        </span>
                        <span className="text-xs text-slate-400">
                          Total Revenue
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-500 mr-2"></div>
                      <span className="text-xs text-slate-300">
                        Direct Sales (35%)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                      <span className="text-xs text-slate-300">
                        Partner Network (25%)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-xs text-slate-300">
                        Online Channels (20%)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-xs text-slate-300">
                        Referral Program (13%)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                      <span className="text-xs text-slate-300">
                        Field Sales (7%)
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Channel Growth Trends
                  </h3>
                  <div className="h-64 flex items-end space-x-2">
                    {[
                      { month: "Jan", direct: 65, partner: 48, online: 35 },
                      { month: "Feb", direct: 60, partner: 52, online: 38 },
                      { month: "Mar", direct: 70, partner: 55, online: 42 },
                      { month: "Apr", direct: 68, partner: 57, online: 45 },
                      { month: "May", direct: 72, partner: 60, online: 48 },
                      { month: "Jun", direct: 75, partner: 62, online: 52 },
                    ].map((data, index) => (
                      <div
                        key={index}
                        className="flex-1 flex flex-col items-center"
                      >
                        <div className="w-full relative h-48">
                          <div
                            className="absolute bottom-0 w-2 bg-cyan-500 rounded-t mx-auto left-0 right-0"
                            style={{ height: `${data.direct}%` }}
                          ></div>
                          <div
                            className="absolute bottom-0 w-2 bg-emerald-500 rounded-t mx-auto left-4 right-0"
                            style={{ height: `${data.partner}%` }}
                          ></div>
                          <div
                            className="absolute bottom-0 w-2 bg-blue-500 rounded-t mx-auto left-8 right-0"
                            style={{ height: `${data.online}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-slate-400 mt-2">
                          {data.month}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-500 mr-2"></div>
                      <span className="text-xs text-slate-300">Direct</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                      <span className="text-xs text-slate-300">Partner</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-xs text-slate-300">Online</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="direct" className="mt-6 space-y-6">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Direct Sales Performance
                </h3>
                <p className="text-slate-400">
                  Detailed metrics for direct sales channels will be displayed
                  here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partner" className="mt-6 space-y-6">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Partner Network Performance
                </h3>
                <p className="text-slate-400">
                  Detailed metrics for partner network channels will be
                  displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="online" className="mt-6 space-y-6">
            <Card className="border-slate-800 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Online Channels Performance
                </h3>
                <p className="text-slate-400">
                  Detailed metrics for online sales channels will be displayed
                  here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SalesChannels;
