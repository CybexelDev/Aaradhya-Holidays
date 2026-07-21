import React from 'react'
import AboutHero from '../../Layouts/About/Hero/AboutHero'
import CorePhilosophySection from '../../Layouts/About/PhilosophySection/PhilosophySection'
import VisionSection from '../../Layouts/About/VisionSection/VisionSection'

function About() {
  return (
    <div>
        <AboutHero />
        <CorePhilosophySection/>
        <VisionSection/>
    </div>
  )
}

export default About