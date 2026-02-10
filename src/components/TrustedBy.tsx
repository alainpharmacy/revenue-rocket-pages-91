const logos = ["Shopify", "HubSpot", "Stripe", "Meta", "Google", "Slack"];

const TrustedBy = () => (
  <section className="py-12 border-y border-border bg-secondary/30">
    <div className="container mx-auto px-6">
      <p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-8 font-display">
        Trusted by Industry Leaders
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {logos.map((name) => (
          <span
            key={name}
            className="text-muted-foreground/50 font-display text-xl font-bold tracking-wider"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
