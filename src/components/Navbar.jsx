import { Rocket, Home, BarChart3, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 text-white grid place-items-center shadow-md">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-slate-900 text-lg">PG Pulse</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#home" className="flex items-center gap-2 hover:text-slate-900 transition-colors"><Home size={18}/> Home</a>
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#roles" className="hover:text-slate-900 transition-colors">Owners & Tenants</a>
          <a href="#analytics" className="flex items-center gap-2 hover:text-slate-900 transition-colors"><BarChart3 size={18}/> Analytics</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-lg border border-slate-300 hover:bg-slate-50">Sign in</button>
          <button className="inline-flex px-4 py-2 text-sm font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800">Get Started</button>
          <button className="md:hidden p-2 rounded-lg border border-slate-300" aria-label="Open menu">
            <Settings size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
