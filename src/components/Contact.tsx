import { FadeIn } from "./FadeIn";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-6 md:py-16 lg:py-24  bg-secondary/50">
      <div className="container-xl">
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center">
            <FadeIn direction="up">
              <h2 className="heading-lg mb-6">{t("contact_us.contact_us")}</h2>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <p className="body-base mb-8">
                {t("contact_us.we_are_here_to_telp")}
              </p>
            </FadeIn>

            <div className="md:grid flex flex-col md:grid-cols-2 gap-12">
              <FadeIn direction="up" delay={300}>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f39318]/20 p-3 rounded-lg shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-[#f39318]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 ">
                      {t("contact_us.location")}
                    </h3>
                    <p className="text-muted-foreground">
                      <a
                        href="https://www.google.com/maps?q=C/Agustin+de+la+Hoz+Betancort,+11,+Arrecife,+Lanzarote+35500"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:underline transition-all duration-300 ease-in-out"
                      >
                        C/Agustin de la Hoz Betancort, 11
                        <br />
                        Arrecife, Lanzarote 35500
                      </a>
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={400}>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f39318]/20 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-[#f39318]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">
                      {t("contact_us.phone")}
                    </h3>

                    <p className="text-muted-foreground">
                      <a
                        href="tel:+34672187032"
                        className="text-gray-600 hover:underline"
                      >
                        (+34) 672 187 032
                      </a>
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={500}>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f39318]/20 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-[#f39318]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">
                      {t("contact_us.email")}
                    </h3>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:info@crematoriohela.com"
                        className="text-gray-600 hover:underline"
                      >
                        info@crematoriohela.com
                      </a>
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
