import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gold p-10 md:p-16 reveal">
          <div className="absolute inset-0 dot-grid-dark opacity-40" aria-hidden />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Subscribe to Our <span className="italic">Legal Insights</span></h2>
              <p className="mt-3 text-primary/80 max-w-md">Get free legal updates, know-your-rights guides, and firm news delivered to your inbox.</p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) { setDone(true); setEmail(""); } }}
              className="flex flex-col sm:flex-row gap-3 bg-cream rounded-full p-2 shadow-elegant"
            >
              <input
                type="email" required maxLength={120}
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.co.uk"
                className="flex-1 bg-transparent px-5 py-3 outline-none text-primary placeholder:text-muted-foreground"
                aria-label="Email"
              />
              <button type="submit" className="rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-medium hover:opacity-90 transition">
                {done ? "Subscribed ✓" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
