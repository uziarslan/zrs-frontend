import React, { useState } from "react";
import slidebg from "../Assets/images/slidebg.jpg";
import slidebg2 from "../Assets/images/slidebg2.jpg";
import slidebg3 from "../Assets/images/slidebg3.jpg";
import slidebg4 from "../Assets/images/slidebg4.jpg";

export default function Info() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="infoSection">
      <h6 className="infoTextContent">
        <span>Trust, reliability, and expertise</span> drive everything we do.
        We focus on open communication and honest guidance, ensuring you have
        the confidence to make well-informed decisions when buying or selling
        your car.
      </h6>
      <div className="infoCustomSlider">
        <div
          onClick={() => setActiveTab(1)}
          style={{ backgroundImage: `url(${slidebg})` }}
          className={`slide ${activeTab === 1 ? "active" : ""}`}
        >
          <h4 className="slideTitle">
            01.
            <span>Drive the Luxury you Deserve</span>
          </h4>
          <p className="slideContent">
            We embrace immense pride in providing a hand-picked assortment of
            the best used luxury vehicles from the most renowned automakers
            worldwide. Every car in our inventory goes through a thorough
            inspection process to make sure it satisfies our high requirements
            for performance and quality. However, our dedication to quality
            doesn’t end there. A team of friendly experts will greet you when
            you go into our showroom or visit our website. They are committed to
            helping you locate the ideal vehicle to fit your tastes and way of
            life. Whether you’re looking for an opulent sedan, an expansive SUV,
            or a stylish sports vehicle, we have the knowledge and resources to
            turn your vision into a reality
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${slidebg2})` }}
          onClick={() => setActiveTab(2)}
          className={`slide ${activeTab === 2 ? "active" : ""}`}
        >
          <h4 className="slideTitle">
            02.
            <span>Buy Car With Us</span>
          </h4>
          <p className="slideContent">
            We embrace immense pride in providing a hand-picked assortment of
            the best used luxury vehicles from the most renowned automakers
            worldwide. Every car in our inventory goes through a thorough
            inspection process to make sure it satisfies our high requirements
            for performance and quality. However, our dedication to quality
            doesn’t end there. A team of friendly experts will greet you when
            you go into our showroom or visit our website. They are committed to
            helping you locate the ideal vehicle to fit your tastes and way of
            life. Whether you’re looking for an opulent sedan, an expansive SUV,
            or a stylish sports vehicle, we have the knowledge and resources to
            turn your vision into a reality
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${slidebg3})` }}
          onClick={() => setActiveTab(3)}
          className={`slide ${activeTab === 3 ? "active" : ""}`}
        >
          <h4 className="slideTitle">
            03.
            <span>Sell car with us</span>
          </h4>
          <p className="slideContent">
            We embrace immense pride in providing a hand-picked assortment of
            the best used luxury vehicles from the most renowned automakers
            worldwide. Every car in our inventory goes through a thorough
            inspection process to make sure it satisfies our high requirements
            for performance and quality. However, our dedication to quality
            doesn’t end there. A team of friendly experts will greet you when
            you go into our showroom or visit our website. They are committed to
            helping you locate the ideal vehicle to fit your tastes and way of
            life. Whether you’re looking for an opulent sedan, an expansive SUV,
            or a stylish sports vehicle, we have the knowledge and resources to
            turn your vision into a reality
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${slidebg4})` }}
          onClick={() => setActiveTab(4)}
          className={`slide ${activeTab === 4 ? "active" : ""}`}
        >
          <h4 className="slideTitle">
            04.
            <span>Exchange services</span>
          </h4>
          <p className="slideContent">
            We embrace immense pride in providing a hand-picked assortment of
            the best used luxury vehicles from the most renowned automakers
            worldwide. Every car in our inventory goes through a thorough
            inspection process to make sure it satisfies our high requirements
            for performance and quality. However, our dedication to quality
            doesn’t end there. A team of friendly experts will greet you when
            you go into our showroom or visit our website. They are committed to
            helping you locate the ideal vehicle to fit your tastes and way of
            life. Whether you’re looking for an opulent sedan, an expansive SUV,
            or a stylish sports vehicle, we have the knowledge and resources to
            turn your vision into a reality
          </p>
        </div>
      </div>
    </section>
  );
}
