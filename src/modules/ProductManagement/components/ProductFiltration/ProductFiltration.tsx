import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductFiltration = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    productFamily: "all",
    brand: "all",
    category: "all",
    subcategory: "all",
    productLine: "all",
  });
  const [activeTab, setActiveTab] = useState("products");

  // Sample data for dropdowns
  const productFamilies = [
    "Mobile",
    "Apparel",
    "Snacks",
    "Electronics",
    "Furniture",
  ];

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      productFamily: "all",
      brand: "all",
      category: "all",
      subcategory: "all",
      productLine: "all",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Product Filtration & Reporting
        </h2>
        <Button variant="outline" onClick={resetFilters}>
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
            <path d="M3 2v6h6" />
            <path d="M3 8C5.33 5.46 8.14 4 12 4c6.63 0 12 5.37 12 12" />
            <path d="M21 22v-6h-6" />
            <path d="M21 16c-2.33 2.54-5.14 4-9 4-6.63 0-12-5.37-12-12" />
          </svg>
          Reset Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Step 1: Product Family
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              value={filters.productFamily}
              onValueChange={(value) =>
                setFilters({
                  ...filters,
                  productFamily: value,
                  brand: "all",
                  category: "all",
                  subcategory: "all",
                  productLine: "all",
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Product Family" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Families</SelectItem>
                {productFamilies.map((family) => (
                  <SelectItem key={family} value={family}>
                    {family}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Step 2: Brand
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              value={filters.brand}
              onValueChange={(value) =>
                setFilters({
                  ...filters,
                  brand: value,
                  category: "all",
                  subcategory: "all",
                  productLine: "all",
                })
              }
              disabled={filters.productFamily === "all"}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="samsung">Samsung</SelectItem>
                <SelectItem value="google">Google</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Step 3: Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              value={filters.category}
              onValueChange={(value) =>
                setFilters({
                  ...filters,
                  category: value,
                  subcategory: "all",
                  productLine: "all",
                })
              }
              disabled={filters.productFamily === "all"}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="smartphones">Smartphones</SelectItem>
                <SelectItem value="tablets">Tablets</SelectItem>
                <SelectItem value="wearables">Wearables</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Step 4: Subcategory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              value={filters.subcategory}
              onValueChange={(value) =>
                setFilters({
                  ...filters,
                  subcategory: value,
                  productLine: "all",
                })
              }
              disabled={filters.category === "all"}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                <SelectItem value="iphone">iPhone</SelectItem>
                <SelectItem value="galaxy">Galaxy</SelectItem>
                <SelectItem value="pixel">Pixel</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              Step 5: Product Line
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              value={filters.productLine}
              onValueChange={(value) =>
                setFilters({ ...filters, productLine: value })
              }
              disabled={filters.subcategory === "all"}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Product Line" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Product Lines</SelectItem>
                <SelectItem value="iphone15">iPhone 15</SelectItem>
                <SelectItem value="iphone14">iPhone 14</SelectItem>
                <SelectItem value="iphone13">iPhone 13</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Filtered Products
            </CardTitle>
            <div className="flex space-x-2">
              <div className="relative w-64">
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
                  placeholder="Search products..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline">
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
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-slate-800">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="skus">SKUs</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-2">Product Family</div>
                  <div className="col-span-2">Brand</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Subcategory</div>
                  <div className="col-span-2">Product Line</div>
                  <div className="col-span-1">SKUs</div>
                </div>
                <div className="divide-y divide-slate-800">
                  <div className="p-6 text-center text-slate-400">
                    No products match the selected filters. Try adjusting your
                    criteria.
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skus" className="mt-6 space-y-6">
              <div className="p-6 text-center text-slate-400">
                Select product filters to view SKUs.
              </div>
            </TabsContent>

            <TabsContent value="reports" className="mt-6 space-y-6">
              <div className="p-6 text-center text-slate-400">
                Reports will be displayed here.
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductFiltration;
