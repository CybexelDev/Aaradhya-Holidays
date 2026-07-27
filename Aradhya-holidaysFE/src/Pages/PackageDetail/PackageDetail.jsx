import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getPackageDetails,
  getPackages,
} from "../../Api/userapi";

import Details from "../../Layouts/PackageDetail/Details/Details";
import PackageDetailHeader from "../../Layouts/PackageDetail/Header/TourDetailHeader";
import DiscoverMore from "../../Layouts/PackageDetail/DiscoverMoreSection/DiscoverMoreSection";
import Footer from "../../Components/Footer/Footer";

function PackageDetail() {
  const { id } = useParams();

  const [packageData, setPackageData] = useState(null);
  const [discoverPackages, setDiscoverPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [currentPackage, allPackages] = await Promise.all([
          getPackageDetails(id),
          getPackages(),
        ]);

        setPackageData(currentPackage);

        const filtered = allPackages
          .filter((item) => item._id !== currentPackage._id)
          .slice(0, 3);

        setDiscoverPackages(filtered);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  return (
    <>
      <PackageDetailHeader packageData={packageData} />
      <Details packageData={packageData} />
      <DiscoverMore packages={discoverPackages} />
      <Footer />
    </>
  );
}

export default PackageDetail;