import React from "react";
import arrow from "../Assets/icons/arrow.svg";

export default function Mainhero() {
  return (
    <section className="mainHeroSection">
      <div className="contentWrapper">
        <h1 className="heroMainHeading">
          Quality <span>Cars</span> with <span>Unbeatable</span> Deals
        </h1>
        <div className="heroCtaWrapper">
          <p className="ctaText">Find your dream car now</p>
          <div className="goldBg">
            <img src={arrow} alt="Redirect Link" />
          </div>
        </div>
      </div>
    </section>
  );
}
