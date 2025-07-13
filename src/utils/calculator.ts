import {
  CalculationResult,
  CraftingSelection,
  MaterialCost,
  Recipe,
} from "../types";
import { baseMaterials, recipes } from "../data/recipes";

const IGNORE_RECIPES = [
  "quartz_enriched_iron_from_block",
  "quartz_enriched_iron_block",
];

export class RefinedStorageCalculator {
  private recipeMap: Map<string, Recipe>;

  constructor() {
    this.recipeMap = new Map();
    recipes.forEach((recipe) => {
      if (IGNORE_RECIPES.includes(recipe.id)) {
        console.warn("Ignoring recipe to avoid circular dependency", recipe.id);
        return;
      }

      this.recipeMap.set(recipe.output.item, recipe);
    });
  }

  calculate(selection: CraftingSelection): CalculationResult {
    const totalMaterials: MaterialCost = {};
    const breakdown: CalculationResult["breakdown"] = {};

    for (const [itemId, quantity] of Object.entries(selection)) {
      if (quantity > 0) {
        const itemMaterials = this.calculateItemMaterials(itemId, quantity);

        breakdown[itemId] = {
          quantity,
          materials: itemMaterials,
        };

        this.addMaterials(totalMaterials, itemMaterials);
      }
    }

    return {
      totalMaterials,
      breakdown,
    };
  }

  /**
   * Calculates recursively all materials needed for a specific item
   */
  private calculateItemMaterials(
    itemId: string,
    quantity: number,
    processingStack: Set<string> = new Set(),
  ): MaterialCost {
    const materials: MaterialCost = {};

    // Check for circular dependency
    if (processingStack.has(itemId)) {
      console.warn(`Circular dependency detected for item: ${itemId}`);
      materials[itemId] = quantity;
      return materials;
    }

    if (baseMaterials.includes(itemId)) {
      materials[itemId] = quantity;
      return materials;
    }

    const recipe = this.recipeMap.get(itemId);
    if (!recipe) {
      materials[itemId] = quantity;
      return materials;
    }

    // Add current item to processing stack
    processingStack.add(itemId);

    const recipesNeeded = Math.ceil(quantity / recipe.output.quantity);

    for (const ingredient of recipe.ingredients) {
      const neededQuantity = ingredient.quantity * recipesNeeded;

      const ingredientMaterials = this.calculateItemMaterials(
        ingredient.item,
        neededQuantity,
        processingStack,
      );

      this.addMaterials(materials, ingredientMaterials);
    }

    // Remove current item from processing stack
    processingStack.delete(itemId);

    return materials;
  }

  /**
   * Adds materials to the total cost object
   */
  private addMaterials(target: MaterialCost, source: MaterialCost): void {
    for (const [material, quantity] of Object.entries(source)) {
      target[material] = (target[material] || 0) + quantity;
    }
  }

  /**
   * Gets all recipes grouped by category
   */
  getRecipesByCategory(): { [category: string]: Recipe[] } {
    const categories: { [category: string]: Recipe[] } = {};

    recipes.forEach((recipe) => {
      if (!categories[recipe.category]) {
        categories[recipe.category] = [];
      }
      categories[recipe.category].push(recipe);
    });

    return categories;
  }

  /**
   * Searches for recipes by name
   */
  searchRecipes(query: string): Recipe[] {
    const lowerQuery = query.toLowerCase();
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(lowerQuery) ||
      recipe.category.toLowerCase().includes(lowerQuery)
    );
  }
}
