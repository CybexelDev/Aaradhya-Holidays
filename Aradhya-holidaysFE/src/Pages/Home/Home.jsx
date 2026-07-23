import React from 'react'
import Hero from '../../Layouts/Home/Hero/Hero'
import ExploreDestinations from '../../Layouts/Home/Destinations/ExploreDestinations'
import WhyTravel from '../../Layouts/Home/WhyTravel/WhyTravel'
import Contact from '../../Layouts/Home/Contact/Contact'
import Trending from '../../Layouts/Home/Trending/Trending'
import Premiumfleet from '../../Layouts/Home/Premium/PremiumFleet'
import CTASection from '../../Components/PromotionalSecton/PromotionalSection'
import Footer from '../../Components/Footer/Footer'
import TestimonialSection from '../../Layouts/Home/Testimonials/Testimonials'

function Home() {
  return (
    <div>
        <Hero />
                <Trending/>
        <Premiumfleet/>

        <ExploreDestinations />
        <WhyTravel/>
        <TestimonialSection/>
        <CTASection/>
                <Contact />

        <Footer/>
    </div>
  )
}

export default Home