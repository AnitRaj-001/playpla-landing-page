import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import logo from "@/assets/logo_playpal.png";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Download", href: "#download" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="PlayPal" className="w-10 h-10 rounded-lg" />
              <span className="font-display font-black text-2xl tracking-[-0.05em] flex items-center gap-1">
                <span className="text-white">PLAY</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 italic">PAL</span>
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[30ch]">
                Your ultimate entertainment companion. Stream movies, series, and live TV for free.
              </p>
              <p className="text-xs font-medium italic text-primary/80">
                "PlayPal – Play Every Pal."
              </p>
            </div>
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
              href="mailto:playpal.app0@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              playpal.app0@gmail.com
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
