import { Pill, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Pill className="h-6 w-6 text-primary glow-cyan" />
              <span className="font-bold">MedPharm Solutions</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted pharmaceutical manufacturing partner for healthcare providers worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/products" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Cardiovascular</div>
              <div className="text-sm text-muted-foreground">Antibiotics</div>
              <div className="text-sm text-muted-foreground">Diabetes Care</div>
              <div className="text-sm text-muted-foreground">Oncology</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Pharma Avenue, Medical District, NY 10001</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>sales@medpharm.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} MedPharm Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Compliance</a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="glass px-3 py-1 rounded-full border border-primary/30">ISO 9001:2015</span>
            <span className="glass px-3 py-1 rounded-full border border-primary/30">WHO-GMP</span>
            <span className="glass px-3 py-1 rounded-full border border-primary/30">FDA Approved</span>
            <span className="glass px-3 py-1 rounded-full border border-primary/30">EMA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
