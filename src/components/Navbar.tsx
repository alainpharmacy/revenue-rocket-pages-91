import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <span className="font-display text-2xl font-bold text-gradient-gold">ScaleForce</span>
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Results", "Testimonials"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {item}
            </a>
          ))}
          <a
            href="#cta"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-display font-bold text-sm hover:brightness-110 transition-all"
          >
            Book a Call
          </a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-4 flex flex-col gap-4">
          {["Services", "Results", "Testimonials"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#cta" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-display font-bold text-sm text-center" onClick={() => setOpen(false)}>
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
