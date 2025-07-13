import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./index.css";

const Index = lazy(() => import("./pages/index"));
const DesignSystem = lazy(() => import("./pages/design-system"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: Index,
  },
  {
    path: "/design-system",
    Component: DesignSystem,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
);
