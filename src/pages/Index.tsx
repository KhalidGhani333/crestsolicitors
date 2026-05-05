import { useEffect, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Pillars } from "@/components/site/Pillars";
import { About } from "@/components/site/About";
import { Practice } from "@/components/site/Practice";
import { Team } from "@/components/site/Team";
import { Cases } from "@/components/site/Cases";
import { Testimonials } from "@/components/site/Testimonials";
import { Newsletter } from "@/components/site/Newsletter";
import { Blog } from "@/components/site/Blog";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { ConsultationModal } from "@/components/site/ConsultationModal";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { GoldCursor } from "@/components/GoldCursor";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  const [open, setOpen] = useState(false);
  useReveal();

  useEffect(() => {
    document.title = "CrestSolicitors — Expert UK Solicitors | Justice. Clarity. Results.";
    const meta = document.querySelector('meta[name="description"]') || document.head.appendChild(Object.assign(document.createElement("meta"), { name: "description" }));
    meta.setAttribute("content", "CrestSolicitors — SRA-regulated UK law firm offering expert legal advice in employment, family, immigration, property, criminal & corporate law across England and Wales.");
  }, []);

  return (
    <div className="bg-cream">
      <GoldCursor />
      <Navbar onBook={() => setOpen(true)} />
      <main>
        <Hero onBook={() => setOpen(true)} />
        <Pillars />
        <About />
        <Practice />
        <Team />
        <Cases />
        <Testimonials />
        <Newsletter />
        <Blog />
        <CTA onBook={() => setOpen(true)} />
      </main>
      <Footer />
      <WhatsAppFab />
      <ConsultationModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Index;
