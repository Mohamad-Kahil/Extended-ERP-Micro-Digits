import React, { useState } from "react";
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

interface Document {
  id: string;
  name: string;
  type: string;
  category: string;
  uploadedBy: string;
  uploadDate: string;
  size: string;
  version: string;
}

interface LegalDocumentStorageProps {
  searchTerm: string;
}

const LegalDocumentStorage = ({ searchTerm }: LegalDocumentStorageProps) => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const documents: Document[] = [
    {
      id: "DOC-001",
      name: "Master Service Agreement - Tech Solutions.pdf",
      type: "PDF",
      category: "Contracts",
      uploadedBy: "Sarah Johnson",
      uploadDate: "2023-09-15",
      size: "2.4 MB",
      version: "1.0",
    },
    {
      id: "DOC-002",
      name: "Employee Handbook 2023.docx",
      type: "DOCX",
      category: "HR Policies",
      uploadedBy: "Jessica Williams",
      uploadDate: "2023-08-20",
      size: "1.8 MB",
      version: "2.1",
    },
    {
      id: "DOC-003",
      name: "Patent Application - Product X.pdf",
      type: "PDF",
      category: "Intellectual Property",
      uploadedBy: "Michael Chen",
      uploadDate: "2023-09-05",
      size: "3.2 MB",
      version: "1.0",
    },
    {
      id: "DOC-004",
      name: "Board Meeting Minutes - Q3 2023.docx",
      type: "DOCX",
      category: "Corporate Governance",
      uploadedBy: "David Miller",
      uploadDate: "2023-09-10",
      size: "0.8 MB",
      version: "1.0",
    },
    {
      id: "DOC-005",
      name: "GDPR Compliance Documentation.pdf",
      type: "PDF",
      category: "Compliance",
      uploadedBy: "Sarah Johnson",
      uploadDate: "2023-07-15",
      size: "4.5 MB",
      version: "1.2",
    },
    {
      id: "DOC-006",
      name: "Trademark Registration Certificate.pdf",
      type: "PDF",
      category: "Intellectual Property",
      uploadedBy: "Michael Chen",
      uploadDate: "2023-05-20",
      size: "1.2 MB",
      version: "1.0",
    },
    {
      id: "DOC-007",
      name: "Vendor Onboarding Template.docx",
      type: "DOCX",
      category: "Templates",
      uploadedBy: "Jessica Williams",
      uploadDate: "2023-08-05",
      size: "0.5 MB",
      version: "2.0",
    },
  ];

  const filteredDocuments = documents.filter(
    (document) =>
      (categoryFilter === "all" || document.category === categoryFilter) &&
      (typeFilter === "all" || document.type === typeFilter) &&
      (document.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        document.id.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Get unique document categories and types for filters
  const categories = [
    ...new Set(documents.map((document) => document.category)),
  ];
  const types = [...new Set(documents.map((document) => document.type))];

  return (
    <div className="space-y-4">
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

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="File Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Upload Document
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Document ID</TableHead>
              <TableHead className="text-slate-300">Name</TableHead>
              <TableHead className="text-slate-300">Category</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Uploaded By</TableHead>
              <TableHead className="text-slate-300">Upload Date</TableHead>
              <TableHead className="text-slate-300">Size</TableHead>
              <TableHead className="text-slate-300">Version</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDocuments.map((document) => (
              <TableRow key={document.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {document.id}
                </TableCell>
                <TableCell>{document.name}</TableCell>
                <TableCell>{document.category}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      document.type === "PDF"
                        ? "bg-red-500/10 text-red-500"
                        : document.type === "DOCX"
                          ? "bg-blue-500/10 text-blue-500"
                          : "bg-slate-500/10 text-slate-500"
                    }`}
                  >
                    {document.type}
                  </span>
                </TableCell>
                <TableCell>{document.uploadedBy}</TableCell>
                <TableCell>
                  {new Date(document.uploadDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{document.size}</TableCell>
                <TableCell>v{document.version}</TableCell>
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      <span className="sr-only">Download</span>
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
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <span className="sr-only">View</span>
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

export default LegalDocumentStorage;
