import './App.css'
import TourPlan from './Pages/TourPlan/TourPlan'
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About"
import PackageDetail from "./Pages/PackageDetail/PackageDetail";
import Services from "./Pages/Services/Services";
import VehcileDetail from "./Pages/VehcileDetail/VehcileDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact/Contact';
import AdminLogin from './Admin/Pages/AdminLogin';
import AdminDashboard from './Admin/Pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/tourDetail" element={<PackageDetail/>}/>
         <Route path="/service" element={<Services/>}/>
         <Route path="/vehciledetail" element={<VehcileDetail/>}/>
         <Route path="/contact" element={<Contact/>}/>

         <Route path='/tour-plan' element={<TourPlan/>}/>



         {/* admin path */}
         <Route path='/admin-login' element={<AdminLogin/>}/>
         <Route path='/dashboard' element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;