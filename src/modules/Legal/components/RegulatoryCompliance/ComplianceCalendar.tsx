import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ComplianceEvent {
  id: string;
  title: string;
  date: string;
  type: "Audit" | "Filing" | "Review" | "Training" | "Certification";
  priority: "High" | "Medium" | "Low";
  owner: string;
}

const ComplianceCalendar = () => {
  // Get current date and month information
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Sample compliance events
  const events: ComplianceEvent[] = [
    {
      id: "EVENT-001",
      title: "GDPR Quarterly Audit",
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-15`,
      type: "Audit",
      priority: "High",
      owner: "Sarah Johnson",
    },
    {
      id: "EVENT-002",
      title: "ISO 27001 Certification Renewal",
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-22`,
      type: "Certification",
      priority: "High",
      owner: "Michael Chen",
    },
    {
      id: "EVENT-003",
      title: "Data Privacy Training",
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-10`,
      type: "Training",
      priority: "Medium",
      owner: "Jessica Williams",
    },
    {
      id: "EVENT-004",
      title: "Quarterly Tax Filing",
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-30`,
      type: "Filing",
      priority: "High",
      owner: "David Miller",
    },
    {
      id: "EVENT-005",
      title: "Contract Compliance Review",
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-05`,
      type: "Review",
      priority: "Medium",
      owner: "Sarah Johnson",
    },
  ];

  // Create calendar days array
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null); // Empty cells for days before the 1st of the month
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Group events by date
  const eventsByDate: Record<string, ComplianceEvent[]> = {};
  events.forEach((event) => {
    const date = event.date;
    if (!eventsByDate[date]) {
      eventsByDate[date] = [];
    }
    eventsByDate[date].push(event);
  });

  // Get event type color
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Audit":
        return "bg-blue-500";
      case "Filing":
        return "bg-amber-500";
      case "Review":
        return "bg-purple-500";
      case "Training":
        return "bg-emerald-500";
      case "Certification":
        return "bg-red-500";
      default:
        return "bg-slate-500";
    }
  };

  // Format date to YYYY-MM-DD
  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentYear}
        </h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
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
              <path d="m15 18-6-6 6-6" />
            </svg>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
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
              className="ml-2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
        </div>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <div className="grid grid-cols-7 gap-1 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="py-2 text-xs font-medium text-slate-400"
              >
                {day}
              </div>
            ))}

            {days.map((day, index) => {
              const dateStr = day
                ? formatDate(currentYear, currentMonth, day)
                : "";
              const dayEvents = dateStr ? eventsByDate[dateStr] || [] : [];

              return (
                <div
                  key={index}
                  className={`min-h-24 p-1 border border-slate-800 ${day ? "bg-slate-800/50" : "bg-transparent"}`}
                >
                  {day && (
                    <div className="h-full">
                      <div
                        className={`text-xs font-medium p-1 ${currentDate.getDate() === day ? "bg-cyan-600/20 text-cyan-500 rounded-full w-6 h-6 flex items-center justify-center" : "text-slate-400"}`}
                      >
                        {day}
                      </div>

                      <div className="mt-1 space-y-1">
                        {dayEvents.map((event) => (
                          <div
                            key={event.id}
                            className={`px-1.5 py-0.5 text-xs rounded-sm ${getTypeColor(event.type)}/20 ${getTypeColor(event.type).replace("bg-", "text-")}`}
                          >
                            <div className="font-medium truncate">
                              {event.title}
                            </div>
                            <div className="text-[10px] opacity-80">
                              {event.owner}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Upcoming Compliance Events
          </h3>
          <div className="space-y-3">
            {events
              .sort(
                (a, b) =>
                  new Date(a.date).getTime() - new Date(b.date).getTime(),
              )
              .map((event) => (
                <div
                  key={event.id}
                  className="flex items-start p-3 border border-slate-800 rounded-md hover:bg-slate-800/50 transition-colors"
                >
                  <div
                    className={`w-2 h-full self-stretch rounded-full mr-3 ${getTypeColor(event.type)}`}
                  ></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="text-sm font-medium text-white">
                        {event.title}
                      </h4>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${event.priority === "High" ? "bg-red-500/10 text-red-500" : event.priority === "Medium" ? "bg-amber-500/10 text-amber-500" : "bg-blue-500/10 text-blue-500"}`}
                      >
                        {event.priority}
                      </span>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-slate-400">
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span>{event.owner}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComplianceCalendar;
