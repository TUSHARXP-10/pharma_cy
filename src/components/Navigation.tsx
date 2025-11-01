import { Button } from "@/components/ui/button";
import { Pill, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="glass border-b border-primary/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Pill className="h-6 w-6 sm:h-8 sm:w-8 text-primary glow-cyan flex-shrink-0" />
            <span className="text-base sm:text-xl font-bold text-foreground glow-text-cyan">
              MedPharm Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "text-primary glow-text-cyan"
                    : "text-foreground hover:text-primary hover:glow-text-cyan"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button size="sm" variant="outline">Request Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "text-primary glow-text-cyan"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" variant="outline" className="w-full">
                Request Quote
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
