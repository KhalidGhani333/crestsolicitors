import { Scale, GraduationCap, Landmark } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  { icon: Scale, title: "Dedicated Client Support", body: "Your case is our priority. Our solicitors are accessible, responsive, and always in your corner." },
  { icon: GraduationCap, title: "Expert Solicitors", body: "All our solicitors are SRA-regulated with deep expertise in their specialist practice areas." },
  { icon: Landmark, title: "Complete Legal Solutions", body: "From first consultation to final resolution, we handle every aspect of your legal matter." },
];

export const Pillars = () => {
  useReveal();
  return (
    <section className="py-16 md:py-20">
      <div className="container-x grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <div key={p.title} className="reveal card-trace bg-card rounded-2xl p-8 shadow-card-soft border border-border" style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="trace-v1" /><span className="trace-v2" />
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold mb-5">
              <p.icon className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl text-primary mb-2">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
