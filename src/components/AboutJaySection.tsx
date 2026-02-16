import { motion } from "framer-motion";
import jayPhoto from "@/assets/jaykrish-about.jpg";

const AboutJaySection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={jayPhoto}
            alt="Jayakrishnan – AI-enabled SEO specialist"
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              Jay, your{" "}
              <span className="text-gradient-gold">AI-enabled SEO</span>{" "}
              for 2026
            </h2>
            <div className="mt-3 w-16 h-1 bg-gold rounded-full" />
          </div>

          <p className="text-foreground/90 font-semibold text-base">
            I'm Jay, an AI-empowered SEO with over 10+ years of experience.
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Today, digital marketing thrives on diversification and grabbing the
            right customer attention. I've delivered SEO results that improve
            client bottom line across diverse industries—from e-commerce and
            local markets to niche sectors.{" "}
            <a href="#results" className="text-gold hover:underline">
              (check case studies below)
            </a>
            .
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed">
            My toolkit spans website architecture, keyword intent optimization,
            advanced schema markup, and content strategy; I can even layer in
            Google Ads and/or social media campaigns when needed.
          </p>

          {/* Vision quote */}
          <div className="mt-2">
            <span className="uppercase text-xs font-bold tracking-widest text-gold">
              The Vision
            </span>
            <blockquote className="mt-2 border-l-2 border-gold pl-4 bg-secondary/40 rounded-r-lg py-4 pr-4">
              <p className="text-foreground/80 italic text-sm leading-relaxed">
                "Think of me as your Swiss Army knife for digital marketing,
                ready to pick the right tool to unlock bigger wins for your
                business."
              </p>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutJaySection;
