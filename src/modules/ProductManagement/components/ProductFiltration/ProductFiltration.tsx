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

const ProductFiltration = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    productFamily: "all",
    brand: "all",
    category: "all",
    subcategory: "all",
    productLine: "all",
  });

  // Sample data for dropdowns
  const productFamilies = [
    "Mobile",
    "Apparel",
    "Snacks",
    "Electronics",
    "Furniture",
  ];
  const brands = {
    Mobile: ["Apple", "Samsung", "Google", "Xiaomi"],
    Apparel: ["Nike", "Adidas", "Zara", "H&M"],
    Snacks: ["Lay's", "Doritos", "Pringles", "Cheetos"],
    Electronics: ["Sony", "LG", "Philips", "Panasonic"],
    Furniture: ["IKEA", "Ashley", "West Elm", "Pottery Barn"],
  };
  const categories = {
    Mobile: ["Smartphones", "Tablets", "Wearables", "Accessories"],
    Apparel: ["Shirts", "Pants", "Dresses", "Outerwear"],
    Snacks: ["Chips", "Nuts", "Crackers", "Popcorn"],
    Electronics: ["TVs", "Audio", "Cameras", "Computers"],
    Furniture: ["Living Room", "Bedroom", "Dining", "Office"],
  };
  const subcategories = {
    Smartphones: ["iPhone 16", "Galaxy S24", "Pixel 8", "Redmi Note 13"],
    Tablets: ["iPad Pro", "Galaxy Tab S9", "Pixel Tablet"],
    Shirts: ["T-Shirts", "Button-Ups", "Polos", "Henleys"],
    Pants: ["Jeans", "Chinos", "Joggers", "Shorts"],
    Chips: ["Potato Chips", "Tortilla Chips", "Veggie Chips"],
    TVs: ["OLED", "QLED", "LED", "Smart TVs"],
    "Living Room": ["Sofas", "Coffee Tables", "TV Stands", "Armchairs"],
  };
  const productLines = {
    "iPhone 16": [
      "iPhone 16 Pro Max",
      "iPhone 16 Pro",
      "iPhone 16 Plus",
      "iPhone 16",
    ],
    "Galaxy S24": ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24"],
    "T-Shirts": ["Crew Neck", "V-Neck", "Graphic Tees", "Long Sleeve"],
    "Potato Chips": ["Classic", "Wavy", "Kettle Cooked", "Baked"],
    OLED: ["C Series", "G Series", "A Series"],
    Sofas: ["Sectionals", "Loveseats", "Sleeper Sofas", "Recliners"],
  };

  // Sample products with variants
  const products = [
    {
      id: "P001",
      productFamily: "Mobile",
      brand: "Apple",
      category: "Smartphones",
      subcategory: "iPhone 16",
      productLine: "iPhone 16 Pro Max",
      variants: [
        { name: "Color", values: ["Black", "White", "Silver", "Gold"] },
        { name: "Memory", values: ["128GB", "256GB", "512GB", "1TB"] },
      ],
      skus: [
        {
          sku: "IP16PMX-128-BK",
          combination: { Color: "Black", Memory: "128GB" },
        },
        {
          sku: "IP16PMX-128-WH",
          combination: { Color: "White", Memory: "128GB" },
        },
        {
          sku: "IP16PMX-256-BK",
          combination: { Color: "Black", Memory: "256GB" },
        },
        {
          sku: "IP16PMX-256-WH",
          combination: { Color: "White", Memory: "256GB" },
        },
        {
          sku: "IP16PMX-512-BK",
          combination: { Color: "Black", Memory: "512GB" },
        },
        {
          sku: "IP16PMX-512-WH",
          combination: { Color: "White", Memory: "512GB" },
        },
        {
          sku: "IP16PMX-1TB-BK",
          combination: { Color: "Black", Memory: "1TB" },
        },
        {
          sku: "IP16PMX-1TB-WH",
          combination: { Color: "White", Memory: "1TB" },
        },
      ],
    },
    {
      id: "P002",
      productFamily: "Apparel",
      brand: "Nike",
      category: "Shirts",
      subcategory: "T-Shirts",
      productLine: "Crew Neck",
      variants: [
        { name: "Size", values: ["S", "M", "L", "XL"] },
        { name: "Color", values: ["Blue", "Red", "Black", "White"] },
      ],
      skus: [
        {
          sku: "NK-TS-CN-S-BL",
          combination: { Size: "S", Color: "Blue" },
        },
        {
          sku: "NK-TS-CN-S-RD",
          combination: { Size: "S", Color: "Red" },
        },
        {
          sku: "NK-TS-CN-M-BL",
          combination: { Size: "M", Color: "Blue" },
        },
        {
          sku: "NK-TS-CN-M-RD",
          combination: { Size: "M", Color: "Red" },
        },
      ],
    },
  ];

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    return (
      (filters.productFamily === "all" ||
        product.productFamily === filters.productFamily) &&
      (filters.brand === "all" ||
        filters.brand === "" ||
        product.brand === filters.brand) &&
      (filters.category === "all" ||
        filters.category === "" ||
        product.category === filters.category) &&
      (filters.subcategory === "all" ||
        filters.subcategory === "" ||
        product.subcategory === filters.subcategory) &&
      (filters.productLine === "all" ||
        filters.productLine === "" ||
        product.productLine === filters.productLine)
    );
  });

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
              disabled={!filters.productFamily}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {filters.productFamily &&
                  brands[filters.productFamily]?.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
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
              disabled={!filters.productFamily}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {filters.productFamily &&
                  categories[filters.productFamily]?.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
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
              disabled={!filters.category}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {filters.category &&
                  subcategories[filters.category]?.map((subcategory) => (
                    <SelectItem key={subcategory} value={subcategory}>
                      {subcategory}
                    </SelectItem>
                  ))}
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
              disabled={!filters.subcategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Product Line" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Product Lines</SelectItem>
                {filters.subcategory &&
                  productLines[filters.subcategory]?.map((line) => (
                    <SelectItem key={line} value={line}>
                      {line}
                    </SelectItem>
                  ))}
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
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <div
                    key={index}
                    className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                  >
                    <div className="col-span-1 font-medium">{product.id}</div>
                    <div className="col-span-2">{product.productFamily}</div>
                    <div className="col-span-2">{product.brand}</div>
                    <div className="col-span-2">{product.category}</div>
                    <div className="col-span-2">{product.subcategory}</div>
                    <div className="col-span-2">{product.productLine}</div>
                    <div className="col-span-1">{product.skus.length}</div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-slate-400">
                  No products match the selected filters. Try adjusting your
                  criteria.
                </div>
              )}
            </div>
          </div>

          {filteredProducts.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white mb-4">
                SKU Combinations
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.flatMap((product) =>
                  product.skus.map((skuItem, skuIndex) => (
                    <Card
                      key={`${product.id}-${skuIndex}`}
                      className="border-slate-800 bg-slate-900/50"
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-white">
                          {skuItem.sku}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xs text-slate-400 mb-2">
                          {product.brand} {product.subcategory}{" "}
                          {product.productLine}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(skuItem.combination).map(
                            ([key, value], i) => (
                              <Badge key={i} variant="outline">
                                {key}: {value}
                              </Badge>
                            ),
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )),
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductFiltration;
