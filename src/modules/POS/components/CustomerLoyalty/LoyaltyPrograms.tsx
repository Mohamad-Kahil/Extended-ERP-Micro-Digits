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

interface LoyaltyProgram {
  id: string;
  name: string;
  type: "points" | "tier" | "cashback" | "subscription";
  status: "active" | "inactive" | "draft";
  members: number;
  pointsIssued: number;
  pointsRedeemed: number;
  startDate: string;
  endDate?: string;
  description: string;
}

const loyaltyPrograms: LoyaltyProgram[] = [
  {
    id: "1",
    name: "Smart Home Rewards",
    type: "points",
    status: "active",
    members: 1250,
    pointsIssued: 125000,
    pointsRedeemed: 78500,
    startDate: "2023-01-15",
    description:
      "Earn 1 point for every $1 spent. Redeem points for discounts on future purchases.",
  },
  {
    id: "2",
    name: "Premium Customer Tiers",
    type: "tier",
    status: "active",
    members: 850,
    pointsIssued: 0,
    pointsRedeemed: 0,
    startDate: "2023-02-01",
    description:
      "Silver, Gold, and Platinum tiers with increasing benefits based on annual spend.",
  },
  {
    id: "3",
    name: "Security Products Cashback",
    type: "cashback",
    status: "active",
    members: 720,
    pointsIssued: 0,
    pointsRedeemed: 0,
    startDate: "2023-03-10",
    description:
      "5% cashback on all security product purchases, credited to customer account.",
  },
  {
    id: "4",
    name: "Smart Home Pro Subscription",
    type: "subscription",
    status: "draft",
    members: 0,
    pointsIssued: 0,
    pointsRedeemed: 0,
    startDate: "2023-07-01",
    description:
      "Monthly subscription for premium support, early access to products, and exclusive discounts.",
  },
  {
    id: "5",
    name: "Holiday Bonus Points",
    type: "points",
    status: "inactive",
    members: 980,
    pointsIssued: 49000,
    pointsRedeemed: 42300,
    startDate: "2022-11-15",
    endDate: "2023-01-15",
    description: "Double points on all purchases during the holiday season.",
  },
];

interface LoyaltyMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  points: number;
  tier: string;
  lifetimeValue: number;
  lastPurchase: string;
}

const loyaltyMembers: LoyaltyMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "(555) 123-4567",
    joinDate: "2023-01-20",
    points: 1250,
    tier: "Gold",
    lifetimeValue: 3450.75,
    lastPurchase: "2023-06-15",
  },
  {
    id: "2",
    name: "Michael Wilson",
    email: "m.wilson@example.com",
    phone: "(555) 234-5678",
    joinDate: "2023-02-05",
    points: 850,
    tier: "Silver",
    lifetimeValue: 1875.5,
    lastPurchase: "2023-06-10",
  },
  {
    id: "3",
    name: "Robert Brown",
    email: "r.brown@example.com",
    phone: "(555) 345-6789",
    joinDate: "2023-02-15",
    points: 2100,
    tier: "Platinum",
    lifetimeValue: 5200.25,
    lastPurchase: "2023-06-22",
  },
  {
    id: "4",
    name: "Jennifer Taylor",
    email: "j.taylor@example.com",
    phone: "(555) 456-7890",
    joinDate: "2023-03-01",
    points: 750,
    tier: "Silver",
    lifetimeValue: 1650.0,
    lastPurchase: "2023-05-30",
  },
  {
    id: "5",
    name: "David Miller",
    email: "d.miller@example.com",
    phone: "(555) 567-8901",
    joinDate: "2023-03-10",
    points: 1800,
    tier: "Gold",
    lifetimeValue: 3950.75,
    lastPurchase: "2023-06-18",
  },
];

