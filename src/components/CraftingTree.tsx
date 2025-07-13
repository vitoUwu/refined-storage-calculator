import { cn } from "@/utils/cn";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getCraftingMethodIcon, getMaterialIcon } from "../data/icons";
import { baseMaterials, recipes } from "../data/recipes";
import { Recipe } from "../types";
import { formatQuantity } from "../utils/formatUtils";
import { Button, Card, ListItem, Modal, ModalContent } from "./ui";

interface CraftingTreeProps {
  itemId: string;
  quantity?: number;
  onClose: () => void;
  isFullPage?: boolean;
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

export function CraftingTree(
  { itemId, quantity = 1, onClose, isFullPage = false }: CraftingTreeProps,
) {
  const { t, showAsPacks, language } = useLanguage();
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const buildTree = (
    itemId: string,
    quantity: number,
    level: number = 0,
  ): TreeNode => {
    const itemName = t.materials[itemId as keyof typeof t.materials] ||
      itemId.replace(/_/g, " ");
    const isBaseMaterial = baseMaterials.includes(itemId);
    const recipe = recipes.find((r) => r.output.item === itemId);

    const node: TreeNode = {
      itemId,
      itemName,
      quantity,
      isBaseMaterial,
      recipe,
      children: [],
      level,
    };

    if (recipe && !isBaseMaterial) {
      const recipesNeeded = Math.ceil(quantity / recipe.output.quantity);

      recipe.ingredients.forEach((ingredient) => {
        const neededQuantity = ingredient.quantity * recipesNeeded;
        node.children.push(
          buildTree(ingredient.item, neededQuantity, level + 1),
        );
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

  const renderNode = (node: TreeNode, parentPath: string = "") => {
    const nodePath = `${parentPath}-${node.itemId}-${node.level}`;
    const isExpanded = expandedNodes.has(nodePath);
    const hasChildren = node.children.length > 0;

    return (
      <ul
        key={nodePath}
        className="mb-2 ml-4"
      >
        <ListItem
          className={cn(
            "transition-all duration-200 h-auto justify-between flex",
            hasChildren ? "cursor-pointer hover:brightness-110" : "",
          )}
        >
          <div
            className="flex items-center space-x-3 p-3 w-full"
            onClick={hasChildren ? () => toggleExpanded(nodePath) : undefined}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              {hasChildren
                ? (
                  isExpanded
                    ? <ChevronDown className="w-4 h-4 text-vanilla-grey-2" />
                    : <ChevronRight className="w-4 h-4 text-vanilla-grey-2" />
                )
                : <ArrowRight className="w-4 h-4 text-transparent" />}
            </div>

            <div className="flex-shrink-0">
              {getMaterialIcon(node.itemId)}
            </div>

            <div className="flex-1">
              <span
                className={cn(
                  "font-medium leading-none",
                  node.isBaseMaterial ? "text-vanilla-green-3" : "text-white",
                )}
              >
                {node.itemName}
              </span>

              {node.recipe && (
                <div className="flex items-center space-x-2 text-xs text-vanilla-grey-2 mt-1">
                  <span>
                    {node.isBaseMaterial
                      ? "Material Base"
                      : `Receita: ${node.recipe.category}`}
                  </span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    {getCraftingMethodIcon(node.recipe.craftingMethod)}
                    <span>
                      {t.craftingMethods[
                        node.recipe
                          .craftingMethod as keyof typeof t.craftingMethods
                      ]}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "font-medium leading-none",
                )}
              >
                {node.quantity}x
              </span>
              <Button
                variant={node.isBaseMaterial ? "success" : "realms"}
                className="size-8 p-0"
              >
                <div className="size-1.5 rounded-full bg-white" />
              </Button>
            </div>
          </div>
        </ListItem>

        {hasChildren && isExpanded && (
          <li className="ml-4 mt-2 border-l-2 border-core-grey-3 pl-2 list-none">
            {node.children.map((child) => renderNode(child, nodePath))}
          </li>
        )}
      </ul>
    );
  };

  useEffect(() => {
    const firstLevelNodes = new Set<string>();
    const addFirstLevel = (node: TreeNode, path: string = "") => {
      const nodePath = `${path}-${node.itemId}-${node.level}`;
      if (node.level <= 1) {
        firstLevelNodes.add(nodePath);
      }
      node.children.forEach((child) => addFirstLevel(child, nodePath));
    };
    addFirstLevel(tree);
    setExpandedNodes(firstLevelNodes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  const content = (
    <>
      <div className="p-4">
        <div className="flex items-center space-x-3">
          {getMaterialIcon(itemId)}
          <div>
            <h3 className="text-lg font-medium text-white">
              {t.materials[itemId as keyof typeof t.materials] || itemId}
            </h3>
            <p className="text-vanilla-grey-2">
              {formatQuantity(quantity, showAsPacks, language)}
            </p>
          </div>
        </div>
      </div>

      <ListItem className="p-1 m-4 w-auto h-auto">
        <div className="p-3">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Button variant="success" size="sm" className="size-8 p-0">
                ●
              </Button>
              <span className="text-vanilla-grey-2">{t.baseMaterials}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="realms" size="sm" className="size-8 p-0">
                ●
              </Button>
              <span className="text-vanilla-grey-2">
                {t.intermediateMaterials}
              </span>
            </div>
            <div className="text-vanilla-grey-2">
              {t.clickToExpand}
            </div>
          </div>
        </div>
      </ListItem>

      <div
        className={`p-4 overflow-y-auto ${
          isFullPage ? "max-h-[calc(100vh-300px)]" : "max-h-[60vh]"
        }`}
      >
        {renderNode(tree)}
      </div>

      <ListItem className="m-4 mt-0 w-auto h-auto">
        <div className="p-3 text-center">
          <p className="text-sm">
            {t.craftingOrder}
          </p>
        </div>
      </ListItem>
    </>
  );

  if (isFullPage) {
    return (
      <Card className="p-3">
        {content}
      </Card>
    );
  }

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      size="xl"
      title={t.craftingTree}
    >
      <ModalContent className="p-0">
        {content}
      </ModalContent>
    </Modal>
  );
}
