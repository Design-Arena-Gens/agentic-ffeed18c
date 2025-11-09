"use client";
import { useEffect, useRef } from 'react';

export default function DroneAnimation({ className = "w-28 h-28" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let t = 0;
    let raf = 0;
    const animate = () => {
      t += 0.02;
      const x = Math.cos(t) * 24;
      const y = Math.sin(t * 1.2) * 12;
      el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div ref={ref} className="transition-transform duration-75">
        <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="58" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 6" />
          <g>
            <rect x="50" y="50" width="20" height="14" rx="3" fill="#0EA5E9" />
            <circle cx="40" cy="48" r="10" stroke="#94A3B8" strokeWidth="3" fill="none" />
            <circle cx="80" cy="48" r="10" stroke="#94A3B8" strokeWidth="3" fill="none" />
            <circle cx="40" cy="48" r="3" fill="#FF9933" />
            <circle cx="80" cy="48" r="3" fill="#138808" />
            <rect x="56" y="64" width="8" height="5" rx="1" fill="#1F2937" />
          </g>
        </svg>
      </div>
    </div>
  );
}
