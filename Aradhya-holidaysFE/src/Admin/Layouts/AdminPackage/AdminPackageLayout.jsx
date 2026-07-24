import React, { useState,useEffect } from "react";
import {
  Plus,
  Search,
  Pencil,
  MapPin,
  Clock,
  Trash2,
  Eye,
  X,
  Upload,
  Calendar,
  Layers,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  getPackage,
  addPackage,
  updatePackage,
  deletePackage,
} from "../../../Api/adminApi";
// Sample Initial Data matching your backend structure
const INITIAL_PACKAGES = [
  {
    _id: "1",
    packageName: "Ooty Tour",
    subTitle: "Best Holiday Package",
    Location: "Ooty",
    Duration: "5 Days / 4 Nights",
    category: "Honeymoon",
    Description:
      "Traverse the granite cathedrals of the south in absolute luxury and tranquility.",
    images: [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=600&auto=format&fit=crop&q=60",
    ],
    Days: [
      { day: 1, title: "Arrival", description: "Arrival and check-in at resort." },
      { day: 2, title: "Sightseeing", description: "Visit Ooty Lake and Botanical Garden." },
    ],
  },
  {
    _id: "2",
    packageName: "Goa Beach Gateway",
    subTitle: "Ultimate Coastal Escape",
    Location: "Goa",
    Duration: "4 Days / 3 Nights",
    category: "Adventure",
    Description: "Experience vibrant nightlife, golden beaches, and rich Portuguese heritage.",
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&auto=format&fit=crop&q=60",
    ],
    Days: [
      { day: 1, title: "Arrival", description: "Arrival at Goa Airport and hotel transfer." },
      { day: 2, title: "North Goa Tour", description: "Visit Baga Beach and Fort Aguada." },
    ],
  },
];

const CATEGORIES = ["All", "Honeymoon", "Adventure", "Family", "Corporate", "Custom"];

