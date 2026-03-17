import { Mail } from "lucide-react";
import logo from "@/assets/playpal-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="PlayPal" className="w-10 h-10" />
          <span className="font-bold text-lg">
            <span className="text-foreground">PLAY</span>
            <span className="text-primary">PAL</span>
          </span>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground" aria-label="Footer navigation">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#screenshots" className="hover:text-foreground transition-colors">Screenshots</a>
          <a href="#download" className="hover:text-foreground transition-colors">Download</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>

        <a
          href="mailto:support@playpal.app"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="w-4 h-4" />
          support@playpal.app
        </a>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} PlayPal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
