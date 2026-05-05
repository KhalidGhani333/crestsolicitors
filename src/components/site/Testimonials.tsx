import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import c1 from "@/assets/client-1.jpg"; import c2 from "@/assets/client-2.jpg"; import c3 from "@/assets/client-3.jpg"; import c4 from "@/assets/client-4.jpg";

const items = [
  { img: c1, name: "James Whitfield", role: "Business Owner, London", text: "CrestSolicitors handled my employment dispute with complete professionalism. Their advice was clear and they achieved an excellent outcome for me." },
  { img: c2, name: "Priya Sharma", role: "Homeowner, Birmingham", text: "The conveyancing team made our house purchase completely stress-free. They were responsive, thorough, and always kept us informed." },
  { img: c3, name: "Mohammed Al-Rashid", role: "Entrepreneur, Manchester", text: "Outstanding immigration legal advice. They guided us through a complex visa application with expertise and care." },
  { img: c4, name: "Sarah Thompson", role: "Employee, Leeds", text: "When I faced unfair dismissal, CrestSolicitors fought hard for me. I received full compensation and couldn't be more grateful." },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const visible = [items[i], items[(i + 1) % items.length]];

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="gold-pill">Client Testimonials</span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary">What Our Clients <span className="italic text-gold">Say</span> About Us</h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 transition-all duration-700" key={i}>
          {visible.map((t, idx) => (
            <article key={t.name + idx} className="bg-cream border border-gold/20 rounded-2xl p-8 md:p-10 relative animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <Quote className="absolute -top-4 left-8 h-12 w-12 text-gold fill-gold" />
              <p className="font-display italic text-xl md:text-2xl text-primary leading-relaxed mt-4">"{t.text}"</p>
              <div className="mt-7 flex items-center gap-4 pt-6 border-t border-gold/20">
                <img src={t.img} alt={t.name} loading="lazy" width={512} height={512} className="h-14 w-14 rounded-full object-cover ring-2 ring-gold" />
                <div>
                  <div className="font-display text-lg text-primary">{t.name}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {items.map((_, p) => (
            <button key={p} onClick={() => setI(p)} className={`h-2 rounded-full transition-all duration-300 ${p === i ? "w-8 bg-gold" : "w-2 bg-gold/30"}`} aria-label={`Testimonial ${p + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
