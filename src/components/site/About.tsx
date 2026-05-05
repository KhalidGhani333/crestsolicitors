import { ArrowRight, Check } from "lucide-react";
import about1 from "@/assets/about-consultation.jpg";
import about2 from "@/assets/about-books.jpg";
import { useEffect, useRef, useState } from "react";

const stats = [
  { n: 15, suffix: "+", label: "Years Practising" },
  { n: 500, suffix: "+", label: "Cases Won" },
  { n: 98, suffix: "%", label: "Client Satisfaction" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          setV(Math.floor(p * to * (1 - Math.pow(1 - p, 3) + p) / (1)));
          if (p < 1) requestAnimationFrame(step); else setV(to);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
};

const checks = ["Employment & Workplace Law", "Immigration & Visa Services", "Family & Divorce Law", "Property & Conveyancing", "Criminal Defence", "Civil Litigation"];

export const About = () => (
  <section id="about" className="py-20 md:py-28 bg-secondary/40">
    <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
      <div className="relative reveal">
        <div className="absolute -top-5 -left-5 w-24 h-24 border-l-4 border-t-4 border-gold" aria-hidden />
        <div className="absolute -bottom-5 -right-5 w-24 h-24 border-r-4 border-b-4 border-gold" aria-hidden />
        <img src={about1} alt="CrestSolicitors team in consultation" loading="lazy" width={1024} height={1024} className="w-full rounded-2xl shadow-elegant aspect-[4/5] object-cover" />
        <img src={about2} alt="Legal books and scales of justice" loading="lazy" width={800} height={1024} className="hidden md:block absolute -bottom-10 -right-10 w-56 h-72 object-cover rounded-2xl shadow-elegant border-8 border-cream" />
      </div>

      <div className="reveal">
        <span className="gold-pill">About CrestSolicitors</span>
        <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight text-primary">
          We Have Experienced <span className="italic text-gold">Solicitors,</span> They Are <span className="italic text-gold">Always Ready</span> To Help You.
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
          With over 15 years serving clients across England and Wales, CrestSolicitors combines deep legal expertise with a genuinely personal approach. We believe every client deserves clear advice, honest guidance, and fierce representation.
        </p>

        <ul className="mt-7 grid sm:grid-cols-2 gap-3">
          {checks.map((c) => (
            <li key={c} className="flex items-center gap-3 text-primary">
              <span className="tick"><Check className="h-3.5 w-3.5" /></span>
              <span className="text-sm">{c}</span>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex items-center gap-8 flex-wrap">
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-outline-gold">Read More About Us <ArrowRight className="h-4 w-4" /></a>
          <div className="flex gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl text-gold"><Counter to={s.n} suffix={s.suffix} /></div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
