import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface EmailCampaign {
  id: string;
  name: string;
  subject: string;
  status: "draft" | "scheduled" | "active" | "completed" | "paused";
  audience: string;
  sent: number;
  opened: number;
  clicked: number;
  openRate: number;
  clickRate: number;
  scheduledDate?: string;
  sentDate?: string;
}

const emailCampaigns: EmailCampaign[] = [
  {
    id: "1",
    name: "Summer Sale Announcement",
    subject: "Don't Miss Our Biggest Summer Sale!",
    status: "active",
    audience: "All Customers",
    sent: 15420,
    opened: 6940,
    clicked: 2158,
    openRate: 45.0,
    clickRate: 14.0,
    scheduledDate: "2023-06-15",
    sentDate: "2023-06-15",
  },
  {
    id: "2",
    name: "New Product Launch - Smart Home Hub",
    subject: "Introducing Our Revolutionary Smart Home Hub",
    status: "scheduled",
    audience: "Tech Enthusiasts",
    sent: 0,
    opened: 0,
    clicked: 0,
    openRate: 0,
    clickRate: 0,
    scheduledDate: "2023-07-10",
  },
  {
    id: "3",
    name: "Customer Feedback Survey",
    subject: "We Value Your Opinion - Take Our Quick Survey",
    status: "completed",
    audience: "Recent Purchasers",
    sent: 5280,
    opened: 2640,
    clicked: 1320,
    openRate: 50.0,
    clickRate: 25.0,
    scheduledDate: "2023-05-20",
    sentDate: "2023-05-20",
  },
  {
    id: "4",
    name: "Loyalty Program Update",
    subject: "Your Loyalty Program Benefits Have Been Enhanced!",
    status: "draft",
    audience: "Loyalty Members",
    sent: 0,
    opened: 0,
    clicked: 0,
    openRate: 0,
    clickRate: 0,
  },
  {
    id: "5",
    name: "Abandoned Cart Reminder",
    subject: "You Left Something in Your Cart",
    status: "active",
    audience: "Cart Abandoners",
    sent: 3240,
    opened: 1782,
    clicked: 972,
    openRate: 55.0,
    clickRate: 30.0,
    scheduledDate: "2023-06-01",
    sentDate: "2023-06-01",
  },
  {
    id: "6",
    name: "Holiday Special Promotion",
    subject: "Exclusive Holiday Deals Just for You",
    status: "paused",
    audience: "All Customers",
    sent: 8750,
    opened: 3150,
    clicked: 875,
    openRate: 36.0,
    clickRate: 10.0,
    scheduledDate: "2023-06-25",
    sentDate: "2023-06-25",
  },
];

