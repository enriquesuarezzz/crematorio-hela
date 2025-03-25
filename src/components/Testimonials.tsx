
import { FadeIn } from "./FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    text: "The compassion and care shown by the Peaceful Paws team helped make an incredibly difficult time more bearable. I'm grateful for their gentle guidance through the entire process.",
    author: "Sarah M.",
    pet: "Bailey, Golden Retriever",
  },
  {
    text: "I appreciated the individual attention and respect shown to my cat Mittens. The memorial paw print they created is now a cherished keepsake in our home.",
    author: "David L.",
    pet: "Mittens, Tabby Cat",
  },
  {
    text: "The home pickup service was so helpful during our time of grief. The staff was kind, professional, and handled everything with dignity.",
    author: "Jennifer R.",
    pet: "Max, Labrador",
  },
  {
    text: "After 15 years together, saying goodbye to Luna was heartbreaking. Peaceful Paws helped us honor her memory with a beautiful ceremony and customized urn.",
    author: "Michael K.",
    pet: "Luna, Siamese Cat",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextTestimonial, 8000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section id="testimonials" className="py-24">
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="heading-lg mb-4">Client Experiences</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="body-base">
              Words from families we've had the honor to serve during their time of loss.
            </p>
          </FadeIn>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="glass-card py-10 px-8 shadow-soft-lg">
                    <CardContent className="p-0 text-center">
                      <div className="text-4xl mb-6 text-accent">❝</div>
                      <p className="text-lg mb-8 italic text-muted-foreground">
                        {testimonial.text}
                      </p>
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.pet}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-accent" : "bg-accent/20"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 glass-panel h-10 w-10 rounded-full flex items-center justify-center shadow-soft transition-all hover:shadow-soft-lg"
            aria-label="Previous testimonial"
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 glass-panel h-10 w-10 rounded-full flex items-center justify-center shadow-soft transition-all hover:shadow-soft-lg"
            aria-label="Next testimonial"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
