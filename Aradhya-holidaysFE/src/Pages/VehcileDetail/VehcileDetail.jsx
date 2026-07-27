import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVehicleDetails,getVehicles } from "../../Api/userapi";

import HeroSection from "../../Layouts/VehicleDetail/Hero/VehicleHero";
import CarDetail from "../../Layouts/VehicleDetail/CarDetail/VehicleDetail";
import RelatedCars from "../../Layouts/VehicleDetail/RelatedCars/RelatedCars";
import CarCtaSection from "../../Layouts/VehicleDetail/CarCtaSecton/CarCtaSection";
import Footer from "../../Components/Footer/Footer";

function VehcileDetail() {
  const { id } = useParams();

const [vehicle, setVehicle] = useState(null);
const [loading, setLoading] = useState(true);
const [relatedCars, setRelatedCars] = useState([]);
const [allCars, setAllCars] = useState([]);

useEffect(() => {
  const fetchVehicle = async () => {
    try {
      const [vehicleData, vehicles] = await Promise.all([
        getVehicleDetails(id),
        getVehicles(),
      ]);

      setVehicle(vehicleData);
      setAllCars(vehicles);

      const related = vehicles.filter(
        (item) =>
          item._id !== vehicleData._id &&
          item.CategoryId === vehicleData.CategoryId
      );

      setRelatedCars(related);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  fetchVehicle();
}, [id]);

  if (loading) return <div className="py-20 text-center">Loading...</div>;

  return (
    <>
      <HeroSection vehicle={vehicle} />
      <CarDetail vehicle={vehicle} />
<RelatedCars
  cars={relatedCars}
  allCars={allCars}
  currentId={id}
/>
      <CarCtaSection />
      <Footer />
    </>
  );
}

export default VehcileDetail;