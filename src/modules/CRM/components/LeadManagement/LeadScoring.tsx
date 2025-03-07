import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LeadScoring = () => {
  const scoringCriteria = [
    {
      id: "engagement",
      name: "Engagement Score",
      description: "Based on website visits, email opens, and content downloads",
      weight: 25,
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
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      id: "demographic",
      name: "Demographic Fit",
      description: "Company size, industry, and location match",
      weight: 20,
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
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: "behavior",
      name: "Behavioral Signals",
      description: "Product page visits, pricing page views, and demo requests",
      weight: 30,
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
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <circle cx="10" cy="13" r="2" />
          <path d="m14 17-2-2-2 2" />
        </svg>
      ),
    },
    {
      id: "budget",
      name: "Budget & Authority",
      description: "Estimated budget and decision-making authority",
      weight: 15,
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
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6" />
          <path d="M12 18v2" />
          <path d="M12 4v2" />
        </svg>
      ),
    },
    {
      id: "timing",
      name: "Timing & Urgency",
      description: "Timeline for purchase and urgency signals",
      weight: 10,
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
          className="text-blue-500"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  const topScoredLeads = [
    {
      id: "LEAD-003",
      name: "Robert Johnson",
      company: "Global Tech",
      score: 91,
      lastActivity: "Demo Request",
      lastActivityDate: "2023-09-13",
    },
    {
      id: "LEAD-006",
      name: "Lisa Garcia",
      company: "Tech Innovations",
      score: 88,
      lastActivity: "Pricing Page View",
      lastActivityDate: "2023-09-10",
    },
    {
      id: "LEAD-001",
      name: "John Smith",
      company: "Acme Corporation",
      score: 85,
      lastActivity: "Email Response",
      lastActivityDate: "2023-09-15",
    },
    {
      id: "LEAD-002",
      name: "Emily Davis",
      company: "XYZ Industries",
      score: 72,
      lastActivity: "Webinar Attendance",
      lastActivityDate: "2023-09-14",
    },
    {
      id: "LEAD-005",
      name: "Michael Brown",
      company: "Future Systems",
      score: 68,
      lastActivity: "Case Study Download",
      lastActivityDate: "2023-09-11",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Scoring Model */}
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-white">
              Lead Scoring Model
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scoringCriteria.map((criteria) => (
                <div key={criteria.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {criteria.icon}
                      <span className="font-medium text-white">{criteria.name}</span>
                    </div>
                    <span className="text-sm text-slate-400">{criteria.weight}%</span>
                  </div>
                  <Progress value={criteria.weight} className="h-2 bg-slate-700" />
                  <p className="text-xs text-slate-400">{criteria.description}</p>
                </div>
              ))}
              <div className="pt-2">
                <Button variant="outline" className="w-full">
                  Edit Scoring Model
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Score Distribution */}
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-white">
              Score Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-end h-40 space-x-2">
                {[
                  { range: "0-20", count: 15, color: "bg-red-500" },
                  { range: "21-40", count: 28, color: "bg-orange-500" },
                  { range: "41-60", count: 42, color: "bg-amber-500" },
                  { range: "61-80", count: 65, color: "bg-emerald-500" },
                  { range: "81-100", count: 35, color: "bg-cyan-500" },
                ].map((bar) => (
                  <div key={bar.range} className="flex flex-col items-center flex-1">
                    <div
                      className={`w-full ${bar.color} rounded-t`}
                      style={{ height: `${(bar.count / 65) * 100}%` }}
                    ></div>
                    <span className="text-xs text-slate-400 mt-1">{bar.range}</span>
                    <span className="text-xs font-medium text-white">{bar.count}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Average Score</span>
                  <span className="font-medium text-white">62</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Median Score</span>
                  <span className="font-medium text-white">58</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Total Leads</span>
                  <span className="font-medium text-white">185</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Scored Leads */}
      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white">
            Top Scored Leads
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Lead</TableHead>
                  <TableHead className="text-slate-300">Company</TableHead>
                  <TableHead className="text-slate-300">Score</TableHead>
                  <TableHead className="text-slate-300">Last Activity</TableHead>
                  <TableHead className="text-right text-slate-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topScoredLeads.map((lead) => (
                  <TableRow key={lead.id} className="border-slate-800">
                    <TableCell className="font-medium text-slate-300">
                      {lead.name}
                    </TableCell>
                    <TableCell>{lead.company}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <div className="w-16 h-2 bg-slate-700 rounded-full mr-2">
                          <div
                            className={`h-2 rounded-full ${
                              lead.score >= 80
                                ? "bg-emerald-500"
                                : lead.score >= 60
                                ? "bg-amber-500"
                                : "bg-blue-500"
                            }`}
                            style={{ width: `${lead.score}%` }}
                          ></div>
                        </div>
                        <span className="text-xs">{lead.score}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div>{lead.lastActivity}</div>
                        <div className="text-xs text-slate-500">
                          {new Date(lead.lastActivityDate).toLocaleDateString()}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Scoring Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">Hot Leads</h3>
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
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
                <path d="M10 9H8" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-white">42</p>
            <p className="text-xs text-slate-400 mt-1">Leads with score > 80</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">Conversion Rate</h3>
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
                <path d="M12 22V8" />
                <path d="m5 12-2-2 2-2" />
                <path d="m19 12 2-2-2-2" />
                <path d="M5 10h14" />
                <path d="m15 19-3 3-3-3" />
                <path d="M12 2v6" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-white">28.5%</p>
            <p className="text-xs text-slate-400 mt-1">For leads with score > 80</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">Avg. Deal Size</h3>
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
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-white">$42.5K</p>
            <p className="text-xs text-slate-400 mt-1">For high-scoring leads</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadScoring;