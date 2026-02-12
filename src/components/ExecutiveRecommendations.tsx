import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";

import reviewer1Headshot from "@/assets/reviewer1-headshot.jpg";
import reviewer2Headshot from "@/assets/reviewer2-headshot.jpg";
import reviewer3Headshot from "@/assets/reviewer3-headshot.jpg";
import logoAlainPharmacy from "@/assets/logo-alain-pharmacy.png";
import logoCodilar from "@/assets/logo-codilar.png";
import logoSpitzsolutions from "@/assets/logo-spitzsolutions.jpg";

interface Recommendation {
  name: string;
  title: string;
  avatar: string;
  companyLogo: string;
  badge: string;
  contextLeft: string;
  contextRight: string;
  quote: string;
  date: string;
  linkedinUrl: string;
}

const recommendations: Recommendation[] = [
  {
    name: "Hanan Salameh",
    title: "E-Commerce Manager @ Al Ain Pharmacy",
    avatar: reviewer2Headshot,
    companyLogo: logoAlainPharmacy,
    badge: "DIRECT CLIENT",
    contextLeft: "E-Commerce Manager",
    contextRight: "Hired SEO Specialist",
    quote:
      "I had the pleasure of working with Jayakrishnan, who was professional & very collaborative with a strong understanding of SEO strategy & best practices, & was always supportive & easy to work with. I would confidently recommend him.",
    date: "Received Jan 2026",
    linkedinUrl: "https://www.linkedin.com/in/jayakrishnan-j-80a04b25a/details/recommendations/",
  },
  {
    name: "Reviewer",
    title: "Digital Marketing Lead @ Codilar",
    avatar: reviewer1Headshot,
    companyLogo: logoCodilar,
    badge: "EXECUTIVE LEAD",
    contextLeft: "Marketing Lead",
    contextRight: "Hired Jayakrishnan for SEO",
    quote:
      "Jayakrishnan has a strong understanding of SEO strategy & best practices. He was professional, very collaborative, and always supportive.",
    date: "Received Jan 2026",
    linkedinUrl: "https://www.linkedin.com/in/jayakrishnan-j-80a04b25a/details/recommendations/",
  },
  {
    name: "Reviewer",
    title: "Founder @ Spitz Solutions",
    avatar: reviewer3Headshot,
    companyLogo: logoSpitzsolutions,
    badge: "DIRECT CLIENT",
    contextLeft: "Company Founder",
    contextRight: "Hired Jayakrishnan for SEO",
    quote:
      "Jayakrishnan delivered outstanding SEO results. His strategic approach and dedication to our project exceeded expectations.",
    date: "Received Jan 2026",
    linkedinUrl: "https://www.linkedin.com/in/jayakrishnan-j-80a04b25a/details/recommendations/",
  },
];

const RecommendationCard = ({
  rec,
  index,
}: {
  rec: Recommendation;
  index: number;
}) => (
  <motion.a
    href={rec.linkedinUrl}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15 }}
    className="relative flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0A66C2] group h-full"
  >
    {/* Badge */}
    <span className="absolute top-4 right-4 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
      {rec.badge}
    </span>

    {/* Header */}
    <div className="flex items-center gap-4 mb-4 mt-2">
      <div className="relative">
        <img
          src={rec.avatar}
          alt={rec.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
        />
        <img
          src={rec.companyLogo}
          alt="Company"
          className="absolute -bottom-1 -right-1 w-6 h-6 rounded-md object-contain bg-white border border-gray-200 shadow-sm"
        />
      </div>
      <div>
        <p className="font-bold text-gray-900 text-base">{rec.name}</p>
        <p className="text-gray-600 text-sm font-medium">{rec.title}</p>
      </div>
    </div>

    {/* Context Bar */}
    <div className="bg-slate-50 rounded-lg p-3 mb-4 flex items-center gap-2 text-xs text-gray-500 font-medium">
      <span>{rec.contextLeft}</span>
      <ArrowRight size={14} className="text-gray-400 flex-shrink-0" />
      <span>{rec.contextRight}</span>
    </div>

    {/* Quote */}
    <p className="font-serif italic text-gray-700 leading-relaxed text-sm mb-5 flex-grow">
      "{rec.quote}"
    </p>

    {/* Footer */}
    <div className="flex items-center justify-between">
      <Linkedin size={18} fill="#0A66C2" color="#0A66C2" />
      <span className="text-xs text-gray-400">{rec.date}</span>
    </div>
  </motion.a>
);

const ExecutiveRecommendations = () => (
  <section className="py-24 bg-secondary/20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-black">
          Executive{" "}
          <span className="text-gradient-gold">Recommendations</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {recommendations.map((rec, i) => (
          <RecommendationCard key={rec.name + i} rec={rec} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ExecutiveRecommendations;
