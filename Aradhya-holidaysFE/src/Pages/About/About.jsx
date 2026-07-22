import React from 'react'
import AboutHero from '../../Layouts/About/Hero/AboutHero'
import CorePhilosophySection from '../../Layouts/About/PhilosophySection/PhilosophySection'
import VisionSection from '../../Layouts/About/VisionSection/VisionSection'
import ArchitectureSection from '../../Layouts/About/ArchitectureSection/ArchitectureSection'
import Footer from '../../Components/Footer/Footer'

function About() {
  return (
    <div>
        <AboutHero />
                <VisionSection/>
        <CorePhilosophySection/>
        <ArchitectureSection/>
        <Footer/>
    </div>
  )
}

export default About