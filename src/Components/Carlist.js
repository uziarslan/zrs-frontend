import React, { useState, useEffect, useContext } from "react";
import axiosInstance from "../services/axiosInstance";
import Cars from "./Cars";
import { AuthContext } from "../Context/AuthContext";

export default function Carlist() {
  const [selectedList, setSelectedList] = useState("sale");
  const [featuredCars, setFeaturedCars] = useState([]);
  const { setIsLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchFeaturedCars = async () => {
      setIsLoading(true);
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
        setIsLoading(false);
      }
    };

    fetchFeaturedCars();
  }, [setIsLoading]);

  const filteredCars = featuredCars.filter((car) => {
    if (selectedList === "sale") {
      return car.featured === "yes";
    } else if (selectedList === "testdrive") {
      return car.testDrive === "yes";
    }
    return false;
  });

  return (
    <section className="pt-12 md:pt-16 pb-16 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-semibold text-xs mb-4">
            OUR COLLECTION
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
            Explore Latest Arrivals
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the latest models at ZRS, offering the best deals to suit every style and budget
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex bg-gray-100 p-1.5 rounded-full gap-2">
            <button
              onClick={() => setSelectedList("sale")}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${selectedList === "sale"
                ? "bg-primary text-white shadow-lg"
                : "bg-transparent text-gray-600 hover:text-primary"
                }`}
            >
              For Sale
            </button>
            <button
              onClick={() => setSelectedList("testdrive")}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${selectedList === "testdrive"
                ? "bg-primary text-white shadow-lg"
                : "bg-transparent text-gray-600 hover:text-primary"
                }`}
            >
              Test Drive Available
            </button>
          </div>
        </div>

        <Cars cars={filteredCars} />
      </div>
    </section>
  );
}
