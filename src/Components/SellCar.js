import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import trash from "../Assets/icons/trash.svg";
import { AuthContext } from "../Context/AuthContext";

const SellCar = () => {
  const [formData, setFormData] = useState({
    manufacturer: "",
    vehicleType: "",
    year: "",
    mileage: "",
    price: "",
    origin: "",
    emirates: "",
    tradeIn: "",
    fullName: "",
    mobileNumber: "",
    email: "",
    description: "",
    images: [],
  });

  const { setIsLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [imagePreviews, setImagePreviews] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...files],
      }));
      setImagePreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    setImagePreviews((prev) => {
      const newPreviews = prev.filter((_, i) => i !== index);
      URL.revokeObjectURL(prev[index]);
      if (newPreviews.length === 0 && fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return newPreviews;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      if (key === "images") {
        value.forEach((image) => data.append("images", image));
      } else {
        data.append(key, value);
      }
    }

    try {
      const { status } = await axiosInstance.post("/api/v1/sell-car", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (status === 201) navigate("/sell-confirm");
    } catch (err) {
      console.error("Error submitting car:", err);
    } finally {
      setIsLoading(false);
      setFormData({
        manufacturer: "",
        vehicleType: "",
        year: "",
        mileage: "",
        price: "",
        origin: "",
        emirates: "",
        tradeIn: "",
        fullName: "",
        mobileNumber: "",
        email: "",
        description: "",
        images: [],
      });
      setImagePreviews([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-semibold text-xs mb-4">
            SELL YOUR CAR
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Get The Best Value For Your Car
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to tell us about your car and yourself. We'll get back to you with a competitive offer.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
          {/* Car Details Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-primary-dark mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Car Details
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Manufacturer */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Manufacturer<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="manufacturer"
                  value={formData.manufacturer}
                  onChange={handleInputChange}
                  placeholder="Mercedes"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Vehicle Type */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Vehicle Type<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  placeholder="C200"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Model Year */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Model Year<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="2021"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Mileage */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Mileage<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleInputChange}
                  placeholder="KM/Miles"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Expected Price */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Expected Asking Price<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="AED"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Origin */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Origin<span className="text-red-600">*</span>
                </label>
                <select
                  name="origin"
                  value={formData.origin}
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
                  <option value="" disabled>Select Origin</option>
                  <option value="gcc">GCC</option>
                  <option value="US">US</option>
                  <option value="EU">EU</option>
                  <option value="CAD">CAD</option>
                  <option value="Korean">Korean</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Emirates */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Emirates<span className="text-red-600">*</span>
                </label>
                <select
                  name="emirates"
                  value={formData.emirates}
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
                  <option value="" disabled>Select Emirates</option>
                  <option value="dubai">Dubai</option>
                  <option value="abu dhabi">Abu Dhabi</option>
                  <option value="sharjah">Sharjah</option>
                </select>
              </div>

              {/* Trade In */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Are You Looking To Trade In?
                </label>
                <select
                  name="tradeIn"
                  value={formData.tradeIn}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors appearance-none bg-white cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23295860'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.25rem'
                  }}
                >
                  <option value="" disabled>Select Trade In</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>

          {/* Personal Details Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-primary-dark mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Your Details
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

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-primary-dark mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Additional Information
            </h3>
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Description<span className="text-red-600">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Tell us more about your car..."
                required
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-primary-dark mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Upload Photos
            </h3>
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-6">
              <div className="flex flex-wrap gap-4">
                {/* Image Previews */}
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative group w-32 h-32 rounded-xl overflow-hidden shadow-lg">
                    <img src={preview} alt={`Car preview ${index + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <img src={trash} alt="Remove" className="w-8 h-8" />
                    </button>
                  </div>
                ))}

                {/* Add Image Button */}
                <label
                  htmlFor="images"
                  className="w-32 h-32 border-2 border-dashed border-primary rounded-xl bg-primary/5 hover:bg-primary/10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-10 h-10 text-primary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-xs font-semibold text-primary">Add Photo</span>
                </label>
                <input
                  ref={fileInputRef}
                  multiple
                  id="images"
                  style={{ display: "none" }}
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  onChange={handleImageUpload}
                />
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
              Submit Your Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellCar;
