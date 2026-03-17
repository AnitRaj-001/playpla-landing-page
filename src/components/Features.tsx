import { motion } from "framer-motion";
import { Film, Tv, Radio, Heart, Zap, Smartphone } from "lucide-react";

const features = [
  { icon: Film, title: "Movies", desc: "Browse and stream thousands of movies, from blockbusters to indie gems.", color: "from-primary/20 to-primary/5" },
  { icon: Tv, title: "TV Series", desc: "Binge-watch complete series with curated recommendations and tracking.", color: "from-primary/15 to-primary/5" },
  { icon: Radio, title: "Live TV", desc: "Access 700+ live channels across entertainment, sports, news, and more.", color: "from-primary/20 to-primary/5" },
  { icon: Heart, title: "Favorites", desc: "Save your favorite movies and series for quick access anytime.", color: "from-primary/15 to-primary/5" },
  { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed — even on low-end devices with minimal data usage.", color: "from-primary/20 to-primary/5" },
  { icon: Smartphone, title: "Clean UI", desc: "Beautiful, intuitive interface designed for effortless navigation.", color: "from-primary/15 to-primary/5" },
];

const Features = () => {
  return (
    <section id="features" className="relative py-28 px-6">
      <div className="gradient-section absolute inset-0 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-primary mb-3 tracking-widest uppercase">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-5">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-lg max-w-[45ch] mx-auto leading-relaxed">
            One app. Unlimited entertainment. Zero hassle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative p-8 rounded-3xl glass-surface overflow-hidden cursor-default"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
