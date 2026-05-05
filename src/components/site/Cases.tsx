import { ArrowRight, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import c1 from "@/assets/case-1.jpg"; import c2 from "@/assets/case-2.jpg"; import c3 from "@/assets/case-3.jpg";

const cases = [
  { img: c1, tag: "Employment", title: "Employment Tribunal Victory", body: "Employee won £45,000 in unfair dismissal compensation after a six-month case." },
  { img: c2, tag: "Immigration", title: "Complex Immigration Appeal", body: "Family granted indefinite leave to remain after a three-year battle through tribunal." },
  { img: c3, tag: "Criminal", title: "Criminal Acquittal", body: "Client acquitted of serious charges after a Crown Court trial. Reputation restored." },
];

export const Cases = () => {
  const [active, setActive] = useState(0);
  return (
    <section id="cases" className="py-20 md:py-28 bg-secondary/60">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="reveal">
            <span className="gold-pill">Recent Cases</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary">Some <span className="italic text-gold">Notable Cases</span></h2>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-gold !py-2.5 !px-5 text-xs uppercase tracking-[0.18em]">View All Cases <ArrowRight className="h-4 w-4" /></a>
            <div className="flex flex-col gap-1.5">
              <button onClick={() => setActive((a) => (a - 1 + cases.length) % cases.length)} className="h-9 w-9 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all" aria-label="Up"><ChevronUp className="h-4 w-4 mx-auto" /></button>
              <button onClick={() => setActive((a) => (a + 1) % cases.length)} className="h-9 w-9 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all" aria-label="Down"><ChevronDown className="h-4 w-4 mx-auto" /></button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <a key={c.title} href={`/case/${c.title.toLowerCase().replace(/ /g, '-')}`} className="block">
              <article
                onMouseEnter={() => setActive(i)}
                className={`relative rounded-2xl overflow-hidden h-[350px] md:h-[440px] group cursor-pointer transition-all duration-700 ${active === i ? "md:scale-[1.02] shadow-elegant" : ""}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <img src={c.img} alt={c.title} loading="lazy" width={800} height={1024} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-7 text-white">
                  <span className="self-start gold-pill !bg-gold/90 !text-primary !border-gold mb-4">{c.tag}</span>
                  <h3 className="font-display text-2xl">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">{c.body}</p>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
