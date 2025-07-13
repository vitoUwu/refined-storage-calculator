import { Recipe } from "../types";

export const recipes: Recipe[] = [
  // Materiais Base
  {
    id: "quartz_enriched_iron",
    name: "Quartz Enriched Iron",
    category: "Materiais Base",
    ingredients: [
      { item: "iron_ingot", quantity: 3 },
      { item: "nether_quartz", quantity: 1 },
    ],
    output: { item: "quartz_enriched_iron", quantity: 4 },
    craftingMethod: "crafting_table",
  },
  {
    id: "quartz_enriched_iron_from_block",
    name: "Quartz Enriched Iron from Block",
    category: "Materiais Base",
    ingredients: [
      { item: "quartz_enriched_iron_block", quantity: 1 },
    ],
    output: { item: "quartz_enriched_iron", quantity: 9 },
    craftingMethod: "crafting_table",
  },
  {
    id: "block_of_quartz_enriched_iron",
    name: "Block of Quartz Enriched Iron",
    category: "Materiais Base",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 9 },
    ],
    output: { item: "quartz_enriched_iron_block", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "silicon",
    name: "Silicon",
    category: "Materiais Base",
    ingredients: [
      { item: "nether_quartz", quantity: 1 },
    ],
    output: { item: "silicon", quantity: 1 },
    craftingMethod: "furnace",
  },

  // Processor Binding
  {
    id: "processor_binding",
    name: "Processor Binding",
    category: "Componentes",
    ingredients: [
      { item: "string", quantity: 2 },
      { item: "slimeball", quantity: 1 },
    ],
    output: { item: "processor_binding", quantity: 8 },
    craftingMethod: "crafting_table",
  },

  // Raw Processors
  {
    id: "raw_basic_processor",
    name: "Raw Basic Processor",
    category: "Processadores",
    ingredients: [
      { item: "processor_binding", quantity: 1 },
      { item: "iron_ingot", quantity: 1 },
      { item: "silicon", quantity: 1 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "raw_basic_processor", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "raw_improved_processor",
    name: "Raw Improved Processor",
    category: "Processadores",
    ingredients: [
      { item: "processor_binding", quantity: 1 },
      { item: "gold_ingot", quantity: 1 },
      { item: "silicon", quantity: 1 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "raw_improved_processor", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "raw_advanced_processor",
    name: "Raw Advanced Processor",
    category: "Processadores",
    ingredients: [
      { item: "processor_binding", quantity: 1 },
      { item: "diamond", quantity: 1 },
      { item: "silicon", quantity: 1 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "raw_advanced_processor", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Finished Processors
  {
    id: "basic_processor",
    name: "Basic Processor",
    category: "Processadores",
    ingredients: [
      { item: "raw_basic_processor", quantity: 1 },
    ],
    output: { item: "basic_processor", quantity: 1 },
    craftingMethod: "furnace",
  },
  {
    id: "improved_processor",
    name: "Improved Processor",
    category: "Processadores",
    ingredients: [
      { item: "raw_improved_processor", quantity: 1 },
    ],
    output: { item: "improved_processor", quantity: 1 },
    craftingMethod: "furnace",
  },
  {
    id: "advanced_processor",
    name: "Advanced Processor",
    category: "Processadores",
    ingredients: [
      { item: "raw_advanced_processor", quantity: 1 },
    ],
    output: { item: "advanced_processor", quantity: 1 },
    craftingMethod: "furnace",
  },

  // Cores
  {
    id: "construction_core",
    name: "Construction Core",
    category: "Componentes",
    ingredients: [
      { item: "basic_processor", quantity: 1 },
      { item: "glowstone_dust", quantity: 1 },
    ],
    output: { item: "construction_core", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "destruction_core",
    name: "Destruction Core",
    category: "Componentes",
    ingredients: [
      { item: "basic_processor", quantity: 1 },
      { item: "nether_quartz", quantity: 1 },
    ],
    output: { item: "destruction_core", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Storage Components
  {
    id: "storage_housing",
    name: "Storage Housing",
    category: "Componentes",
    ingredients: [
      { item: "glass", quantity: 2 },
      { item: "redstone", quantity: 4 },
      { item: "quartz_enriched_iron", quantity: 3 },
    ],
    output: { item: "storage_housing", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "machine_casing",
    name: "Machine Casing",
    category: "Componentes",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 8 },
      { item: "stone", quantity: 1 },
    ],
    output: { item: "machine_casing", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Storage Parts
  {
    id: "1k_storage_part",
    name: "1k Storage Part",
    category: "Storage Parts",
    ingredients: [
      { item: "silicon", quantity: 4 },
      { item: "quartz_enriched_iron", quantity: 1 },
      { item: "glass", quantity: 2 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "1k_storage_part", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "4k_storage_part",
    name: "4k Storage Part",
    category: "Storage Parts",
    ingredients: [
      { item: "basic_processor", quantity: 4 },
      { item: "quartz_enriched_iron", quantity: 2 },
      { item: "1k_storage_part", quantity: 3 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "4k_storage_part", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "16k_storage_part",
    name: "16k Storage Part",
    category: "Storage Parts",
    ingredients: [
      { item: "improved_processor", quantity: 4 },
      { item: "quartz_enriched_iron", quantity: 2 },
      { item: "4k_storage_part", quantity: 3 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "16k_storage_part", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "64k_storage_part",
    name: "64k Storage Part",
    category: "Storage Parts",
    ingredients: [
      { item: "advanced_processor", quantity: 4 },
      { item: "quartz_enriched_iron", quantity: 2 },
      { item: "16k_storage_part", quantity: 3 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "64k_storage_part", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Storage Disks
  {
    id: "1k_storage_disk",
    name: "1k Storage Disk",
    category: "Storage Disks",
    ingredients: [
      { item: "glass", quantity: 2 },
      { item: "redstone", quantity: 4 },
      { item: "1k_storage_part", quantity: 1 },
      { item: "quartz_enriched_iron", quantity: 3 },
    ],
    output: { item: "1k_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "4k_storage_disk",
    name: "4k Storage Disk",
    category: "Storage Disks",
    ingredients: [
      { item: "glass", quantity: 2 },
      { item: "redstone", quantity: 4 },
      { item: "4k_storage_part", quantity: 1 },
      { item: "quartz_enriched_iron", quantity: 3 },
    ],
    output: { item: "4k_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "16k_storage_disk",
    name: "16k Storage Disk",
    category: "Storage Disks",
    ingredients: [
      { item: "glass", quantity: 2 },
      { item: "redstone", quantity: 4 },
      { item: "16k_storage_part", quantity: 1 },
      { item: "quartz_enriched_iron", quantity: 3 },
    ],
    output: { item: "16k_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "64k_storage_disk",
    name: "64k Storage Disk",
    category: "Storage Disks",
    ingredients: [
      { item: "glass", quantity: 2 },
      { item: "redstone", quantity: 4 },
      { item: "64k_storage_part", quantity: 1 },
      { item: "quartz_enriched_iron", quantity: 3 },
    ],
    output: { item: "64k_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Main Network Components
  {
    id: "controller",
    name: "Controller",
    category: "Blocos Principais",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "advanced_processor", quantity: 1 },
      { item: "silicon", quantity: 2 },
      { item: "machine_casing", quantity: 1 },
    ],
    output: { item: "controller", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "disk_drive",
    name: "Disk Drive",
    category: "Blocos Principais",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "chest", quantity: 1 },
      { item: "machine_casing", quantity: 1 },
      { item: "advanced_processor", quantity: 1 },
    ],
    output: { item: "disk_drive", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "cable",
    name: "Cable",
    category: "Blocos Principais",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "glass", quantity: 2 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "cable", quantity: 12 },
    craftingMethod: "crafting_table",
  },

  // Interface Components
  {
    id: "grid",
    name: "Grid",
    category: "Interface",
    ingredients: [
      { item: "improved_processor", quantity: 1 },
      { item: "construction_core", quantity: 1 },
      { item: "glass", quantity: 3 },
      { item: "quartz_enriched_iron", quantity: 2 },
      { item: "machine_casing", quantity: 1 },
      { item: "destruction_core", quantity: 1 },
    ],
    output: { item: "grid", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Input/Output Components
  {
    id: "importer",
    name: "Importer",
    category: "Input/Output",
    ingredients: [
      { item: "cable", quantity: 1 },
      { item: "destruction_core", quantity: 1 },
      { item: "improved_processor", quantity: 1 },
    ],
    output: { item: "importer", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "exporter",
    name: "Exporter",
    category: "Input/Output",
    ingredients: [
      { item: "cable", quantity: 1 },
      { item: "construction_core", quantity: 1 },
      { item: "improved_processor", quantity: 1 },
    ],
    output: { item: "exporter", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "constructor",
    name: "Constructor",
    category: "Input/Output",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "construction_core", quantity: 1 },
      { item: "redstone", quantity: 2 },
      { item: "cable", quantity: 1 },
      { item: "improved_processor", quantity: 1 },
    ],
    output: { item: "constructor", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "destructor",
    name: "Destructor",
    category: "Input/Output",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "destruction_core", quantity: 1 },
      { item: "redstone", quantity: 2 },
      { item: "cable", quantity: 1 },
      { item: "improved_processor", quantity: 1 },
    ],
    output: { item: "destructor", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "interface",
    name: "Interface",
    category: "Input/Output",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 4 },
      { item: "importer", quantity: 1 },
      { item: "exporter", quantity: 1 },
      { item: "machine_casing", quantity: 1 },
      { item: "redstone", quantity: 2 },
    ],
    output: { item: "interface", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "external_storage",
    name: "External Storage",
    category: "Input/Output",
    ingredients: [
      { item: "construction_core", quantity: 1 },
      { item: "quartz_enriched_iron", quantity: 4 },
      { item: "destruction_core", quantity: 1 },
      { item: "chest", quantity: 2 },
      { item: "cable", quantity: 1 },
      { item: "improved_processor", quantity: 1 },
    ],
    output: { item: "external_storage", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Wireless Components
  {
    id: "wireless_transmitter",
    name: "Wireless Transmitter",
    category: "Wireless",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "ender_pearl", quantity: 1 },
      { item: "advanced_processor", quantity: 1 },
      { item: "machine_casing", quantity: 1 },
    ],
    output: { item: "wireless_transmitter", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "network_card",
    name: "Network Card",
    category: "Wireless",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "paper", quantity: 2 },
      { item: "advanced_processor", quantity: 1 },
    ],
    output: { item: "network_card", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "wireless_grid",
    name: "Wireless Grid",
    category: "Wireless",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "ender_pearl", quantity: 1 },
      { item: "grid", quantity: 1 },
      { item: "advanced_processor", quantity: 1 },
    ],
    output: { item: "wireless_grid", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Autocrafting Components
  {
    id: "pattern",
    name: "Pattern",
    category: "Autocrafting",
    ingredients: [
      { item: "glass", quantity: 2 },
      { item: "redstone", quantity: 4 },
      { item: "quartz_enriched_iron", quantity: 3 },
    ],
    output: { item: "pattern", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "crafter",
    name: "Crafter",
    category: "Autocrafting",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "construction_core", quantity: 1 },
      { item: "advanced_processor", quantity: 2 },
      { item: "machine_casing", quantity: 1 },
      { item: "destruction_core", quantity: 1 },
    ],
    output: { item: "crafter", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Utility Components
  {
    id: "wrench",
    name: "Wrench",
    category: "Utility",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "basic_processor", quantity: 1 },
    ],
    output: { item: "wrench", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "detector",
    name: "Detector",
    category: "Utility",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "comparator", quantity: 2 },
      { item: "redstone_torch", quantity: 1 },
      { item: "machine_casing", quantity: 1 },
      { item: "improved_processor", quantity: 1 },
    ],
    output: { item: "detector", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Upgrades
  {
    id: "upgrade",
    name: "Upgrade",
    category: "Upgrades",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "glass", quantity: 2 },
      { item: "improved_processor", quantity: 1 },
    ],
    output: { item: "upgrade", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "range_upgrade",
    name: "Range Upgrade",
    category: "Upgrades",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "ender_pearl", quantity: 2 },
      { item: "upgrade", quantity: 1 },
    ],
    output: { item: "range_upgrade", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "speed_upgrade",
    name: "Speed Upgrade",
    category: "Upgrades",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "sugar", quantity: 2 },
      { item: "upgrade", quantity: 1 },
    ],
    output: { item: "speed_upgrade", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "stack_upgrade",
    name: "Stack Upgrade",
    category: "Upgrades",
    ingredients: [
      { item: "sugar", quantity: 4 },
      { item: "speed_upgrade", quantity: 5 },
    ],
    output: { item: "stack_upgrade", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "crafting_upgrade",
    name: "Crafting Upgrade",
    category: "Upgrades",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "crafting_table", quantity: 2 },
      { item: "construction_core", quantity: 2 },
      { item: "upgrade", quantity: 1 },
    ],
    output: { item: "crafting_upgrade", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "regulator_upgrade",
    name: "Regulator Upgrade",
    category: "Upgrades",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "redstone", quantity: 2 },
      { item: "comparator", quantity: 1 },
      { item: "upgrade", quantity: 1 },
    ],
    output: { item: "regulator_upgrade", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "fortune_1_upgrade",
    name: "Fortune I Upgrade",
    category: "Upgrades",
    ingredients: [
      { item: "upgrade", quantity: 1 },
      { item: "enchanted_book_fortune_1", quantity: 1 },
    ],
    output: { item: "fortune_1_upgrade", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "fortune_2_upgrade",
    name: "Fortune II Upgrade",
    category: "Upgrades",
    ingredients: [
      { item: "upgrade", quantity: 1 },
      { item: "enchanted_book_fortune_2", quantity: 1 },
    ],
    output: { item: "fortune_2_upgrade", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "fortune_3_upgrade",
    name: "Fortune III Upgrade",
    category: "Upgrades",
    ingredients: [
      { item: "upgrade", quantity: 1 },
      { item: "enchanted_book_fortune_3", quantity: 1 },
    ],
    output: { item: "fortune_3_upgrade", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "silk_touch_upgrade",
    name: "Silk Touch Upgrade",
    category: "Upgrades",
    ingredients: [
      { item: "upgrade", quantity: 1 },
      { item: "enchanted_book_silk_touch", quantity: 1 },
    ],
    output: { item: "silk_touch_upgrade", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Fluid Storage Parts
  {
    id: "64k_fluid_storage_part",
    name: "64k Fluid Storage Part",
    category: "Fluid Storage Parts",
    ingredients: [
      { item: "silicon", quantity: 4 },
      { item: "quartz_enriched_iron", quantity: 1 },
      { item: "glass", quantity: 2 },
      { item: "bucket", quantity: 1 },
    ],
    output: { item: "64k_fluid_storage_part", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "256k_fluid_storage_part",
    name: "256k Fluid Storage Part",
    category: "Fluid Storage Parts",
    ingredients: [
      { item: "basic_processor", quantity: 4 },
      { item: "quartz_enriched_iron", quantity: 2 },
      { item: "64k_fluid_storage_part", quantity: 3 },
      { item: "bucket", quantity: 1 },
    ],
    output: { item: "256k_fluid_storage_part", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "1024k_fluid_storage_part",
    name: "1024k Fluid Storage Part",
    category: "Fluid Storage Parts",
    ingredients: [
      { item: "improved_processor", quantity: 4 },
      { item: "quartz_enriched_iron", quantity: 2 },
      { item: "256k_fluid_storage_part", quantity: 3 },
      { item: "bucket", quantity: 1 },
    ],
    output: { item: "1024k_fluid_storage_part", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "4096k_fluid_storage_part",
    name: "4096k Fluid Storage Part",
    category: "Fluid Storage Parts",
    ingredients: [
      { item: "advanced_processor", quantity: 4 },
      { item: "quartz_enriched_iron", quantity: 2 },
      { item: "1024k_fluid_storage_part", quantity: 3 },
      { item: "bucket", quantity: 1 },
    ],
    output: { item: "4096k_fluid_storage_part", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Fluid Storage Disks
  {
    id: "64k_fluid_storage_disk",
    name: "64k Fluid Storage Disk",
    category: "Fluid Storage Disks",
    ingredients: [
      { item: "glass", quantity: 2 },
      { item: "redstone", quantity: 4 },
      { item: "64k_fluid_storage_part", quantity: 1 },
      { item: "quartz_enriched_iron", quantity: 3 },
    ],
    output: { item: "64k_fluid_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "64k_fluid_storage_disk_from_storage_housing",
    name: "64k Fluid Storage Disk (from Storage Housing)",
    category: "Fluid Storage Disks",
    ingredients: [
      { item: "storage_housing", quantity: 1 },
      { item: "64k_fluid_storage_part", quantity: 1 },
    ],
    output: { item: "64k_fluid_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "256k_fluid_storage_disk",
    name: "256k Fluid Storage Disk",
    category: "Fluid Storage Disks",
    ingredients: [
      { item: "glass", quantity: 2 },
      { item: "redstone", quantity: 4 },
      { item: "256k_fluid_storage_part", quantity: 1 },
      { item: "quartz_enriched_iron", quantity: 3 },
    ],
    output: { item: "256k_fluid_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "256k_fluid_storage_disk_from_storage_housing",
    name: "256k Fluid Storage Disk (from Storage Housing)",
    category: "Fluid Storage Disks",
    ingredients: [
      { item: "storage_housing", quantity: 1 },
      { item: "256k_fluid_storage_part", quantity: 1 },
    ],
    output: { item: "256k_fluid_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "1024k_fluid_storage_disk",
    name: "1024k Fluid Storage Disk",
    category: "Fluid Storage Disks",
    ingredients: [
      { item: "glass", quantity: 2 },
      { item: "redstone", quantity: 4 },
      { item: "1024k_fluid_storage_part", quantity: 1 },
      { item: "quartz_enriched_iron", quantity: 3 },
    ],
    output: { item: "1024k_fluid_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "1024k_fluid_storage_disk_from_storage_housing",
    name: "1024k Fluid Storage Disk (from Storage Housing)",
    category: "Fluid Storage Disks",
    ingredients: [
      { item: "storage_housing", quantity: 1 },
      { item: "1024k_fluid_storage_part", quantity: 1 },
    ],
    output: { item: "1024k_fluid_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "4096k_fluid_storage_disk",
    name: "4096k Fluid Storage Disk",
    category: "Fluid Storage Disks",
    ingredients: [
      { item: "glass", quantity: 2 },
      { item: "redstone", quantity: 4 },
      { item: "4096k_fluid_storage_part", quantity: 1 },
      { item: "quartz_enriched_iron", quantity: 3 },
    ],
    output: { item: "4096k_fluid_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "4096k_fluid_storage_disk_from_storage_housing",
    name: "4096k Fluid Storage Disk (from Storage Housing)",
    category: "Fluid Storage Disks",
    ingredients: [
      { item: "storage_housing", quantity: 1 },
      { item: "4096k_fluid_storage_part", quantity: 1 },
    ],
    output: { item: "4096k_fluid_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Fluid Storage Blocks
  {
    id: "64k_fluid_storage_block",
    name: "64k Fluid Storage Block",
    category: "Fluid Storage Blocks",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "64k_fluid_storage_part", quantity: 1 },
      { item: "machine_casing", quantity: 1 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "64k_fluid_storage_block", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "256k_fluid_storage_block",
    name: "256k Fluid Storage Block",
    category: "Fluid Storage Blocks",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "256k_fluid_storage_part", quantity: 1 },
      { item: "machine_casing", quantity: 1 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "256k_fluid_storage_block", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "1024k_fluid_storage_block",
    name: "1024k Fluid Storage Block",
    category: "Fluid Storage Blocks",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "1024k_fluid_storage_part", quantity: 1 },
      { item: "machine_casing", quantity: 1 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "1024k_fluid_storage_block", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "4096k_fluid_storage_block",
    name: "4096k Fluid Storage Block",
    category: "Fluid Storage Blocks",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "4096k_fluid_storage_part", quantity: 1 },
      { item: "machine_casing", quantity: 1 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "4096k_fluid_storage_block", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Additional Wireless Components
  {
    id: "wireless_crafting_monitor",
    name: "Wireless Crafting Monitor",
    category: "Wireless",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "ender_pearl", quantity: 1 },
      { item: "crafting_monitor", quantity: 1 },
      { item: "advanced_processor", quantity: 1 },
    ],
    output: { item: "wireless_crafting_monitor", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "wireless_fluid_grid",
    name: "Wireless Fluid Grid",
    category: "Wireless",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "ender_pearl", quantity: 1 },
      { item: "fluid_grid", quantity: 1 },
      { item: "advanced_processor", quantity: 1 },
    ],
    output: { item: "wireless_fluid_grid", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "network_receiver",
    name: "Network Receiver",
    category: "Wireless",
    ingredients: [
      { item: "ender_pearl", quantity: 3 },
      { item: "construction_core", quantity: 1 },
      { item: "machine_casing", quantity: 1 },
      { item: "destruction_core", quantity: 1 },
      { item: "advanced_processor", quantity: 2 },
      { item: "netherite_ingot", quantity: 1 },
    ],
    output: { item: "network_receiver", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "network_transmitter",
    name: "Network Transmitter",
    category: "Wireless",
    ingredients: [
      { item: "ender_pearl", quantity: 3 },
      { item: "construction_core", quantity: 1 },
      { item: "machine_casing", quantity: 1 },
      { item: "destruction_core", quantity: 1 },
      { item: "advanced_processor", quantity: 2 },
      { item: "netherite_ingot", quantity: 1 },
    ],
    output: { item: "network_transmitter", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Additional Autocrafting Components
  {
    id: "crafting_monitor",
    name: "Crafting Monitor",
    category: "Autocrafting",
    ingredients: [
      { item: "improved_processor", quantity: 2 },
      { item: "pattern", quantity: 2 },
      { item: "glass", quantity: 2 },
      { item: "quartz_enriched_iron", quantity: 1 },
      { item: "machine_casing", quantity: 1 },
    ],
    output: { item: "crafting_monitor", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "crafter_manager",
    name: "Crafter Manager",
    category: "Autocrafting",
    ingredients: [
      { item: "advanced_processor", quantity: 2 },
      { item: "crafter", quantity: 2 },
      { item: "glass", quantity: 2 },
      { item: "quartz_enriched_iron", quantity: 1 },
      { item: "machine_casing", quantity: 1 },
    ],
    output: { item: "crafter_manager", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Additional Utility Components
  {
    id: "disk_manipulator",
    name: "Disk Manipulator",
    category: "Utility",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "storage_housing", quantity: 1 },
      { item: "construction_core", quantity: 1 },
      { item: "machine_casing", quantity: 1 },
      { item: "destruction_core", quantity: 1 },
    ],
    output: { item: "disk_manipulator", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "filter",
    name: "Filter",
    category: "Utility",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "paper", quantity: 2 },
      { item: "hopper", quantity: 1 },
    ],
    output: { item: "filter", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "relay",
    name: "Relay",
    category: "Utility",
    ingredients: [
      { item: "machine_casing", quantity: 1 },
      { item: "cable", quantity: 1 },
      { item: "redstone_torch", quantity: 1 },
    ],
    output: { item: "relay", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Additional Interface Components
  {
    id: "fluid_interface",
    name: "Fluid Interface",
    category: "Interface",
    ingredients: [
      { item: "interface", quantity: 1 },
      { item: "advanced_processor", quantity: 1 },
      { item: "bucket", quantity: 1 },
    ],
    output: { item: "fluid_interface", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  // Additional Security Components
  {
    id: "security_card",
    name: "Security Card",
    category: "Security",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "network_card", quantity: 2 },
      { item: "advanced_processor", quantity: 1 },
    ],
    output: { item: "security_card", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "security_manager",
    name: "Security Manager",
    category: "Security",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 6 },
      { item: "chest", quantity: 1 },
      { item: "security_card", quantity: 2 },
      { item: "machine_casing", quantity: 1 },
    ],
    output: { item: "security_manager", quantity: 1 },
    craftingMethod: "crafting_table",
  },
];

export const baseMaterials = [
  "iron_ingot",
  "gold_ingot",
  "diamond",
  "nether_quartz",
  "redstone",
  "ender_pearl",
  "chest",
  "glass",
  "crafting_table",
  "string",
  "slimeball",
  "glowstone_dust",
  "stone",
  "sugar",
  "paper",
  "comparator",
  "redstone_torch",
  "bucket",
  "enchanted_book_fortune_1",
  "enchanted_book_fortune_2",
  "enchanted_book_fortune_3",
  "enchanted_book_silk_touch",
  "netherite_ingot",
  "hopper",
];

export const materialNames: { [key: string]: string } = {};
