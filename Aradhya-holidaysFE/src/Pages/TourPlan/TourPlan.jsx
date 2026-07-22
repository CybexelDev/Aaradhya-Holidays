import React from 'react'
import TourplanHero from '../../Layouts/TourPlan/Hero/TourplanHero'
import ContactPlanner from '../../Layouts/TourPlan/ContactPlanner/ContactPlanner'
import Destinations from '../../Layouts/TourPlan/Destinations/Destinations'
import Footer from '../../Components/Footer/Footer'

function TourPlan() {
  return (
    <div>
        <TourplanHero />
        <Destinations />
        <ContactPlanner />
        <Footer/>
    </div>
  )
}

export default TourPlan