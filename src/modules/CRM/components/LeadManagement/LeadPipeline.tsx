import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Lead {
  id: string;
  name: string;
  company: string;
  value: number;
  temperature: "hot" | "warm" | "cold";
  assignedTo: string;
}

const LeadPipeline = () => {
  const stages = [
    {
      id: "prospecting",
      name: "Prospecting",
      leads: [
        {
          id: "LEAD-008",
          name: "Thomas Wilson",
          company: "Tech Solutions Inc",
          value: 15000,
          temperature: "warm",
          assignedTo: "Sarah Johnson",
        },
        {
          id: "LEAD-009",
          name: "Amanda Clark",
          company: "Global Innovations",
          value: 22000,
          temperature: "hot",
          assignedTo: "Michael Chen",
        },
        {
          id: "LEAD-010",
          name: "Kevin Roberts",
          company: "Modern Systems",
          value: 18000,
          temperature: "warm",
          assignedTo: "Jessica Williams",
        },
      ],
    },
    {
      id: "qualification",
      name: "Qualification",
      leads: [
        {
          id: "LEAD-005",
          name: "Michael Brown",
          company: "Future Systems",
          value: 35000,
          temperature: "warm",
          assignedTo: "Jessica Williams",
        },
        {
          id: "LEAD-002",
          name: "Emily Davis",
          company: "XYZ Industries",
          value: 28000,
          temperature: "warm",
          assignedTo: "Michael Chen",
        },
      ],
    },
    {
      id: "proposal",
      name: "Proposal",
      leads: [
        {
          id: "LEAD-003",
          name: "Robert Johnson",
          company: "Global Tech",
          value: 45000,
          temperature: "hot",
          assignedTo: "Sarah Johnson",
        },
        {
          id: "LEAD-006",
          name: "Lisa Garcia",
          company: "Tech Innovations",
          value: 52000,
          temperature: "hot",
          assignedTo: "Michael Chen",
        },
      ],
    },
    {
      id: "negotiation",
      name: "Negotiation",
      leads: [
        {
          id: "LEAD-001",
          name: "John Smith",
          company: "Acme Corporation",
          value: 75000,
          temperature: "hot",
          assignedTo: "Sarah Johnson",
        },
      ],
    },
    {
      id: "closing",
      name: "Closing",
      leads: [],
    },
  ];

  const getTemperatureColor = (temperature: "hot" | "warm" | "cold") => {
    switch (temperature) {
      case "hot":
        return "bg-emerald-500/10 border-emerald-500/20";
      case "warm":
        return "bg-amber-500/10 border-amber-500/20";
      case "cold":
        return "bg-blue-500/10 border-blue-500/20";
      default:
        return "bg-slate-500/10 border-slate-500/20";
    }
  };

  const getTemperatureTextColor = (temperature: "hot" | "warm" | "cold") => {
    switch (temperature) {
      case "hot":
        return "text-emerald-500";
      case "warm":
        return "text-amber-500";
      case "cold":
        return "text-blue-500";
      default:
        return "text-slate-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Lead Pipeline</h2>
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
          Export Pipeline
        </Button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {stages.map((stage) => (
          <div key={stage.id} className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-white">{stage.name}</h3>
              <span className="text-xs text-slate-400">
                {stage.leads.length}
              </span>
            </div>
            <div className="space-y-2">
              {stage.leads.map((lead) => (
                <Card
                  key={lead.id}
                  className={`border-slate-800 bg-slate-800/50 hover:bg-slate-800/80 transition-colors cursor-pointer`}
                >
                  <CardContent className="p-3 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${lead.name}`}
                        />
                        <AvatarFallback>
                          {lead.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm font-medium text-white">
                        {lead.name}
                      </div>
                    </div>
                    <div className="text-xs text-slate-400">{lead.company}</div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium text-white">
                        ${lead.value.toLocaleString()}
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs ${getTemperatureColor(
                          lead.temperature,
                        )} ${getTemperatureTextColor(lead.temperature)}`}
                      >
                        {lead.temperature.charAt(0).toUpperCase() +
                          lead.temperature.slice(1)}
                      </div>
                    </div>
                    <div className="text-xs text-slate-400">
                      Assigned to: {lead.assignedTo}
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button
                variant="ghost"
                className="w-full border border-dashed border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 text-slate-400 hover:text-slate-300"
              >
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
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                Add Lead
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadPipeline;
