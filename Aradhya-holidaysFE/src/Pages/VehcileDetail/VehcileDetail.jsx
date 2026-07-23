import React from 'react'
import CarDetail from '../../Layouts/VehicleDetail/CarDetail/VehicleDetail'
import RelatedCars from '../../Layouts/VehicleDetail/RelatedCars/RelatedCars'
import HeroSection from '../../Layouts/VehicleDetail/Hero/VehicleHero'
import CarCtaSection from '../../Layouts/VehicleDetail/CarCtaSecton/CarCtaSection'

function VehcileDetail() {
  return (
    <div>
        <HeroSection/>
        <CarDetail/>
        <RelatedCars/>
        <CarCtaSection/>
        
    </div>
  )
}

export default VehcileDetail