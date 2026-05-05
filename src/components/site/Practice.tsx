import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Home, Briefcase, Users, Globe, Gavel, Building2 } from "lucide-react";
import housing from "@/assets/practice-housing.jpg";
import employment from "@/assets/practice-employment.jpg";
import family from "@/assets/practice-family.jpg";
import immigration from "@/assets/practice-immigration.jpg";
import criminal from "@/assets/practice-criminal.jpg";
import corporate from "@/assets/practice-corporate.jpg";

const areas = [
  { icon: Home, img: housing, title: "Housing & Property Law", body: "Conveyancing, landlord/tenant disputes, property transactions, and boundary issues." },
  { icon: Briefcase, img: employment, title: "Employment Law", body: "Unfair dismissal, redundancy, discrimination at work, settlement agreements." },
  { icon: Users, img: family, title: "Family Law", body: "Divorce, child custody, financial settlements, domestic abuse injunctions." },
  { icon: Globe, img: immigration, title: "Immigration Law", body: "Visa applications, indefinite leave to remain, asylum claims, spouse visas." },
  { icon: Gavel, img: criminal, title: "Criminal Defence", body: "Magistrates and Crown Court defence, police station representation, appeals." },
  { icon: Building2, img: corporate, title: "Corporate & Commercial", body: "Business contracts, company formation, commercial disputes, M&A." },
];

export const Practice = () => {
  const [i, setI] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(areas.length / perPage);
  const visible = areas.slice(i * perPage, i * perPage + perPage);

  return (
    <section id="practice" className="py-20 md:py-28">
      <div className="container-x">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="gold-pill">Practice Areas</span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary">Our <span className="italic text-gold">Practice Areas</span></h2>
          <p className="mt-4 text-muted-foreground">We offer specialist legal services across a wide range of practice areas. Whatever your legal challenge, our solicitors are here to guide you.</p>
        </div>

        <div className="mt-12 flex items-center justify-end gap-2 mb-6">
          <button onClick={() => setI((p) => (p - 1 + pages) % pages)} className="h-11 w-11 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary transition-all" aria-label="Previous"><ChevronLeft className="h-5 w-5 mx-auto" /></button>
          <button onClick={() => setI((p) => (p + 1) % pages)} className="h-11 w-11 rounded-full bg-gold text-primary hover:opacity-90 transition-all" aria-label="Next"><ChevronRight className="h-5 w-5 mx-auto" /></button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 transition-all duration-500" key={i}>
          {visible.map((a, idx) => (
            <article key={a.title} className="reveal card-trace group bg-card rounded-2xl overflow-hidden shadow-card-soft border border-border" style={{ transitionDelay: `${idx * 0.08}s` }}>
              <span className="trace-v1" /><span className="trace-v2" />
              <div className="relative h-56 overflow-hidden">
                <img src={a.img} alt={a.title} loading="lazy" width={800} height={640} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute -bottom-7 left-6 h-14 w-14 rounded-full bg-gold flex items-center justify-center text-primary shadow-elegant">
                  <a.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-7 pt-10">
                <h3 className="font-display text-2xl text-primary">{a.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{a.body}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm text-gold font-medium group/link">
                  Read More <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, p) => (
            <button key={p} onClick={() => setI(p)} className={`h-2 rounded-full transition-all duration-300 ${p === i ? "w-8 bg-gold" : "w-2 bg-gold/30"}`} aria-label={`Page ${p + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
