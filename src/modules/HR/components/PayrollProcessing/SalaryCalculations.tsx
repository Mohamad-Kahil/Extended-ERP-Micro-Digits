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

interface PayrollRecord {
  id: string;
  employeeName: string;
  employeeId: string;
  department: string;
  position: string;
  baseSalary: number;
  bonus: number;
  deductions: number;
  netPay: number;
  paymentDate: string;
  status: "paid" | "pending" | "processing";
}

const payrollRecords: PayrollRecord[] = [
  {
    id: "1",
    employeeName: "John Doe",
    employeeId: "1",
    department: "Engineering",
    position: "Senior Developer",
    baseSalary: 8500,
    bonus: 1000,
    deductions: 2125,
    netPay: 7375,
    paymentDate: "2023-06-30",
    status: "paid",
  },
  {
    id: "2",
    employeeName: "Jane Smith",
    employeeId: "2",
    department: "Marketing",
    position: "Marketing Manager",
    baseSalary: 7800,
    bonus: 800,
    deductions: 1950,
    netPay: 6650,
    paymentDate: "2023-06-30",
    status: "paid",
  },
  {
    id: "3",
    employeeName: "Robert Johnson",
    employeeId: "3",
    department: "Finance",
    position: "Financial Analyst",
    baseSalary: 6500,
    bonus: 500,
    deductions: 1625,
    netPay: 5375,
    paymentDate: "2023-06-30",
    status: "paid",
  },
  {
    id: "4",
    employeeName: "Emily Davis",
    employeeId: "4",
    department: "Human Resources",
    position: "HR Specialist",
    baseSalary: 6200,
    bonus: 400,
    deductions: 1550,
    netPay: 5050,
    paymentDate: "2023-06-30",
    status: "paid",
  },
  {
    id: "5",
    employeeName: "Michael Wilson",
    employeeId: "5",
    department: "Sales",
    position: "Sales Representative",
    baseSalary: 5800,
    bonus: 1200,
    deductions: 1450,
    netPay: 5550,
    paymentDate: "2023-06-30",
    status: "paid",
  },
  {
    id: "6",
    employeeName: "Sarah Brown",
    employeeId: "6",
    department: "Engineering",
    position: "QA Engineer",
    baseSalary: 6800,
    bonus: 500,
    deductions: 1700,
    netPay: 5600,
    paymentDate: "2023-06-30",
    status: "paid",
  },
  {
    id: "7",
    employeeName: "David Miller",
    employeeId: "7",
    department: "Product",
    position: "Product Manager",
    baseSalary: 8200,
    bonus: 900,
    deductions: 2050,
    netPay: 7050,
    paymentDate: "2023-06-30",
    status: "paid",
  },
  {
    id: "8",
    employeeName: "John Doe",
    employeeId: "1",
    department: "Engineering",
    position: "Senior Developer",
    baseSalary: 8500,
    bonus: 0,
    deductions: 2125,
    netPay: 6375,
    paymentDate: "2023-07-31",
    status: "pending",
  },
  {
    id: "9",
    employeeName: "Jane Smith",
    employeeId: "2",
    department: "Marketing",
    position: "Marketing Manager",
    baseSalary: 7800,
    bonus: 0,
    deductions: 1950,
    netPay: 5850,
    paymentDate: "2023-07-31",
    status: "pending",
  },
];

const SalaryCalculations = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [paymentPeriod, setPaymentPeriod] = React.useState("2023-07");

  const filteredRecords = payrollRecords.filter(
    (record) =>
      record.paymentDate.startsWith(paymentPeriod) &&
      (record.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.department.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const totalBaseSalary = filteredRecords.reduce(
    (sum, record) => sum + record.baseSalary,
    0,
  );

  const totalBonus = filteredRecords.reduce(
    (sum, record) => sum + record.bonus,
    0,
  );

  const totalDeductions = filteredRecords.reduce(
    (sum, record) => sum + record.deductions,
    0,
  );

  const totalNetPay = filteredRecords.reduce(
    (sum, record) => sum + record.netPay,
    0,
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Base Salary
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalBaseSalary)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Bonuses
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalBonus)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Deductions
          </div>
          <div className="mt-1 text-2xl font-bold text-red-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalDeductions)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Net Pay
          </div>
          <div className="mt-1 text-2xl font-bold text-blue-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalNetPay)}
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
              placeholder="Search payroll..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={paymentPeriod} onValueChange={setPaymentPeriod}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Payment Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023-07">July 2023</SelectItem>
              <SelectItem value="2023-06">June 2023</SelectItem>
              <SelectItem value="2023-05">May 2023</SelectItem>
              <SelectItem value="2023-04">April 2023</SelectItem>
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
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
              <path d="M16 5V3" />
              <path d="M8 5V3" />
              <path d="M3 9h18" />
              <path d="M15 15h2" />
              <path d="M17 13v4" />
            </svg>
            Run Payroll
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Export
          </Button>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Employee</TableHead>
              <TableHead className="text-slate-300">Department</TableHead>
              <TableHead className="text-right text-slate-300">
                Base Salary
              </TableHead>
              <TableHead className="text-right text-slate-300">Bonus</TableHead>
              <TableHead className="text-right text-slate-300">
                Deductions
              </TableHead>
              <TableHead className="text-right text-slate-300">
                Net Pay
              </TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRecords.map((record) => (
              <TableRow key={record.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {record.employeeName}
                </TableCell>
                <TableCell>{record.department}</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(record.baseSalary)}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(record.bonus)}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(record.deductions)}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(record.netPay)}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      record.status === "paid"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : record.status === "pending"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {record.status}
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
                        className="h-4 w-4 text-blue-500"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      <span className="sr-only">Download</span>
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

export default SalaryCalculations;
