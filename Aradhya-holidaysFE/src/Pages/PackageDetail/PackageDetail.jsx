import React from 'react'
import Details from '../../Layouts/PackageDetail/Details/Details'
import PackageDetailHeader from '../../Layouts/PackageDetail/Header/TourDetailHeader'
import DiscoverMore from '../../Layouts/PackageDetail/DiscoverMoreSection/DiscoverMoreSection'
import Footer from '../../Components/Footer/Footer'

function PackageDetail() {
  return (
    <div>
        <PackageDetailHeader/>
            <Details />
        <DiscoverMore/>
        <Footer />
    </div>
  )
}

export default PackageDetail