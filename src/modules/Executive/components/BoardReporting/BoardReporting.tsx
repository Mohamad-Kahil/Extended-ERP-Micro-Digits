import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const BoardReporting = () => {
  return (
    <div className="space-y-6">
      <Card className="border-slate-800 bg-slate-900 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">
            Upcoming Board Meetings
          </h3>
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
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Schedule Meeting
          </Button>
        </div>
        <div className="space-y-4">
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
            {
              date: "2024-01-25",
              title: "Q4 & Annual Results Review",
              time: "10:00 AM - 3:00 PM",
              location: "Corporate HQ - Boardroom A",
              status: "Scheduled",
              materials: "Not Started",
            },
          ].map((meeting, index) => (
            <div
              key={index}
              className="border border-slate-800 rounded-md p-4 hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-start">
                <div className="min-w-24 text-right mr-4">
                  <div className="text-sm font-medium text-white">
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
                  <div className="text-sm font-medium text-white">
                    {meeting.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {meeting.time}
                  </div>
                  <div className="text-xs text-slate-400">
                    {meeting.location}
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <div
                    className={`px-2 py-1 rounded-full text-xs ${
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
                    Materials: {meeting.materials}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Board Reporting Packages
          </h3>
          <div className="space-y-4">
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
              {
                title: "Market Expansion Analysis",
                status: "In Review",
                completion: 90,
                dueDate: "2023-10-08",
                owner: "Strategy Team",
              },
            ].map((report, index) => (
              <div
                key={index}
                className="border border-slate-800 rounded-md p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-white">{report.title}</h4>
                  <div
                    className={`px-2 py-1 rounded-full text-xs ${
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
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Completion</span>
                    <span className="text-white font-medium">
                      {report.completion}%
                    </span>
                  </div>
                  <Progress
                    value={report.completion}
                    className="h-2 bg-slate-700"
                    indicatorClassName={
                      report.status === "Complete"
                        ? "bg-emerald-500"
                        : report.status === "In Review"
                          ? "bg-purple-500"
                          : "bg-blue-500"
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs mt-3">
                  <div>
                    <span className="text-slate-500">Due Date</span>
                    <p className="text-slate-300">
                      {new Date(report.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-500">Owner</span>
                    <p className="text-slate-300">{report.owner}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Board Committee Structure
          </h3>
          <div className="space-y-4">
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
                  "Compliance",
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
                  "Incentive programs",
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
                  "Board evaluation",
                ],
                nextMeeting: "2023-11-05",
              },
              {
                name: "Strategy & Innovation",
                members: [
                  "Robert Chen (Chair)",
                  "Jane Smith",
                  "Michael Johnson",
                ],
                responsibilities: [
                  "Long-term strategy",
                  "Innovation initiatives",
                  "Competitive analysis",
                  "M&A oversight",
                ],
                nextMeeting: "2023-10-28",
              },
            ].map((committee, index) => (
              <div
                key={index}
                className="border border-slate-800 rounded-md p-4"
              >
                <h4 className="font-medium text-white mb-2">
                  {committee.name}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-xs font-medium text-slate-400 mb-1">
                      Members
                    </h5>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {committee.members.map((member, idx) => (
                        <li key={idx}>• {member}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xs font-medium text-slate-400 mb-1">
                      Key Responsibilities
                    </h5>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {committee.responsibilities.map((resp, idx) => (
                        <li key={idx}>• {resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-3 text-xs">
                  <span className="text-slate-500">Next Meeting:</span>
                  <span className="text-slate-300 ml-2">
                    {new Date(committee.nextMeeting).toLocaleDateString()}
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

export default BoardReporting;
