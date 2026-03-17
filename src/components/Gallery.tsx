import { motion } from "framer-motion";
import screenshotMovies from "@/assets/screenshot-movies.png";
import screenshotLivetv from "@/assets/screenshot-livetv.png";
import screenshotDetail from "@/assets/screenshot-detail.png";

const screenshots = [
  { src: screenshotMovies, alt: "PlayPal Movies Screen" },
  { src: screenshotLivetv, alt: "PlayPal Live TV Screen" },
  { src: screenshotDetail, alt: "PlayPal Movie Detail Screen" },
];

const Gallery = () => {
  return (
    <section id="screenshots" className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            See It in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-[45ch] mx-auto">
            A beautiful, intuitive experience on every screen.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {screenshots.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="w-64 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border"
            >
              <img
                src={s.src}
                alt={s.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
