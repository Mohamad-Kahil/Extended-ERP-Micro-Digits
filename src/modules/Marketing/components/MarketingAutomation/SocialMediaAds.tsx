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

interface SocialAd {
  id: string;
  name: string;
  platform: "facebook" | "instagram" | "twitter" | "linkedin" | "tiktok";
  status: "draft" | "scheduled" | "active" | "completed" | "paused";
  audience: string;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  startDate?: string;
  endDate?: string;
}

const socialAds: SocialAd[] = [
  {
    id: "1",
    name: "Summer Collection Promotion",
    platform: "facebook",
    status: "active",
    audience: "General Interest",
    budget: 5000,
    spent: 2150,
    impressions: 125000,
    clicks: 3750,
    ctr: 3.0,
    cpc: 0.57,
    conversions: 225,
    startDate: "2023-06-01",
    endDate: "2023-07-15",
  },
  {
    id: "2",
    name: "Smart Home Product Launch",
    platform: "instagram",
    status: "scheduled",
    audience: "Tech Enthusiasts",
    budget: 7500,
    spent: 0,
    impressions: 0,
    clicks: 0,
    ctr: 0,
    cpc: 0,
    conversions: 0,
    startDate: "2023-07-10",
    endDate: "2023-08-10",
  },
  {
    id: "3",
    name: "Brand Awareness Campaign",
    platform: "twitter",
    status: "completed",
    audience: "General Interest",
    budget: 3000,
    spent: 3000,
    impressions: 85000,
    clicks: 2125,
    ctr: 2.5,
    cpc: 1.41,
    conversions: 105,
    startDate: "2023-05-01",
    endDate: "2023-05-31",
  },
  {
    id: "4",
    name: "B2B Solution Promotion",
    platform: "linkedin",
    status: "active",
    audience: "Business Professionals",
    budget: 6000,
    spent: 2400,
    impressions: 45000,
    clicks: 1800,
    ctr: 4.0,
    cpc: 1.33,
    conversions: 90,
    startDate: "2023-06-15",
    endDate: "2023-07-31",
  },
  {
    id: "5",
    name: "Youth Product Campaign",
    platform: "tiktok",
    status: "draft",
    audience: "Gen Z",
    budget: 4500,
    spent: 0,
    impressions: 0,
    clicks: 0,
    ctr: 0,
    cpc: 0,
    conversions: 0,
  },
  {
    id: "6",
    name: "Holiday Special Promotion",
    platform: "facebook",
    status: "paused",
    audience: "General Interest",
    budget: 5500,
    spent: 1250,
    impressions: 62500,
    clicks: 1875,
    ctr: 3.0,
    cpc: 0.67,
    conversions: 95,
    startDate: "2023-06-10",
    endDate: "2023-07-10",
  },
];

