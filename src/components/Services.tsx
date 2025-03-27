import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FadeIn } from "./FadeIn";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.individual_cremation_title"),
      description: t("services.individual_cremation_description"),
      icon: "🔥",
    },
    {
      title: t("services.collective_cremation_title"),
      description: t("services.collective_cremation_description"),
      icon: "🌍",
    },
    {
      title: t("services.memorial_products_title"),
      description: t("services.memorial_products_description"),
      icon: "🏺",
    },

    {
      title: t("services.home_pickup_title"),
      description: t("services.home_pickup_description"),
      icon: "🚗",
    },
  ];

  return (
    <section id="services" className="py-6 md:py-16 lg:py-24  bg-secondary/50">
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="heading-lg mb-4">{t("services.services_title")}</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="body-base">{t("services.services_description")}</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={100 * index} threshold={0.1}>
              <Card className="h-full subtle-shadow hover:-translate-y-1 transition-all overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
