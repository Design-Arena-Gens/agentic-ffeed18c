"use client";
import Countdown from '@/components/Countdown';
import MapSimulator from '@/components/MapSimulator';
import { useState } from 'react';

export default function Emergency() {
  const [active, setActive] = useState(false);
  return (
    <div className="p-4 space-y-4">
      <div className="text-center space-y-3">
        <button onClick={() => setActive(true)} disabled={active} className={`mx-auto w-40 h-40 rounded-full bg-zephyrRed text-white text-xl font-bold flex items-center justify-center border-4 border-white/20 ${active? 'opacity-70':'animate-pulseRed'}`}>
          {active ? 'SOS Active' : 'SOS Delivery'}
        </button>
        <div className="text-white/70 text-sm">One-tap emergency priority delivery</div>
      </div>

      {active && (
        <div className="space-y-4">
          <div className="rounded-xl p-4 border border-white/10 bg-white/5">
            <div className="text-sm">Priority routing</div>
            <div className="text-xs text-white/60">ATC clearance granted ? Drone lane reserved</div>
          </div>
          <div className="rounded-xl p-4 border border-white/10 bg-white/5 flex items-center justify-between">
            <div className="text-sm">Estimated Arrival</div>
            <div className="text-2xl font-bold text-emerald-300"><Countdown seconds={6*60 + 30} /></div>
          </div>
          <MapSimulator />
        </div>
      )}
    </div>
  );
}
