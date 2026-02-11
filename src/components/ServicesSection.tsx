import { motion } from "framer-motion";
import { Rocket, Target, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Growth Channels, Growth Opportunities",
    description:
      "I identify your highest-value growth channels for 2026. Then, we execute a precise, aggressive plan to grow and thrive on these channels.",
  },
  {
    icon: Target,
    title: "AI Enablement",
    description:
      "Lets ask critical questions: What tasks can AI automate? What new processes can AI enable? How do we leverage AI to drive meaningful user engagement and behavioral outcomes?",
  },
  {
    icon: BarChart3,
    title: "Reporting and Analytics",
    description:
      "We drive the conversions, we deliver the results, we show you the outcomes. Total Win-Win situations.",
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
        <p className="text-primary font-display font-bold text-sm tracking-widest uppercase mb-3">How We Optimize for AI SEO in 2026?</p>
        <h2 className="font-display text-4xl md:text-5xl font-black">
          Growth Channels, <span className="text-gradient-gold">Growth Opportunities</span>
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
