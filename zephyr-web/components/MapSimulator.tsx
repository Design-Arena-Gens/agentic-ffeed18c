"use client";
import { useEffect, useRef, useState } from 'react';

export interface MapSimulatorProps {
  showPath?: boolean;
  className?: string;
}

export default function MapSimulator({ showPath = true, className = "h-56" }: MapSimulatorProps) {
  const droneRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const animate = () => {
      setProgress((p) => (p >= 1 ? 0 : p + 0.0025));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const pathPoints = [
    { x: 8, y: 80 },
    { x: 25, y: 40 },
    { x: 50, y: 60 },
    { x: 75, y: 35 },
    { x: 92, y: 20 },
  ];

  const getPoint = (t: number) => {
    const seg = Math.floor(t * (pathPoints.length - 1));
    const localT = t * (pathPoints.length - 1) - seg;
    const a = pathPoints[seg];
    const b = pathPoints[seg + 1];
    const x = a.x + (b.x - a.x) * localT;
    const y = a.y + (b.y - a.y) * localT;
    return { x, y };
  };

  const p = getPoint(progress);

  return (
    <div className={`relative w-full ${className} rounded-xl overflow-hidden bg-grid border border-white/10`}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {showPath && (
          <polyline
            points={pathPoints.map((pt) => `${pt.x},${pt.y}`).join(' ')}
            fill="none"
            stroke="#334155"
            strokeWidth="1.5"
          />
        )}
      </svg>
      <div
        ref={droneRef}
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${p.x}%`, top: `${p.y}%` }}
      >
        <div className="w-4 h-4 rounded-full bg-sky-400 shadow-lg shadow-sky-400/40" />
      </div>
      <div className="absolute top-2 left-2 text-[10px] px-2 py-1 rounded bg-black/50 border border-white/10">
        Live Drone Tracker
      </div>
    </div>
  );
}
