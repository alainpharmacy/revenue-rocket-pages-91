import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-2xl p-12 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
            Ready to <span className="text-gradient-gold">Scale?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Book a free 30-minute strategy call. We'll audit your funnel, identify the
            biggest revenue leaks, and map out a plan to 3X your business — no strings attached.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-md font-display font-bold text-lg hover:brightness-110 transition-all glow-gold"
          >
            Book Your Free Call Now <ArrowRight size={20} />
          </a>
          <p className="text-muted-foreground text-sm mt-4">
            ⚡ Limited spots available this month
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
