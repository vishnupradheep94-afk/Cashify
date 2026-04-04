import { Link } from "react-router-dom";
import { Smartphone, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">C</span>
              </div>
              <span className="text-xl font-bold">Cashify</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              India's leading re-commerce platform for selling and buying refurbished electronic gadgets.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Sell Gadgets</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/sell/phones" className="hover:opacity-100 transition-opacity">Sell Old Phone</Link></li>
              <li><Link to="/sell/laptops" className="hover:opacity-100 transition-opacity">Sell Old Laptop</Link></li>
              <li><Link to="/sell/tablets" className="hover:opacity-100 transition-opacity">Sell Old Tablet</Link></li>
              <li><Link to="/sell/watches" className="hover:opacity-100 transition-opacity">Sell Smart Watch</Link></li>
              <li><Link to="/sell/consoles" className="hover:opacity-100 transition-opacity">Sell Gaming Console</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/careers" className="hover:opacity-100 transition-opacity">Careers</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@cashify.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 9999-999-999</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Gurugram, Haryana, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm opacity-50">
          © 2026 Cashify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
