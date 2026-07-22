import './App.css'
import TourPlan from './Pages/TourPlan/TourPlan'
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About"
import PackageDetail from "./Pages/PackageDetail/PackageDetail";
import Services from "./Pages/Services/Services";
import VehcileDetail from "./Pages/VehcileDetail/VehcileDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/tourDetail" element={<PackageDetail/>}/>
         <Route path="/service" element={<Services/>}/>
         <Route path="/vehciledetail" element={<VehcileDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;