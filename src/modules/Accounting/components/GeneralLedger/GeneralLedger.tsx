import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { JournalEntryList, JournalEntry } from "./JournalEntryList";
import { JournalEntryForm } from "./JournalEntryForm";
import { JournalEntryDetails } from "./JournalEntryDetails";
import { Account } from "../ChartOfAccounts/AccountList";
import { Download, Upload, FileText } from "lucide-react";

interface GeneralLedgerProps {
  currentEntity?: string;
  currentEntityId?: string;
  accounts?: Account[];
  entities?: { id: string; name: string }[];
}

const GeneralLedger: React.FC<GeneralLedgerProps> = ({
  currentEntity = "all",
  currentEntityId = "1",
  accounts = [],
  entities = [
    { id: "1", name: "Parent Company" },
    { id: "2", name: "Subsidiary 1" },
    { id: "3", name: "Subsidiary 2" },
  ],
}) => {
  // Sample data for demonstration
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([
    {
      id: "je-001",
      entryNumber: "JE-2023-001",
      date: "2023-07-01",
      description: "Initial investment",
      reference: "INV-001",
      amount: 100000,
      entityId: "1",
      status: "approved",
      createdBy: "John Doe",
      createdAt: "2023-07-01T09:00:00Z",
      lineItems: [
        {
          id: "li-001",
          accountId: "1.1.1",
          accountNumber: "1110",
          accountName: "Cash",
          debit: 100000,
        },
        {
          id: "li-002",
          accountId: "3.1",
          accountNumber: "3100",
          accountName: "Common Stock",
          credit: 100000,
        },
      ],
    },
    {
      id: "je-002",
      entryNumber: "JE-2023-002",
      date: "2023-07-15",
      description: "Purchase of office equipment",
      reference: "PO-001",
      amount: 25000,
      entityId: "1",
      status: "posted",
      createdBy: "Jane Smith",
      createdAt: "2023-07-15T10:30:00Z",
      lineItems: [
        {
          id: "li-003",
          accountId: "1.2.1",
          accountNumber: "1210",
          accountName: "Property & Equipment",
          debit: 25000,
        },
        {
          id: "li-004",
          accountId: "1.1.1",
          accountNumber: "1110",
          accountName: "Cash",
          credit: 25000,
        },
      ],
    },
    {
      id: "je-003",
      entryNumber: "JE-2023-003",
      date: "2023-07-31",
      description: "Monthly rent payment",
      reference: "RENT-JUL",
      amount: 5000,
      entityId: "2",
      status: "draft",
      createdBy: "John Doe",
      createdAt: "2023-07-31T14:15:00Z",
      lineItems: [
        {
          id: "li-005",
          accountId: "5.2.2",
          accountNumber: "5220",
          accountName: "Rent",
          debit: 5000,
        },
        {
          id: "li-006",
          accountId: "1.1.1",
          accountNumber: "1110",
          accountName: "Cash",
          credit: 5000,
        },
      ],
    },
  ]);

  // State for UI management
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "details">("list");
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState("journal");
  const [selectedPeriod, setSelectedPeriod] = useState("current");

  // Filter journal entries based on selected entity
  const filteredJournalEntries =
    currentEntity === "all"
      ? journalEntries
      : journalEntries.filter((entry) => entry.entityId === currentEntityId);

  // Filter accounts based on selected entity
  const filteredAccounts =
    currentEntity === "all"
      ? accounts
      : accounts.filter((account) => account.entityId === currentEntityId);

  // Update when currentEntity changes
  useEffect(() => {
    if (currentEntity) {
      // Reset view to list when entity changes
      setViewMode("list");
      setSelectedEntry(null);
      setIsFormOpen(false);
    }
  }, [currentEntity, currentEntityId]);

  // Handlers
  const handleAddEntry = () => {
    setSelectedEntry(null);
    setEditMode(false);
    setIsFormOpen(true);
  };

  const handleEditEntry = (entry: JournalEntry) => {
    setSelectedEntry(entry);
    setEditMode(true);
    setIsFormOpen(true);
  };

  const handleViewEntry = (entry: JournalEntry) => {
    setSelectedEntry(entry);
    setViewMode("details");
  };

  const handlePostEntry = (entry: JournalEntry) => {
    // In a real app, you would call an API to post the entry
    // For now, we'll just update the state
    const updatedEntries = journalEntries.map((je) =>
      je.id === entry.id ? { ...je, status: "posted" } : je,
    );
    setJournalEntries(updatedEntries);
    setSelectedEntry({ ...entry, status: "posted" });
  };

  const handleApproveEntry = (entry: JournalEntry) => {
    // In a real app, you would call an API to approve the entry
    // For now, we'll just update the state
    const updatedEntries = journalEntries.map((je) =>
      je.id === entry.id ? { ...je, status: "approved" } : je,
    );
    setJournalEntries(updatedEntries);
    setSelectedEntry({ ...entry, status: "approved" });
  };

  const handleRejectEntry = (entry: JournalEntry) => {
    // In a real app, you would call an API to reject the entry
    // For now, we'll just update the state
    const updatedEntries = journalEntries.map((je) =>
      je.id === entry.id ? { ...je, status: "rejected" } : je,
    );
    setJournalEntries(updatedEntries);
    setSelectedEntry({ ...entry, status: "rejected" });
  };

  const handleFormSubmit = (formData: any) => {
    // In a real app, you would call an API to save the entry
    // For now, we'll just update the state
    if (editMode && selectedEntry) {
      // Update existing entry
      const updatedEntry = {
        ...selectedEntry,
        date: formData.entryDate,
        description: formData.description,
        reference: formData.reference,
        lineItems: formData.lineItems.map((item: any, index: number) => {
          const accountInfo = accounts
            .flatMap((acc) => {
              const result = [acc];
              if (acc.children) result.push(...acc.children);
              return result;
            })
            .flatMap((acc) => {
              const result = [acc];
              if (acc.children) result.push(...acc.children);
              return result;
            })
            .find((acc) => acc.id === item.accountId);

          return {
            id: selectedEntry.lineItems[index]?.id || `li-new-${index}`,
            accountId: item.accountId,
            accountNumber: accountInfo?.accountNumber || "Unknown",
            accountName: accountInfo?.accountName || "Unknown Account",
            description: item.description,
            debit: item.debit ? parseFloat(item.debit) : undefined,
            credit: item.credit ? parseFloat(item.credit) : undefined,
          };
        }),
        amount: formData.lineItems.reduce(
          (sum: number, item: any) =>
            sum + (parseFloat(item.debit) || parseFloat(item.credit) || 0),
          0,
        ),
      };

      const updatedEntries = journalEntries.map((je) =>
        je.id === selectedEntry.id ? updatedEntry : je,
      );
      setJournalEntries(updatedEntries);
    } else {
      // Create new entry
      const newEntry: JournalEntry = {
        id: `je-${Date.now()}`,
        entryNumber: `JE-${new Date().getFullYear()}-${String(
          journalEntries.length + 1,
        ).padStart(3, "0")}`,
        date: formData.entryDate,
        description: formData.description,
        reference: formData.reference,
        entityId: formData.entityId || currentEntityId,
        status: "draft",
        createdBy: "Current User", // In a real app, this would come from the auth context
        createdAt: new Date().toISOString(),
        lineItems: formData.lineItems.map((item: any, index: number) => {
          const accountInfo = accounts
            .flatMap((acc) => {
              const result = [acc];
              if (acc.children) result.push(...acc.children);
              return result;
            })
            .flatMap((acc) => {
              const result = [acc];
              if (acc.children) result.push(...acc.children);
              return result;
            })
            .find((acc) => acc.id === item.accountId);

          return {
            id: `li-new-${Date.now()}-${index}`,
            accountId: item.accountId,
            accountNumber: accountInfo?.accountNumber || "Unknown",
            accountName: accountInfo?.accountName || "Unknown Account",
            description: item.description,
            debit: item.debit ? parseFloat(item.debit) : undefined,
            credit: item.credit ? parseFloat(item.credit) : undefined,
          };
        }),
        amount: formData.lineItems.reduce(
          (sum: number, item: any) =>
            sum + (parseFloat(item.debit) || parseFloat(item.credit) || 0),
          0,
        ),
      };

      setJournalEntries([...journalEntries, newEntry]);
    }

    setIsFormOpen(false);
    setSelectedEntry(null);
  };

  return (
    <div className="space-y-4">
      {viewMode === "list" ? (
        <>
          <Card className="border-slate-800 bg-slate-900">
            <CardHeader className="border-b border-slate-800 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-white">
                  General Ledger
                  {currentEntity !== "all" && (
                    <span className="ml-2 text-sm text-slate-400">
                      ({currentEntity})
                    </span>
                  )}
                </CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Import
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Report
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <JournalEntryList
                entries={filteredJournalEntries}
                onAddEntry={handleAddEntry}
                onViewEntry={handleViewEntry}
                onEditEntry={handleEditEntry}
              />
            </CardContent>
          </Card>

          {/* Journal Entry Form Dialog */}
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogContent className="sm:max-w-[800px] bg-slate-900 border-slate-800">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-white">
                  {editMode ? "Edit Journal Entry" : "New Journal Entry"}
                </DialogTitle>
              </DialogHeader>
              <JournalEntryForm
                initialData={
                  selectedEntry
                    ? {
                        entryDate: selectedEntry.date,
                        reference: selectedEntry.reference || "",
                        description: selectedEntry.description,
                        entityId: selectedEntry.entityId,
                        lineItems: selectedEntry.lineItems.map((item) => ({
                          accountId: item.accountId,
                          description: item.description || "",
                          debit: item.debit ? item.debit.toString() : "",
                          credit: item.credit ? item.credit.toString() : "",
                        })),
                      }
                    : undefined
                }
                onSubmit={handleFormSubmit}
                onCancel={() => setIsFormOpen(false)}
                accounts={filteredAccounts}
                entities={entities}
                currentEntityId={currentEntityId}
              />
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <JournalEntryDetails
          entry={selectedEntry!}
          onBack={() => setViewMode("list")}
          onEdit={handleEditEntry}
          onPost={handlePostEntry}
          onApprove={handleApproveEntry}
          onReject={handleRejectEntry}
        />
      )}
    </div>
  );
};

export default GeneralLedger;
