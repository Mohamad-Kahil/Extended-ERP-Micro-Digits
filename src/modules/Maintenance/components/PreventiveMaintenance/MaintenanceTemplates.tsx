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

interface MaintenanceTemplate {
  id: string;
  name: string;
  description: string;
  assetType: string;
  estimatedDuration: string;
  taskCount: number;
  lastUpdated: string;
}

interface MaintenanceTemplatesProps {
  searchTerm: string;
}

const templates: MaintenanceTemplate[] = [
  {
    id: "TEMP-001",
    name: "HVAC Monthly Maintenance",
    description: "Standard monthly maintenance for HVAC systems",
    assetType: "HVAC",
    estimatedDuration: "2 hours",
    taskCount: 12,
    lastUpdated: "2023-08-15",
  },
  {
    id: "TEMP-002",
    name: "Conveyor Belt Weekly Inspection",
    description: "Weekly inspection and lubrication of conveyor systems",
    assetType: "Conveyor",
    estimatedDuration: "1 hour",
    taskCount: 8,
    lastUpdated: "2023-09-01",
  },
  {
    id: "TEMP-003",
    name: "Forklift Quarterly Service",
    description: "Comprehensive quarterly service for forklifts",
    assetType: "Forklift",
    estimatedDuration: "3 hours",
    taskCount: 15,
    lastUpdated: "2023-07-20",
  },
  {
    id: "TEMP-004",
    name: "Electrical Panel Annual Inspection",
    description: "Annual safety inspection for electrical distribution panels",
    assetType: "Electrical",
    estimatedDuration: "4 hours",
    taskCount: 18,
    lastUpdated: "2023-06-10",
  },
  {
    id: "TEMP-005",
    name: "Air Compressor Maintenance",
    description: "Bi-monthly maintenance for air compressor systems",
    assetType: "Pneumatic",
    estimatedDuration: "2.5 hours",
    taskCount: 10,
    lastUpdated: "2023-08-05",
  },
  {
    id: "TEMP-006",
    name: "Boiler System Inspection",
    description: "Monthly safety and efficiency inspection for boiler systems",
    assetType: "HVAC",
    estimatedDuration: "3 hours",
    taskCount: 14,
    lastUpdated: "2023-08-22",
  },
  {
    id: "TEMP-007",
    name: "Packaging Machine Maintenance",
    description: "Bi-weekly maintenance for packaging equipment",
    assetType: "Production",
    estimatedDuration: "1.5 hours",
    taskCount: 9,
    lastUpdated: "2023-09-05",
  },
];

const MaintenanceTemplates = ({ searchTerm }: MaintenanceTemplatesProps) => {
  const [assetTypeFilter, setAssetTypeFilter] = React.useState("all");

  const filteredTemplates = templates.filter(
    (template) =>
      (assetTypeFilter === "all" || template.assetType === assetTypeFilter) &&
      (template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.id.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Get unique asset types for filter
  const assetTypes = [
    ...new Set(templates.map((template) => template.assetType)),
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex w-full flex-col space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <Select value={assetTypeFilter} onValueChange={setAssetTypeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Asset Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Asset Types</SelectItem>
              {assetTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Template ID</TableHead>
              <TableHead className="text-slate-300">Name</TableHead>
              <TableHead className="text-slate-300">Asset Type</TableHead>
              <TableHead className="text-slate-300">Duration</TableHead>
              <TableHead className="text-slate-300">Tasks</TableHead>
              <TableHead className="text-slate-300">Last Updated</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTemplates.map((template) => (
              <TableRow key={template.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {template.id}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-slate-300">{template.name}</div>
                    <div className="text-xs text-slate-500">
                      {template.description}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{template.assetType}</TableCell>
                <TableCell>{template.estimatedDuration}</TableCell>
                <TableCell>{template.taskCount} tasks</TableCell>
                <TableCell>
                  {new Date(template.lastUpdated).toLocaleDateString()}
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
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <path d="M16 13H8" />
                        <path d="M16 17H8" />
                        <path d="M10 9H8" />
                      </svg>
                      <span className="sr-only">Create Schedule</span>
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

export default MaintenanceTemplates;
