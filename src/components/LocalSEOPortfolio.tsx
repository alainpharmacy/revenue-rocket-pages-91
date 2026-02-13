import { motion } from "framer-motion";
import { MapPin, Plus } from "lucide-react";

import heatmapDental from "@/assets/heatmap-dental.png";
import heatmapEmergency from "@/assets/heatmap-emergency.png";
import heatmapWigs from "@/assets/heatmap-wigs.png";
import heatmapImplants from "@/assets/heatmap-implants.png";

const portfolioItems = [
  { image: heatmapDental, label: "Family Dental — Virginia" },
  { image: heatmapEmergency, label: "Emergency Dentist — Alabama" },
  { image: heatmapWigs, label: "Medical Wigs — Toronto" },
  { image: heatmapImplants, label: "Dental Implants — Utah" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const LocalSEOPortfolio = () => (
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
          Crack your map pack and become the{" "}
          <span style={{ color: "#FFD028" }}>go-to-choice</span> for your
          Neighborhood
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.label}
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
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="px-5 py-4">
              <p className="font-sans font-bold text-sm text-white tracking-wide">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* CTA Slot — full width */}
      <motion.div
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className="mt-8 rounded-xl flex flex-col items-center justify-center py-16 transition-all duration-300 hover:border-[#FFD028]/50"
        style={{
          border: "2px dashed #444",
          backgroundColor: "transparent",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
          style={{ backgroundColor: "rgba(255, 208, 40, 0.1)" }}
        >
          <Plus size={28} style={{ color: "#FFD028" }} />
        </div>
        <p className="font-sans font-black text-xl text-white mb-2">
          Your Business Here
        </p>
        <p className="font-sans text-sm flex items-center gap-1.5" style={{ color: "#A1A1A1" }}>
          <MapPin size={14} style={{ color: "#FFD028" }} />
          Let's turn your map green.
        </p>
      </motion.div>
    </div>
  </section>
);

export default LocalSEOPortfolio;
