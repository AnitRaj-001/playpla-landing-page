import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import logo from "@/assets/playpal-logo.png";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Download", href: "#download" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border">
      <div className="gradient-section absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="PlayPal" className="w-10 h-10" />
              <span className="font-display font-extrabold text-xl">
                <span className="text-foreground">PLAY</span>
                <span className="text-gradient">PAL</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[30ch]">
              Your ultimate entertainment companion. Stream movies, series, and live TV for free.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3" aria-label="Footer navigation">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Quick Links</span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 block">Contact</span>
            <a
              href="mailto:support@playpal.app"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              support@playpal.app
            </a>
          </div>
        </div>

        <div className="section-divider mt-12 mb-6" />

        <div className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PlayPal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
