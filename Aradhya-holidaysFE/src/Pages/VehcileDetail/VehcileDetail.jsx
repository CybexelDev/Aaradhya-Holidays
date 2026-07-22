import React from 'react'
import CarDetail from '../../Layouts/VehicleDetail/CarDetail/VehicleDetail'
import RelatedCars from '../../Layouts/VehicleDetail/RelatedCars/RelatedCars'

function VehcileDetail() {
  return (
    <div>
        <CarDetail/>
        <RelatedCars/>
    </div>
  )
}

export default VehcileDetail