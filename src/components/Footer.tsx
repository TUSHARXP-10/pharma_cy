import { Pill, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-primary/20 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Pill className="h-5 w-5 sm:h-6 sm:w-6 text-primary glow-cyan flex-shrink-0" />
              <span className="font-bold text-sm sm:text-base">MedPharm Solutions</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Trusted pharmaceutical manufacturing partner for healthcare providers worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/products" className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/contact" className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Products</h4>
            <div className="space-y-2">
              <div className="text-xs sm:text-sm text-muted-foreground">Cardiovascular</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Antibiotics</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Diabetes Care</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Oncology</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />
                <span>123 Pharma Avenue, Medical District, NY 10001</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground break-all">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>sales@medpharm.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} MedPharm Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Compliance</a>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 text-center">
          <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-3 text-xs text-muted-foreground">
            <span className="glass px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border border-primary/30">ISO 9001:2015</span>
            <span className="glass px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border border-primary/30">WHO-GMP</span>
            <span className="glass px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border border-primary/30">FDA Approved</span>
            <span className="glass px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border border-primary/30">EMA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
