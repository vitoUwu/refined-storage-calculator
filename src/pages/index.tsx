import { ItemSelector } from "@/components/ItemSelector";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { Button, Card, CardContent } from "@/components/ui";
import { Select } from "@/components/ui/Select";
import { useLanguage } from "@/contexts/LanguageContext";
import { CalculationResult, CraftingSelection } from "@/types";
import { RefinedStorageCalculator } from "@/utils/calculator";
import { Globe, Github, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";

export default function Index() {
  const { t, language, setLanguage } = useLanguage();
  const [selection, setSelection] = useState<CraftingSelection>({});

  const calculator = useMemo(() => new RefinedStorageCalculator(), []);

  const results: CalculationResult | null = useMemo(() => {
    if (Object.keys(selection).length === 0) {
      return null;
    }
    return calculator.calculate(selection);
  }, [selection, calculator]);

  const handleLanguageChange = (value: string) => {
    if (value === "github") {
      window.open("https://github.com/vitoUwu/refined-storage-calculator", "_blank");
      return;
    }
    setLanguage(value);
  };

  const openGitHub = () => {
    window.open("https://github.com/vitoUwu/refined-storage-calculator", "_blank");
  };

  return (
    <div className="min-h-screen">
      <header className="bg-[#262423e6] shadow-[0_4px_0_0_rgba(0,0,0,.25)]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="text-center flex-1">
              <h1 className="text-4xl font-medium text-white mb-2">
                {t.appTitle}
              </h1>
              <p className="text-xl text-blue-400 font-medium">
                {t.appSubtitle}
              </p>
              <p className="text-gray-400 mt-2">
                {t.appDescription}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={openGitHub}
                variant="secondary"
                size="sm"
                className="flex items-center space-x-2"
                title={t.viewOnGitHub}
              >
                <Github className="w-4 h-4" />
                <span>{t.github}</span>
              </Button>

              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-gray-400" />
                <Select
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="w-40"
                >
                  <option value="pt-BR">Português</option>
                  <option value="en">English</option>
                  <option value="github">{t.addLanguage}</option>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ItemSelector
              calculator={calculator}
              selection={selection}
              onSelectionChange={setSelection}
            />
          </div>

          <div>
            <ResultsDisplay results={results} />
          </div>
        </div>

        <Card className="mt-12">
          <CardContent>
            <h2 className="text-2xl font-medium text-white mb-6">
              {t.howToUse}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div className="space-y-2">
                <Button className="w-8 h-8 text-center mb-2">
                  1
                </Button>
                <h3 className="font-medium text-white">{t.step1Title}</h3>
                <p className="text-sm">
                  {t.step1Description}
                </p>
              </div>

              <div className="space-y-2">
                <Button variant="success" className="w-8 h-8 text-center mb-2">
                  2
                </Button>
                <h3 className="font-medium text-white">{t.step2Title}</h3>
                <p className="text-sm">
                  {t.step2Description}
                </p>
              </div>

              <div className="space-y-2">
                <Button variant="realms" className="w-8 h-8 text-center mb-2">
                  3
                </Button>
                <h3 className="font-medium text-white">{t.step3Title}</h3>
                <p className="text-sm">
                  {t.step3Description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-12 text-center text-gray-500 text-sm space-y-3">
          <p>
            {t.footerDescription}
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button
              onClick={openGitHub}
              variant="secondary"
              size="sm"
              className="flex items-center space-x-2 text-xs"
            >
              <Github className="w-3 h-3" />
              <span>{t.contributeOnGitHub}</span>
              <ExternalLink className="w-3 h-3" />
            </Button>
            <span className="text-gray-600">•</span>
            <span className="text-gray-600">
              {t.developedBy}{" "}
              <a
                href="https://github.com/vitoUwu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                vitoUwu
              </a>
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
