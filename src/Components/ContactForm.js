import React, { useState } from "react";
import axiosInstance from "../services/axiosInstance";
import phonefill from "../Assets/icons/phonefill.svg";
import envolopefill from "../Assets/icons/envolopefill.svg";
import locationfill from "../Assets/icons/locationfill.svg";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/api/v1/contact-us", formData);
      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        message: "",
      });
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Failed to send message.");
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-semibold text-xs mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Have questions? Our team is here to help. Fill out the form or reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-primary-dark mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send us a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold text-gray-700 mb-2">
                    First Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold text-gray-700 mb-2">
                    Last Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-2">
                    Email Address<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="mobileNumber" className="block text-xs font-semibold text-gray-700 mb-2">
                    Mobile Number<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    placeholder="+971 XX XXX XXXX"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-2">
                  Your Message<span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:border-primary focus:outline-none transition-colors resize-y"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info & Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <img src={phonefill} alt="Phone" className="w-5 h-5 brightness-0 saturate-100" style={{ filter: 'invert(56%) sepia(88%) saturate(420%) hue-rotate(358deg) brightness(94%) contrast(90%)' }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-dark mb-2">Call Us</h4>
                    <a href="tel:+971563890299" className="block text-sm text-gray-600 hover:text-primary transition-colors mb-1 no-underline">
                      +971 56 389 0299
                    </a>
                    <a href="tel:+971555313061" className="block text-sm text-gray-600 hover:text-primary transition-colors no-underline">
                      +971 55 531 3061
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <img src={envolopefill} alt="Email" className="w-5 h-5 brightness-0 saturate-100" style={{ filter: 'invert(56%) sepia(88%) saturate(420%) hue-rotate(358deg) brightness(94%) contrast(90%)' }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-dark mb-2">Email Us</h4>
                    <a href="mailto:syedmaaz@zrscarstrading.com" className="text-sm text-gray-600 hover:text-primary transition-colors no-underline">
                      syedmaaz@zrscarstrading.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <img src={locationfill} alt="Location" className="w-5 h-5 brightness-0 saturate-100" style={{ filter: 'invert(56%) sepia(88%) saturate(420%) hue-rotate(358deg) brightness(94%) contrast(90%)' }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-dark mb-2">Visit Us</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      ALYA & AMIRA COMPLEX, SHED 4<br />
                      DUBAI INVESTMENT PARK 1<br />
                      DUBAI, UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.6441821252356!2d55.15852711123598!3d24.97821787776014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f73b2bb191395%3A0xf938e8282600c070!2sZRS%20Car%20Trading!5e0!3m2!1sen!2s!4v1739460617744!5m2!1sen!2s"
                className="w-full h-[300px]"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            {/* Business Hours Card */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-base font-bold text-white">Business Hours</h4>
              </div>
              <div className="space-y-2 text-sm text-white/90">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
