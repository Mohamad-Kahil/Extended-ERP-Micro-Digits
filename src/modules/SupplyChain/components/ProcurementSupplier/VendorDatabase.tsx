import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Vendor {
  id: string;
  name: string;
  category: string;
  contactPerson: string;
  email: string;
  phone: string;
  status: "active" | "inactive" | "pending";
  rating: number;
  lastOrderDate: string;
}

interface VendorDatabaseProps {
  searchTerm: string;
}

const vendors: Vendor[] = [
  {
    id: "1",
    name: "Global Manufacturing Inc.",
    category: "Raw Materials",
    contactPerson: "John Smith",
    email: "john.smith@globalmfg.com",
    phone: "(555) 123-4567",
    status: "active",
    rating: 4.8,
    lastOrderDate: "2023-06-15",
  },
  {
    id: "2",
    name: "Tech Components Ltd.",
    category: "Electronics",
    contactPerson: "Sarah Johnson",
    email: "sarah@techcomponents.com",
    phone: "(555) 234-5678",
    status: "active",
    rating: 4.5,
    lastOrderDate: "2023-06-10",
  },
  {
    id: "3",
    name: "Packaging Solutions Co.",
    category: "Packaging",
    contactPerson: "Michael Brown",
    email: "michael@packagingsolutions.com",
    phone: "(555) 345-6789",
    status: "active",
    rating: 4.2,
    lastOrderDate: "2023-06-05",
  },
  {
    id: "4",
    name: "Logistics Partners LLC",
    category: "Transportation",
    contactPerson: "Emily Davis",
    email: "emily@logisticspartners.com",
    phone: "(555) 456-7890",
    status: "inactive",
    rating: 3.7,
    lastOrderDate: "2023-05-20",
  },
  {
    id: "5",
    name: "Quality Chemical Supply",
    category: "Chemicals",
    contactPerson: "David Wilson",
    email: "david@qualitychemical.com",
    phone: "(555) 567-8901",
    status: "active",
    rating: 4.6,
    lastOrderDate: "2023-06-18",
  },
  {
    id: "6",
    name: "Precision Metals Corp.",
    category: "Raw Materials",
    contactPerson: "Jennifer Taylor",
    email: "jennifer@precisionmetals.com",
    phone: "(555) 678-9012",
    status: "active",
    rating: 4.9,
    lastOrderDate: "2023-06-12",
  },
  {
    id: "7",
    name: "EcoPackage Industries",
    category: "Packaging",
    contactPerson: "Robert Martinez",
    email: "robert@ecopackage.com",
    phone: "(555) 789-0123",
    status: "pending",
    rating: 4.0,
    lastOrderDate: "2023-05-30",
  },
];

const VendorDatabase = ({ searchTerm }: VendorDatabaseProps) => {
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const filteredVendors = vendors.filter(
    (vendor) =>
      (categoryFilter === "all" || vendor.category === categoryFilter) &&
      (statusFilter === "all" || vendor.status === statusFilter) &&
      (vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.email.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const categories = [...new Set(vendors.map((vendor) => vendor.category))];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500/10 text-emerald-500";
      case "inactive":
        return "bg-red-500/10 text-red-500";
      case "pending":
        return "bg-amber-500/10 text-amber-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Vendor Name</TableHead>
              <TableHead className="text-slate-300">Category</TableHead>
              <TableHead className="text-slate-300">Contact Person</TableHead>
              <TableHead className="text-slate-300">Contact Info</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Rating</TableHead>
              <TableHead className="text-slate-300">Last Order</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVendors.map((vendor) => (
              <TableRow key={vendor.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {vendor.name}
                </TableCell>
                <TableCell>{vendor.category}</TableCell>
                <TableCell>{vendor.contactPerson}</TableCell>
                <TableCell>
                  <div className="text-xs">
                    <div>{vendor.email}</div>
                    <div>{vendor.phone}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      vendor.status === "active"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : vendor.status === "pending"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {vendor.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <span className="mr-2 font-medium">{vendor.rating}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(vendor.lastOrderDate).toLocaleDateString()}
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
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                      </svg>
                      <span className="sr-only">Create Order</span>
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

export default VendorDatabase;
