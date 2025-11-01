import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Building2,
  Globe
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully",
      description: "Our team will respond to your inquiry within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const offices = [
    {
      name: "North America Headquarters",
      address: "123 Pharma Avenue, Medical District",
      city: "New York, NY 10001",
      phone: "+1 (800) 123-4567",
      email: "usa@medpharm.com",
    },
    {
      name: "European Office",
      address: "45 Medical Plaza, Healthcare Zone",
      city: "London, UK EC1A 1BB",
      phone: "+44 20 1234 5678",
      email: "europe@medpharm.com",
    },
    {
      name: "Asia Pacific Hub",
      address: "78 Innovation Drive, Tech Park",
      city: "Singapore 138543",
      phone: "+65 6123 4567",
      email: "apac@medpharm.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4" variant="outline">Contact Us</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 glow-text-cyan px-2">
              Let's Start a Conversation
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground px-2">
              Have questions about our products or services? Our team is ready to help 
              you find the right pharmaceutical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="p-4 sm:p-6 text-center hover:glow-cyan transition-all">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 glass rounded-full mb-3 sm:mb-4 border border-primary/50">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Phone</h3>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Mon-Fri, 9AM-6PM EST</p>
              <p className="text-xs sm:text-sm text-primary mt-1">+1 (800) 123-4567</p>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:glow-cyan transition-all">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 glass rounded-full mb-3 sm:mb-4 border border-primary/50">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">24/7 support</p>
              <p className="text-xs sm:text-sm text-primary mt-1 break-all">sales@medpharm.com</p>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:glow-cyan transition-all">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 glass rounded-full mb-3 sm:mb-4 border border-primary/50">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Live Chat</h3>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Instant response</p>
              <p className="text-xs sm:text-sm text-primary mt-1">Start chat below</p>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:glow-cyan transition-all">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 glass rounded-full mb-3 sm:mb-4 border border-primary/50">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Hours</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Mon-Fri: 9AM-6PM</p>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Sat: 10AM-2PM</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Send Us a Message</h2>
              <Card className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@hospital.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company/Organization</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your hospital or clinic"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject *</label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements or questions..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Visit Our Offices</h2>
                <div className="space-y-6">
                  {offices.map((office, idx) => (
                    <Card key={idx} className="p-6 hover:glow-purple transition-all">
                      <div className="flex items-start gap-4">
                        <div className="glass p-3 rounded-full border border-primary/50 flex-shrink-0">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{office.name}</h3>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <div>
                                <div>{office.address}</div>
                                <div>{office.city}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              <span>{office.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              <span>{office.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Global Presence
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  With offices across North America, Europe, and Asia Pacific, we're 
                  positioned to serve healthcare providers worldwide with local support 
                  and global expertise.
                </p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-primary">15</div>
                    <div className="text-muted-foreground">Countries</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">8</div>
                    <div className="text-muted-foreground">Offices</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">24/7</div>
                    <div className="text-muted-foreground">Support</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass p-12 rounded-3xl border border-primary/30">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Looking for Quick Answers?</h2>
              <p className="text-muted-foreground">
                Common questions about our products and services
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Product Information</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed specifications and certifications
                </p>
                <Button variant="outline" size="sm" className="w-full">View Products</Button>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Quality & Compliance</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Certifications and regulatory information
                </p>
                <Button variant="outline" size="sm" className="w-full">Learn More</Button>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Partnership Programs</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Distributor and partnership opportunities
                </p>
                <Button variant="outline" size="sm" className="w-full">Get Started</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
