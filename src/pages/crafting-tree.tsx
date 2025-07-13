import { ArrowLeft, Github } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CraftingTree } from "../components/CraftingTree";
import { Button } from "../components/ui";
import { useLanguage } from "../contexts/LanguageContext";

export default function CraftingTreePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();

  const itemId = searchParams.get("item") || "";
  const quantity = parseInt(searchParams.get("quantity") || "1");

  useEffect(() => {
    if (!itemId) {
      navigate("/");
    }
  }, [itemId, navigate]);

  const openGitHub = () => {
    window.open("https://github.com/vitoUwu/refined-storage-calculator", "_blank");
  };

  if (!itemId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Item não especificado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="bg-core-grey-4 border-b border-core-grey-3 fixed left-0 top-0 w-screen z-10">
        <div className="max-w-screen mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => navigate(-1)}
                variant="secondary"
                size="sm"
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.back}</span>
              </Button>
              <h1 className="text-xl font-medium text-white">
                {t.craftingTree}
              </h1>
            </div>

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
          </div>
        </div>
      </header>

      <main className="mx-auto px-4 py-8 mt-14 w-screen overflow-x-auto">
        <CraftingTree
          itemId={itemId}
          quantity={quantity}
          isFullPage={true}
        />
      </main>
    </div>
  );
}
