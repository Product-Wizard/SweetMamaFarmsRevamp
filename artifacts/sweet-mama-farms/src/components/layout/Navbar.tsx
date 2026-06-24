import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50">
          <img src="/sweet-mama-logo.jpg" alt="Sweet Mama Farms" className="h-12 w-auto rounded-md shadow-sm" />
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? "text-foreground" : "text-foreground drop-shadow-sm"}`}>
            Sweet Mama <span className="text-primary">Farms</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground/80" : "text-foreground/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button asChild className="font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all">
            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Partner With Us</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-6 flex flex-col gap-4 border-t border-border"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-semibold text-foreground/80 hover:text-primary py-2 border-b border-border/50"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="w-full mt-4 font-semibold rounded-full">
                <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Partner With Us</a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
