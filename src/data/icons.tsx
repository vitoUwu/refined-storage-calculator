import React from "react";
import {
  Box,
  Circle,
  CircuitBoard,
  Container,
  Cpu,
  Database,
  Eye,
  Factory,
  Flame,
  Gem,
  Grid3X3,
  Hammer,
  HardDrive,
  Monitor,
  MoreHorizontal,
  Mountain,
  Package,
  Pickaxe,
  Settings,
  Sparkles,
  Zap,
} from "lucide-react";

export const materialIcons: { [key: string]: React.ReactNode } = {
  "iron_ingot": <Pickaxe className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "gold_ingot": <Gem className="w-5 h-5 text-dungeons-orange-2" />,
  "diamond": <Gem className="w-5 h-5 text-vanilla-blue-3" />,
  "nether_quartz": <Mountain className="w-5 h-5 text-realms-deep-blue-3" />,
  "redstone": <Zap className="w-5 h-5 text-dungeons-red-3" />,
  "ender_pearl": <Sparkles className="w-5 h-5 text-vanilla-blue-1" />,
  "chest": <Package className="w-5 h-5 text-vanilla-brown-2" />,
  "glass": <Eye className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "crafting_table": <Grid3X3 className="w-5 h-5 text-vanilla-brown-3" />,

  "quartz_enriched_iron":
  <Hammer className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "silicon": <CircuitBoard className="w-5 h-5 text-vanilla-grey-5" />,

  "raw_basic_processor": <Cpu className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "raw_improved_processor": <Cpu className="w-5 h-5 text-dungeons-orange-2" />,
  "raw_advanced_processor": <Cpu className="w-5 h-5 text-vanilla-blue-2" />,

  "basic_processor": <Cpu className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "improved_processor": <Cpu className="w-5 h-5 text-dungeons-orange-2" />,
  "advanced_processor": <Cpu className="w-5 h-5 text-vanilla-blue-2" />,

  "storage_housing": <Container className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "machine_casing": <Box className="w-5 h-5 text-vanilla-coldgrey-1" />,

  "1k_storage_part": <Database className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "4k_storage_part": <Database className="w-5 h-5 text-vanilla-blue-2" />,
  "16k_storage_part": <Database className="w-5 h-5 text-vanilla-blue-2" />,
  "64k_storage_part": <Database className="w-5 h-5 text-vanilla-blue-2" />,

  "1k_storage_disk": <HardDrive className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "4k_storage_disk": <HardDrive className="w-5 h-5 text-vanilla-blue-2" />,
  "16k_storage_disk": <HardDrive className="w-5 h-5 text-vanilla-blue-2" />,
  "64k_storage_disk": <HardDrive className="w-5 h-5 text-vanilla-blue-2" />,

  "controller": <Settings className="w-5 h-5 text-vanilla-blue-2" />,
  "disk_drive": <Factory className="w-5 h-5 text-vanilla-coldgrey-1" />,

  "grid": <Monitor className="w-5 h-5 text-vanilla-blue-2" />,
  "crafting_grid": <Grid3X3 className="w-5 h-5 text-vanilla-blue-2" />,
};

export const categoryIcons: { [key: string]: React.ReactNode } = {
  "Materiais Base": <Mountain className="w-5 h-5" />,
  "Processadores": <Cpu className="w-5 h-5" />,
  "Componentes": <Box className="w-5 h-5" />,
  "Storage Parts": <Database className="w-5 h-5" />,
  "Storage Disks": <HardDrive className="w-5 h-5" />,
  "Blocos Principais": <Settings className="w-5 h-5" />,
  "Interface": <Monitor className="w-5 h-5" />,
};

export const getMaterialIcon = (materialId: string): React.ReactNode => {
  return materialIcons[materialId] || (
    <MoreHorizontal className="w-5 h-5 text-gray-400" />
  );
};

export const getCategoryIcon = (category: string): React.ReactNode => {
  return categoryIcons[category] || <Package className="w-5 h-5" />;
};

export const craftingMethodIcons: { [key: string]: React.ReactNode } = {
  "crafting_table": <Grid3X3 className="w-4 h-4 text-amber-600" />,
  "furnace": <Flame className="w-4 h-4 text-orange-500" />,
  "solderer": <Zap className="w-4 h-4 text-blue-500" />,
  "none": <Circle className="w-4 h-4 text-gray-400" />,
};

export const getCraftingMethodIcon = (method: string): React.ReactNode => {
  return craftingMethodIcons[method] || (
    <Circle className="w-4 h-4 text-gray-400" />
  );
};

export const getCraftingMethodName = (method: string): string => {
  const names: { [key: string]: string } = {
    "crafting_table": "Mesa de Trabalho",
    "furnace": "Fornalha",
    "solderer": "Solderer",
    "none": "Material Base",
  };
  return names[method] || method;
};
