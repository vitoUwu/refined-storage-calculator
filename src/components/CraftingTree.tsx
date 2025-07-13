import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { Recipe } from '../types';
import { recipes, baseMaterials } from '../data/recipes';
import { getMaterialIcon, getCraftingMethodIcon } from '../data/icons';
import { useLanguage } from '../contexts/LanguageContext';
import { formatQuantity } from '../utils/formatUtils';

interface CraftingTreeProps {
  itemId: string;
  quantity?: number;
  onClose: () => void;
}

interface TreeNode {
  itemId: string;
  itemName: string;
  quantity: number;
  isBaseMaterial: boolean;
  recipe?: Recipe;
  children: TreeNode[];
  level: number;
}

export function CraftingTree({ itemId, quantity = 1, onClose }: CraftingTreeProps) {
  const { t, showAsPacks, language } = useLanguage();
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const buildTree = (itemId: string, quantity: number, level: number = 0): TreeNode => {
    const itemName = t.materials[itemId as keyof typeof t.materials] || itemId.replace(/_/g, ' ');
    const isBaseMaterial = baseMaterials.includes(itemId);
    const recipe = recipes.find(r => r.output.item === itemId);

    const node: TreeNode = {
      itemId,
      itemName,
      quantity,
      isBaseMaterial,
      recipe,
      children: [],
      level
    };

    if (recipe && !isBaseMaterial) {
      const recipesNeeded = Math.ceil(quantity / recipe.output.quantity);

      recipe.ingredients.forEach(ingredient => {
        const neededQuantity = ingredient.quantity * recipesNeeded;
        node.children.push(buildTree(ingredient.item, neededQuantity, level + 1));
      });
    }

    return node;
  };

  const tree = buildTree(itemId, quantity);

  const toggleExpanded = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const renderNode = (node: TreeNode, parentPath: string = '') => {
    const nodePath = `${parentPath}-${node.itemId}-${node.level}`;
    const isExpanded = expandedNodes.has(nodePath);
    const hasChildren = node.children.length > 0;

    return (
      <div key={nodePath} className="mb-2">
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${node.isBaseMaterial
            ? 'bg-green-900/30 border border-green-500/30'
            : 'bg-gray-800 border border-gray-600'
            } ${hasChildren ? 'cursor-pointer hover:bg-gray-700' : ''}`}
          onClick={hasChildren ? () => toggleExpanded(nodePath) : undefined}
          style={{ marginLeft: `${node.level * 20}px` }}
        >
          {/* Indicador de Expansão */}
          <div className="w-5 h-5 flex items-center justify-center">
            {hasChildren ? (
              isExpanded ? (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )
            ) : (
              <ArrowRight className="w-4 h-4 text-transparent" />
            )}
          </div>

          {/* Ícone do Material */}
          <div className="flex-shrink-0">
            {getMaterialIcon(node.itemId)}
          </div>

          {/* Nome e Quantidade */}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className={`font-medium ${node.isBaseMaterial ? 'text-green-300' : 'text-white'}`}>
                {node.itemName}
              </span>
              <span className={`font-bold ${node.isBaseMaterial ? 'text-green-400' : 'text-blue-400'}`}>
                {node.quantity}x
              </span>
            </div>

            {/* Informações da Receita */}
            {node.recipe && (
              <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                <span>
                  {node.isBaseMaterial ? 'Material Base' : `Receita: ${node.recipe.category}`}
                </span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  {getCraftingMethodIcon(node.recipe.craftingMethod)}
                  <span>{t.craftingMethods[node.recipe.craftingMethod as keyof typeof t.craftingMethods]}</span>
                </div>
              </div>
            )}
          </div>

          {/* Indicador de Tipo */}
          <div className={`w-2 h-2 rounded-full ${node.isBaseMaterial ? 'bg-green-400' : 'bg-yellow-400'
            }`} />
        </div>

        {/* Filhos */}
        {hasChildren && isExpanded && (
          <div className="ml-4 mt-2 border-l border-gray-600 pl-2">
            {node.children.map(child => renderNode(child, nodePath))}
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    const firstLevelNodes = new Set<string>();
    const addFirstLevel = (node: TreeNode, path: string = '') => {
      const nodePath = `${path}-${node.itemId}-${node.level}`;
      if (node.level <= 1) {
        firstLevelNodes.add(nodePath);
      }
      node.children.forEach(child => addFirstLevel(child, nodePath));
    };
    addFirstLevel(tree);
    setExpandedNodes(firstLevelNodes);
  }, [itemId]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            {getMaterialIcon(itemId)}
            <div>
              <h2 className="text-2xl font-bold text-white">
                {t.craftingTree}
              </h2>
              <p className="text-gray-400">
                {t.materials[itemId as keyof typeof t.materials] || itemId} ({formatQuantity(quantity, showAsPacks, language)})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Legenda */}
        <div className="p-4 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">{t.baseMaterials}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span className="text-gray-300">{t.intermediateMaterials}</span>
            </div>
            <div className="text-gray-400">
              {t.clickToExpand}
            </div>
          </div>
        </div>

        {/* Árvore */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {renderNode(tree)}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-800 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            {t.craftingOrder}
          </p>
        </div>
      </div>
    </div>
  );
} 