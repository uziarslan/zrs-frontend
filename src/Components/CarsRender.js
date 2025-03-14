import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import redirect from "../Assets/icons/redirect.svg";
import mileageIcon from "../Assets/icons/mileage.svg";
import color from "../Assets/icons/color.svg";
import calender from "../Assets/icons/calender.svg";
import arrowLeft from "../Assets/icons/arrow-left.svg";
import arrowRight from "../Assets/icons/arrow-right.svg";
import { AuthContext } from "../Context/AuthContext";

export default function CarRender({ cars }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const { addCarToFavorites, removeCarFromFavorites, isCarFavorite } =
        useContext(AuthContext);

    // Calculate pagination details
    const totalItems = Array.isArray(cars) ? cars.length : 0;
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCars = Array.isArray(cars)
        ? cars.slice(indexOfFirstItem, indexOfLastItem)
        : [];

    // Reset to page 1 when the cars prop changes (e.g., filtering in Buy)
    useEffect(() => {
        setCurrentPage(1);
    }, [cars]);

    // Handle pagination button clicks and scroll
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            setCurrentPage(page);
            // Scroll to carRenderCardHolder after the page updates
            setTimeout(() => {
                const carRenderCardHolder = document.querySelector(".carRenderCardHolder");
                if (carRenderCardHolder) {
                    carRenderCardHolder.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 100); // Small delay to ensure DOM updates
        }
    };

    const handleFavoriteToggle = (car) => {
        if (isCarFavorite(car._id)) {
            removeCarFromFavorites(car._id);
        } else {
            addCarToFavorites(car);
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
                    className={`pagination-arrow ${currentPage === totalPages ? "disabled" : ""
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
            <div className="carRenderCardHolder">
                {cars && cars.length > 0 ? (
                    currentCars.map((car) => (
                        <Link
                            style={{ backgroundImage: `url(${car.images[0]?.path || ""})` }}
                            className="cardBodyRender"
                            key={car._id}
                            to={`/car/${car._id}`}
                        >
                            <div className="cardHeader">
                                <div className="badgeContainerWrapper">
                                    {car.saleStatus !== "sold" ? (
                                        <>
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
                                        </>
                                    ) : (
                                        car.saleStatus === "sold" && (
                                            <div className="badgeContainer sold">
                                                <p>SOLD</p>
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className="carVerticalButtons">
                                    <button className="cardctaButton" type="button">
                                        <img src={redirect} alt="Redirect button" />
                                    </button>
                                    <button
                                        className="cardctaButton"
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent Link navigation
                                            handleFavoriteToggle(car);
                                        }}
                                    >
                                        {isCarFavorite(car._id) ? (
                                            <i
                                                className="bx bxs-heart"
                                                style={{ color: "#ff0000", fontSize: "20px" }}
                                            ></i>
                                        ) : (
                                            <i
                                                className="bx bx-heart"
                                                style={{ color: "#fff", fontSize: "20px" }}
                                            ></i>
                                        )}
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
                                            src={mileageIcon}
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