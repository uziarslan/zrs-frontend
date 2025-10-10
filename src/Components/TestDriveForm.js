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
      await submitTestDriveForm(formData, "testDriveForm");
      navigate("/test-drive-confirm");
    } catch (err) {
      console.error("Error submitting test drive request:", err);
      setMessage({ error: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  const timeSlots = [
    { id: "1", value: "11:00 AM", label: "11:00 AM" },
    { id: "2", value: "11:30 AM", label: "11:30 AM" },
    { id: "3", value: "12:00 PM", label: "12:00 PM" },
    { id: "4", value: "12:30 PM", label: "12:30 PM" },
    { id: "5", value: "01:00 PM", label: "01:00 PM" },
    { id: "6", value: "01:30 PM", label: "01:30 PM" },
  ];

  return (
    <div className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <Flash message={message} />
      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-semibold text-xs mb-4">
            BOOK TEST DRIVE
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
            Experience Your Dream Car
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Schedule a test drive and feel the thrill of your next vehicle. Choose your preferred date and time below.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-primary-dark mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Your Information
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-gray-700 mb-2">
                  Full Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-2">
                  Email Address<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="mobileNumber" className="block text-xs font-semibold text-gray-700 mb-2">
                  Mobile Number<span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="+971 XX XXX XXXX"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-primary-dark mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Pick Your Schedule
            </h3>

            {/* Date Picker */}
            <div className="mb-6">
              <label htmlFor="date" className="block text-xs font-semibold text-gray-700 mb-2">
                Preferred Date<span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-3">
                Select Time Slot<span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {timeSlots.map((slot) => (
                  <label key={slot.id} className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="time"
                      id={slot.id}
                      value={slot.value}
                      checked={formData.time === slot.value}
                      onChange={handleRadioChange}
                      required
                      className="peer sr-only"
                    />
                    <div className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium text-center transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary hover:border-gray-300">
                      <svg className="w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {slot.label}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-gold/10 border-l-4 border-gold rounded-xl p-5 mb-8">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="text-sm font-bold text-gold mb-1">Important Information</h4>
                <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                  <li>Please bring a valid driver's license</li>
                  <li>Test drives typically last 20-30 minutes</li>
                  <li>We'll confirm your booking within 2 hours</li>
                </ul>
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
              Book Test Drive
            </button>
          </div>
        </form>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-2xl p-5 shadow-md text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold text-primary-dark mb-1">Safe & Secure</h4>
            <p className="text-xs text-gray-600">All test drives are fully insured</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md text-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold text-primary-dark mb-1">Flexible Timing</h4>
            <p className="text-xs text-gray-600">Choose a time that works for you</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold text-primary-dark mb-1">Expert Guidance</h4>
            <p className="text-xs text-gray-600">Professional staff to assist you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDriveForm;
