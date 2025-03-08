import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CostAccounting = () => {
  const [activeTab, setActiveTab] = useState("cost-centers");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Total Production Cost
            </h3>
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
              className="text-cyan-500"
            >
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$4,250,000</p>
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
              <path d="m19 12-7 7-7-7" />
              <path d="M12 19V5" />
            </svg>
            <span>2.5% from last quarter</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Cost Per Unit
            </h3>
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
              className="text-cyan-500"
            >
              <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
              <path d="M17 18h1" />
              <path d="M12 18h1" />
              <path d="M7 18h1" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">$85.00</p>
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
              <path d="m19 12-7 7-7-7" />
              <path d="M12 19V5" />
            </svg>
            <span>1.2% from last quarter</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">Gross Margin</h3>
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
              className="text-cyan-500"
            >
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
              <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">42.5%</p>
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
            <span>1.8% from last quarter</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Overhead Rate
            </h3>
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
              className="text-cyan-500"
            >
              <path d="M12 6V2H8" />
              <path d="m8 2 4 4" />
              <path d="M12 18v4h4" />
              <path d="m16 22-4-4" />
              <path d="M6 12H2v4" />
              <path d="m2 16 4-4" />
              <path d="M18 12h4v-4" />
              <path d="m22 8-4 4" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">125%</p>
          <div className="flex items-center text-xs text-amber-500">
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
            <span>3.5% from last quarter</span>
          </div>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Cost Accounting
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
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                New Cost Center
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative w-64">
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
                  className="absolute left-2 top-2.5 h-4 w-4 text-slate-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <Input
                  placeholder="Search cost centers..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="production">Production</SelectItem>
                  <SelectItem value="service">Service</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-slate-800">
              <TabsTrigger value="cost-centers">Cost Centers</TabsTrigger>
              <TabsTrigger value="product-costing">Product Costing</TabsTrigger>
              <TabsTrigger value="variance-analysis">
                Variance Analysis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cost-centers" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-3">Cost Center</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-2">Budget</div>
                  <div className="col-span-2">Actual</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "CC-001",
                      name: "Manufacturing - Assembly",
                      type: "Production",
                      budget: "$1,250,000",
                      actual: "$1,175,000",
                    },
                    {
                      id: "CC-002",
                      name: "Manufacturing - Packaging",
                      type: "Production",
                      budget: "$750,000",
                      actual: "$780,000",
                    },
                    {
                      id: "CC-003",
                      name: "Quality Control",
                      type: "Production",
                      budget: "$500,000",
                      actual: "$485,000",
                    },
                    {
                      id: "CC-004",
                      name: "Research & Development",
                      type: "Service",
                      budget: "$850,000",
                      actual: "$825,000",
                    },
                    {
                      id: "CC-005",
                      name: "IT Services",
                      type: "Service",
                      budget: "$450,000",
                      actual: "$475,000",
                    },
                    {
                      id: "CC-006",
                      name: "Human Resources",
                      type: "Support",
                      budget: "$350,000",
                      actual: "$340,000",
                    },
                    {
                      id: "CC-007",
                      name: "Finance & Accounting",
                      type: "Support",
                      budget: "$400,000",
                      actual: "$395,000",
                    },
                  ].map((center, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{center.id}</div>
                      <div className="col-span-3">{center.name}</div>
                      <div className="col-span-2">{center.type}</div>
                      <div className="col-span-2">{center.budget}</div>
                      <div className="col-span-2">{center.actual}</div>
                      <div className="col-span-2 flex space-x-2">
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="product-costing" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-3">Product</div>
                  <div className="col-span-2">Direct Materials</div>
                  <div className="col-span-2">Direct Labor</div>
                  <div className="col-span-2">Overhead</div>
                  <div className="col-span-2">Total Cost</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      id: "P-001",
                      name: "Product A",
                      materials: "$45.00",
                      labor: "$25.00",
                      overhead: "$15.00",
                      total: "$85.00",
                    },
                    {
                      id: "P-002",
                      name: "Product B",
                      materials: "$65.00",
                      labor: "$30.00",
                      overhead: "$20.00",
                      total: "$115.00",
                    },
                    {
                      id: "P-003",
                      name: "Product C",
                      materials: "$35.00",
                      labor: "$20.00",
                      overhead: "$12.50",
                      total: "$67.50",
                    },
                    {
                      id: "P-004",
                      name: "Product D",
                      materials: "$55.00",
                      labor: "$35.00",
                      overhead: "$22.50",
                      total: "$112.50",
                    },
                    {
                      id: "P-005",
                      name: "Product E",
                      materials: "$75.00",
                      labor: "$40.00",
                      overhead: "$28.75",
                      total: "$143.75",
                    },
                  ].map((product, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{product.id}</div>
                      <div className="col-span-3">{product.name}</div>
                      <div className="col-span-2">{product.materials}</div>
                      <div className="col-span-2">{product.labor}</div>
                      <div className="col-span-2">{product.overhead}</div>
                      <div className="col-span-2 font-medium">
                        {product.total}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="variance-analysis" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">Cost Center</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Standard</div>
                  <div className="col-span-2">Actual</div>
                  <div className="col-span-2">Variance</div>
                  <div className="col-span-2">Variance %</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    {
                      center: "Manufacturing - Assembly",
                      category: "Materials",
                      standard: "$525,000",
                      actual: "$545,000",
                      variance: "-$20,000",
                      percentage: "-3.8%",
                      negative: true,
                    },
                    {
                      center: "Manufacturing - Assembly",
                      category: "Labor",
                      standard: "$425,000",
                      actual: "$410,000",
                      variance: "$15,000",
                      percentage: "+3.5%",
                      negative: false,
                    },
                    {
                      center: "Manufacturing - Assembly",
                      category: "Overhead",
                      standard: "$300,000",
                      actual: "$295,000",
                      variance: "$5,000",
                      percentage: "+1.7%",
                      negative: false,
                    },
                    {
                      center: "Manufacturing - Packaging",
                      category: "Materials",
                      standard: "$350,000",
                      actual: "$365,000",
                      variance: "-$15,000",
                      percentage: "-4.3%",
                      negative: true,
                    },
                    {
                      center: "Manufacturing - Packaging",
                      category: "Labor",
                      standard: "$275,000",
                      actual: "$280,000",
                      variance: "-$5,000",
                      percentage: "-1.8%",
                      negative: true,
                    },
                    {
                      center: "Manufacturing - Packaging",
                      category: "Overhead",
                      standard: "$125,000",
                      actual: "$135,000",
                      variance: "-$10,000",
                      percentage: "-8.0%",
                      negative: true,
                    },
                    {
                      center: "Quality Control",
                      category: "Labor",
                      standard: "$350,000",
                      actual: "$340,000",
                      variance: "$10,000",
                      percentage: "+2.9%",
                      negative: false,
                    },
                  ].map((variance, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-2">{variance.center}</div>
                      <div className="col-span-2">{variance.category}</div>
                      <div className="col-span-2">{variance.standard}</div>
                      <div className="col-span-2">{variance.actual}</div>
                      <div
                        className={`col-span-2 ${variance.negative ? "text-red-500" : "text-emerald-500"}`}
                      >
                        {variance.variance}
                      </div>
                      <div
                        className={`col-span-2 ${variance.negative ? "text-red-500" : "text-emerald-500"}`}
                      >
                        {variance.percentage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CostAccounting;
