import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ScalesIcon } from "./ScalesIcon";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "practice", label: "Practice Areas" },
  { id: "team", label: "Our Team" },
  { id: "cases", label: "Cases" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export const Navbar = ({ onBook }: { onBook: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (const s of sections) {
        if (s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav py-2" : "py-4 bg-transparent"}`}>
      <nav className="container-x flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); go("home"); }} className="flex items-center gap-2.5 group">
          <span className="text-gold transition-transform duration-500 group-hover:rotate-[-6deg]"><ScalesIcon className="h-8 w-8" /></span>
          <span className="font-display text-2xl font-semibold tracking-tight text-primary">
            Crest<span className="text-gold">Solicitors</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => { e.preventDefault(); go(l.id); }}
                className={`relative text-sm tracking-wide transition-colors ${active === l.id ? "text-gold" : "text-primary/80 hover:text-primary"}`}
              >
                {l.label}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-gold transition-all duration-300 ${active === l.id ? "w-full" : "w-0"}`} />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button onClick={onBook} className="btn-gold hidden md:inline-flex !py-2.5 !px-5 text-xs uppercase tracking-[0.18em]">
            Book Consultation
          </button>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-primary p-2" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`lg:hidden fixed inset-0 top-0 bg-cream transition-all duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="container-x pt-24 flex flex-col gap-6">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => { e.preventDefault(); go(l.id); }}
              className="font-display text-3xl text-primary border-b border-gold/20 pb-3"
              style={{ animation: open ? `fadeUp 0.5s ${i * 0.05}s both` : undefined }}
            >
              {l.label}
            </a>
          ))}
          <button onClick={() => { setOpen(false); onBook(); }} className="btn-gold mt-4 self-start">Book Consultation</button>
        </div>
      </div>
    </header>
  );
};
