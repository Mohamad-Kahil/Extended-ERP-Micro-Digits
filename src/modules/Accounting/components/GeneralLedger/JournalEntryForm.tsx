import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
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
import { Trash2, Plus } from "lucide-react";
import { Account } from "../ChartOfAccounts/AccountList";

const lineItemSchema = z
  .object({
    accountId: z.string().min(1, "Account is required"),
    description: z.string().optional(),
    debit: z.string().optional(),
    credit: z.string().optional(),
  })
  .refine(
    (data) => {
      // Either debit or credit must be provided, but not both
      const hasDebit = !!data.debit && parseFloat(data.debit) > 0;
      const hasCredit = !!data.credit && parseFloat(data.credit) > 0;
      return (hasDebit && !hasCredit) || (!hasDebit && hasCredit);
    },
    {
      message: "Either debit or credit must be provided, but not both",
      path: ["debit"],
    },
  );

const journalEntrySchema = z
  .object({
    entryDate: z.string().min(1, "Date is required"),
    reference: z.string().optional(),
    description: z.string().min(1, "Description is required"),
    lineItems: z
      .array(lineItemSchema)
      .min(2, "At least two line items are required"),
  })
  .refine(
    (data) => {
      // Total debits must equal total credits
      let totalDebits = 0;
      let totalCredits = 0;

      data.lineItems.forEach((item) => {
        if (item.debit) totalDebits += parseFloat(item.debit) || 0;
        if (item.credit) totalCredits += parseFloat(item.credit) || 0;
      });

      return Math.abs(totalDebits - totalCredits) < 0.01; // Allow for small rounding errors
    },
    {
      message: "Total debits must equal total credits",
      path: ["lineItems"],
    },
  );

type JournalEntryFormValues = z.infer<typeof journalEntrySchema>;

interface JournalEntryFormProps {
  initialData?: JournalEntryFormValues;
  onSubmit: (data: JournalEntryFormValues) => void;
  onCancel: () => void;
  accounts: Account[];
}

export function JournalEntryForm({
  initialData,
  onSubmit,
  onCancel,
  accounts,
}: JournalEntryFormProps) {
  const flattenedAccounts = flattenAccounts(accounts);

  const form = useForm<JournalEntryFormValues>({
    resolver: zodResolver(journalEntrySchema),
    defaultValues: initialData || {
      entryDate: new Date().toISOString().split("T")[0],
      reference: "",
      description: "",
      lineItems: [
        { accountId: "", description: "", debit: "", credit: "" },
        { accountId: "", description: "", debit: "", credit: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "lineItems",
  });

  function handleSubmit(data: JournalEntryFormValues) {
    onSubmit(data);
  }

  // Calculate totals for display
  const watchLineItems = form.watch("lineItems");
  const totalDebits = watchLineItems.reduce(
    (sum, item) => sum + (parseFloat(item.debit) || 0),
    0,
  );
  const totalCredits = watchLineItems.reduce(
    (sum, item) => sum + (parseFloat(item.credit) || 0),
    0,
  );
  const isBalanced = Math.abs(totalDebits - totalCredits) < 0.01;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="entryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reference"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reference</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. INV-001" {...field} />
                </FormControl>
                <FormDescription>
                  Optional reference number or code
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
                  placeholder="Enter journal entry description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Line Items</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() =>
                append({
                  accountId: "",
                  description: "",
                  debit: "",
                  credit: "",
                })
              }
            >
              <Plus className="mr-2 h-4 w-4" /> Add Line
            </Button>
          </div>

          <div className="rounded-md border border-slate-800">
            <div className="bg-slate-800/50 p-3 text-xs font-medium text-slate-300 grid grid-cols-12 gap-4">
              <div className="col-span-4">Account</div>
              <div className="col-span-3">Description</div>
              <div className="col-span-2">Debit</div>
              <div className="col-span-2">Credit</div>
              <div className="col-span-1"></div>
            </div>

            <div className="divide-y divide-slate-800">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="p-3 grid grid-cols-12 gap-4 items-start"
                >
                  <div className="col-span-4">
                    <FormField
                      control={form.control}
                      name={`lineItems.${index}.accountId`}
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select account" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {flattenedAccounts.map((account) => (
                                <SelectItem key={account.id} value={account.id}>
                                  {account.accountNumber} -{" "}
                                  {account.accountName}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-3">
                    <FormField
                      control={form.control}
                      name={`lineItems.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Line description"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name={`lineItems.${index}.debit`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              min="0"
                              placeholder="0.00"
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                // Clear credit if debit has a value
                                if (e.target.value) {
                                  form.setValue(
                                    `lineItems.${index}.credit`,
                                    "",
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name={`lineItems.${index}.credit`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              min="0"
                              placeholder="0.00"
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                // Clear debit if credit has a value
                                if (e.target.value) {
                                  form.setValue(`lineItems.${index}.debit`, "");
                                }
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1 flex justify-center">
                    {fields.length > 2 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
                        onClick={() => remove(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}

              {/* Totals row */}
              <div className="p-3 grid grid-cols-12 gap-4 bg-slate-800/20 font-medium">
                <div className="col-span-7 text-right">Totals:</div>
                <div className="col-span-2 text-emerald-500">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(totalDebits)}
                </div>
                <div className="col-span-2 text-emerald-500">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(totalCredits)}
                </div>
                <div className="col-span-1"></div>
              </div>

              {/* Balance indicator */}
              <div className="p-3 grid grid-cols-12 gap-4 bg-slate-800/30">
                <div className="col-span-7 text-right">Difference:</div>
                <div
                  className={`col-span-4 ${isBalanced ? "text-emerald-500" : "text-red-500"}`}
                >
                  {isBalanced
                    ? "Balanced"
                    : new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(Math.abs(totalDebits - totalCredits))}
                </div>
                <div className="col-span-1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700"
            disabled={!isBalanced}
          >
            {initialData ? "Update Journal Entry" : "Create Journal Entry"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

// Helper function to flatten the account hierarchy for the select dropdown
function flattenAccounts(accounts: Account[]): Account[] {
  let result: Account[] = [];
  accounts.forEach((account) => {
    result.push(account);
    if (account.children && account.children.length > 0) {
      result = [...result, ...flattenAccounts(account.children)];
    }
  });
  return result;
}
