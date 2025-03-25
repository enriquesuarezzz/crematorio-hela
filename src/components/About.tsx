
import { FadeIn } from "./FadeIn";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="overflow-hidden rounded-2xl glass-card p-1">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Peaceful garden memorial"
                className="rounded-xl w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn direction="left" delay={100}>
              <h2 className="heading-lg mb-6">About Peaceful Paws</h2>
            </FadeIn>

            <FadeIn direction="left" delay={200}>
              <p className="body-base mb-6">
                Founded by pet lovers who understand the deep bond between humans and their animal companions, Peaceful Paws has been providing compassionate end-of-life services for pets since 2010.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={300}>
              <p className="body-base mb-6">
                Our team consists of certified pet crematory operators and grief counselors who approach each family with empathy and understanding. We believe that saying goodbye to a beloved pet should be as dignified and meaningful as the love they gave us throughout their lives.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={400}>
              <p className="body-base">
                Our state-of-the-art facility is designed to provide a peaceful environment where you can trust that your pet will be treated with the utmost care and respect during their final journey.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
