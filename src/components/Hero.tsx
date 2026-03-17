import { motion } from "framer-motion";
import { Download } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";
import logo from "@/assets/playpal-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.img
          src={logo}
          alt="PlayPal Logo"
          className="w-24 h-24 mx-auto mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        />

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4">
          <span className="text-foreground">PLAY</span>
          <span className="text-primary"> PAL</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-[50ch] mx-auto mb-10 leading-relaxed text-balance">
          Stream movies, binge series, and watch live TV — all in one sleek app.
          Your ultimate entertainment companion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="/download/playpal-latest.apk"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl glow-primary transition-shadow hover:glow-primary-strong"
          >
            <Download className="w-5 h-5" />
            Download APK
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-4 glass-surface rounded-2xl font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            Explore Features
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
