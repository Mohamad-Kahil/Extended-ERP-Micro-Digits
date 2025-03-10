import { useState, useEffect } from "react";
import {
  intercompanyEntitiesApi,
  intercompanyTransactionsApi,
} from "@/lib/api/accounting";
import {
  IntercompanyEntity,
  IntercompanyTransaction,
} from "@/types/accounting";

export const useIntercompanyData = (selectedCompany: string) => {
  const [entities, setEntities] = useState<IntercompanyEntity[]>([]);
  const [transactions, setTransactions] = useState<IntercompanyTransaction[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // For development, use mock data if API fails
        try {
          // Try to fetch from API first
          const entitiesData = await intercompanyEntitiesApi.getAll();
          setEntities(entitiesData);

          const transactionsData = await intercompanyTransactionsApi.getAll();
          setTransactions(transactionsData);
        } catch (apiErr) {
          console.warn("API fetch failed, using mock data", apiErr);
          // Mock entities data
          const mockEntities: IntercompanyEntity[] = [
            {
              id: "1",
              name: "Parent Company",
              entity_type: "Parent",
              country: "USA",
              currency: "USD",
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
            {
              id: "2",
              name: "Subsidiary 1",
              entity_type: "Subsidiary",
              country: "UK",
              currency: "GBP",
              ownership_percentage: 100,
              parent_entity_id: "1",
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
            {
              id: "3",
              name: "Subsidiary 2",
              entity_type: "Subsidiary",
              country: "Germany",
              currency: "EUR",
              ownership_percentage: 75,
              parent_entity_id: "1",
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
            {
              id: "4",
              name: "Joint Venture",
              entity_type: "Joint Venture",
              country: "Canada",
              currency: "CAD",
              ownership_percentage: 50,
              parent_entity_id: "1",
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ];

          // Mock transactions data
          const mockTransactions: IntercompanyTransaction[] = [
            {
              id: "1",
              transaction_ref: "IC-2023-1001",
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
            },
            {
              id: "2",
              transaction_ref: "IC-2023-1002",
              transaction_date: "2023-10-18",
              from_entity_id: "2",
              to_entity_id: "1",
              amount: 75000,
              currency: "USD",
              status: "Matched",
              description: "Dividend payment",
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              from_entity: { name: "Subsidiary 1" },
              to_entity: { name: "Parent Company" },
            },
            {
              id: "3",
              transaction_ref: "IC-2023-1003",
              transaction_date: "2023-10-20",
              from_entity_id: "1",
              to_entity_id: "3",
              amount: 180000,
              currency: "USD",
              status: "Unmatched",
              description: "Technology transfer",
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              from_entity: { name: "Parent Company" },
              to_entity: { name: "Subsidiary 2" },
            },
            {
              id: "4",
              transaction_ref: "IC-2023-1004",
              transaction_date: "2023-10-25",
              from_entity_id: "3",
              to_entity_id: "2",
              amount: 45000,
              currency: "EUR",
              status: "Unmatched",
              description: "Service fee",
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              from_entity: { name: "Subsidiary 2" },
              to_entity: { name: "Subsidiary 1" },
            },
            {
              id: "5",
              transaction_ref: "IC-2023-1005",
              transaction_date: "2023-10-28",
              from_entity_id: "4",
              to_entity_id: "1",
              amount: 120000,
              currency: "CAD",
              status: "Matched",
              description: "Profit sharing",
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              from_entity: { name: "Joint Venture" },
              to_entity: { name: "Parent Company" },
            },
          ];

          setEntities(mockEntities);
          setTransactions(mockTransactions);
        }
      } catch (err) {
        console.error("Error fetching intercompany data:", err);
        setError("Failed to load intercompany data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter transactions based on selected company
  const filteredTransactions = transactions.filter((transaction) => {
    // If no company is selected or it's "All Companies", show all transactions
    if (!selectedCompany || selectedCompany === "All Companies") return true;

    // Otherwise, only show transactions where the selected company is involved
    return (
      transaction.from_entity?.name === selectedCompany ||
      transaction.to_entity?.name === selectedCompany
    );
  });

  // Filter entities based on selected company
  const filteredEntities =
    selectedCompany && selectedCompany !== "All Companies"
      ? entities.filter(
          (entity) =>
            entity.name === selectedCompany ||
            (entity.parent_entity_id &&
              entities.find((e) => e.id === entity.parent_entity_id)?.name ===
                selectedCompany),
        )
      : entities;

  return {
    entities: filteredEntities,
    allEntities: entities,
    transactions: filteredTransactions,
    loading,
    error,
    refetch: async () => {
      setLoading(true);
      try {
        // For development, use mock data
        // In a real app, you would fetch from the API
        // const entitiesData = await intercompanyEntitiesApi.getAll();
        // const transactionsData = await intercompanyTransactionsApi.getAll();
        // setEntities(entitiesData);
        // setTransactions(transactionsData);

        // This is just to simulate a successful refresh
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error("Error refetching data:", err);
        setError("Failed to refresh data. Please try again.");
        setLoading(false);
      }
    },
  };
};
