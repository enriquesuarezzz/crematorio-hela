import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["services", "process", "fares", "schedules", "about"];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-soft-sm py-3"
          : "bg-transparent"
      )}
    >
      <div className="container-xl flex items-center justify-between">
        <a
          href="#"
          className="font-serif flex items-center gap-2 text-xl md:text-2xl text-primary transition hover:text-orange"
        >
          <img src="/images/logo.avif" alt="logo" className="w-40 h-16" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all link-underline"
            >
              {t(`navbar.${item}`)}
            </a>
          ))}
          <Button
            asChild
            variant="default"
            size="sm"
            className="bg-[#f39318] hover:bg-hover-orange transition-all"
          >
            <a href="#contact">{t("navbar.contact")}</a>
          </Button>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 bg-foreground rounded-full transition-all duration-300",
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              )}
            />
            <span
              className={cn(
                "block h-0.5 bg-foreground rounded-full transition-all duration-300",
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "block h-0.5 bg-foreground rounded-full transition-all duration-300",
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden z-40",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t(`navbar.${item}`)}
            </a>
          ))}
          <Button
            asChild
            variant="default"
            size="default"
            className="mt-4 bg-orange hover:bg-orange/90"
          >
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              {t("navbar.contact")}
            </a>
          </Button>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
