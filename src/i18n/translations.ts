export interface Translation {
  // App Header
  appTitle: string;
  appSubtitle: string;
  appDescription: string;

  // Item Selector
  selectItems: string;
  searchPlaceholder: string;
  allCategories: string;
  selectedItems: string;
  clearSelection: string;
  viewCraftingTree: string;

  // Results Display
  requiredMaterials: string;
  showDetails: string;
  hideDetails: string;
  baseMaterials: string;
  intermediateMaterials: string;
  breakdownByItem: string;
  totalSummary: string;
  baseMaterialTypes: string;
  intermediateMaterialTypes: string;
  totalBaseItems: string;
  totalIntermediateItems: string;
  selectItemsToSee: string;
  displayMode: string;
  showAsPacks: string;
  showAsQuantity: string;

  // Crafting Tree
  craftingTree: string;
  clickToExpand: string;
  craftingOrder: string;

  // How to Use
  howToUse: string;
  step1Title: string;
  step1Description: string;
  step2Title: string;
  step2Description: string;
  step3Title: string;
  step3Description: string;

  // Categories
  categories: {
    "Materiais Base": string;
    "Processadores": string;
    "Componentes": string;
    "Storage Parts": string;
    "Storage Disks": string;
    "Blocos Principais": string;
    "Interface": string;
  };

  // Materials
  materials: {
    iron_ingot: string;
    gold_ingot: string;
    diamond: string;
    nether_quartz: string;
    redstone: string;
    ender_pearl: string;
    chest: string;
    glass: string;
    crafting_table: string;
    quartz_enriched_iron: string;
    silicon: string;
    raw_basic_processor: string;
    raw_improved_processor: string;
    raw_advanced_processor: string;
    basic_processor: string;
    improved_processor: string;
    advanced_processor: string;
    storage_housing: string;
    machine_casing: string;
    "1k_storage_part": string;
    "4k_storage_part": string;
    "16k_storage_part": string;
    "64k_storage_part": string;
    "1k_storage_disk": string;
    "4k_storage_disk": string;
    "16k_storage_disk": string;
    "64k_storage_disk": string;
    controller: string;
    disk_drive: string;
    grid: string;
    crafting_grid: string;
  };

  // Pack display
  packs: string;
  pack: string;
  packSize: string;

  // Crafting Methods
  craftingMethods: {
    crafting_table: string;
    furnace: string;
    solderer: string;
    none: string;
  };
}

