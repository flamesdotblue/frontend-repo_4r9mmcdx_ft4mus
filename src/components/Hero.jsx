import { MapPin, Shield, CreditCard } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Manage PGs effortlessly. Live comfortably.
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-2xl">
              PG Pulse unifies everything for owners and tenants — listings, bookings, payments, food polls, and service requests — in one simple app.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#roles" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800">
                Explore Roles
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-300 font-medium hover:bg-slate-50">
                See Features
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700">
              <div className="flex items-center gap-3">
                <MapPin className="text-indigo-600" size={20} />
                <span>Location-based discovery</span>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard className="text-sky-600" size={20} />
                <span>Secure rent & booking payments</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-emerald-600" size={20} />
                <span>Role-based access & verification</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 via-sky-400/15 to-emerald-400/15" aria-hidden="true" />
              <div className="relative h-full w-full grid place-items-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  <FeatureCard title="Bookings" subtitle="Confirm in one tap" color="indigo" />
                  <FeatureCard title="Polls" subtitle="Plan meals better" color="sky" />
                  <FeatureCard title="Payments" subtitle="Stripe/Razorpay" color="emerald" />
                  <FeatureCard title="Requests" subtitle="Track to resolve" color="violet" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, subtitle, color }) {
  const colorMap = {
    indigo: "from-indigo-500/20",
    sky: "from-sky-500/20",
    emerald: "from-emerald-500/20",
    violet: "from-violet-500/20",
  };
  return (
    <div className={`relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm overflow-hidden`}> 
      <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[color]} via-transparent to-transparent`} aria-hidden="true" />
      <div className="relative">
        <p className="text-sm font-medium text-slate-900">{title}</p>
        <p className="text-xs text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}
