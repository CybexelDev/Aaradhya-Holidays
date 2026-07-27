import React, { useState } from "react";
import { useEffect } from "react";
import {addCategory, getCategory,deleteCategory,updateCategory } from "../../../Api/adminApi";
import {
  Plus,
  Search,
  Tag,
  Edit2,
  Trash2,
  X,
  Car,
  Check,
  AlertCircle,
  Layers,
  Loader2
} from "lucide-react";
import Sidebar from "../../Components/Sidebar/Sidebar";
// Initial Category Data
const INITIAL_CATEGORIES = [
  { _id: "1", name: "Hatchback", vehicleCount: 8 },
  { _id: "2", name: "Sedan", vehicleCount: 12 },
  { _id: "3", name: "SUV", vehicleCount: 15 },
  { _id: "4", name: "Tempo Traveller", vehicleCount: 6 },
  { _id: "5", name: "Luxury", vehicleCount: 4 },
  { _id: "6", name: "Bus", vehicleCount: 3 },
];

export default function VehicleCategoryManagement() {
const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null); // Category object being edited
  const [loading, setLoading] = useState(true);
  const [deletingCategory, setDeletingCategory] = useState(null); // Category object being deleted

  // Form State
  const [categoryName, setCategoryName] = useState("");
useEffect(() => {
  fetchCategories();
}, []);

const fetchCategories = async () => {
  try {
    setLoading(true);

    const data = await getCategory();
    setCategories(data.categoryData);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};
  // Handle Create Category
 const handleAddCategory = async (e) => {
  e.preventDefault();

  if (!categoryName.trim()) return;

  try {
    await addCategory(categoryName);

    // Refresh categories after adding
    await fetchCategories();

    setCategoryName("");
    setIsAddModalOpen(false);
  } catch (err) {
    console.error("Error adding category:", err);
  }
};

  // Handle Edit Category
 const handleEditCategory = async (e) => {
  e.preventDefault();

  if (!categoryName.trim() || !editingCategory) return;

  try {
    await updateCategory(editingCategory._id, categoryName);

    // Refresh categories
    await fetchCategories();

    setEditingCategory(null);
    setCategoryName("");
  } catch (err) {
    console.error("Error updating category:", err);
  }
};

  // Handle Delete Category
 const handleDeleteCategory = async () => {
  if (!deletingCategory) return;

  try {
    await deleteCategory(deletingCategory._id);

    // Refresh category list
    await fetchCategories();

    setDeletingCategory(null);
  } catch (err) {
    console.error("Error deleting category:", err);
  }
};

  // Filtered List
 const filteredCategories = categories.filter((cat) =>
  cat.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
  <div className="flex h-screen bg-[#f3f5f9] overflow-hidden manrope">
    <Sidebar />

    <main className="flex-1 overflow-y-auto p-8">            
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Vehicle Categories</h1>
          <p className="text-xs text-slate-400 mt-0.5">Manage transport fleet categories</p>
        </div>

        <button
          onClick={() => {
            setCategoryName("");
            setIsAddModalOpen(true);
          }}
          className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 text-xs transition-all active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" /> Add Category
        </button>
      </div>

      {/* Search & Stats Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span className="bg-sky-50 text-sky-600 px-3 py-1 rounded-lg font-bold">
            {categories.length} Total
          </span>
          <span>Categories Configured</span>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-100/80 border border-slate-200/60 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-700 outline-none focus:bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
          />
        </div>
      </div>

      {/* Categories Grid */}
      {loading ? (
  <div className="flex items-center justify-center py-20">
    <Loader2 className="w-10 h-10 text-sky-500 animate-spin" />
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredCategories.map((category) => (
          <div
            key={category._id}
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center font-bold text-lg group-hover:bg-sky-500 group-hover:text-white transition-colors">
                <Car className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900">
{category.categoryName}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
  Vehicle Category
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => {
                  setEditingCategory(category);
setCategoryName(category.categoryName);
                }}
                className="p-2 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
                title="Edit Category"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeletingCategory(category)}
                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                title="Delete Category"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
)}

      {/* ========================================================= */}
      {/* 1. ADD CATEGORY MODAL                                      */}
      {/* ========================================================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-white/60 relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-sky-50 text-sky-600 rounded-2xl">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Add Vehicle Category</h2>
                <p className="text-xs text-slate-400">Create a new category for fleet classification</p>
              </div>
            </div>

            <form onSubmit={handleAddCategory} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Category Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SUV, Luxury, Sedan"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 outline-none focus:bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
                />
              </div>

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
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. EDIT CATEGORY MODAL                                     */}
      {/* ========================================================= */}
      {editingCategory && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-white/60 relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setEditingCategory(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-amber-50 text-amber-600 rounded-2xl">
                <Edit2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Edit Category</h2>
                <p className="text-xs text-slate-400">Update category name</p>
              </div>
            </div>

            <form onSubmit={handleEditCategory} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Category Name
                </label>
                <input
                  type="text"
                  required
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 outline-none focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingCategory(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-500 text-white text-xs font-semibold hover:bg-amber-600 shadow-md"
                >
                  Update Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. DELETE CONFIRMATION MODAL                              */}
      {/* ========================================================= */}
      {deletingCategory && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-white/60 relative text-center animate-in fade-in zoom-in-95 duration-200">
            
            <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>

            <h3 className="text-base font-bold text-slate-900 mb-1">
              Delete "{deletingCategory.categoryName}"??
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Are you sure you want to remove this category? Vehicles linked to this category may need re-assigning.
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setDeletingCategory(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 w-full"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteCategory}
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