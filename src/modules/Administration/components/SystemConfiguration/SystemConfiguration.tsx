import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const SystemConfiguration = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            System Configuration
          </CardTitle>
          <div className="flex space-x-2">
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
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
              </svg>
              Save Changes
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="localization">Localization</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                General Settings
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input
                    id="company-name"
                    placeholder="Enter company name"
                    defaultValue="Acme Corporation"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-url">Site URL</Label>
                  <Input
                    id="site-url"
                    placeholder="Enter site URL"
                    defaultValue="https://acme.example.com"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <Input
                    id="admin-email"
                    type="email"
                    placeholder="Enter admin email"
                    defaultValue="admin@acme.example.com"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="support-email">Support Email</Label>
                  <Input
                    id="support-email"
                    type="email"
                    placeholder="Enter support email"
                    defaultValue="support@acme.example.com"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
              </div>

              <Separator className="my-6 bg-slate-800" />

              <h3 className="text-lg font-medium text-white">
                System Preferences
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Maintenance Mode</Label>
                    <p className="text-sm text-slate-400">
                      Enable maintenance mode to prevent user access during
                      updates
                    </p>
                  </div>
                  <Switch id="maintenance-mode" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Debug Mode</Label>
                    <p className="text-sm text-slate-400">
                      Enable detailed error messages and logging
                    </p>
                  </div>
                  <Switch id="debug-mode" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>User Registration</Label>
                    <p className="text-sm text-slate-400">
                      Allow new users to register accounts
                    </p>
                  </div>
                  <Switch id="user-registration" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-slate-400">
                      Send system notifications via email
                    </p>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="email" className="mt-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                Email Configuration
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="smtp-server">SMTP Server</Label>
                  <Input
                    id="smtp-server"
                    placeholder="smtp.example.com"
                    defaultValue="smtp.gmail.com"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-port">SMTP Port</Label>
                  <Input
                    id="smtp-port"
                    placeholder="587"
                    defaultValue="587"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-username">SMTP Username</Label>
                  <Input
                    id="smtp-username"
                    placeholder="username"
                    defaultValue="notifications@acme.example.com"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-password">SMTP Password</Label>
                  <Input
                    id="smtp-password"
                    type="password"
                    placeholder="••••••••"
                    defaultValue="password"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="from-email">From Email</Label>
                  <Input
                    id="from-email"
                    type="email"
                    placeholder="noreply@example.com"
                    defaultValue="noreply@acme.example.com"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="from-name">From Name</Label>
                  <Input
                    id="from-name"
                    placeholder="Company Name"
                    defaultValue="Acme Corporation"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
              </div>

              <Separator className="my-6 bg-slate-800" />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Use TLS</Label>
                  <p className="text-sm text-slate-400">
                    Enable TLS encryption for email communication
                  </p>
                </div>
                <Switch id="use-tls" defaultChecked />
              </div>

              <div className="flex justify-end mt-6">
                <Button variant="outline" className="mr-2">
                  Test Connection
                </Button>
                <Button variant="outline">Send Test Email</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="localization" className="mt-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                Localization Settings
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="default-language">Default Language</Label>
                  <select
                    id="default-language"
                    className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                    defaultValue="en-US"
                  >
                    <option value="en-US">English (US)</option>
                    <option value="en-GB">English (UK)</option>
                    <option value="es-ES">Spanish</option>
                    <option value="fr-FR">French</option>
                    <option value="de-DE">German</option>
                    <option value="ja-JP">Japanese</option>
                    <option value="zh-CN">Chinese (Simplified)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Default Timezone</Label>
                  <select
                    id="timezone"
                    className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                    defaultValue="America/New_York"
                  >
                    <option value="America/New_York">
                      Eastern Time (US & Canada)
                    </option>
                    <option value="America/Chicago">
                      Central Time (US & Canada)
                    </option>
                    <option value="America/Denver">
                      Mountain Time (US & Canada)
                    </option>
                    <option value="America/Los_Angeles">
                      Pacific Time (US & Canada)
                    </option>
                    <option value="Europe/London">London</option>
                    <option value="Europe/Paris">Paris</option>
                    <option value="Asia/Tokyo">Tokyo</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date-format">Date Format</Label>
                  <select
                    id="date-format"
                    className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                    defaultValue="MM/DD/YYYY"
                  >
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    <option value="MMM D, YYYY">MMM D, YYYY</option>
                    <option value="D MMM YYYY">D MMM YYYY</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time-format">Time Format</Label>
                  <select
                    id="time-format"
                    className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                    defaultValue="12"
                  >
                    <option value="12">12-hour (1:30 PM)</option>
                    <option value="24">24-hour (13:30)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <select
                    id="currency"
                    className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                    defaultValue="USD"
                  >
                    <option value="USD">US Dollar ($)</option>
                    <option value="EUR">Euro (€)</option>
                    <option value="GBP">British Pound (£)</option>
                    <option value="JPY">Japanese Yen (¥)</option>
                    <option value="CAD">Canadian Dollar (C$)</option>
                    <option value="AUD">Australian Dollar (A$)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="first-day">First Day of Week</Label>
                  <select
                    id="first-day"
                    className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                    defaultValue="sunday"
                  >
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                  </select>
                </div>
              </div>

              <Separator className="my-6 bg-slate-800" />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Multiple Languages</Label>
                  <p className="text-sm text-slate-400">
                    Allow users to select their preferred language
                  </p>
                </div>
                <Switch id="multiple-languages" defaultChecked />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="integrations" className="mt-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                API Integrations
              </h3>

              <div className="rounded-md border border-slate-800 p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-md font-medium text-white">
                      Google Analytics
                    </h4>
                    <p className="text-sm text-slate-400">
                      Track website traffic and user behavior
                    </p>
                  </div>
                  <Switch id="google-analytics" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ga-tracking-id">Tracking ID</Label>
                  <Input
                    id="ga-tracking-id"
                    placeholder="UA-XXXXXXXXX-X"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
              </div>

              <div className="rounded-md border border-slate-800 p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-md font-medium text-white">
                      Slack Integration
                    </h4>
                    <p className="text-sm text-slate-400">
                      Receive notifications in your Slack workspace
                    </p>
                  </div>
                  <Switch id="slack-integration" defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slack-webhook">Webhook URL</Label>
                  <Input
                    id="slack-webhook"
                    placeholder="https://hooks.slack.com/services/..."
                    defaultValue="https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slack-channel">Default Channel</Label>
                  <Input
                    id="slack-channel"
                    placeholder="#general"
                    defaultValue="#system-alerts"
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
              </div>

              <div className="rounded-md border border-slate-800 p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-md font-medium text-white">
                      AWS S3 Storage
                    </h4>
                    <p className="text-sm text-slate-400">
                      Store files and backups in Amazon S3
                    </p>
                  </div>
                  <Switch id="aws-s3" defaultChecked />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="aws-key">Access Key ID</Label>
                    <Input
                      id="aws-key"
                      placeholder="AKIAXXXXXXXXXXXXXXXX"
                      defaultValue="AKIAIOSFODNN7EXAMPLE"
                      className="bg-slate-800 border-slate-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="aws-secret">Secret Access Key</Label>
                    <Input
                      id="aws-secret"
                      type="password"
                      placeholder="••••••••••••••••••••"
                      defaultValue="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
                      className="bg-slate-800 border-slate-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="aws-region">Region</Label>
                    <Input
                      id="aws-region"
                      placeholder="us-east-1"
                      defaultValue="us-east-1"
                      className="bg-slate-800 border-slate-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="aws-bucket">Bucket Name</Label>
                    <Input
                      id="aws-bucket"
                      placeholder="my-bucket"
                      defaultValue="acme-system-backups"
                      className="bg-slate-800 border-slate-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SystemConfiguration;
