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

interface Material {
  id: string;
  name: string;
  category: string;
  unit: string;
  unitCost: number;
  stockLevel: number;
  reorderPoint: number;
  leadTime: number;
  supplier: string;
}

const materials: Material[] = [
  {
    id: "1",
    name: "Aluminum Sheet 2mm",
    category: "Raw Materials",
    unit: "Sheet",
    unitCost: 45.75,
    stockLevel: 250,
    reorderPoint: 100,
    leadTime: 5,
    supplier: "Global Manufacturing Inc.",
  },
  {
    id: "2",
    name: "Steel Rod 10mm",
    category: "Raw Materials",
    unit: "Rod",
    unitCost: 32.5,
    stockLevel: 120,
    reorderPoint: 50,
    leadTime: 7,
    supplier: "Precision Metals Corp.",
  },
  {
    id: "3",
    name: "Circuit Board A1",
    category: "Components",
    unit: "Piece",
    unitCost: 125.0,
    stockLevel: 85,
    reorderPoint: 100,
    leadTime: 14,
    supplier: "Tech Components Ltd.",
  },
  {
    id: "4",
    name: "Power Supply Unit",
    category: "Components",
    unit: "Piece",
    unitCost: 95.25,
    stockLevel: 45,
    reorderPoint: 50,
    leadTime: 10,
    supplier: "Tech Components Ltd.",
  },
  {
    id: "5",
    name: "Plastic Housing Type A",
    category: "Components",
    unit: "Piece",
    unitCost: 28.5,
    stockLevel: 320,
    reorderPoint: 150,
    leadTime: 3,
    supplier: "Polymer Solutions Inc.",
  },
  {
    id: "6",
    name: "Rubber Gasket 5cm",
    category: "Components",
    unit: "Piece",
    unitCost: 3.75,
    stockLevel: 1200,
    reorderPoint: 500,
    leadTime: 2,
    supplier: "Polymer Solutions Inc.",
  },
  {
    id: "7",
    name: "Copper Wire 2mm",
    category: "Raw Materials",
    unit: "Meter",
    unitCost: 8.25,
    stockLevel: 750,
    reorderPoint: 300,
    leadTime: 4,
    supplier: "Global Manufacturing Inc.",
  },
];

const MaterialRequirements = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [stockFilter, setStockFilter] = React.useState("all");

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch =
      material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || material.category === categoryFilter;
    let matchesStock = true;

    if (stockFilter === "low") {
      matchesStock = material.stockLevel <= material.reorderPoint;
    }

    return matchesSearch && matchesCategory && matchesStock;
  });

  const categories = [
    ...new Set(materials.map((material) => material.category)),
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Materials
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {materials.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Low Stock Items
          </div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {materials.filter((m) => m.stockLevel <= m.reorderPoint).length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Avg. Lead Time
          </div>
          <div className="mt-1 text-2xl font-bold text-cyan-500">
            {Math.round(
              materials.reduce((sum, m) => sum + m.leadTime, 0) /
                materials.length,
            )}{" "}
            days
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
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
              placeholder="Search materials..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
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
          <Select value={stockFilter} onValueChange={setStockFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Stock Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Items</SelectItem>
              <SelectItem value="low">Low Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full space-x-2 md:w-auto">
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
            Add Material
          </Button>
          <Button variant="outline" className="w-full md:w-auto">
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
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
            </svg>
            Create BOM
          </Button>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Material Name</TableHead>
              <TableHead className="text-slate-300">Category</TableHead>
              <TableHead className="text-slate-300">Unit</TableHead>
              <TableHead className="text-right text-slate-300">
                Unit Cost
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Stock Level
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Reorder Point
              </TableHead>
              <TableHead className="text-slate-300">Lead Time</TableHead>
              <TableHead className="text-slate-300">Supplier</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMaterials.map((material) => (
              <TableRow key={material.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {material.name}
                </TableCell>
                <TableCell>{material.category}</TableCell>
                <TableCell>{material.unit}</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(material.unitCost)}
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={`font-medium ${
                      material.stockLevel <= material.reorderPoint
                        ? "text-amber-500"
                        : "text-slate-300"
                    }`}
                  >
                    {material.stockLevel}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  {material.reorderPoint}
                </TableCell>
                <TableCell>{material.leadTime} days</TableCell>
                <TableCell>{material.supplier}</TableCell>
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
                      <span className="sr-only">Order</span>
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

export default MaterialRequirements;
