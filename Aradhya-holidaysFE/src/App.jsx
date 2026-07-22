import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Pages/Home/Home'
import AboutHero from './Layouts/About/Hero/AboutHero'
import About from './Pages/About/About'
import TourPlan from './Pages/TourPlan/TourPlan'
import PackageDetail from './Pages/PackageDetail/PackageDetail'
import VehicleDetail from './Pages/VehicleDetail/VehicleDetail'

function App() {

  return (
    <>

    <div>
      {/* <Home /> */}
      {/* <TourPlan /> */}
      {/* <PackageDetail /> */}
      {/* <About/> */}
      <VehicleDetail />
    </div>
     
    </>
  )
}

export default App
