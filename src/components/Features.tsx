import { motion } from "framer-motion";
import { Film, Tv, Radio, Heart, Zap, Smartphone } from "lucide-react";

const features = [
  { icon: Film, title: "Movies", desc: "Browse and stream thousands of movies, from blockbusters to indie gems." },
  { icon: Tv, title: "TV Series", desc: "Binge-watch complete series with curated recommendations and tracking." },
  { icon: Radio, title: "Live TV", desc: "Access 700+ live channels across entertainment, sports, news, and more." },
  { icon: Heart, title: "Favorites", desc: "Save your favorite movies and series for quick access anytime." },
  { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed — even on low-end devices with minimal data usage." },
  { icon: Smartphone, title: "Clean UI", desc: "Beautiful, intuitive interface designed for effortless navigation." },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-lg max-w-[45ch] mx-auto">
            One app. Unlimited entertainment. Zero hassle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl glass-surface group cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
