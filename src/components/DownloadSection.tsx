import { motion } from "framer-motion";
import { Download, QrCode } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl glass-surface p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 relative z-10">
            Ready to Stream?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-[40ch] mx-auto relative z-10">
            Download PlayPal now and unlock unlimited entertainment on your Android device.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
            <motion.a
              href="/download/playpal-latest.apk"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold text-lg rounded-2xl glow-primary transition-shadow hover:glow-primary-strong"
            >
              <Download className="w-6 h-6" />
              Download APK
            </motion.a>

            <div className="flex flex-col items-center gap-2">
              <div className="w-32 h-32 bg-foreground rounded-2xl flex items-center justify-center">
                <QrCode className="w-24 h-24 text-background" />
              </div>
              <span className="text-sm text-muted-foreground">Scan to download</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
