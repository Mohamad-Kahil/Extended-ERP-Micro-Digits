import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const ContactImport = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Import Section */}
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-white mb-4">
              Import Contacts
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file-upload">Upload File</Label>
                <div className="flex items-center">
                  <Input
                    id="file-upload"
                    type="file"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
                <p className="text-xs text-slate-400">
                  Supported formats: CSV, XLS, XLSX (max 5MB)
                </p>
              </div>

              <Separator className="my-4 bg-slate-700" />

              <div className="space-y-2">
                <Label>Import Options</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="skip-header"
                      className="rounded border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="skip-header" className="text-sm">
                      First row contains column headers
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="update-existing"
                      className="rounded border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="update-existing" className="text-sm">
                      Update existing contacts
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="skip-duplicates"
                      className="rounded border-slate-700 bg-slate-800"
                    />
                    <label htmlFor="skip-duplicates" className="text-sm">
                      Skip duplicate entries
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-type">Default Contact Type</Label>
                <select
                  id="contact-type"
                  className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                  defaultValue="prospect"
                >
                  <option value="customer">Customer</option>
                  <option value="prospect">Prospect</option>
                  <option value="partner">Partner</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-group">Add to Group (Optional)</Label>
                <select
                  id="contact-group"
                  className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                  defaultValue=""
                >
                  <option value="">None</option>
                  <option value="vip">VIP Customers</option>
                  <option value="enterprise">Enterprise Clients</option>
                  <option value="smb">SMB Customers</option>
                  <option value="hot-leads">Hot Leads</option>
                  <option value="newsletter">Newsletter Subscribers</option>
                </select>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
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
                  Import Contacts
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export Section */}
        <Card className="border-slate-800 bg-slate-800/50">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-white mb-4">
              Export Contacts
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Export Options</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="export-all"
                      name="export-option"
                      className="rounded-full border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="export-all" className="text-sm">
                      Export all contacts
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="export-filtered"
                      name="export-option"
                      className="rounded-full border-slate-700 bg-slate-800"
                    />
                    <label htmlFor="export-filtered" className="text-sm">
                      Export filtered contacts
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="export-selected"
                      name="export-option"
                      className="rounded-full border-slate-700 bg-slate-800"
                    />
                    <label htmlFor="export-selected" className="text-sm">
                      Export selected contacts
                    </label>
                  </div>
                </div>
              </div>

              <Separator className="my-4 bg-slate-700" />

              <div className="space-y-2">
                <Label htmlFor="export-format">Export Format</Label>
                <select
                  id="export-format"
                  className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                  defaultValue="csv"
                >
                  <option value="csv">CSV</option>
                  <option value="xlsx">Excel (XLSX)</option>
                  <option value="vcf">vCard (VCF)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Fields to Export</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="field-name"
                      className="rounded border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="field-name" className="text-sm">
                      Name
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="field-email"
                      className="rounded border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="field-email" className="text-sm">
                      Email
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="field-phone"
                      className="rounded border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="field-phone" className="text-sm">
                      Phone
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="field-company"
                      className="rounded border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="field-company" className="text-sm">
                      Company
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="field-type"
                      className="rounded border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="field-type" className="text-sm">
                      Contact Type
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="field-last-contact"
                      className="rounded border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="field-last-contact" className="text-sm">
                      Last Contact Date
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
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
                  Export Contacts
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Import History */}
      <Card className="border-slate-800 bg-slate-800/50">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Import History
          </h3>
          <div className="space-y-3">
            {[
              {
                id: "IMP-001",
                filename: "leads-q3-2023.csv",
                date: "2023-09-10T14:25:00",
                records: 156,
                status: "completed",
                user: "Admin User",
              },
              {
                id: "IMP-002",
                filename: "conference-contacts.xlsx",
                date: "2023-08-25T09:12:00",
                records: 42,
                status: "completed",
                user: "Marketing Manager",
              },
              {
                id: "IMP-003",
                filename: "partner-directory.csv",
                date: "2023-07-15T18:30:00",
                records: 18,
                status: "completed",
                user: "Partner Manager",
              },
            ].map((import_record) => (
              <div
                key={import_record.id}
                className="flex items-center justify-between p-3 bg-slate-800/50 rounded-md border border-slate-700"
              >
                <div>
                  <h4 className="font-medium text-white">
                    {import_record.filename}
                  </h4>
                  <div className="text-sm text-slate-400 mt-1">
                    {import_record.records} records imported
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-slate-400 mr-3">
                      ID: {import_record.id}
                    </span>
                    <span className="text-xs text-slate-400 mr-3">
                      Date: {new Date(import_record.date).toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400">
                      By: {import_record.user}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-500">
                    {import_record.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactImport;
