import React, { useState,useEffect } from "react";
import { getVehicle,getCategory,addVehicle,updateVehicle,deleteVehicle} from "../../../Api/adminApi";
import {
  Plus,
  Search,
  MapPin,
  Car,
  Users,
  Music,
  Tv,
  Wind,
  Star,
  Trash2,
  X,
  Upload,
  Check,
  ChevronRight,
  ShieldAlert,
  IndianRupee,
Pencil
} from "lucide-react";
import Sidebar from "../../Components/Sidebar/Sidebar";
// Sample Initial Vehicles matching your backend API keys
const INITIAL_VEHICLES = [
  {
    _id: "1",
    vehicleName: "Suzuki Swift",
    vehicleNumber: "KL 52 A 0707",
    Location: "Pattambi",
    category: "Hatchback",
    Description: "Good vehicle for off roading and on road driving with smooth handling.",
    SeatCapacity: "4",
    MusicSystem: "true",
    AC: "true",
    TV: "false",
    StarRating: "5",
    RentPerKLM: "50",
    AdvancePayment: "60",
    TollCharges: "Extra",
    Features: "Chilled AC, Wide Body, Touch Screen",
    Premium: "false",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop&q=60",
    ],
  },
  {
    _id: "2",
    vehicleName: "Toyota Innova Crysta",
    vehicleNumber: "KL 07 CD 1234",
    Location: "Kochi",
    category: "SUV",
    Description: "Premium MPV suited for long distance family tours and corporate trips.",
    SeatCapacity: "7",
    MusicSystem: "true",
    AC: "true",
    TV: "true",
    StarRating: "5",
    RentPerKLM: "80",
    AdvancePayment: "100",
    TollCharges: "Included",
    Features: "Reclining Seats, Ambient Lighting, Roof AC",
    Premium: "true",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=60",
    ],
  },
];

const CATEGORIES = ["All", "Hatchback", "Sedan", "SUV", "Tempo Traveller", "Luxury", "Bus"];

