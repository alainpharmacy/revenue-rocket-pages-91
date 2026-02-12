import { motion } from "framer-motion";

const metrics = [
  { value: "10+", line1: "PROFESSIONAL", line2: "YEARS OF EXPERIENCE" },
  { value: "50+", line1: "BUSINESSES", line2: "HELPED & GROWING" },
  { value: "35%", line1: "AVERAGE REVENUE", line2: "IMPROVEMENT" },
];

const keywords = ["EXPERTISE", "RESULTS", "IMPACT", "ROI"];

const ResultsSection = () => (
  <section id="results" className="relative py-28 overflow-hidden" style={{ backgroundColor: "#0c0e12" }}>
    {/* Ambient glow blobs */}
    <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none" style={{ backgroundColor: "#3b82f6", filter: "blur(120px)" }} />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none" style={{ backgroundColor: "#f5c518", filter: "blur(120px)" }} />

    <div className="container mx-auto px-6 relative z-10">
      {/* Keyword Sequence */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-20"
      >
        {keywords.map((word, i) => (
          <span key={word} className="flex items-center gap-3 md:gap-5">
            <span className="font-sans font-black text-3xl sm:text-4xl md:text-6xl tracking-tighter text-foreground">
              {word}
            </span>
            {i < keywords.length - 1 && (
              <motion.span
                className="font-black text-3xl sm:text-4xl md:text-6xl tracking-tighter"
                style={{ color: "#f5c518" }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                &gt;&gt;
              </motion.span>
            )}
          </span>
        ))}
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 border rounded-none"
        style={{ borderColor: "rgba(55, 65, 81, 0.8)" }}
      >
        {metrics.map((m, i) => (
          <motion.div
            key={m.line2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center justify-center py-14 px-6 text-center"
            style={{
              borderRight: i < metrics.length - 1 ? "1px solid rgba(55, 65, 81, 0.8)" : "none",
              borderBottom: "1px solid rgba(55, 65, 81, 0.8)",
            }}
          >
            <span
              className="font-sans font-black text-6xl md:text-7xl lg:text-8xl tracking-tighter mb-4"
              style={{ color: "#f5c518" }}
            >
              {m.value}
            </span>
            <span className="font-sans font-black text-[10px] uppercase tracking-[0.3em] text-muted-foreground leading-relaxed">
              {m.line1}
              <br />
              {m.line2}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ResultsSection;
