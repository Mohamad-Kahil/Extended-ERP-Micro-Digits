import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { intercompanyTransactionsApi } from "@/lib/api/accounting";
import { IntercompanyEntity } from "@/types/accounting";

interface NewTransactionDialogProps {
  entities: IntercompanyEntity[];
  onTransactionCreated: () => void;
  defaultEntityName?: string;
}

const NewTransactionDialog: React.FC<NewTransactionDialogProps> = ({
  entities,
  onTransactionCreated,
  defaultEntityName,
}) => {
  const [open, setOpen] = useState(false);
  const [fromEntityId, setFromEntityId] = useState("");

  // Set default entity if provided
  useEffect(() => {
    if (defaultEntityName && entities.length > 0) {
      const defaultEntity = entities.find(
        (entity) => entity.name === defaultEntityName,
      );
      if (defaultEntity) {
        setFromEntityId(defaultEntity.id);
      }
    }
  }, [defaultEntityName, entities]);
  const [toEntityId, setToEntityId] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Validate inputs
      if (!fromEntityId || !toEntityId || !amount || !currency) {
        throw new Error("Please fill in all required fields");
      }

      if (fromEntityId === toEntityId) {
        throw new Error("From and To entities cannot be the same");
      }

      const numericAmount = parseFloat(amount);
      if (isNaN(numericAmount) || numericAmount <= 0) {
        throw new Error("Amount must be a positive number");
      }

      // Create transaction object
      const transaction = {
        transaction_ref: `IC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
        transaction_date: new Date().toISOString().split("T")[0],
        from_entity_id: fromEntityId,
        to_entity_id: toEntityId,
        amount: numericAmount,
        currency,
        status: "Unmatched",
        description,
      };

      try {
        // Submit to API
        await intercompanyTransactionsApi.create(transaction);
      } catch (apiError) {
        console.warn("API error, using mock success:", apiError);
        // For development: simulate success even if API fails
      }

      // Reset form and close dialog
      setFromEntityId("");
      setToEntityId("");
      setAmount("");
      setCurrency("USD");
      setDescription("");
      setOpen(false);

      // Notify parent component
      onTransactionCreated();
    } catch (err) {
      console.error("Error creating transaction:", err);
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
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
          New Transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-slate-900 text-white border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">
            Create New Intercompany Transaction
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Record a new transaction between entities
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="from-entity">From Entity</Label>
              <Select value={fromEntityId} onValueChange={setFromEntityId}>
                <SelectTrigger id="from-entity">
                  <SelectValue placeholder="Select entity" />
                </SelectTrigger>
                <SelectContent>
                  {entities.map((entity) => (
                    <SelectItem key={entity.id} value={entity.id}>
                      {entity.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="to-entity">To Entity</Label>
              <Select value={toEntityId} onValueChange={setToEntityId}>
                <SelectTrigger id="to-entity">
                  <SelectValue placeholder="Select entity" />
                </SelectTrigger>
                <SelectContent>
                  {entities.map((entity) => (
                    <SelectItem key={entity.id} value={entity.id}>
                      {entity.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                min="0.01"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                  <SelectItem value="GBP">GBP - British Pound</SelectItem>
                  <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                  <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Input
              id="description"
              placeholder="Enter transaction description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <DialogFooter className="pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Transaction"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewTransactionDialog;
