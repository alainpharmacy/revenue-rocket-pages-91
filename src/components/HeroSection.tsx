import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NetworkMesh from "./NetworkMesh";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0a0a0a]">
      {/* Radial warm glow behind center content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Network mesh background */}
      <NetworkMesh />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-[880px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          <p className="text-primary font-display font-bold text-xs md:text-sm tracking-[0.25em] uppercase mb-6">
            Ecommerce and Local SEO Expert
          </p>

          {/* Main headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-[4rem] font-black leading-[1.1] mb-6 text-white">
            Be right where it matters{" "}
            <br className="hidden md:block" />
            at the right time!
          </h1>

          {/* Sub-headline with highlighted keywords */}
          <p className="text-lg md:text-xl text-white/80 font-sans leading-relaxed mb-10 max-w-[750px]">
            In 2026, optimization means reaching{" "}
            <span className="text-primary font-bold">ready-to-purchase</span>{" "}
            audiences.
            <br className="hidden md:block" />
            We build custom,{" "}
            <span className="text-primary font-bold">AI-proof</span>{" "}
            strategies to drive your sales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-display font-bold text-lg hover:brightness-110 transition-all glow-gold"
            >
              Book Your Strategy Call <ArrowRight size={20} />
            </a>
            <a
              href="#results"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-lg font-display font-bold text-lg hover:bg-white/10 transition-all"
            >
              See Our Results
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
