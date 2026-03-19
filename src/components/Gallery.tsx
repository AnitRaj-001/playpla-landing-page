import { motion } from "framer-motion";
import anime from "@/assets/anime.jpeg";
import liveTv from "@/assets/liveTv.jpeg";
import login from "@/assets/login.jpeg";
import movies from "@/assets/movies.jpeg";
import profile from "@/assets/profile.jpeg";
import series from "@/assets/series.jpeg";
import watchscreen from "@/assets/watchscreen.jpeg";

const screenshots = [
  { src: movies, alt: "Movies Screen", label: "Movies" },
  { src: liveTv, alt: "Live TV Screen", label: "Live TV" },
  { src: series, alt: "Series Screen", label: "Series" },
  { src: anime, alt: "Anime Screen", label: "Anime" },
  { src: watchscreen, alt: "Watch Screen", label: "Streaming" },
  { src: login, alt: "Login Screen", label: "Login" },
  { src: profile, alt: "Profile Screen", label: "Profile" },
];

const Gallery = () => {
  return (
    <section id="screenshots" className="relative py-32 px-6 overflow-hidden bg-background/50">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="inline-block text-sm font-medium text-primary mb-3 tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full">
            Showcase
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6">
            Visual Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-[50ch] mx-auto leading-relaxed">
            Every pixel is crafted for perfection. Experience the sleekest UI in the streaming world.
          </p>
        </motion.div>

        {/* Sliding gallery container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-12 px-4 no-scrollbar scroll-smooth snap-x snap-mandatory">
            {screenshots.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex-none w-[280px] md:w-[320px] snap-center"
              >
                <div className="group relative rounded-[2.5rem] bg-background border border-primary/10 p-3 shadow-2xl transition-all duration-500 hover:border-primary/30 hover:shadow-primary/5 hover:-translate-y-2">
                  <div className="relative aspect-[9/19] rounded-[2rem] overflow-hidden bg-muted">
                    <img
                      src={s.src}
                      alt={s.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <span className="text-sm font-semibold tracking-wide text-foreground px-4 py-2 bg-background/60 backdrop-blur-md rounded-full">
                        {s.label}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-80 bg-primary/10 blur-[100px] pointer-events-none" />
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-40 h-80 bg-primary/10 blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
