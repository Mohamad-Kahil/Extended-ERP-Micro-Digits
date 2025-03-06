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

interface CustomerSegment {
  id: string;
  name: string;
  description: string;
  criteria: string[];
  customerCount: number;
  averageOrderValue: number;
  purchaseFrequency: number;
  engagementScore: number;
  createdDate: string;
  lastUpdated: string;
}

const customerSegments: CustomerSegment[] = [
  {
    id: "1",
    name: "High-Value Customers",
    description: "Customers with high lifetime value and frequent purchases",
    criteria: [
      "Lifetime Value > $1000",
      "Purchase Frequency > 5 per year",
      "Active in last 30 days",
    ],
    customerCount: 1250,
    averageOrderValue: 210.5,
    purchaseFrequency: 8.2,
    engagementScore: 85,
    createdDate: "2023-01-15",
    lastUpdated: "2023-06-20",
  },
  {
    id: "2",
    name: "Tech Enthusiasts",
    description: "Customers interested in technology products",
    criteria: [
      "Purchased in Tech category",
      "Viewed tech products > 10 times",
      "Email open rate > 40%",
    ],
    customerCount: 3450,
    averageOrderValue: 175.25,
    purchaseFrequency: 4.5,
    engagementScore: 72,
    createdDate: "2023-02-10",
    lastUpdated: "2023-06-15",
  },
  {
    id: "3",
    name: "Cart Abandoners",
    description: "Customers who abandoned their shopping carts",
    criteria: [
      "Abandoned cart in last 14 days",
      "Items in cart value > $50",
      "Visited site > 3 times",
    ],
    customerCount: 5680,
    averageOrderValue: 0,
    purchaseFrequency: 1.2,
    engagementScore: 45,
    createdDate: "2023-03-05",
    lastUpdated: "2023-06-25",
  },
  {
    id: "4",
    name: "New Customers",
    description: "Customers who made their first purchase in the last 30 days",
    criteria: [
      "First purchase in last 30 days",
      "Account created in last 45 days",
    ],
    customerCount: 2150,
    averageOrderValue: 95.75,
    purchaseFrequency: 1.0,
    engagementScore: 60,
    createdDate: "2023-04-12",
    lastUpdated: "2023-06-28",
  },
  {
    id: "5",
    name: "Lapsed Customers",
    description:
      "Previously active customers who haven't purchased in 90+ days",
    criteria: [
      "No purchase in last 90 days",
      "Previously purchased > 2 times",
      "Last purchase 90-180 days ago",
    ],
    customerCount: 4250,
    averageOrderValue: 125.5,
    purchaseFrequency: 0.5,
    engagementScore: 30,
    createdDate: "2023-05-08",
    lastUpdated: "2023-06-22",
  },
  {
    id: "6",
    name: "Loyalty Program Members",
    description: "Customers enrolled in the loyalty program",
    criteria: [
      "Loyalty program member",
      "Points balance > 500",
      "Member for > 60 days",
    ],
    customerCount: 3850,
    averageOrderValue: 185.25,
    purchaseFrequency: 6.8,
    engagementScore: 78,
    createdDate: "2023-01-30",
    lastUpdated: "2023-06-18",
  },
];

const CustomerSegmentation = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedSegment, setSelectedSegment] = React.useState<string | null>(
    null,
  );

  const filteredSegments = customerSegments.filter(
    (segment) =>
      segment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      segment.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const selectedSegmentData = selectedSegment
    ? customerSegments.find((segment) => segment.id === selectedSegment)
    : null;

  // Calculate total customers across all segments
  const totalCustomers = customerSegments.reduce(
    (sum, segment) => sum + segment.customerCount,
    0,
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Segments
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {customerSegments.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Customers
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {totalCustomers.toLocaleString()}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Avg. Order Value
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 2,
            }).format(
              customerSegments.reduce(
                (sum, segment) => sum + segment.averageOrderValue,
                0,
              ) / customerSegments.length,
            )}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Avg. Engagement
          </div>
          <div className="mt-1 text-2xl font-bold text-cyan-500">
            {Math.round(
              customerSegments.reduce(
                (sum, segment) => sum + segment.engagementScore,
                0,
              ) / customerSegments.length,
            )}
            %
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
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
            placeholder="Search segments..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
          Create Segment
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Segment Name</TableHead>
                  <TableHead className="text-slate-300">Description</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Customers
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Avg. Order
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Engagement
                  </TableHead>
                  <TableHead className="text-right text-slate-300">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSegments.map((segment) => (
                  <TableRow
                    key={segment.id}
                    className={`border-slate-800 ${selectedSegment === segment.id ? "bg-slate-800/50" : ""}`}
                    onClick={() =>
                      setSelectedSegment(
                        selectedSegment === segment.id ? null : segment.id,
                      )
                    }
                  >
                    <TableCell className="font-medium text-slate-300">
                      {segment.name}
                    </TableCell>
                    <TableCell>{segment.description}</TableCell>
                    <TableCell className="text-right">
                      {segment.customerCount.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 2,
                      }).format(segment.averageOrderValue)}
                    </TableCell>
                    <TableCell className="text-right">
                      {segment.engagementScore}%
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                          </svg>
                          <span className="sr-only">Export</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div>
          {selectedSegmentData ? (
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {selectedSegmentData.name} - Segment Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Description
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {selectedSegmentData.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Segment Criteria
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {selectedSegmentData.criteria.map((criterion, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm text-slate-300"
                        >
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
                            className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500"
                          >
                            <polyline points="9 11 12 14 22 4" />
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                          </svg>
                          {criterion}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Customer Count
                      </h4>
                      <p className="mt-1 text-xl font-bold text-white">
                        {selectedSegmentData.customerCount.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Avg. Order Value
                      </h4>
                      <p className="mt-1 text-xl font-bold text-emerald-500">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          maximumFractionDigits: 2,
                        }).format(selectedSegmentData.averageOrderValue)}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Purchase Frequency
                      </h4>
                      <p className="mt-1 text-xl font-bold text-white">
                        {selectedSegmentData.purchaseFrequency.toFixed(1)} /
                        year
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Engagement Score
                      </h4>
                      <p className="mt-1 text-xl font-bold text-cyan-500">
                        {selectedSegmentData.engagementScore}%
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Created Date
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {new Date(
                          selectedSegmentData.createdDate,
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Last Updated
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {new Date(
                          selectedSegmentData.lastUpdated,
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
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
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.9" />
                        <path d="M16 2v4" />
                        <path d="M8 2v4" />
                        <path d="M3 10h18" />
                      </svg>
                      Schedule Campaign
                    </Button>
                    <Button variant="outline" className="w-full">
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
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      Export List
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="flex h-[500px] items-center justify-center p-6">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto mb-4 text-slate-600"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <h3 className="mb-1 text-lg font-medium text-slate-400">
                    Select a segment
                  </h3>
                  <p className="text-sm text-slate-500">
                    Click on a segment to view detailed information
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerSegmentation;
