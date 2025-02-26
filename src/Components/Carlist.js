import React, { useState, useEffect, useContext } from "react";
import axiosInstance from "../services/axiosInstance";
import Cars from "./Cars";
import { AuthContext } from "../Context/AuthContext";

export default function Carlist() {
  const [selectedList, setSelectedList] = useState("sale");
  const [featuredCars, setFeaturedCars] = useState([]);
  const { setIsLoading } = useContext(AuthContext); // Get setIsLoading from AuthContext

  // Fetch featured cars when the component mounts
  useEffect(() => {
    const fetchFeaturedCars = async () => {
      setIsLoading(true); // Set loading state via AuthContext
      try {
        const response = await axiosInstance.get("/api/v1/cars/featured", {
          params: { featured: "yes" },
        });
        if (response.status === 200) {
          setFeaturedCars(response.data || []);
        }
      } catch (err) {
        console.error("Error fetching featured cars:", err);
      } finally {
        setIsLoading(false); // Reset loading state
      }
    };

    fetchFeaturedCars();
  }, [setIsLoading]); // Add setIsLoading to dependency array

  // Filter cars based on selectedList
  const filteredCars = featuredCars.filter((car) => {
    if (selectedList === "sale") {
      return car.featured === "yes";
    } else if (selectedList === "testdrive") {
      return car.testDrive === "yes";
    }
    return false;
  });

  return (
    <section className="carsForSaleSection">
      <div className="carForSaleHeader">
        <div className="mainSec">
          <h2 className="carsForSaleHeading">Latest Cars for Sale</h2>
          <p className="carForSaleSubHeading">
            Lorem Ipsum is simply dummy text
          </p>
        </div>
        <div className="secButtons">
          <button
            onClick={() => setSelectedList("sale")}
            className={`carlistSelectedButton ${
              selectedList === "sale" ? "active" : ""
            }`}
          >
            For Sale
          </button>
          <button
            onClick={() => setSelectedList("testdrive")}
            className={`carlistSelectedButton ${
              selectedList === "testdrive" ? "active" : ""
            }`}
          >
            For Test Drive
          </button>
        </div>
      </div>
      <Cars cars={filteredCars} />
    </section>
  );
}
