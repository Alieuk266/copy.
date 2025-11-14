import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/events", label: "Events" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">MN</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-foreground text-lg leading-tight">Minnesota Chapter</span>
              <span className="text-xs text-muted-foreground">Maryland County Association</span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-md text-foreground hover:text-primary hover:bg-secondary transition-colors"
                activeClassName="text-primary bg-secondary font-medium"
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://forms.gle/DQdSp3DEQ1fUqw7BA"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-4 py-2 rounded-md text-foreground hover:text-primary hover:bg-secondary transition-colors"
                activeClassName="text-primary bg-secondary font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://forms.gle/DQdSp3DEQ1fUqw7BA"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Register
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
