import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import redirect from "../Assets/icons/redirect.svg";
import mileage from "../Assets/icons/mileage.svg";
import color from "../Assets/icons/color.svg";
import calender from "../Assets/icons/calender.svg";
import arrowLeft from "../Assets/icons/arrow-left.svg";
import arrowRight from "../Assets/icons/arrow-right.svg";
import { AuthContext } from "../Context/AuthContext";

export default function Cars({ cars }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const {
    addCarToFavorites,
    removeCarFromFavorites,
    isCarFavorite
  } = useContext(AuthContext);

  const totalItems = Array.isArray(cars) ? cars.length : 0;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCars = Array.isArray(cars)
    ? cars.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  useEffect(() => {
    setCurrentPage(1);
  }, [cars]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0);
    }
  };

  const handleFavoriteToggle = (car) => {
    if (isCarFavorite(car._id)) {
      removeCarFromFavorites(car._id);
    } else {
      addCarToFavorites(car);
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pagination = [];

    pagination.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-base transition-all duration-300 ${currentPage === 1
          ? 'bg-primary text-white shadow-xl scale-110'
          : 'bg-white text-gray-600 hover:bg-primary/10 shadow-md'
          }`}
      >
        1
      </button>
    );

    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    if (startPage > 2) {
      pagination.push(<span key="start-ellipsis" className="text-gray-400 font-bold px-2">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      pagination.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-base transition-all duration-300 ${currentPage === i
            ? 'bg-primary text-white shadow-xl scale-110'
            : 'bg-white text-gray-600 hover:bg-primary/10 shadow-md'
            }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages - 1) {
      pagination.push(<span key="end-ellipsis" className="text-gray-400 font-bold px-2">...</span>);
    }

    if (totalPages > 1) {
      pagination.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-base transition-all duration-300 ${currentPage === totalPages
            ? 'bg-primary text-white shadow-xl scale-110'
            : 'bg-white text-gray-600 hover:bg-primary/10 shadow-md'
            }`}
        >
          {totalPages}
        </button>
      );
    }

    return (
      <div className="flex items-center justify-center gap-2 mt-16">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 ${currentPage === 1
            ? 'bg-gray-100 cursor-not-allowed opacity-50'
            : 'bg-white hover:bg-primary/10'
            }`}
        >
          <img src={arrowLeft} alt="Previous" className="w-5 h-5" />
        </button>

        {pagination}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 ${currentPage === totalPages
            ? 'bg-gray-100 cursor-not-allowed opacity-50'
            : 'bg-white hover:bg-primary/10'
            }`}
        >
          <img src={arrowRight} alt="Next" className="w-5 h-5" />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars && cars.length > 0 ? (
          currentCars.map((car, index) => (
            <Link
              key={car._id}
              to={`/car/${car._id}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 no-underline flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={car.images[0]?.path || ""}
                  alt={car.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Top Badges & Actions */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                  <div className="flex flex-col gap-2">
                    {car.saleStatus !== "sold" ? (
                      <>
                        {car.featured === "yes" && (
                          <div className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                            ⚡ FEATURED
                          </div>
                        )}
                        {car.testDrive === "yes" && (
                          <div className="bg-gold text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                            🚗 TEST DRIVE
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="bg-red-600 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg">
                        SOLD
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                      type="button"
                    >
                      <img src={redirect} alt="View" className="w-4 h-4" />
                    </button>
                    <button
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleFavoriteToggle(car);
                      }}
                    >
                      {isCarFavorite(car._id) ? (
                        <i className='bx bxs-heart' style={{ color: "#ff0000", fontSize: "18px" }}></i>
                      ) : (
                        <i className='bx bx-heart' style={{ color: "#fff", fontSize: "18px" }}></i>
                      )}
                    </button>
                  </div>
                </div>

                {/* Car Details - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  {/* Title & Price */}
                  <div className="mb-3">
                    <h3 className="font-bold text-white mb-2 leading-tight text-base line-clamp-2">
                      {car.manufacturerId?.brandName || "Unknown"}{" "}
                      {car.vehicleTypeId?.modelName || ""}{" "}
                      {car.trimId?.trimName || ""}
                    </h3>

                    <div className="flex items-center gap-2">
                      <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        <span className="text-white font-bold text-base">
                          AED {car.discountedPrice || car.originalPrice}
                        </span>
                      </div>
                      {car.discountedPrice && (
                        <span className="text-white/70 line-through text-xs">
                          AED {car.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Car Specs */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
                      <img className="w-5 h-5 mb-1 brightness-0 invert" src={mileage} alt="Mileage" />
                      <p className="text-white/70 text-[10px] font-medium mb-0">{car.mileage || "N/A"}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
                      <img className="w-5 h-5 mb-1 brightness-0 invert" src={calender} alt="Year" />
                      <p className="text-white/70 text-[10px] font-medium mb-0">{car.year || "N/A"}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
                      <img className="w-4 h-5 mb-1 brightness-0 invert" src={color} alt="Color" />
                      <p className="text-white/70 text-[10px] font-medium mb-0 truncate">{car.exteriorColor || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <div className="text-6xl mb-4">🚗</div>
            <p className="text-2xl font-bold text-gray-400">No cars available</p>
          </div>
        )}
      </div>
      {renderPagination()}
    </>
  );
}
