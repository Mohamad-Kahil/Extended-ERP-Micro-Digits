import React, { useState } from "react";
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

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  subcategory: string;
  family: string;
  price: number;
  stock: number;
  status: "Active" | "Low Stock" | "Out of Stock" | "Discontinued";
  lastUpdated: string;
}

interface ProductListProps {
  searchTerm: string;
}

const ProductList = ({ searchTerm }: ProductListProps) => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const products: Product[] = [
    {
      id: "PRD-001",
      name: "iPhone 13 Pro - 256GB",
      sku: "APPL-IP13P-256",
      category: "Electronics",
      subcategory: "Smartphones",
      family: "Apple",
      price: 999.99,
      stock: 5,
      status: "Low Stock",
      lastUpdated: "2023-09-15",
    },
    {
      id: "PRD-002",
      name: "Samsung Galaxy S22 Ultra",
      sku: "SAMS-GS22U-256",
      category: "Electronics",
      subcategory: "Smartphones",
      family: "Samsung",
      price: 1199.99,
      stock: 12,
      status: "Active",
      lastUpdated: "2023-09-10",
    },
    {
      id: "PRD-003",
      name: "MacBook Pro 16-inch",
      sku: "APPL-MBP16-512",
      category: "Electronics",
      subcategory: "Laptops",
      family: "Apple",
      price: 2499.99,
      stock: 8,
      status: "Active",
      lastUpdated: "2023-09-12",
    },
    {
      id: "PRD-004",
      name: "Ergonomic Office Chair",
      sku: "FURN-CHAIR-ERG1",
      category: "Furniture",
      subcategory: "Office Chairs",
      family: "Office Essentials",
      price: 299.99,
      stock: 3,
      status: "Low Stock",
      lastUpdated: "2023-09-08",
    },
    {
      id: "PRD-005",
      name: "L-Shaped Computer Desk",
      sku: "FURN-DESK-L1",
      category: "Furniture",
      subcategory: "Desks",
      family: "Office Essentials",
      price: 349.99,
      stock: 15,
      status: "Active",
      lastUpdated: "2023-09-05",
    },
    {
      id: "PRD-006",
      name: "Winter Jacket - Medium",
      sku: "CLTH-WJ-M",
      category: "Clothing",
      subcategory: "Outerwear",
      family: "Winter Collection",
      price: 129.99,
      stock: 25,
      status: "Active",
      lastUpdated: "2023-09-01",
    },
    {
      id: "PRD-007",
      name: "Winter Jacket - Large",
      sku: "CLTH-WJ-L",
      category: "Clothing",
      subcategory: "Outerwear",
      family: "Winter Collection",
      price: 129.99,
      stock: 0,
      status: "Out of Stock",
      lastUpdated: "2023-09-01",
    },
    {
      id: "PRD-008",
      name: "Smart TV - 55 inch",
      sku: "ELEC-TV-55",
      category: "Electronics",
      subcategory: "Televisions",
      family: "Smart Home",
      price: 699.99,
      stock: 10,
      status: "Active",
      lastUpdated: "2023-09-03",
    },
    {
      id: "PRD-009",
      name: "Coffee Maker - Premium",
      sku: "APPL-CM-PREM",
      category: "Home Appliances",
      subcategory: "Kitchen Appliances",
      family: "Kitchen Essentials",
      price: 149.99,
      stock: 6,
      status: "Low Stock",
      lastUpdated: "2023-09-07",
    },
    {
      id: "PRD-010",
      name: "Wireless Headphones",
      sku: "ELEC-WH-NOISE",
      category: "Electronics",
      subcategory: "Audio",
      family: "Audio Essentials",
      price: 249.99,
      stock: 0,
      status: "Discontinued",
      lastUpdated: "2023-08-15",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      (categoryFilter === "all" || product.category === categoryFilter) &&
      (statusFilter === "all" || product.status === statusFilter) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.family.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Get unique categories for filter
  const categories = [...new Set(products.map((product) => product.category))];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500/10 text-emerald-500";
      case "Low Stock":
        return "bg-amber-500/10 text-amber-500";
      case "Out of Stock":
        return "bg-red-500/10 text-red-500";
      case "Discontinued":
        return "bg-slate-500/10 text-slate-500";
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
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Low Stock">Low Stock</SelectItem>
              <SelectItem value="Out of Stock">Out of Stock</SelectItem>
              <SelectItem value="Discontinued">Discontinued</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Product ID</TableHead>
              <TableHead className="text-slate-300">Name</TableHead>
              <TableHead className="text-slate-300">SKU</TableHead>
              <TableHead className="text-slate-300">Category</TableHead>
              <TableHead className="text-slate-300">Family</TableHead>
              <TableHead className="text-slate-300">Price</TableHead>
              <TableHead className="text-slate-300">Stock</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {product.id}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-slate-300">{product.name}</div>
                    <div className="text-xs text-slate-500">
                      {product.subcategory}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{product.sku}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.family}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(product.status)}`}
                  >
                    {product.status}
                  </span>
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

export default ProductList;
