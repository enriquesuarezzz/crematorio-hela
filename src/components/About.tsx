import { FadeIn } from "./FadeIn";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-6 md:py-16 lg:py-24 bg-secondary/50">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="overflow-hidden rounded-2xl glass-card p-1">
              <img
                src="/images/about_us.avif"
                alt="Peaceful garden memorial"
                className="rounded-xl w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn direction="left" delay={100}>
              <h2 className="heading-lg mb-6">{t("about.title")}</h2>
            </FadeIn>

            {[1, 2, 3].map((index) => (
              <FadeIn key={index} direction="left" delay={100 * index + 100}>
                <p className="body-base mb-6">{t(`about.paragraph${index}`)}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
