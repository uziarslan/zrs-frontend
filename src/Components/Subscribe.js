import React, { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  return (
    <section className="newsLetterSection">
      <div className="newsletterContainer">
        <h2 className="newsLetterHeading">
          Subscribe to Our Newsletter For Latest Updates and Promotions
        </h2>
        <p className="newsLetterSubheading">
          We have car-related blog so we can share our thought and rutinity in
          our blog that updated weekly. We will not spam you, we promise.
        </p>
        <form className="inputAndButtonContainer">
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
