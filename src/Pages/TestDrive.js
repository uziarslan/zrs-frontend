import React, { useEffect, useContext, useState } from "react";
import axiosInstance from "../services/axiosInstance"; // Adjust path as needed

import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import Cars from "../Components/Cars";
import { AuthContext } from "../Context/AuthContext";

export default function TestDrive() {
  const { setIsLoading } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get("/api/v1/cars/test-drive", {
          params: { testDrive: "true" },
        });
        setCars(response.data || []);
      } catch (err) {
        console.error("Error fetching cars:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars();
  }, [setIsLoading]);

  return (
    <>
      <Navbar />
      <SecondaryHero
        bg={secondaryHero2}
        page="Test Drive"
        mainHeading={
          <>
            Your Dream Car Awaits— <span>Experience It Firsthand!</span>
          </>
        }
      />
      <section className="testDrivePageSec max-width">
        <h2 className="testDriveMainHeading">Test Drive</h2>
        <Cars cars={cars} />
      </section>
      <Footer />
    </>
  );
}
