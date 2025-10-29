import { Building2, Users, CreditCard, BarChart3, MapPin, Bell, Wrench, Utensils } from "lucide-react";

const features = [
  {
    title: "Property Management",
    desc: "List properties with rooms, beds, amenities, photos, and rules.",
    icon: Building2,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "Tenant & Booking",
    desc: "Accept or reject bookings, verify documents, view occupancy.",
    icon: Users,
    color: "bg-sky-100 text-sky-700",
  },
  {
    title: "Payments",
    desc: "Track rent and bookings with secure gateways.",
    icon: CreditCard,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Analytics",
    desc: "Revenue, occupancy, and service KPIs at a glance.",
    icon: BarChart3,
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Maps & Nearby",
    desc: "Search by city or use current location for nearby PGs.",
    icon: MapPin,
    color: "bg-rose-100 text-rose-700",
  },
  {
    title: "Notice Board",
    desc: "Broadcast announcements to everyone instantly.",
    icon: Bell,
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Service Requests",
    desc: "Submit, track, and resolve issues quickly.",
    icon: Wrench,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Food Polls",
    desc: "Daily lunch/dinner polls to reduce waste.",
    icon: Utensils,
    color: "bg-teal-100 text-teal-700",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">All-in-one features</h2>
          <p className="mt-2 text-slate-700">Built for PG owners and tenants to simplify every day — from discovery to daily living.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition-shadow">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${f.color} mb-4`}>
                <f.icon size={18} />
              </div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
