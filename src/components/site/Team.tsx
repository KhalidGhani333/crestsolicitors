import { ArrowRight } from "lucide-react";
import t1 from "@/assets/team-1.jpg"; import t2 from "@/assets/team-2.jpg"; import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg"; import t5 from "@/assets/team-5.jpg"; import t6 from "@/assets/team-6.jpg";

const team = [
  { img: t1, name: "Edward Whitmore", role: "Senior Partner · Employment", size: "h-44 w-44", pos: "top-0 left-8" },
  { img: t2, name: "Charlotte Pembridge", role: "Family Law", size: "h-32 w-32", pos: "top-12 right-12" },
  { img: t3, name: "Aarav Mehta", role: "Immigration", size: "h-36 w-36", pos: "top-44 left-44" },
  { img: t4, name: "Amara Okonkwo", role: "Criminal Defence", size: "h-40 w-40", pos: "bottom-8 left-0" },
  { img: t5, name: "Henry Ashford", role: "Property & Conveyancing", size: "h-36 w-36", pos: "bottom-0 right-4" },
  { img: t6, name: "Sophie Bellamy", role: "Corporate", size: "h-28 w-28", pos: "bottom-32 right-44" },
];

export const Team = () => (
  <section id="team" className="py-20 md:py-28">
    <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
      <div className="relative h-[560px] dot-grid rounded-3xl reveal">
        {team.map((m) => (
          <div key={m.name} className={`absolute ${m.pos} group cursor-pointer`}>
            <div className={`relative ${m.size} rounded-full overflow-hidden ring-4 ring-gold/40 shadow-elegant transition-transform duration-500 group-hover:scale-105`}>
              <img src={m.img} alt={m.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/25 transition-colors duration-500" />
            </div>
          </div>
        ))}
      </div>

      <div className="reveal">
        <span className="gold-pill">Our Team</span>
        <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary">Meet Our <span className="italic text-gold">Solicitors</span></h2>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          Our team of qualified, SRA-regulated solicitors brings decades of combined experience and a genuine commitment to your case.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We pride ourselves on a culture of integrity, clarity, and fierce advocacy. Every solicitor at CrestSolicitors believes that the law should serve people — not the other way around. We listen first, advise honestly, and fight relentlessly when it matters.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          From Gray's Inn to courts across England and Wales, our solicitors have earned a reputation for tenacity, professionalism, and exceptional client care.
        </p>
        <a href="#team" className="mt-7 btn-outline-gold inline-flex">Meet All Solicitors <ArrowRight className="h-4 w-4" /></a>
      </div>
    </div>
  </section>
);
