import React, { useState } from "react";
import { User, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { adminLogin } from "../../../Api/adminApi";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png"; 
export default function AdminLoginLayout() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
const [formData, setFormData] = useState({
  email: "",
  password: "",
});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await adminLogin(formData);

    localStorage.setItem("adminToken", res.token);
    localStorage.setItem("admin", JSON.stringify(res.admin));

    navigate("/dashboard");
  } catch (err) {
    alert(err.response?.data?.message || "Login Failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900 manrope">
      {/* Background Image with Sky/Clouds Aesthetic */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-xs scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        {/* Soft Overlays to match the soft blue glow */}
        <div className="absolute inset-0 bg-sky-200/30 backdrop-blur-sm" />
      </div>

      {/* Glassmorphic Arc / Ambient Light Accent */}
      <div className="absolute w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none -translate-y-12" />

      {/* Main Login Card */}
      <div className="relative w-full max-w-sm mx-4 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] border border-white/60 text-slate-800 transition-all">
        
        {/* Top Floating Icon */}
     

        {/* Title & Subtitle */}
       <div className="text-center mb-6">
  <img
    src={logo}
    alt="Aaradhya Holidays"
    className="w-48 h-auto mx-auto object-contain"
  />
  <p className="text-xs text-slate-500 mt-3">
    Admin Portal Management
  </p>
</div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Username Input */}
          <div className="relative flex items-center ">
            <div className="absolute left-3.5 text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
             name="email"
type="email"
value={formData.email}
placeholder="Email Address"
              onChange={handleChange}
              className="w-full bg-slate-100/80 border border-slate-200/60 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]"
            />
          </div>

          {/* Password Input */}
          <div className="relative flex items-center">
            <div className="absolute left-3.5 text-slate-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full bg-slate-100/80 border border-slate-200/60 rounded-xl py-3 pl-10 pr-10 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>

        

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl shadow-lg shadow-slate-900/20 text-sm transition-all active:scale-[0.98] mt-2"
          >
  {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Subtle Footer inside Card */}
        <div className="mt-8 text-center border-t border-slate-200/50 pt-4">
          <p className="text-[11px] text-slate-400">
            © 2026 Aaradhya Holidays. Authorized Personnel Only.
          </p>
        </div>
      </div>
    </div>
  );
}