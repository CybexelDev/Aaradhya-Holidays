import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPackageDetails } from "../../Api/userapi";

import Details from "../../Layouts/PackageDetail/Details/Details";
import PackageDetailHeader from "../../Layouts/PackageDetail/Header/TourDetailHeader";
import DiscoverMore from "../../Layouts/PackageDetail/DiscoverMoreSection/DiscoverMoreSection";
import Footer from "../../Components/Footer/Footer";

function PackageDetail() {
  const { id } = useParams();

  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const data = await getPackageDetails(id);
        setPackageData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [id]);

  if (loading) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  return (
    <>
      <PackageDetailHeader packageData={packageData} />
      <Details packageData={packageData} />
      <DiscoverMore />
      <Footer />
    </>
  );
}

export default PackageDetail;