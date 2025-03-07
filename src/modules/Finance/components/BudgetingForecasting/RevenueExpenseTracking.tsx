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

interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  type: "revenue" | "expense";
  amount: number;
  department: string;
}

interface RevenueExpenseTrackingProps {
  searchTerm: string;
}

const transactions: Transaction[] = [
  {
    id: "1",
    date: "2023-06-01",
    description: "Product Sales - Enterprise",
    category: "Sales Revenue",
    type: "revenue",
    amount: 45000,
    department: "Sales",
  },
  {
    id: "2",
    date: "2023-06-03",
    description: "Office Rent Payment",
    category: "Rent & Utilities",
    type: "expense",
    amount: 12500,
    department: "Administration",
  },
  {
    id: "3",
    date: "2023-06-05",
    description: "Product Sales - SMB",
    category: "Sales Revenue",
    type: "revenue",
    amount: 28500,
    department: "Sales",
  },
  {
    id: "4",
    date: "2023-06-08",
    description: "Marketing Campaign",
    category: "Marketing",
    type: "expense",
    amount: 7500,
    department: "Marketing",
  },
  {
    id: "5",
    date: "2023-06-10",
    description: "Consulting Services",
    category: "Service Revenue",
    type: "revenue",
    amount: 18750,
    department: "Services",
  },
  {
    id: "6",
    date: "2023-06-12",
    description: "Employee Salaries",
    category: "Payroll",
    type: "expense",
    amount: 85000,
    department: "Human Resources",
  },
  {
    id: "7",
    date: "2023-06-15",
    description: "Software Subscriptions",
    category: "Software & Tools",
    type: "expense",
    amount: 4250,
    department: "IT",
  },
  {
    id: "8",
    date: "2023-06-18",
    description: "Product Sales - Enterprise",
    category: "Sales Revenue",
    type: "revenue",
    amount: 62500,
    department: "Sales",
  },
  {
    id: "9",
    date: "2023-06-20",
    description: "Office Supplies",
    category: "Office Expenses",
    type: "expense",
    amount: 1850,
    department: "Administration",
  },
  {
    id: "10",
    date: "2023-06-25",
    description: "Maintenance Services",
    category: "Service Revenue",
    type: "revenue",
    amount: 9500,
    department: "Services",
  },
];

const RevenueExpenseTracking = ({
  searchTerm,
}: RevenueExpenseTrackingProps) => {
  const [filterType, setFilterType] = React.useState<
    "all" | "revenue" | "expense"
  >("all");

  const filteredTransactions = transactions.filter(
    (transaction) =>
      (filterType === "all" || transaction.type === filterType) &&
      (transaction.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.department
          .toLowerCase()
          .includes(searchTerm.toLowerCase())),
  );

  const totalRevenue = transactions
    .filter((t) => t.type === "revenue")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select
            value={filterType}
            onValueChange={(value: "all" | "revenue" | "expense") =>
              setFilterType(value)
            }
          >
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Transactions</SelectItem>
              <SelectItem value="revenue">Revenue Only</SelectItem>
              <SelectItem value="expense">Expenses Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Date</TableHead>
              <TableHead className="text-slate-300">Description</TableHead>
              <TableHead className="text-slate-300">Category</TableHead>
              <TableHead className="text-slate-300">Department</TableHead>
              <TableHead className="text-right text-slate-300">
                Amount
              </TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {new Date(transaction.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>{transaction.department}</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(transaction.amount)}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      transaction.type === "revenue"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {transaction.type}
                  </span>
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
                        className="h-4 w-4 text-slate-400"
                      >
                        <path d="M2 12h20" />
                        <path d="M6 6h12" />
                        <path d="M12 18v-6" />
                      </svg>
                      <span className="sr-only">Categorize</span>
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

export default RevenueExpenseTracking;
