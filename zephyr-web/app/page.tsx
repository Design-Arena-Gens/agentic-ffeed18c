"use client";
import Link from 'next/link';
import MapSimulator from '@/components/MapSimulator';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
  return (
    <div className="p-4 space-y-4">
      <div className="rounded-2xl bg-gradient-to-br from-saffron/30 via-white/10 to-indiaGreen/30 p-4 border border-white/10">
        <h1 className="text-xl font-semibold">Zephyr Delivery</h1>
        <p className="text-white/70 text-sm">Skip traffic. Fly deliveries. India-wide.</p>
      </div>

      <div className="rounded-xl border border-white/10 p-3 bg-white/5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-white/70">Emergency Mode</div>
            <div className="text-xs text-white/50">Prioritized routing & drone-only lanes</div>
          </div>
          <Link href="/emergency" className="px-4 py-2 rounded-lg bg-zephyrRed text-white font-medium animate-pulseRed">SOS</Link>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm text-white/70">Deliver to</div>
        <AddressInput />
      </div>

      <MapSimulator />

      <div className="grid grid-cols-4 gap-3 mt-2">
        <CategoryCard href="/order?cat=medicine" label="Medicine" color="from-saffron to-white" emoji="??" />
        <CategoryCard href="/order?cat=food" label="Food" color="from-indigo-500 to-sky-400" emoji="??" />
        <CategoryCard href="/order?cat=docs" label="Documents" color="from-emerald-500 to-lime-400" emoji="??" />
        <CategoryCard href="/order?cat=electronics" label="Electronics" color="from-rose-500 to-orange-400" emoji="??" />
      </div>
    </div>
  );
}

function CategoryCard({ href, label, color, emoji }: { href: string; label: string; color: string; emoji: string }) {
  return (
    <Link href={href} className={`rounded-xl p-3 bg-gradient-to-br ${color} text-black font-medium text-xs shadow`}> 
      <div className="text-lg">{emoji}</div>
      <div>{label}</div>
    </Link>
  );
}

function AddressInput() {
  const [value, setValue] = useState('Indiranagar, Bengaluru');
  const inDroneZone = useMemo(() => {
    const hash = Array.from(value).reduce((a, c) => a + c.charCodeAt(0), 0);
    return (hash % 10) < 7; // ~70% addresses are in a drone zone
  }, [value]);

  useEffect(() => {
    // simulate geocoding delay
  }, [value]);

  return (
    <div className="flex items-center gap-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter address"
        className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-saffron"
      />
      <div className={`text-xs px-2 py-1 rounded border ${inDroneZone ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-rose-500/20 border-rose-500/40 text-rose-300'}`}>
        {inDroneZone ? 'Drone Zone' : 'Ground Only'}
      </div>
    </div>
  );
}
