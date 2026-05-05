import { ArrowRight, Award, Scale, Star } from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-solicitor.jpg";

export const Hero = ({ onBook }: { onBook: () => void }) => {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const title1 = "Expert Legal";
  const title2 = "Solutions.";

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* dot grid bg with parallax */}
      <div
        className="absolute inset-0 dot-grid opacity-60"
        style={{ transform: `translateY(${y * 0.15}px)` }}
        aria-hidden
      />
      <div className="absolute -top-32 -left-32 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-gold/10 blur-3xl" aria-hidden />

      <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="gold-pill mb-7 animate-fade-up"><Scale className="h-3.5 w-3.5" /> SRA Regulated · Est. 2008</div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] text-primary text-balance">
            <span className="block">
              {title1.split("").map((c, i) => (
                <span key={i} className="animate-letter" style={{ animationDelay: `${i * 0.04}s` }}>
                  {c === " " ? "\u00A0" : c}
                </span>
              ))}
            </span>
            <span className="block italic font-medium text-gold mt-2 text-5xl md:text-6xl lg:text-7xl">
              {title2.split("").map((c, i) => (
                <span key={i} className="animate-letter" style={{ animationDelay: `${0.5 + i * 0.05}s` }}>
                  {c}
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "1.1s" }}>
            CrestSolicitors provides trusted legal advice across the UK — from employment disputes to complex litigation. Your rights, protected.
          </p>

          <div className="mt-9 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "1.3s" }}>
            <a href="#practice" onClick={(e) => { e.preventDefault(); document.getElementById("practice")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-gold">
              Explore Practice Areas <ArrowRight className="h-4 w-4" />
            </a>
            <button onClick={onBook} className="btn-outline-dark">Free Consultation</button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg animate-fade-up" style={{ animationDelay: "1.5s" }}>
            {[
              { icon: <Scale className="h-5 w-5" />, label: "SRA Regulated" },
              { icon: <Award className="h-5 w-5" />, label: "500+ Cases Won" },
              { icon: <Star className="h-5 w-5 fill-current" />, label: "4.9★ Google" },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-start gap-2 border-l-2 border-gold/40 pl-3">
                <span className="text-gold">{t.icon}</span>
                <span className="text-xs uppercase tracking-wider text-primary/70 leading-tight">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative" style={{ transform: `translateY(${y * -0.05}px)` }}>
          <div className="absolute -inset-6 rounded-[2rem] bg-gold/15 rotate-3" aria-hidden />
          <div className="absolute -bottom-6 -right-6 w-40 h-40 border-[3px] border-gold rounded-full" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.5rem] shadow-elegant">
            <img src={heroImg} alt="CrestSolicitors expert UK solicitor" width={1024} height={1280} className="w-full h-[480px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          </div>
          <div className="absolute -left-6 top-12 bg-cream shadow-card-soft rounded-2xl px-5 py-4 border border-gold/30">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Avg. Response</div>
            <div className="font-display text-2xl text-primary">Under 2 hrs</div>
          </div>
        </div>
      </div>
    </section>
  );
};