const LoyaltyPrograms = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [activeTab, setActiveTab] = React.useState<"programs" | "members">(
    "programs",
  );

  const filteredPrograms = loyaltyPrograms.filter(
    (program) =>
      (statusFilter === "all" || program.status === statusFilter) &&
      program.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredMembers = loyaltyMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.phone.includes(searchTerm),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500/10 text-emerald-500";
      case "inactive":
        return "bg-slate-500/10 text-slate-500";
      case "draft":
        return "bg-amber-500/10 text-amber-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getProgramTypeColor = (type: string) => {
    switch (type) {
      case "points":
        return "bg-blue-500/10 text-blue-500";
      case "tier":
        return "bg-purple-500/10 text-purple-500";
      case "cashback":
        return "bg-green-500/10 text-green-500";
      case "subscription":
        return "bg-amber-500/10 text-amber-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Platinum":
        return "bg-purple-500/10 text-purple-500";
      case "Gold":
        return "bg-amber-500/10 text-amber-500";
      case "Silver":
        return "bg-slate-500/10 text-slate-400";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-2 border-b border-slate-800">
        <Button
          variant="ghost"
          className={`rounded-none border-b-2 px-4 py-2 ${activeTab === "programs" ? "border-cyan-500 text-cyan-500" : "border-transparent"}`}
          onClick={() => setActiveTab("programs")}
        >
          Loyalty Programs
        </Button>
        <Button
          variant="ghost"
          className={`rounded-none border-b-2 px-4 py-2 ${activeTab === "members" ? "border-cyan-500 text-cyan-500" : "border-transparent"}`}
          onClick={() => setActiveTab("members")}
        >
          Loyalty Members
        </Button>
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
              placeholder={`Search ${activeTab === "programs" ? "programs" : "members"}...`}
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {activeTab === "programs" && (
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          )}
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
          {activeTab === "programs" ? "Create Program" : "Add Member"}
        </Button>
      </div>

      {activeTab === "programs" ? (
        <div className="rounded-md border border-slate-800">
          <Table>
            <TableHeader className="bg-slate-800">
              <TableRow>
                <TableHead className="text-slate-300">Program Name</TableHead>
                <TableHead className="text-slate-300">Type</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-right text-slate-300">
                  Members
                </TableHead>
                <TableHead className="text-right text-slate-300">
                  Points Issued
                </TableHead>
                <TableHead className="text-right text-slate-300">
                  Points Redeemed
                </TableHead>
                <TableHead className="text-slate-300">Start Date</TableHead>
                <TableHead className="text-right text-slate-300">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPrograms.map((program) => (
                <TableRow key={program.id} className="border-slate-800">
                  <TableCell className="font-medium text-slate-300">
                    <div>
                      <div>{program.name}</div>
                      <div className="text-xs text-slate-500">
                        {program.description}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getProgramTypeColor(program.type)}`}
                    >
                      {program.type.charAt(0).toUpperCase() +
                        program.type.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(program.status)}`}
                    >
                      {program.status.charAt(0).toUpperCase() +
                        program.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    {program.members.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    {program.pointsIssued.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    {program.pointsRedeemed.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {new Date(program.startDate).toLocaleDateString()}
                    {program.endDate &&
                      ` - ${new Date(program.endDate).toLocaleDateString()}`}
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
                          className="h-4 w-4 text-blue-500"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                        <span className="sr-only">View Details</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="rounded-md border border-slate-800">
          <Table>
            <TableHeader className="bg-slate-800">
              <TableRow>
                <TableHead className="text-slate-300">Member</TableHead>
                <TableHead className="text-slate-300">Contact</TableHead>
                <TableHead className="text-slate-300">Join Date</TableHead>
                <TableHead className="text-right text-slate-300">
                  Points
                </TableHead>
                <TableHead className="text-slate-300">Tier</TableHead>
                <TableHead className="text-right text-slate-300">
                  Lifetime Value
                </TableHead>
                <TableHead className="text-slate-300">Last Purchase</TableHead>
                <TableHead className="text-right text-slate-300">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.map((member) => (
                <TableRow key={member.id} className="border-slate-800">
                  <TableCell className="font-medium text-slate-300">
                    {member.name}
                  </TableCell>
                  <TableCell>
                    <div className="text-xs">{member.email}</div>
                    <div className="text-xs text-slate-500">{member.phone}</div>
                  </TableCell>
                  <TableCell>
                    {new Date(member.joinDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    {member.points.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getTierColor(member.tier)}`}
                    >
                      {member.tier}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(member.lifetimeValue)}
                  </TableCell>
                  <TableCell>
                    {new Date(member.lastPurchase).toLocaleDateString()}
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
                          className="h-4 w-4 text-blue-500"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                        <span className="sr-only">View Details</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default LoyaltyPrograms;
