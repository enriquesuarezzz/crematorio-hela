
import { Button } from '@/components/ui/button';
import { FadeIn } from './FadeIn';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      <div 
        className="absolute inset-0 -z-10 opacity-20 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/90 via-background/50 to-background/90" />
      
      <div className="container-xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        {isMobile && (
          <FadeIn direction="down" delay={100} className="order-first mb-8">
            <div className="glass-card rounded-2xl p-2 shadow-soft-lg mx-auto max-w-md">
              <div className="overflow-hidden rounded-xl border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" 
                  alt="A peaceful memorial for a pet" 
                  className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </FadeIn>
        )}
        
        <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
          <FadeIn direction="up" delay={isMobile ? 200 : 100}>
            <h1 className="heading-xl mb-6">
              A <span className="text-accent">Peaceful</span> Farewell for Your Beloved Companion
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={isMobile ? 300 : 300}>
            <p className="body-lg mb-8 max-w-lg mx-auto md:mx-0">
              Compassionate, dignified cremation services to honor the memory of your cherished pet with the respect they deserve.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={isMobile ? 400 : 500}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 px-8">
                <a href="#services">Our Services</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn direction="left" delay={700} className="hidden md:block">
          <div className="glass-card rounded-2xl p-1 shadow-soft-lg">
            <div className="overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" 
                alt="A peaceful memorial for a pet" 
                className="w-full h-auto object-cover transition-transform duration-7000 hover:scale-105"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
