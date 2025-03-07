import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  reportTo?: string;
  children?: Employee[];
}

interface Department {
  id: string;
  name: string;
  head: string;
  employees: Employee[];
  children?: Department[];
}

const OrganizationalChart = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("tree");
  const [expandedDepts, setExpandedDepts] = useState<string[]>([
    "exec",
    "hr",
    "tech",
    "finance",
    "marketing",
  ]);

  // Sample organizational data
  const organizationData: Department[] = [
    {
      id: "exec",
      name: "Executive",
      head: "John Smith",
      employees: [
        {
          id: "emp001",
          name: "John Smith",
          position: "CEO",
          department: "Executive",
          email: "john.smith@company.com",
        },
        {
          id: "emp002",
          name: "Sarah Johnson",
          position: "COO",
          department: "Executive",
          email: "sarah.johnson@company.com",
          reportTo: "emp001",
        },
        {
          id: "emp003",
          name: "Michael Chen",
          position: "CFO",
          department: "Executive",
          email: "michael.chen@company.com",
          reportTo: "emp001",
        },
        {
          id: "emp004",
          name: "Emily Davis",
          position: "CTO",
          department: "Executive",
          email: "emily.davis@company.com",
          reportTo: "emp001",
        },
      ],
      children: [
        {
          id: "hr",
          name: "Human Resources",
          head: "Jessica Williams",
          employees: [
            {
              id: "emp005",
              name: "Jessica Williams",
              position: "HR Director",
              department: "Human Resources",
              email: "jessica.williams@company.com",
              reportTo: "emp002",
            },
            {
              id: "emp006",
              name: "David Miller",
              position: "Recruitment Manager",
              department: "Human Resources",
              email: "david.miller@company.com",
              reportTo: "emp005",
            },
            {
              id: "emp007",
              name: "Amanda Clark",
              position: "Training Coordinator",
              department: "Human Resources",
              email: "amanda.clark@company.com",
              reportTo: "emp005",
            },
          ],
        },
        {
          id: "tech",
          name: "Technology",
          head: "Emily Davis",
          employees: [
            {
              id: "emp004",
              name: "Emily Davis",
              position: "CTO",
              department: "Technology",
              email: "emily.davis@company.com",
              reportTo: "emp001",
            },
          ],
          children: [
            {
              id: "engineering",
              name: "Engineering",
              head: "Robert Wilson",
              employees: [
                {
                  id: "emp008",
                  name: "Robert Wilson",
                  position: "Engineering Director",
                  department: "Engineering",
                  email: "robert.wilson@company.com",
                  reportTo: "emp004",
                },
                {
                  id: "emp009",
                  name: "Jennifer Lee",
                  position: "Lead Developer",
                  department: "Engineering",
                  email: "jennifer.lee@company.com",
                  reportTo: "emp008",
                },
                {
                  id: "emp010",
                  name: "Thomas Brown",
                  position: "Senior Developer",
                  department: "Engineering",
                  email: "thomas.brown@company.com",
                  reportTo: "emp009",
                },
              ],
            },
            {
              id: "product",
              name: "Product",
              head: "Lisa Garcia",
              employees: [
                {
                  id: "emp011",
                  name: "Lisa Garcia",
                  position: "Product Director",
                  department: "Product",
                  email: "lisa.garcia@company.com",
                  reportTo: "emp004",
                },
                {
                  id: "emp012",
                  name: "Kevin Martinez",
                  position: "Product Manager",
                  department: "Product",
                  email: "kevin.martinez@company.com",
                  reportTo: "emp011",
                },
              ],
            },
          ],
        },
        {
          id: "finance",
          name: "Finance",
          head: "Michael Chen",
          employees: [
            {
              id: "emp003",
              name: "Michael Chen",
              position: "CFO",
              department: "Finance",
              email: "michael.chen@company.com",
              reportTo: "emp001",
            },
            {
              id: "emp013",
              name: "Patricia Taylor",
              position: "Financial Controller",
              department: "Finance",
              email: "patricia.taylor@company.com",
              reportTo: "emp003",
            },
            {
              id: "emp014",
              name: "James Anderson",
              position: "Financial Analyst",
              department: "Finance",
              email: "james.anderson@company.com",
              reportTo: "emp013",
            },
          ],
        },
        {
          id: "marketing",
          name: "Marketing",
          head: "Olivia Wilson",
          employees: [
            {
              id: "emp015",
              name: "Olivia Wilson",
              position: "Marketing Director",
              department: "Marketing",
              email: "olivia.wilson@company.com",
              reportTo: "emp002",
            },
            {
              id: "emp016",
              name: "Daniel Thompson",
              position: "Marketing Manager",
              department: "Marketing",
              email: "daniel.thompson@company.com",
              reportTo: "emp015",
            },
            {
              id: "emp017",
              name: "Sophia Rodriguez",
              position: "Digital Marketing Specialist",
              department: "Marketing",
              email: "sophia.rodriguez@company.com",
              reportTo: "emp016",
            },
          ],
        },
      ],
    },
  ];

  const toggleDepartment = (deptId: string) => {
    setExpandedDepts((prev) =>
      prev.includes(deptId)
        ? prev.filter((id) => id !== deptId)
        : [...prev, deptId],
    );
  };

  const renderDepartmentTree = (department: Department, level = 0) => {
    const isExpanded = expandedDepts.includes(department.id);
    const paddingLeft = level * 20;
    const hasChildren = department.children && department.children.length > 0;

    return (
      <div key={department.id} className="mb-2">
        <div
          className="flex items-center py-2 px-3 rounded-md bg-slate-800/50 hover:bg-slate-800 transition-colors cursor-pointer"
          onClick={() => toggleDepartment(department.id)}
          style={{ marginLeft: `${paddingLeft}px` }}
        >
          <div className="mr-2">
            {hasChildren && (
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
                className={`transition-transform ${isExpanded ? "rotate-90" : ""}`}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <span className="font-medium text-white">{department.name}</span>
              <div className="ml-2 px-2 py-0.5 text-xs rounded-full bg-cyan-600/20 text-cyan-500">
                {department.employees.length} employees
              </div>
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Head: {department.head}
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="ml-8 pl-4 border-l border-slate-700">
            {department.employees
              .filter(
                (emp) =>
                  !emp.reportTo ||
                  (emp.reportTo.startsWith("emp00") &&
                    parseInt(emp.reportTo.substring(5)) <= 4),
              )
              .map((employee) => (
                <div
                  key={employee.id}
                  className="py-2 px-3 my-2 rounded-md bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${employee.name}`}
                      />
                      <AvatarFallback>
                        {employee.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium text-white">
                        {employee.name}
                      </div>
                      <div className="text-xs text-slate-400">
                        {employee.position}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {department.children &&
              department.children.map((child) =>
                renderDepartmentTree(child, level + 1),
              )}
          </div>
        )}
      </div>
    );
  };

  const renderOrgChart = () => {
    if (viewMode === "tree") {
      // For tree view, if search term exists, switch to list view temporarily
      if (searchTerm.trim() !== "") {
        return renderListView();
      }

      return (
        <div className="space-y-4">
          {organizationData.map((department) =>
            renderDepartmentTree(department),
          )}
        </div>
      );
    } else {
      return renderListView();
    }
  };

  // Separate function for list view to avoid code duplication
  const renderListView = () => {
    // Get all employees from all departments and subdepartments
    const allEmployees = [];
    const processedIds = new Set();

    const collectEmployees = (departments) => {
      departments.forEach((dept) => {
        dept.employees.forEach((emp) => {
          // Only add employee if we haven't seen this ID before
          if (!processedIds.has(emp.id)) {
            processedIds.add(emp.id);
            allEmployees.push(emp);
          }
        });
        if (dept.children && dept.children.length > 0) {
          collectEmployees(dept.children);
        }
      });
    };

    collectEmployees(organizationData);

    // Filter employees based on search term
    const filteredEmployees = allEmployees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
      <div className="space-y-4">
        {filteredEmployees.length === 0 ? (
          <div className="p-4 text-center text-slate-400">
            No employees found matching "{searchTerm}"
          </div>
        ) : (
          filteredEmployees.map((employee) => (
            <div
              key={employee.id}
              className="p-3 rounded-md bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${employee.name}`}
                  />
                  <AvatarFallback>
                    {employee.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">
                    {employee.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {employee.position} • {employee.department}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {employee.email}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  };

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Organizational Chart
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
              Add Employee
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
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
                placeholder="Search employees..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={viewMode} onValueChange={setViewMode}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="View Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tree">Tree View</SelectItem>
                <SelectItem value="list">List View</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setExpandedDepts([
                  "exec",
                  "hr",
                  "tech",
                  "finance",
                  "marketing",
                  "engineering",
                  "product",
                ])
              }
            >
              Expand All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setExpandedDepts([])}
            >
              Collapse All
            </Button>
          </div>
        </div>

        <div className="rounded-md border border-slate-800 p-4">
          {renderOrgChart()}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrganizationalChart;
