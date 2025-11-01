import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  ShieldCheck,
  Award,
  Microscope,
  HeartPulse,
  Globe,
  Clock,
  Users,
} from "lucide-react";

export default function BentoFeatures() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 glow-text-cyan px-2">
            Why Healthcare Providers Choose Us
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Comprehensive pharmaceutical solutions backed by decades of expertise
          </p>
        </div>
        <BentoGrid className="max-w-6xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "ISO 9001:2015 Certified",
    description: "International quality management standards ensuring consistent excellence in every product.",
    header: <Skeleton />,
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "WHO-GMP Compliance",
    description: "World Health Organization Good Manufacturing Practice certified facilities.",
    header: <Skeleton />,
    icon: <Award className="h-6 w-6 text-primary" />,
  },
  {
    title: "Advanced R&D Labs",
    description: "State-of-the-art research facilities developing next-generation pharmaceuticals.",
    header: <Skeleton />,
    icon: <Microscope className="h-6 w-6 text-primary" />,
  },
  {
    title: "24/7 Quality Monitoring",
    description: "Round-the-clock quality control with rigorous testing protocols at every production stage. Complete batch traceability and documentation.",
    header: <Skeleton />,
    icon: <Clock className="h-6 w-6 text-primary" />,
  },
  {
    title: "Patient-Centric Approach",
    description: "Every decision prioritizes patient safety and therapeutic efficacy.",
    header: <Skeleton />,
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
  },
  {
    title: "Global Distribution",
    description: "Serving healthcare providers in over 50 countries worldwide.",
    header: <Skeleton />,
    icon: <Globe className="h-6 w-6 text-primary" />,
  },
  {
    title: "Expert Support Team",
    description: "Dedicated pharmaceutical specialists providing technical support, documentation assistance, and regulatory guidance for seamless operations.",
    header: <Skeleton />,
    icon: <Users className="h-6 w-6 text-primary" />,
  },
];
