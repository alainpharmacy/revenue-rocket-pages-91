const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-lg font-bold text-gradient-gold">ScaleForce</span>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} ScaleForce. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
