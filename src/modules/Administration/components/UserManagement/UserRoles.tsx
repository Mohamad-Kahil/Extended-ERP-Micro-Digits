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
import { Card, CardContent } from "@/components/ui/card";

interface Role {
  id: string;
  name: string;
  description: string;
  userCount: number;
  permissions: string[];
  createdAt: string;
}

interface UserRolesProps {
  searchTerm: string;
}

const roles: Role[] = [
  {
    id: "ROLE-001",
    name: "Administrator",
    description: "Full system access with all permissions",
    userCount: 5,
    permissions: [
      "user_management",
      "system_configuration",
      "audit_logs",
      "data_backup",
      "security_settings",
    ],
    createdAt: "2023-01-15",
  },
  {
    id: "ROLE-002",
    name: "Manager",
    description: "Department management with limited admin access",
    userCount: 18,
    permissions: ["user_management", "audit_logs", "reports_view"],
    createdAt: "2023-01-15",
  },
  {
    id: "ROLE-003",
    name: "User",
    description: "Standard user with basic system access",
    userCount: 225,
    permissions: ["profile_edit", "reports_view"],
    createdAt: "2023-01-15",
  },
  {
    id: "ROLE-004",
    name: "Auditor",
    description: "Read-only access for auditing purposes",
    userCount: 3,
    permissions: ["audit_logs", "reports_view"],
    createdAt: "2023-03-10",
  },
  {
    id: "ROLE-005",
    name: "IT Support",
    description: "Technical support with system configuration access",
    userCount: 8,
    permissions: [
      "system_configuration",
      "user_management",
      "security_settings",
    ],
    createdAt: "2023-02-22",
  },
];

const permissionLabels: Record<string, string> = {
  user_management: "User Management",
  system_configuration: "System Configuration",
  audit_logs: "Audit Logs",
  data_backup: "Data Backup",
  security_settings: "Security Settings",
  reports_view: "View Reports",
  profile_edit: "Edit Profile",
};

const UserRoles = ({ searchTerm }: UserRolesProps) => {
  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Total Roles
            </h3>
            <p className="text-3xl font-bold text-white">{roles.length}</p>
            <p className="text-xs text-slate-400 mt-1">Defined in the system</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Users Assigned
            </h3>
            <p className="text-3xl font-bold text-white">
              {roles.reduce((sum, role) => sum + role.userCount, 0)}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Total role assignments
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Permissions
            </h3>
            <p className="text-3xl font-bold text-white">
              {Object.keys(permissionLabels).length}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Available in the system
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
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
          Create New Role
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Role Name</TableHead>
              <TableHead className="text-slate-300">Description</TableHead>
              <TableHead className="text-slate-300">Users</TableHead>
              <TableHead className="text-slate-300">Permissions</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRoles.map((role) => (
              <TableRow key={role.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {role.name}
                </TableCell>
                <TableCell>{role.description}</TableCell>
                <TableCell>{role.userCount}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.slice(0, 3).map((permission) => (
                      <span
                        key={permission}
                        className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-slate-700 text-slate-300"
                      >
                        {permissionLabels[permission]}
                      </span>
                    ))}
                    {role.permissions.length > 3 && (
                      <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-slate-700 text-slate-300">
                        +{role.permissions.length - 3} more
                      </span>
                    )}
                  </div>
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
  );
};

export default UserRoles;
