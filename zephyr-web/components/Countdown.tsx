"use client";
import { useEffect, useState } from 'react';

export default function Countdown({ seconds, onComplete }: { seconds: number; onComplete?: () => void }) {
  const [remaining, setRemaining] = useState(seconds);
  useEffect(() => {
    setRemaining(seconds);
  }, [seconds]);
  useEffect(() => {
    if (remaining <= 0) {
      onComplete?.();
      return;
    }
    const id = setInterval(() => setRemaining((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [remaining, onComplete]);
  const mm = Math.floor(remaining / 60).toString().padStart(2, '0');
  const ss = (remaining % 60).toString().padStart(2, '0');
  return <span className="font-mono tabular-nums">{mm}:{ss}</span>;
}
