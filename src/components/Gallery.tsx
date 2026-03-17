import { motion } from "framer-motion";
import screenshotMovies from "@/assets/screenshot-movies.png";
import screenshotLivetv from "@/assets/screenshot-livetv.png";
import screenshotDetail from "@/assets/screenshot-detail.png";

const screenshots = [
  { src: screenshotMovies, alt: "PlayPal Movies Screen", label: "Movies" },
  { src: screenshotLivetv, alt: "PlayPal Live TV Screen", label: "Live TV" },
  { src: screenshotDetail, alt: "PlayPal Movie Detail Screen", label: "Details" },
];

const Gallery = () => {
  return (
    <section id="screenshots" className="relative py-28 px-6 overflow-hidden">
      <div className="gradient-section absolute inset-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-primary mb-3 tracking-widest uppercase">
            Screenshots
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-5">
            See It in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-[45ch] mx-auto leading-relaxed">
            A beautiful, intuitive experience on every screen.
          </p>
        </motion.div>

        {/* Fan-spread layout */}
        <div className="relative flex justify-center items-center h-[420px] sm:h-[520px] md:h-[600px]">
          {screenshots.map((s, i) => {
            const rotations = [-12, 0, 12];
            const xOffsets = [-160, 0, 160];
            const zIndexes = [10, 30, 10];
            const scales = [0.88, 1, 0.88];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: rotations[i],
                }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.2, 1, 0.3, 1] }}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 40, transition: { duration: 0.3 } }}
                className="absolute phone-frame cursor-pointer"
                style={{
                  width: "clamp(180px, 28vw, 260px)",
                  transform: `translateX(${xOffsets[i]}px) rotate(${rotations[i]}deg) scale(${scales[i]})`,
                  zIndex: zIndexes[i],
                }}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {/* Label badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full glass-surface-strong text-xs font-medium text-foreground">
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
