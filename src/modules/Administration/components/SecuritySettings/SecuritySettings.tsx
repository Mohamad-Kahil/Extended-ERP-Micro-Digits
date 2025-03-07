import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SecuritySettings = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <Card className="border-slate-800 bg-slate-900 text-slate-200">
      <CardHeader className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">
            Security Settings
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
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="access">Access Control</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                General Security Settings
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Session Timeout</Label>
                    <p className="text-sm text-slate-400">
                      Automatically log out inactive users after the specified
                      time
                    </p>
                  </div>
                  <div className="w-32">
                    <select
                      className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                      defaultValue="30"
                    >
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                      <option value="240">4 hours</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Force HTTPS</Label>
                    <p className="text-sm text-slate-400">
                      Redirect all HTTP requests to HTTPS
                    </p>
                  </div>
                  <Switch id="force-https" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Content Security Policy</Label>
                    <p className="text-sm text-slate-400">
                      Enable strict Content Security Policy headers
                    </p>
                  </div>
                  <Switch id="csp" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>XSS Protection</Label>
                    <p className="text-sm text-slate-400">
                      Enable Cross-Site Scripting (XSS) protection
                    </p>
                  </div>
                  <Switch id="xss-protection" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>CSRF Protection</Label>
                    <p className="text-sm text-slate-400">
                      Enable Cross-Site Request Forgery (CSRF) protection
                    </p>
                  </div>
                  <Switch id="csrf-protection" defaultChecked />
                </div>
              </div>

              <Separator className="my-6 bg-slate-800" />

              <h3 className="text-lg font-medium text-white">
                IP Restrictions
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>IP Whitelisting</Label>
                    <p className="text-sm text-slate-400">
                      Restrict access to specific IP addresses
                    </p>
                  </div>
                  <Switch id="ip-whitelist" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allowed-ips">Allowed IP Addresses</Label>
                  <Input
                    id="allowed-ips"
                    placeholder="Enter comma-separated IP addresses"
                    defaultValue="192.168.1.0/24, 10.0.0.0/16"
                    className="bg-slate-800 border-slate-700"
                  />
                  <p className="text-xs text-slate-400">
                    Enter IP addresses or CIDR notation, separated by commas
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="authentication" className="mt-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                Password Policy
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Minimum Password Length</Label>
                  </div>
                  <div className="w-32">
                    <select
                      className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                      defaultValue="12"
                    >
                      <option value="8">8 characters</option>
                      <option value="10">10 characters</option>
                      <option value="12">12 characters</option>
                      <option value="14">14 characters</option>
                      <option value="16">16 characters</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Require Uppercase Letters</Label>
                  </div>
                  <Switch id="require-uppercase" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Require Numbers</Label>
                  </div>
                  <Switch id="require-numbers" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Require Special Characters</Label>
                  </div>
                  <Switch id="require-special" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Password Expiration</Label>
                  </div>
                  <div className="w-32">
                    <select
                      className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                      defaultValue="90"
                    >
                      <option value="0">Never</option>
                      <option value="30">30 days</option>
                      <option value="60">60 days</option>
                      <option value="90">90 days</option>
                      <option value="180">180 days</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Password History</Label>
                    <p className="text-sm text-slate-400">
                      Prevent reuse of previous passwords
                    </p>
                  </div>
                  <div className="w-32">
                    <select
                      className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                      defaultValue="5"
                    >
                      <option value="0">Disabled</option>
                      <option value="3">3 passwords</option>
                      <option value="5">5 passwords</option>
                      <option value="10">10 passwords</option>
                    </select>
                  </div>
                </div>
              </div>

              <Separator className="my-6 bg-slate-800" />

              <h3 className="text-lg font-medium text-white">
                Multi-Factor Authentication
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Require MFA</Label>
                    <p className="text-sm text-slate-400">
                      Require multi-factor authentication for all users
                    </p>
                  </div>
                  <Switch id="require-mfa" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>MFA Methods</Label>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="mfa-app"
                        className="rounded border-slate-700 bg-slate-800"
                        defaultChecked
                      />
                      <label htmlFor="mfa-app" className="text-sm">
                        Authenticator App
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="mfa-sms"
                        className="rounded border-slate-700 bg-slate-800"
                        defaultChecked
                      />
                      <label htmlFor="mfa-sms" className="text-sm">
                        SMS
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="mfa-email"
                        className="rounded border-slate-700 bg-slate-800"
                        defaultChecked
                      />
                      <label htmlFor="mfa-email" className="text-sm">
                        Email
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="mfa-security-key"
                        className="rounded border-slate-700 bg-slate-800"
                      />
                      <label htmlFor="mfa-security-key" className="text-sm">
                        Security Key
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="access" className="mt-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                Role-Based Access Control
              </h3>

              <div className="rounded-md border border-slate-800">
                <Table>
                  <TableHeader className="bg-slate-800">
                    <TableRow>
                      <TableHead className="text-slate-300">Role</TableHead>
                      <TableHead className="text-slate-300">Users</TableHead>
                      <TableHead className="text-slate-300">
                        Permissions
                      </TableHead>
                      <TableHead className="text-right text-slate-300">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        role: "Administrator",
                        users: 5,
                        permissions: "Full system access",
                      },
                      {
                        role: "Manager",
                        users: 18,
                        permissions:
                          "Department management, limited admin access",
                      },
                      {
                        role: "User",
                        users: 225,
                        permissions: "Standard user access",
                      },
                      {
                        role: "Auditor",
                        users: 3,
                        permissions: "Read-only access for auditing",
                      },
                      {
                        role: "IT Support",
                        users: 8,
                        permissions: "Technical support access",
                      },
                    ].map((role, index) => (
                      <TableRow key={index} className="border-slate-800">
                        <TableCell className="font-medium text-slate-300">
                          {role.role}
                        </TableCell>
                        <TableCell>{role.users}</TableCell>
                        <TableCell>{role.permissions}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Edit Permissions
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <Separator className="my-6 bg-slate-800" />

              <h3 className="text-lg font-medium text-white">
                API Access Control
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>API Rate Limiting</Label>
                    <p className="text-sm text-slate-400">
                      Limit the number of API requests per minute
                    </p>
                  </div>
                  <div className="w-32">
                    <select
                      className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                      defaultValue="100"
                    >
                      <option value="50">50 requests</option>
                      <option value="100">100 requests</option>
                      <option value="200">200 requests</option>
                      <option value="500">500 requests</option>
                      <option value="1000">1000 requests</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>API Key Expiration</Label>
                  </div>
                  <div className="w-32">
                    <select
                      className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                      defaultValue="90"
                    >
                      <option value="0">Never</option>
                      <option value="30">30 days</option>
                      <option value="90">90 days</option>
                      <option value="180">180 days</option>
                      <option value="365">365 days</option>
                    </select>
                  </div>
                </div>

                <div className="rounded-md border border-slate-800 p-4 mt-4">
                  <h4 className="font-medium text-white mb-2">
                    Active API Keys
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Production API",
                        created: "2023-07-15",
                        expires: "2023-10-15",
                        lastUsed: "2023-09-15T05:12:00",
                      },
                      {
                        name: "Development API",
                        created: "2023-08-01",
                        expires: "2023-11-01",
                        lastUsed: "2023-09-14T16:45:00",
                      },
                      {
                        name: "Integration API",
                        created: "2023-08-15",
                        expires: "2023-11-15",
                        lastUsed: "2023-09-12T10:30:00",
                      },
                    ].map((key, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-slate-800/50 rounded-md border border-slate-700"
                      >
                        <div>
                          <h4 className="font-medium text-white">{key.name}</h4>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-slate-400 mr-3">
                              Created: {key.created}
                            </span>
                            <span className="text-xs text-slate-400 mr-3">
                              Expires: {key.expires}
                            </span>
                            <span className="text-xs text-slate-400">
                              Last Used:{" "}
                              {new Date(key.lastUsed).toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Regenerate
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-500 hover:text-red-400"
                          >
                            Revoke
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
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
                      Create New API Key
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="monitoring" className="mt-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                Security Monitoring
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Failed Login Attempts</Label>
                    <p className="text-sm text-slate-400">
                      Maximum number of failed login attempts before account
                      lockout
                    </p>
                  </div>
                  <div className="w-32">
                    <select
                      className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                      defaultValue="5"
                    >
                      <option value="3">3 attempts</option>
                      <option value="5">5 attempts</option>
                      <option value="10">10 attempts</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Account Lockout Duration</Label>
                  </div>
                  <div className="w-32">
                    <select
                      className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                      defaultValue="15"
                    >
                      <option value="5">5 minutes</option>
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="manual">Manual unlock</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Brute Force Protection</Label>
                    <p className="text-sm text-slate-400">
                      Enable protection against brute force attacks
                    </p>
                  </div>
                  <Switch id="brute-force" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Suspicious Activity Alerts</Label>
                    <p className="text-sm text-slate-400">
                      Send alerts for suspicious login attempts
                    </p>
                  </div>
                  <Switch id="suspicious-alerts" defaultChecked />
                </div>
              </div>

              <Separator className="my-6 bg-slate-800" />

              <h3 className="text-lg font-medium text-white">
                Security Alerts
              </h3>
              <div className="rounded-md border border-slate-800 p-4">
                <h4 className="font-medium text-white mb-2">
                  Alert Recipients
                </h4>
                <div className="space-y-2">
                  <Label htmlFor="alert-emails">Email Addresses</Label>
                  <Input
                    id="alert-emails"
                    placeholder="Enter comma-separated email addresses"
                    defaultValue="admin@example.com, security@example.com"
                    className="bg-slate-800 border-slate-700"
                  />
                  <p className="text-xs text-slate-400">
                    Security alerts will be sent to these email addresses
                  </p>
                </div>

                <h4 className="font-medium text-white mt-4 mb-2">
                  Alert Types
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="alert-login"
                      className="rounded border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="alert-login" className="text-sm">
                      Failed login attempts
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="alert-admin"
                      className="rounded border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="alert-admin" className="text-sm">
                      Admin account activity
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="alert-password"
                      className="rounded border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="alert-password" className="text-sm">
                      Password changes
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="alert-permission"
                      className="rounded border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="alert-permission" className="text-sm">
                      Permission changes
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="alert-api"
                      className="rounded border-slate-700 bg-slate-800"
                      defaultChecked
                    />
                    <label htmlFor="alert-api" className="text-sm">
                      API key creation or revocation
                    </label>
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

export default SecuritySettings;
