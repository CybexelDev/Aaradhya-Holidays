import React from 'react'
import Hero from '../../Layouts/Home/Hero/Hero'
import ExploreDestinations from '../../Layouts/Home/Destinations/ExploreDestinations'
import WhyTravel from '../../Layouts/Home/WhyTravel/WhyTravel'
import Contact from '../../Layouts/Home/Contact/Contact'

function Home() {
  return (
    <div>
        <Hero />
        <ExploreDestinations />
        <WhyTravel/>
        <Contact />
    </div>
  )
}

export default Home