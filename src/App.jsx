import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Roles from "./components/Roles";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="analytics" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 p-8">
              <h2 className="text-3xl font-bold">Insights that drive decisions</h2>
              <p className="mt-2 text-slate-700 max-w-2xl">
                Keep a pulse on revenue, occupancy, service SLAs, and food consumption trends. Designed to load fast and stay actionable.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard label="Monthly Revenue" value="₹2.6L" trend="↑ 12%" />
                <StatCard label="Occupancy" value="91%" trend="↑ 3%" />
                <StatCard label="Open Requests" value="5" trend="↓ 18%" />
                <StatCard label="Meal Attendees" value="76" trend="↑ 9%" />
              </div>
            </div>
          </div>
        </section>
        <Roles />
      </main>
      <Footer />
    </div>
  );
}

function StatCard({ label, value, trend }) {
  return (
    <div className="rounded-xl bg-white p-5 border border-slate-200 shadow-sm">
      <div className="text-sm text-slate-600">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className="text-2xl font-bold">{value}</div>
        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{trend}</span>
      </div>
      <div className="mt-4 h-2 w-full rounded bg-slate-100">
        <div className="h-2 rounded bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 w-2/3" />
      </div>
    </div>
  );
}

export default App;
