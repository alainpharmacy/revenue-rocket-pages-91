import { motion } from "framer-motion";

const metrics = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Businesses Helped" },
  { value: "35%", label: "Average Revenue Improvement" },
];

const ResultsSection = () => (
  <section id="results" className="py-24 bg-secondary/20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-black">
          Expertise <span className="text-gradient-gold">&gt;&gt;</span> Results <span className="text-gradient-gold">&gt;&gt;</span> Impact <span className="text-gradient-gold">&gt;&gt;</span> ROI
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl md:text-5xl font-black text-gradient-gold mb-2">
              {m.value}
            </p>
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-display">
              {m.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
