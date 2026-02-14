import { motion } from "framer-motion";

import ecomClicks from "@/assets/ecom-clicks.png";
import ecomTraffic from "@/assets/ecom-traffic.png";
import ecomShopping from "@/assets/ecom-shopping.png";
import ecomGrowth from "@/assets/ecom-growth.png";

const portfolioItems = [
  {
    image: ecomClicks,
    title: "Sharp increase in clicks",
    subtitle: "Organic Growth",
  },
  {
    image: ecomTraffic,
    title: "Getting the right traffic to convert",
    subtitle: "Conversion Optimization",
  },
  {
    image: ecomShopping,
    title: "Google Shopping + Search",
    subtitle: "Multi-Channel",
  },
  {
    image: ecomGrowth,
    title: "Consistent Traffic growth",
    subtitle: "Scale & Retention",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const EcomSEOPortfolio = () => (
  <section className="py-28" style={{ backgroundColor: "#0F0F0F" }}>
    <div className="container mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span
          className="font-sans text-xs font-black uppercase tracking-[0.3em] mb-4 block"
          style={{ color: "#FFD028" }}
        >
          Client Wins
        </span>
        <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white leading-tight max-w-3xl">
          Hit your{" "}
          <span style={{ color: "#FFD028" }}>Ecom Revenue goals</span> with the
          right traffic that Converts.
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,208,40,0.25)]"
            style={{
              backgroundColor: "#1A1A1A",
              borderColor: "#333333",
            }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="px-5 py-4">
              <p className="font-sans font-bold text-sm text-white tracking-wide">
                {item.title}
              </p>
              <p
                className="font-sans text-xs mt-1"
                style={{ color: "#A1A1A1" }}
              >
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcomSEOPortfolio;
