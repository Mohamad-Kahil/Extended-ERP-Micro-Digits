import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Category {
  id: string;
  name: string;
  parentCategory: string | null;
  description: string;
  productCount: number;
  createdAt: string;
  updatedAt: string;
}

const CategoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: "CAT-001",
      name: "Electronics",
      parentCategory: null,
      description: "Electronic devices and gadgets",
      productCount: 1245,
      createdAt: "2023-01-15",
      updatedAt: "2023-08-20",
    },
    {
      id: "CAT-002",
      name: "Smartphones",
      parentCategory: "Electronics",
      description: "Mobile phones and accessories",
      productCount: 450,
      createdAt: "2023-01-20",
      updatedAt: "2023-09-05",
    },
    {
      id: "CAT-003",
      name: "Laptops",
      parentCategory: "Electronics",
      description: "Portable computers",
      productCount: 320,
      createdAt: "2023-01-25",
      updatedAt: "2023-08-15",
    },
    {
      id: "CAT-004",
      name: "Furniture",
      parentCategory: null,
      description: "Home and office furniture",
      productCount: 856,
      createdAt: "2023-02-10",
      updatedAt: "2023-07-30",
    },
    {
      id: "CAT-005",
      name: "Office Chairs",
      parentCategory: "Furniture",
      description: "Chairs for office use",
      productCount: 125,
      createdAt: "2023-02-15",
      updatedAt: "2023-08-10",
    },
    {
      id: "CAT-006",
      name: "Desks",
      parentCategory: "Furniture",
      description: "Work desks and tables",
      productCount: 95,
      createdAt: "2023-02-20",
      updatedAt: "2023-07-25",
    },
    {
      id: "CAT-007",
      name: "Clothing",
      parentCategory: null,
      description: "Apparel and fashion items",
      productCount: 1120,
      createdAt: "2023-03-05",
      updatedAt: "2023-09-10",
    },
    {
      id: "CAT-008",
      name: "Outerwear",
      parentCategory: "Clothing",
      description: "Jackets, coats, and outdoor clothing",
      productCount: 230,
      createdAt: "2023-03-10",
      updatedAt: "2023-09-01",
    },
    {
      id: "CAT-009",
      name: "Home Appliances",
      parentCategory: null,
      description: "Household electronic appliances",
      productCount: 645,
      createdAt: "2023-04-15",
      updatedAt: "2023-08-05",
    },
    {
      id: "CAT-010",
      name: "Kitchen Appliances",
      parentCategory: "Home Appliances",
      description: "Appliances for kitchen use",
      productCount: 210,
      createdAt: "2023-04-20",
      updatedAt: "2023-08-01",
    },
  ];

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (category.parentCategory &&
        category.parentCategory
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const selectedCategoryData = selectedCategory
    ? categories.find((category) => category.id === selectedCategory)
    : null;

  const getSubcategories = (parentCategoryName: string) => {
    return categories.filter(
      (category) => category.parentCategory === parentCategoryName,
    );
  };

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Category Management
          </CardTitle>
          <div className="flex space-x-2">
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
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              Add Category
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
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
                placeholder="Search categories..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-md border border-slate-800">
              <Table>
                <TableHeader className="bg-slate-800">
                  <TableRow>
                    <TableHead className="text-slate-300">
                      Category ID
                    </TableHead>
                    <TableHead className="text-slate-300">Name</TableHead>
                    <TableHead className="text-slate-300">Parent</TableHead>
                    <TableHead className="text-slate-300">Products</TableHead>
                    <TableHead className="text-slate-300">
                      Last Updated
                    </TableHead>
                    <TableHead className="text-right text-slate-300">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCategories.map((category) => (
                    <TableRow
                      key={category.id}
                      className={`border-slate-800 ${selectedCategory === category.id ? "bg-slate-800/50" : ""}`}
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === category.id ? null : category.id,
                        )
                      }
                    >
                      <TableCell className="font-medium text-slate-300">
                        {category.id}
                      </TableCell>
                      <TableCell>
                        <div className="text-slate-300">{category.name}</div>
                      </TableCell>
                      <TableCell>
                        {category.parentCategory ? (
                          <span className="inline-flex rounded-full bg-slate-700 px-2 py-1 text-xs font-medium text-slate-300">
                            {category.parentCategory}
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-500">
                            Main Category
                          </span>
                        )}
                      </TableCell>
                      <TableCell>{category.productCount}</TableCell>
                      <TableCell>
                        {new Date(category.updatedAt).toLocaleDateString()}
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
            {selectedCategoryData ? (
              <Card className="border-slate-800 bg-slate-800/50">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    {selectedCategoryData.name}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Description
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedCategoryData.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Category Type
                      </h4>
                      <p className="mt-1">
                        {selectedCategoryData.parentCategory ? (
                          <span className="inline-flex rounded-full bg-slate-700 px-2 py-1 text-xs font-medium text-slate-300">
                            Subcategory of {selectedCategoryData.parentCategory}
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-500">
                            Main Category
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">
                          Created
                        </h4>
                        <p className="mt-1 text-sm text-slate-300">
                          {new Date(
                            selectedCategoryData.createdAt,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">
                          Last Updated
                        </h4>
                        <p className="mt-1 text-sm text-slate-300">
                          {new Date(
                            selectedCategoryData.updatedAt,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-400">
                        Product Count
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {selectedCategoryData.productCount} products
                      </p>
                    </div>

                    {!selectedCategoryData.parentCategory && (
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">
                          Subcategories
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {getSubcategories(selectedCategoryData.name).map(
                            (subcategory) => (
                              <span
                                key={subcategory.id}
                                className="inline-flex rounded-full bg-slate-700 px-2 py-1 text-xs font-medium text-slate-300"
                              >
                                {subcategory.name} ({subcategory.productCount})
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    )}

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
                        Edit Category
                      </Button>
                      {!selectedCategoryData.parentCategory && (
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
                          Add Subcategory
                        </Button>
                      )}
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
                      Select a category
                    </h3>
                    <p className="text-sm text-slate-500">
                      Click on a category to view detailed information
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryManagement;
