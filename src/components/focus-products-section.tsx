import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusProductsSection() {
  const cards = [
    {
      title: "Cardiovascular Excellence",
      src: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=600&fit=crop",
    },
    {
      title: "Advanced Antibiotics",
      src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
    },
    {
      title: "Diabetes Management",
      src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 glow-text-purple px-2">
            Featured Product Categories
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Hover to explore our specialized therapeutic areas
          </p>
        </div>
        <FocusCards cards={cards} />
      </div>
    </section>
  );
}
