import React, { useState } from "react";
import {
  Car,
  Package,
  Search,
  Calendar,
  Phone,
  Mail,
  User,
  MessageSquare,
  CheckCircle,
  Clock,
  ChevronRight,
  Filter,
  Loader2
} from "lucide-react";
import Sidebar from "../../Components/Sidebar/Sidebar";

// Initial Dummy Data
const CAR_ENQUIRIES = [
  {
    _id: "CE-101",
    name: "Rahul Nair",
    phone: "+91 9876543210",
    email: "rahul.nair@gmail.com",
    carBooked: "Suzuki Swift (KL 52 A 0707)",
    startDate: "2026-08-01",
    endDate: "2026-08-05",
    message: "Need self-drive option if available, picking up from Pattambi.",
    status: "New",
  },
  {
    _id: "CE-102",
    name: "Anita Varma",
    phone: "+91 9123456789",
    email: "anita.v@yahoo.com",
    carBooked: "Toyota Innova Crysta (KL 07 CD 1234)",
    startDate: "2026-08-10",
    endDate: "2026-08-14",
    message: "Require airport pickup at Kochi Airport for 6 passengers.",
    status: "Contacted",
  },
];

const PACKAGE_ENQUIRIES = [
  {
    _id: "PE-201",
    name: "Vikram Sethi",
    phone: "+91 9988776655",
    email: "vikram.sethi@outlook.com",
    packageName: "Ooty Tour (5 Days / 4 Nights)",
    startDate: "2026-08-15",
    endDate: "2026-08-19",
    message: "Looking for honeymoon add-ons like candle light dinner.",
    status: "New",
  },
  {
    _id: "PE-202",
    name: "Siddharth Rao",
    phone: "+91 9845012345",
    email: "siddharth.r@techcorp.com",
    packageName: "Goa Beach Gateway (4 Days / 3 Nights)",
    startDate: "2026-09-02",
    endDate: "2026-09-05",
    message: "Corporate booking for 12 members. Please send quote.",
    status: "Closed",
  },
];

export default function EnquiryManagement() {
  const [activeTab, setActiveTab] = useState("car"); // 'car' or 'package'
  const [carEnquiries, setCarEnquiries] = useState(CAR_ENQUIRIES);
  const [packageEnquiries, setPackageEnquiries] = useState(PACKAGE_ENQUIRIES);
  const [searchQuery, setSearchQuery] = useState("");
const [loading, setLoading] = useState(true);
  // Update Status
  const handleStatusChange = (id, newStatus) => {
    if (activeTab === "car") {
      setCarEnquiries(
        carEnquiries.map((item) =>
          item._id === id ? { ...item, status: newStatus } : item
        )
      );
    } else {
      setPackageEnquiries(
        packageEnquiries.map((item) =>
          item._id === id ? { ...item, status: newStatus } : item
        )
      );
    }
  };

  // Filtered dataset
  const currentList = activeTab === "car" ? carEnquiries : packageEnquiries;
  const filteredList = currentList.filter((item) => {
    const term = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(term) ||
      item.phone.toLowerCase().includes(term) ||
      item.email.toLowerCase().includes(term) ||
      (item.carBooked && item.carBooked.toLowerCase().includes(term)) ||
      (item.packageName && item.packageName.toLowerCase().includes(term))
    );
  });

  return (
<div className="flex h-screen bg-[#f3f5f9] text-slate-800 inter overflow-hidden inter">
      
      {/* SIDEBAR */}
   <Sidebar

/>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-y-auto p-8">
              
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Enquiries</h1>
        <p className="text-xs text-slate-400 mt-0.5">Manage customer booking requests and leads</p>
      </div>

      {/* Top Navigation Tabs */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => {
            setActiveTab("car");
            setSearchQuery("");
          }}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all ${
            activeTab === "car"
              ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
              : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200/60"
          }`}
        >
          <Car className={`w-4 h-4 ${activeTab === "car" ? "text-sky-400" : "text-slate-400"}`} />
          Car Enquiries
          <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === "car" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>
            {carEnquiries.length}
          </span>
        </button>

        <button
          onClick={() => {
            setActiveTab("package");
            setSearchQuery("");
          }}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all ${
            activeTab === "package"
              ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
              : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200/60"
          }`}
        >
          <Package className={`w-4 h-4 ${activeTab === "package" ? "text-amber-400" : "text-slate-400"}`} />
          Package Enquiries
          <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === "package" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>
            {packageEnquiries.length}
          </span>
        </button>
      </div>

      {/* Search & Actions Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder={
              activeTab === "car"
                ? "Search customer, vehicle, or phone..."
                : "Search customer, package, or email..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-100/80 border border-slate-200/60 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-700 outline-none focus:bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
          />
        </div>

        <div className="text-xs text-slate-400 font-medium">
          Showing <span className="font-bold text-slate-700">{filteredList.length}</span> requests
        </div>
      </div>

      {/* Cards List */}
      <div className="space-y-4">
        {filteredList.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          >
            {/* Left: Customer & Booking Info */}
            <div className="flex-1 space-y-3">
              
              {/* ID & Selected Item Title */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-500">
                  {item._id}
                </span>

                <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                  {activeTab === "car" ? (
                    <>
                      <Car className="w-4 h-4 text-sky-500" /> {item.carBooked}
                    </>
                  ) : (
                    <>
                      <Package className="w-4 h-4 text-amber-500" /> {item.packageName}
                    </>
                  )}
                </h3>
              </div>

              {/* Customer Contact Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-semibold">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.email}</span>
                </div>
              </div>

              {/* Travel Dates */}
              <div className="flex items-center gap-4 text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100 w-fit">
                <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-sky-500" />
                  <span>Start: <strong className="text-slate-900">{item.startDate}</strong></span>
                </div>
                <span className="text-slate-300">|</span>
                <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>End: <strong className="text-slate-900">{item.endDate}</strong></span>
                </div>
              </div>

              {/* Customer Message */}
              {item.message && (
                <div className="flex items-start gap-2 text-xs text-slate-500 italic bg-sky-50/40 p-3 rounded-xl border border-sky-100/50">
                  <MessageSquare className="w-3.5 h-3.5 text-sky-500 mt-0.5 shrink-0" />
                  <span>"{item.message}"</span>
                </div>
              )}
            </div>

            {/* Right: Status Action Dropdown */}
            <div className="w-full lg:w-auto flex items-center justify-between lg:flex-col lg:items-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
              <span className="text-[11px] font-semibold text-slate-400">Update Status</span>
              
              <select
                value={item.status}
                onChange={(e) => handleStatusChange(item._id, e.target.value)}
                className={`text-xs font-bold px-3 py-2 rounded-xl outline-none cursor-pointer transition-all ${
                  item.status === "New"
                    ? "bg-amber-100 text-amber-800 border border-amber-200"
                    : item.status === "Contacted"
                    ? "bg-sky-100 text-sky-800 border border-sky-200"
                    : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                }`}
              >
                <option value="New">🟡 New Lead</option>
                <option value="Contacted">🔵 Contacted</option>
                <option value="Closed">🟢 Closed / Booked</option>
              </select>
            </div>
          </div>
        ))}

        {filteredList.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100">
            <p className="text-sm font-bold text-slate-700">No enquiries found</p>
            <p className="text-xs text-slate-400 mt-1">Try tweaking your search keywords.</p>
          </div>
        )}
      </div>
</main>
    </div>
  );
}