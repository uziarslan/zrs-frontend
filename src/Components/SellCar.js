import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../services/axiosInstance"; // Adjust path as needed
import trash from "../Assets/icons/trash.svg";
import { AuthContext } from "../Context/AuthContext";

const SellCar = () => {
  // State for form fields and images
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
    images: [], // Array of File objects
  });

  const { setIsLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [imagePreviews, setImagePreviews] = useState([]); // Array of preview URLs
  const fileInputRef = useRef(null); // Reference to the file input element

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
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

  // Remove image
  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    setImagePreviews((prev) => {
      const newPreviews = prev.filter((_, i) => i !== index);
      // Revoke URL to free memory
      URL.revokeObjectURL(prev[index]);
      // Reset file input when all images are removed
      if (newPreviews.length === 0 && fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return newPreviews;
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Use AuthContext setIsLoading

    // Create FormData object
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
      setIsLoading(false); // Reset loading state
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
    <div className="sellcontainer max-width">
      <h1 className="title">SELL YOUR CAR</h1>
      <form className="form" onSubmit={handleSubmit}>
        <p className="subtitle">Fill All Detail About You & Your Car</p>
        <div className="formInputWrapper">
          <div className="formGrid">
            {/* Manufacturer */}
            <div className="formGroup">
              <label htmlFor="manufacturer">
                Manufacturer<span>*</span>
              </label>
              <input
                type="text"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleInputChange}
                placeholder="Mercedes"
                required
              />
            </div>

            {/* Vehicle Type */}
            <div className="formGroup">
              <label htmlFor="vehicleType">
                Vehicle Type<span>*</span>
              </label>
              <input
                type="text"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleInputChange}
                placeholder="C200"
                required
              />
            </div>

            {/* Model Year */}
            <div className="formGroup">
              <label htmlFor="year">
                Model Year<span>*</span>
              </label>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                placeholder="2021"
                required
              />
            </div>

            {/* Mileage */}
            <div className="formGroup">
              <label htmlFor="mileage">
                Mileage<span>*</span>
              </label>
              <input
                type="text"
                name="mileage"
                value={formData.mileage}
                onChange={handleInputChange}
                placeholder="KM/Miles"
                required
              />
            </div>

            {/* Expected Asking Price */}
            <div className="formGroup">
              <label htmlFor="price">
                Expected Asking Price<span>*</span>
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="AED"
                required
              />
            </div>

            {/* Origin */}
            <div className="formGroup">
              <label htmlFor="origin">
                Origin<span>*</span>
              </label>
              <select
                name="origin"
                value={formData.origin}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select Origin
                </option>
                <option value="gcc">GCC</option>
                <option value="US">US</option>
                <option value="EU">EU</option>
                <option value="CAD">CAD</option>
                <option value="Korean">Korean</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Emirates */}
            <div className="formGroup">
              <label htmlFor="emirates">
                Emirates<span>*</span>
              </label>
              <select
                name="emirates"
                value={formData.emirates}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select Emirates
                </option>
                <option value="dubai">Dubai</option>
                <option value="abu dhabi">Abu Dhabi</option>
                <option value="sharjah">Sharjah</option>
              </select>
            </div>

            {/* Trade In */}
            <div className="formGroup">
              <label htmlFor="tradeIn">Are You Looking To Trade In?</label>
              <select
                name="tradeIn"
                value={formData.tradeIn}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Trade In
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
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
          </div>

          {/* Description */}
          <div className="formGroup">
            <label htmlFor="description">
              Description<span>*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Write Something"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="completeUpload">
            <div className="imageUpload">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="imagePreview">
                  <img src={preview} alt={`Car preview ${index + 1}`} />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="removeImage"
                  >
                    <img src={trash} alt="Trash Icon" />
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="images" className="addImage"></label>
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

          {/* Form Actions */}
          <div className="formActions">
            <Link to="/">
              <button type="button" className="cancelButton">
                Cancel
              </button>
            </Link>
            <button type="submit" className="saveButton">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SellCar;
