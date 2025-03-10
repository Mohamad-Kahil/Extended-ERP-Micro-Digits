import React, { useState } from "react";
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
import { intercompanyEntitiesApi } from "@/lib/api/accounting";
import { IntercompanyEntity } from "@/types/accounting";

interface NewEntityDialogProps {
  entities: IntercompanyEntity[];
  onEntityCreated: () => void;
}

const NewEntityDialog: React.FC<NewEntityDialogProps> = ({
  entities,
  onEntityCreated,
}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [entityType, setEntityType] = useState("Subsidiary");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [ownershipPercentage, setOwnershipPercentage] = useState("");
  const [parentEntityId, setParentEntityId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Validate inputs
      if (!name || !entityType || !currency) {
        throw new Error("Please fill in all required fields");
      }

      let ownership = null;
      if (ownershipPercentage) {
        ownership = parseFloat(ownershipPercentage);
        if (isNaN(ownership) || ownership <= 0 || ownership > 100) {
          throw new Error("Ownership percentage must be between 0 and 100");
        }
      }

      // Create entity object
      const entity: any = {
        name,
        entity_type: entityType,
        currency,
      };

      if (country) entity.country = country;
      if (ownership) entity.ownership_percentage = ownership;
      if (parentEntityId) entity.parent_entity_id = parentEntityId;

      // Submit to API
      await intercompanyEntitiesApi.create(entity);

      // Reset form and close dialog
      setName("");
      setEntityType("Subsidiary");
      setCountry("");
      setCurrency("USD");
      setOwnershipPercentage("");
      setParentEntityId("");
      setOpen(false);

      // Notify parent component
      onEntityCreated();
    } catch (err) {
      console.error("Error creating entity:", err);
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
          Add New Entity
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-slate-900 text-white border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">
            Add New Entity
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Create a new entity for intercompany transactions
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="entity-name">Entity Name</Label>
            <Input
              id="entity-name"
              placeholder="Enter entity name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="entity-type">Entity Type</Label>
              <Select value={entityType} onValueChange={setEntityType}>
                <SelectTrigger id="entity-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Parent">Parent</SelectItem>
                  <SelectItem value="Subsidiary">Subsidiary</SelectItem>
                  <SelectItem value="Branch">Branch</SelectItem>
                  <SelectItem value="Joint Venture">Joint Venture</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                placeholder="Enter country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
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

            <div className="space-y-2">
              <Label htmlFor="ownership">Ownership Percentage</Label>
              <Input
                id="ownership"
                type="number"
                min="0"
                max="100"
                step="0.01"
                placeholder="Enter percentage"
                value={ownershipPercentage}
                onChange={(e) => setOwnershipPercentage(e.target.value)}
              />
            </div>
          </div>

          {entityType !== "Parent" && (
            <div className="space-y-2">
              <Label htmlFor="parent-entity">Parent Entity</Label>
              <Select value={parentEntityId} onValueChange={setParentEntityId}>
                <SelectTrigger id="parent-entity">
                  <SelectValue placeholder="Select parent entity" />
                </SelectTrigger>
                <SelectContent>
                  {entities
                    .filter((entity) => entity.entity_type === "Parent")
                    .map((entity) => (
                      <SelectItem key={entity.id} value={entity.id}>
                        {entity.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          )}

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
              {isSubmitting ? "Creating..." : "Create Entity"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewEntityDialog;