export const translations: { [key: string]: Translation } = {
  "pt-BR": {
    // App Header
    appTitle: "Calculadora de Recursos",
    appSubtitle: "Refined Storage",
    appDescription:
      "Calcule todos os materiais necessários para craftar items do mod Refined Storage",

    // Item Selector
    selectItems: "Selecionar Items",
    searchPlaceholder: "Buscar items...",
    allCategories: "Todas as Categorias",
    selectedItems: "Items Selecionados",
    clearSelection: "Limpar Seleção",
    viewCraftingTree: "Ver árvore de crafting",

    // Results Display
    requiredMaterials: "Materiais Necessários",
    showDetails: "Mostrar Detalhes",
    hideDetails: "Ocultar Detalhes",
    baseMaterials: "Materiais Base",
    intermediateMaterials: "Materiais Intermediários",
    breakdownByItem: "Breakdown por Item",
    totalSummary: "Resumo Total",
    baseMaterialTypes: "Tipos de Materiais Base:",
    intermediateMaterialTypes: "Tipos de Materiais Intermediários:",
    totalBaseItems: "Total de Items Base:",
    totalIntermediateItems: "Total de Items Intermediários:",
    selectItemsToSee:
      "Selecione alguns items para ver os materiais necessários.",
    displayMode: "Modo de Exibição",
    showAsPacks: "Mostrar em Packs",
    showAsQuantity: "Mostrar Quantidade",

    // Crafting Tree
    craftingTree: "Árvore de Crafting",
    clickToExpand: "Clique nos items com seta para expandir/recolher",
    craftingOrder:
      "Esta árvore mostra a ordem de crafting: Materiais Base → Intermediários → Item Final",

    // How to Use
    howToUse: "Como Usar",
    step1Title: "Selecione Items",
    step1Description:
      "Use a busca ou filtros por categoria para encontrar os items que você quer craftar. Ajuste as quantidades conforme necessário.",
    step2Title: "Veja os Materiais",
    step2Description:
      "A calculadora mostra todos os materiais base necessários (ferro, quartzo, etc.) e materiais intermediários que você precisará craftar.",
    step3Title: "Planeje sua Farm",
    step3Description:
      "Use o breakdown detalhado para entender exatamente como os materiais são distribuídos entre os diferentes items.",

    // Categories
    categories: {
      "Materiais Base": "Materiais Base",
      "Processadores": "Processadores",
      "Componentes": "Componentes",
      "Storage Parts": "Partes de Armazenamento",
      "Storage Disks": "Discos de Armazenamento",
      "Blocos Principais": "Blocos Principais",
      "Interface": "Interface",
    },

    // Materials
    materials: {
      iron_ingot: "Lingote de Ferro",
      gold_ingot: "Lingote de Ouro",
      diamond: "Diamante",
      nether_quartz: "Quartzo do Nether",
      redstone: "Redstone",
      ender_pearl: "Pérola do End",
      chest: "Baú",
      glass: "Vidro",
      crafting_table: "Mesa de Trabalho",
      quartz_enriched_iron: "Ferro Enriquecido com Quartzo",
      silicon: "Silício",
      raw_basic_processor: "Processador Básico Cru",
      raw_improved_processor: "Processador Melhorado Cru",
      raw_advanced_processor: "Processador Avançado Cru",
      basic_processor: "Processador Básico",
      improved_processor: "Processador Melhorado",
      advanced_processor: "Processador Avançado",
      storage_housing: "Invólucro de Armazenamento",
      machine_casing: "Invólucro de Máquina",
      "1k_storage_part": "Parte de Armazenamento 1k",
      "4k_storage_part": "Parte de Armazenamento 4k",
      "16k_storage_part": "Parte de Armazenamento 16k",
      "64k_storage_part": "Parte de Armazenamento 64k",
      "1k_storage_disk": "Disco de Armazenamento 1k",
      "4k_storage_disk": "Disco de Armazenamento 4k",
      "16k_storage_disk": "Disco de Armazenamento 16k",
      "64k_storage_disk": "Disco de Armazenamento 64k",
      controller: "Controlador",
      disk_drive: "Drive de Disco",
      grid: "Grade",
      crafting_grid: "Grade de Crafting",
    },

    // Pack display
    packs: "Packs",
    pack: "Pack",
    packSize: "Tamanho do Pack: 64 items",

    // Crafting Methods
    craftingMethods: {
      crafting_table: "Mesa de Trabalho",
      furnace: "Fornalha",
      solderer: "Solderer",
      none: "Material Base",
    },
  },

  "en": {
    // App Header
    appTitle: "Resource Calculator",
    appSubtitle: "Refined Storage",
    appDescription:
      "Calculate all materials needed to craft items from the Refined Storage mod",

    // Item Selector
    selectItems: "Select Items",
    searchPlaceholder: "Search items...",
    allCategories: "All Categories",
    selectedItems: "Selected Items",
    clearSelection: "Clear Selection",
    viewCraftingTree: "View crafting tree",

    // Results Display
    requiredMaterials: "Required Materials",
    showDetails: "Show Details",
    hideDetails: "Hide Details",
    baseMaterials: "Base Materials",
    intermediateMaterials: "Intermediate Materials",
    breakdownByItem: "Breakdown by Item",
    totalSummary: "Total Summary",
    baseMaterialTypes: "Base Material Types:",
    intermediateMaterialTypes: "Intermediate Material Types:",
    totalBaseItems: "Total Base Items:",
    totalIntermediateItems: "Total Intermediate Items:",
    selectItemsToSee: "Select some items to see the required materials.",
    displayMode: "Display Mode",
    showAsPacks: "Show as Packs",
    showAsQuantity: "Show as Quantity",

    // Crafting Tree
    craftingTree: "Crafting Tree",
    clickToExpand: "Click on items with arrows to expand/collapse",
    craftingOrder:
      "This tree shows the crafting order: Base Materials → Intermediate → Final Item",

    // How to Use
    howToUse: "How to Use",
    step1Title: "Select Items",
    step1Description:
      "Use search or category filters to find the items you want to craft. Adjust quantities as needed.",
    step2Title: "View Materials",
    step2Description:
      "The calculator shows all required base materials (iron, quartz, etc.) and intermediate materials you need to craft.",
    step3Title: "Plan Your Farm",
    step3Description:
      "Use the detailed breakdown to understand exactly how materials are distributed among different items.",

    // Categories
    categories: {
      "Materiais Base": "Base Materials",
      "Processadores": "Processors",
      "Componentes": "Components",
      "Storage Parts": "Storage Parts",
      "Storage Disks": "Storage Disks",
      "Blocos Principais": "Main Blocks",
      "Interface": "Interface",
    },

    // Materials
    materials: {
      iron_ingot: "Iron Ingot",
      gold_ingot: "Gold Ingot",
      diamond: "Diamond",
      nether_quartz: "Nether Quartz",
      redstone: "Redstone",
      ender_pearl: "Ender Pearl",
      chest: "Chest",
      glass: "Glass",
      crafting_table: "Crafting Table",
      quartz_enriched_iron: "Quartz Enriched Iron",
      silicon: "Silicon",
      raw_basic_processor: "Raw Basic Processor",
      raw_improved_processor: "Raw Improved Processor",
      raw_advanced_processor: "Raw Advanced Processor",
      basic_processor: "Basic Processor",
      improved_processor: "Improved Processor",
      advanced_processor: "Advanced Processor",
      storage_housing: "Storage Housing",
      machine_casing: "Machine Casing",
      "1k_storage_part": "1k Storage Part",
      "4k_storage_part": "4k Storage Part",
      "16k_storage_part": "16k Storage Part",
      "64k_storage_part": "64k Storage Part",
      "1k_storage_disk": "1k Storage Disk",
      "4k_storage_disk": "4k Storage Disk",
      "16k_storage_disk": "16k Storage Disk",
      "64k_storage_disk": "64k Storage Disk",
      controller: "Controller",
      disk_drive: "Disk Drive",
      grid: "Grid",
      crafting_grid: "Crafting Grid",
    },

    // Pack display
    packs: "Packs",
    pack: "Pack",
    packSize: "Pack Size: 64 items",

    // Crafting Methods
    craftingMethods: {
      crafting_table: "Crafting Table",
      furnace: "Furnace",
      solderer: "Solderer",
      none: "Base Material",
    },
  },
};
