import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"; // To get the ID from URL params
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CarGallery from "../Components/CarGallery";
import axiosInstance from "../services/axiosInstance";
import { AuthContext } from "../Context/AuthContext";
export default function Car() {
  const [carData, setCarData] = useState(null);

  const { setIsLoading } = useContext(AuthContext);

  // Get the ID from URL params
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Reset when ID changes

  // Fetch car data from the backend
  useEffect(() => {
    const fetchCarData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(`/api/v1/car/${id}`);
        setCarData(response.data); // Assuming the response contains the car data
      } catch (err) {
        console.error("Error fetching car data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarData();
  }, [id, setIsLoading]); // Re-fetch when the ID changes

  return (
    <>
      <Navbar page="buy" />
      <CarGallery carData={carData} /> {/* Pass carData as a prop */}
      <Footer />
    </>
  );
}
