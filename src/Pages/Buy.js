import React, { useEffect, useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import secondaryHero3 from "../Assets/images/secondaryHero3.jpg";
import { AuthContext } from "../Context/AuthContext";
import CarFilters from "../Components/CarFilters";
import Cars from "../Components/Cars";
import axiosInstance from "../services/axiosInstance";

const Buy = () => {
  const { setIsLoading } = useContext(AuthContext);

  // State management for filters
  const [mileage, setMileage] = useState([]);
  const [yearBuilt, setYearBuilt] = useState([]);
  const [monthlyInstallment, setMonthlyInstallment] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedBodyTypes, setSelectedBodyTypes] = useState([]);
  const [availableNow, setAvailableNow] = useState(false);
  const [selectedVehicleType, setSelectedVehicleType] = useState(""); // Renamed from selectedModel
  const [cars, setCars] = useState([]);
  const [fetchedCompanies, setFetchedCompanies] = useState([]);
  const [vehicleTypes, setVehicleTypes] = useState([]);

  const prefixedCompanies = ["BMW", "Audi", "Bentley", "GMC", "Jaguar"];

  const bodyTypes = [
    "All types",
    "Sedan",
    "SUV",
    "Cross Over",
    "Convertible",
    "HatchBack",
    "Sports",
  ];

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
        const response = await axiosInstance.get("/api/v1/fetch-vehicle-types"); // Adjusted endpoint
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
    Promise.all([
      fetchCompanies(),
      fetchVehicleTypes(),
      fetchAllCars(),
    ]).finally(() => {
      setIsLoading(false);
    });
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
    setSelectedVehicleType(vehicleType); // Renamed from handleModelChange
  };

  const handleYearBuiltChange = (index, value) => {
    const newYearBuilt = [...yearBuilt];
    newYearBuilt[index] = Number.parseInt(value) || 0;
    setYearBuilt(newYearBuilt);
  };

  const handleSearch = async () => {
    const filters = {
      mileage: mileage.join(","),
      yearBuilt: yearBuilt.join(","),
      monthlyInstallment: monthlyInstallment.join(","),
      companies: selectedCompanies.join(","),
      bodyTypes: selectedBodyTypes.join(","),
      availableNow: availableNow.toString(),
      vehicleType: selectedVehicleType, // Changed from model to vehicleType
    };

    setIsLoading(true);
    try {
      const response = await axiosInstance.get("/api/v1/cars/filter", {
        params: filters,
      });
      setCars(response.data.cars || []);
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
    setSelectedVehicleType(""); // Updated
    fetchAllCars();
  };

  return (
    <>
      <Navbar page="buy" />
      <div className="filteredSearchSection">
        <CarFilters
          mileage={mileage}
          yearBuilt={yearBuilt}
          monthlyInstallment={monthlyInstallment}
          selectedCompanies={selectedCompanies}
          selectedBodyTypes={selectedBodyTypes}
          availableNow={availableNow}
          selectedVehicleType={selectedVehicleType} // Updated prop name
          carCompanies={fetchedCompanies}
          prefixedCompanies={prefixedCompanies}
          bodyTypes={bodyTypes}
          vehicleTypes={vehicleTypes}
          onMileageChange={handleMileageChange}
          onInstallmentChange={handleInstallmentChange}
          onCompanyChange={handleCompanyChange}
          onBodyTypeChange={handleBodyTypeChange}
          onAvailabilityChange={handleAvailabilityChange}
          onVehicleTypeChange={handleVehicleTypeChange} // Updated handler name
          onSearch={handleSearch}
          onReset={resetFilters}
          onYearBuiltChange={handleYearBuiltChange}
        />
        <Cars cars={cars} />
      </div>
    </>
  );
};

export default Buy;
