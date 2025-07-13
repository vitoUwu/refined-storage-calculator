import React, { useState } from 'react';
import { Package } from 'lucide-react';
import { CalculationResult } from '../types';
import { baseMaterials, recipes } from '../data/recipes';
import { getMaterialIcon, getCraftingMethodIcon } from '../data/icons';
import { useLanguage } from '../contexts/LanguageContext';
import { formatQuantity } from '../utils/formatUtils';

interface ResultsDisplayProps {
  results: CalculationResult | null;
}

export function ResultsDisplay({ results }: ResultsDisplayProps) {
  const { t, showAsPacks, setShowAsPacks, language } = useLanguage();
  const [showBreakdown, setShowBreakdown] = useState(false);

  if (!results || Object.keys(results.totalMaterials).length === 0) {
    return (
      <div className="bg-gray-900 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">{t.requiredMaterials}</h2>
        <p className="text-gray-400">{t.selectItemsToSee}</p>
      </div>
    );
  }

  const baseMats: [string, number][] = [];
  const intermediateMats: [string, number][] = [];

  Object.entries(results.totalMaterials).forEach(([material, quantity]) => {
    if (baseMaterials.includes(material)) {
      baseMats.push([material, quantity]);
    } else {
      intermediateMats.push([material, quantity]);
    }
  });

  baseMats.sort((a, b) => b[1] - a[1]);
  intermediateMats.sort((a, b) => b[1] - a[1]);

  const formatMaterialName = (materialId: string) => {
    return t.materials[materialId as keyof typeof t.materials] || materialId.replace(/_/g, ' ');
  };

  const formatDisplayQuantity = (num: number) => {
    return formatQuantity(num, showAsPacks, language);
  };

  const getCraftingMethod = (materialId: string) => {
    const recipe = recipes.find(r => r.output.item === materialId);
    return recipe?.craftingMethod || 'none';
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">{t.requiredMaterials}</h2>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Package className="w-4 h-4 text-gray-400" />
            <button
              onClick={() => setShowAsPacks(!showAsPacks)}
              className={`px-3 py-1 rounded text-sm transition-colors ${showAsPacks
                ? 'bg-purple-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
            >
              {showAsPacks ? t.showAsPacks : t.showAsQuantity}
            </button>
          </div>
          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
          >
            {showBreakdown ? t.hideDetails : t.showDetails}
          </button>
        </div>
      </div>

      {/* Materiais Base */}
      {baseMats.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center">
            <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
            {t.baseMaterials}
          </h3>
          <div className="grid gap-3">
            {baseMats.map(([material, quantity]) => (
              <div key={material} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getMaterialIcon(material)}
                  <span className="text-white font-medium">{formatMaterialName(material)}</span>
                </div>
                <span className="text-green-400 font-bold text-lg">{formatDisplayQuantity(quantity)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Materiais Intermediários */}
      {intermediateMats.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center">
            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
            {t.intermediateMaterials}
          </h3>
          <div className="grid gap-3">
            {intermediateMats.map(([material, quantity]) => (
              <div key={material} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getMaterialIcon(material)}
                  <div className="flex flex-col">
                    <span className="text-white font-medium">{formatMaterialName(material)}</span>
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      {getCraftingMethodIcon(getCraftingMethod(material))}
                      <span>{t.craftingMethods[getCraftingMethod(material) as keyof typeof t.craftingMethods]}</span>
                    </div>
                  </div>
                </div>
                <span className="text-yellow-400 font-bold text-lg">{formatDisplayQuantity(quantity)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Breakdown Detalhado */}
      {showBreakdown && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">{t.breakdownByItem}</h3>
          <div className="space-y-4">
            {Object.entries(results.breakdown).map(([itemId, itemData]) => (
              <div key={itemId} className="bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-3">
                    {getMaterialIcon(itemId)}
                    <h4 className="text-white font-medium">
                      {formatMaterialName(itemId)} ({itemData.quantity}x)
                    </h4>
                  </div>
                </div>

                <div className="space-y-2 ml-4">
                  {Object.entries(itemData.materials)
                    .sort((a, b) => b[1] - a[1])
                    .map(([material, quantity]) => (
                      <div key={material} className="flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-2">
                          {getMaterialIcon(material)}
                          <span className="text-gray-300">{formatMaterialName(material)}</span>
                        </div>
                        <span className={`font-medium ${baseMaterials.includes(material) ? 'text-green-400' : 'text-yellow-400'
                          }`}>
                          {formatDisplayQuantity(quantity)}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resumo Total */}
      <div className="mt-6 pt-6 border-t border-gray-700 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-2">{t.totalSummary}</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">{t.baseMaterialTypes}</span>
            <span className="text-green-400 font-bold ml-2">{baseMats.length}</span>
          </div>
          <div>
            <span className="text-gray-400">{t.intermediateMaterialTypes}</span>
            <span className="text-yellow-400 font-bold ml-2">{intermediateMats.length}</span>
          </div>
          <div>
            <span className="text-gray-400">{t.totalBaseItems}</span>
            <span className="text-green-400 font-bold ml-2">
              {formatDisplayQuantity(baseMats.reduce((sum, [, qty]) => sum + qty, 0))}
            </span>
          </div>
          <div>
            <span className="text-gray-400">{t.totalIntermediateItems}</span>
            <span className="text-yellow-400 font-bold ml-2">
              {formatDisplayQuantity(intermediateMats.reduce((sum, [, qty]) => sum + qty, 0))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 