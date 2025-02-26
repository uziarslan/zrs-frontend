import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import redirect from "../Assets/icons/redirect.svg";
import heart from "../Assets/icons/heart.svg";
import mileage from "../Assets/icons/mileage.svg";
import color from "../Assets/icons/color.svg";
import calender from "../Assets/icons/calender.svg";
import arrowLeft from "../Assets/icons/arrow-left.svg";
import arrowRight from "../Assets/icons/arrow-right.svg";

export default function Cars({ cars }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate pagination details
  const totalItems = Array.isArray(cars) ? cars.length : 0;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCars = Array.isArray(cars)
    ? cars.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  // Reset to page 1 when the cars prop changes (e.g., filtering in Carlist)
  useEffect(() => {
    setCurrentPage(1);
  }, [cars]);

  // Handle pagination button clicks and scroll
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      // Scroll to carCardHolder after the page updates
      setTimeout(() => {
        const carCardHolder = document.querySelector(".carCardHolder");
        if (carCardHolder) {
          carCardHolder.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 0);
    }
  };

  // Render pagination controls
  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pagination = [];
    const maxVisiblePages = 5;

    pagination.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={currentPage === 1 ? "active" : ""}
        aria-label={`Page 1`}
      >
        1
      </button>
    );

    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);

    if (endPage - startPage < maxVisiblePages - 3) {
      if (startPage > 2) {
        startPage = Math.max(
          2,
          startPage - (maxVisiblePages - 3 - (endPage - startPage))
        );
      }
      if (endPage < totalPages - 1) {
        endPage = Math.min(
          totalPages - 1,
          endPage + (maxVisiblePages - 3 - (endPage - startPage))
        );
      }
    }

    if (startPage > 2) {
      pagination.push(<span key="start-ellipsis">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      pagination.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? "active" : ""}
          aria-label={`Page ${i}`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages - 1) {
      pagination.push(<span key="end-ellipsis">...</span>);
    }

    if (totalPages > 1) {
      pagination.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={currentPage === totalPages ? "active" : ""}
          aria-label={`Page ${totalPages}`}
        >
          {totalPages}
        </button>
      );
    }

    return (
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`pagination-arrow ${currentPage === 1 ? "disabled" : ""}`}
          aria-label="Previous page"
        >
          <img src={arrowLeft} alt="Previous page" />
        </button>
        {pagination}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`pagination-arrow ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          aria-label="Next page"
        >
          <img src={arrowRight} alt="Next page" />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="carCardHolder">
        {cars && cars.length > 0 ? (
          currentCars.map((car) => (
            <Link
              style={{ backgroundImage: `url(${car.images[0]?.path || ""})` }}
              className="cardBody"
              key={car._id}
              to={`/car/${car._id}`}
            >
              <div className="cardHeader">
                <div className="badgeContainerWrapper">
                  {car.featured === "yes" && (
                    <div className="badgeContainer featured">
                      <p>FEATURED</p>
                    </div>
                  )}
                  {car.testDrive === "yes" && (
                    <div className="badgeContainer test">
                      <p>TEST DRIVE</p>
                    </div>
                  )}
                </div>
                <div className="carVerticalButtons">
                  <button className="cardctaButton" type="button">
                    <img src={redirect} alt="Redirect button" />
                  </button>
                  <button className="cardctaButton" type="button">
                    <img src={heart} alt="Like button" />
                  </button>
                </div>
              </div>
              <div className="cardDetailsContainer">
                <div className="carDesHeader">
                  <h3 className="carTitle">
                    {car.manufacturerId?.brandName || "Unknown Manufacturer"}{" "}
                    {car.vehicleTypeId?.modelName || "Unknown Model"}{" "}
                    {car.trimId?.trimName || "Unknown Trim"}
                    {car.title ? ` - ${car.title}` : ""}
                  </h3>
                  <div className="priceContainer">
                    <div className="finalPriceContainer">
                      <p className="finalPrice">
                        AED {car.discountedPrice || car.originalPrice}
                      </p>
                      {car.discountedPrice && (
                        <span>AED {car.originalPrice}</span>
                      )}
                    </div>
                    <p className="carInstPrice">
                      AED {Math.round(car.originalPrice / 12)}/MONTH
                    </p>
                  </div>
                </div>
                <div className="carDesLowerInfo">
                  <div className="singleInfoBlock">
                    <img
                      className="mileageIcon"
                      src={mileage}
                      alt="Mileage Icon"
                    />
                    <p className="singleInfoTitle">Mileage</p>
                    <p className="singleInfoValue">{car.mileage || "N/A"}</p>
                  </div>
                  <div className="singleInfoBlock">
                    <img
                      className="calendarIcon"
                      src={calender}
                      alt="Calendar Icon"
                    />
                    <p className="singleInfoTitle">Year</p>
                    <p className="singleInfoValue">{car.year || "N/A"}</p>
                  </div>
                  <div className="singleInfoBlock">
                    <img className="colorIcon" src={color} alt="Color Icon" />
                    <p className="singleInfoTitle">Exterior Color</p>
                    <p className="singleInfoValue">
                      {car.exteriorColor || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No cars available</p>
        )}
      </div>
      {renderPagination()}
    </>
  );
}
