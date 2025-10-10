import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import fallbackIcon from "../Assets/car icons/car.svg";

export default function CarGallery({ carData }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [features, setFeatures] = useState([]);
  const [details, setDetails] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addCarToLocalStorage, addCarToFavorites, removeCarFromFavorites, isCarFavorite } = useContext(AuthContext);

  // Load icons and process data
  useEffect(() => {
    if (!carData) return;

    const iconContext = require.context("../Assets/car icons", false, /\.svg$/);
    const iconFiles = iconContext.keys();

    const featuresData = Object.entries(carData.specifications)
      .filter(([_, value]) => value)
      .map(([featureName]) => {
        const iconName = featureName.toLowerCase().replace(/\s+/g, "-");
        const iconPath = iconFiles.find((path) => path.includes(`/${iconName}.svg`));
        return {
          name: featureName,
          icon: iconPath ? iconContext(iconPath) : fallbackIcon,
        };
      });

    setFeatures(featuresData);

    const detailsConfig = [
      { title: "Body Type", value: carData.bodyType, iconKey: "body-type" },
      { title: "Engine", value: carData.engine, iconKey: "engine" },
      { title: "Transmission", value: carData.transmission, iconKey: "transmission" },
      { title: "Fuel Type", value: carData.fuelType, iconKey: "fuel-type" },
      { title: "Mileage", value: carData.mileage, iconKey: "mileage" },
      { title: "Year", value: carData.year, iconKey: "year" },
      { title: "Doors", value: carData.door, iconKey: "doors" },
      { title: "Color", value: carData.exteriorColor, iconKey: "color" },
    ];

    const detailsData = detailsConfig.map((detail) => {
      const iconPath = iconFiles.find((path) => path.includes(`/${detail.iconKey}.svg`));
      return {
        ...detail,
        icon: iconPath ? iconContext(iconPath) : fallbackIcon,
      };
    });

    setDetails(detailsData);
  }, [carData]);

  const images = carData?.images?.map((img) => ({
    id: img._id.$oid,
    src: img.path,
    alt: `Car image ${img.filename}`,
  })) || [];

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const handleFavoriteToggle = () => {
    if (isCarFavorite(carData._id)) {
      removeCarFromFavorites(carData._id);
    } else {
      addCarToFavorites(carData);
    }
  };

  const carTitle = [
    carData?.manufacturerId?.brandName,
    carData?.vehicleTypeId?.modelName,
    carData?.trimId?.trimName,
    carData?.title,
  ].filter(Boolean).join(" ");

  if (!carData) return null;

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-primary transition-colors no-underline">Home</Link>
          <span>/</span>
          <Link to="/buy" className="hover:text-primary transition-colors no-underline">Cars</Link>
          <span>/</span>
          <span className="text-primary font-medium">{carData?.manufacturerId?.brandName}</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Left Side - Images (3/5) */}
          <div className="lg:col-span-3">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-4 bg-white">
              <div className="aspect-[4/3] relative">
                {images.length > 0 ? (
                  <img
                    src={images[selectedImageIndex].src}
                    alt={images[selectedImageIndex].alt}
                    className="w-full h-full object-cover cursor-zoom-in"
                    onClick={() => setIsModalOpen(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <svg className="w-32 h-32 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}

                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {carData.saleStatus === "sold" ? (
                    <div className="px-4 py-2 rounded-lg bg-red-600 text-white font-bold text-sm shadow-lg">
                      SOLD
                    </div>
                  ) : (
                    <>
                      {carData.featured === "yes" && (
                        <div className="px-4 py-2 rounded-lg bg-primary text-white font-semibold text-sm shadow-lg flex items-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          FEATURED
                        </div>
                      )}
                      {carData.testDrive === "yes" && (
                        <div className="px-4 py-2 rounded-lg bg-gold text-white font-semibold text-sm shadow-lg flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                          </svg>
                          TEST DRIVE
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
                    >
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
                    >
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto scrollbar-thin pb-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${selectedImageIndex === index
                      ? 'border-primary shadow-lg scale-105'
                      : 'border-gray-200 hover:border-primary/50'
                      }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Info (2/5) */}
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              {/* Title & Price */}
              <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-6">
                <h1 className="text-xl md:text-2xl font-bold text-primary-dark mb-4 leading-tight">
                  {carTitle}
                </h1>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl md:text-3xl font-black text-primary">
                      AED {carData.discountedPrice || carData.originalPrice}
                    </span>
                    {carData.discountedPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        AED {carData.originalPrice}
                      </span>
                    )}
                  </div>
                  {carData.monthlyInstallment && (
                    <p className="text-sm text-gray-600 mt-2">
                      Or <span className="font-bold text-primary">AED {carData.monthlyInstallment}/month</span>
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                {carData.saleStatus !== "sold" && (
                  <div className="space-y-3 mb-6">
                    <button
                      onClick={() => addCarToLocalStorage(carData._id, "buyNow")}
                      className="w-full bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Buy Now
                    </button>
                    <button
                      onClick={() => addCarToLocalStorage(carData._id, "testDrive")}
                      className="w-full bg-gold text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-gold-dark transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                      Book Test Drive
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        to="/contact-us"
                        className="bg-white border-2 border-primary text-primary px-4 py-3 rounded-full font-bold text-sm hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2 no-underline"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact
                      </Link>
                      <button
                        onClick={handleFavoriteToggle}
                        className="bg-white border-2 border-gray-200 text-gray-600 px-4 py-3 rounded-full font-bold text-sm hover:border-red-500 hover:text-red-500 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        {isCarFavorite(carData._id) ? (
                          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        )}
                        Save
                      </button>
                    </div>
                  </div>
                )}

                {/* Quick Specs */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{carData.year}</div>
                    <div className="text-xs text-gray-600">Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{carData.mileage}</div>
                    <div className="text-xs text-gray-600">Mileage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{carData.transmission}</div>
                    <div className="text-xs text-gray-600">Transmission</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{carData.fuelType}</div>
                    <div className="text-xs text-gray-600">Fuel</div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white shadow-xl">
                <h3 className="text-base font-bold mb-4">Need Help?</h3>
                <p className="text-sm text-white/90 mb-4">Our team is ready to assist you</p>
                <a
                  href="tel:0562691573"
                  className="flex items-center justify-center gap-2 bg-white text-primary px-5 py-3 rounded-full font-bold text-sm hover:bg-gold hover:text-white transition-all duration-300 no-underline"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Car Details Section */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-primary-dark mb-8 flex items-center gap-3">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Specifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.map((detail, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                  <img src={detail.icon} alt={detail.title} className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-gray-600 mb-1">{detail.title}</h5>
                  <p className="text-base font-bold text-primary-dark">{detail.value || 'N/A'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        {features.length > 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary-dark mb-8 flex items-center gap-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Features & Options
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <img src={feature.icon} alt={feature.name} className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Description Section */}
        {carData?.description && (
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-primary-dark mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Description
            </h2>
            <div
              className="prose max-w-none text-gray-700 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: carData.description }}
            />
          </div>
        )}
      </div>

      {/* Full Screen Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[2000] flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImageIndex].src}
              alt="Full screen view"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
