import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Working with this pharmaceutical company has transformed our procurement process. The quality consistency and regulatory compliance are outstanding. Their team's professionalism and commitment to patient safety align perfectly with our hospital's values.",
      name: "Dr. Sarah Mitchell",
      designation: "Chief Pharmacy Officer at Metropolitan Hospital",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    },
    {
      quote:
        "As a distributor, reliability is everything. This supplier has never let us down. Their GMP-certified products, competitive pricing, and efficient logistics have made them our preferred pharmaceutical partner for over 5 years.",
      name: "James Rodriguez",
      designation: "Director at MedSupply Global",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    },
    {
      quote:
        "The quality assurance documentation and certification support they provide makes regulatory audits seamless. Their commitment to WHO-GMP standards and transparent communication sets them apart in the pharmaceutical industry.",
      name: "Dr. Emily Chen",
      designation: "Quality Assurance Manager at HealthCore Pharma",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    },
    {
      quote:
        "From cardiovascular to oncology products, their portfolio is comprehensive and consistently meets our clinical needs. The technical support team is always available to address any questions. Outstanding pharmaceutical partnership.",
      name: "Dr. Michael Thompson",
      designation: "Head of Procurement at Regional Medical Center",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 glow-text-cyan">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what healthcare leaders say about partnering with us
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}
