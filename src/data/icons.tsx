import React from 'react';
import {
  Pickaxe, Hammer, Gem, Zap, Database, HardDrive, Cpu, CircuitBoard,
  Box, Container, Monitor, Settings, Factory,
  Mountain, Sparkles, Package, Eye, Grid3X3, MoreHorizontal,
  Flame, Circle
} from 'lucide-react';

export const materialIcons: { [key: string]: React.ReactNode } = {
  'iron_ingot': <Pickaxe className="w-5 h-5" />,
  'gold_ingot': <Gem className="w-5 h-5 text-yellow-400" />,
  'diamond': <Gem className="w-5 h-5 text-blue-400" />,
  'nether_quartz': <Mountain className="w-5 h-5 text-purple-300" />,
  'redstone': <Zap className="w-5 h-5 text-red-400" />,
  'ender_pearl': <Sparkles className="w-5 h-5 text-green-400" />,
  'chest': <Package className="w-5 h-5 text-amber-600" />,
  'glass': <Eye className="w-5 h-5 text-blue-200" />,
  'crafting_table': <Grid3X3 className="w-5 h-5 text-amber-700" />,

  'quartz_enriched_iron': <Hammer className="w-5 h-5 text-gray-300" />,
  'silicon': <CircuitBoard className="w-5 h-5 text-gray-400" />,

  'raw_basic_processor': <Cpu className="w-5 h-5 text-gray-400" />,
  'raw_improved_processor': <Cpu className="w-5 h-5 text-yellow-400" />,
  'raw_advanced_processor': <Cpu className="w-5 h-5 text-blue-400" />,

  'basic_processor': <Cpu className="w-5 h-5 text-green-400" />,
  'improved_processor': <Cpu className="w-5 h-5 text-yellow-400" />,
  'advanced_processor': <Cpu className="w-5 h-5 text-purple-400" />,

  'storage_housing': <Container className="w-5 h-5 text-gray-400" />,
  'machine_casing': <Box className="w-5 h-5 text-gray-500" />,

  '1k_storage_part': <Database className="w-5 h-5 text-green-400" />,
  '4k_storage_part': <Database className="w-5 h-5 text-blue-400" />,
  '16k_storage_part': <Database className="w-5 h-5 text-purple-400" />,
  '64k_storage_part': <Database className="w-5 h-5 text-red-400" />,

  '1k_storage_disk': <HardDrive className="w-5 h-5 text-green-400" />,
  '4k_storage_disk': <HardDrive className="w-5 h-5 text-blue-400" />,
  '16k_storage_disk': <HardDrive className="w-5 h-5 text-purple-400" />,
  '64k_storage_disk': <HardDrive className="w-5 h-5 text-red-400" />,

  'controller': <Settings className="w-5 h-5 text-blue-500" />,
  'disk_drive': <Factory className="w-5 h-5 text-gray-400" />,

  'grid': <Monitor className="w-5 h-5 text-blue-300" />,
  'crafting_grid': <Grid3X3 className="w-5 h-5 text-blue-300" />
};

export const categoryIcons: { [key: string]: React.ReactNode } = {
  'Materiais Base': <Mountain className="w-5 h-5" />,
  'Processadores': <Cpu className="w-5 h-5" />,
  'Componentes': <Box className="w-5 h-5" />,
  'Storage Parts': <Database className="w-5 h-5" />,
  'Storage Disks': <HardDrive className="w-5 h-5" />,
  'Blocos Principais': <Settings className="w-5 h-5" />,
  'Interface': <Monitor className="w-5 h-5" />
};

export const getMaterialIcon = (materialId: string): React.ReactNode => {
  return materialIcons[materialId] || <MoreHorizontal className="w-5 h-5 text-gray-400" />;
};

export const getCategoryIcon = (category: string): React.ReactNode => {
  return categoryIcons[category] || <Package className="w-5 h-5" />;
};

export const craftingMethodIcons: { [key: string]: React.ReactNode } = {
  'crafting_table': <Grid3X3 className="w-4 h-4 text-amber-600" />,
  'furnace': <Flame className="w-4 h-4 text-orange-500" />,
  'solderer': <Zap className="w-4 h-4 text-blue-500" />,
  'none': <Circle className="w-4 h-4 text-gray-400" />
};

export const getCraftingMethodIcon = (method: string): React.ReactNode => {
  return craftingMethodIcons[method] || <Circle className="w-4 h-4 text-gray-400" />;
};

export const getCraftingMethodName = (method: string): string => {
  const names: { [key: string]: string } = {
    'crafting_table': 'Mesa de Trabalho',
    'furnace': 'Fornalha',
    'solderer': 'Solderer',
    'none': 'Material Base'
  };
  return names[method] || method;
}; 