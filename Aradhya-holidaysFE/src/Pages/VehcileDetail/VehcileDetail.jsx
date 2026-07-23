import React from 'react'
import CarDetail from '../../Layouts/VehicleDetail/CarDetail/VehicleDetail'
import RelatedCars from '../../Layouts/VehicleDetail/RelatedCars/RelatedCars'
import HeroSection from '../../Layouts/VehicleDetail/Hero/VehicleHero'
import Footer from '../../Components/Footer/Footer'
import CarCtaSection from '../../Layouts/VehicleDetail/CarCtaSecton/CarCtaSection'

function VehcileDetail() {
  return (
    <div>
      <HeroSection/>
        <CarDetail/>
        <RelatedCars/>
            <CarCtaSection/>
        <Footer />


    </div>
  )
}

export default VehcileDetail