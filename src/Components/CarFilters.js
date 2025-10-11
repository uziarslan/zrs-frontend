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
  const [searchTitle, setSearchTitle] = useState("");

  const filtersWrapperRef = useRef(null);

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
    setIsContainerOpen((prev) => !prev);
  };

  const toggleFilter = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleSearch = () => {
    onSearch({ title: searchTitle.trim() });
    // Close filters on mobile after search
    if (isMobile) {
      setIsContainerOpen(false);
    }
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleReset = () => {
    setSearchTitle("");
    onReset();
  };

  const filteredVehicleTypes = Array.isArray(vehicleTypes)
    ? selectedCompanies.length === 0
      ? vehicleTypes
      : vehicleTypes.filter((vt) =>
        selectedCompanies.includes(vt.manufacturer.brandName)
      )
    : [];

  return (
    <>
      {/* Mobile Filter Button */}
      {isMobile && !isContainerOpen && (
        <button
          onClick={toggleContainer}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1100] flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full shadow-2xl hover:bg-primary-dark transition-all duration-300 font-semibold text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters
        </button>
      )}

      {/* Overlay for mobile */}
      {isMobile && isContainerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[1100]"
          onClick={toggleContainer}
        />
      )}

      {/* Compact Filters Sidebar */}
      <div
        ref={filtersWrapperRef}
        className={`transition-all duration-300 ${isMobile
          ? `fixed top-0 right-0 h-full w-full bg-white z-[1200] transform ${isContainerOpen ? 'translate-x-0' : 'translate-x-full'
          }`
          : 'w-full max-w-[280px]'
          }`}
      >
        <div className={`bg-white ${isMobile ? 'h-full flex flex-col' : 'rounded-2xl shadow-lg border border-gray-100 sticky top-28'} p-5`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-primary-dark">Filters</h2>
            <div className="flex items-center gap-2">
              <button onClick={handleReset} className="text-xs text-gray-500 hover:text-primary transition-colors font-medium">
                Reset All
              </button>
              {isMobile && (
                <button
                  onClick={toggleContainer}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close filters"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Search Input */}
          <div className="relative mb-5">
            <input
              type="text"
              value={searchTitle}
              placeholder="Search cars..."
              onChange={handleSearchChange}
              onKeyPress={handleSearchKeyPress}
              className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className={`space-y-4 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40 ${isMobile ? 'flex-1' : 'max-h-[calc(100vh-280px)]'}`}>
            {/* Company Filter */}
            <div className="border-b border-gray-100 pb-4">
              <button
                className="w-full flex items-center justify-between mb-2.5"
                onClick={() => toggleFilter("company")}
              >
                <span className="text-xs font-bold text-gray-700">Company</span>
                <svg className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isOpen.company ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`space-y-2 overflow-hidden transition-all duration-300 ${isOpen.company ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {/* Prefixed Companies Checkboxes */}
                <div className="space-y-1.5 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                  {prefixedCompanies.map((company) => (
                    <label key={company} className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={selectedCompanies.includes(company)}
                          onChange={() => onCompanyChange(company)}
                          className="peer w-3.5 h-3.5 rounded border-2 border-gray-300 checked:bg-primary checked:border-primary focus:ring-0 transition-all cursor-pointer appearance-none"
                        />
                        <svg className="absolute top-0 left-0 w-3.5 h-3.5 text-white pointer-events-none hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-600 group-hover:text-primary transition-colors">
                        {company}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Other Companies Dropdown */}
                <select
                  value=""
                  onChange={(e) => {
                    if (e.target.value) {
                      onCompanyChange(e.target.value);
                      e.target.value = "";
                    }
                  }}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all appearance-none bg-white cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23295860'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.5rem center',
                    backgroundSize: '1rem'
                  }}
                >
                  <option value="">+ More Companies</option>
                  {carCompanies.map((company) => (
                    <option key={company} value={company}>
                      {company}
                    </option>
                  ))}
                </select>

                {/* Selected Companies Badges */}
                {selectedCompanies.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-gray-100">
                    {selectedCompanies.map((company) => (
                      <span
                        key={company}
                        className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px] font-medium"
                      >
                        {company.length > 10 ? company.substring(0, 10) + '...' : company}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            onCompanyChange(company);
                          }}
                          className="hover:text-red-600 transition-colors text-sm"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Vehicle Type Filter */}
            <div className="border-b border-gray-100 pb-4">
              <button
                className="w-full flex items-center justify-between mb-2.5"
                onClick={() => toggleFilter("model")}
              >
                <span className="text-xs font-bold text-gray-700">Model</span>
                <svg className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isOpen.model ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen.model ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                <select
                  value={selectedVehicleType}
                  onChange={(e) => onVehicleTypeChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all appearance-none bg-white cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23295860'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.5rem center',
                    backgroundSize: '1rem'
                  }}
                >
                  <option value="">All Models</option>
                  {filteredVehicleTypes.map((vt) => (
                    <option key={vt._id} value={vt._id}>
                      {vt.modelName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mileage Filter */}
            <div className="border-b border-gray-100 pb-4">
              <button
                className="w-full flex items-center justify-between mb-2.5"
                onClick={() => toggleFilter("mileage")}
              >
                <span className="text-xs font-bold text-gray-700">Mileage (km)</span>
                <svg className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isOpen.mileage ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen.mileage ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={mileage[1] || 0}
                  onChange={(e) => onMileageChange(1, e.target.value)}
                  className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer mb-2.5 accent-primary"
                />
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    value={mileage[0] || ""}
                    onChange={(e) => onMileageChange(0, e.target.value)}
                    placeholder="0"
                    className="w-[48%] px-1.5 py-1.5 border border-gray-200 rounded text-[10px] focus:border-primary focus:outline-none"
                  />
                  <span className="text-gray-300 text-[10px]">-</span>
                  <input
                    type="number"
                    value={mileage[1] || ""}
                    onChange={(e) => onMileageChange(1, e.target.value)}
                    placeholder="5000"
                    className="w-[48%] px-1.5 py-1.5 border border-gray-200 rounded text-[10px] focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Year Built Filter */}
            <div className="border-b border-gray-100 pb-4">
              <button
                className="w-full flex items-center justify-between mb-2.5"
                onClick={() => toggleFilter("yearBuilt")}
              >
                <span className="text-xs font-bold text-gray-700">Year</span>
                <svg className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isOpen.yearBuilt ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen.yearBuilt ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    value={yearBuilt[0] || ""}
                    onChange={(e) => onYearBuiltChange(0, e.target.value)}
                    placeholder="2010"
                    className="w-[48%] px-1.5 py-1.5 border border-gray-200 rounded text-[10px] focus:border-primary focus:outline-none"
                  />
                  <span className="text-gray-300 text-[10px]">-</span>
                  <input
                    type="number"
                    value={yearBuilt[1] || ""}
                    onChange={(e) => onYearBuiltChange(1, e.target.value)}
                    placeholder="2024"
                    className="w-[48%] px-1.5 py-1.5 border border-gray-200 rounded text-[10px] focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Body Type Filter */}
            <div className="border-b border-gray-100 pb-4">
              <button
                className="w-full flex items-center justify-between mb-2.5"
                onClick={() => toggleFilter("bodyType")}
              >
                <span className="text-xs font-bold text-gray-700">Body Type</span>
                <svg className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isOpen.bodyType ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen.bodyType ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-1.5 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                  {bodyTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={selectedBodyTypes.includes(type)}
                          onChange={() => onBodyTypeChange(type)}
                          className="peer w-3.5 h-3.5 rounded border-2 border-gray-300 checked:bg-primary checked:border-primary focus:ring-0 transition-all cursor-pointer appearance-none"
                        />
                        <svg className="absolute top-0 left-0 w-3.5 h-3.5 text-white pointer-events-none hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-600 group-hover:text-primary transition-colors">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Installment Filter */}
            <div className="border-b border-gray-100 pb-4">
              <button
                className="w-full flex items-center justify-between mb-2.5"
                onClick={() => toggleFilter("installment")}
              >
                <span className="text-xs font-bold text-gray-700">Installment</span>
                <svg className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isOpen.installment ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen.installment ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={monthlyInstallment[1] || 0}
                  onChange={(e) => onInstallmentChange(1, e.target.value)}
                  className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer mb-2.5 accent-primary"
                />
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    value={monthlyInstallment[0] || ""}
                    onChange={(e) => onInstallmentChange(0, e.target.value)}
                    placeholder="0"
                    className="w-[48%] px-1.5 py-1.5 border border-gray-200 rounded text-[10px] focus:border-primary focus:outline-none"
                  />
                  <span className="text-gray-300 text-[10px]">-</span>
                  <input
                    type="number"
                    value={monthlyInstallment[1] || ""}
                    onChange={(e) => onInstallmentChange(1, e.target.value)}
                    placeholder="5000"
                    className="w-[48%] px-1.5 py-1.5 border border-gray-200 rounded text-[10px] focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Availability Filter */}
            <div className="pb-2">
              <button
                className="w-full flex items-center justify-between mb-2.5"
                onClick={() => toggleFilter("availability")}
              >
                <span className="text-xs font-bold text-gray-700">Availability</span>
                <svg className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isOpen.availability ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen.availability ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={availableNow}
                      onChange={(e) => onAvailabilityChange(e.target.checked)}
                      className="peer w-3.5 h-3.5 rounded border-2 border-gray-300 checked:bg-primary checked:border-primary focus:ring-0 transition-all cursor-pointer appearance-none"
                    />
                    <svg className="absolute top-0 left-0 w-3.5 h-3.5 text-white pointer-events-none hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-primary transition-colors">
                    Available Now
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className={isMobile ? 'pt-4 border-t border-gray-200' : 'mt-5'}>
            <button
              onClick={handleSearch}
              className="w-full flex items-center justify-center gap-1.5 bg-primary text-white px-4 py-2.5 rounded-lg font-semibold text-xs hover:bg-primary-dark transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search Cars
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarFilters;
