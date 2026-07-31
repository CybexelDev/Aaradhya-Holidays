import React, { useState,useEffect } from "react";
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
  MoreHorizontal,
  Loader2
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getEnquiries ,getDashboardData} from "../../../Api/adminApi";
export default function AdminDashboardLayout() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [dashboardData, setDashboardData] = useState(null);
const [recentEnquiries, setRecentEnquiries] = useState([]);
const [dashboardLoading, setDashboardLoading] = useState(true);
const [enquiriesLoading, setEnquiriesLoading] = useState(true);
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Packages", icon: Package },
    { name: "Vehicles", icon: Car },
    { name: "Enquiries", icon: MessageSquare },
    { name: "Testimonials", icon: Quote },
  ];


useEffect(() => {
    fetchDashboard();
  fetchEnquiries();
}, []);


const fetchDashboard = async () => {
  try {
    setDashboardLoading(true);

    const res = await getDashboardData();
    setDashboardData(res.data);
  } catch (err) {
    console.log(err);
  } finally {
    setDashboardLoading(false);
  }
};
const fetchEnquiries = async () => {
  try {
    setEnquiriesLoading(true);

    const res = await getEnquiries();
    setRecentEnquiries(res.enquiryData);
  } catch (error) {
    console.log(error);
  } finally {
    setEnquiriesLoading(false);
  }
};
const months = [
  { month: "Jan", enquiries: 0 },
  { month: "Feb", enquiries: 0 },
  { month: "Mar", enquiries: 0 },
  { month: "Apr", enquiries: 0 },
  { month: "May", enquiries: 0 },
  { month: "Jun", enquiries: 0 },
  { month: "Jul", enquiries: 0 },
  { month: "Aug", enquiries: 0 },
  { month: "Sep", enquiries: 0 },
  { month: "Oct", enquiries: 0 },
  { month: "Nov", enquiries: 0 },
  { month: "Dec", enquiries: 0 },
];

dashboardData?.monthlyEnquiries?.forEach((item) => {
  months[item._id - 1].enquiries = item.enquiries;
});
const loading = dashboardLoading || enquiriesLoading;
  return (
    
    <div className="flex h-screen bg-[#f3f5f9] text-slate-800 inter overflow-hidden inter">
      
      {/* SIDEBAR */}
   <Sidebar
  activeTab={activeTab}
  setActiveTab={setActiveTab}
/>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-y-auto p-8">
            {loading ? (
        <div className="flex h-full items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-sky-500" />
        </div>
      ) : (
        <>
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
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{dashboardData?.bookingCount}</h3>
              </div>
              <div className="p-2.5 bg-sky-50 rounded-2xl text-sky-500">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>
           
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-medium text-slate-400">Active Packages</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{dashboardData?.packageCount}</h3>
              </div>
              <div className="p-2.5 bg-indigo-50 rounded-2xl text-indigo-500">
                <Package className="w-5 h-5" />
              </div>
            </div>
        
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-medium text-slate-400">Available Fleet</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{dashboardData?.vehicleCount}</h3>
              </div>
              <div className="p-2.5 bg-amber-50 rounded-2xl text-amber-500">
                <Car className="w-5 h-5" />
              </div>
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
         <div className="h-72">
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart
      data={months}
      margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorEnquiries" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4} />
          <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
        </linearGradient>
      </defs>

      <CartesianGrid
        strokeDasharray="3 3"
        vertical={false}
        stroke="#e2e8f0"
      />

      <XAxis
        dataKey="month"
        tick={{ fontSize: 12 }}
        axisLine={false}
        tickLine={false}
      />

      <YAxis
        allowDecimals={false}
        tick={{ fontSize: 12 }}
        axisLine={false}
        tickLine={false}
      />

      <Tooltip />

      <Area
        type="monotone"
        dataKey="enquiries"
        stroke="#0284c7"
        strokeWidth={3}
        fill="url(#colorEnquiries)"
      />
    </AreaChart>
  </ResponsiveContainer>
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
                  <th className="pb-3 px-4">Phone Number</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm">
                {dashboardData?.latestEnquiry?.map((enquiry) => (
                  <tr key={enquiry._id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
  {enquiry.name?.charAt(0).toUpperCase()}
</div>
                        <div>
                          <p className="font-semibold text-slate-800 text-xs">{enquiry.name}</p>
                          <p className="text-[11px] text-slate-400">{enquiry._id.slice(-6)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-700 text-xs">
{enquiry.destination}                    </td>
                    <td className="py-3.5 px-4 text-slate-400 text-xs">
{new Date(enquiry.date).toLocaleDateString()}
                    </td>
                  <td className="py-3.5 px-4 text-slate-600 text-xs font-medium">
  {enquiry.phoneNumber}
</td>
                  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
</>
      )}
      </main>
    </div>
  );
}