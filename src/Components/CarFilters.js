import React, { useState, useEffect, useRef } from "react";

const CarFilters = ({
  mileage,
  yearBuilt,
  monthlyInstallment,
  selectedCompanies,
  selectedBodyTypes,
  availableNow,
  selectedVehicleType,
  carCompanies,
  prefixedCompanies,
  bodyTypes,
  vehicleTypes,
  onMileageChange,
  onInstallmentChange,
  onCompanyChange,
  onBodyTypeChange,
  onAvailabilityChange,
  onVehicleTypeChange,
  onSearch,
  onReset,
  onYearBuiltChange,
}) => {
  const [isContainerOpen, setIsContainerOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return true;
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState({
    company: true,
    model: false,
    mileage: false,
    yearBuilt: false,
    bodyType: false,
    installment: false,
    availability: false,
  });

  const filtersWrapperRef = useRef(null); // Ref for the filters container

  useEffect(() => {
    const handleResize = () => {
      const isMobileWidth = window.innerWidth < 768;
      setIsMobile(isMobileWidth);
      setIsContainerOpen(!isMobileWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleContainer = () => {
    setIsContainerOpen((prev) => {
      const willOpen = !prev;
      // Scroll to filters only when opening on mobile
      if (willOpen && isMobile) {
        setTimeout(() => {
          filtersWrapperRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100); // Small timeout to ensure DOM update
      }
      return willOpen;
    });
  };

  const toggleFilter = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const allCompanies = [...prefixedCompanies, ...carCompanies];

  const filteredVehicleTypes = Array.isArray(vehicleTypes)
    ? selectedCompanies.length === 0
      ? vehicleTypes
      : vehicleTypes.filter((vt) =>
        selectedCompanies.includes(vt.manufacturer.brandName)
      )
    : [];

  return (
    <>
      {isMobile && (
        <div
          className="filter-icon"
          onClick={toggleContainer}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleContainer();
            }
          }}
        >
          Filters <i className="bx bx-filter-alt"></i>
        </div>
      )}
      <div
        className={`filters-wrapper ${isContainerOpen ? "open" : "closed"}`}
        ref={filtersWrapperRef} // Attach the ref here
      >
        <div className="filters-container">
          <h2 className="filters-title">Find your dream car</h2>

          {/* Company Filter */}
          <div className="filter-section">
            <h3
              className="filter-title"
              onClick={isMobile ? () => toggleFilter("company") : undefined}
              aria-expanded={isMobile ? isOpen.company : true}
            >
              Company
              {isMobile && (
                <span className="collapse-toggle">
                  {isOpen.company ? " ▼" : " ▶"}
                </span>
              )}
            </h3>
            <div
              className={`filter-content ${isMobile ? (isOpen.company ? "open" : "closed") : "open"
                }`}
            >
              <div className="checkbox-group">
                {allCompanies.map((company) => (
                  <label key={company} className="checkbox-label">
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      name="company"
                      value={company}
                      checked={selectedCompanies.includes(company)}
                      onChange={() => onCompanyChange(company)}
                    />
                    {company}
                  </label>
                ))}
              </div>
              {selectedCompanies.length > 0 && (
                <div className="selected-companies">
                  {selectedCompanies.map((company) => (
                    <div key={company} className="selected-company-item">
                      {company}
                      <button
                        className="remove-button"
                        onClick={() => onCompanyChange(company)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <select
                value=""
                onChange={(e) => {
                  if (e.target.value) {
                    onCompanyChange(e.target.value);
                    e.target.value = "";
                  }
                }}
                className="company-select"
              >
                <option value="">Company</option>
                {carCompanies.map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Vehicle Type Filter */}
          <div className="filter-section">
            <h3
              className="filter-title"
              onClick={isMobile ? () => toggleFilter("model") : undefined}
              aria-expanded={isMobile ? isOpen.model : true}
            >
              Vehicle Types
              {isMobile && (
                <span className="collapse-toggle">
                  {isOpen.model ? " ▼" : " ▶"}
                </span>
              )}
            </h3>
            <div
              className={`filter-content ${isMobile ? (isOpen.model ? "open" : "closed") : "open"
                }`}
            >
              <select
                className="model-select"
                value={selectedVehicleType}
                onChange={(e) => onVehicleTypeChange(e.target.value)}
              >
                <option value="">Select vehicle type</option>
                {Array.isArray(filteredVehicleTypes) &&
                  filteredVehicleTypes.map((vt) => (
                    <option key={vt._id} value={vt._id}>
                      {vt.modelName}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Mileage Filter */}
          <div className="filter-section">
            <h3
              className="filter-title"
              onClick={isMobile ? () => toggleFilter("mileage") : undefined}
              aria-expanded={isMobile ? isOpen.mileage : true}
            >
              Mileage
              {isMobile && (
                <span className="collapse-toggle">
                  {isOpen.mileage ? " ▼" : " ▶"}
                </span>
              )}
            </h3>
            <div
              className={`filter-content ${isMobile ? (isOpen.mileage ? "open" : "closed") : "open"
                }`}
            >
              <div className="slider-container">
                <input
                  type="range"
                  className="slider"
                  min="0"
                  max="5000"
                  value={mileage[1] || 0}
                  onChange={(e) => onMileageChange(1, e.target.value)}
                />
              </div>
              <div className="range-inputs">
                <input
                  type="number"
                  className="range-input"
                  value={mileage[0] || ""}
                  onChange={(e) => onMileageChange(0, e.target.value)}
                  placeholder="1000"
                />
                <span className="range-separator"></span>
                <input
                  type="number"
                  className="range-input"
                  value={mileage[1] || ""}
                  onChange={(e) => onMileageChange(1, e.target.value)}
                  placeholder="2000"
                />
              </div>
            </div>
          </div>

          {/* Year Built Filter */}
          <div className="filter-section">
            <h3
              className="filter-title"
              onClick={isMobile ? () => toggleFilter("yearBuilt") : undefined}
              aria-expanded={isMobile ? isOpen.yearBuilt : true}
            >
              Year Built
              {isMobile && (
                <span className="collapse-toggle">
                  {isOpen.yearBuilt ? " ▼" : " ▶"}
                </span>
              )}
            </h3>
            <div
              className={`filter-content ${isMobile ? (isOpen.yearBuilt ? "open" : "closed") : "open"
                }`}
            >
              <div className="range-inputs">
                <input
                  type="number"
                  className="range-input"
                  value={yearBuilt[0] || ""}
                  onChange={(e) => onYearBuiltChange(0, e.target.value)}
                  placeholder="2019"
                />
                <span className="range-separator"></span>
                <input
                  type="number"
                  className="range-input"
                  value={yearBuilt[1] || ""}
                  onChange={(e) => onYearBuiltChange(1, e.target.value)}
                  placeholder="2022"
                />
              </div>
            </div>
          </div>

          {/* Body Type Filter */}
          <div className="filter-section">
            <h3
              className="filter-title"
              onClick={isMobile ? () => toggleFilter("bodyType") : undefined}
              aria-expanded={isMobile ? isOpen.bodyType : true}
            >
              Body Type
              {isMobile && (
                <span className="collapse-toggle">
                  {isOpen.bodyType ? " ▼" : " ▶"}
                </span>
              )}
            </h3>
            <div
              className={`filter-content ${isMobile ? (isOpen.bodyType ? "open" : "closed") : "open"
                }`}
            >
              <div className="checkbox-group">
                {bodyTypes.map((type) => (
                  <label key={type} className="checkbox-label">
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      name="bodyType"
                      value={type}
                      checked={selectedBodyTypes.includes(type)}
                      onChange={() => onBodyTypeChange(type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Monthly Installment Filter */}
          <div className="filter-section">
            <h3
              className="filter-title"
              onClick={isMobile ? () => toggleFilter("installment") : undefined}
              aria-expanded={isMobile ? isOpen.installment : true}
            >
              Max Monthly Installment
              {isMobile && (
                <span className="collapse-toggle">
                  {isOpen.installment ? " ▼" : " ▶"}
                </span>
              )}
            </h3>
            <div
              className={`filter-content ${isMobile ? (isOpen.installment ? "open" : "closed") : "open"
                }`}
            >
              <div className="slider-container">
                <input
                  type="range"
                  className="slider"
                  min="0"
                  max="5000"
                  value={monthlyInstallment[1] || 0}
                  onChange={(e) => onInstallmentChange(1, e.target.value)}
                />
              </div>
              <div className="range-inputs">
                <input
                  type="number"
                  className="range-input"
                  value={monthlyInstallment[0] || ""}
                  onChange={(e) => onInstallmentChange(0, e.target.value)}
                  placeholder="AED 100"
                />
                <span className="range-separator"></span>
                <input
                  type="number"
                  className="range-input"
                  value={monthlyInstallment[1] || ""}
                  onChange={(e) => onInstallmentChange(1, e.target.value)}
                  placeholder="AED 2000"
                />
              </div>
            </div>
          </div>

          {/* Availability Filter */}
          <div className="filter-section">
            <h3
              className="filter-title"
              onClick={isMobile ? () => toggleFilter("availability") : undefined}
              aria-expanded={isMobile ? isOpen.availability : true}
            >
              Availability
              {isMobile && (
                <span className="collapse-toggle">
                  {isOpen.availability ? " ▼" : " ▶"}
                </span>
              )}
            </h3>
            <div
              className={`filter-content ${isMobile ? (isOpen.availability ? "open" : "closed") : "open"
                }`}
            >
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  name="availability"
                  checked={availableNow}
                  onChange={(e) => onAvailabilityChange(e.target.checked)}
                />
                Available Now
              </label>
            </div>
          </div>

          {/* Search and Footer Buttons */}
          <button className="search-button" onClick={onSearch}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Search
          </button>

          <div className="filters-footer">
            <button className="footer-button" onClick={onReset}>
              ↺ Reset all filters
            </button>
            <button className="footer-button">★ Save Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarFilters;