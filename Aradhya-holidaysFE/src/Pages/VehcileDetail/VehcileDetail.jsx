import React from 'react'
import CarDetail from '../../Layouts/VehicleDetail/CarDetail/VehicleDetail'
import RelatedCars from '../../Layouts/VehicleDetail/RelatedCars/RelatedCars'
import HeroSection from '../../Layouts/VehicleDetail/Hero/VehicleHero'
import Footer from '../../Components/Footer/Footer'

function VehcileDetail() {
  return (
    <div>
      <HeroSection/>
        <CarDetail/>
        <RelatedCars/>
        <Footer />
    </div>
  )
}

export default VehcileDetail