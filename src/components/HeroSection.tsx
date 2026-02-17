import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NetworkMesh from "./NetworkMesh";
import heroImage from "@/assets/hero-image.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0a0a0a]">
      {/* Radial warm glow behind center content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Network mesh background */}
      <NetworkMesh />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Copy */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display font-bold text-xs md:text-sm tracking-[0.25em] uppercase mb-6">
            Ecommerce and Local SEO Expert
          </p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] mb-6 text-white">
            Be right where it matters{" "}
            at the right time!
          </h1>

          <p className="text-lg md:text-xl text-white/80 font-sans leading-relaxed mb-10 max-w-[600px]">
            In 2026, optimization means reaching{" "}
            <span className="text-primary font-bold">ready-to-purchase</span>{" "}
            audiences. I do this through creating custom,{" "}
            <span className="text-primary font-bold">AI-enabled</span>{" "}
            Search and Answer Engine Optimization strategies to target and engage your{" "}
            <span className="text-primary font-bold">ready to buy</span> audience.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <a
              href="https://calendly.com/jay-jaykk/30min"
              target="_blank"
              rel="noopener noreferrer"
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

        {/* Right: Hero Image */}
        <motion.div
          className="flex justify-center lg:justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-primary/0 rounded-2xl blur-xl" />
            <img
              src={heroImage}
              alt="SEO Expert catching Google, Maps, and TikTok Ads"
              className="relative w-full max-w-md h-auto rounded-2xl border-2 border-primary/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
