"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.unobserve(element); }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <section ref={ref} id={id} className={`${className ?? ""} reveal ${visible ? "is-visible" : ""}`.trim()}>{children}</section>;
}
