import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import { AuthContext } from "../Context/AuthContext";

const FinanceForm = () => {
  const [formData, setFormData] = useState({
    manufacturer: "",
    vehicleType: "",
    fullName: "",
    mobileNumber: "",
    email: "",
    salary: "",
    hasExistingLoans: "",
  });

  const [manufacturers, setManufacturers] = useState([]);
  const [vehicleTypes, setVehicleTypes] = useState([]);

  const { setIsLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const manufacturerResponse = await axiosInstance.get("/api/v1/fetch-logos");
        setManufacturers(manufacturerResponse.data.logos || []);

        const vehicleTypeResponse = await axiosInstance.get("/api/v1/fetch-vehicle-types");
        setVehicleTypes(vehicleTypeResponse.data.vehicleTypes || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setIsLoading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "manufacturer" ? { vehicleType: "" } : {}),
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, hasExistingLoans: e.target.id }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { status } = await axiosInstance.post("/api/v1/finance-eligibility", formData);
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

  const filteredVehicleTypes = formData.manufacturer
    ? vehicleTypes.filter((vt) => vt.manufacturer.brandName === formData.manufacturer)
    : vehicleTypes;

  return (
    <div className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gold/10 text-gold px-4 py-1.5 rounded-full font-semibold text-xs mb-4">
            FINANCE APPLICATION
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Flexible Financing to Suit Your Needs
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our finance team will help you get pre-approved for your dream car
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
          {/* Car Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-primary-dark mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Select Your Car
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {/* Manufacturer */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Manufacturer<span className="text-red-600">*</span>
                </label>
                <select
                  name="manufacturer"
                  value={formData.manufacturer}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors appearance-none bg-white cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23295860'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.25rem'
                  }}
                >
                  <option value="" disabled>Select Manufacturer</option>
                  {manufacturers.map((m) => (
                    <option key={m._id} value={m.brandName}>
                      {m.brandName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Vehicle Type */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Vehicle Type<span className="text-red-600">*</span>
                </label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors appearance-none bg-white cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23295860'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.25rem'
                  }}
                >
                  <option value="" disabled>Select Vehicle Type</option>
                  {filteredVehicleTypes.map((vt) => (
                    <option key={vt._id} value={vt.modelName}>
                      {vt.modelName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-primary-dark mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Your Information
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              {/* Full Name */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Full Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your Full Name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Mobile Number */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Mobile Number<span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Enter Your Mobile Number"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Email Address<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-primary-dark mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Financial Details
            </h3>
            <div className="space-y-5">
              {/* Salary */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Current Salary (AED)<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  placeholder="e.g., 15000"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Existing Loans */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-3">
                  Do you have any Existing Loans?<span className="text-red-600">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex-1 relative cursor-pointer">
                    <input
                      type="radio"
                      name="loan"
                      id="yes"
                      checked={formData.hasExistingLoans === "yes"}
                      onChange={handleRadioChange}
                      required
                      className="peer sr-only"
                    />
                    <div className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium text-center transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary hover:border-gray-300">
                      Yes, I have
                    </div>
                  </label>
                  <label className="flex-1 relative cursor-pointer">
                    <input
                      type="radio"
                      name="loan"
                      id="no"
                      checked={formData.hasExistingLoans === "no"}
                      onChange={handleRadioChange}
                      className="peer sr-only"
                    />
                    <div className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium text-center transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary hover:border-gray-300">
                      No, I don't have
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-gold/10 border-l-4 border-gold rounded-xl p-5 mb-8">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="text-sm font-bold text-gold mb-1">Finance Pre-Approval</h4>
                <p className="text-xs text-gray-700">
                  Submitting this form does not affect your credit score. We'll review your information and get back to you within 24 hours with financing options.
                </p>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Link
              to="/"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold text-sm hover:bg-primary/5 transition-all duration-300 text-center no-underline"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-lg"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FinanceForm;
