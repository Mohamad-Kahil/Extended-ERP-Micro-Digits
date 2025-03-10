import { useState, useEffect } from "react";
import { intercompanyEntitiesApi } from "@/lib/api/accounting";

/**
 * Custom hook to fetch and manage entity data
 * @param initialEntityName Optional initial entity name to select
 * @returns Entity data and selection state
 */
export const useEntityData = (initialEntityName?: string) => {
  const [entities, setEntities] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(
    initialEntityName || "all",
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch entities on mount
  useEffect(() => {
    const fetchEntities = async () => {
      setLoading(true);
      try {
        const data = await intercompanyEntitiesApi.getAll();
        setEntities(data);
      } catch (err) {
        console.error("Error fetching entities:", err);
        setError("Failed to load entities");

        // Fallback to mock data
        setEntities([
          {
            id: "1",
            name: "Parent Company",
            entity_type: "Parent",
          },
          {
            id: "2",
            name: "Subsidiary 1",
            entity_type: "Subsidiary",
            parent_entity_id: "1",
          },
          {
            id: "3",
            name: "Subsidiary 2",
            entity_type: "Subsidiary",
            parent_entity_id: "1",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEntities();
  }, []);

  // Update selected entity when initialEntityName changes
  useEffect(() => {
    if (initialEntityName) {
      setSelectedEntity(initialEntityName);
    }
  }, [initialEntityName]);

  // Get entity ID from name
  const getEntityIdByName = (name: string) => {
    if (!name || name === "all") return null;
    const entity = entities.find((e) => e.name === name);
    return entity?.id || null;
  };

  // Get entity names for dropdown
  const entityNames = ["all", ...entities.map((e) => e.name)];

  return {
    entities,
    entityNames,
    selectedEntity,
    setSelectedEntity,
    selectedEntityId: getEntityIdByName(selectedEntity),
    loading,
    error,
  };
};
