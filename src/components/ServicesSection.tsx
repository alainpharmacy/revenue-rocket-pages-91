import { motion } from "framer-motion";
import { Rocket, Target, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "High-Converting Funnels",
    description:
      "We architect every page to do one thing: convert. No fluff, no filler — just revenue-generating machines built on proven frameworks.",
  },
  {
    icon: Target,
    title: "Paid Traffic Management",
    description:
      "We deploy surgical ad campaigns on Meta, Google & YouTube that target buyers, not browsers. Every dollar tracked, every click accountable.",
  },
  {
    icon: BarChart3,
    title: "Revenue Optimization",
    description:
      "We obsess over your numbers. From AOV to LTV, we find the hidden profit leaks and plug them — fast. More revenue from the same traffic.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display font-bold text-sm tracking-widest uppercase mb-3">What We Do</p>
        <h2 className="font-display text-4xl md:text-5xl font-black">
          Three Pillars of <span className="text-gradient-gold">Explosive Growth</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
