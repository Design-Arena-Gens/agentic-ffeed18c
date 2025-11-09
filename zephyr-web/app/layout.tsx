import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zephyr - AI Drone Delivery',
  description: "India's first AI drone delivery platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="container-mobile min-h-screen bg-zephyrBlack text-white flex flex-col">
        <header className="px-4 py-3 flex items-center justify-between border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-sm tricolor" />
            <span className="font-semibold tracking-wide">Zephyr</span>
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/onboarding" className="text-white/70 hover:text-white">Onboard</Link>
            <Link href="/emergency" className="text-white/70 hover:text-white">SOS</Link>
            <Link href="/profile" className="text-white/70 hover:text-white">Profile</Link>
          </nav>
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
        <footer className="sticky bottom-0 bg-zephyrGray/70 backdrop-blur border-t border-white/10">
          <div className="grid grid-cols-4 text-center text-xs">
            <Link href="/" className="py-3 hover:bg-white/5">Home</Link>
            <Link href="/order" className="py-3 hover:bg-white/5">Order</Link>
            <Link href="/emergency" className="py-3 hover:bg-white/5">Emergency</Link>
            <Link href="/profile" className="py-3 hover:bg-white/5">Profile</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
