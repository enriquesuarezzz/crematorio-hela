
import { FadeIn } from "./FadeIn";

const processSteps = [
  {
    number: "01",
    title: "Initial Contact",
    description: "Reach out to us by phone, email, or through our website. We're available 24/7 to assist you during this difficult time.",
  },
  {
    number: "02",
    title: "Arrangements",
    description: "Discuss your preferences, select the type of cremation service, and choose any memorial products you desire.",
  },
  {
    number: "03",
    title: "Transportation",
    description: "We'll arrange for the gentle transport of your pet from your home or veterinary clinic to our facility.",
  },
  {
    number: "04",
    title: "Cremation",
    description: "Your pet will be cremated with care and dignity according to your chosen service type.",
  },
  {
    number: "05",
    title: "Return of Ashes",
    description: "Receive your pet's ashes in your selected urn, either by pickup at our facility or delivery to your home.",
  },
  {
    number: "06",
    title: "Aftercare Support",
    description: "We continue to provide resources and support to help you navigate your grief journey.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24">
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="heading-lg mb-4">The Process</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="body-base">
              We've designed a compassionate process to ensure your pet's final journey is handled with care and respect.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {processSteps.map((step, index) => (
            <FadeIn key={index} delay={100 * index} direction="up">
              <div className="relative">
                <div className="absolute -top-8 text-6xl font-light text-accent/20">
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
