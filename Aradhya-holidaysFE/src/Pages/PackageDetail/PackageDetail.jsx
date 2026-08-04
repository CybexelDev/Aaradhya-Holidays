import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getPackageDetails,
  getPackages,
} from "../../Api/userapi";
import { Loader2 } from "lucide-react";
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
  return (
    <section className="w-full  flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-[#3700ff] animate-spin" />
        <p className="text-[#5B6B79] text-sm font-medium">
          Loading Package...
        </p>
      </div>
    </section>
  );
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