import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import HeroScrollDemo from "@/components/container-scroll-animation-demo";
import HeroWithEffects from "@/components/hero-with-effects";
import BentoFeatures from "@/components/bento-features";
import FocusProductsSection from "@/components/focus-products-section";
import TestimonialsSection from "@/components/testimonials-section";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="bg-background">

      {/* Hero Section with Flip Words & Background Beams */}
      <HeroWithEffects />

      {/* Scroll Animation Demo Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-primary/5 to-transparent" />
        <HeroScrollDemo />
      </section>

      {/* Bento Grid Features */}
      <BentoFeatures />

      {/* Focus Cards Product Showcase */}
      <FocusProductsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Get in Touch
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Ready to partner with us? Our team is here to answer your questions 
                and discuss how we can support your pharmaceutical needs.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Phone</div>
                    <div className="text-muted-foreground text-sm sm:text-base">+1 (800) 123-4567</div>
                    <div className="text-muted-foreground text-xs sm:text-sm">Mon-Fri, 9AM-6PM EST</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Email</div>
                    <div className="text-muted-foreground text-sm sm:text-base break-all">sales@medpharm.com</div>
                    <div className="text-muted-foreground text-sm sm:text-base break-all">support@medpharm.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Headquarters</div>
                    <div className="text-muted-foreground text-sm sm:text-base">123 Pharma Avenue</div>
                    <div className="text-muted-foreground text-sm sm:text-base">Medical District, NY 10001</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass p-6 sm:p-8 rounded-2xl border border-primary/30">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@hospital.com"
                    className="text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">Company/Hospital</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your organization"
                    className="text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">Message *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="text-sm sm:text-base"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
