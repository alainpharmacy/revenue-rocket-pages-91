import { Phone } from "lucide-react";

const FloatingCTA = () => (
  <a
    href="https://calendly.com/jay-jaykk/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-gradient-to-br from-[#00d600] to-[#009900] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Book a call"
  >
    <Phone className="text-white" size={28} />
  </a>
);

export default FloatingCTA;
