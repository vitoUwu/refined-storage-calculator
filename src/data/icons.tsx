import React from "react";
import {
  Activity,
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Box,
  Cable,
  Circle,
  CircuitBoard,
  Cog,
  Container,
  Cpu,
  CreditCard,
  Database,
  Eye,
  Factory,
  Flame,
  Gauge,
  Gem,
  Grid3X3,
  Hammer,
  HardDrive,
  Layers,
  Monitor,
  MoreHorizontal,
  Mountain,
  Network,
  Package,
  Pickaxe,
  Radio,
  Search,
  Settings,
  Shield,
  Sparkles,
  Wifi,
  Wrench,
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

  // Processor Binding
  "processor_binding": <Cable className="w-5 h-5 text-dungeons-red-2" />,

  // Raw Processors
  "raw_basic_processor": <Cpu className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "raw_improved_processor": <Cpu className="w-5 h-5 text-dungeons-orange-2" />,
  "raw_advanced_processor": <Cpu className="w-5 h-5 text-vanilla-blue-2" />,

  // Finished Processors
  "basic_processor": <Cpu className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "improved_processor": <Cpu className="w-5 h-5 text-dungeons-orange-2" />,
  "advanced_processor": <Cpu className="w-5 h-5 text-vanilla-blue-2" />,

  // Cores
  "construction_core": <Factory className="w-5 h-5 text-dungeons-green-2" />,
  "destruction_core": <Flame className="w-5 h-5 text-dungeons-red-2" />,

  // Storage Components
  "storage_housing": <Container className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "machine_casing": <Box className="w-5 h-5 text-vanilla-coldgrey-1" />,

  // Storage Parts
  "1k_storage_part": <HardDrive className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "4k_storage_part": <HardDrive className="w-5 h-5 text-dungeons-orange-2" />,
  "16k_storage_part": <HardDrive className="w-5 h-5 text-vanilla-blue-2" />,
  "64k_storage_part": <HardDrive className="w-5 h-5 text-dungeons-purple-2" />,

  // Storage Disks
  "1k_storage_disk": <Database className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "4k_storage_disk": <Database className="w-5 h-5 text-dungeons-orange-2" />,
  "16k_storage_disk": <Database className="w-5 h-5 text-vanilla-blue-2" />,
  "64k_storage_disk": <Database className="w-5 h-5 text-dungeons-purple-2" />,

  // Main Network Components
  "controller": <Settings className="w-5 h-5 text-vanilla-blue-2" />,
  "disk_drive": <HardDrive className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "cable": <Cable className="w-5 h-5 text-vanilla-coldgrey-2" />,

  // Interface Components
  "grid": <Monitor className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "crafting_grid": <Grid3X3 className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "pattern_grid": <Grid3X3 className="w-5 h-5 text-vanilla-blue-2" />,

  // Input/Output Components
  "importer": <ArrowDown className="w-5 h-5 text-dungeons-green-2" />,
  "exporter": <ArrowUp className="w-5 h-5 text-dungeons-orange-2" />,
  "constructor": <Factory className="w-5 h-5 text-dungeons-green-2" />,
  "destructor": <Flame className="w-5 h-5 text-dungeons-red-2" />,
  "interface": <ArrowUpDown className="w-5 h-5 text-vanilla-blue-2" />,
  "external_storage": <Package className="w-5 h-5 text-vanilla-purple-2" />,

  // Wireless Components
  "wireless_transmitter": <Radio className="w-5 h-5 text-vanilla-blue-2" />,
  "network_card": <CreditCard className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "wireless_grid": <Wifi className="w-5 h-5 text-vanilla-blue-2" />,
  "wireless_crafting_grid": <Network className="w-5 h-5 text-vanilla-blue-2" />,

  // Autocrafting Components
  "pattern": <Circle className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "autocrafter": <Cog className="w-5 h-5 text-vanilla-blue-2" />,
  "autocrafting_monitor": <Activity className="w-5 h-5 text-vanilla-blue-2" />,

  // Security Components
  "security_manager": <Shield className="w-5 h-5 text-dungeons-red-2" />,
  "security_card": <CreditCard className="w-5 h-5 text-dungeons-red-2" />,

  // Utility Components
  "wrench": <Wrench className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "configuration_card": <CreditCard className="w-5 h-5 text-vanilla-blue-2" />,
  "detector": <Search className="w-5 h-5 text-vanilla-orange-2" />,
  "relay": <Radio className="w-5 h-5 text-vanilla-coldgrey-2" />,

  // Upgrades
  "upgrade": <Layers className="w-5 h-5 text-vanilla-coldgrey-1" />,
  "range_upgrade": <Sparkles className="w-5 h-5 text-vanilla-blue-2" />,
  "speed_upgrade": <Gauge className="w-5 h-5 text-dungeons-green-2" />,
  "stack_upgrade": <Layers className="w-5 h-5 text-dungeons-orange-2" />,
  "autocrafting_upgrade": <Cog className="w-5 h-5 text-vanilla-blue-2" />,
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
