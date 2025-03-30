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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const menuItems = ["services", "urns", "fares", "schedules", "about"];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-soft-sm py-3"
            : "bg-transparent"
        )}
      >
        <div className="w-full flex items-center justify-center p-4  gap-10">
          <a
            href="#"
            className="font-serif flex items-center gap-2 text-xl md:text-2xl text-primary transition hover:text-orange"
          >
            <img
              src="/images/logo.avif"
              alt="logo"
              className="w-40 h-16 md:w-28 md:h-10 lg:w-40 lg:h-16"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
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
            className="md:hidden focus:outline-none relative w-6 h-6 flex flex-col justify-between"
            aria-label="Toggle Menu"
          >
            <span
              className={cn(
                "block h-0.5 bg-foreground rounded-full transition-all duration-300 w-full",
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              )}
            />
            <span
              className={cn(
                "block h-0.5 bg-foreground rounded-full transition-all duration-300 w-full",
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "block h-0.5 bg-foreground rounded-full transition-all duration-300 w-full",
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu (moved outside header) */}
      <div
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out md:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Close Button (X) */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-5 right-6 p-2 rounded-full focus:outline-none"
          aria-label="Close Menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className="block h-0.5 w-full bg-foreground rotate-45 translate-y-2.5 transition-all duration-300" />
            <span className="block h-0.5 w-full bg-foreground -rotate-45 -translate-y-2.5 transition-all duration-300" />
          </div>
        </button>

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
      </div>
    </>
  );
};

export default NavBar;
