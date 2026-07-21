import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Pages/Home/Home'
import AboutHero from './Layouts/About/Hero/AboutHero'
import About from './Pages/About/About'
import TourPlan from './Pages/TourPlan/TourPlan'

function App() {

  return (
    <>

    <div>
      {/* <Home /> */}
      {/* <About/> */}
      <TourPlan />
    </div>
     
    </>
  )
}

export default App
