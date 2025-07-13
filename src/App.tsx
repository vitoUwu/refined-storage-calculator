import React, { useState, useMemo } from 'react';
import { Globe } from 'lucide-react';
import { RefinedStorageCalculator } from './utils/calculator';
import { ItemSelector } from './components/ItemSelector';
import { ResultsDisplay } from './components/ResultsDisplay';
import { CraftingSelection, CalculationResult } from './types';
import { useLanguage } from './contexts/LanguageContext';

export default function App() {
  const { t, language, setLanguage } = useLanguage();
  const [selection, setSelection] = useState<CraftingSelection>({});

  const calculator = useMemo(() => new RefinedStorageCalculator(), []);

  const results: CalculationResult | null = useMemo(() => {
    if (Object.keys(selection).length === 0) {
      return null;
    }
    return calculator.calculate(selection);
  }, [selection, calculator]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <h1 className="text-4xl font-bold text-white mb-2">
                {t.appTitle}
              </h1>
              <p className="text-xl text-blue-400 font-semibold">
                {t.appSubtitle}
              </p>
              <p className="text-gray-400 mt-2">
                {t.appDescription}
              </p>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-gray-400" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
              >
                <option value="pt-BR">🇧🇷 Português</option>
                <option value="en">🇺🇸 English</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Seleção de Items */}
          <div>
            <ItemSelector
              calculator={calculator}
              selection={selection}
              onSelectionChange={setSelection}
            />
          </div>

          {/* Resultados */}
          <div>
            <ResultsDisplay results={results} />
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="mt-12 bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">{t.howToUse}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mb-2">
                1
              </div>
              <h3 className="font-semibold text-white">{t.step1Title}</h3>
              <p className="text-sm">
                {t.step1Description}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold mb-2">
                2
              </div>
              <h3 className="font-semibold text-white">{t.step2Title}</h3>
              <p className="text-sm">
                {t.step2Description}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold mb-2">
                3
              </div>
              <h3 className="font-semibold text-white">{t.step3Title}</h3>
              <p className="text-sm">
                {t.step3Description}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>
            Calculadora de Recursos para Refined Storage •
            Todas as receitas baseadas na versão mais recente do mod
          </p>
        </footer>
      </main>
    </div>
  );
}
