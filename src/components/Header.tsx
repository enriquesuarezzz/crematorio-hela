import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";

const Header = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div
        className="absolute inset-0 -z-10 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/header_image.avif')`,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/90 via-background/50 to-background/90" />

      <div className="container-xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        {isMobile && (
          <FadeIn direction="down" delay={100} className="order-first mb-8">
            <div className="glass-card rounded-2xl p-2 shadow-soft-lg mx-auto max-w-md">
              <div className="overflow-hidden rounded-xl border-4 border-white shadow-lg">
                <img
                  src="/images/header_image.avif"
                  alt={t("header.header_title")}
                  className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </FadeIn>
        )}

        <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
          <FadeIn direction="up" delay={isMobile ? 200 : 100}>
            <h1 className="heading-xl mb-6">{t("header.header_title")}</h1>
          </FadeIn>

          <FadeIn direction="up" delay={isMobile ? 300 : 300}>
            <p className="body-lg mb-8 max-w-lg mx-auto md:mx-0">
              {t("header.header_description")}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={isMobile ? 400 : 500}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-orange hover:bg-hover-orange transition-all px-8"
              >
                <a href="#services">{t("header.header_button_services")}</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <a href="#contact">{t("header.header_button_contact")}</a>
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="left" delay={700} className="hidden md:block">
          <div className="glass-card rounded-2xl p-1 shadow-soft-lg">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/header_image.avif"
                alt={t("header.header_title")}
                className="w-full h-auto object-cover transition-transform duration-7000 hover:scale-105"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Header;
