import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function HeroWithEffects() {
  const words = ["Reliable", "Certified", "Quality", "Trusted"];

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <BackgroundBeams className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="glass border border-primary/50 text-primary px-4 py-2 rounded-full text-sm font-semibold glow-cyan">
              Pharmaceutical Excellence Since 1999
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-7xl font-bold leading-tight text-foreground">
            <FlipWords words={words} className="text-primary glow-text-cyan" />
            <br />
            Pharmaceutical Solutions
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering world-class medicines to healthcare providers worldwide. 
            ISO 9001, WHO-GMP & FDA certified with 25+ years of excellence.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="xl">
              Explore Products
            </Button>
            <Button variant="outline" size="xl">
              Request Catalog
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 lg:gap-12 pt-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary glow-text-cyan">500+</div>
              <div className="text-sm text-muted-foreground">Healthcare Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary glow-text-cyan">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary glow-text-cyan">99.8%</div>
              <div className="text-sm text-muted-foreground">Quality Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
