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

interface InventoryItem {
  id: string;
  sku: string;
  name: string;
  category: string;
  location: string;
  currentStock: number;
  minimumStock: number;
  reorderPoint: number;
  unitPrice: number;
  lastUpdated: string;
}

interface StockLevelsProps {
  searchTerm: string;
}

const inventoryItems: InventoryItem[] = [
  {
    id: "1",
    sku: "RM-1001",
    name: "Aluminum Sheet 2mm",
    category: "Raw Materials",
    location: "Warehouse A",
    currentStock: 250,
    minimumStock: 100,
    reorderPoint: 150,
    unitPrice: 45.75,
    lastUpdated: "2023-06-25",
  },
  {
    id: "2",
    sku: "RM-1002",
    name: "Steel Rod 10mm",
    category: "Raw Materials",
    location: "Warehouse A",
    currentStock: 120,
    minimumStock: 50,
    reorderPoint: 75,
    unitPrice: 32.5,
    lastUpdated: "2023-06-24",
  },
  {
    id: "3",
    sku: "CP-2001",
    name: "Circuit Board A1",
    category: "Components",
    location: "Warehouse B",
    currentStock: 85,
    minimumStock: 100,
    reorderPoint: 150,
    unitPrice: 125.0,
    lastUpdated: "2023-06-23",
  },
  {
    id: "4",
    sku: "CP-2002",
    name: "Power Supply Unit",
    category: "Components",
    location: "Warehouse B",
    currentStock: 45,
    minimumStock: 50,
    reorderPoint: 75,
    unitPrice: 95.25,
    lastUpdated: "2023-06-22",
  },
  {
    id: "5",
    sku: "PK-3001",
    name: "Cardboard Box Large",
    category: "Packaging",
    location: "Warehouse C",
    currentStock: 350,
    minimumStock: 200,
    reorderPoint: 250,
    unitPrice: 2.75,
    lastUpdated: "2023-06-25",
  },
  {
    id: "6",
    sku: "PK-3002",
    name: "Bubble Wrap Roll",
    category: "Packaging",
    location: "Warehouse C",
    currentStock: 28,
    minimumStock: 30,
    reorderPoint: 40,
    unitPrice: 18.5,
    lastUpdated: "2023-06-21",
  },
  {
    id: "7",
    sku: "CH-4001",
    name: "Industrial Solvent",
    category: "Chemicals",
    location: "Warehouse D",
    currentStock: 15,
    minimumStock: 20,
    reorderPoint: 30,
    unitPrice: 65.0,
    lastUpdated: "2023-06-20",
  },
];

const StockLevels = ({ searchTerm }: StockLevelsProps) => {
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [stockFilter, setStockFilter] = React.useState("all");

  const filteredItems = inventoryItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    let matchesStock = true;

    if (stockFilter === "low") {
      matchesStock = item.currentStock <= item.reorderPoint;
    } else if (stockFilter === "out") {
      matchesStock = item.currentStock <= item.minimumStock;
    }

    return matchesSearch && matchesCategory && matchesStock;
  });

  const categories = [...new Set(inventoryItems.map((item) => item.category))];

  const totalInventoryValue = inventoryItems.reduce(
    (sum, item) => sum + item.currentStock * item.unitPrice,
    0,
  );

  const lowStockItems = inventoryItems.filter(
    (item) => item.currentStock <= item.reorderPoint,
  ).length;

  const outOfStockItems = inventoryItems.filter(
    (item) => item.currentStock <= item.minimumStock,
  ).length;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Inventory Value
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalInventoryValue)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Low Stock Items
          </div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {lowStockItems}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Out of Stock Items
          </div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {outOfStockItems}
          </div>
        </div>
      </div>

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
          <Select value={stockFilter} onValueChange={setStockFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Stock Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Items</SelectItem>
              <SelectItem value="low">Low Stock</SelectItem>
              <SelectItem value="out">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">SKU</TableHead>
              <TableHead className="text-slate-300">Item Name</TableHead>
              <TableHead className="text-slate-300">Category</TableHead>
              <TableHead className="text-slate-300">Location</TableHead>
              <TableHead className="text-right text-slate-300">
                Current Stock
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Reorder Point
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Unit Price
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {item.sku}
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell className="text-right">
                  <span
                    className={`font-medium ${item.currentStock <= item.minimumStock ? "text-red-500" : item.currentStock <= item.reorderPoint ? "text-amber-500" : "text-slate-300"}`}
                  >
                    {item.currentStock}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  {item.reorderPoint}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(item.unitPrice)}
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
                    {item.currentStock <= item.reorderPoint && (
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
                        <span className="sr-only">Reorder</span>
                      </Button>
                    )}
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

export default StockLevels;
