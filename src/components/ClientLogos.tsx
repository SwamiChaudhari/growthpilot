export default function ClientLogos() {
  // Using text-based logos since we don't have actual client logos yet
  // These represent the industries served
  const clients = [
    { name: "Dental Care Pune", industry: "Healthcare" },
    { name: "Goa Beach Resort", industry: "Hospitality" },
    { name: "Mumbai Properties", industry: "Real Estate" },
    { name: "Pune Coaching Hub", industry: "Education" },
    { name: "Spice Garden Restaurant", industry: "Food & Beverage" },
    { name: "Dream Interiors", industry: "Interior Design" },
  ];

  return (
    <section className="py-10 md:py-16 px-4 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-text-muted text-sm font-medium uppercase tracking-wider">
            Trusted by 50+ Local Businesses Across India
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 py-4 px-3 rounded-xl border border-border bg-bg-primary/50 hover:border-accent-primary/20 hover:bg-accent-primary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center shadow-subtle">
                <span className="text-white font-bold text-sm">
                  {client.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </span>
              </div>
              <div className="text-center">
                <p className="text-text-primary text-xs font-semibold leading-tight">{client.name}</p>
                <p className="text-text-muted text-[10px]">{client.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
