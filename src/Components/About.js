import React from "react";
import { Link } from "react-router-dom";
import arrowsm from "../Assets/icons/arrowsm.svg";

import car1 from "../Assets/images/image1.jpg";
import car2 from "../Assets/images/image2.jpg";

export default function About() {
  return (
    <section className="aboutUsSection">
      <div className="aboutUsContentHolder max-width">
        <div className="aboutUsHeading">
          <h2 className="aboutHeading">
            Book a Test Drive, Experience the Thrill!
          </h2>
          <div className="subHeadingContainer">
            <p className="aboutUsSubHeading">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link to="/test-drive" className="aboutUsCta">
              <p>Book a Test Drive</p>
              <div className="greenBg">
                <img src={arrowsm} alt="Arrow Icon" />
              </div>
            </Link>
          </div>
        </div>
        <div className="image-container">
          <img src={car1} alt="test drive" className="image expanded" />
          <img src={car2} alt="test drive" className="image shrinked" />
        </div>
      </div>
    </section>
  );
}
