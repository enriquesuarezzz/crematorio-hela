
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "./FadeIn";

const services = [
  {
    title: "Individual Cremation",
    description: "A private cremation where your pet is cremated alone, ensuring you receive only your pet's ashes.",
    icon: "🔥",
  },
  {
    title: "Memorial Products",
    description: "Beautiful urns, paw prints, and keepsakes to preserve your pet's memory in a special way.",
    icon: "🏺",
  },
  {
    title: "Home Pickup",
    description: "Compassionate transport service to bring your pet from your home to our facility with dignity.",
    icon: "🚗",
  },
  {
    title: "Memorial Services",
    description: "Optional ceremonies to celebrate your pet's life with friends and family in a peaceful setting.",
    icon: "🕯️",
  },
  {
    title: "Grief Support",
    description: "Resources and counseling to help you cope with the loss of your beloved companion.",
    icon: "❤️",
  },
  {
    title: "Personalized Keepsakes",
    description: "Custom memorials including photo frames, jewelry, and glass art created with your pet's ashes.",
    icon: "🖼️",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="heading-lg mb-4">Our Services</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="body-base">
              We offer a range of compassionate services to honor your pet's memory with dignity and respect.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
