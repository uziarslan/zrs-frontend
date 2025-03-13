import React from "react";
import arrow from "../Assets/icons/arrow.svg";
import { Link } from "react-router-dom";

export default function Mainhero() {
  return (
    <section className="mainHeroSection">
      <div className="contentWrapper">
        <h1 className="heroMainHeading">
          <span>Driven </span>by <span>Quality, </span><span>Trusted </span> by You
        </h1>
        <Link to="/buy" className="heroCtaWrapper">
          <p className="ctaText">Find your dream car now</p>
          <div className="goldBg">
            <img src={arrow} alt="Redirect Link" />
          </div>
        </Link>
      </div>
    </section>
  );
}
