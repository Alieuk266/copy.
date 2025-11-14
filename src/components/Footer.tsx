import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Minnesota Chapter</h3>
            <p className="text-sm opacity-90 mb-4">
              Maryland County Association
            </p>
            <p className="text-sm opacity-80">
              Building stronger communities through collaboration and civic engagement.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span className="text-sm opacity-90">Minnesota, United States</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-5 w-5 mt-0.5" />
                <span className="text-sm opacity-90">(555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-5 w-5 mt-0.5" />
                <span className="text-sm opacity-90">info@mnchapter.org</span>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Minnesota Chapter - Maryland County Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
