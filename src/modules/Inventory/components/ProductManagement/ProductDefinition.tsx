import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

// Define the product hierarchy types
interface ProductFamily {
  id: string;
  name: string;
}

interface Brand {
  id: string;
  name: string;
  productFamilyId: string;
}

interface Category {
  id: string;
  name: string;
  productFamilyId: string;
}

interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
}

interface ProductLine {
  id: string;
  name: string;
  subcategoryId: string;
}

interface AttributeValue {
  id: string;
  value: string;
}

interface Attribute {
  id: string;
  name: string;
  values: AttributeValue[];
}

interface Metadata {
  sku?: string;
  material?: string;
  seasonality?: string;
  packaging?: string;
  compliance?: string;
  targetMarket?: string;
}

interface ProductDefinition {
  productFamily: ProductFamily;
  brand?: Brand;
  category: Category;
  subcategory: Subcategory;
  productLine?: ProductLine;
  attributes: Attribute[];
  metadata?: Metadata;
}

interface ProductVariant {
  id: string;
  sku: string;
  attributeValues: { attributeId: string; valueId: string }[];
  metadata?: Metadata;
}

interface Product {
  id: string;
  definition: ProductDefinition;
  variants: ProductVariant[];
}

const ProductDefinitionComponent: React.FC = () => {
  // Sample data for the hierarchy
  const [productFamilies, setProductFamilies] = useState<ProductFamily[]>([
    { id: "pf1", name: "Mobile" },
    { id: "pf2", name: "Apparel" },
    { id: "pf3", name: "Snacks" },
  ]);

  const [brands, setBrands] = useState<Brand[]>([
    { id: "b1", name: "Apple", productFamilyId: "pf1" },
    { id: "b2", name: "Samsung", productFamilyId: "pf1" },
    { id: "b3", name: "Nike", productFamilyId: "pf2" },
    { id: "b4", name: "Adidas", productFamilyId: "pf2" },
    { id: "b5", name: "Lay's", productFamilyId: "pf3" },
  ]);

  const [categories, setCategories] = useState<Category[]>([
    { id: "c1", name: "Smartphones", productFamilyId: "pf1" },
    { id: "c2", name: "Tablets", productFamilyId: "pf1" },
    { id: "c3", name: "Shirts", productFamilyId: "pf2" },
    { id: "c4", name: "Pants", productFamilyId: "pf2" },
    { id: "c5", name: "Chips", productFamilyId: "pf3" },
  ]);

  const [subcategories, setSubcategories] = useState<Subcategory[]>([
    { id: "sc1", name: "iPhone 16", categoryId: "c1" },
    { id: "sc2", name: "Galaxy S24", categoryId: "c1" },
    { id: "sc3", name: "iPad Pro", categoryId: "c2" },
    { id: "sc4", name: "T-Shirts", categoryId: "c3" },
    { id: "sc5", name: "Dress Shirts", categoryId: "c3" },
    { id: "sc6", name: "Jeans", categoryId: "c4" },
    { id: "sc7", name: "Potato Chips", categoryId: "c5" },
  ]);

  const [productLines, setProductLines] = useState<ProductLine[]>([
    { id: "pl1", name: "iPhone 16 Pro Max", subcategoryId: "sc1" },
    { id: "pl2", name: "iPhone 16 Plus", subcategoryId: "sc1" },
    { id: "pl3", name: "Galaxy S24 Ultra", subcategoryId: "sc2" },
    { id: "pl4", name: "Crew Neck", subcategoryId: "sc4" },
    { id: "pl5", name: "V-Neck", subcategoryId: "sc4" },
    { id: "pl6", name: "BBQ Flavor", subcategoryId: "sc7" },
  ]);

  // State for the current product being defined
  const [currentProduct, setCurrentProduct] = useState<
    Partial<ProductDefinition>
  >({});

  // State for the current step in the product definition process
  const [currentStep, setCurrentStep] = useState<number>(1);

  // State for the dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  // State for the new item being added
  const [newItemName, setNewItemName] = useState<string>("");

  // State for the attributes being defined
  const [attributes, setAttributes] = useState<Attribute[]>([]);

  // State for the current attribute being defined
  const [currentAttribute, setCurrentAttribute] = useState<Partial<Attribute>>({
    values: [],
  });

  // State for the current attribute value being added
  const [currentAttributeValue, setCurrentAttributeValue] =
    useState<string>("");

  // State for the metadata
  const [metadata, setMetadata] = useState<Metadata>({});

  // State for the products
  const [products, setProducts] = useState<Product[]>([
    {
      id: "p1",
      definition: {
        productFamily: { id: "pf1", name: "Mobile" },
        brand: { id: "b1", name: "Apple", productFamilyId: "pf1" },
        category: { id: "c1", name: "Smartphones", productFamilyId: "pf1" },
        subcategory: { id: "sc1", name: "iPhone 16", categoryId: "c1" },
        productLine: {
          id: "pl1",
          name: "iPhone 16 Pro Max",
          subcategoryId: "sc1",
        },
        attributes: [
          {
            id: "a1",
            name: "Color",
            values: [
              { id: "v1", value: "White" },
              { id: "v2", value: "Black" },
              { id: "v3", value: "Silver" },
            ],
          },
          {
            id: "a2",
            name: "Memory Size",
            values: [
              { id: "v4", value: "256GB" },
              { id: "v5", value: "512GB" },
              { id: "v6", value: "1TB" },
            ],
          },
        ],
        metadata: {
          material: "Aluminum",
          targetMarket: "Premium Users",
        },
      },
      variants: [
        {
          id: "var1",
          sku: "IP16PMX-256-WH",
          attributeValues: [
            { attributeId: "a1", valueId: "v1" },
            { attributeId: "a2", valueId: "v4" },
          ],
          metadata: {
            material: "Aluminum",
            targetMarket: "Premium Users",
          },
        },
        {
          id: "var2",
          sku: "IP16PMX-512-WH",
          attributeValues: [
            { attributeId: "a1", valueId: "v1" },
            { attributeId: "a2", valueId: "v5" },
          ],
          metadata: {
            material: "Aluminum",
            targetMarket: "Premium Users",
          },
        },
        // More variants would be here
      ],
    },
    {
      id: "p2",
      definition: {
        productFamily: { id: "pf2", name: "Apparel" },
        brand: { id: "b3", name: "Nike", productFamilyId: "pf2" },
        category: { id: "c3", name: "Shirts", productFamilyId: "pf2" },
        subcategory: { id: "sc4", name: "T-Shirts", categoryId: "c3" },
        productLine: { id: "pl4", name: "Crew Neck", subcategoryId: "sc4" },
        attributes: [
          {
            id: "a3",
            name: "Size",
            values: [
              { id: "v7", value: "S" },
              { id: "v8", value: "M" },
              { id: "v9", value: "L" },
            ],
          },
          {
            id: "a4",
            name: "Color",
            values: [
              { id: "v10", value: "Blue" },
              { id: "v11", value: "Red" },
            ],
          },
        ],
        metadata: {
          material: "Cotton",
          seasonality: "All Seasons",
        },
      },
      variants: [
        {
          id: "var3",
          sku: "NK-TS-CN-S-BL",
          attributeValues: [
            { attributeId: "a3", valueId: "v7" },
            { attributeId: "a4", valueId: "v10" },
          ],
          metadata: {
            material: "Cotton",
            seasonality: "All Seasons",
          },
        },
        {
          id: "var4",
          sku: "NK-TS-CN-S-RD",
          attributeValues: [
            { attributeId: "a3", valueId: "v7" },
            { attributeId: "a4", valueId: "v11" },
          ],
          metadata: {
            material: "Cotton",
            seasonality: "All Seasons",
          },
        },
        // More variants would be here
      ],
    },
  ]);

  // Filter states for the 5-step filtration process
  const [filterProductFamily, setFilterProductFamily] = useState<string>("");
  const [filterBrand, setFilterBrand] = useState<string>("");
  const [filterCategory, setFilterCategory] = useState<string>("");
  const [filterSubcategory, setFilterSubcategory] = useState<string>("");
  const [filterProductLine, setFilterProductLine] = useState<string>("");

  // Function to handle the product family selection
  const handleProductFamilySelect = (productFamilyId: string) => {
    const productFamily = productFamilies.find(
      (pf) => pf.id === productFamilyId,
    );
    if (productFamily) {
      setCurrentProduct({ ...currentProduct, productFamily });
      setCurrentStep(2);
    }
  };

  // Function to handle the brand selection
  const handleBrandSelect = (brandId: string) => {
    if (brandId === "skip") {
      setCurrentProduct({ ...currentProduct, brand: undefined });
      setCurrentStep(3);
      return;
    }

    const brand = brands.find((b) => b.id === brandId);
    if (brand) {
      setCurrentProduct({ ...currentProduct, brand });
      setCurrentStep(3);
    }
  };

  // Function to handle the category selection
  const handleCategorySelect = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    if (category) {
      setCurrentProduct({ ...currentProduct, category });
      setCurrentStep(4);
    }
  };

  // Function to handle the subcategory selection
  const handleSubcategorySelect = (subcategoryId: string) => {
    const subcategory = subcategories.find((sc) => sc.id === subcategoryId);
    if (subcategory) {
      setCurrentProduct({ ...currentProduct, subcategory });
      setCurrentStep(5);
    }
  };

  // Function to handle the product line selection
  const handleProductLineSelect = (productLineId: string) => {
    if (productLineId === "skip") {
      setCurrentProduct({ ...currentProduct, productLine: undefined });
      setCurrentStep(6);
      return;
    }

    const productLine = productLines.find((pl) => pl.id === productLineId);
    if (productLine) {
      setCurrentProduct({ ...currentProduct, productLine });
      setCurrentStep(6);
    }
  };

  // Function to add a new attribute
  const handleAddAttribute = () => {
    if (
      currentAttribute.name &&
      currentAttribute.values &&
      currentAttribute.values.length > 0
    ) {
      const newAttribute: Attribute = {
        id: `a${attributes.length + 1}`,
        name: currentAttribute.name as string,
        values: currentAttribute.values as AttributeValue[],
      };

      setAttributes([...attributes, newAttribute]);
      setCurrentAttribute({ values: [] });
    }
  };

  // Function to add a new attribute value
  const handleAddAttributeValue = () => {
    if (currentAttributeValue) {
      const newValue: AttributeValue = {
        id: `v${currentAttribute.values?.length || 0 + 1}`,
        value: currentAttributeValue,
      };

      setCurrentAttribute({
        ...currentAttribute,
        values: [...(currentAttribute.values || []), newValue],
      });
      setCurrentAttributeValue("");
    }
  };

  // Function to complete the product definition
  const handleCompleteProductDefinition = () => {
    if (
      currentProduct.productFamily &&
      currentProduct.category &&
      currentProduct.subcategory &&
      attributes.length > 0
    ) {
      const newProduct: Product = {
        id: `p${products.length + 1}`,
        definition: {
          productFamily: currentProduct.productFamily,
          brand: currentProduct.brand,
          category: currentProduct.category,
          subcategory: currentProduct.subcategory,
          productLine: currentProduct.productLine,
          attributes: attributes,
          metadata: metadata,
        } as ProductDefinition,
        variants: generateVariants(attributes, metadata),
      };

      setProducts([...products, newProduct]);
      resetProductDefinition();
    }
  };

  // Function to generate all possible variants from attributes
  const generateVariants = (
    attrs: Attribute[],
    meta?: Metadata,
  ): ProductVariant[] => {
    // Helper function to generate combinations recursively
    const generateCombinations = (
      attributes: Attribute[],
      currentIndex: number,
      currentCombination: { attributeId: string; valueId: string }[],
    ): { attributeId: string; valueId: string }[][] => {
      if (currentIndex === attributes.length) {
        return [currentCombination];
      }

      const attribute = attributes[currentIndex];
      const combinations: { attributeId: string; valueId: string }[][] = [];

      for (const value of attribute.values) {
        const newCombination = [
          ...currentCombination,
          { attributeId: attribute.id, valueId: value.id },
        ];
        const newCombinations = generateCombinations(
          attributes,
          currentIndex + 1,
          newCombination,
        );
        combinations.push(...newCombinations);
      }

      return combinations;
    };

    // Generate all combinations of attribute values
    const combinations = generateCombinations(attrs, 0, []);

    // Create variants from combinations
    return combinations.map((combination, index) => {
      // Generate SKU based on product definition and attribute values
      const sku = generateSKU(currentProduct, combination, attrs);

      return {
        id: `var${index + 1}`,
        sku,
        attributeValues: combination,
        metadata: meta,
      };
    });
  };

  // Function to generate a SKU for a variant
  const generateSKU = (
    product: Partial<ProductDefinition>,
    attributeValues: { attributeId: string; valueId: string }[],
    attributes: Attribute[],
  ): string => {
    let sku = "";

    // Add brand prefix if available
    if (product.brand) {
      sku += product.brand.name.substring(0, 2).toUpperCase();
    }

    // Add category and subcategory
    if (product.category && product.subcategory) {
      sku += "-" + product.subcategory.name.substring(0, 2).toUpperCase();
    }

    // Add product line if available
    if (product.productLine) {
      sku += "-" + product.productLine.name.substring(0, 2).toUpperCase();
    }

    // Add attribute values
    for (const attrValue of attributeValues) {
      const attribute = attributes.find((a) => a.id === attrValue.attributeId);
      const value = attribute?.values.find((v) => v.id === attrValue.valueId);

      if (attribute && value) {
        // For size attributes, add the value directly
        if (attribute.name.toLowerCase().includes("size")) {
          sku += "-" + value.value;
        } else {
          // For other attributes, add the first 2 characters
          sku += "-" + value.value.substring(0, 2).toUpperCase();
        }
      }
    }

    return sku;
  };

  // Function to reset the product definition
  const resetProductDefinition = () => {
    setCurrentProduct({});
    setAttributes([]);
    setMetadata({});
    setCurrentStep(1);
  };

  // Function to reset all filters
  const resetFilters = () => {
    setFilterProductFamily("");
    setFilterBrand("");
    setFilterCategory("");
    setFilterSubcategory("");
    setFilterProductLine("");
  };

  // Filter the products based on the selected filters
  const filteredProducts = products.filter((product) => {
    if (
      filterProductFamily &&
      product.definition.productFamily.id !== filterProductFamily
    ) {
      return false;
    }
    if (
      filterBrand &&
      (!product.definition.brand || product.definition.brand.id !== filterBrand)
    ) {
      return false;
    }
    if (filterCategory && product.definition.category.id !== filterCategory) {
      return false;
    }
    if (
      filterSubcategory &&
      product.definition.subcategory.id !== filterSubcategory
    ) {
      return false;
    }
    if (
      filterProductLine &&
      (!product.definition.productLine ||
        product.definition.productLine.id !== filterProductLine)
    ) {
      return false;
    }
    return true;
  });

  // Get all variants from filtered products
  const filteredVariants = filteredProducts.flatMap((product) => {
    return product.variants.map((variant) => {
      return {
        product: product.definition,
        variant,
      };
    });
  });

  // Function to get attribute value display text
  const getAttributeValueText = (
    product: ProductDefinition,
    variant: ProductVariant,
  ): string => {
    return variant.attributeValues
      .map((av) => {
        const attribute = product.attributes.find(
          (a) => a.id === av.attributeId,
        );
        const value = attribute?.values.find((v) => v.id === av.valueId);
        return `${attribute?.name}: ${value?.value}`;
      })
      .join(", ");
  };

  // Render the appropriate dialog content based on the current step
  const renderDialogContent = () => {
    switch (currentStep) {
      case 1: // Product Family Dialog
        return (
          <>
            <DialogHeader>
              <DialogTitle>Select or add a Product Family</DialogTitle>
              <DialogDescription>
                Choose an existing Product Family or add a new one.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 gap-4">
                {productFamilies.map((pf) => (
                  <Button
                    key={pf.id}
                    variant="outline"
                    onClick={() => handleProductFamilySelect(pf.id)}
                  >
                    {pf.name}
                  </Button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="New Product Family"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                />
                <Button
                  onClick={() => {
                    if (newItemName) {
                      const newPF: ProductFamily = {
                        id: `pf${productFamilies.length + 1}`,
                        name: newItemName,
                      };
                      setProductFamilies([...productFamilies, newPF]);
                      setCurrentProduct({
                        ...currentProduct,
                        productFamily: newPF,
                      });
                      setNewItemName("");
                      setCurrentStep(2);
                    }
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </>
        );

      case 2: // Brand Dialog
        return (
          <>
            <DialogHeader>
              <DialogTitle>
                Select or add a Brand for {currentProduct.productFamily?.name}
              </DialogTitle>
              <DialogDescription>
                Choose an existing Brand, add a new one, or skip if not
                applicable.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 gap-4">
                {brands
                  .filter(
                    (b) =>
                      b.productFamilyId === currentProduct.productFamily?.id,
                  )
                  .map((brand) => (
                    <Button
                      key={brand.id}
                      variant="outline"
                      onClick={() => handleBrandSelect(brand.id)}
                    >
                      {brand.name}
                    </Button>
                  ))}
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="New Brand"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                />
                <Button
                  onClick={() => {
                    if (newItemName && currentProduct.productFamily) {
                      const newBrand: Brand = {
                        id: `b${brands.length + 1}`,
                        name: newItemName,
                        productFamilyId: currentProduct.productFamily.id,
                      };
                      setBrands([...brands, newBrand]);
                      setCurrentProduct({ ...currentProduct, brand: newBrand });
                      setNewItemName("");
                      setCurrentStep(3);
                    }
                  }}
                >
                  Add
                </Button>
              </div>
              <Button
                variant="secondary"
                onClick={() => handleBrandSelect("skip")}
              >
                Skip (No Brand)
              </Button>
            </div>
          </>
        );

      case 3: // Category Dialog
        return (
          <>
            <DialogHeader>
              <DialogTitle>
                Select or add a Category within{" "}
                {currentProduct.productFamily?.name}
              </DialogTitle>
              <DialogDescription>
                Choose an existing Category or add a new one.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 gap-4">
                {categories
                  .filter(
                    (c) =>
                      c.productFamilyId === currentProduct.productFamily?.id,
                  )
                  .map((category) => (
                    <Button
                      key={category.id}
                      variant="outline"
                      onClick={() => handleCategorySelect(category.id)}
                    >
                      {category.name}
                    </Button>
                  ))}
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="New Category"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                />
                <Button
                  onClick={() => {
                    if (newItemName && currentProduct.productFamily) {
                      const newCategory: Category = {
                        id: `c${categories.length + 1}`,
                        name: newItemName,
                        productFamilyId: currentProduct.productFamily.id,
                      };
                      setCategories([...categories, newCategory]);
                      setCurrentProduct({
                        ...currentProduct,
                        category: newCategory,
                      });
                      setNewItemName("");
                      setCurrentStep(4);
                    }
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </>
        );

      case 4: // Subcategory Dialog
        return (
          <>
            <DialogHeader>
              <DialogTitle>
                Select or add a Subcategory within{" "}
                {currentProduct.category?.name}
              </DialogTitle>
              <DialogDescription>
                Choose an existing Subcategory or add a new one.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 gap-4">
                {subcategories
                  .filter((sc) => sc.categoryId === currentProduct.category?.id)
                  .map((subcategory) => (
                    <Button
                      key={subcategory.id}
                      variant="outline"
                      onClick={() => handleSubcategorySelect(subcategory.id)}
                    >
                      {subcategory.name}
                    </Button>
                  ))}
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="New Subcategory"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                />
                <Button
                  onClick={() => {
                    if (newItemName && currentProduct.category) {
                      const newSubcategory: Subcategory = {
                        id: `sc${subcategories.length + 1}`,
                        name: newItemName,
                        categoryId: currentProduct.category.id,
                      };
                      setSubcategories([...subcategories, newSubcategory]);
                      setCurrentProduct({
                        ...currentProduct,
                        subcategory: newSubcategory,
                      });
                      setNewItemName("");
                      setCurrentStep(5);
                    }
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </>
        );

      case 5: // Product Line/Model Dialog
        return (
          <>
            <DialogHeader>
              <DialogTitle>
                Select or add a Product Line/Model within{" "}
                {currentProduct.subcategory?.name}
              </DialogTitle>
              <DialogDescription>
                Choose an existing Product Line/Model, add a new one, or skip if
                not applicable.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 gap-4">
                {productLines
                  .filter(
                    (pl) => pl.subcategoryId === currentProduct.subcategory?.id,
                  )
                  .map((productLine) => (
                    <Button
                      key={productLine.id}
                      variant="outline"
                      onClick={() => handleProductLineSelect(productLine.id)}
                    >
                      {productLine.name}
                    </Button>
                  ))}
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="New Product Line/Model"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                />
                <Button
                  onClick={() => {
                    if (newItemName && currentProduct.subcategory) {
                      const newProductLine: ProductLine = {
                        id: `pl${productLines.length + 1}`,
                        name: newItemName,
                        subcategoryId: currentProduct.subcategory.id,
                      };
                      setProductLines([...productLines, newProductLine]);
                      setCurrentProduct({
                        ...currentProduct,
                        productLine: newProductLine,
                      });
                      setNewItemName("");
                      setCurrentStep(6);
                    }
                  }}
                >
                  Add
                </Button>
              </div>
              <Button
                variant="secondary"
                onClick={() => handleProductLineSelect("skip")}
              >
                Skip (No Product Line/Model)
              </Button>
            </div>
          </>
        );

      case 6: // Variants/Attributes Dialog
        return (
          <>
            <DialogHeader>
              <DialogTitle>Define Variants/Attributes</DialogTitle>
              <DialogDescription>
                Add attributes (e.g., Color, Size) and their possible values.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="attributeName">Attribute Name</Label>
                    <Input
                      id="attributeName"
                      placeholder="e.g., Color, Size"
                      value={currentAttribute.name || ""}
                      onChange={(e) =>
                        setCurrentAttribute({
                          ...currentAttribute,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-end space-x-2">
                    <Input
                      placeholder="Attribute Value"
                      value={currentAttributeValue}
                      onChange={(e) => setCurrentAttributeValue(e.target.value)}
                    />
                    <Button onClick={handleAddAttributeValue}>Add Value</Button>
                  </div>
                </div>

                {currentAttribute.values &&
                  currentAttribute.values.length > 0 && (
                    <div>
                      <Label>Values for {currentAttribute.name}</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {currentAttribute.values.map((value, index) => (
                          <div
                            key={index}
                            className="bg-slate-800 px-3 py-1 rounded-full text-sm"
                          >
                            {value.value}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                <Button
                  onClick={handleAddAttribute}
                  disabled={
                    !currentAttribute.name ||
                    !currentAttribute.values ||
                    currentAttribute.values.length === 0
                  }
                >
                  Add Attribute
                </Button>

                {attributes.length > 0 && (
                  <div className="space-y-2">
                    <Label>Defined Attributes</Label>
                    {attributes.map((attr, index) => (
                      <div
                        key={index}
                        className="border border-slate-700 rounded-md p-3"
                      >
                        <div className="font-medium">{attr.name}</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {attr.values.map((value, vIndex) => (
                            <div
                              key={vIndex}
                              className="bg-slate-800 px-3 py-1 rounded-full text-sm"
                            >
                              {value.value}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button
                onClick={() => setCurrentStep(7)}
                disabled={attributes.length === 0}
              >
                Next: Add Metadata (Optional)
              </Button>
            </div>
          </>
        );

      case 7: // Metadata Dialog
        return (
          <>
            <DialogHeader>
              <DialogTitle>Add Optional Metadata</DialogTitle>
              <DialogDescription>
                Add additional information about the product.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="material">Material</Label>
                  <Input
                    id="material"
                    placeholder="e.g., Aluminum, Cotton"
                    value={metadata.material || ""}
                    onChange={(e) =>
                      setMetadata({ ...metadata, material: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="seasonality">Seasonality</Label>
                  <Input
                    id="seasonality"
                    placeholder="e.g., Summer, All Seasons"
                    value={metadata.seasonality || ""}
                    onChange={(e) =>
                      setMetadata({ ...metadata, seasonality: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="packaging">Packaging</Label>
                  <Input
                    id="packaging"
                    placeholder="e.g., Box, Bag"
                    value={metadata.packaging || ""}
                    onChange={(e) =>
                      setMetadata({ ...metadata, packaging: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="compliance">Compliance</Label>
                  <Input
                    id="compliance"
                    placeholder="e.g., CE, RoHS"
                    value={metadata.compliance || ""}
                    onChange={(e) =>
                      setMetadata({ ...metadata, compliance: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="targetMarket">Target Market</Label>
                  <Input
                    id="targetMarket"
                    placeholder="e.g., Premium Users, Teens"
                    value={metadata.targetMarket || ""}
                    onChange={(e) =>
                      setMetadata({ ...metadata, targetMarket: e.target.value })
                    }
                  />
                </div>
              </div>

              <DialogFooter>
                <Button onClick={handleCompleteProductDefinition}>
                  Complete Product Definition
                </Button>
              </DialogFooter>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Product Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              className="bg-cyan-600 hover:bg-cyan-700"
              onClick={() => {
                resetProductDefinition();
                setIsDialogOpen(true);
              }}
            >
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
              Add New Product
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            {renderDialogContent()}
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            5-Step Filtration
          </h3>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <Label>1. Product Family</Label>
              <Select
                value={filterProductFamily}
                onValueChange={setFilterProductFamily}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Family" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Families</SelectItem>
                  {productFamilies.map((pf) => (
                    <SelectItem key={pf.id} value={pf.id}>
                      {pf.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>2. Brand</Label>
              <Select value={filterBrand} onValueChange={setFilterBrand}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  {brands
                    .filter(
                      (b) =>
                        !filterProductFamily ||
                        b.productFamilyId === filterProductFamily,
                    )
                    .map((brand) => (
                      <SelectItem key={brand.id} value={brand.id}>
                        {brand.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>3. Category</Label>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories
                    .filter(
                      (c) =>
                        !filterProductFamily ||
                        c.productFamilyId === filterProductFamily,
                    )
                    .map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>4. Subcategory</Label>
              <Select
                value={filterSubcategory}
                onValueChange={setFilterSubcategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Subcategory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subcategories</SelectItem>
                  {subcategories
                    .filter(
                      (sc) =>
                        !filterCategory || sc.categoryId === filterCategory,
                    )
                    .map((subcategory) => (
                      <SelectItem key={subcategory.id} value={subcategory.id}>
                        {subcategory.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>5. Product Line</Label>
              <Select
                value={filterProductLine}
                onValueChange={setFilterProductLine}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Product Line" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Product Lines</SelectItem>
                  {productLines
                    .filter(
                      (pl) =>
                        !filterSubcategory ||
                        pl.subcategoryId === filterSubcategory,
                    )
                    .map((productLine) => (
                      <SelectItem key={productLine.id} value={productLine.id}>
                        {productLine.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4">
            <Button variant="outline" onClick={resetFilters}>
              Reset Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-800 bg-slate-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">
            Product Variants ({filteredVariants.length})
          </h3>
          <div className="rounded-md border border-slate-800 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-800">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Product Family
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Brand
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Subcategory
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Product Line/Model
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Variants/Attributes
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    SKU
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Metadata
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredVariants.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-800/50">
                    <td className="px-4 py-3 text-slate-300">
                      {item.product.productFamily.name}
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {item.product.brand?.name || "-"}
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {item.product.category.name}
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {item.product.subcategory.name}
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {item.product.productLine?.name || "-"}
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {getAttributeValueText(item.product, item.variant)}
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {item.variant.sku}
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {item.variant.metadata
                        ? Object.entries(item.variant.metadata)
                            .filter(([_, value]) => value)
                            .map(([key, value]) => `${key}: ${value}`)
                            .join(", ")
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDefinitionComponent;
