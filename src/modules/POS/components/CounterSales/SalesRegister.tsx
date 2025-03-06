import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: string;
  barcode: string;
  name: string;
  category: string;
  price: number;
  taxRate: number;
  inStock: number;
}

const products: Product[] = [
  {
    id: "1",
    barcode: "8901234567890",
    name: "Smart Thermostat Model A",
    category: "Smart Home",
    price: 129.99,
    taxRate: 8.5,
    inStock: 45,
  },
  {
    id: "2",
    barcode: "8901234567891",
    name: "Smart Lock System",
    category: "Smart Home",
    price: 199.99,
    taxRate: 8.5,
    inStock: 32,
  },
  {
    id: "3",
    barcode: "8901234567892",
    name: "Security Camera Indoor",
    category: "Security",
    price: 89.99,
    taxRate: 8.5,
    inStock: 78,
  },
  {
    id: "4",
    barcode: "8901234567893",
    name: "Smart Doorbell Pro",
    category: "Smart Home",
    price: 149.99,
    taxRate: 8.5,
    inStock: 56,
  },
  {
    id: "5",
    barcode: "8901234567894",
    name: "Motion Sensor V2",
    category: "Security",
    price: 39.99,
    taxRate: 8.5,
    inStock: 120,
  },
  {
    id: "6",
    barcode: "8901234567895",
    name: "Smart Light Bulb Pack",
    category: "Smart Home",
    price: 59.99,
    taxRate: 8.5,
    inStock: 95,
  },
];

interface CartItem extends Product {
  quantity: number;
}

const SalesRegister = () => {
  const [barcodeInput, setBarcodeInput] = React.useState("");
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = React.useState("credit-card");
  const [customerPhone, setCustomerPhone] = React.useState("");
  const [discountCode, setDiscountCode] = React.useState("");
  const [discountApplied, setDiscountApplied] = React.useState(false);

  const handleAddProduct = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const existingCartItem = cart.find((item) => item.id === productId);
    if (existingCartItem) {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (productId: string) => {
    const existingCartItem = cart.find((item) => item.id === productId);
    if (!existingCartItem) return;

    if (existingCartItem.quantity === 1) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  };

  const handleBarcodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = products.find((p) => p.barcode === barcodeInput);
    if (product) {
      handleAddProduct(product.id);
      setBarcodeInput("");
    }
  };

  const handleApplyDiscount = () => {
    if (discountCode) {
      setDiscountApplied(true);
    }
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discount = discountApplied ? subtotal * 0.1 : 0; // 10% discount
  const taxableAmount = subtotal - discount;
  const tax = taxableAmount * 0.085; // 8.5% tax
  const total = taxableAmount + tax;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-end md:space-x-4 md:space-y-0">
          <div className="flex-1">
            <form onSubmit={handleBarcodeSubmit} className="flex space-x-2">
              <div className="relative flex-1">
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
                  <path d="M3 5v14" />
                  <path d="M8 5v14" />
                  <path d="M12 5v14" />
                  <path d="M17 5v14" />
                  <path d="M21 5v14" />
                </svg>
                <Input
                  placeholder="Scan barcode or enter product code"
                  className="pl-8"
                  value={barcodeInput}
                  onChange={(e) => setBarcodeInput(e.target.value)}
                />
              </div>
              <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700">
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
                  <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
                  <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
                  <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
                  <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
                </svg>
                Scan
              </Button>
            </form>
          </div>
          <Button
            variant="outline"
            className="flex-shrink-0"
            onClick={() => setCart([])}
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
              className="mr-2"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" x2="10" y1="11" y2="17" />
              <line x1="14" x2="14" y1="11" y2="17" />
            </svg>
            Clear Cart
          </Button>
        </div>

        <div className="rounded-md border border-slate-800">
          <Table>
            <TableHeader className="bg-slate-800">
              <TableRow>
                <TableHead className="text-slate-300">Product</TableHead>
                <TableHead className="text-right text-slate-300">
                  Price
                </TableHead>
                <TableHead className="text-center text-slate-300">
                  Quantity
                </TableHead>
                <TableHead className="text-right text-slate-300">
                  Subtotal
                </TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="h-24 text-center text-slate-500"
                  >
                    No items in cart. Scan a product or select from the list
                    below.
                  </TableCell>
                </TableRow>
              ) : (
                cart.map((item) => (
                  <TableRow key={item.id} className="border-slate-800">
                    <TableCell className="font-medium text-slate-300">
                      <div>
                        <div>{item.name}</div>
                        <div className="text-xs text-slate-500">
                          {item.barcode}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.price)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => handleRemoveProduct(item.id)}
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
                            <path d="M5 12h14" />
                          </svg>
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => handleAddProduct(item.id)}
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
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.price * item.quantity)}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
                        onClick={() =>
                          setCart(cart.filter((i) => i.id !== item.id))
                        }
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
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        <span className="sr-only">Remove</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Available Products
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <Card
                key={product.id}
                className="cursor-pointer border-slate-800 bg-slate-800/50 transition-colors hover:bg-slate-800"
                onClick={() => handleAddProduct(product.id)}
              >
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-white">
                    {product.name}
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {product.category}
                    </span>
                    <span className="font-medium text-cyan-500">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(product.price)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Checkout</h3>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Customer Phone (Optional)
              </label>
              <Input
                placeholder="Enter phone number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Discount Code
              </label>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  disabled={discountApplied}
                />
                <Button
                  variant="outline"
                  onClick={handleApplyDiscount}
                  disabled={!discountCode || discountApplied}
                >
                  Apply
                </Button>
              </div>
              {discountApplied && (
                <p className="mt-1 text-xs text-emerald-500">
                  10% discount applied successfully!
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Subtotal</span>
                <span className="font-medium text-slate-300">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Discount</span>
                <span className="font-medium text-emerald-500">
                  -{" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(discount)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Tax (8.5%)</span>
                <span className="font-medium text-slate-300">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(tax)}
                </span>
              </div>
              <div className="border-t border-slate-700 pt-2">
                <div className="flex justify-between">
                  <span className="text-lg font-medium text-white">Total</span>
                  <span className="text-lg font-bold text-white">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(total)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Payment Method
              </label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                  <SelectItem value="debit-card">Debit Card</SelectItem>
                  <SelectItem value="mobile-payment">Mobile Payment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700"
              disabled={cart.length === 0}
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
                className="mr-2"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              Complete Sale
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SalesRegister;
