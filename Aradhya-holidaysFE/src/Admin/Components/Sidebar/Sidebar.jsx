import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Car,
  MessageSquare,
  Quote,
  Settings,
  LogOut,
  ListSortDescending,
} from "lucide-react";

export default function Sidebar() {
const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Packages", path: "/admin-package", icon: Package },
  { name: "Vehicles", path: "/admin-vehicle", icon: Car },
  { name: "Enquiries", path: "/admin-enquiry", icon: MessageSquare },
  { name: "Testimonials", path: "/admin-testimonials", icon: Quote },
  { name: "Category", path: "/admin-category", icon: ListSortDescending },
];
const navigate = useNavigate();
const location = useLocation();
const handleLogout = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("admin");

  navigate("/admin-login");
};
  return (
    <>
      {/* ================= Desktop Sidebar ================= */}
      <aside className="hidden md:flex w-64 manrope bg-white border-r border-slate-100 flex-col justify-between p-6 shrink-0">
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
const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.name}
onClick={() => navigate(item.path)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-slate-900 text-white shadow-md"
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

        <div className="space-y-1 pt-6 border-t border-slate-100">
     
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-500 hover:bg-rose-50"   onClick={handleLogout}
>
            <LogOut className="w-4 h-4" />
            Log Out
          </button>
        </div>
      </aside>

      <div className="md:hidden fixed bottom-2 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md">
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl px-2 py-2">
          <div className="flex items-center justify-between">
            {navItems.map((item) => {
              const Icon = item.icon;
const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.name}
onClick={() => navigate(item.path)}
                  className={`flex flex-col items-center justify-center flex-1 py-2 rounded-xl transition-all ${
                    isActive
                      ? "bg-sky-500 text-white"
                      : "text-slate-500"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-[10px] mt-1 font-medium">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}