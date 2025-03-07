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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  type: "customer" | "prospect" | "partner";
  lastContact: string;
}

interface ContactsListProps {
  searchTerm: string;
}

const contacts: Contact[] = [
  {
    id: "CON-001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    company: "Acme Corporation",
    type: "customer",
    lastContact: "2023-09-15T10:30:00",
  },
  {
    id: "CON-002",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "(555) 234-5678",
    company: "XYZ Industries",
    type: "customer",
    lastContact: "2023-09-14T09:15:00",
  },
  {
    id: "CON-003",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "(555) 345-6789",
    company: "Global Tech",
    type: "prospect",
    lastContact: "2023-09-13T16:45:00",
  },
  {
    id: "CON-004",
    name: "Emily Taylor",
    email: "emily.taylor@example.com",
    phone: "(555) 456-7890",
    company: "Innovative Solutions",
    type: "customer",
    lastContact: "2023-09-12T08:20:00",
  },
  {
    id: "CON-005",
    name: "David Miller",
    email: "david.miller@example.com",
    phone: "(555) 567-8901",
    company: "Future Systems",
    type: "prospect",
    lastContact: "2023-09-11T14:30:00",
  },
  {
    id: "CON-006",
    name: "Jessica Williams",
    email: "jessica.williams@example.com",
    phone: "(555) 678-9012",
    company: "Partner Networks",
    type: "partner",
    lastContact: "2023-09-10T11:30:00",
  },
  {
    id: "CON-007",
    name: "Robert Garcia",
    email: "robert.garcia@example.com",
    phone: "(555) 789-0123",
    company: "Alliance Group",
    type: "partner",
    lastContact: "2023-09-09T14:10:00",
  },
];

const ContactsList = ({ searchTerm }: ContactsListProps) => {
  const [typeFilter, setTypeFilter] = React.useState("all");

  const filteredContacts = contacts.filter(
    (contact) =>
      (typeFilter === "all" || contact.type === typeFilter) &&
      (contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.company.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Contact Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="customer">Customers</SelectItem>
              <SelectItem value="prospect">Prospects</SelectItem>
              <SelectItem value="partner">Partners</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Contact</TableHead>
              <TableHead className="text-slate-300">Company</TableHead>
              <TableHead className="text-slate-300">Phone</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Last Contact</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContacts.map((contact) => (
              <TableRow key={contact.id} className="border-slate-800">
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${contact.name}`}
                      />
                      <AvatarFallback>
                        {contact.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-slate-300">
                        {contact.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {contact.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      contact.type === "customer"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : contact.type === "prospect"
                          ? "bg-blue-500/10 text-blue-500"
                          : "bg-amber-500/10 text-amber-500"
                    }`}
                  >
                    {contact.type.charAt(0).toUpperCase() +
                      contact.type.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  {contact.lastContact
                    ? new Date(contact.lastContact).toLocaleString()
                    : "Never"}
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

export default ContactsList;
