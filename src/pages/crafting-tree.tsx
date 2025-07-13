import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CraftingTree } from "../components/CraftingTree";
import { Button } from "../components/ui";
import { useLanguage } from "../contexts/LanguageContext";

export default function CraftingTreePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();

  const itemId = searchParams.get("item");
  const quantity = parseInt(searchParams.get("quantity") || "1");

  useEffect(() => {
    if (!itemId) {
      navigate("/");
    }
  }, [itemId, navigate]);

  if (!itemId) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <header className="bg-core-grey-4 border-b border-core-grey-3">
        <div className="max-w-screen mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => navigate("/")}
                variant="secondary"
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </Button>
              <h1 className="text-2xl font-bold text-white">
                {t.craftingTree}
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto px-4 py-8">
        <CraftingTree
          itemId={itemId}
          quantity={quantity}
          onClose={() => navigate("/")}
          isFullPage={true}
        />
      </main>
    </div>
  );
}
