import "./App.css";
import TourPlan from "./Pages/TourPlan/TourPlan";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import PackageDetail from "./Pages/PackageDetail/PackageDetail";
import Services from "./Pages/Services/Services";
import VehcileDetail from "./Pages/VehcileDetail/VehcileDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import AdminLogin from "./Admin/Pages/AdminLogin";
import AdminDashboard from "./Admin/Pages/AdminDashboard";
import AdminPackage from "./Admin/Pages/AdminPackage";
import AdminVehcile from "./Admin/Pages/AdminVehcile";
import AdminCategory from "./Admin/Pages/AdminCategory";
import AdminTestimonials from "./Admin/Pages/AdminTestimonials";
import AdminEnquiry from "./Admin/Pages/AdminEnquiry";
import AdminProtectedRoute from "./Admin/Layouts/AdminProtectedRoute/AdminProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/tourDetail" element={<PackageDetail/>}/> */}
        <Route path="/service" element={<Services />} />
        {/* <Route path="/vehciledetail" element={<VehcileDetail/>}/> */}
        <Route path="/vehicle/:id" element={<VehcileDetail />} />
        <Route path="/package/:id" element={<PackageDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tour-plan" element={<TourPlan />} />

        {/* admin path */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin-package"
          element={
            <AdminProtectedRoute>
              <AdminPackage />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin-vehicle"
          element={
            <AdminProtectedRoute>
              <AdminVehcile />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin-category"
          element={
            <AdminProtectedRoute>
              <AdminCategory />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin-testimonials"
          element={
            <AdminProtectedRoute>
              <AdminTestimonials />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin-enquiry"
          element={
            <AdminProtectedRoute>
              <AdminEnquiry />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
