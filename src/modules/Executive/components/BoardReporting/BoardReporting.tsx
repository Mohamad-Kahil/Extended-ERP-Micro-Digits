import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const BoardReporting = () => {
  return (
    <div className="space-y-3">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Upcoming Meetings
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
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">4</p>
          <div className="flex items-center text-xs text-slate-400">
            <span>Next: Oct 15, 2023</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Report Completion
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
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">75%</p>
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
            <span>Q3 Financial Results</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Active Committees
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">4</p>
          <div className="flex items-center text-xs text-slate-400">
            <span>12 board members</span>
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium text-slate-400">
              Strategic Initiatives
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
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
          </div>
          <p className="mt-1 text-lg font-bold text-white">5</p>
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
              <path d="M12 9v2m0 4h.01" />
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            </svg>
            <span>1 initiative at risk</span>
          </div>
        </Card>
      </div>

      {/* Two graphs in one row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Upcoming Board Meetings */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Upcoming Board Meetings
            </h3>
            <div className="space-y-2">
              {[
                {
                  date: "2023-10-15",
                  title: "Q3 Board of Directors Meeting",
                  time: "10:00 AM - 2:00 PM",
                  location: "Corporate HQ - Boardroom A",
                  status: "Confirmed",
                  materials: "Pending",
                },
                {
                  date: "2023-11-20",
                  title: "Strategic Planning Session",
                  time: "9:00 AM - 4:00 PM",
                  location: "Executive Conference Center",
                  status: "Confirmed",
                  materials: "Not Started",
                },
                {
                  date: "2023-12-12",
                  title: "Annual Budget Approval",
                  time: "1:00 PM - 5:00 PM",
                  location: "Virtual Meeting",
                  status: "Tentative",
                  materials: "Not Started",
                },
              ].map((meeting, index) => (
                <div
                  key={index}
                  className="border border-slate-800 rounded-md p-2 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="min-w-16 text-right mr-3">
                      <div className="text-xs font-medium text-white">
                        {new Date(meeting.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="text-xs text-slate-500">
                        {new Date(meeting.date).toLocaleDateString("en-US", {
                          weekday: "short",
                        })}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-white">
                        {meeting.title}
                      </div>
                      <div className="text-xs text-slate-400">
                        {meeting.time}
                      </div>
                      <div className="text-xs text-slate-400">
                        {meeting.location}
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <div
                        className={`px-1.5 py-0.5 rounded-full text-xs ${
                          meeting.status === "Confirmed"
                            ? "bg-emerald-500/20 text-emerald-500"
                            : meeting.status === "Tentative"
                              ? "bg-amber-500/20 text-amber-500"
                              : "bg-blue-500/20 text-blue-500"
                        }`}
                      >
                        {meeting.status}
                      </div>
                      <div
                        className={`text-xs ${
                          meeting.materials === "Pending"
                            ? "text-amber-500"
                            : meeting.materials === "Complete"
                              ? "text-emerald-500"
                              : "text-slate-400"
                        }`}
                      >
                        {meeting.materials}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Board Reporting Packages */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Board Reporting Packages
            </h3>
            <div className="space-y-2">
              {[
                {
                  title: "Q3 2023 Financial Results",
                  status: "In Progress",
                  completion: 75,
                  dueDate: "2023-10-10",
                  owner: "Finance Team",
                },
                {
                  title: "Annual Strategic Plan",
                  status: "Not Started",
                  completion: 0,
                  dueDate: "2023-11-15",
                  owner: "Executive Team",
                },
                {
                  title: "2024 Budget Proposal",
                  status: "In Progress",
                  completion: 40,
                  dueDate: "2023-12-05",
                  owner: "Finance Team",
                },
                {
                  title: "Sustainability Initiative Update",
                  status: "Complete",
                  completion: 100,
                  dueDate: "2023-10-05",
                  owner: "Sustainability Office",
                },
              ].map((report, index) => (
                <div
                  key={index}
                  className="border border-slate-800 rounded-md p-2"
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-xs font-medium text-white">
                      {report.title}
                    </div>
                    <div
                      className={`px-1.5 py-0.5 rounded-full text-xs ${
                        report.status === "Complete"
                          ? "bg-emerald-500/20 text-emerald-500"
                          : report.status === "In Progress"
                            ? "bg-blue-500/20 text-blue-500"
                            : report.status === "In Review"
                              ? "bg-purple-500/20 text-purple-500"
                              : "bg-slate-500/20 text-slate-400"
                      }`}
                    >
                      {report.status}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Completion</span>
                      <span className="text-white font-medium">
                        {report.completion}%
                      </span>
                    </div>
                    <Progress
                      value={report.completion}
                      className="h-1.5 bg-slate-700"
                      indicatorClassName={
                        report.status === "Complete"
                          ? "bg-emerald-500"
                          : report.status === "In Review"
                            ? "bg-purple-500"
                            : "bg-blue-500"
                      }
                    />
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <div>
                      <span className="text-slate-500">Due: </span>
                      <span className="text-slate-300">
                        {new Date(report.dueDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500">Owner: </span>
                      <span className="text-slate-300">{report.owner}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second row of two graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Board Committee Structure */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Board Committee Structure
            </h3>
            <div className="space-y-2">
              {[
                {
                  name: "Audit Committee",
                  members: [
                    "Jane Smith (Chair)",
                    "Robert Chen",
                    "David Williams",
                  ],
                  responsibilities: [
                    "Financial reporting oversight",
                    "Internal controls",
                    "External auditor relationship",
                  ],
                  nextMeeting: "2023-10-12",
                },
                {
                  name: "Compensation Committee",
                  members: [
                    "Michael Johnson (Chair)",
                    "Sarah Lee",
                    "Thomas Brown",
                  ],
                  responsibilities: [
                    "Executive compensation",
                    "Performance evaluation",
                    "Succession planning",
                  ],
                  nextMeeting: "2023-10-14",
                },
                {
                  name: "Nominating & Governance",
                  members: [
                    "Elizabeth Taylor (Chair)",
                    "James Wilson",
                    "Patricia Garcia",
                  ],
                  responsibilities: [
                    "Board composition",
                    "Corporate governance",
                    "ESG oversight",
                  ],
                  nextMeeting: "2023-11-05",
                },
              ].map((committee, index) => (
                <div
                  key={index}
                  className="border border-slate-800 rounded-md p-2"
                >
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xs font-medium text-white">
                      {committee.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      Next:{" "}
                      {new Date(committee.nextMeeting).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric" },
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-xs text-slate-400 mb-0.5">
                        Members
                      </div>
                      <ul className="text-xs text-slate-300 space-y-0.5">
                        {committee.members.map((member, idx) => (
                          <li key={idx}>• {member}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-0.5">
                        Key Responsibilities
                      </div>
                      <ul className="text-xs text-slate-300 space-y-0.5">
                        {committee.responsibilities.map((resp, idx) => (
                          <li key={idx}>• {resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strategic Initiatives */}
        <Card className="border-slate-800 bg-slate-900">
          <CardContent className="p-3">
            <h3 className="text-xs font-medium text-white mb-1.5">
              Strategic Initiatives Progress
            </h3>
            <div className="space-y-2">
              {[
                {
                  initiative: "Market Expansion - APAC",
                  progress: 75,
                  status: "On Track",
                  statusColor: "text-emerald-500",
                  target: "Q4 2023",
                },
                {
                  initiative: "Digital Transformation",
                  progress: 60,
                  status: "On Track",
                  statusColor: "text-emerald-500",
                  target: "Q2 2024",
                },
                {
                  initiative: "Product Line Expansion",
                  progress: 45,
                  status: "At Risk",
                  statusColor: "text-amber-500",
                  target: "Q1 2024",
                },
                {
                  initiative: "Operational Efficiency",
                  progress: 90,
                  status: "Ahead",
                  statusColor: "text-emerald-500",
                  target: "Q3 2023",
                },
                {
                  initiative: "Sustainability Program",
                  progress: 30,
                  status: "Delayed",
                  statusColor: "text-red-500",
                  target: "Q2 2023",
                },
              ].map((initiative, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white">{initiative.initiative}</span>
                    <div className="flex space-x-3">
                      <span className="text-slate-400">
                        Target: {initiative.target}
                      </span>
                      <span className={initiative.statusColor}>
                        {initiative.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress
                      value={initiative.progress}
                      className="h-1.5 bg-slate-700 flex-1"
                      indicatorClassName={
                        initiative.status === "On Track" ||
                        initiative.status === "Ahead"
                          ? "bg-emerald-500"
                          : initiative.status === "At Risk"
                            ? "bg-amber-500"
                            : "bg-red-500"
                      }
                    />
                    <span className="text-xs text-slate-400 w-8 text-right">
                      {initiative.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BoardReporting;
