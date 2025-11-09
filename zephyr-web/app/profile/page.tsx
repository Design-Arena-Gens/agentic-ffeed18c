export default function Profile() {
  return (
    <div className="p-4 space-y-4">
      <div className="rounded-2xl p-4 border border-white/10 bg-white/5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full tricolor" />
        <div>
          <div className="font-semibold">Ananya Sharma</div>
          <div className="text-xs text-white/60">Gold ? Drone S</div>
        </div>
      </div>

      <div className="rounded-xl p-4 border border-white/10 bg-white/5">
        <div className="text-sm font-medium">Subscriptions</div>
        <div className="text-xs text-white/60">Drone S (Priority) ? ?299/month</div>
      </div>

      <div className="rounded-xl p-4 border border-white/10 bg-white/5 space-y-2">
        <div className="text-sm font-medium">Settings</div>
        <ul className="text-sm text-white/80 space-y-2">
          <li>Trusted Pharmacies</li>
          <li>Allowed Drop Zones</li>
          <li>Digital KYC</li>
          <li>Health ID</li>
        </ul>
      </div>
    </div>
  );
}
