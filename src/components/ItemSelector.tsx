import React, { useState, useMemo } from 'react';
import { TreePine } from 'lucide-react';
import { Recipe, CraftingSelection } from '../types';
import { RefinedStorageCalculator } from '../utils/calculator';
import { getMaterialIcon, getCategoryIcon } from '../data/icons';
import { CraftingTree } from './CraftingTree';
import { useLanguage } from '../contexts/LanguageContext';

interface ItemSelectorProps {
  calculator: RefinedStorageCalculator;
  selection: CraftingSelection;
  onSelectionChange: (selection: CraftingSelection) => void;
}

export function ItemSelector({ calculator, selection, onSelectionChange }: ItemSelectorProps) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showCraftingTree, setShowCraftingTree] = useState<{ itemId: string; quantity: number } | null>(null);

  const recipesByCategory = useMemo(() => calculator.getRecipesByCategory(), [calculator]);
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
    setShowCraftingTree({ itemId, quantity });
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-6">{t.selectItems}</h2>

      {/* Busca e Filtros */}
      <div className="mb-6 space-y-4">
        <div>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
          >
            <option value="">{t.allCategories}</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {t.categories[category as keyof typeof t.categories] || category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Lista de Items */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center space-x-3 flex-1">
              {/* Ícone do Categoria */}
              <div className="flex-shrink-0">
                {getCategoryIcon(recipe.category)}
              </div>

              {/* Ícone do Item */}
              <div className="flex-shrink-0">
                {getMaterialIcon(recipe.output.item)}
              </div>

              <div className="flex-1">
                <h3 className="text-white font-medium">{recipe.name}</h3>
                <p className="text-gray-400 text-sm">{recipe.category}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Botão Árvore de Crafting */}
              <button
                onClick={() => openCraftingTree(recipe.output.item)}
                className="w-8 h-8 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center transition-colors"
                title={t.viewCraftingTree}
              >
                <TreePine className="w-4 h-4" />
              </button>

              <button
                onClick={() => updateQuantity(recipe.output.item, Math.max(0, (selection[recipe.output.item] || 0) - 1))}
                className="w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center justify-center transition-colors"
                disabled={!selection[recipe.output.item]}
              >
                -
              </button>

              <input
                type="number"
                min="0"
                value={selection[recipe.output.item] || 0}
                onChange={(e) => updateQuantity(recipe.output.item, parseInt(e.target.value) || 0)}
                className="w-16 px-2 py-1 bg-gray-700 text-white text-center rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
              />

              <button
                onClick={() => updateQuantity(recipe.output.item, (selection[recipe.output.item] || 0) + 1)}
                className="w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition-colors"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Items Selecionados */}
      {Object.keys(selection).length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">{t.selectedItems}</h3>
          <div className="space-y-2">
            {Object.entries(selection).map(([itemId, quantity]) => {
              const recipe = filteredRecipes.find(r => r.output.item === itemId) ||
                Object.values(recipesByCategory).flat().find(r => r.output.item === itemId);
              return (
                <div key={itemId} className="flex items-center justify-between text-sm bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getMaterialIcon(itemId)}
                    <span className="text-gray-300">
                      {t.materials[itemId as keyof typeof t.materials] || recipe?.name || itemId}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-medium">{quantity}x</span>
                    <button
                      onClick={() => openCraftingTree(itemId)}
                      className="p-1 text-purple-400 hover:text-purple-300 transition-colors"
                      title={t.viewCraftingTree}
                    >
                      <TreePine className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => onSelectionChange({})}
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            {t.clearSelection}
          </button>
        </div>
      )}

      {/* Modal da Árvore de Crafting */}
      {showCraftingTree && (
        <CraftingTree
          itemId={showCraftingTree.itemId}
          quantity={showCraftingTree.quantity}
          onClose={() => setShowCraftingTree(null)}
        />
      )}
    </div>
  );
} 