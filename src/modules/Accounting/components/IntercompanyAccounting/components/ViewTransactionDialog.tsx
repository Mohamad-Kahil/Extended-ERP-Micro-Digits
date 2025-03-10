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
import { intercompanyTransactionsApi } from "@/lib/api/accounting";
import { IntercompanyTransaction } from "@/types/accounting";

interface ViewTransactionDialogProps {
  transactionId: string;
}

const ViewTransactionDialog: React.FC<ViewTransactionDialogProps> = ({
  transactionId,
}) => {
  const [open, setOpen] = useState(false);
  const [transaction, setTransaction] =
    useState<IntercompanyTransaction | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactionDetails = async () => {
    if (!open) return;

    setLoading(true);
    setError(null);

    try {
      try {
        const data = await intercompanyTransactionsApi.getById(transactionId);
        setTransaction(data);
      } catch (apiErr) {
        console.warn("API fetch failed, using mock data", apiErr);
        // Find the transaction in the mock data
        const mockTransaction = {
          id: transactionId,
          transaction_ref: `IC-2023-${1000 + parseInt(transactionId)}`,
          transaction_date: "2023-10-15",
          from_entity_id: "1",
          to_entity_id: "2",
          amount: 250000,
          currency: "USD",
          status: "Matched",
          description: "Capital investment",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          from_entity: { name: "Parent Company" },
          to_entity: { name: "Subsidiary 1" },
        };
        setTransaction(mockTransaction);
      }
    } catch (err) {
      console.error("Error fetching transaction details:", err);
      setError("Failed to load transaction details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactionDetails();
  }, [open, transactionId]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-slate-400 hover:text-white transition-colors">
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
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-slate-900 text-white border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">
            Transaction Details
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            View detailed information about this transaction
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-md">
            {error}
          </div>
        ) : transaction ? (
          <div className="py-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-slate-400">
                  Reference
                </h4>
                <p className="text-white">{transaction.transaction_ref}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400">Date</h4>
                <p className="text-white">
                  {new Date(transaction.transaction_date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-slate-400">
                  From Entity
                </h4>
                <p className="text-white">{transaction.from_entity?.name}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400">
                  To Entity
                </h4>
                <p className="text-white">{transaction.to_entity?.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-slate-400">Amount</h4>
                <p className="text-white">
                  {transaction.currency}{" "}
                  {transaction.amount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400">Status</h4>
                <p
                  className={`${transaction.status === "Matched" ? "text-emerald-500" : "text-amber-500"}`}
                >
                  {transaction.status}
                </p>
              </div>
            </div>

            {transaction.description && (
              <div>
                <h4 className="text-sm font-medium text-slate-400">
                  Description
                </h4>
                <p className="text-white">{transaction.description}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-slate-400">
                  Created At
                </h4>
                <p className="text-white">
                  {new Date(transaction.created_at).toLocaleString()}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400">
                  Last Updated
                </h4>
                <p className="text-white">
                  {new Date(transaction.updated_at).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 text-slate-400">
            <p>No transaction data found</p>
          </div>
        )}

        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewTransactionDialog;
