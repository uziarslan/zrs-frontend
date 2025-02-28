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
    <>
      <section className="contactFormSection">
        <h2 className="contactusHeading">Contact us</h2>
        <div className="completePage">
          <form className="contactFormWrapper" onSubmit={handleSubmit}>
            <div className="companyContactDetails">
              <div className="iconAndInfo">
                <img src={phonefill} alt="Contact Number" />
                <p className="contactInfo">+971 555313061 / 0562691573</p>
              </div>
              <div className="iconAndInfo">
                <img src={envolopefill} alt="Email" />
                <p className="contactInfo">info@zrsholding.ae</p>
              </div>
              <div className="iconAndInfo">
                <img src={locationfill} alt="Contact Number" />
                <p className="contactInfo">
                  ALYA & AMIRA COMPLEX,SHED 4,DUBAI INVESTMENT PARK 1, DUBAI
                </p>
              </div>
            </div>
            <div>
              <div className="contactFormGrid">
                <div className="formGroup">
                  <label htmlFor="firstName">
                    First Name<span>*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter Your First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="lastName">
                    Last Name<span>*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter Your Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="email">
                    Email Address<span>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="mobileNumber">
                    Mobile Number<span>*</span>
                  </label>
                  <input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    placeholder="Enter Your Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="formGroup">
                <label htmlFor="message">
                  Message<span>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>

          {/* Google Map iframe */}
          <div className="googleMapWrapper">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.6441821252356!2d55.15852711123598!3d24.97821787776014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f73b2bb191395%3A0xf938e8282600c070!2sZRS%20Car%20Trading!5e0!3m2!1sen!2s!4v1739460617744!5m2!1sen!2s"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
