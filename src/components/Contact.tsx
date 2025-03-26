import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: t("contact_us.message_sent"),
      description: t("contact_us.we_will_get_back_to_you"),
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <FadeIn direction="up">
              <h2 className="heading-lg mb-6">{t("contact_us.contact_us")}</h2>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <p className="body-base mb-8">
                {t("contact_us.we_are_here_to_telp")}
              </p>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn direction="up" delay={300}>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-accent"
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
                    <h3 className="font-medium mb-1">
                      {t("contact_us.location")}
                    </h3>
                    <p className="text-muted-foreground">
                      <a
                        href="https://www.google.com/maps?q=C/Agustin+de+la+Hoz+Betancort,+11,+Arrecife,+Lanzarote+35500"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
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
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-accent"
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
                        href="tel:+34680128177"
                        className="text-accent hover:underline"
                      >
                        (+34) 680 128 177
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:+34672187032"
                        className="text-accent hover:underline"
                      >
                        (+34) 672 187 032
                      </a>
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={500}>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-accent"
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
                        className="text-accent hover:underline"
                      >
                        info@crematoriohela.com
                      </a>
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn direction="up" delay={300}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-6">
                {t("contact_us.send_us_message")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("contact_us.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("contact_us.your_name")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("contact_us.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("contact_us.your_email")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    {t("contact_us.phone_number")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder={t("contact_us.phone_number")}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t("contact_us.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact_us.how_can_we_help")}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  {t("contact_us.send_message")}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
