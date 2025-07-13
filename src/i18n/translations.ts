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
    "Input/Output": string;
    "Wireless": string;
    "Autocrafting": string;
    "Security": string;
    "Utility": string;
    "Upgrades": string;
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
    string: string;
    slimeball: string;
    processor_binding: string;
    raw_basic_processor: string;
    raw_improved_processor: string;
    raw_advanced_processor: string;
    basic_processor: string;
    improved_processor: string;
    advanced_processor: string;
    construction_core: string;
    destruction_core: string;
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
    cable: string;
    grid: string;
    crafting_grid: string;
    pattern_grid: string;
    importer: string;
    exporter: string;
    constructor: string;
    destructor: string;
    interface: string;
    external_storage: string;
    wireless_transmitter: string;
    network_card: string;
    wireless_grid: string;
    wireless_crafting_grid: string;
    pattern: string;
    autocrafter: string;
    autocrafting_monitor: string;
    security_manager: string;
    security_card: string;
    wrench: string;
    configuration_card: string;
    detector: string;
    relay: string;
    upgrade: string;
    range_upgrade: string;
    speed_upgrade: string;
    stack_upgrade: string;
    autocrafting_upgrade: string;
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
    showDetails: "Mostrar detalhes",
    hideDetails: "Ocultar detalhes",
    baseMaterials: "Materiais Base",
    intermediateMaterials: "Materiais Intermediários",
    breakdownByItem: "Detalhamento por Item",
    totalSummary: "Resumo Total",
    baseMaterialTypes: "Tipos de materiais base",
    intermediateMaterialTypes: "Tipos de materiais intermediários",
    totalBaseItems: "Total de itens base",
    totalIntermediateItems: "Total de itens intermediários",
    selectItemsToSee: "Selecione items para ver os materiais necessários",
    displayMode: "Modo de exibição",
    showAsPacks: "Mostrar como pacotes",
    showAsQuantity: "Mostrar como quantidade",

    // Crafting Tree
    craftingTree: "Árvore de Crafting",
    clickToExpand: "Clique para expandir",
    craftingOrder: "Ordem de Fabricação",

    // How to Use
    howToUse: "Como Usar",
    step1Title: "1. Selecione os Items",
    step1Description:
      "Escolha os items do Refined Storage que você deseja craftar",
    step2Title: "2. Defina as Quantidades",
    step2Description: "Especifique quantos de cada item você precisa fabricar",
    step3Title: "3. Veja os Resultados",
    step3Description:
      "Veja o detalhamento completo de todos os materiais necessários",

    // Categories
    categories: {
      "Materiais Base": "Materiais Base",
      "Processadores": "Processadores",
      "Componentes": "Componentes",
      "Storage Parts": "Partes de Armazenamento",
      "Storage Disks": "Discos de Armazenamento",
      "Blocos Principais": "Blocos Principais",
      "Interface": "Interface",
      "Input/Output": "Entrada/Saída",
      "Wireless": "Wireless",
      "Autocrafting": "Autocrafting",
      "Security": "Segurança",
      "Utility": "Utilidade",
      "Upgrades": "Upgrades",
    },

    // Materials
    materials: {
      iron_ingot: "Barra de Ferro",
      gold_ingot: "Barra de Ouro",
      diamond: "Diamante",
      nether_quartz: "Quartzo do Nether",
      redstone: "Redstone",
      ender_pearl: "Pérola do End",
      chest: "Baú",
      glass: "Vidro",
      crafting_table: "Mesa de Trabalho",
      quartz_enriched_iron: "Ferro Enriquecido com Quartzo",
      silicon: "Silício",
      string: "Barbante",
      slimeball: "Bola de Slime",
      processor_binding: "Encadernação de Processador",
      raw_basic_processor: "Processador Básico Bruto",
      raw_improved_processor: "Processador Melhorado Bruto",
      raw_advanced_processor: "Processador Avançado Bruto",
      basic_processor: "Processador Básico",
      improved_processor: "Processador Melhorado",
      advanced_processor: "Processador Avançado",
      construction_core: "Núcleo de Construção",
      destruction_core: "Núcleo de Destruição",
      storage_housing: "Invólucro de Armazenamento",
      machine_casing: "Carcaça de Máquina",
      "1k_storage_part": "Parte de Armazenamento 1K",
      "4k_storage_part": "Parte de Armazenamento 4K",
      "16k_storage_part": "Parte de Armazenamento 16K",
      "64k_storage_part": "Parte de Armazenamento 64K",
      "1k_storage_disk": "Disco de Armazenamento 1K",
      "4k_storage_disk": "Disco de Armazenamento 4K",
      "16k_storage_disk": "Disco de Armazenamento 16K",
      "64k_storage_disk": "Disco de Armazenamento 64K",
      controller: "Controlador",
      disk_drive: "Drive de Disco",
      cable: "Cabo",
      grid: "Grade",
      crafting_grid: "Grade de Crafting",
      pattern_grid: "Grade de Padrões",
      importer: "Importador",
      exporter: "Exportador",
      constructor: "Construtor",
      destructor: "Destruidor",
      interface: "Interface",
      external_storage: "Armazenamento Externo",
      wireless_transmitter: "Transmissor Wireless",
      network_card: "Cartão de Rede",
      wireless_grid: "Grade Wireless",
      wireless_crafting_grid: "Grade de Crafting Wireless",
      pattern: "Padrão",
      autocrafter: "Autocrafter",
      autocrafting_monitor: "Monitor de Autocrafting",
      security_manager: "Gerenciador de Segurança",
      security_card: "Cartão de Segurança",
      wrench: "Chave Inglesa",
      configuration_card: "Cartão de Configuração",
      detector: "Detector",
      relay: "Relay",
      upgrade: "Upgrade",
      range_upgrade: "Upgrade de Alcance",
      speed_upgrade: "Upgrade de Velocidade",
      stack_upgrade: "Upgrade de Pilha",
      autocrafting_upgrade: "Upgrade de Autocrafting",
    },

    // Pack display
    packs: "pacotes",
    pack: "pacote",
    packSize: "Tamanho do pacote (64 items)",

    // Crafting Methods
    craftingMethods: {
      crafting_table: "Mesa de Trabalho",
      furnace: "Fornalha",
      solderer: "Soldador",
      none: "Nenhum",
    },
  },

  "en": {
    // App Header
    appTitle: "Resource Calculator",
    appSubtitle: "Refined Storage",
    appDescription:
      "Calculate all materials needed to craft Refined Storage mod items",

    // Item Selector
    selectItems: "Select Items",
    searchPlaceholder: "Search items...",
    allCategories: "All Categories",
    selectedItems: "Selected Items",
    clearSelection: "Clear Selection",
    viewCraftingTree: "View crafting tree",

    // Results Display
    requiredMaterials: "Required Materials",
    showDetails: "Show details",
    hideDetails: "Hide details",
    baseMaterials: "Base Materials",
    intermediateMaterials: "Intermediate Materials",
    breakdownByItem: "Breakdown by Item",
    totalSummary: "Total Summary",
    baseMaterialTypes: "Base material types",
    intermediateMaterialTypes: "Intermediate material types",
    totalBaseItems: "Total base items",
    totalIntermediateItems: "Total intermediate items",
    selectItemsToSee: "Select items to see required materials",
    displayMode: "Display mode",
    showAsPacks: "Show as packs",
    showAsQuantity: "Show as quantity",

    // Crafting Tree
    craftingTree: "Crafting Tree",
    clickToExpand: "Click to expand",
    craftingOrder: "Crafting Order",

    // How to Use
    howToUse: "How to Use",
    step1Title: "1. Select Items",
    step1Description: "Choose the Refined Storage items you want to craft",
    step2Title: "2. Set Quantities",
    step2Description: "Specify how many of each item you need to craft",
    step3Title: "3. View Results",
    step3Description: "See the complete breakdown of all required materials",

    // Categories
    categories: {
      "Materiais Base": "Base Materials",
      "Processadores": "Processors",
      "Componentes": "Components",
      "Storage Parts": "Storage Parts",
      "Storage Disks": "Storage Disks",
      "Blocos Principais": "Core Blocks",
      "Interface": "Interface",
      "Input/Output": "Input/Output",
      "Wireless": "Wireless",
      "Autocrafting": "Autocrafting",
      "Security": "Security",
      "Utility": "Utility",
      "Upgrades": "Upgrades",
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
      string: "String",
      slimeball: "Slimeball",
      processor_binding: "Processor Binding",
      raw_basic_processor: "Raw Basic Processor",
      raw_improved_processor: "Raw Improved Processor",
      raw_advanced_processor: "Raw Advanced Processor",
      basic_processor: "Basic Processor",
      improved_processor: "Improved Processor",
      advanced_processor: "Advanced Processor",
      construction_core: "Construction Core",
      destruction_core: "Destruction Core",
      storage_housing: "Storage Housing",
      machine_casing: "Machine Casing",
      "1k_storage_part": "1K Storage Part",
      "4k_storage_part": "4K Storage Part",
      "16k_storage_part": "16K Storage Part",
      "64k_storage_part": "64K Storage Part",
      "1k_storage_disk": "1K Storage Disk",
      "4k_storage_disk": "4K Storage Disk",
      "16k_storage_disk": "16K Storage Disk",
      "64k_storage_disk": "64K Storage Disk",
      controller: "Controller",
      disk_drive: "Disk Drive",
      cable: "Cable",
      grid: "Grid",
      crafting_grid: "Crafting Grid",
      pattern_grid: "Pattern Grid",
      importer: "Importer",
      exporter: "Exporter",
      constructor: "Constructor",
      destructor: "Destructor",
      interface: "Interface",
      external_storage: "External Storage",
      wireless_transmitter: "Wireless Transmitter",
      network_card: "Network Card",
      wireless_grid: "Wireless Grid",
      wireless_crafting_grid: "Wireless Crafting Grid",
      pattern: "Pattern",
      autocrafter: "Autocrafter",
      autocrafting_monitor: "Autocrafting Monitor",
      security_manager: "Security Manager",
      security_card: "Security Card",
      wrench: "Wrench",
      configuration_card: "Configuration Card",
      detector: "Detector",
      relay: "Relay",
      upgrade: "Upgrade",
      range_upgrade: "Range Upgrade",
      speed_upgrade: "Speed Upgrade",
      stack_upgrade: "Stack Upgrade",
      autocrafting_upgrade: "Autocrafting Upgrade",
    },

    // Pack display
    packs: "packs",
    pack: "pack",
    packSize: "Pack size (64 items)",

    // Crafting Methods
    craftingMethods: {
      crafting_table: "Crafting Table",
      furnace: "Furnace",
      solderer: "Solderer",
      none: "None",
    },
  },
};
