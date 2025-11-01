import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Globe, 
  TrendingUp,
  Target,
  Heart,
  Building2,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const milestones = [
    { year: "1998", event: "Company Founded", desc: "Started with vision to transform healthcare" },
    { year: "2005", event: "ISO Certification", desc: "Achieved ISO 9001:2015 certification" },
    { year: "2012", event: "Global Expansion", desc: "Expanded operations to 15 countries" },
    { year: "2020", event: "500+ Partners", desc: "Reached milestone of healthcare partnerships" },
  ];

  const values = [
    { icon: Target, title: "Precision", desc: "Unwavering commitment to quality and accuracy" },
    { icon: Heart, title: "Compassion", desc: "Patient wellbeing at the heart of everything" },
    { icon: Globe, title: "Integrity", desc: "Ethical practices in every business decision" },
    { icon: TrendingUp, title: "Innovation", desc: "Continuous improvement and advancement" },
  ];

  const team = [
    { name: "Dr. Sarah Johnson", role: "Chief Executive Officer", experience: "25+ years pharma leadership" },
    { name: "Dr. Michael Chen", role: "Chief Scientific Officer", experience: "PhD in Pharmaceutical Sciences" },
    { name: "Emma Rodriguez", role: "VP Operations", experience: "20+ years manufacturing excellence" },
    { name: "David Kumar", role: "Head of Quality Assurance", experience: "15+ years regulatory compliance" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="outline">About Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 glow-text-cyan">
              Transforming Healthcare Through Excellence
            </h1>
            <p className="text-lg text-muted-foreground">
              For over 25 years, MedPharm Solutions has been a trusted partner in pharmaceutical 
              manufacturing, delivering quality medicines that improve and save lives globally.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="glass p-3 rounded-full border border-primary/50">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide healthcare professionals with reliable, high-quality pharmaceutical 
                products that meet the highest standards of safety and efficacy, ensuring better 
                patient outcomes worldwide.
              </p>
            </Card>
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="glass p-3 rounded-full border border-secondary/50">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in pharmaceutical manufacturing, recognized for innovation, 
                quality excellence, and unwavering commitment to improving healthcare accessibility 
                for all communities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Key milestones in our growth story</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative">
                <div className="glass p-6 rounded-2xl border border-primary/30 hover:glow-cyan transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                  </div>
                  <h3 className="font-semibold mb-2">{milestone.event}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.desc}</p>
                </div>
                {idx < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">Principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="p-6 text-center hover:glow-purple transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 glass rounded-full mb-4 border border-primary/50">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground">Experienced professionals driving our success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <Card key={idx} className="p-6 text-center hover:-translate-y-2 transition-all">
                <div className="w-24 h-24 glass rounded-full mx-auto mb-4 flex items-center justify-center border border-primary/50">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass p-12 rounded-3xl border border-primary/30">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2 glow-text-cyan">500+</div>
                <div className="text-muted-foreground">Healthcare Partners</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2 glow-text-cyan">15</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2 glow-text-cyan">25+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2 glow-text-cyan">99.8%</div>
                <div className="text-muted-foreground">Quality Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass p-12 rounded-3xl border border-primary/30 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of healthcare providers who trust us for their pharmaceutical needs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">Contact Our Team</Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline">View Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
