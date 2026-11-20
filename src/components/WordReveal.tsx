import { Children, Fragment, isValidElement, useEffect, useRef, useState, type ReactNode } from "react";

/** Splits text children into words that rise in one after another when scrolled into view. */
export function WordReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  let n = 0;
  const parts = Children.toArray(children).map((c, i) => {
    if (typeof c === "string") {
      return <Fragment key={i}>{c.split(/(\s+)/).map((w, j) => /^\s+$/.test(w) || !w ? w : <span key={j} className="wr-word"><span style={{ transitionDelay: `${n++ * 70}ms` }}>{w}</span></span>)}</Fragment>;
    }
    return isValidElement(c) ? c : null;
  });
  return <span ref={ref} className={`wr ${on ? "wr-on" : ""}`}>{parts}</span>;
}
