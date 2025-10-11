import React, { useEffect, useContext, useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Context/AuthContext";
import CarFilters from "../Components/CarFilters";
import axiosInstance from "../services/axiosInstance";
import CarRender from "../Components/CarsRender";
import Footer from "../Components/Footer";

const prefixedCompanies = [
  "BMW",
  "Audi",
  "Bentley",
  "GMC",
  "Jaguar",
  "Mercedes",
  "Ford",
  "Tesla",
  "Nissan",
  "Mitsubishi",
  "Land Rover",
  "Chevrolet",
  "Dodge",
  "Lamborghini",
  "Porsche"
];

const bodyTypes = [
  "All types",
  "Sedan",
  "SUV",
  "Cross Over",
  "Convertible",
  "HatchBack",
  "Sports",
];

const Buy = () => {
  const { setIsLoading } = useContext(AuthContext);
  const carRenderRef = useRef(null); // Ref for CarRender component

  // State management for filters
  const [mileage, setMileage] = useState([]);
  const [yearBuilt, setYearBuilt] = useState([]);
  const [monthlyInstallment, setMonthlyInstallment] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedBodyTypes, setSelectedBodyTypes] = useState([]);
  const [availableNow, setAvailableNow] = useState(false);
  const [selectedVehicleType, setSelectedVehicleType] = useState("");
  const [cars, setCars] = useState([]);
  const [fetchedCompanies, setFetchedCompanies] = useState([]);
  const [vehicleTypes, setVehicleTypes] = useState([]);

  // Fetch companies, vehicle types, and initial cars
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/companies");
        const backendCompanies = response.data || [];
        const filteredCompanies = backendCompanies
          .filter(({ brandName }) => !prefixedCompanies.includes(brandName))
          .map(({ brandName }) => brandName);
        setFetchedCompanies(filteredCompanies);
      } catch (err) {
        console.error("Error fetching companies:", err);
        setFetchedCompanies([]);
      }
    };

    const fetchVehicleTypes = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/fetch-vehicle-types");
        setVehicleTypes(
          Array.isArray(response.data.vehicleTypes)
            ? response.data.vehicleTypes
            : []
        );
      } catch (err) {
        console.error("Error fetching vehicle types:", err);
        setVehicleTypes([]);
      }
    };

    setIsLoading(true);
    Promise.all([fetchCompanies(), fetchVehicleTypes(), fetchAllCars()]).finally(
      () => {
        setIsLoading(false);
      }
    );
  }, [setIsLoading]);

  const fetchAllCars = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/cars/filter");
      setCars(response.data.cars || []);
    } catch (err) {
      setCars([]);
      console.error(
        "Error fetching all cars:",
        err.response?.data || err.message
      );
    }
  };

  const handleMileageChange = (index, value) => {
    const newMileage = [...mileage];
    newMileage[index] = Number.parseInt(value) || 0;
    setMileage(newMileage);
  };

  const handleInstallmentChange = (index, value) => {
    const newInstallment = [...monthlyInstallment];
    newInstallment[index] = Number.parseInt(value) || 0;
    setMonthlyInstallment(newInstallment);
  };

  const handleCompanyChange = (company) => {
    setSelectedCompanies((prev) => {
      const newCompanies = prev.includes(company)
        ? prev.filter((c) => c !== company)
        : [...prev, company];
      if (!newCompanies.includes(company) && selectedVehicleType) {
        setSelectedVehicleType("");
      }
      return newCompanies;
    });
  };

  const handleBodyTypeChange = (bodyType) => {
    setSelectedBodyTypes((prev) =>
      prev.includes(bodyType)
        ? prev.filter((t) => t !== bodyType)
        : [...prev, bodyType]
    );
  };

  const handleAvailabilityChange = (value) => {
    setAvailableNow(value);
  };

  const handleVehicleTypeChange = (vehicleType) => {
    setSelectedVehicleType(vehicleType);
  };

  const handleYearBuiltChange = (index, value) => {
    const newYearBuilt = [...yearBuilt];
    newYearBuilt[index] = Number.parseInt(value) || 0;
    setYearBuilt(newYearBuilt);
  };

  const handleSearch = async (filters = {}) => {
    const { title } = filters;
    const searchParams = {
      mileage: mileage.join(",") || undefined,
      yearBuilt: yearBuilt.join(",") || undefined,
      monthlyInstallment: monthlyInstallment.join(",") || undefined,
      companies: selectedCompanies.join(",") || undefined,
      bodyTypes: selectedBodyTypes.join(",") || undefined,
      availableNow: availableNow.toString(),
      vehicleType: selectedVehicleType || undefined,
      title: title || undefined,
    };

    setIsLoading(true);
    try {
      const response = await axiosInstance.get("/api/v1/cars/filter", {
        params: searchParams,
      });
      setCars(response.data.cars || []);
      // Scroll to CarRender after successful search
      setTimeout(() => {
        if (carRenderRef.current) {
          carRenderRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Small delay to ensure DOM updates
    } catch (err) {
      setCars([]);
      console.error(
        "Error fetching filtered cars:",
        err.response?.data || err.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const resetFilters = () => {
    setMileage([]);
    setYearBuilt([]);
    setMonthlyInstallment([]);
    setSelectedCompanies([]);
    setSelectedBodyTypes([]);
    setAvailableNow(false);
    setSelectedVehicleType("");
    fetchAllCars();
  };

  return (
    <>
      <Navbar page="buy" />
      <div className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex gap-8">
            {/* Filters Sidebar - Hidden on mobile (renders as fixed overlay) */}
            <CarFilters
              mileage={mileage}
              yearBuilt={yearBuilt}
              monthlyInstallment={monthlyInstallment}
              selectedCompanies={selectedCompanies}
              selectedBodyTypes={selectedBodyTypes}
              availableNow={availableNow}
              selectedVehicleType={selectedVehicleType}
              carCompanies={fetchedCompanies}
              prefixedCompanies={prefixedCompanies}
              bodyTypes={bodyTypes}
              vehicleTypes={vehicleTypes}
              onMileageChange={handleMileageChange}
              onInstallmentChange={handleInstallmentChange}
              onCompanyChange={handleCompanyChange}
              onBodyTypeChange={handleBodyTypeChange}
              onAvailabilityChange={handleAvailabilityChange}
              onVehicleTypeChange={handleVehicleTypeChange}
              onSearch={handleSearch}
              onReset={resetFilters}
              onYearBuiltChange={handleYearBuiltChange}
            />

            {/* Cars Grid - Full width on mobile */}
            <div ref={carRenderRef} className="flex-1 w-full md:w-auto">
              <CarRender cars={cars} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Buy;