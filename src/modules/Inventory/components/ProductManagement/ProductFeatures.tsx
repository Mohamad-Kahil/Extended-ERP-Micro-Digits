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

interface ProductFeature {
  id: string;
  name: string;
  description: string;
  type: "Technical" | "Physical" | "Functional" | "Aesthetic";
  applicableCategories: string[];
  values: string[];
  isRequired: boolean;
  isFilterable: boolean;
  isComparable: boolean;
}

interface ProductFeaturesProps {
  searchTerm: string;
}

const ProductFeatures = ({ searchTerm }: ProductFeaturesProps) => {
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const features: ProductFeature[] = [
    {
      id: "FEAT-001",
      name: "Storage Capacity",
      description: "The amount of storage available on the device",
      type: "Technical",
      applicableCategories: [
        "Electronics",
        "Smartphones",
        "Laptops",
        "Tablets",
      ],
      values: ["64GB", "128GB", "256GB", "512GB", "1TB"],
      isRequired: true,
      isFilterable: true,
      isComparable: true,
    },
    {
      id: "FEAT-002",
      name: "Color",
      description: "The color of the product",
      type: "Aesthetic",
      applicableCategories: [
        "Electronics",
        "Clothing",
        "Furniture",
        "Home Appliances",
      ],
      values: [
        "Black",
        "White",
        "Silver",
        "Gold",
        "Blue",
        "Red",
        "Green",
        "Purple",
      ],
      isRequired: true,
      isFilterable: true,
      isComparable: false,
    },
    {
      id: "FEAT-003",
      name: "Size",
      description: "The size of the product",
      type: "Physical",
      applicableCategories: ["Clothing", "Furniture"],
      values: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      isRequired: true,
      isFilterable: true,
      isComparable: false,
    },
    {
      id: "FEAT-004",
      name: "Processor",
      description: "The type of processor in the device",
      type: "Technical",
      applicableCategories: ["Electronics", "Laptops", "Desktops"],
      values: [
        "Intel Core i3",
        "Intel Core i5",
        "Intel Core i7",
        "Intel Core i9",
        "AMD Ryzen 5",
        "AMD Ryzen 7",
        "AMD Ryzen 9",
      ],
      isRequired: true,
      isFilterable: true,
      isComparable: true,
    },
    {
      id: "FEAT-005",
      name: "RAM",
      description: "The amount of RAM in the device",
      type: "Technical",
      applicableCategories: [
        "Electronics",
        "Laptops",
        "Desktops",
        "Smartphones",
      ],
      values: ["4GB", "8GB", "16GB", "32GB", "64GB"],
      isRequired: true,
      isFilterable: true,
      isComparable: true,
    },
    {
      id: "FEAT-006",
      name: "Material",
      description: "The material the product is made of",
      type: "Physical",
      applicableCategories: ["Furniture", "Clothing", "Home Appliances"],
      values: [
        "Wood",
        "Metal",
        "Plastic",
        "Glass",
        "Leather",
        "Cotton",
        "Polyester",
      ],
      isRequired: false,
      isFilterable: true,
      isComparable: false,
    },
    {
      id: "FEAT-007",
      name: "Screen Size",
      description: "The size of the screen in inches",
      type: "Physical",
      applicableCategories: [
        "Electronics",
        "Smartphones",
        "Laptops",
        "Tablets",
        "Televisions",
      ],
      values: [
        "5.5 inch",
        "6.1 inch",
        "6.7 inch",
        "13.3 inch",
        "15.6 inch",
        "24 inch",
        "32 inch",
        "43 inch",
        "55 inch",
        "65 inch",
      ],
      isRequired: true,
      isFilterable: true,
      isComparable: true,
    },
    {
      id: "FEAT-008",
      name: "Waterproof",
      description: "Whether the product is waterproof",
      type: "Functional",
      applicableCategories: ["Electronics", "Clothing", "Watches"],
      values: ["Yes", "No"],
      isRequired: false,
      isFilterable: true,
      isComparable: true,
    },
    {
      id: "FEAT-009",
      name: "Battery Life",
      description: "The battery life of the device in hours",
      type: "Technical",
      applicableCategories: [
        "Electronics",
        "Smartphones",
        "Laptops",
        "Tablets",
        "Smartwatches",
      ],
      values: [
        "Up to 5 hours",
        "Up to 10 hours",
        "Up to 15 hours",
        "Up to 20 hours",
        "Up to 24 hours",
      ],
      isRequired: false,
      isFilterable: true,
      isComparable: true,
    },
    {
      id: "FEAT-010",
      name: "Warranty",
      description: "The warranty period for the product",
      type: "Functional",
      applicableCategories: [
        "Electronics",
        "Furniture",
        "Home Appliances",
        "Watches",
      ],
      values: ["1 Year", "2 Years", "3 Years", "5 Years", "Lifetime"],
      isRequired: false,
      isFilterable: true,
      isComparable: false,
    },
  ];

  // Get unique types and categories for filters
  const types = [...new Set(features.map((feature) => feature.type))];
  const categories = [
    ...new Set(features.flatMap((feature) => feature.applicableCategories)),
  ];

  const filteredFeatures = features.filter(
    (feature) =>
      (typeFilter === "all" || feature.type === typeFilter) &&
      (categoryFilter === "all" ||
        feature.applicableCategories.includes(categoryFilter)) &&
      (feature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const selectedFeatureData = selectedFeature
    ? features.find((feature) => feature.id === selectedFeature)
    : null;

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Feature Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

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
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-md border border-slate-800">
            <Table>
              <TableHeader className="bg-slate-800">
                <TableRow>
                  <TableHead className="text-slate-300">Feature ID</TableHead>
                  <TableHead className="text-slate-300">Name</TableHead>
                  <TableHead className="text-slate-300">Type</TableHead>
                  <TableHead className="text-slate-300">Required</TableHead>
                  <TableHead className="text-slate-300">Filterable</TableHead>
                  <TableHead className="text-slate-300">Comparable</TableHead>
                  <TableHead className="text-right text-slate-300">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFeatures.map((feature) => (
                  <TableRow
                    key={feature.id}
                    className={`border-slate-800 ${selectedFeature === feature.id ? "bg-slate-800/50" : ""}`}
                    onClick={() =>
                      setSelectedFeature(
                        selectedFeature === feature.id ? null : feature.id,
                      )
                    }
                  >
                    <TableCell className="font-medium text-slate-300">
                      {feature.id}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-slate-300">{feature.name}</div>
                        <div className="text-xs text-slate-500">
                          {feature.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{feature.type}</TableCell>
                    <TableCell>
                      {feature.isRequired ? (
                        <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-500">
                          Yes
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full bg-slate-500/10 px-2 py-1 text-xs font-semibold text-slate-500">
                          No
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      {feature.isFilterable ? (
                        <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-500">
                          Yes
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full bg-slate-500/10 px-2 py-1 text-xs font-semibold text-slate-500">
                          No
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      {feature.isComparable ? (
                        <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-500">
                          Yes
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full bg-slate-500/10 px-2 py-1 text-xs font-semibold text-slate-500">
                          No
                        </span>
                      )}
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
          {selectedFeatureData ? (
            <Card className="border-slate-800 bg-slate-800/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {selectedFeatureData.name}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Description
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {selectedFeatureData.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Feature Type
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {selectedFeatureData.type}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Applicable Categories
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedFeatureData.applicableCategories.map(
                        (category, index) => (
                          <span
                            key={index}
                            className="inline-flex rounded-full bg-slate-700 px-2 py-1 text-xs font-medium text-slate-300"
                          >
                            {category}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      Possible Values
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedFeatureData.values.map((value, index) => (
                        <span
                          key={index}
                          className="inline-flex rounded-full bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-500"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Required
                      </h4>
                      <p className="mt-1">
                        {selectedFeatureData.isRequired ? (
                          <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-500">
                            Yes
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-slate-500/10 px-2 py-1 text-xs font-semibold text-slate-500">
                            No
                          </span>
                        )}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Filterable
                      </h4>
                      <p className="mt-1">
                        {selectedFeatureData.isFilterable ? (
                          <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-500">
                            Yes
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-slate-500/10 px-2 py-1 text-xs font-semibold text-slate-500">
                            No
                          </span>
                        )}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Comparable
                      </h4>
                      <p className="mt-1">
                        {selectedFeatureData.isComparable ? (
                          <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-500">
                            Yes
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-slate-500/10 px-2 py-1 text-xs font-semibold text-slate-500">
                            No
                          </span>
                        )}
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
                      Edit Feature
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
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      Add Value
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
                    <path d="M9 3H5a2 2 0 0 0-2 2v4" />
                    <path d="M9 21H5a2 2 0 0 1-2-2v-4" />
                    <path d="M19 3h-4" />
                    <path d="M19 21h-4" />
                    <path d="M3 9v6" />
                    <path d="M21 9v6" />
                    <path d="M9 3v18" />
                    <path d="M15 3v18" />
                  </svg>
                  <h3 className="mb-1 text-lg font-medium text-slate-400">
                    Select a feature
                  </h3>
                  <p className="text-sm text-slate-500">
                    Click on a feature to view detailed information
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

export default ProductFeatures;
