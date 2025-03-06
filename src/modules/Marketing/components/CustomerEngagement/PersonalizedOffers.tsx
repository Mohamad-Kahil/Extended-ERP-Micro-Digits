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

interface PersonalizedOffer {
  id: string;
  name: string;
  type: "discount" | "bundle" | "free_shipping" | "gift" | "loyalty";
  targetSegment: string;
  discount: number;
  status: "active" | "scheduled" | "ended" | "draft";
  redemptions: number;
  conversionRate: number;
  startDate: string;
  endDate: string;
}

const personalizedOffers: PersonalizedOffer[] = [
  {
    id: "1",
    name: "Summer Tech Bundle",
    type: "bundle",
    targetSegment: "Tech Enthusiasts",
    discount: 15,
    status: "active",
    redemptions: 342,
    conversionRate: 8.5,
    startDate: "2023-06-01",
    endDate: "2023-07-31",
  },
  {
    id: "2",
    name: "First Purchase Discount",
    type: "discount",
    targetSegment: "New Customers",
    discount: 20,
    status: "active",
    redemptions: 528,
    conversionRate: 12.3,
    startDate: "2023-05-15",
    endDate: "2023-08-15",
  },
  {
    id: "3",
    name: "Free Shipping Weekend",
    type: "free_shipping",
    targetSegment: "All Customers",
    discount: 0,
    status: "scheduled",
    redemptions: 0,
    conversionRate: 0,
    startDate: "2023-07-14",
    endDate: "2023-07-16",
  },
  {
    id: "4",
    name: "Loyalty Member Bonus",
    type: "loyalty",
    targetSegment: "Loyalty Program Members",
    discount: 10,
    status: "active",
    redemptions: 215,
    conversionRate: 15.8,
    startDate: "2023-06-15",
    endDate: "2023-07-15",
  },
  {
    id: "5",
    name: "Win-Back Campaign",
    type: "discount",
    targetSegment: "Lapsed Customers",
    discount: 25,
    status: "draft",
    redemptions: 0,
    conversionRate: 0,
    startDate: "2023-07-20",
    endDate: "2023-08-20",
  },
  {
    id: "6",
    name: "Free Gift with Purchase",
    type: "gift",
    targetSegment: "High-Value Customers",
    discount: 0,
    status: "ended",
    redemptions: 187,
    conversionRate: 22.4,
    startDate: "2023-05-01",
    endDate: "2023-06-01",
  },
];

const PersonalizedOffers = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [typeFilter, setTypeFilter] = React.useState("all");

  const filteredOffers = personalizedOffers.filter(
    (offer) =>
      (statusFilter === "all" || offer.status === statusFilter) &&
      (typeFilter === "all" || offer.type === typeFilter) &&
      (offer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.targetSegment.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500/10 text-emerald-500";
      case "scheduled":
        return "bg-blue-500/10 text-blue-500";
      case "ended":
        return "bg-slate-500/10 text-slate-500";
      case "draft":
        return "bg-amber-500/10 text-amber-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "discount":
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
            className="text-emerald-500"
          >
            <line x1="19" y1="5" x2="5" y2="19" />
            <circle cx="6.5" cy="6.5" r="2.5" />
            <circle cx="17.5" cy="17.5" r="2.5" />
          </svg>
        );
      case "bundle":
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
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.29 7 12 12 20.71 7" />
            <line x1="12" y1="22" x2="12" y2="12" />
          </svg>
        );
      case "free_shipping":
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
            className="text-purple-500"
          >
            <rect x="1" y="3" width="15" height="13" />
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
        );
      case "gift":
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
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
        );
      case "loyalty":
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
            className="text-amber-500"
          >
            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Calculate statistics
  const totalRedemptions = personalizedOffers.reduce(
    (sum, offer) => sum + offer.redemptions,
    0,
  );
  const activeOffers = personalizedOffers.filter(
    (offer) => offer.status === "active",
  ).length;
  const avgConversionRate =
    personalizedOffers.filter((offer) => offer.conversionRate > 0).length > 0
      ? personalizedOffers
          .filter((offer) => offer.conversionRate > 0)
          .reduce((sum, offer) => sum + offer.conversionRate, 0) /
        personalizedOffers.filter((offer) => offer.conversionRate > 0).length
      : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Total Offers</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {personalizedOffers.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Active Offers
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {activeOffers}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Redemptions</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {totalRedemptions.toLocaleString()}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Avg. Conversion Rate
          </div>
          <div className="mt-1 text-2xl font-bold text-cyan-500">
            {avgConversionRate.toFixed(1)}%
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
              placeholder="Search offers..."
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
              <SelectItem value="ended">Ended</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Offer Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="discount">Discount</SelectItem>
              <SelectItem value="bundle">Bundle</SelectItem>
              <SelectItem value="free_shipping">Free Shipping</SelectItem>
              <SelectItem value="gift">Gift</SelectItem>
              <SelectItem value="loyalty">Loyalty</SelectItem>
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
          Create Offer
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Offer Name</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Target Segment</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-right text-slate-300">
                Discount
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Redemptions
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Conversion Rate
              </TableHead>
              <TableHead className="text-slate-300">Date Range</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOffers.map((offer) => (
              <TableRow key={offer.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {offer.name}
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(offer.type)}
                    <span className="text-sm">
                      {offer.type
                        .split("_")
                        .map(
                          (word) =>
                            word.charAt(0).toUpperCase() + word.slice(1),
                        )
                        .join(" ")}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{offer.targetSegment}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(offer.status)}`}
                  >
                    {offer.status.charAt(0).toUpperCase() +
                      offer.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  {offer.discount > 0 ? `${offer.discount}%` : "-"}
                </TableCell>
                <TableCell className="text-right">
                  {offer.redemptions.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  {offer.conversionRate > 0 ? `${offer.conversionRate}%` : "-"}
                </TableCell>
                <TableCell>
                  {new Date(offer.startDate).toLocaleDateString()} -{" "}
                  {new Date(offer.endDate).toLocaleDateString()}
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
    </div>
  );
};

export default PersonalizedOffers;
