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

interface Group {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  type: string;
  createdAt: string;
}

interface ContactGroupsProps {
  searchTerm: string;
}

const groups: Group[] = [
  {
    id: "GRP-001",
    name: "VIP Customers",
    description: "High-value customers with premium support",
    memberCount: 42,
    type: "customer",
    createdAt: "2023-01-15",
  },
  {
    id: "GRP-002",
    name: "Enterprise Clients",
    description: "Large enterprise customers",
    memberCount: 18,
    type: "customer",
    createdAt: "2023-02-10",
  },
  {
    id: "GRP-003",
    name: "SMB Customers",
    description: "Small and medium business customers",
    memberCount: 156,
    type: "customer",
    createdAt: "2023-01-20",
  },
  {
    id: "GRP-004",
    name: "Hot Leads",
    description: "High-potential prospects",
    memberCount: 35,
    type: "prospect",
    createdAt: "2023-03-05",
  },
  {
    id: "GRP-005",
    name: "Technology Partners",
    description: "Technology integration partners",
    memberCount: 24,
    type: "partner",
    createdAt: "2023-02-15",
  },
  {
    id: "GRP-006",
    name: "Resellers",
    description: "Channel partners and resellers",
    memberCount: 18,
    type: "partner",
    createdAt: "2023-01-30",
  },
  {
    id: "GRP-007",
    name: "Newsletter Subscribers",
    description: "Contacts subscribed to newsletter",
    memberCount: 412,
    type: "marketing",
    createdAt: "2023-01-15",
  },
];

const ContactGroups = ({ searchTerm }: ContactGroupsProps) => {
  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.type.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Total Groups
            </h3>
            <p className="text-3xl font-bold text-white">{groups.length}</p>
            <p className="text-xs text-slate-400 mt-1">Active contact groups</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Total Members
            </h3>
            <p className="text-3xl font-bold text-white">
              {groups.reduce((sum, group) => sum + group.memberCount, 0)}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Contacts in all groups
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">
              Group Types
            </h3>
            <p className="text-3xl font-bold text-white">
              {new Set(groups.map((group) => group.type)).size}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Different group categories
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
          Create New Group
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Group Name</TableHead>
              <TableHead className="text-slate-300">Description</TableHead>
              <TableHead className="text-slate-300">Members</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Created</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredGroups.map((group) => (
              <TableRow key={group.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {group.name}
                </TableCell>
                <TableCell>{group.description}</TableCell>
                <TableCell>{group.memberCount}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      group.type === "customer"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : group.type === "prospect"
                          ? "bg-blue-500/10 text-blue-500"
                          : group.type === "partner"
                            ? "bg-amber-500/10 text-amber-500"
                            : "bg-purple-500/10 text-purple-500"
                    }`}
                  >
                    {group.type.charAt(0).toUpperCase() + group.type.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  {new Date(group.createdAt).toLocaleDateString()}
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
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span className="sr-only">Manage Members</span>
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

export default ContactGroups;
