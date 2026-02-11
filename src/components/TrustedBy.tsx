import logoSeedsman from "@/assets/logo-seedsman.jpg";
import logoJpw from "@/assets/logo-jpw.jpg";
import logoAlain from "@/assets/logo-alain.jpg";
import logoWmDentists from "@/assets/logo-wm-dentists.jpg";
import logoMarina from "@/assets/logo-marina.png";

const logos = [
  { name: "Seedsman", src: logoSeedsman },
  { name: "JPW Industries", src: logoJpw },
  { name: "Alain Pharmacy", src: logoAlain },
  { name: "Web Marketing for Dentists", src: logoWmDentists },
  { name: "Marina Home Interiors", src: logoMarina },
];

const TrustedBy = () => (
  <section className="py-12 border-y border-border bg-secondary/30">
    <div className="container mx-auto px-6">
      <p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-8 font-display">
        Worked with some of the Best in their Industry
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
