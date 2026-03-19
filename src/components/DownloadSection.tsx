import { motion } from "framer-motion";
import { Download, QrCode, Shield, Wifi } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="relative py-28 px-6">
      <div className="gradient-section absolute inset-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl glass-surface-strong p-10 md:p-16 relative overflow-hidden"
        >
          {/* Ambient glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-sm font-medium text-primary mb-3 tracking-widest uppercase">
                Download
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
                Ready to Stream?
              </h2>
              <p className="text-muted-foreground text-base mb-8 max-w-[40ch] leading-relaxed">
                Download PlayPal now and unlock unlimited entertainment on your Android device. Free, no ads, no subscriptions.
              </p>

              <motion.a
                href="/apk/playpal.apk"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold text-lg rounded-2xl glow-primary transition-all hover:glow-primary-strong"
              >
                <Download className="w-6 h-6" />
                Download APK
              </motion.a>

              {/* Trust badges */}
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary/70" />
                  Malware Free
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Wifi className="w-4 h-4 text-primary/70" />
                  Low Data Usage
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-40 h-40 bg-foreground rounded-2xl flex items-center justify-center shadow-elevated">
                <QrCode className="w-28 h-28 text-background" />
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