const EmailCampaigns = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [audienceFilter, setAudienceFilter] = React.useState("all");

  const filteredCampaigns = emailCampaigns.filter(
    (campaign) =>
      (statusFilter === "all" || campaign.status === statusFilter) &&
      (audienceFilter === "all" || campaign.audience === audienceFilter) &&
      (campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.subject.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const audiences = [
    ...new Set(emailCampaigns.map((campaign) => campaign.audience)),
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft":
        return "bg-slate-500/10 text-slate-500";
      case "scheduled":
        return "bg-blue-500/10 text-blue-500";
      case "active":
        return "bg-emerald-500/10 text-emerald-500";
      case "completed":
        return "bg-purple-500/10 text-purple-500";
      case "paused":
        return "bg-amber-500/10 text-amber-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  // Calculate statistics
  const totalSent = emailCampaigns.reduce(
    (sum, campaign) => sum + campaign.sent,
    0,
  );
  const totalOpened = emailCampaigns.reduce(
    (sum, campaign) => sum + campaign.opened,
    0,
  );
  const totalClicked = emailCampaigns.reduce(
    (sum, campaign) => sum + campaign.clicked,
    0,
  );
  const avgOpenRate = totalSent > 0 ? (totalOpened / totalSent) * 100 : 0;
  const avgClickRate = totalSent > 0 ? (totalClicked / totalSent) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Campaigns
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {emailCampaigns.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Emails Sent</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {totalSent.toLocaleString()}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Emails Opened
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {totalOpened.toLocaleString()}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Avg. Open Rate
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {avgOpenRate.toFixed(1)}%
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Avg. Click Rate
          </div>
          <div className="mt-1 text-2xl font-bold text-cyan-500">
            {avgClickRate.toFixed(1)}%
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <div className="relative w-full md:w-64">
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
              placeholder="Search campaigns..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="paused">Paused</SelectItem>
            </SelectContent>
          </Select>
          <Select value={audienceFilter} onValueChange={setAudienceFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Audience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Audiences</SelectItem>
              {audiences.map((audience) => (
                <SelectItem key={audience} value={audience}>
                  {audience}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 md:w-auto">
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
          Create Campaign
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Campaign Name</TableHead>
              <TableHead className="text-slate-300">Subject</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Audience</TableHead>
              <TableHead className="text-right text-slate-300">Sent</TableHead>
              <TableHead className="text-right text-slate-300">
                Open Rate
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Click Rate
              </TableHead>
              <TableHead className="text-slate-300">
                Scheduled/Sent Date
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCampaigns.map((campaign) => (
              <TableRow key={campaign.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {campaign.name}
                </TableCell>
                <TableCell>{campaign.subject}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(campaign.status)}`}
                  >
                    {campaign.status.charAt(0).toUpperCase() +
                      campaign.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>{campaign.audience}</TableCell>
                <TableCell className="text-right">
                  {campaign.sent.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  {campaign.openRate}%
                </TableCell>
                <TableCell className="text-right">
                  {campaign.clickRate}%
                </TableCell>
                <TableCell>
                  {campaign.sentDate
                    ? new Date(campaign.sentDate).toLocaleDateString()
                    : campaign.scheduledDate
                      ? new Date(campaign.scheduledDate).toLocaleDateString()
                      : "Not scheduled"}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-1">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <span className="sr-only">View Details</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
                        className="h-4 w-4"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
                        className="h-4 w-4 text-red-500"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      </svg>
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Campaign Performance
            </h3>
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-slate-400">Open Rate</span>
                  <span className="text-sm font-medium text-slate-300">
                    {avgOpenRate.toFixed(1)}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-700">
                  <div
                    className="h-2 rounded-full bg-emerald-500"
                    style={{ width: `${avgOpenRate}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-slate-400">Click Rate</span>
                  <span className="text-sm font-medium text-slate-300">
                    {avgClickRate.toFixed(1)}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-700">
                  <div
                    className="h-2 rounded-full bg-cyan-500"
                    style={{ width: `${avgClickRate}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Conversion Rate
                  </span>
                  <span className="text-sm font-medium text-slate-300">
                    3.2%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-700">
                  <div
                    className="h-2 rounded-full bg-purple-500"
                    style={{ width: `3.2%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Campaign Status Distribution
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  status: "draft",
                  count: emailCampaigns.filter((c) => c.status === "draft")
                    .length,
                  color: "bg-slate-500",
                },
                {
                  status: "scheduled",
                  count: emailCampaigns.filter((c) => c.status === "scheduled")
                    .length,
                  color: "bg-blue-500",
                },
                {
                  status: "active",
                  count: emailCampaigns.filter((c) => c.status === "active")
                    .length,
                  color: "bg-emerald-500",
                },
                {
                  status: "completed",
                  count: emailCampaigns.filter((c) => c.status === "completed")
                    .length,
                  color: "bg-purple-500",
                },
                {
                  status: "paused",
                  count: emailCampaigns.filter((c) => c.status === "paused")
                    .length,
                  color: "bg-amber-500",
                },
              ].map((item) => (
                <div
                  key={item.status}
                  className="rounded-lg border border-slate-700 bg-slate-800 p-4"
                >
                  <div className="flex items-center space-x-2">
                    <div className={`h-3 w-3 rounded-full ${item.color}`}></div>
                    <span className="text-sm font-medium text-slate-300">
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </span>
                  </div>
                  <div className="mt-2 text-2xl font-bold text-white">
                    {item.count}
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

export default EmailCampaigns;
