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

interface Promotion {
  id: string;
  code: string;
  name: string;
  type: "percentage" | "fixed" | "bogo" | "free-shipping";
  value: number;
  status: "active" | "scheduled" | "expired" | "draft";
  startDate: string;
  endDate: string;
  usageLimit: number;
  usageCount: number;
  minimumPurchase?: number;
  applicableProducts: string;
  description: string;
}

const promotions: Promotion[] = [
  {
    id: "1",
    code: "SUMMER25",
    name: "Summer Sale 25% Off",
    type: "percentage",
    value: 25,
    status: "active",
    startDate: "2023-06-01",
    endDate: "2023-08-31",
    usageLimit: 1000,
    usageCount: 342,
    minimumPurchase: 50,
    applicableProducts: "All Products",
    description: "25% off all products for summer season",
  },
  {
    id: "2",
    code: "NEWCUST20",
    name: "New Customer 20% Off",
    type: "percentage",
    value: 20,
    status: "active",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    usageLimit: 0,
    usageCount: 587,
    applicableProducts: "All Products",
    description: "20% off first purchase for new customers",
  },
  {
    id: "3",
    code: "FREESHIP50",
    name: "Free Shipping Over $50",
    type: "free-shipping",
    value: 0,
    status: "active",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    usageLimit: 0,
    usageCount: 1245,
    minimumPurchase: 50,
    applicableProducts: "All Products",
    description: "Free shipping on orders over $50",
  },
  {
    id: "4",
    code: "BOGO50",
    name: "Buy One Get One 50% Off",
    type: "bogo",
    value: 50,
    status: "scheduled",
    startDate: "2023-07-15",
    endDate: "2023-07-31",
    usageLimit: 500,
    usageCount: 0,
    applicableProducts: "Smart Home Products",
    description: "Buy one smart home product, get another 50% off",
  },
  {
    id: "5",
    code: "FLAT25",
    name: "$25 Off Orders Over $100",
    type: "fixed",
    value: 25,
    status: "expired",
    startDate: "2023-05-01",
    endDate: "2023-05-31",
    usageLimit: 750,
    usageCount: 682,
    minimumPurchase: 100,
    applicableProducts: "All Products",
    description: "$25 off orders over $100",
  },
  {
    id: "6",
    code: "HOLIDAY30",
    name: "Holiday Season 30% Off",
    type: "percentage",
    value: 30,
    status: "draft",
    startDate: "2023-11-15",
    endDate: "2023-12-31",
    usageLimit: 2000,
    usageCount: 0,
    applicableProducts: "All Products",
    description: "30% off all products for the holiday season",
  },
];

const Promotions = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [typeFilter, setTypeFilter] = React.useState("all");

  const filteredPromotions = promotions.filter(
    (promotion) =>
      (statusFilter === "all" || promotion.status === statusFilter) &&
      (typeFilter === "all" || promotion.type === typeFilter) &&
      (promotion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        promotion.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        promotion.description.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500/10 text-emerald-500";
      case "scheduled":
        return "bg-blue-500/10 text-blue-500";
      case "expired":
        return "bg-slate-500/10 text-slate-500";
      case "draft":
        return "bg-amber-500/10 text-amber-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "percentage":
        return "bg-purple-500/10 text-purple-500";
      case "fixed":
        return "bg-blue-500/10 text-blue-500";
      case "bogo":
        return "bg-amber-500/10 text-amber-500";
      case "free-shipping":
        return "bg-green-500/10 text-green-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const formatPromotionValue = (promotion: Promotion) => {
    switch (promotion.type) {
      case "percentage":
        return `${promotion.value}%`;
      case "fixed":
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(promotion.value);
      case "bogo":
        return `${promotion.value}%`;
      case "free-shipping":
        return "Free Shipping";
      default:
        return "";
    }
  };

  // Calculate statistics
  const activePromotions = promotions.filter(
    (p) => p.status === "active",
  ).length;
  const scheduledPromotions = promotions.filter(
    (p) => p.status === "scheduled",
  ).length;
  const totalRedemptions = promotions.reduce((sum, p) => sum + p.usageCount, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Active Promotions
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {activePromotions}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Scheduled Promotions
          </div>
          <div className="mt-1 text-2xl font-bold text-blue-500">
            {scheduledPromotions}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Redemptions
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {totalRedemptions.toLocaleString()}
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
              placeholder="Search promotions..."
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
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="percentage">Percentage</SelectItem>
              <SelectItem value="fixed">Fixed Amount</SelectItem>
              <SelectItem value="bogo">Buy One Get One</SelectItem>
              <SelectItem value="free-shipping">Free Shipping</SelectItem>
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
          Create Promotion
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Code</TableHead>
              <TableHead className="text-slate-300">Promotion</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Value</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Date Range</TableHead>
              <TableHead className="text-right text-slate-300">Usage</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPromotions.map((promotion) => (
              <TableRow key={promotion.id} className="border-slate-800">
                <TableCell className="font-mono font-medium text-slate-300">
                  {promotion.code}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium text-slate-300">
                      {promotion.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {promotion.description}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getTypeColor(promotion.type)}`}
                  >
                    {promotion.type
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")}
                  </span>
                </TableCell>
                <TableCell>{formatPromotionValue(promotion)}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(promotion.status)}`}
                  >
                    {promotion.status.charAt(0).toUpperCase() +
                      promotion.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  {new Date(promotion.startDate).toLocaleDateString()} -{" "}
                  {new Date(promotion.endDate).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  {promotion.usageCount} /{" "}
                  {promotion.usageLimit > 0 ? promotion.usageLimit : "∞"}
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
    </div>
  );
};

export default Promotions;
