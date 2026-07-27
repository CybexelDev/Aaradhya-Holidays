import React, { useState,useEffect } from "react";
import {
  Plus,
  Search,
  Quote,
  Star,
  Trash2,
  X,
  Upload,
  AlertCircle,
  User,
  Building,
  Loader2
} from "lucide-react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getTestimonials,  addTestimonial,
  deleteTestimonial, } from "../../../Api/adminApi";
// Initial Testimonials Data
const INITIAL_TESTIMONIALS = [
  {
    _id: "1",
    name: "Sarah Jenkins",
    position: "Software Engineer, Kochi",
    content: "Aaradhya Holidays organized our Kerala honeymoon trip seamlessly! The houseboat experience in Alleppey was beyond expectation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
  },
  {
    _id: "2",
    name: "Michael Chen",
    position: "Corporate Traveler, Singapore",
    content: "Excellent corporate travel services. Their fleet vehicles were spotless and the drivers were extremely professional and punctual.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
  },
  {
    _id: "3",
    name: "Ananya Sharma",
    position: "Solo Adventurer, Mumbai",
    content: "The Wayanad itinerary was packed with thrilling activities while maintaining complete safety. Highly recommend their custom packages!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60",
  },
];

export default function TestimonialsManagement() {
const [testimonials, setTestimonials] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
const [loading, setLoading] = useState(true);
  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [deletingTestimonial, setDeletingTestimonial] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    content: "",
  });
  const [imageFile, setImageFile] = useState(null);

useEffect(() => {
  fetchTestimonials();
}, []);
const fetchTestimonials = async () => {
  try {
    setLoading(true);

    const res = await getTestimonials();
    setTestimonials(res.testimonials);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
  // Input Handler
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add Testimonial Handler
const handleAddTestimonial = async (e) => {
  e.preventDefault();

  try {
    const payload = new FormData();

    payload.append("name", formData.name);
    payload.append("position", formData.position);
    payload.append("content", formData.content);

    if (imageFile) {
      payload.append("image", imageFile);
    }

    await addTestimonial(payload);

    await fetchTestimonials();

    setIsAddModalOpen(false);

    setFormData({
      name: "",
      position: "",
      content: "",
    });

    setImageFile(null);
  } catch (err) {
    console.log(err);
  }
};

  // Delete Testimonial Handler
 const handleDeleteTestimonial = async () => {
  try {
    await deleteTestimonial(deletingTestimonial._id);

    await fetchTestimonials();

    setDeletingTestimonial(null);
  } catch (err) {
    console.log(err);
  }
};
  // Filtered List
  const filteredTestimonials = testimonials.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
<div className="flex h-screen bg-[#f3f5f9] text-slate-800 inter overflow-hidden inter">
      
      {/* SIDEBAR */}
   <Sidebar
/>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-y-auto p-8">      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Customer Testimonials</h1>
          <p className="text-xs text-slate-400 mt-0.5">Manage explorer reviews & social proof</p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 text-xs transition-all active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" /> Add Testimonial
        </button>
      </div>

      {/* Stats and Search */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-lg font-bold flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-500" /> {testimonials.length} Total
          </span>
          <span>Reviews Received</span>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-100/80 border border-slate-200/60 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-700 outline-none focus:bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
          />
        </div>
      </div>

      {/* Testimonial Cards Grid */}
{loading ? (
  <div className="flex justify-center items-center py-20">
    <Loader2 className="w-10 h-10 text-sky-500 animate-spin" />
  </div>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredTestimonials.map((item) => (

          <div
            key={item._id}
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group"
          >
            <div>
              {/* Quote Icon Background & Delete Button */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-sky-100 fill-sky-50" />
                
                {/* Delete Button */}
                <button
                  onClick={() => setDeletingTestimonial(item)}
                  className="p-2 text-shadow-red-700 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
                  title="Delete Testimonial"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Content Body */}
              <p className="text-xs text-slate-600 leading-relaxed italic mb-6">
                "{item.content}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={item.Image?.[0]}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                  <p className="text-[11px] text-slate-400">{item.position}</p>
                </div>
              </div>

              {/* Star Rating */}
             
            </div>
          </div>
        ))}
      </div>
      )}

      {/* ========================================================= */}
      {/* 1. ADD TESTIMONIAL MODAL                                  */}
      {/* ========================================================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-white/60 relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <h2 className="text-lg font-bold text-slate-900 mb-1">Add Customer Testimonial</h2>
            <p className="text-xs text-slate-400 mb-6">Include client feedback & review details</p>

            <form onSubmit={handleAddTestimonial} className="space-y-4">
              
              {/* Name Input */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                />
              </div>

              {/* Position / Location Input */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Position / Role / Location
                </label>
                <input
                  type="text"
                  name="position"
                  required
                  placeholder="e.g. Software Engineer, Kochi"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                />
              </div>


              {/* Content Field */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Review Content
                </label>
                <textarea
                  name="content"
                  rows={3}
                  required
                  placeholder="Write the customer's review or quote..."
                  value={formData.content}
                  onChange={handleInputChange}
                  className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl p-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                />
              </div>

              {/* Profile Image Upload */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Customer Image
                </label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors relative cursor-pointer">
                  <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                  <p className="text-[11px] text-slate-500">Upload profile avatar photo</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
                {imageFile && (
                  <p className="text-[11px] text-emerald-600 font-medium mt-1">
                    Selected: {imageFile.name}
                  </p>
                )}
              </div>

              {/* Form Action Buttons */}
              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 shadow-md"
                >
                  Save Testimonial
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. DELETE CONFIRMATION MODAL                              */}
      {/* ========================================================= */}
      {deletingTestimonial && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-white/60 relative text-center animate-in fade-in zoom-in-95 duration-200">
            
            <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>

            <h3 className="text-base font-bold text-slate-900 mb-1">
              Delete Testimonial?
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Are you sure you want to delete feedback from <span className="font-semibold text-slate-700">{deletingTestimonial.name}</span>?
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setDeletingTestimonial(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 w-full"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteTestimonial}
                className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold shadow-md w-full"
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      )}
</main>
    </div>
  );
}