const SocialMediaAds = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [platformFilter, setPlatformFilter] = React.useState("all");

  const filteredAds = socialAds.filter(
    (ad) =>
      (statusFilter === "all" || ad.status === statusFilter) &&
      (platformFilter === "all" || ad.platform === platformFilter) &&
      (ad.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ad.audience.toLowerCase().includes(searchTerm.toLowerCase())),
  );

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

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return (
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
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        );
      case "instagram":
        return (
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
            className="text-pink-500"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case "twitter":
        return (
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
            className="text-blue-400"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        );
      case "linkedin":
        return (
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
            className="text-blue-600"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        );
      case "tiktok":
        return (
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
            className="text-slate-300"
          >
            <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
            <path d="M15 8v8a4 4 0 0 1-4 4" />
            <line x1="9" x2="9" y1="12" y2="4" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Calculate statistics
  const totalBudget = socialAds.reduce((sum, ad) => sum + ad.budget, 0);
  const totalSpent = socialAds.reduce((sum, ad) => sum + ad.spent, 0);
  const totalImpressions = socialAds.reduce(
    (sum, ad) => sum + ad.impressions,
    0,
  );
  const totalClicks = socialAds.reduce((sum, ad) => sum + ad.clicks, 0);
  const totalConversions = socialAds.reduce(
    (sum, ad) => sum + ad.conversions,
    0,
  );
  const avgCTR =
    totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
  const avgCPC = totalClicks > 0 ? totalSpent / totalClicks : 0;
  const conversionRate =
    totalClicks > 0 ? (totalConversions / totalClicks) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Total Budget</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(totalBudget)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Total Spent</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(totalSpent)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Avg. CTR</div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {avgCTR.toFixed(2)}%
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Avg. CPC</div>
          <div className="mt-1 text-2xl font-bold text-cyan-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 2,
            }).format(avgCPC)}
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
              placeholder="Search ads..."
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
          <Select value={platformFilter} onValueChange={setPlatformFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
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
          Create Ad Campaign
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Campaign Name</TableHead>
              <TableHead className="text-slate-300">Platform</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Audience</TableHead>
              <TableHead className="text-right text-slate-300">
                Budget
              </TableHead>
              <TableHead className="text-right text-slate-300">Spent</TableHead>
              <TableHead className="text-right text-slate-300">
                Impressions
              </TableHead>
              <TableHead className="text-right text-slate-300">CTR</TableHead>
              <TableHead className="text-right text-slate-300">CPC</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAds.map((ad) => (
              <TableRow key={ad.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {ad.name}
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {getPlatformIcon(ad.platform)}
                    <span className="text-sm">
                      {ad.platform.charAt(0).toUpperCase() +
                        ad.platform.slice(1)}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(ad.status)}`}
                  >
                    {ad.status.charAt(0).toUpperCase() + ad.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>{ad.audience}</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(ad.budget)}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(ad.spent)}
                </TableCell>
                <TableCell className="text-right">
                  {ad.impressions.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">{ad.ctr}%</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 2,
                  }).format(ad.cpc)}
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
              Performance Metrics
            </h3>
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Click-Through Rate (CTR)
                  </span>
                  <span className="text-sm font-medium text-slate-300">
                    {avgCTR.toFixed(2)}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-700">
                  <div
                    className="h-2 rounded-full bg-emerald-500"
                    style={{ width: `${Math.min(avgCTR * 10, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Conversion Rate
                  </span>
                  <span className="text-sm font-medium text-slate-300">
                    {conversionRate.toFixed(2)}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-700">
                  <div
                    className="h-2 rounded-full bg-cyan-500"
                    style={{ width: `${Math.min(conversionRate * 5, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Budget Utilization
                  </span>
                  <span className="text-sm font-medium text-slate-300">
                    {totalBudget > 0
                      ? ((totalSpent / totalBudget) * 100).toFixed(1)
                      : 0}
                    %
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-700">
                  <div
                    className="h-2 rounded-full bg-purple-500"
                    style={{
                      width: `${totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Platform Distribution
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  platform: "facebook",
                  count: socialAds.filter((ad) => ad.platform === "facebook")
                    .length,
                  color: "bg-blue-500",
                },
                {
                  platform: "instagram",
                  count: socialAds.filter((ad) => ad.platform === "instagram")
                    .length,
                  color: "bg-pink-500",
                },
                {
                  platform: "twitter",
                  count: socialAds.filter((ad) => ad.platform === "twitter")
                    .length,
                  color: "bg-blue-400",
                },
                {
                  platform: "linkedin",
                  count: socialAds.filter((ad) => ad.platform === "linkedin")
                    .length,
                  color: "bg-blue-600",
                },
                {
                  platform: "tiktok",
                  count: socialAds.filter((ad) => ad.platform === "tiktok")
                    .length,
                  color: "bg-slate-300",
                },
              ].map((item) => (
                <div
                  key={item.platform}
                  className="rounded-lg border border-slate-700 bg-slate-800 p-4"
                >
                  <div className="flex items-center space-x-2">
                    <div className={`h-3 w-3 rounded-full ${item.color}`}></div>
                    <span className="text-sm font-medium text-slate-300">
                      {item.platform.charAt(0).toUpperCase() +
                        item.platform.slice(1)}
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

export default SocialMediaAds;
