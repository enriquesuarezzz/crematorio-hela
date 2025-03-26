import { FadeIn } from "./FadeIn";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 border-t border-border/50">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn direction="up">
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-serif text-xl mb-4">Peaceful Paws</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Providing compassionate end-of-life care for beloved pets since
                2010.
              </p>
              <div className="flex gap-4">
                {["facebook", "twitter", "instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label={`Visit our ${social}`}
                  >
                    <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center">
                      <span className="sr-only">{social}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-medium text-base mb-4">Quick Links</h3>
              <ul className="gap-2 text-sm grid grid-cols-3">
                {[
                  { name: "Servicios", href: "#services" },
                  { name: "Proceso", href: "#process" },
                  { name: "Tarifas", href: "#fares" },
                  { name: "Horarios", href: "#schedules" },
                  { name: "Sobre Nosotros", href: "#about" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={300}>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-medium text-base mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-muted-foreground"
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
                </li>
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-muted-foreground"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
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
                </li>
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-muted-foreground"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:info@crematoriohela.com"
                      className="text-accent hover:underline"
                    >
                      info@crematoriohela.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <div className="mt-3 pt-8 border-t border-border/20 text-center">
          <div className="flex items-center justify-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Peaceful Paws. All rights reserved.
            </p>
            <div className="flex items-center ml-2 gap-2">
              <p className="text-sm text-muted-foreground">Created by</p>
              <a
                href="https://www.enriquesuarez.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/es_black.avif"
                  alt="Peaceful Paws"
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
