import { motion } from "framer-motion";
import headshot from "@/assets/headshot.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display font-bold text-sm tracking-widest uppercase mb-4">
            Funnel Building & Marketing Agency
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
            We Scale Your Revenue.<br />
            <span className="text-gradient-gold">Not Just Impressions.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Stop burning money on agencies that deliver vanity metrics. We build
            profit-first funnels that turn cold traffic into paying customers — guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-display font-bold text-lg hover:brightness-110 transition-all glow-gold"
            >
              Book Your Strategy Call <ArrowRight size={20} />
            </a>
            <a
              href="#results"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-md font-display font-semibold text-lg hover:bg-secondary transition-all"
            >
              See Our Results
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-primary/0 rounded-2xl blur-lg" />
            <img
              src={headshot}
              alt="Professional headshot"
              className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl border-2 border-primary/30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
