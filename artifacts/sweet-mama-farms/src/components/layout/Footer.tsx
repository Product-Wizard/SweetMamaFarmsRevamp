import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f291e] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl inline-flex backdrop-blur-sm">
              <img src="/sweet-mama-logo.jpg" alt="Sweet Mama Farms" className="h-12 w-auto rounded-md" />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Sweet Mama
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Nourishing Nigeria with premium, farm-fresh produce and wholesome food products. Quality you can trust, taste you will love.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-white/90">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#products" className="text-white/70 hover:text-primary transition-colors text-sm">Our Products</a></li>
              <li><a href="#about" className="text-white/70 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#why-us" className="text-white/70 hover:text-primary transition-colors text-sm">Why Choose Us</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-primary transition-colors text-sm">Contact & Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-white/90">Our Products</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Grains & Cereals</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Fresh Produce</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Processed Foods</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-white/90">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">Mamman Kontagora Crescent, Katampe Extension. Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-white/70 text-sm">+234 9082450000   </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-white/70 text-sm">info@sweetmamafarms.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Sweet Mama Farms. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
