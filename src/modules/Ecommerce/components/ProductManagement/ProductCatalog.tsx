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

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "draft" | "out-of-stock" | "discontinued";
  rating: number;
  createdAt: string;
  updatedAt: string;
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    sku: "AUDIO-001",
    category: "Electronics",
    price: 149.99,
    stock: 45,
    status: "active",
    rating: 4.8,
    createdAt: "2023-05-15",
    updatedAt: "2023-09-20",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
  },
  {
    id: "2",
    name: "Ergonomic Office Chair",
    sku: "FURN-102",
    category: "Furniture",
    price: 249.99,
    stock: 18,
    status: "active",
    rating: 4.5,
    createdAt: "2023-06-10",
    updatedAt: "2023-09-15",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
  },
  {
    id: "3",
    name: "Smart Home Hub",
    sku: "SMART-205",
    category: "Smart Home",
    price: 129.99,
    stock: 0,
    status: "out-of-stock",
    rating: 4.2,
    createdAt: "2023-04-20",
    updatedAt: "2023-09-10",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
  },
  {
    id: "4",
    name: "Organic Cotton T-Shirt",
    sku: "APRL-056",
    category: "Apparel",
    price: 29.99,
    stock: 120,
    status: "active",
    rating: 4.3,
    createdAt: "2023-07-05",
    updatedAt: "2023-09-05",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
  },
  {
    id: "5",
    name: "Professional DSLR Camera",
    sku: "PHOTO-089",
    category: "Electronics",
    price: 899.99,
    stock: 8,
    status: "active",
    rating: 4.9,
    createdAt: "2023-03-15",
    updatedAt: "2023-08-25",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
  },
  {
    id: "6",
    name: "Stainless Steel Water Bottle",
    sku: "HOME-142",
    category: "Home Goods",
    price: 24.99,
    stock: 65,
    status: "active",
    rating: 4.6,
    createdAt: "2023-06-25",
    updatedAt: "2023-08-20",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
  },
  {
    id: "7",
    name: "Vintage Leather Backpack",
    sku: "BAG-073",
    category: "Accessories",
    price: 79.99,
    stock: 12,
    status: "active",
    rating: 4.7,
    createdAt: "2023-05-30",
    updatedAt: "2023-08-15",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
  },
  {
    id: "8",
    name: "Smart Fitness Tracker",
    sku: "WEAR-118",
    category: "Wearables",
    price: 99.99,
    stock: 0,
    status: "out-of-stock",
    rating: 4.4,
    createdAt: "2023-04-10",
    updatedAt: "2023-08-10",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
  },
  {
    id: "9",
    name: "Wireless Charging Pad",
    sku: "TECH-224",
    category: "Electronics",
    price: 39.99,
    stock: 28,
    status: "active",
    rating: 4.1,
    createdAt: "2023-07-15",
    updatedAt: "2023-08-05",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
  },
  {
    id: "10",
    name: "Ceramic Coffee Mug Set",
    sku: "HOME-187",
    category: "Home Goods",
    price: 34.99,
    stock: 42,
    status: "active",
    rating: 4.5,
    createdAt: "2023-06-05",
    updatedAt: "2023-07-30",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
  },
];

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter(
    (product) =>
      (categoryFilter === "all" || product.category === categoryFilter) &&
      (statusFilter === "all" || product.status === statusFilter) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500/10 text-emerald-500";
      case "draft":
        return "bg-slate-500/10 text-slate-500";
      case "out-of-stock":
        return "bg-amber-500/10 text-amber-500";
      case "discontinued":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Products
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {products.length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Active Products
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {products.filter((p) => p.status === "active").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Out of Stock</div>
          <div className="mt-1 text-2xl font-bold text-amber-500">
            {products.filter((p) => p.status === "out-of-stock").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">Categories</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {categories.length}
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
              placeholder="Search products..."
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
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              <SelectItem value="discontinued">Discontinued</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
          Add Product
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Product</TableHead>
              <TableHead className="text-slate-300">SKU</TableHead>
              <TableHead className="text-slate-300">Category</TableHead>
              <TableHead className="text-right text-slate-300">Price</TableHead>
              <TableHead className="text-right text-slate-300">Stock</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-right text-slate-300">
                Rating
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-10 w-10 rounded-md object-cover"
                    />
                    <span>{product.name}</span>
                  </div>
                </TableCell>
                <TableCell>{product.sku}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="text-right">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  {product.stock === 0 ? (
                    <span className="text-amber-500">0</span>
                  ) : (
                    product.stock
                  )}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(product.status)}`}
                  >
                    {product.status === "out-of-stock"
                      ? "Out of Stock"
                      : product.status.charAt(0).toUpperCase() +
                        product.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="text-right">{product.rating}</TableCell>
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
                        className="h-4 w-4 text-blue-500"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <span className="sr-only">View Details</span>
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
                        className="h-4 w-4 text-red-500"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      </svg>
                      <span className="sr-only">Delete</span>
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

export default ProductCatalog;
