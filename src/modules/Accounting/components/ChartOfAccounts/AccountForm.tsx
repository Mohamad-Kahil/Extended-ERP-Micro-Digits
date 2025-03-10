import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const accountFormSchema = z.object({
  accountNumber: z.string().min(1, "Account number is required"),
  accountName: z.string().min(1, "Account name is required"),
  accountType: z.enum(["asset", "liability", "equity", "revenue", "expense"]),
  parentAccount: z.string().optional(),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
  reportingCategory: z.string().optional(),
  taxCode: z.string().optional(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

interface AccountFormProps {
  initialData?: AccountFormValues;
  onSubmit: (data: AccountFormValues) => void;
  onCancel: () => void;
  parentAccounts?: { id: string; name: string; accountNumber: string }[];
}

export function AccountForm({
  initialData,
  onSubmit,
  onCancel,
  parentAccounts = [],
}: AccountFormProps) {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: initialData || {
      accountNumber: "",
      accountName: "",
      accountType: "asset",
      parentAccount: "",
      description: "",
      isActive: true,
      reportingCategory: "",
      taxCode: "",
    },
  });

  function handleSubmit(data: AccountFormValues) {
    onSubmit(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Number</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. 1000" {...field} />
                </FormControl>
                <FormDescription>
                  Unique identifier for this account
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="accountName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Cash" {...field} />
                </FormControl>
                <FormDescription>
                  Descriptive name for this account
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="accountType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="asset">Asset</SelectItem>
                    <SelectItem value="liability">Liability</SelectItem>
                    <SelectItem value="equity">Equity</SelectItem>
                    <SelectItem value="revenue">Revenue</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Determines how this account affects financial statements
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="parentAccount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parent Account</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select parent account (optional)" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="">None (Top Level)</SelectItem>
                    {parentAccounts.map((account) => (
                      <SelectItem key={account.id} value={account.id}>
                        {account.accountNumber} - {account.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Optional parent account for hierarchical organization
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter account description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Additional details about this account
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="reportingCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reporting Category</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Operating Expenses"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormDescription>
                  Category for financial reporting
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="taxCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tax Code</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. T1"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormDescription>
                  Tax code for reporting purposes
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700">
            {initialData ? "Update Account" : "Create Account"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
