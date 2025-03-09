import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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

const ModelNumberGeneration = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [variantMatrix, setVariantMatrix] = useState([
    { name: "Memory", values: ["128GB", "256GB", "512GB", "1024GB"] },
    {
      name: "Color",
      values: ["Black", "Blue", "Red", "White", "Gold", "Silver"],
    },
  ]);

  // Sample products
  const products = [
    {
      id: "P001",
      name: "iPhone 16 Pro Max",
      brand: "Apple",
      category: "Smartphones",
    },
    {
      id: "P002",
      name: "Galaxy S24 Ultra",
      brand: "Samsung",
      category: "Smartphones",
    },
    {
      id: "P003",
      name: "Pixel 8 Pro",
      brand: "Google",
      category: "Smartphones",
    },
  ];

  // Generate model numbers based on the variant matrix
  const generateModelNumbers = () => {
    const modelNumbers = [];
    const variant1 = variantMatrix[0];
    const variant2 = variantMatrix[1];

    let counter = 1;
    for (const value1 of variant1.values) {
      for (const value2 of variant2.values) {
        const modelNumber = `${counter}`;
        const sku = generateSKU(selectedProduct, value1, value2);
        modelNumbers.push({
          modelNumber,
          variant1: { name: variant1.name, value: value1 },
          variant2: { name: variant2.name, value: value2 },
          sku,
        });
        counter++;
      }
    }

    return modelNumbers;
  };

  // Generate SKU based on product and variants
  const generateSKU = (productId, value1, value2) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return "";

    // Convert product name to short code
    const nameCode = product.name
      .split(" ")
      .map((word) => word[0])
      .join("");

    // Convert variant values to short codes
    const value1Code = value1.replace(/[^0-9]/g, "");
    const value2Code = value2.substring(0, 2).toUpperCase();

    return `${nameCode}-${value1Code}-${value2Code}`;
  };

  const modelNumbers = generateModelNumbers();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Model Number Generation
        </h2>
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
              New Variant Matrix
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create Variant Matrix</DialogTitle>
              <DialogDescription>
                Define the variant matrix for model number generation.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="product">Select Product</Label>
                <Select
                  value={selectedProduct}
                  onValueChange={setSelectedProduct}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.brand} {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label>Variant 1</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Name (e.g., Memory)"
                    value={variantMatrix[0].name}
                    onChange={(e) => {
                      const newMatrix = [...variantMatrix];
                      newMatrix[0].name = e.target.value;
                      setVariantMatrix(newMatrix);
                    }}
                  />
                  <Input
                    placeholder="Values (comma separated)"
                    value={variantMatrix[0].values.join(", ")}
                    onChange={(e) => {
                      const newMatrix = [...variantMatrix];
                      newMatrix[0].values = e.target.value
                        .split(",")
                        .map((v) => v.trim())
                        .filter((v) => v);
                      setVariantMatrix(newMatrix);
                    }}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Variant 2</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Name (e.g., Color)"
                    value={variantMatrix[1].name}
                    onChange={(e) => {
                      const newMatrix = [...variantMatrix];
                      newMatrix[1].name = e.target.value;
                      setVariantMatrix(newMatrix);
                    }}
                  />
                  <Input
                    placeholder="Values (comma separated)"
                    value={variantMatrix[1].values.join(", ")}
                    onChange={(e) => {
                      const newMatrix = [...variantMatrix];
                      newMatrix[1].values = e.target.value
                        .split(",")
                        .map((v) => v.trim())
                        .filter((v) => v);
                      setVariantMatrix(newMatrix);
                    }}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="button">Generate Model Numbers</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="border-b border-slate-800 pb-3">
            <CardTitle className="text-xl font-semibold text-white">
              Variant Matrix
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="rounded-md border border-slate-800 p-4">
                <h3 className="mb-2 text-sm font-medium text-white">
                  Selected Product
                </h3>
                <div className="flex items-center space-x-2">
                  <Select
                    value={selectedProduct}
                    onValueChange={setSelectedProduct}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.brand} {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border border-slate-800 p-4">
                <h3 className="mb-2 text-sm font-medium text-white">
                  {variantMatrix[0].name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {variantMatrix[0].values.map((value, index) => (
                    <Badge key={index} variant="outline">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-md border border-slate-800 p-4">
                <h3 className="mb-2 text-sm font-medium text-white">
                  {variantMatrix[1].name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {variantMatrix[1].values.map((value, index) => (
                    <Badge key={index} variant="outline">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-md border border-slate-800 p-4 bg-slate-800/20">
                <h3 className="mb-2 text-sm font-medium text-white">
                  Matrix Summary
                </h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Variants:</span>
                    <span className="font-medium">
                      {variantMatrix[0].values.length} ×{" "}
                      {variantMatrix[1].values.length} ={" "}
                      {variantMatrix[0].values.length *
                        variantMatrix[1].values.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">SKU Format:</span>
                    <span className="font-medium">
                      {selectedProduct
                        ? products
                            .find((p) => p.id === selectedProduct)
                            ?.name.split(" ")
                            .map((word) => word[0])
                            .join("")
                        : "XXX"}
                      -{variantMatrix[0].name.substring(0, 3)}-
                      {variantMatrix[1].name.substring(0, 2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader className="border-b border-slate-800 pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold text-white">
                Generated Model Numbers
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
                    placeholder="Search model numbers..."
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
                <div className="col-span-1">#</div>
                <div className="col-span-3">SKU</div>
                <div className="col-span-4">Variant Combination</div>
                <div className="col-span-4">Product</div>
              </div>
              <div className="divide-y divide-slate-800 max-h-[400px] overflow-y-auto">
                {modelNumbers.map((model, index) => (
                  <div
                    key={index}
                    className="p-3 text-sm text-slate-300 grid grid-cols-12 gap-4 hover:bg-slate-800/30 transition-colors"
                  >
                    <div className="col-span-1 font-medium">
                      {model.modelNumber}
                    </div>
                    <div className="col-span-3">{model.sku || "--"}</div>
                    <div className="col-span-4">
                      <div className="flex flex-col gap-1">
                        <Badge variant="outline" className="w-fit">
                          {model.variant1.name}: {model.variant1.value}
                        </Badge>
                        <Badge variant="outline" className="w-fit">
                          {model.variant2.name}: {model.variant2.value}
                        </Badge>
                      </div>
                    </div>
                    <div className="col-span-4">
                      {selectedProduct
                        ? `${products.find((p) => p.id === selectedProduct)?.brand} ${products.find((p) => p.id === selectedProduct)?.name}`
                        : "Select a product"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ModelNumberGeneration;
