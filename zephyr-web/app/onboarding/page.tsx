import DroneAnimation from '@/components/DroneAnimation';
import Link from 'next/link';

export default function Onboarding() {
  const cards = [
    {
      title: "Skip traffic, not deliveries",
      subtitle: "Autonomous drones slip past jams",
      icon: <DroneAnimation />,
    },
    {
      title: "Medicine at 3AM? We deliver",
      subtitle: "Critical supplies, on demand",
      icon: <div className="text-6xl">??</div>,
    },
    {
      title: "?45 delivery across cities",
      subtitle: "Cheaper, faster, cleaner",
      icon: <div className="text-6xl">?</div>,
    },
  ];

  return (
    <div className="p-4 space-y-6">
      {cards.map((c, i) => (
        <div key={i} className="rounded-2xl p-6 border border-white/10 bg-white/5 flex items-center gap-4">
          <div className="shrink-0">{c.icon}</div>
          <div>
            <div className="text-lg font-semibold">{c.title}</div>
            <div className="text-white/70 text-sm">{c.subtitle}</div>
          </div>
        </div>
      ))}

      <Link href="/" className="block text-center py-3 rounded-xl bg-saffron text-black font-semibold">Get Started</Link>
    </div>
  );
}
