import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Flash from "../Components/Flash";

const TestDriveForm = () => {
  const { submitTestDriveForm, setIsLoading } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    date: "",
    time: "",
  });
  const [message, setMessage] = useState({});

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      time: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await submitTestDriveForm(formData);
      navigate("/test-drive-confirm");
    } catch (err) {
      console.error("Error submitting test drive request:", err);
      setMessage({ error: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sellcontainer">
      <Flash message={message} />
      <h1 className="title">Test Drive</h1>
      <form className="form" onSubmit={handleSubmit}>
        <p className="subtitle">Fill all details</p>
        <div className="formInputWrapper">
          <div className="formGrid">
            {/* Full Name */}
            <div className="formGroup">
              <label htmlFor="fullName">
                Full Name<span>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your Full Name"
                value={formData.fullName}
                onChange={handleChange}
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
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
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
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter Your Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date */}
            <div className="formGroup">
              <label htmlFor="date">
                Date<span>*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Select Time */}
          <div className="formGroup">
            <label htmlFor="time">
              Select Time<span>*</span>
            </label>
            <div className="radioButtonRow">
              <div className="singleRadio">
                <input
                  name="time"
                  id="1"
                  type="radio"
                  value="11:00 AM"
                  checked={formData.time === "11:00 AM"}
                  onChange={handleRadioChange}
                  required
                />
                <label htmlFor="1">11:00 AM</label>
              </div>
              <div className="singleRadio">
                <input
                  name="time"
                  id="2"
                  type="radio"
                  value="11:30 AM"
                  checked={formData.time === "11:30 AM"}
                  onChange={handleRadioChange}
                  required
                />
                <label htmlFor="2">11:30 AM</label>
              </div>
              <div className="singleRadio">
                <input
                  name="time"
                  id="3"
                  type="radio"
                  value="12:00 PM"
                  checked={formData.time === "12:00 PM"}
                  onChange={handleRadioChange}
                  required
                />
                <label htmlFor="3">12:00 PM</label>
              </div>
              <div className="singleRadio">
                <input
                  name="time"
                  id="4"
                  type="radio"
                  value="12:30 PM"
                  checked={formData.time === "12:30 PM"}
                  onChange={handleRadioChange}
                  required
                />
                <label htmlFor="4">12:30 PM</label>
              </div>
              <div className="singleRadio">
                <input
                  name="time"
                  id="5"
                  type="radio"
                  value="01:00 PM"
                  checked={formData.time === "01:00 PM"}
                  onChange={handleRadioChange}
                  required
                />
                <label htmlFor="5">01:00 PM</label>
              </div>
              <div className="singleRadio">
                <input
                  name="time"
                  id="6"
                  type="radio"
                  value="01:30 PM"
                  checked={formData.time === "01:30 PM"}
                  onChange={handleRadioChange}
                  required
                />
                <label htmlFor="6">01:30 PM</label>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="formActions">
            <Link to="/test-drive">
            <button type="button" className="cancelButton">
              Cancel
            </button>
            </Link>
            <button type="submit" className="saveButton">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TestDriveForm;
