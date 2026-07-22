import React from 'react'
import Details from '../../Layouts/PackageDetail/Details/Details'
import PackageDetailHeader from '../../Layouts/PackageDetail/Header/TourDetailHeader'
import DiscoverMore from '../../Layouts/PackageDetail/DiscoverMoreSection/DiscoverMoreSection'

function PackageDetail() {
  return (
    <div>
        <PackageDetailHeader/>
            <Details />
        <DiscoverMore/>
    </div>
  )
}

export default PackageDetail