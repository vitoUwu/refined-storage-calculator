import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getCraftingMethodIcon, getMaterialIcon } from "../data/icons";
import { baseMaterials, recipes } from "../data/recipes";
import { CalculationResult } from "../types";
import { formatQuantity } from "../utils/formatUtils";
import { Button, Card, CardContent, CardHeader, Switch } from "./ui";
import ListItem from "./ui/ListItem";

interface ResultsDisplayProps {
  results: CalculationResult | null;
}

export function ResultsDisplay({ results }: ResultsDisplayProps) {
  const { t, showAsPacks, setShowAsPacks, language } = useLanguage();
  const [showBreakdown, setShowBreakdown] = useState(false);

  if (!results || Object.keys(results.totalMaterials).length === 0) {
    return (
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-medium text-white">
            {t.requiredMaterials}
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">{t.selectItemsToSee}</p>
        </CardContent>
      </Card>
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
    return t.materials[materialId as keyof typeof t.materials] ||
      materialId.replace(/_/g, " ");
  };

  const formatDisplayQuantity = (num: number) => {
    return formatQuantity(num, showAsPacks, language);
  };

  const getCraftingMethod = (materialId: string) => {
    const recipe = recipes.find((r) => r.output.item === materialId);
    return recipe?.craftingMethod || "none";
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium text-white">
            {t.requiredMaterials}
          </h2>
          <div className="flex flex-col items-end">
            <Button
              onClick={() => setShowBreakdown(!showBreakdown)}
              variant="primary"
              size="sm"
              className="shrink-0 w-full"
            >
              {showBreakdown ? t.hideDetails : t.showDetails}
            </Button>
            <Switch
              checked={showAsPacks}
              onChange={setShowAsPacks}
              label={t.showAsPacks}
              size="sm"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {baseMats.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-green-400 mb-4 flex items-center">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
              {t.baseMaterials}
            </h3>
            <ul className="grid">
              {baseMats.map(([material, quantity]) => (
                <ListItem key={material}>
                  <div className="flex items-center space-x-3">
                    {getMaterialIcon(material)}
                    <span className="text-white font-medium">
                      {formatMaterialName(material)}
                    </span>
                  </div>
                  <span className="font-medium text-lg">
                    {formatDisplayQuantity(quantity)}
                  </span>
                </ListItem>
              ))}
            </ul>
          </div>
        )}

        {intermediateMats.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-yellow-400 mb-4 flex items-center">
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
              {t.intermediateMaterials}
            </h3>
            <ul className="grid">
              {intermediateMats.map(([material, quantity]) => (
                <ListItem key={material}>
                  <div className="flex items-center space-x-3">
                    {getMaterialIcon(material)}
                    <div className="flex flex-col">
                      <span className="text-white font-medium">
                        {formatMaterialName(material)}
                      </span>
                      <div className="flex items-center space-x-1 text-xs">
                        {getCraftingMethodIcon(getCraftingMethod(material))}
                        <span>
                          {t.craftingMethods[
                            getCraftingMethod(
                              material,
                            ) as keyof typeof t.craftingMethods
                          ]}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="font-medium text-lg">
                    {formatDisplayQuantity(quantity)}
                  </span>
                </ListItem>
              ))}
            </ul>
          </div>
        )}

        {showBreakdown && (
          <div className="mt-6 pt-6">
            <h3 className="text-lg font-medium text-white mb-4">
              {t.breakdownByItem}
            </h3>
            <ul>
              {Object.entries(results.breakdown).map(([itemId, itemData]) => (
                <ListItem
                  className="h-auto py-3 flex-col items-start"
                  key={itemId}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center space-x-3">
                      {getMaterialIcon(itemId)}
                      <h4 className="text-white font-medium">
                        {formatMaterialName(itemId)} ({itemData.quantity}x)
                      </h4>
                    </div>
                  </div>

                  <div className="pl-4 w-full">
                    {Object.entries(itemData.materials)
                      .sort((a, b) => b[1] - a[1])
                      .map(([material, quantity]) => (
                        <div
                          key={material}
                          className="flex p-1 hover:bg-white/20 justify-between w-full items-center text-sm gap-1"
                        >
                          <div className="flex items-center space-x-2">
                            {getMaterialIcon(material)}
                            <span className="text-gray-300">
                              {formatMaterialName(material)}
                            </span>
                          </div>
                          <span className="font-medium">
                            {formatDisplayQuantity(quantity)}
                          </span>
                        </div>
                      ))}
                  </div>
                </ListItem>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 pt-6 pb-4">
          <h3 className="text-lg font-medium text-white mb-2">
            {t.totalSummary}
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-vanilla-grey-2">{t.baseMaterialTypes}</span>
              <span className="text-vanilla-green-3 font-medium ml-2">
                {baseMats.length}
              </span>
            </div>
            <div>
              <span className="text-vanilla-grey-2">
                {t.intermediateMaterialTypes}
              </span>
              <span className="text-vanilla-yellow-3 font-medium ml-2">
                {intermediateMats.length}
              </span>
            </div>
            <div>
              <span className="text-vanilla-grey-2">{t.totalBaseItems}</span>
              <span className="text-vanilla-green-3 font-medium ml-2">
                {formatDisplayQuantity(
                  baseMats.reduce((sum, [, qty]) => sum + qty, 0),
                )}
              </span>
            </div>
            <div>
              <span className="text-vanilla-grey-2">
                {t.totalIntermediateItems}
              </span>
              <span className="text-dungeons-orange-2 font-medium ml-2">
                {formatDisplayQuantity(
                  intermediateMats.reduce((sum, [, qty]) => sum + qty, 0),
                )}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
