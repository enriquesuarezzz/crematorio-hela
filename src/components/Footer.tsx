import { FadeIn } from "./FadeIn";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-background py-6 mt-12 md:mt-0 md:py-12 border-t border-border/50">
      <div className="container-xl">
        {/* Links Section */}
        <div className="flex flex-col items-center">
          <FadeIn direction="up" className="w-full">
            <ul className="grid grid-cols-3 gap-2 md:flex md:justify-between w-full text-base">
              {[
                { name: t("navbar.services"), href: "#services" },
                { name: t("navbar.process"), href: "#process" },
                { name: t("navbar.fares"), href: "#fares" },
                { name: t("navbar.schedules"), href: "#schedules" },
                { name: t("navbar.about"), href: "#about" },
                { name: t("navbar.contact"), href: "#contact" },
              ].map((item) => (
                <li key={item.name} className="flex-1 text-center">
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-orange transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Divider */}
        <hr className="my-8 border-border/20 border-gray-400" />

        {/* Title and Subtitle Section */}
        <div className="flex flex-col ">
          <FadeIn direction="up" className="flex flex-col items-center">
            <h3 className="font-serif text-xl mb-4">{t("footer.title")}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {t("footer.description")}
            </p>
          </FadeIn>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-border/20 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {t("footer.copyright")}
            </p>
            <div className="flex items-center ml-2 gap-2 pt-2 md:pt-0">
              <p className="text-sm text-muted-foreground">Created by</p>
              <a
                href="https://www.enriquesuarez.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/es_black.avif"
                  alt="Enrique Suarez Logo"
                  className="h-5 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
