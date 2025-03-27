import { useTranslation } from "react-i18next";
import { FadeIn } from "./FadeIn";

const Process = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      number: "01",
      title: t("process.initial_contact_title"),
      description: t("process.initial_contact_description"),
    },
    {
      number: "02",
      title: t("process.arrangements_title"),
      description: t("process.arrangements_description"),
    },
    {
      number: "03",
      title: t("process.transportation_title"),
      description: t("process.transportation_description"),
    },
    {
      number: "04",
      title: t("process.cremation_title"),
      description: t("process.cremation_description"),
    },
    {
      number: "05",
      title: t("process.return_ashes_title"),
      description: t("process.return_ashes_description"),
    },
    {
      number: "06",
      title: t("process.aftercare_support_title"),
      description: t("process.aftercare_support_description"),
    },
  ];

  return (
    <section id="process" className="py-24">
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="heading-lg mb-4">{t("process.title")}</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="body-base">{t("process.description")}</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {processSteps.map((step, index) => (
            <FadeIn key={index} delay={100 * index} direction="up">
              <div className="relative">
                <div className="absolute -top-8 text-6xl font-light text-orange/30">
                  {step.number}
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