export default function PackageManagement() {
const [packages, setPackages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [deletingPackage, setDeletingPackage] = useState(null);
  
  // Modals state
  const [selectedPackage, setSelectedPackage] = useState(null); // Detail View Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Add Form Modal
const [editingPackage, setEditingPackage] = useState(null);
const [existingImages, setExistingImages] = useState([]);
const [previewImage, setPreviewImage] = useState(null);

const removeExistingImage = (index) => {
  setExistingImages((prev) => prev.filter((_, i) => i !== index));
};
  // Form State matching Postman key values
  const [formData, setFormData] = useState({
    packageName: "",
    subTitle: "",
    Location: "",
    Duration: "",
    category: "Honeymoon",
    Description: "",
  });
  const [days, setDays] = useState([{ day: 1, title: "", description: "" }]);
  const [images, setImages] = useState([]);

  // Handle Input Changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Dynamic Days Itinerary Add/Remove
  const handleDayChange = (index, field, value) => {
    const updatedDays = [...days];
    updatedDays[index][field] = value;
    setDays(updatedDays);
  };

  const addDayRow = () => {
    setDays([...days, { day: days.length + 1, title: "", description: "" }]);
  };

  const removeDayRow = (index) => {
    const filtered = days.filter((_, i) => i !== index).map((d, i) => ({ ...d, day: i + 1 }));
    setDays(filtered);
  };

  // Handle Image File Selection
 const handleImageChange = (e) => {
  const files = Array.from(e.target.files);

  const totalImages = editingPackage
    ? existingImages.length + files.length
    : files.length;

  if (totalImages < 1) {
    alert("Please select at least 1 image.");
    return;
  }

  if (totalImages > 5) {
    alert("You can upload a maximum of 5 images.");
    e.target.value = "";
    return;
  }

  setImages(files);
};
 const fetchPackages = async () => {
  try {
    const res = await getPackage();

    console.log(res);

    setPackages(res.data);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  fetchPackages();
}, []);

  // Submit Handler sending FormData to backend API
const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = new FormData();

  payload.append("packageName", formData.packageName);
  payload.append("subTitle", formData.subTitle);
  payload.append("Location", formData.Location);
  payload.append("Duration", formData.Duration);
  payload.append("Description", formData.Description);
  payload.append("Days", JSON.stringify(days));

  try {
    if (editingPackage) {
      // Send remaining existing images
      payload.append("oldImages", JSON.stringify(existingImages));

      // Send newly selected images
      images.forEach((img) => {
        payload.append("image", img);
      });

      await updatePackage(editingPackage._id, payload);
    } else {
      // Add Package
      images.forEach((img) => {
        payload.append("image", img);
      });

      await addPackage(payload);
    }

    await fetchPackages();

    setIsAddModalOpen(false);
    setEditingPackage(null);

    setFormData({
      packageName: "",
      subTitle: "",
      Location: "",
      Duration: "",
      category: "Honeymoon",
      Description: "",
    });

    setDays([{ day: 1, title: "", description: "" }]);

    setImages([]);
    setExistingImages([]);
  } catch (err) {
    console.error(
      editingPackage
        ? "Error updating package:"
        : "Error adding package:",
      err
    );
  }
};
  // Filtered packages by category and search term
  const filteredPackages = packages.filter((pkg) => {
    const matchesCategory = selectedCategory === "All" || pkg.category === selectedCategory;
    const matchesSearch = pkg.packageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pkg.Location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
  <div className="flex h-screen bg-[#f3f5f9] overflow-hidden manrope">
    <Sidebar />

    <main className="flex-1 overflow-y-auto p-8">      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tour Packages</h1>
          <p className="text-xs text-slate-400 mt-0.5">Manage and curate holiday packages</p>
        </div>

        <button
onClick={() => {
  setEditingPackage(null);
  setExistingImages([]);
  setImages([]);

  setFormData({
    packageName: "",
    subTitle: "",
    Location: "",
    Duration: "",
    Description: "",
  });

  setDays([{ day: 1, title: "", description: "" }]);

  setIsAddModalOpen(true);
}}          className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 text-xs transition-all active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" /> Add New Package
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
         
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search destination or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-100/80 border border-slate-200/60 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-700 outline-none focus:bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
          />
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg._id}
            onClick={() => setSelectedPackage(pkg)}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={pkg.Image[0]}
                  alt={pkg.packageName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              <div className="absolute top-3 right-3 z-10 flex  gap-2 items-center">
  <button
    onClick={(e) => {
      e.stopPropagation();

      setEditingPackage(pkg);

      setExistingImages(pkg.Image || []);

      setFormData({
        packageName: pkg.packageName,
        subTitle: pkg.subTitle,
        Location: pkg.Location,
        Duration: pkg.Duration,
        Description: pkg.Description,
      });

      setDays(pkg.Days || []);
      setImages([]);
    }}
    className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:text-white transition-all"
  >
    <Pencil className="w-4 h-4" />
  </button>
  <button
  onClick={(e) => {
    e.stopPropagation();
    setDeletingPackage(pkg);
  }}
  className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-600 hover:bg-red-500 hover:text-white transition-all"
>
  <Trash2 className="w-4 h-4" />
</button>
</div>
              </div>

              {/* Package Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-sky-600 font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5" /> {pkg.Location}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {pkg.packageName}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-3">{pkg.subTitle}</p>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {pkg.Description}
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-5 pt-0 border-t border-slate-50 mt-4 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1 font-medium text-slate-600">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> {pkg.Duration}
              </span>
              <span className="text-sky-500 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View Details <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================= */}
      {/* 1. PACKAGE DETAIL MODAL (WHEN TOUCHING/CLICKING A PACKAGE) */}
      {/* ========================================================= */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/60 p-6 relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-600 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Banner Image */}
            <div className="h-56 -mx-6 -mt-6 mb-6 overflow-hidden relative">
              <img
                src={selectedPackage.Image[0]}
                alt={selectedPackage.packageName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-white">
               
                <h2 className="text-2xl font-bold">{selectedPackage.packageName}</h2>
                <p className="text-xs text-slate-200">{selectedPackage.subTitle}</p>
              </div>
            </div>

            {/* Details Meta */}
            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl mb-6 border border-slate-100 text-xs">
              <div>
                <span className="text-slate-400 block mb-0.5">Location</span>
                <span className="font-semibold text-slate-700 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" /> {selectedPackage.Location}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Duration</span>
                <span className="font-semibold text-slate-700 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-500" /> {selectedPackage.Duration}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-800 mb-2">Description</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{selectedPackage.Description}</p>
            </div>

            {/* Day-Wise Itinerary */}
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-3">Itinerary Plan</h4>
              <div className="space-y-3">
                {selectedPackage.Days?.map((d, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/70 p-3.5 rounded-xl shadow-2xs">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-sky-100 text-sky-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                        Day {d.day}
                      </span>
                      <h5 className="text-xs font-bold text-slate-800">{d.title}</h5>
                    </div>
                    <p className="text-xs text-slate-500 pl-1">{d.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. ADD PACKAGE FORM MODAL (FORM DATA MATCHING POSTMAN)     */}
      {/* ========================================================= */}
{(isAddModalOpen || editingPackage) && (        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/60 p-6 relative">
            
            <button
            onClick={() => {
  setIsAddModalOpen(false);
  setEditingPackage(null);
}}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <h2 className="text-xl font-bold text-slate-900 mb-1">{editingPackage ? "Edit Package" : "Add New Package"}</h2>
            <p className="text-xs text-slate-400 mb-6">Fill in details matching the API FormData structure</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Package Name & Subtitle */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Package Name</label>
                  <input
                    type="text"
                    name="packageName"
                    required
                    placeholder="e.g. Ooty Tour"
                    value={formData.packageName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Sub Title</label>
                  <input
                    type="text"
                    name="subTitle"
                    required
                    placeholder="e.g. Best Holiday Package"
                    value={formData.subTitle}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                  />
                </div>
              </div>

              {/* Location, Duration & Category */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Location</label>
                  <input
                    type="text"
                    name="Location"
                    required
                    placeholder="e.g. Ooty"
                    value={formData.Location}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Duration</label>
                  <input
                    type="text"
                    name="Duration"
                    required
                    placeholder="e.g. 5 Days / 4 Nights"
                    value={formData.Duration}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                  />
                </div>
             
              </div>

              {/* Description */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Description</label>
                <textarea
                  name="Description"
                  rows={3}
                  required
                  placeholder="Enter package description..."
                  value={formData.Description}
                  onChange={handleInputChange}
                  className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl p-3 text-xs outline-none focus:bg-white focus:border-sky-400"
                />
              </div>

              {/* Dynamic Days Section */}
              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-800">Itinerary Days</label>
                  <button
                    type="button"
                    onClick={addDayRow}
                    className="text-xs text-sky-600 font-semibold flex items-center gap-1 hover:underline"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Day
                  </button>
                </div>

                <div className="space-y-3">
                  {days.map((d, index) => (
                    <div key={index} className="flex gap-2 items-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="text-xs font-bold text-slate-500 pt-2 shrink-0">
                        Day {d.day}
                      </span>
                      <input
                        type="text"
                        placeholder="Day Title (e.g. Arrival)"
                        value={d.title}
                        onChange={(e) => handleDayChange(index, "title", e.target.value)}
                        className="w-1/3 bg-white border border-slate-200 rounded-lg py-1.5 px-2.5 text-xs outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Description"
                        value={d.description}
                        onChange={(e) => handleDayChange(index, "description", e.target.value)}
                        className="flex-1 bg-white border border-slate-200 rounded-lg py-1.5 px-2.5 text-xs outline-none"
                      />
                      {days.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeDayRow(index)}
                          className="text-rose-500 hover:text-rose-700 p-1.5"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Multi-file Image Upload */}
              {editingPackage && existingImages.length > 0 && (
  <div className="mb-4">
    <label className="text-xs font-semibold text-slate-700 block mb-2">
      Existing Images
    </label>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {existingImages.map((img, index) => (
        <div key={index} className="relative">
          <img
            src={img}
            onClick={() => setPreviewImage(img)}
            className="w-full h-24 object-cover rounded-xl border cursor-pointer"
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
                <label className="text-xs font-semibold text-slate-700 block mb-1">Package Images</label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors relative cursor-pointer">
                  <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                  <p className="text-xs text-slate-500">Click to upload files (multiple allowed)</p>
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

              {/* Form Buttons */}
              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() =>{ {
                    setIsAddModalOpen(false)
                  setEditingPackage(false)
                  }}}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 shadow-md"
                >
{editingPackage ? "Update Package" : "Save Package"}                </button>
              </div>

            </form>
          </div>
        </div>
      )}
      {deletingPackage && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-3xl w-full max-w-md p-6">

      <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center">
        <Trash2 className="w-7 h-7 text-red-600" />
      </div>

      <h2 className="text-xl font-bold text-center mt-4">
        Delete Package?
      </h2>

      <p className="text-sm text-slate-500 text-center mt-2">
        Are you sure you want to delete
        <br />
        <span className="font-semibold text-slate-800">
          {deletingPackage.packageName}
        </span>
        ?
      </p>

      <div className="flex justify-end gap-3 mt-8">
        <button
          onClick={() => setDeletingPackage(null)}
          className="px-5 py-2 rounded-xl border"
        >
          Cancel
        </button>

        <button
          onClick={async () => {
            try {
              await deletePackage(deletingPackage._id);

              await fetchPackages();

              setDeletingPackage(null);
            } catch (err) {
              console.error("Error deleting package:", err);
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
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]"
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
      className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
</main>
    </div>
  );
}