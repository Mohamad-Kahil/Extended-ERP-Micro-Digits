import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";

interface PaymentGateway {
  id: string;
  name: string;
  logo: string;
  status: "active" | "inactive" | "setup-required";
  supportedMethods: string[];
  transactionFee: string;
  description: string;
}

const paymentGateways: PaymentGateway[] = [
  {
    id: "1",
    name: "Stripe",
    logo: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=50&q=80",
    status: "active",
    supportedMethods: ["Credit Card", "Debit Card", "Apple Pay", "Google Pay"],
    transactionFee: "2.9% + $0.30",
    description:
      "Comprehensive payment platform with support for multiple payment methods and currencies.",
  },
  {
    id: "2",
    name: "PayPal",
    logo: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=50&q=80",
    status: "active",
    supportedMethods: ["PayPal", "Credit Card", "Debit Card"],
    transactionFee: "3.49% + $0.49",
    description:
      "Global payment solution with built-in fraud protection and buyer/seller protection policies.",
  },
  {
    id: "3",
    name: "Square",
    logo: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=50&q=80",
    status: "inactive",
    supportedMethods: ["Credit Card", "Debit Card", "Square Terminal"],
    transactionFee: "2.6% + $0.10",
    description:
      "Integrated payment solution with hardware options for in-person payments.",
  },
  {
    id: "4",
    name: "Authorize.net",
    logo: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=50&q=80",
    status: "setup-required",
    supportedMethods: ["Credit Card", "Debit Card", "eCheck"],
    transactionFee: "2.9% + $0.30",
    description:
      "Customizable payment gateway with advanced fraud detection features.",
  },
  {
    id: "5",
    name: "Braintree",
    logo: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=50&q=80",
    status: "inactive",
    supportedMethods: [
      "Credit Card",
      "Debit Card",
      "PayPal",
      "Venmo",
      "Apple Pay",
      "Google Pay",
    ],
    transactionFee: "2.9% + $0.30",
    description:
      "Full-stack payment solution with support for multiple payment methods and currencies.",
  },
];

const PaymentIntegrations = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredGateways = paymentGateways.filter((gateway) =>
    gateway.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500/10 text-emerald-500";
      case "inactive":
        return "bg-slate-500/10 text-slate-500";
      case "setup-required":
        return "bg-amber-500/10 text-amber-500";
      default:
        return "bg-slate-500/10 text-slate-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
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
            placeholder="Search payment gateways..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
          Add New Gateway
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredGateways.map((gateway) => (
          <Card
            key={gateway.id}
            className="border-slate-800 bg-slate-800/50 transition-colors hover:bg-slate-800/70"
          >
            <CardContent className="p-6">
              <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 overflow-hidden rounded-md bg-slate-700">
                    <img
                      src={gateway.logo}
                      alt={gateway.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {gateway.name}
                    </h3>
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(gateway.status)}`}
                    >
                      {gateway.status
                        .split("-")
                        .map(
                          (word) =>
                            word.charAt(0).toUpperCase() + word.slice(1),
                        )
                        .join(" ")}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Switch
                    checked={gateway.status === "active"}
                    disabled={gateway.status === "setup-required"}
                  />
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>

              <div className="mt-4 text-sm text-slate-400">
                {gateway.description}
              </div>

              <div className="mt-4 flex flex-col space-y-4 md:flex-row md:items-center md:space-x-6 md:space-y-0">
                <div>
                  <span className="text-xs font-medium text-slate-500">
                    SUPPORTED METHODS
                  </span>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {gateway.supportedMethods.map((method, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-slate-700 px-2 py-1 text-xs font-medium text-slate-300"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500">
                    TRANSACTION FEE
                  </span>
                  <div className="mt-1 text-sm font-medium text-slate-300">
                    {gateway.transactionFee}
                  </div>
                </div>
              </div>

              {gateway.status === "setup-required" && (
                <div className="mt-4 rounded-md border border-amber-500/20 bg-amber-500/10 p-3">
                  <div className="flex items-center space-x-3">
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
                      className="text-amber-500"
                    >
                      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" x2="12" y1="9" y2="13" />
                      <line x1="12" x2="12.01" y1="17" y2="17" />
                    </svg>
                    <p className="text-sm text-amber-500">
                      Additional setup required. Click Configure to complete the
                      integration.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-slate-800 bg-slate-800/50">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Test Payment Credentials
          </h3>
          <p className="mb-4 text-sm text-slate-400">
            Use these test credentials to verify your payment gateway
            integrations without processing real transactions.
          </p>

          <div className="space-y-4">
            <div className="rounded-md border border-slate-700 bg-slate-800 p-4">
              <h4 className="mb-2 font-medium text-white">Stripe Test Cards</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Card Number</span>
                  <span className="font-mono text-slate-300">
                    4242 4242 4242 4242
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Expiry Date</span>
                  <span className="font-mono text-slate-300">
                    Any future date
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">CVC</span>
                  <span className="font-mono text-slate-300">Any 3 digits</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ZIP</span>
                  <span className="font-mono text-slate-300">Any 5 digits</span>
                </div>
              </div>
            </div>

            <div className="rounded-md border border-slate-700 bg-slate-800 p-4">
              <h4 className="mb-2 font-medium text-white">PayPal Sandbox</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Email</span>
                  <span className="font-mono text-slate-300">
                    sb-buyer@example.com
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Password</span>
                  <span className="font-mono text-slate-300">sandbox123</span>
                </div>
              </div>
            </div>
          </div>

          <Button className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700">
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
              <path d="m12 5 7 7-7 7" />
            </svg>
            Run Test Transaction
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentIntegrations;
