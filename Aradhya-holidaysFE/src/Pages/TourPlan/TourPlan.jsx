import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TourplanHero from "../../Layouts/TourPlan/Hero/TourplanHero";
import ContactPlanner from "../../Layouts/TourPlan/ContactPlanner/ContactPlanner";
import Destinations from "../../Layouts/TourPlan/Destinations/Destinations";
import Footer from "../../Components/Footer/Footer";

// Captured ONCE when this module first loads — i.e. only true on the
// actual document load, never re-evaluated during SPA navigation.
const navEntry = performance.getEntriesByType("navigation")[0];
const wasHardReload = navEntry?.type === "reload";
const initialPath = window.location.pathname;
const initialSearch = window.location.search;

export default function TourPlan() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(
    !(wasHardReload && initialPath === "/tour-plan" && initialSearch)
  );

  useEffect(() => {
    if (wasHardReload && initialPath === "/tour-plan" && initialSearch) {
      navigate("/tour-plan", { replace: true });
      setReady(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty deps — check runs exactly once, on true mount

  if (!ready) return null;

  return (
    <>
      <TourplanHero />
      <Destinations />
      <ContactPlanner />
      <Footer />
    </>
  );
}