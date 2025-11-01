import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function HeroWithEffects() {
  const words = ["Reliable", "Certified", "Quality", "Trusted"];

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-32">
      <BackgroundBeams className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-block">
            <span className="glass border border-primary/50 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold glow-cyan">
              Pharmaceutical Excellence Since 1999
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-foreground">
            <FlipWords words={words} className="text-primary glow-text-cyan" />
            <br />
            Pharmaceutical Solutions
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Delivering world-class medicines to healthcare providers worldwide. 
            ISO 9001, WHO-GMP & FDA certified with 25+ years of excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Explore Products
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Request Catalog
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-12 pt-6 sm:pt-8 px-2">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary glow-text-cyan">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Healthcare<br className="sm:hidden" /> Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary glow-text-cyan">25+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Years<br className="sm:hidden" /> Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary glow-text-cyan">99.8%</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Quality<br className="sm:hidden" /> Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
