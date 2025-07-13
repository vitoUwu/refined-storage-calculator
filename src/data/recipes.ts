import { Recipe } from "../types";

export const recipes: Recipe[] = [
  {
    id: "quartz_enriched_iron",
    name: "Quartz Enriched Iron",
    category: "Materiais Base",
    ingredients: [
      { item: "iron_ingot", quantity: 1 },
      { item: "nether_quartz", quantity: 1 },
    ],
    output: { item: "quartz_enriched_iron", quantity: 1 },
    craftingMethod: "furnace",
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

  {
    id: "raw_basic_processor",
    name: "Raw Basic Processor",
    category: "Processadores",
    ingredients: [
      { item: "iron_ingot", quantity: 1 },
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
      { item: "gold_ingot", quantity: 1 },
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
      { item: "diamond", quantity: 1 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "raw_advanced_processor", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  {
    id: "basic_processor",
    name: "Basic Processor",
    category: "Processadores",
    ingredients: [
      { item: "raw_basic_processor", quantity: 1 },
      { item: "silicon", quantity: 1 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "basic_processor", quantity: 1 },
    craftingMethod: "solderer",
  },
  {
    id: "improved_processor",
    name: "Improved Processor",
    category: "Processadores",
    ingredients: [
      { item: "raw_improved_processor", quantity: 1 },
      { item: "silicon", quantity: 1 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "improved_processor", quantity: 1 },
    craftingMethod: "solderer",
  },
  {
    id: "advanced_processor",
    name: "Advanced Processor",
    category: "Processadores",
    ingredients: [
      { item: "raw_advanced_processor", quantity: 1 },
      { item: "silicon", quantity: 1 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "advanced_processor", quantity: 1 },
    craftingMethod: "solderer",
  },

  {
    id: "storage_housing",
    name: "Storage Housing",
    category: "Componentes",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 8 },
      { item: "redstone", quantity: 1 },
    ],
    output: { item: "storage_housing", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  {
    id: "1k_storage_part",
    name: "1k Storage Part",
    category: "Storage Parts",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 4 },
      { item: "redstone", quantity: 4 },
      { item: "basic_processor", quantity: 1 },
    ],
    output: { item: "1k_storage_part", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "4k_storage_part",
    name: "4k Storage Part",
    category: "Storage Parts",
    ingredients: [
      { item: "1k_storage_part", quantity: 3 },
      { item: "quartz_enriched_iron", quantity: 4 },
      { item: "redstone", quantity: 4 },
      { item: "basic_processor", quantity: 1 },
    ],
    output: { item: "4k_storage_part", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "16k_storage_part",
    name: "16k Storage Part",
    category: "Storage Parts",
    ingredients: [
      { item: "4k_storage_part", quantity: 3 },
      { item: "quartz_enriched_iron", quantity: 4 },
      { item: "redstone", quantity: 4 },
      { item: "improved_processor", quantity: 1 },
    ],
    output: { item: "16k_storage_part", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "64k_storage_part",
    name: "64k Storage Part",
    category: "Storage Parts",
    ingredients: [
      { item: "16k_storage_part", quantity: 3 },
      { item: "quartz_enriched_iron", quantity: 4 },
      { item: "redstone", quantity: 4 },
      { item: "advanced_processor", quantity: 1 },
    ],
    output: { item: "64k_storage_part", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  {
    id: "1k_storage_disk",
    name: "1k Storage Disk",
    category: "Storage Disks",
    ingredients: [
      { item: "1k_storage_part", quantity: 1 },
      { item: "storage_housing", quantity: 1 },
    ],
    output: { item: "1k_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "4k_storage_disk",
    name: "4k Storage Disk",
    category: "Storage Disks",
    ingredients: [
      { item: "4k_storage_part", quantity: 1 },
      { item: "storage_housing", quantity: 1 },
    ],
    output: { item: "4k_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "16k_storage_disk",
    name: "16k Storage Disk",
    category: "Storage Disks",
    ingredients: [
      { item: "16k_storage_part", quantity: 1 },
      { item: "storage_housing", quantity: 1 },
    ],
    output: { item: "16k_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },
  {
    id: "64k_storage_disk",
    name: "64k Storage Disk",
    category: "Storage Disks",
    ingredients: [
      { item: "64k_storage_part", quantity: 1 },
      { item: "storage_housing", quantity: 1 },
    ],
    output: { item: "64k_storage_disk", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  {
    id: "machine_casing",
    name: "Machine Casing",
    category: "Componentes",
    ingredients: [
      { item: "quartz_enriched_iron", quantity: 8 },
    ],
    output: { item: "machine_casing", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  {
    id: "controller",
    name: "Controller",
    category: "Blocos Principais",
    ingredients: [
      { item: "machine_casing", quantity: 1 },
      { item: "advanced_processor", quantity: 1 },
      { item: "ender_pearl", quantity: 2 },
    ],
    output: { item: "controller", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  {
    id: "disk_drive",
    name: "Disk Drive",
    category: "Blocos Principais",
    ingredients: [
      { item: "machine_casing", quantity: 1 },
      { item: "improved_processor", quantity: 1 },
      { item: "chest", quantity: 1 },
    ],
    output: { item: "disk_drive", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  {
    id: "grid",
    name: "Grid",
    category: "Interface",
    ingredients: [
      { item: "machine_casing", quantity: 1 },
      { item: "basic_processor", quantity: 1 },
      { item: "glass", quantity: 1 },
    ],
    output: { item: "grid", quantity: 1 },
    craftingMethod: "crafting_table",
  },

  {
    id: "crafting_grid",
    name: "Crafting Grid",
    category: "Interface",
    ingredients: [
      { item: "grid", quantity: 1 },
      { item: "crafting_table", quantity: 1 },
      { item: "improved_processor", quantity: 1 },
    ],
    output: { item: "crafting_grid", quantity: 1 },
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
];

export const materialNames: { [key: string]: string } = {};
