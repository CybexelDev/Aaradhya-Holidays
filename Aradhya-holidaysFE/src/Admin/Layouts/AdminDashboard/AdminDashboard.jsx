import React, { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Car,
  MessageSquare,
  Quote,
  Settings,
  LogOut,
  Bell,
  Search,
  Plus,
  TrendingUp,
  Users,
  Calendar,
  ChevronRight,
  MoreHorizontal
} from "lucide-react";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function AdminDashboardLayout() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Packages", icon: Package },
    { name: "Vehicles", icon: Car },
    { name: "Enquiries", icon: MessageSquare },
    { name: "Testimonials", icon: Quote },
  ];

  const recentEnquiries = [
    {
      id: "ENQ-1024",
      name: "Emma Ryan",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
      package: "Kerala Honeymoon Special",
      date: "Jul 22, 2026",
      status: "Pending",
      statusBg: "bg-amber-100 text-amber-700",
    },
    {
      id: "ENQ-1023",
      name: "Justin Weber",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
      package: "Munnar & Alleppey Tour",
      date: "Jul 21, 2026",
      status: "Confirmed",
      statusBg: "bg-emerald-100 text-emerald-700",
    },
    {
      id: "ENQ-1022",
      name: "Roxanne Hills",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60",
      package: "Wayanad Adventure Trip",
      date: "Jul 20, 2026",
      status: "Confirmed",
      statusBg: "bg-emerald-100 text-emerald-700",
    },
  ];

  return (
    <div className="flex h-screen bg-[#f3f5f9] text-slate-800 inter overflow-hidden inter">
      
      {/* SIDEBAR */}
   <Sidebar
  activeTab={activeTab}
  setActiveTab={setActiveTab}
/>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-y-auto p-8">
        
        {/* Top Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-xs text-slate-400 mt-0.5">Welcome back, Admin!</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative flex items-center">
              <Search className="w-4 h-4 absolute left-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-white border border-slate-200/80 rounded-full py-2 pl-9 pr-4 text-xs text-slate-700 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 w-60 transition-all"
              />
            </div>

            {/* Quick Action Button */}
            <button className="w-9 h-9 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-slate-50 shadow-xs transition-colors">
              <Plus className="w-4 h-4" />
            </button>

            {/* Notifications */}
            <button className="w-9 h-9 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-slate-50 shadow-xs transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 bg-sky-500 rounded-full absolute top-2 right-2 border-2 border-white" />
            </button>

            {/* Profile Avatar */}
            <div className="flex items-center gap-3 pl-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
                alt="Admin"
                className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-xs"
              />
            </div>
          </div>
        </header>

        {/* TOP SECTION: 3 STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 flex flex-col justify-between shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-medium text-slate-400">Total Enquiries</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">1,284</h3>
              </div>
              <div className="p-2.5 bg-sky-50 rounded-2xl text-sky-500">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
              <span className="bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +12%
              </span>
              <span className="text-slate-400">vs last month</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-medium text-slate-400">Active Packages</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">48</h3>
              </div>
              <div className="p-2.5 bg-indigo-50 rounded-2xl text-indigo-500">
                <Package className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">12</span>
              <span>custom itineraries created</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-medium text-slate-400">Available Fleet</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">24</h3>
              </div>
              <div className="p-2.5 bg-amber-50 rounded-2xl text-amber-500">
                <Car className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
              <span className="bg-emerald-50 px-2 py-0.5 rounded-full">92%</span>
              <span className="text-slate-400">ready for deployment</span>
            </div>
          </div>

        </div>

        {/* MIDDLE SECTION: MODERN GRAPH CARD */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Enquiry Overview</h2>
              <p className="text-xs text-slate-400">Monthly booking enquiries trend</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700">
                This Year
              </button>
            </div>
          </div>

          {/* Curved Modern Area Line Graph (Pure SVG) */}
          <div className="w-full h-48 relative">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              
              {/* Background Area Fill */}
              <path
                d="M 0 120 Q 80 40, 160 80 T 320 30 T 500 70 L 500 150 L 0 150 Z"
                fill="url(#gradient)"
              />
              
              {/* Smooth Trend Line */}
              <path
                d="M 0 120 Q 80 40, 160 80 T 320 30 T 500 70"
                fill="none"
                stroke="#0284c7"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Data Points */}
              <circle cx="160" cy="80" r="4" fill="#ffffff" stroke="#0284c7" strokeWidth="3" />
              <circle cx="320" cy="30" r="5" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
            </svg>
          </div>

          {/* X Axis Labels */}
          <div className="flex justify-between text-xs text-slate-400 mt-4 px-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </div>

        {/* BOTTOM SECTION: RECENT ENQUIRIES TABLE */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Recent Enquiries</h2>
              <p className="text-xs text-slate-400">Latest travel requests from customers</p>
            </div>
            <button className="text-xs font-semibold text-sky-500 hover:text-sky-600 flex items-center gap-1">
              View All <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  <th className="pb-3 px-4">Client</th>
                  <th className="pb-3 px-4">Requested Package</th>
                  <th className="pb-3 px-4">Date</th>
                  <th className="pb-3 px-4">Status</th>
                  <th className="pb-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm">
                {recentEnquiries.map((enquiry) => (
                  <tr key={enquiry.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={enquiry.avatar}
                          alt={enquiry.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-slate-800 text-xs">{enquiry.name}</p>
                          <p className="text-[11px] text-slate-400">{enquiry.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-700 text-xs">
                      {enquiry.package}
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 text-xs">
                      {enquiry.date}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${enquiry.statusBg}`}>
                        {enquiry.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}