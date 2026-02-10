import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "They took our funnel from $12k/mo to $87k/mo in 90 days. No other agency even came close to these results.",
    name: "Sarah Mitchell",
    role: "CEO, LuxeBeauty Co.",
  },
  {
    quote: "We were skeptical at first, but the ROI spoke for itself. 5X return in the first month. These guys are the real deal.",
    name: "James Carter",
    role: "Founder, CartCraft",
  },
  {
    quote: "Finally an agency that treats our money like their own. Every campaign is tracked, optimized, and profitable.",
    name: "Priya Sharma",
    role: "CMO, FitFuel",
  },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="text-primary font-display font-bold text-sm tracking-widest uppercase mb-3">Client Wins</p>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-12">
          What Our Clients <span className="text-gradient-gold">Say</span>
        </h2>

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-primary fill-primary" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 italic text-foreground/90">
                "{testimonials[idx].quote}"
              </blockquote>
              <p className="font-display font-bold text-foreground">{testimonials[idx].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[idx].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
