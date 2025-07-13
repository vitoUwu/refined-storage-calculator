import { ListTree, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { getCategoryIcon, getMaterialIcon } from "../data/icons";
import { CraftingSelection, Recipe } from "../types";
import { RefinedStorageCalculator } from "../utils/calculator";
import { Button, Card, CardContent, CardHeader, Input, ListItem } from "./ui";
import { Select } from "./ui/Select";

interface ItemSelectorProps {
  calculator: RefinedStorageCalculator;
  selection: CraftingSelection;
  onSelectionChange: (selection: CraftingSelection) => void;
}

export function ItemSelector(
  { calculator, selection, onSelectionChange }: ItemSelectorProps,
) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const recipesByCategory = useMemo(() => calculator.getRecipesByCategory(), [
    calculator,
  ]);
  const categories = Object.keys(recipesByCategory);

  const filteredRecipes = useMemo(() => {
    let recipes: Recipe[] = [];

    if (selectedCategory) {
      recipes = recipesByCategory[selectedCategory] || [];
    } else {
      recipes = Object.values(recipesByCategory).flat();
    }

    if (searchQuery) {
      recipes = calculator.searchRecipes(searchQuery);
    }

    return recipes;
  }, [searchQuery, selectedCategory, calculator, recipesByCategory]);

  const updateQuantity = (itemId: string, quantity: number) => {
    const newSelection = { ...selection };
    if (quantity <= 0) {
      delete newSelection[itemId];
    } else {
      newSelection[itemId] = quantity;
    }
    onSelectionChange(newSelection);
  };

  const openCraftingTree = (itemId: string) => {
    const quantity = selection[itemId] || 1;
    navigate(`/crafting-tree?item=${itemId}&quantity=${quantity}`);
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-medium text-white">{t.selectItems}</h2>
      </CardHeader>
      <CardContent>
        <div className="mb-6 space-y-4">
          <Input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<Search className="w-4 h-4" />}
            className="w-full"
          />

          <div>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full"
            >
              <option value="">{t.allCategories}</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {t.categories[category as keyof typeof t.categories] ||
                    category}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <ul className="max-h-96 overflow-y-auto">
          {filteredRecipes.map((recipe) => (
            <ListItem
              key={recipe.id}
            >
              <div className="flex items-center space-x-3 flex-1">
                <div className="flex-shrink-0">
                  {getCategoryIcon(recipe.category)}
                </div>
                <div className="flex-shrink-0">
                  {getMaterialIcon(recipe.output.item)}
                </div>

                <div className="flex-1">
                  <h3 className="text-core-grey-1 leading-none font-medium">
                    {recipe.name}
                  </h3>
                  <p className="text-core-grey-2 text-sm leading-none">
                    {recipe.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  onClick={() => openCraftingTree(recipe.output.item)}
                  variant="secondary"
                  size="sm"
                  className="w-8 h-8 p-0"
                  title={t.viewCraftingTree}
                >
                  <ListTree className="w-4 h-4" />
                </Button>

                <Button
                  onClick={() =>
                    updateQuantity(
                      recipe.output.item,
                      Math.max(0, (selection[recipe.output.item] || 0) - 1),
                    )}
                  variant="danger"
                  size="sm"
                  className="w-8 h-8 p-0"
                  disabled={!selection[recipe.output.item]}
                >
                  -
                </Button>

                <Input
                  type="number"
                  min={0}
                  value={selection[recipe.output.item] || 0}
                  onChange={(e) =>
                    updateQuantity(
                      recipe.output.item,
                      parseInt(e.target.value) || 0,
                    )}
                  className="w-16 h-8 text-center"
                />

                <Button
                  onClick={() =>
                    updateQuantity(
                      recipe.output.item,
                      (selection[recipe.output.item] || 0) + 1,
                    )}
                  variant="success"
                  size="sm"
                  className="w-8 h-8 p-0"
                >
                  +
                </Button>
              </div>
            </ListItem>
          ))}
        </ul>

        {Object.keys(selection).length > 0 && (
          <div className="mt-6 pt-6">
            <h3 className="text-lg font-medium text-white mb-3">
              {t.selectedItems}
            </h3>
            <ul>
              {Object.entries(selection).map(([itemId, quantity]) => {
                const recipe = filteredRecipes.find((r) =>
                  r.output.item === itemId
                ) ||
                  Object.values(recipesByCategory).flat().find((r) =>
                    r.output.item === itemId
                  );
                return (
                  <ListItem key={itemId}>
                    <div className="flex items-center space-x-3">
                      {getMaterialIcon(itemId)}
                      <span>
                        {t.materials[itemId as keyof typeof t.materials] ||
                          recipe?.name || itemId}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium">
                        {quantity}x
                      </span>
                      <Button
                        onClick={() => openCraftingTree(itemId)}
                        variant="realms"
                        size="sm"
                        className="w-8 h-8 p-0"
                        title={t.viewCraftingTree}
                      >
                        <ListTree className="w-4 h-4" />
                      </Button>
                    </div>
                  </ListItem>
                );
              })}
            </ul>

            <Button
              onClick={() => onSelectionChange({})}
              variant="danger"
              size="sm"
              className="mt-4"
            >
              {t.clearSelection}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