export default function VehicleManagement() {
const [vehicles, setVehicles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
const [categories, setCategories] = useState([]);

useEffect(() => {
  fetchCategories();
  fetchVehicles();
}, []);

const fetchCategories = async () => {
  try {
    const data = await getCategory();
    setCategories(data.categoryData);
  } catch (err) {
    console.error(err);
  }
};

  // Modals state
  const [selectedVehicle, setSelectedVehicle] = useState(null); // Detail View Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Add Form Modal
const [existingImages, setExistingImages] = useState([]);
  // Form State matching Postman screenshot keys exactly
  const [formData, setFormData] = useState({
    vehicleName: "",
    vehicleNumber: "",
    Location: "",
    category: "SUV",
    Description: "",
    SeatCapacity: "4",
    MusicSystem: "true",
    AC: "true",
    TV: "false",
    StarRating: "5",
    RentPerKLM: "",
    AdvancePayment: "",
    TollCharges: "Extra",
    Features: "",
    Premium: "false",
  });


  const [images, setImages] = useState([]);
  const [editingVehicle, setEditingVehicle] = useState(null);
const [deletingVehicle, setDeletingVehicle] = useState(null);
const [previewImage, setPreviewImage] = useState(null);
const removeExistingImage = (index) => {
  setExistingImages((prev) => prev.filter((_, i) => i !== index));
};
  // Handle Text/Select Inputs
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked ? "true" : "false" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle Multi-Image Uploads
  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

useEffect(() => {
  fetchVehicles();
}, []);
const categoryMap = categories.reduce((acc, category) => {
  acc[category._id] = category.categoryName;
  return acc;
}, {});
const fetchVehicles = async () => {
  try {
    const data = await getVehicle();

    console.log(data);

    setVehicles(data.vehicleData);
  } catch (err) {
    console.error(err);
  }
};
  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = new FormData();

  payload.append("vehicleName", formData.vehicleName);
  payload.append("vehicleNumber", formData.vehicleNumber);
  payload.append("Location", formData.Location);
  payload.append("CategoryId", formData.category);
  payload.append("Description", formData.Description);
  payload.append("SeatCapacity", formData.SeatCapacity);
  payload.append("MusicSystem", formData.MusicSystem);
  payload.append("AC", formData.AC);
  payload.append("TV", formData.TV);
  payload.append("StarRating", formData.StarRating);
  payload.append("RentPerKLM", formData.RentPerKLM);
  payload.append("AdvancePayment", formData.AdvancePayment);
  payload.append("TollCharges", formData.TollCharges);
  payload.append("Features", formData.Features);
  payload.append("Premium", formData.Premium);

  try {
   if (editingVehicle) {
  // Send all remaining existing images as ONE JSON array
  payload.append("oldImages", JSON.stringify(existingImages));

  // Send newly selected images
  images.forEach((img) => {
    payload.append("image", img);
  });

  await updateVehicle(editingVehicle._id, payload);
} else {
      // Add Vehicle
      images.forEach((img) => {
        payload.append("image", img);
      });

      await addVehicle(payload);
    }

    await fetchVehicles();

    setIsAddModalOpen(false);
    setEditingVehicle(null);

    setFormData({
      vehicleName: "",
      vehicleNumber: "",
      Location: "",
      category: "SUV",
      Description: "",
      SeatCapacity: "4",
      MusicSystem: "true",
      AC: "true",
      TV: "false",
      StarRating: "5",
      RentPerKLM: "",
      AdvancePayment: "",
      TollCharges: "Extra",
      Features: "",
      Premium: "false",
    });

    setImages([]);
    setExistingImages([]);
  } catch (err) {
    console.error(
      editingVehicle ? "Error updating vehicle:" : "Error adding vehicle:",
      err
    );
  }
};8

  // Filtering Logic
  const filteredVehicles = vehicles.filter((v) => {
  const categoryName = categoryMap[v.CategoryId];

  const matchesCategory =
    selectedCategory === "All" || categoryName === selectedCategory;

  const matchesSearch =
    v.vehicleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.vehicleNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.Location.toLowerCase().includes(searchQuery.toLowerCase());

  return matchesCategory && matchesSearch;
});

  return (
 <div className="flex h-screen bg-[#f3f5f9] overflow-hidden manrope">
    <Sidebar />

    <main className="flex-1 overflow-y-auto p-8">       
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Vehicle Fleet</h1>
          <p className="text-xs text-slate-400 mt-0.5">Manage transport vehicles, rates, and amenities</p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 text-xs transition-all active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" /> Add New Vehicle
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-sky-500 text-white shadow-xs"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search model, number, or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-100/80 border border-slate-200/60 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-700 outline-none focus:bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
          />
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicles.map((v) => (
          <div
            key={v._id}
            onClick={() => setSelectedVehicle(v)}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
src={v.Image?.[0] || "/placeholder.png"}
                  alt={v.vehicleName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                 <div className="absolute top-3 right-3 flex gap-2 z-10">
    <button
   onClick={(e) => {
  e.stopPropagation();

  setEditingVehicle(v);

  // IMPORTANT
  setExistingImages(v.Image || []);

  setFormData({
    vehicleName: v.vehicleName,
    vehicleNumber: v.vehicleNumber,
    Location: v.Location,
    category: v.CategoryId,
    Description: v.Description,
    SeatCapacity: v.SeatCapacity,
    MusicSystem: v.MusicSystem ? "true" : "false",
    AC: v.AC ? "true" : "false",
    TV: v.TV ? "true" : "false",
    StarRating: v.StarRating,
    RentPerKLM: v.RentPerKLM,
    AdvancePayment: v.AdvancePayment,
    TollCharges: v.TollCharges,
    Features: Array.isArray(v.Features)
      ? v.Features.join(", ")
      : v.Features,
    Premium: v.Premium ? "true" : "false",
  });

  setImages([]);
}}
      className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:text-white transition-all"
    >
      <Pencil className="w-4 h-4" />
    </button>

    <button
    onClick={(e) => {
  e.stopPropagation();
  setDeletingVehicle(v);
}}
      className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-600 hover:bg-red-500 hover:text-white transition-all"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  </div>
                
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-xs">
{categoryMap[v.CategoryId] || "General"}
                  </span>
                  {v.Premium && (
                    <span className="bg-amber-500 text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" /> Premium
                    </span>
                  )}
                </div>

                <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-lg">
                  {v.vehicleNumber}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="flex items-center gap-1 text-sky-600 font-medium">
                    <MapPin className="w-3.5 h-3.5" /> {v.Location}
                  </span>
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3 h-3 fill-amber-500" /> {v.StarRating}.0
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {v.vehicleName}
                </h3>
                
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed my-2">
                  {v.Description}
                </p>

                {/* Quick Amenities Chips */}
                <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                    <Users className="w-3.5 h-3.5 text-slate-400" /> {v.SeatCapacity} Seats
                  </span>
                  {v.AC && (
                    <span className="flex items-center gap-1 bg-sky-50 text-sky-700 px-2 py-1 rounded-lg text-[11px] font-medium">
                      <Wind className="w-3 h-3" /> AC
                    </span>
                  )}
                  {v.MusicSystem && (
                    <span className="flex items-center gap-1 bg-indigo-50 text-indigo-700 px-2 py-1 rounded-lg text-[11px] font-medium">
                      <Music className="w-3 h-3" /> Audio
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Price Footer */}
            <div className="p-5 pt-3 border-t border-slate-50 mt-2 flex items-center justify-between text-xs">
              <div>
                <span className="text-[11px] text-slate-400 block">Rate / KM</span>
                <span className="text-base font-bold text-slate-900">
                  ₹{v.RentPerKLM} <span className="text-[10px] font-normal text-slate-400">/ km</span>
                </span>
              </div>
              <span className="text-sky-500 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Details <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================= */}
      {/* 1. VEHICLE DETAIL MODAL (WHEN TOUCHING/CLICKING A VEHICLE) */}
      {/* ========================================================= */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/60 p-6 relative">
            
            <button
              onClick={() => setSelectedVehicle(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-600 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

{/* Banner Image */}
            <div className="h-56 -mx-6 -mt-6 mb-6 overflow-hidden relative">
              <img
src={selectedVehicle.Image?.[0] || "/placeholder.png"}
                alt={selectedVehicle.vehicleName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-white">
                <div className="flex gap-2 mb-1">
                  <span className="bg-sky-500 text-white text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full">
{categoryMap[selectedVehicle.CategoryId            ] || "General"}                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {selectedVehicle.vehicleNumber}
                  </span>
                </div>
                <h2 className="text-2xl font-bold">{selectedVehicle.vehicleName}</h2>
              </div>
            </div>

            {/* Specifications Cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Rate per KM</span>
                <span className="text-lg font-bold text-slate-800">₹{selectedVehicle.RentPerKLM}</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Advance</span>
                <span className="text-lg font-bold text-slate-800">₹{selectedVehicle.AdvancePayment}</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Toll Charges</span>
                <span className="text-sm font-bold text-slate-800 mt-1 block">{selectedVehicle.TollCharges}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Description</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{selectedVehicle.Description}</p>
            </div>

            {/* Amenities Grid */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Amenities & Specs</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
                  <Users className="w-4 h-4 text-sky-500" />
                  <span>{selectedVehicle.SeatCapacity} Seats</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
                  <Wind className="w-4 h-4 text-sky-500" />
                  <span>AC: {selectedVehicle.AC === "true" ? "Yes" : "No"}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
                  <Music className="w-4 h-4 text-sky-500" />
                  <span>Audio: {selectedVehicle.MusicSystem === "true" ? "Yes" : "No"}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
                  <Tv className="w-4 h-4 text-sky-500" />
                  <span>TV: {selectedVehicle.TV  ? "Yes" : "No"}</span>
                </div>
              </div>
            </div>

            {/* Additional Features List */}
        {selectedVehicle.Features && (
  <div>
    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
      Key Features
    </h4>
    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600">
      {selectedVehicle.Features.join(", ")}
    </div>
  </div>
)}

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. ADD VEHICLE FORM MODAL (FORM DATA MATCHING POSTMAN)     */}
      {/* ========================================================= */}
{(isAddModalOpen || editingVehicle) && (        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/60 p-6 relative">
            
            <button
              onClick={() => {
                setIsAddModalOpen(false)
              setEditingVehicle(false)
              }}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <h2 className="text-xl font-bold text-slate-900 mb-1">  {editingVehicle ? "Edit Vehicle" : "Add Vehicle"}
</h2>
            <p className="text-xs text-slate-400 mb-6">Fill in vehicle details matching backend POST keys</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name, Reg Number & Category */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Vehicle Name</label>
                  <input
                    type="text"
                    name="vehicleName"
                    required
                    placeholder="e.g. Suzuki Swift"
                    value={formData.vehicleName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Vehicle Number</label>
                  <input
                    type="text"
                    name="vehicleNumber"
                    required
                    placeholder="e.g. KL 52 A 0707"
                    value={formData.vehicleNumber}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Category</label>
                 <select
  name="category"
  value={formData.category}
  onChange={handleInputChange}
  className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
>
  <option value="">Select Category</option>

  {categories.map((category) => (
    <option key={category._id} value={category._id}>
      {category.categoryName}
    </option>
  ))}
</select>
                </div>
              </div>

              {/* Location, Capacity & Star Rating */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Location</label>
                  <input
                    type="text"
                    name="Location"
                    required
                    placeholder="e.g. Pattambi"
                    value={formData.Location}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Seat Capacity</label>
                  <input
                    type="number"
                    name="SeatCapacity"
                    required
                    placeholder="e.g. 4"
                    value={formData.SeatCapacity}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Star Rating (1-5)</label>
                  <input
                    type="number"
                    name="StarRating"
                    min="1"
                    max="5"
                    value={formData.StarRating}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                  />
                </div>
              </div>

              {/* Rates, Advances & Toll */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Rent Per KLM (₹)</label>
                  <input
                    type="text"
                    name="RentPerKLM"
                    required
                    placeholder="e.g. 50"
                    value={formData.RentPerKLM}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Advance Payment (₹)</label>
                  <input
                    type="text"
                    name="AdvancePayment"
                    required
                    placeholder="e.g. 60"
                    value={formData.AdvancePayment}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Toll Charges</label>
                  <select
                    name="TollCharges"
                    value={formData.TollCharges}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                  >
                    <option value="Extra">Extra</option>
                    <option value="Included">Included</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Description</label>
                <textarea
                  name="Description"
                  rows={2}
                  required
                  placeholder="Good vehicle for off roading..."
                  value={formData.Description}
                  onChange={handleInputChange}
                  className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl p-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                />
              </div>

              {/* Features List Input */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Features</label>
                <input
                  type="text"
                  name="Features"
                  placeholder="e.g. Chilled AC, Touch Screen, Leather Seats"
                  value={formData.Features}
                  onChange={handleInputChange}
                  className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                />
              </div>

              {/* Checkbox Toggles for AC, Music System, TV, Premium */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    name="AC"
                    checked={formData.AC === "true"}
                    onChange={handleInputChange}
                    className="rounded text-sky-500 focus:ring-0"
                  />
                  AC Included
                </label>

                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    name="MusicSystem"
                    checked={formData.MusicSystem === "true"}
                    onChange={handleInputChange}
                    className="rounded text-sky-500 focus:ring-0"
                  />
                  Music System
                </label>

                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    name="TV"
                    checked={formData.TV === "true"}
                    onChange={handleInputChange}
                    className="rounded text-sky-500 focus:ring-0"
                  />
                  TV Screen
                </label>

                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    name="Premium"
                    checked={formData.Premium === "true"}
                    onChange={handleInputChange}
                    className="rounded text-sky-500 focus:ring-0"
                  />
                  Premium Fleet
                </label>
              </div>

              {/* Multi-file Image Upload */}
              {editingVehicle && existingImages.length > 0 && (
  <div className="mb-4">
    <label className="text-xs font-semibold text-slate-700 block mb-2">
      Existing Images
    </label>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {existingImages.map((img, index) => (
        <div key={index} className="relative">
         <img
  src={img}
  alt={`Vehicle ${index + 1}`}
  onClick={() => setPreviewImage(img)}
  className="w-full h-24 object-cover rounded-xl border cursor-pointer hover:opacity-90 transition"
/>

          <button
            type="button"
            onClick={() => removeExistingImage(index)}
            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}
    </div>
  </div>
)}
              <div className="border-t border-slate-100 pt-4">
                <label className="text-xs font-semibold text-slate-700 block mb-1">Vehicle Images</label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors relative cursor-pointer">
                  <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                  <p className="text-xs text-slate-500">Click to upload vehicle photos (multiple allowed)</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
                {images.length > 0 && (
                  <p className="text-[11px] text-emerald-600 font-medium mt-1">
                    {images.length} file(s) selected
                  </p>
                )}
              </div>

              {/* Form Actions */}
              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
onClick={() => {
  setIsAddModalOpen(false);
  setEditingVehicle(null);
}}                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 shadow-md"
                >
  {editingVehicle ? "Update Vehicle" : "Save Vehicle"}
                </button>
              </div>

            </form>
      
          </div>
        </div>
      )}
            {deletingVehicle && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-3xl w-full max-w-md p-6">

      <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center">
        <Trash2 className="w-7 h-7 text-red-600" />
      </div>

      <h2 className="text-xl font-bold text-center mt-4">
        Delete Vehicle?
      </h2>

      <p className="text-sm text-slate-500 text-center mt-2">
        Are you sure you want to delete
        <br />
        <span className="font-semibold text-slate-800">
          {deletingVehicle.vehicleName}
        </span>
        ?
      </p>

      <div className="flex justify-end gap-3 mt-8">
        <button
          onClick={() => setDeletingVehicle(null)}
          className="px-5 py-2 rounded-xl border"
        >
          Cancel
        </button>

        <button
       onClick={async () => {
  try {
    await deleteVehicle(deletingVehicle._id);

    await fetchVehicles();

    setDeletingVehicle(null);
  } catch (err) {
    console.error("Error deleting vehicle:", err);
  }
}}
          className="px-5 py-2 rounded-xl bg-red-600 text-white"
        >
          Delete
        </button>
      </div>

    </div>
  </div>
)}
{previewImage && (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100]"
    onClick={() => setPreviewImage(null)}
  >
    <button
      onClick={() => setPreviewImage(null)}
      className="absolute top-5 right-5 bg-white rounded-full p-2"
    >
      <X className="w-5 h-5 text-black" />
    </button>

    <img
      src={previewImage}
      alt="Preview"
      className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
</main>
    </div>
  );
}