import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance"; // Adjust path as needed
import { AuthContext } from "../Context/AuthContext";

const FinanceForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    manufacturer: "",
    vehicleType: "", // Changed from model
    fullName: "",
    mobileNumber: "",
    email: "",
    salary: "",
    hasExistingLoans: "", // "yes" or "no"
  });

  // State for fetched data
  const [manufacturers, setManufacturers] = useState([]);
  const [vehicleTypes, setVehicleTypes] = useState([]);

  const { setIsLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  // Fetch manufacturers and vehicle types on mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch manufacturers
        const manufacturerResponse = await axiosInstance.get(
          "/api/v1/fetch-logos"
        );
        setManufacturers(manufacturerResponse.data.logos || []);

        // Fetch vehicle types
        const vehicleTypeResponse = await axiosInstance.get(
          "/api/v1/fetch-vehicle-types"
        );
        setVehicleTypes(vehicleTypeResponse.data.vehicleTypes || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setIsLoading]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Reset vehicleType when manufacturer changes
      ...(name === "manufacturer" ? { vehicleType: "" } : {}),
    }));
  };

  // Handle radio button changes
  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, hasExistingLoans: e.target.id }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { status } = await axiosInstance.post(
        "/api/v1/finance-eligibility",
        formData
      );
      if (status === 201) navigate("/finance-confirm");
    } catch (err) {
      console.error("Error submitting finance form:", err);
    } finally {
      setIsLoading(false);
      setFormData({
        manufacturer: "",
        vehicleType: "",
        fullName: "",
        mobileNumber: "",
        email: "",
        salary: "",
        hasExistingLoans: "",
      });
    }
  };

  // Filter vehicle types based on selected manufacturer
  const filteredVehicleTypes = formData.manufacturer
    ? vehicleTypes.filter(
        (vt) => vt.manufacturer.brandName === formData.manufacturer
      )
    : vehicleTypes;

  return (
    <div className="sellcontainer">
      <h1 className="title">FINANCE ELIGIBILITY</h1>
      <form className="form" onSubmit={handleSubmit}>
        <p className="subtitle">Fill All Detail About You & Your Car</p>
        <div className="formInputWrapper">
          <div className="formGrid">
            {/* Manufacturer */}
            <div className="formGroup">
              <label htmlFor="manufacturer">
                Any Make<span>*</span>
              </label>
              <select
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select Manufacturer
                </option>
                {manufacturers.map((m) => (
                  <option key={m._id} value={m.brandName}>
                    {m.brandName}
                  </option>
                ))}
              </select>
            </div>

            {/* Vehicle Type */}
            <div className="formGroup">
              <label htmlFor="vehicleType">
                Vehicle Type<span>*</span>
              </label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                {filteredVehicleTypes.map((vt) => (
                  <option key={vt._id} value={vt.modelName}>
                    {vt.modelName}
                  </option>
                ))}
              </select>
            </div>

            {/* Full Name */}
            <div className="formGroup">
              <label htmlFor="fullName">
                Full Name<span>*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your Full Name"
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="formGroup">
              <label htmlFor="mobileNumber">
                Mobile Number<span>*</span>
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Enter Your Mobile Number"
                required
              />
            </div>

            {/* Email Address */}
            <div className="formGroup">
              <label htmlFor="email">
                Email Address<span>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Your Email"
                required
              />
            </div>

            {/* Salary */}
            <div className="formGroup">
              <label htmlFor="salary">
                Current Salary<span>*</span>
              </label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="Enter Your Salary"
                required
              />
            </div>
          </div>

          {/* Existing Loans */}
          <div style={{ width: "auto" }} className="formGroup">
            <label htmlFor="description">
              Do you have any Existing Loans (including cash advance from
              employer)<span>*</span>
            </label>
            <div className="radioButtonRow">
              <div className="singleRadio">
                <input
                  name="loan"
                  id="yes"
                  type="radio"
                  checked={formData.hasExistingLoans === "yes"}
                  onChange={handleRadioChange}
                  required
                />
                <label htmlFor="yes">Yes!! I have</label>
              </div>
              <div className="singleRadio">
                <input
                  name="loan"
                  id="no"
                  type="radio"
                  checked={formData.hasExistingLoans === "no"}
                  onChange={handleRadioChange}
                />
                <label htmlFor="no">I don’t have</label>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="formActions">
            <Link to="/">
              <button type="button" className="cancelButton">
                Cancel
              </button>
            </Link>
            <button type="submit" className="saveButton">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FinanceForm;
