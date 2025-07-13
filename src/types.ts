export interface Recipe {
  id: string;
  name: string;
  category: string;
  ingredients: Ingredient[];
  output: {
    item: string;
    quantity: number;
  };
  craftingMethod: 'crafting_table' | 'furnace' | 'solderer' | 'none';
}

export interface Ingredient {
  item: string;
  quantity: number;
}

export interface MaterialCost {
  [material: string]: number;
}

export interface CalculationResult {
  totalMaterials: MaterialCost;
  breakdown: {
    [itemId: string]: {
      quantity: number;
      materials: MaterialCost;
    };
  };
}

export interface CraftingSelection {
  [itemId: string]: number;
} 