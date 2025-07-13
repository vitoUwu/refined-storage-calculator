# Refined Storage Calculator

A comprehensive resource calculator for the Refined Storage mod in Minecraft. This tool helps players calculate the exact materials needed to craft any combination of Refined Storage items, including processors, storage disks, and system components.

## Features

- 🔧 **Complete Recipe Database**: Includes all Refined Storage items and their crafting recipes
- 📊 **Material Breakdown**: Shows both base materials and intermediate items required
- 🌳 **Crafting Tree Visualization**: Visual representation of the crafting process
- 🌐 **Multi-language Support**: Available in Portuguese and English
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Minecraft-themed UI**: Custom fonts and styling that matches the game's aesthetic
- 📦 **Pack Display**: Option to show results in stacks of 64 items

## Categories

The calculator includes items from all major Refined Storage categories:

- **Base Materials**: Iron, Gold, Diamond, Nether Quartz, Redstone, etc.
- **Processors**: Basic, Improved, and Advanced processors
- **Components**: Storage parts, machine casings, and housings
- **Storage Disks**: 1K, 4K, 16K, and 64K storage disks
- **Core Blocks**: Controllers, disk drives, grids, and interfaces

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/refined-storage-calculator
cd refined-storage-calculator
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
bun run build
```

The build files will be generated in the `dist` directory.

## Usage

1. **Select Items**: Use the item selector to choose what you want to craft
2. **Set Quantities**: Specify how many of each item you need
3. **View Results**: See the complete breakdown of required materials
4. **Explore Crafting Tree**: Click on items to see the crafting hierarchy

## Technology Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Fonts**: Custom Minecraft-themed fonts (Monocraft)

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── CraftingTree.tsx
│   ├── ItemSelector.tsx
│   └── ResultsDisplay.tsx
├── contexts/           # React contexts
├── data/              # Static data (recipes, icons)
├── i18n/              # Internationalization
├── pages/             # Page components
├── types.ts           # TypeScript type definitions
└── utils/             # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Adding New Items

To add new Refined Storage items:

1. Add the recipe to `src/data/recipes.ts`
2. Add the item icon to `src/data/icons.tsx`
3. Add translations in `src/i18n/translations.ts`
4. Update the category mapping if needed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the Refined Storage mod creators for the amazing mod
- Inspired by the Minecraft community's need for crafting calculators
- Built with modern web technologies for the best user experience

## Support

If you encounter any issues or have suggestions for improvements, please:

1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Consider contributing with a pull request

---

**Note**: This calculator is a fan-made tool and is not officially associated with the Refined Storage mod or its developers.
