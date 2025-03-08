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
import { Card, CardContent } from "@/components/ui/card";

interface ProductVariant {
  id: string;
  productId: string;
  productName: string;
  variantName: string;
  attributes: {
    name: string;
    value: string;
  }[];
  sku: string;
  price: number;
  stock: number;
  status: "Active" | "Low Stock" | "Out of Stock" | "Discontinued";
}

interface ProductVariantsProps {
  searchTerm: string;
}

const ProductVariants = ({ searchTerm }: ProductVariantsProps) => {
  const [productFilter, setProductFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  const variants: ProductVariant[] = [
    {
      id: "VAR-001",
      productId: "PRD-006",
      productName: "Winter Jacket",
      variantName: "Winter Jacket - Small",
      attributes: [
        { name: "Size", value: "Small" },
        { name: "Color", value: "Black" },
      ],
      sku: "CLTH-WJ-S-BLK",
      price: 129.99,
      stock: 18,
      status: "Active",
    },
    {
      id: "VAR-002",
      productId: "PRD-006",
      productName: "Winter Jacket",
      variantName: "Winter Jacket - Medium",
      attributes: [
        { name: "Size", value: "Medium" },
        { name: "Color", value: "Black" },
      ],
      sku: "CLTH-WJ-M-BLK",
      price: 129.99,
      stock: 25,
      status: "Active",
    },
    {
      id: "VAR-003",
      productId: "PRD-006",
      productName: "Winter Jacket",
      variantName: "Winter Jacket - Large",
      attributes: [
        { name: "Size", value: "Large" },
        { name: "Color", value: "Black" },
      ],
      sku: "CLTH-WJ-L-BLK",
      price: 129.99,
      stock: 0,
      status: "Out of Stock",
    },
    {
      id: "VAR-004",
      productId: "PRD-006",
      productName: "Winter Jacket",
      variantName: "Winter Jacket - Small",
      attributes: [
        { name: "Size", value: "Small" },
        { name: "Color", value: "Blue" },
      ],
      sku: "CLTH-WJ-S-BLU",
      price: 129.99,
      stock: 12,
      status: "Active",
    },
    {
      id: "VAR-005",
      productId: "PRD-006",
      productName: "Winter Jacket",
      variantName: "Winter Jacket - Medium",
      attributes: [
        { name: "Size", value: "Medium" },
        { name: "Color", value: "Blue" },
      ],
      sku: "CLTH-WJ-M-BLU",
      price: 129.99,
      stock: 15,
      status: "Active",
    },
    {
      id: "VAR-006",
      productId: "PRD-006",
      productName: "Winter Jacket",
      variantName: "Winter Jacket - Large",
      attributes: [
        { name: "Size", value: "Large" },
        { name: "Color", value: "Blue" },
      ],
      sku: "CLTH-WJ-L-BLU",
      price: 129.99,
      stock: 8,
      status: "Low Stock",
    },
    {
      id: "VAR-007",
      productId: "PRD-001",
      productName: "iPhone 13 Pro",
      variantName: "iPhone 13 Pro - 128GB",
      attributes: [
        { name: "Storage", value: "128GB" },
        { name: "Color", value: "Graphite" },
      ],
      sku: "APPL-IP13P-128-GRA",
      price: 899.99,
      stock: 10,
      status: "Active",
    },
    {
      id: "VAR-008",
      productId: "PRD-001",
      productName: "iPhone 13 Pro",
      variantName: "iPhone 13 Pro - 256GB",
      attributes: [
        { name: "Storage", value: "256GB" },
        { name: "Color", value: "Graphite" },
      ],
      sku: "APPL-IP13P-256-GRA",
      price: 999.99,
      stock: 5,
      status: "Low Stock",
    },
    {
      id: "VAR-009",
      productId: "PRD-001",
      productName: "iPhone 13 Pro",
      variantName: "iPhone 13 Pro - 512GB",
      attributes: [
        { name: "Storage", value: "512GB" },
        { name: "Color", value: "Graphite" },
      ],
      sku: "APPL-IP13P-512-GRA",
      price: 1199.99,
      stock: 3,
      status: "Low Stock",
    },
    {
      id: "VAR-010",
      productId: "PRD-001",
      productName: "iPhone 13 Pro",
      variantName: "iPhone 13 Pro - 128GB",
      attributes: [
        { name: "Storage", value: "128GB" },
        { name: "Color", value: "Silver" },
      ],
      sku: "APPL-IP13P-128-SIL",
      price: 899.99,
      stock: 0,
      status: "Discontinued",
    },
  ];

  // Get unique products for filter
  const products = [...new Set(variants.map((variant) => variant.productName))];

  const filteredVariants = variants.filter(
    (variant) =>
      (productFilter === "all" || variant.productName === productFilter) &&
      (statusFilter === "all" || variant.status === statusFilter) &&
      (variant.variantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        variant.sku.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const selectedVariantData = selectedVariant
    ? variants.find((variant) => variant.id === selectedVariant)
    : null;

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
          <Select value={productFilter} onValueChange={setProductFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Product" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              {products.map((product) => (
                <SelectItem key={product} value={product}>
                  {product}
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Variant ID</TableHead>
                  <TableHead className="text-slate-300">Product</TableHead>
                  <TableHead className="text-slate-300">Variant</TableHead>
                  <TableHead className="text-slate-300">SKU</TableHead>
                  <TableHead className="text-slate-300">Price</TableHead>
                  <TableHead className="text-slate-300">Stock</TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVariants.map((variant) => (
                  <TableRow
                    key={variant.id}
                    className={`border-slate-800 ${selectedVariant === variant.id ? "bg-slate-800/50" : ""}`}
                    onClick={() =>
                      setSelectedVariant(
                        selectedVariant === variant.id ? null : variant.id,
                      )
                    }
                  >
                    <TableCell className="font-medium text-slate-300">
                      {variant.id}
                    </TableCell>
                    <TableCell>{variant.productName}</TableCell>
                    <TableCell>
                      <div className="text-slate-300">
                        {variant.attributes
                          .map((attr) => `${attr.value}`)
                          .join(", ")}
                      </div>
                    </TableCell>
                    <TableCell>{variant.sku}</TableCell>
                    <TableCell>${variant.price.toFixed(2)}</TableCell>
                    <TableCell>{variant.stock}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(variant.status)}`}
                      >
                        {variant.status}
                      </span>
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

        <div>
          {selectedVariantData ? (
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {selectedVariantData.variantName}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Product Information
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {selectedVariantData.productName}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Variant Attributes
                    </h4>
                    <div className="mt-2 space-y-2">
                      {selectedVariantData.attributes.map((attr, index) => (
                        <div
                          key={index}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-slate-400">{attr.name}:</span>
                          <span className="text-slate-300">{attr.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        SKU
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedVariantData.sku}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Price
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        ${selectedVariantData.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Stock
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedVariantData.stock} units
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Status
                      </h4>
                      <p className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(selectedVariantData.status)}`}
                        >
                          {selectedVariantData.status}
                        </span>
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
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                      Edit Variant
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
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                      Update Stock
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="flex h-[400px] items-center justify-center p-6">
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
                    <path d="m7.5 4.27 9 5.15" />
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                  </svg>
                  <h3 className="mb-1 text-lg font-medium text-slate-400">
                    Select a variant
                  </h3>
                  <p className="text-sm text-slate-500">
                    Click on a variant to view detailed information
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

export default ProductVariants;
