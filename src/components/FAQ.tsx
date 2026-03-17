import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is PlayPal free to use?", a: "Yes! PlayPal is completely free to download and use. Enjoy movies, series, and live TV at no cost." },
  { q: "What devices are supported?", a: "PlayPal is available for Android devices. It's optimized to work smoothly on both high-end and low-end phones." },
  { q: "How do I install the APK?", a: "Download the APK file, open it on your Android device, and follow the on-screen instructions. You may need to enable 'Install from unknown sources' in your settings." },
  { q: "Is my data safe?", a: "PlayPal does not collect personal data. Your viewing preferences are stored locally on your device." },
  { q: "Can I watch Live TV?", a: "Absolutely! PlayPal offers 700+ live TV channels across categories like entertainment, sports, news, and movies." },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-medium text-primary mb-3 tracking-widest uppercase">
            Support
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
            FAQ
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-surface rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-base hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
