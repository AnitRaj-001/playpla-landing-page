import { motion } from "framer-motion";
import { Download, Play, Star, Users, Trophy } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo_playpal.png";
import liveTv from "@/assets/liveTv.png";
import movies from "@/assets/movies.jpeg";
import series from "@/assets/series.jpeg";

const stats = [
  { icon: Users, value: "50K+", label: "Active Users" },
  { icon: Star, value: "4.8", label: "Rating" },
  { icon: Play, value: "700+", label: "Live Channels" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[180px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-20">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4 items-center lg:items-start mb-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-surface text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Free &amp; No Ads
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-sm font-bold border border-orange-500/20">
                <Trophy className="w-3.5 h-3.5" />
                IPL 2026 LIVE
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl font-medium tracking-wide text-foreground/80 italic border-l-2 border-primary pl-4"
            >
              "PlayPal – Play Every Pal."
            </motion.div>
          </motion.div>

          <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
            <motion.img
              src={logo}
              alt="PlayPal Logo"
              className="w-20 h-20 rounded-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15 }}
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-black tracking-[-0.05em] flex items-center gap-1"
            >
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">PLAY</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-orange-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)] italic">PAL</span>
            </motion.span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4 leading-[0.95]">
            <span className="text-foreground">Your Ultimate</span>
            <br />
            <span className="text-gradient">Entertainment</span>
            <br />
            <span className="text-foreground">App</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-[44ch] mx-auto lg:mx-0 mb-8 leading-relaxed text-balance">
            Stream movies, series, and watch 700+ live TV channels — all in one beautifully crafted Android app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10">
            <motion.a
              href="https://github.com/AnitRaj-001/playpla-landing-page/releases/latest/download/playpal-v1.1.0.apk"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl glow-primary transition-all hover:glow-primary-strong"
            >
              <Download className="w-5 h-5" />
              Download APK
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 glass-surface rounded-2xl font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Explore Features
            </motion.a>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 justify-center lg:justify-start">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center gap-1.5 justify-center mb-1">
                  <stat.icon className="w-4 h-4 text-primary" />
                  <span className="text-xl font-bold text-foreground">{stat.value}</span>
                </div>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Phone mockup showcase */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
          className="relative flex justify-center items-center h-[500px] md:h-[580px]"
        >
          {/* Back-left phone */}
          <motion.div
            className="absolute phone-frame w-44 md:w-52 -left-2 md:left-4 z-0"
            style={{ transform: "rotate(-8deg) translateY(20px)" }}
            animate={{ y: [20, 6, 20] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img src={liveTv} alt="PlayPal Live TV" className="w-full h-auto rounded-[2rem]" loading="lazy" />
          </motion.div>

          {/* Center phone (hero) */}
          <motion.div
            className="relative phone-frame w-52 md:w-64 z-20"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <img src={movies} alt="PlayPal App" className="w-full h-auto rounded-[2.5rem]" />
            {/* Reflection glow under center phone */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/20 rounded-full blur-xl" />
          </motion.div>

          {/* Back-right phone */}
          <motion.div
            className="absolute phone-frame w-44 md:w-52 -right-2 md:right-4 z-0"
            style={{ transform: "rotate(8deg) translateY(20px)" }}
            animate={{ y: [20, 8, 20] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
          >
            <img src={series} alt="PlayPal Detail" className="w-full h-auto rounded-[2rem]" loading="lazy" />
          </motion.div>


        </motion.div>
      </div>

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
