import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

// Base icons
import dummycar from "../Assets/car icons/dummycar.svg";
import fallbackIcon from "../Assets/car icons/car.svg";
import { Link } from "react-router-dom";

export default function CarGallery({ carData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [features, setFeatures] = useState([]);
  const [details, setDetails] = useState([]);

  const { addCarToLocalStorage } = useContext(AuthContext);

  // Load icons and process data
  useEffect(() => {
    if (!carData) return;

    // Load all icons from the car icons directory
    const iconContext = require.context("../Assets/car icons", false, /\.svg$/);
    const iconFiles = iconContext.keys();

    // Process features from specifications
    const featuresData = Object.entries(carData.specifications)
      .filter(([_, value]) => value) // Only include features with true values
      .map(([featureName]) => {
        const iconName = featureName.toLowerCase().replace(/\s+/g, "-");
        const iconPath = iconFiles.find((path) =>
          path.includes(`/${iconName}.svg`)
        );

        return {
          name: featureName,
          icon: iconPath ? iconContext(iconPath) : fallbackIcon,
        };
      });

    setFeatures(featuresData);

    // Process car details
    const detailsConfig = [
      { title: "Body Type", value: carData.bodyType, iconKey: "body-type" },
      { title: "Engine", value: carData.engine, iconKey: "engine" },
      {
        title: "Transmission",
        value: carData.transmission,
        iconKey: "transmission",
      },
      { title: "Fuel Type", value: carData.fuelType, iconKey: "fuel-type" },
      { title: "Mileage", value: carData.mileage, iconKey: "mileage" },
      { title: "Year", value: carData.year, iconKey: "year" },
      { title: "Doors", value: carData.door, iconKey: "doors" },
      { title: "Color", value: carData.exteriorColor, iconKey: "color" },
    ];

    const detailsData = detailsConfig.map((detail) => {
      const iconPath = iconFiles.find((path) =>
        path.includes(`/${detail.iconKey}.svg`)
      );

      return {
        ...detail,
        icon: iconPath ? iconContext(iconPath) : fallbackIcon,
      };
    });

    setDetails(detailsData);
  }, [carData]);

  // Image handling
  const images =
    carData?.images?.map((img) => ({
      id: img._id.$oid,
      src: img.path,
      alt: `Car image ${img.filename}`,
    })) || [];

  return (
    <div className="gallery-container max-width">
      {/* Header */}
      <header className="gallery-header">
        <h1 className="gallery-title">
          {[
            carData?.manufacturerId?.brandName,
            carData?.vehicleTypeId?.modelName,
            carData?.trimId?.trimName,
            carData?.title,
          ]
            .filter(Boolean)
            .join(" ")}
        </h1>
        {
          carData?.saleStatus !== "sold" && (
            <div className="action-buttons">
              <button onClick={() => addCarToLocalStorage(carData._id, "buyNow")} className="btn">Buy Now</button>
              <button
                className="btn"
                onClick={() => addCarToLocalStorage(carData._id, "testDrive")}
              >
                Test Drive
              </button>
              <Link to="/contact-us">
                <button className="btn">Contact us</button>
              </Link>
            </div>
          )
        }
      </header>

      {/* Image Gallery */}
      <div className="gallery-wrapper">
        <div className="gallery-grid">
          <div className="main-image">
            {images.length > 0 && (
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                onClick={() => setSelectedImage(images[currentImage].src)}
              />
            )}
          </div>

          <div className="side-thumbnails">
            {images.slice(1, 4).map((image, index) => (
              <div key={image.id} className="thumbnail-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => {
                    setCurrentImage(index + 1);
                    setSelectedImage(image.src);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bottom-thumbnails-container">
          <div className="bottom-thumbnails">
            {images.map((image, index) => (
              <div key={image.id} className="thumbnail-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => {
                    setCurrentImage(index);
                    setSelectedImage(image.src);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <button className="modal-close">X</button>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage}
                alt="Enlarged car view"
                className="modal-image"
              />
            </div>
          </div>
        )}

        {/* Car Details Section */}
        <section className="carDetailsContainer">
          <h2 className="sectionHeading">Car Details</h2>
          <div className="carDetailsContainerWrapper">
            {details.map((detail, index) => (
              <div className="carDetailCard" key={index}>
                <div className="carIconContainer">
                  <img src={detail.icon} alt={detail.title} />
                </div>
                <div className="carDetailInfo">
                  <h5 className="cardHeading">{detail.title}</h5>
                  <p className="cardDetail">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="featuresSection">
          <h2 className="sectionHeading">Features</h2>
          <div className="feature-grid">
            {/* Left Features */}
            <div className="feature-icons-left">
              {features
                .slice(0, Math.ceil(features.length / 2))
                .map((feature, index) => (
                  <div key={index} className="feature-item">
                    <img
                      src={feature.icon}
                      alt={feature.name}
                      className="feature-icon"
                    />
                    <p>{feature.name}</p>
                  </div>
                ))}
            </div>

            {/* Car in Center */}
            <div className="car-icon-container">
              <img src={dummycar} alt="Car" className="car-icon" />
            </div>

            {/* Right Features */}
            <div className="feature-icons-right">
              {features
                .slice(Math.ceil(features.length / 2))
                .map((feature, index) => (
                  <div key={index} className="feature-item">
                    <img
                      src={feature.icon}
                      alt={feature.name}
                      className="feature-icon"
                    />
                    <p>{feature.name}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Car Description Section */}
        <section className="carDescriptionSection">
          <h2 className="sectionHeading">Car Description</h2>
          <div className="formGroup">
            <label>Note</label>
            <div
              className="carDescriptionSingle"
              dangerouslySetInnerHTML={{ __html: carData?.description }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
