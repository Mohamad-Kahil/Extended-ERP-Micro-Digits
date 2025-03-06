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

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  postedDate: string;
  closingDate: string;
  status: "open" | "closed" | "draft";
  applicants: number;
}

const jobPostings: JobPosting[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    postedDate: "2023-06-01",
    closingDate: "2023-07-15",
    status: "open",
    applicants: 24,
  },
  {
    id: "2",
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    postedDate: "2023-06-05",
    closingDate: "2023-07-20",
    status: "open",
    applicants: 18,
  },
  {
    id: "3",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Remote",
    postedDate: "2023-06-10",
    closingDate: "2023-07-25",
    status: "open",
    applicants: 12,
  },
  {
    id: "4",
    title: "UX/UI Designer",
    department: "Design",
    location: "Austin, TX",
    type: "Full-time",
    postedDate: "2023-06-15",
    closingDate: "2023-07-30",
    status: "open",
    applicants: 15,
  },
  {
    id: "5",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Chicago, IL",
    type: "Full-time",
    postedDate: "2023-06-20",
    closingDate: "2023-08-05",
    status: "open",
    applicants: 9,
  },
  {
    id: "6",
    title: "Sales Representative",
    department: "Sales",
    location: "Miami, FL",
    type: "Full-time",
    postedDate: "2023-05-15",
    closingDate: "2023-06-15",
    status: "closed",
    applicants: 32,
  },
  {
    id: "7",
    title: "Customer Support Specialist",
    department: "Customer Support",
    location: "Remote",
    type: "Remote",
    postedDate: "2023-05-20",
    closingDate: "2023-06-20",
    status: "closed",
    applicants: 28,
  },
  {
    id: "8",
    title: "Data Analyst",
    department: "Data Science",
    location: "Seattle, WA",
    type: "Full-time",
    postedDate: "",
    closingDate: "",
    status: "draft",
    applicants: 0,
  },
];

const JobPostings = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [departmentFilter, setDepartmentFilter] = React.useState("all");

  const filteredJobs = jobPostings.filter(
    (job) =>
      (statusFilter === "all" || job.status === statusFilter) &&
      (departmentFilter === "all" || job.department === departmentFilter) &&
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const departments = [...new Set(jobPostings.map((job) => job.department))];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Open Positions
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-500">
            {jobPostings.filter((job) => job.status === "open").length}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Total Applicants
          </div>
          <div className="mt-1 text-2xl font-bold text-blue-500">
            {jobPostings.reduce((sum, job) => sum + job.applicants, 0)}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
          <div className="text-sm font-medium text-slate-400">
            Avg. Applicants per Job
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {Math.round(
              jobPostings.reduce((sum, job) => sum + job.applicants, 0) /
                jobPostings.filter((job) => job.status !== "draft").length,
            )}
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
              placeholder="Search job postings..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
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
          Create Job Posting
        </Button>
      </div>

      <div className="rounded-md border border-slate-800">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="text-slate-300">Job Title</TableHead>
              <TableHead className="text-slate-300">Department</TableHead>
              <TableHead className="text-slate-300">Location</TableHead>
              <TableHead className="text-slate-300">Type</TableHead>
              <TableHead className="text-slate-300">Posted Date</TableHead>
              <TableHead className="text-slate-300">Closing Date</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Applicants</TableHead>
              <TableHead className="text-right text-slate-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredJobs.map((job) => (
              <TableRow key={job.id} className="border-slate-800">
                <TableCell className="font-medium text-slate-300">
                  {job.title}
                </TableCell>
                <TableCell>{job.department}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.type}</TableCell>
                <TableCell>
                  {job.postedDate
                    ? new Date(job.postedDate).toLocaleDateString()
                    : "-"}
                </TableCell>
                <TableCell>
                  {job.closingDate
                    ? new Date(job.closingDate).toLocaleDateString()
                    : "-"}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      job.status === "open"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : job.status === "closed"
                          ? "bg-slate-500/10 text-slate-500"
                          : "bg-amber-500/10 text-amber-500"
                    }`}
                  >
                    {job.status}
                  </span>
                </TableCell>
                <TableCell>{job.applicants}</TableCell>
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span className="sr-only">View Applicants</span>
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

export default JobPostings;
