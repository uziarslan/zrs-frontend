import React, { useState, useContext } from "react";
import axiosInstance from "../services/axiosInstance";
import { AuthContext } from "../Context/AuthContext";
import Flash from "./Flash";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({});

  const { setIsLoading } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const { status, data } = await axiosInstance.post("/api/v1/subscribe", { email });
      if (status === 201) {
        setMessage(data)
      }
      setEmail("");
    } catch (error) {
      setMessage(error.response.data)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section className="newsLetterSection max-width">
      <Flash message={message} />
      <div className="newsletterContainer">
        <h2 className="newsLetterHeading">
          Subscribe to Our Newsletter For Latest Updates and Promotions
        </h2>
        <p className="newsLetterSubheading">
          We have car-related blog so we can share our thought and rutinity in
          our blog that updated weekly. We will not spam you, we promise.
        </p>
        <form onSubmit={handleSubmit} className="inputAndButtonContainer">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your e-mail address"
            className="newsLetterInput"
          />
          <button className="subscribeButton">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
