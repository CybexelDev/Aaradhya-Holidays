import React from "react";
import {
  LayoutDashboard,
  Package,
  Car,
  MessageSquare,
  Quote,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Packages", icon: Package },
    { name: "Vehicles", icon: Car },
    { name: "Enquiries", icon: MessageSquare },
    { name: "Testimonials", icon: Quote },
  ];

  return (
    <aside className="w-64 inter bg-white border-r border-slate-100 flex flex-col justify-between p-6 shrink-0">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 rounded-xl bg-sky-500 flex items-center justify-center text-white font-bold text-lg">
            A
          </div>

          <span className="font-bold text-lg tracking-tight text-slate-900">
            Aaradhya <span className="text-sky-500">Holidays</span>
          </span>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase mb-3 px-3">
            Main Menu
          </p>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-white" : "text-slate-400"
                    }`}
                  />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom */}
      <div className="space-y-1 pt-6 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50">
          <Settings className="w-4 h-4" />
          Settings
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-500 hover:bg-rose-50">
          <LogOut className="w-4 h-4" />
          Log Out
        </button>
      </div>
    </aside>
  );
}