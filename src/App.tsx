import { Toaster } from "@/components/ui/toaster"; // Keeping the Toaster component
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LanguageSwitcher from "./components/LanguageSwitcher";

const queryClient = new QueryClient();

const App = () => {
  const { t } = useTranslation(); // Hook to get translations

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster /> {/* Keep only one toast component */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
