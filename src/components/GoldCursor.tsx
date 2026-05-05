import { useEffect, useState } from "react";

export const GoldCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,input,textarea,select,[role=button]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div className="gold-cursor-dot" style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%) scale(${hover ? 0.4 : 1})` }} />
      <div className="gold-cursor-ring" style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%) scale(${hover ? 1.6 : 1})` }} />
    </>
  );
};
