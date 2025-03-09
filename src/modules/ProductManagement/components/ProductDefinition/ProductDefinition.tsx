import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const ProductDefinition = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [productData, setProductData] = useState({
    productFamily: "",
    brand: "",
    category: "",
    subcategory: "",
    productLine: "",
    variants: [],
    metadata: {},
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

  // Sample products
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
        "IP16PMX-128-BK",
        "IP16PMX-128-WH",
        "IP16PMX-256-BK",
        "IP16PMX-256-WH",
      ],
      metadata: {
        material: "Aluminum",
        releaseDate: "2024-09",
        compliance: "FCC, CE",
        targetMarket: "Global",
      },
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
        "NK-TS-CN-S-BL",
        "NK-TS-CN-S-RD",
        "NK-TS-CN-M-BL",
        "NK-TS-CN-M-RD",
      ],
      metadata: {
        material: "Cotton",
        seasonality: "All Season",
        compliance: "OEKO-TEX",
        targetMarket: "Global",
      },
    },
    {
      id: "P003",
      productFamily: "Snacks",
      brand: "Lay's",
      category: "Chips",
      subcategory: "Potato Chips",
      productLine: "Classic",
      variants: [
        {
          name: "Flavor",
          values: ["Original", "BBQ", "Sour Cream & Onion", "Salt & Vinegar"],
        },
        { name: "Size", values: ["Small", "Medium", "Large", "Family"] },
      ],
      skus: ["LPC-OR-SM", "LPC-OR-MD", "LPC-BBQ-SM", "LPC-BBQ-MD"],
      metadata: {
        ingredients: "Potatoes, Vegetable Oil, Salt",
        packaging: "Foil Bag",
        shelfLife: "6 months",
        targetMarket: "North America",
      },
    },
  ];

  // Dialog steps
  const renderDialogStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <DialogHeader>
              <DialogTitle>Select Product Family</DialogTitle>
              <DialogDescription>
                Select or add a Product Family for the new product.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="productFamily">Product Family</Label>
                <Select
                  value={productData.productFamily}
                  onValueChange={(value) =>
                    setProductData({ ...productData, productFamily: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product family" />
                  </SelectTrigger>
                  <SelectContent>
                    {productFamilies.map((family) => (
                      <SelectItem key={family} value={family}>
                        {family}
                      </SelectItem>
                    ))}
                    <SelectItem value="new">+ Add New</SelectItem>
                  </SelectContent>
                </Select>
                {productData.productFamily === "new" && (
                  <Input
                    id="newProductFamily"
                    placeholder="Enter new product family"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        productFamily: e.target.value,
                      })
                    }
                  />
                )}
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                onClick={() => setCurrentStep(2)}
                disabled={!productData.productFamily}
              >
                Next
              </Button>
            </DialogFooter>
          </>
        );
      case 2:
        return (
          <>
            <DialogHeader>
              <DialogTitle>Select Brand</DialogTitle>
              <DialogDescription>
                Select or add a Brand for this product (or skip if not
                applicable).
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="brand">Brand</Label>
                <Select
                  value={productData.brand}
                  onValueChange={(value) =>
                    setProductData({ ...productData, brand: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {productData.productFamily &&
                      brands[productData.productFamily]?.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    <SelectItem value="new">+ Add New</SelectItem>
                    <SelectItem value="skip">Skip</SelectItem>
                  </SelectContent>
                </Select>
                {productData.brand === "new" && (
                  <Input
                    id="newBrand"
                    placeholder="Enter new brand"
                    onChange={(e) =>
                      setProductData({ ...productData, brand: e.target.value })
                    }
                  />
                )}
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={() => setCurrentStep(1)}>
                Back
              </Button>
              <Button
                type="button"
                onClick={() => setCurrentStep(3)}
                disabled={!productData.brand && productData.brand !== "skip"}
              >
                Next
              </Button>
            </DialogFooter>
          </>
        );
      case 3:
        return (
          <>
            <DialogHeader>
              <DialogTitle>Select Category</DialogTitle>
              <DialogDescription>
                Select or add a Category within {productData.productFamily}.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={productData.category}
                  onValueChange={(value) =>
                    setProductData({ ...productData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productData.productFamily &&
                      categories[productData.productFamily]?.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    <SelectItem value="new">+ Add New</SelectItem>
                  </SelectContent>
                </Select>
                {productData.category === "new" && (
                  <Input
                    id="newCategory"
                    placeholder="Enter new category"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        category: e.target.value,
                      })
                    }
                  />
                )}
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={() => setCurrentStep(2)}>
                Back
              </Button>
              <Button
                type="button"
                onClick={() => setCurrentStep(4)}
                disabled={!productData.category}
              >
                Next
              </Button>
            </DialogFooter>
          </>
        );
      case 4:
        return (
          <>
            <DialogHeader>
              <DialogTitle>Select Subcategory</DialogTitle>
              <DialogDescription>
                Select or add a Subcategory within {productData.category}.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="subcategory">Subcategory</Label>
                <Select
                  value={productData.subcategory}
                  onValueChange={(value) =>
                    setProductData({ ...productData, subcategory: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subcategory" />
                  </SelectTrigger>
                  <SelectContent>
                    {productData.category &&
                      subcategories[productData.category]?.map(
                        (subcategory) => (
                          <SelectItem key={subcategory} value={subcategory}>
                            {subcategory}
                          </SelectItem>
                        ),
                      )}
                    <SelectItem value="new">+ Add New</SelectItem>
                  </SelectContent>
                </Select>
                {productData.subcategory === "new" && (
                  <Input
                    id="newSubcategory"
                    placeholder="Enter new subcategory"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        subcategory: e.target.value,
                      })
                    }
                  />
                )}
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={() => setCurrentStep(3)}>
                Back
              </Button>
              <Button
                type="button"
                onClick={() => setCurrentStep(5)}
                disabled={!productData.subcategory}
              >
                Next
              </Button>
            </DialogFooter>
          </>
        );
      case 5:
        return (
          <>
            <DialogHeader>
              <DialogTitle>Select Product Line/Model</DialogTitle>
              <DialogDescription>
                Select or add a Product Line/Model within{" "}
                {productData.subcategory} (or skip if not applicable).
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="productLine">Product Line/Model</Label>
                <Select
                  value={productData.productLine}
                  onValueChange={(value) =>
                    setProductData({ ...productData, productLine: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product line" />
                  </SelectTrigger>
                  <SelectContent>
                    {productData.subcategory &&
                      productLines[productData.subcategory]?.map((line) => (
                        <SelectItem key={line} value={line}>
                          {line}
                        </SelectItem>
                      ))}
                    <SelectItem value="new">+ Add New</SelectItem>
                    <SelectItem value="skip">Skip</SelectItem>
                  </SelectContent>
                </Select>
                {productData.productLine === "new" && (
                  <Input
                    id="newProductLine"
                    placeholder="Enter new product line"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        productLine: e.target.value,
                      })
                    }
                  />
                )}
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={() => setCurrentStep(4)}>
                Back
              </Button>
              <Button
                type="button"
                onClick={() => setCurrentStep(6)}
                disabled={
                  !productData.productLine && productData.productLine !== "skip"
                }
              >
                Next
              </Button>
            </DialogFooter>
          </>
        );
      case 6:
        return (
          <>
            <DialogHeader>
              <DialogTitle>Define Variants/Attributes</DialogTitle>
              <DialogDescription>
                Define the Variants/Attributes for this product. Add as many
                attributes as needed.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Variants/Attributes</Label>
                <div className="space-y-2">
                  {/* This would be a dynamic form to add variants and their values */}
                  <div className="flex items-center gap-2">
                    <Input placeholder="Attribute name (e.g., Color)" />
                    <Input placeholder="Values (comma separated)" />
                    <Button variant="outline" size="icon">
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
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Attribute name (e.g., Size)" />
                    <Input placeholder="Values (comma separated)" />
                    <Button variant="outline" size="icon">
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
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </Button>
                  </div>
                </div>
                <Button variant="outline" className="mt-2">
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
                  Add Another Attribute
                </Button>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={() => setCurrentStep(5)}>
                Back
              </Button>
              <Button type="button" onClick={() => setCurrentStep(7)}>
                Next
              </Button>
            </DialogFooter>
          </>
        );
      case 7:
        return (
          <>
            <DialogHeader>
              <DialogTitle>Add Metadata</DialogTitle>
              <DialogDescription>
                Add optional metadata for this product.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Metadata</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Input placeholder="Field name (e.g., Material)" />
                    <Input placeholder="Value" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Field name (e.g., Seasonality)" />
                    <Input placeholder="Value" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Field name (e.g., Compliance)" />
                    <Input placeholder="Value" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Field name (e.g., Target Market)" />
                    <Input placeholder="Value" />
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={() => setCurrentStep(6)}>
                Back
              </Button>
              <Button type="button" onClick={() => setCurrentStep(8)}>
                Next
              </Button>
            </DialogFooter>
          </>
        );
      case 8:
        return (
          <>
            <DialogHeader>
              <DialogTitle>Review & Confirm</DialogTitle>
              <DialogDescription>
                Review the product information and confirm to create.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <div className="rounded-md border border-slate-800 p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Product Family:</span>
                    <span className="font-medium">
                      {productData.productFamily}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Brand:</span>
                    <span className="font-medium">
                      {productData.brand === "skip" ? "N/A" : productData.brand}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Category:</span>
                    <span className="font-medium">{productData.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Subcategory:</span>
                    <span className="font-medium">
                      {productData.subcategory}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Product Line/Model:</span>
                    <span className="font-medium">
                      {productData.productLine === "skip"
                        ? "N/A"
                        : productData.productLine}
                    </span>
                  </div>
                  {/* Would show variants and metadata here */}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={() => setCurrentStep(7)}>
                Back
              </Button>
              <Button
                type="button"
                onClick={() => {
                  // Would save the product here
                  setCurrentStep(1);
                }}
              >
                Create Product
              </Button>
            </DialogFooter>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Product Definition</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-cyan-600 hover:bg-cyan-700">
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
              Add New Product
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            {renderDialogStep()}
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">
              Product Catalog
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
              <TabsTrigger value="variants">Variants</TabsTrigger>
              <TabsTrigger value="skus">SKUs</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-2">Product Family</div>
                  <div className="col-span-1">Brand</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Subcategory</div>
                  <div className="col-span-2">Product Line</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{product.id}</div>
                      <div className="col-span-2">{product.productFamily}</div>
                      <div className="col-span-1">{product.brand}</div>
                      <div className="col-span-2">{product.category}</div>
                      <div className="col-span-2">{product.subcategory}</div>
                      <div className="col-span-2">{product.productLine}</div>
                      <div className="col-span-2 flex space-x-2">
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                          </svg>
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="variants" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-3">Product</div>
                  <div className="col-span-6">Variants</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="col-span-1 font-medium">{product.id}</div>
                      <div className="col-span-3">
                        {product.brand} {product.subcategory}{" "}
                        {product.productLine}
                      </div>
                      <div className="col-span-6">
                        <div className="flex flex-wrap gap-2">
                          {product.variants.map((variant, vIndex) => (
                            <div key={vIndex} className="space-y-1">
                              <span className="text-xs font-medium text-slate-400">
                                {variant.name}:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {variant.values.map((value, vvIndex) => (
                                  <Badge
                                    key={vvIndex}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {value}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-2 flex space-x-2">
                        <button className="text-slate-400 hover:text-white transition-colors">
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
                          >
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skus" className="mt-6 space-y-6">
              <div className="rounded-md border border-slate-800">
                <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
                  <div className="col-span-2">SKU</div>
                  <div className="col-span-3">Product</div>
                  <div className="col-span-5">Variant Combination</div>
                  <div className="col-span-2">Actions</div>
                </div>
                <div className="divide-y divide-slate-800">
                  {products.flatMap((product) =>
                    product.skus.map((sku, skuIndex) => (
                      <div
                        key={`${product.id}-${skuIndex}`}
                        className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                      >
                        <div className="col-span-2 font-medium">{sku}</div>
                        <div className="col-span-3">
                          {product.brand} {product.subcategory}{" "}
                          {product.productLine}
                        </div>
                        <div className="col-span-5">
                          {/* This would show the specific variant combination for this SKU */}
                          <div className="flex gap-2">
                            <Badge variant="outline" className="text-xs">
                              {product.variants[0]?.name}:{" "}
                              {
                                product.variants[0]?.values[
                                  skuIndex % product.variants[0]?.values.length
                                ]
                              }
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {product.variants[1]?.name}:{" "}
                              {
                                product.variants[1]?.values[
                                  Math.floor(
                                    skuIndex /
                                      product.variants[1]?.values.length,
                                  ) % product.variants[1]?.values.length
                                ]
                              }
                            </Badge>
                          </div>
                        </div>
                        <div className="col-span-2 flex space-x-2">
                          <button className="text-slate-400 hover:text-white transition-colors">
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
                            >
                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          </button>
                          <button className="text-slate-400 hover:text-white transition-colors">
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
                            >
                              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )),
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDefinition;
