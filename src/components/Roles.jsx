import { useState } from "react";
import { Users, Building2, Shield, CreditCard, Wrench, Utensils, MapPin } from "lucide-react";

const OWNER_POINTS = [
  { icon: Building2, text: "Add properties, rooms, beds, and amenities." },
  { icon: Shield, text: "Verify tenants and manage occupancy." },
  { icon: CreditCard, text: "Track and reconcile rent & bookings." },
  { icon: Utensils, text: "Create daily food polls and view responses." },
  { icon: Wrench, text: "Prioritize and resolve service requests." },
];

const USER_POINTS = [
  { icon: MapPin, text: "Search nearby PGs or join via unique PG ID/QR." },
  { icon: CreditCard, text: "Pay monthly rent and view history." },
  { icon: Shield, text: "Upload IDs for digital verification." },
  { icon: Wrench, text: "Raise service requests and track status." },
  { icon: Utensils, text: "Respond to lunch/dinner polls." },
];

export default function Roles() {
  const [role, setRole] = useState("owner");

  return (
    <section id="roles" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Built for owners and tenants</h2>
          <p className="mt-2 text-slate-700">Two focused experiences on a single platform. Switch to see what each can do.</p>
        </div>

        <div className="mt-8 inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              role === "owner" ? "bg-white text-slate-900 shadow" : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setRole("owner")}
          >
            Owner
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              role === "user" ? "bg-white text-slate-900 shadow" : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setRole("user")}
          >
            Tenant
          </button>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              {role === "owner" ? (
                <Building2 className="text-indigo-600" />
              ) : (
                <Users className="text-emerald-600" />
              )}
              <h3 className="text-xl font-semibold text-slate-900">
                {role === "owner" ? "Owner dashboard" : "Tenant app"}
              </h3>
            </div>
            <p className="mt-2 text-slate-700">
              {role === "owner"
                ? "A command center for listings, bookings, payments, food, and service operations."
                : "A daily companion for finding, joining, paying, and staying connected at your PG."}
            </p>

            <ul className="mt-6 space-y-3">
              {(role === "owner" ? OWNER_POINTS : USER_POINTS).map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                    <Icon size={14} />
                  </span>
                  <span className="text-slate-800">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <PhoneMock role={role} />
        </div>
      </div>
    </section>
  );
}

function PhoneMock({ role }) {
  return (
    <div className="relative w-full">
      <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-slate-300 bg-slate-900/95 text-white shadow-xl overflow-hidden">
        <div className="h-10 bg-black/30" />
        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="font-semibold">{role === "owner" ? "PG Pulse • Owner" : "PG Pulse • Tenant"}</div>
            <div className="text-xs text-slate-300">Now</div>
          </div>
          {role === "owner" ? (
            <div className="grid grid-cols-2 gap-3">
              <Tile label="Bookings" value="8 pending" color="from-indigo-500" />
              <Tile label="Revenue" value="₹2.6L" color="from-emerald-500" />
              <Tile label="Occupancy" value="91%" color="from-violet-500" />
              <Tile label="Requests" value="5 open" color="from-rose-500" />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <Tile label="My PG" value="Maple Residency" color="from-emerald-500" />
              <Tile label="Rent Due" value="3 days" color="from-indigo-500" />
              <Tile label="Food Poll" value="Dinner: Yes" color="from-sky-500" />
              <Tile label="Requests" value="Wi‑Fi: In-progress" color="from-amber-500" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Tile({ label, value, color }) {
  return (
    <div className="rounded-xl bg-white/5 p-3 border border-white/10">
      <div className={`h-8 w-8 rounded-md bg-gradient-to-br ${color} to-transparent`} />
      <div className="mt-2 text-xs text-slate-300">{label}</div>
      <div className="text-sm font-semibold">{value}</div>
    </div>
  );
}
