import React, { useState } from "react";
import slidebg from "../Assets/images/slidebg.jpg";
import slidebg2 from "../Assets/images/slidebg2.jpg";
import slidebg3 from "../Assets/images/slidebg3.jpg";
import slidebg4 from "../Assets/images/slidebg4.jpg";

export default function Info() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="infoSection max-width">
      <h6 className="infoTextContent">
        <span>At ZRS Car Trading,</span> we believe in making car ownership easier and more accessible. Whether you're looking to buy, sell, exchange, or consign, we’re committed to providing exceptional service, quality vehicles, and seamless transactions every time.
      </h6>
      <div className="infoCustomSlider">
        <div
          onClick={() => setActiveTab(1)}
          style={{ backgroundImage: `url(${slidebg})` }}
          className={`slide ${activeTab === 1 ? "active" : ""}`}
        >
          <h4 className="slideTitle">
            01.
            <span>We Sell Cars</span>
          </h4>
          <p className="slideContent">
            We offer a diverse selection of high-quality vehicles, including luxury, sports, and family cars. Our inventory is curated to meet the needs of every type of driver, ensuring you find the perfect match.
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${slidebg2})` }}
          onClick={() => setActiveTab(2)}
          className={`slide ${activeTab === 2 ? "active" : ""}`}
        >
          <h4 className="slideTitle">
            02.
            <span>We Buy Cars</span>
          </h4>
          <p className="slideContent">
            Looking to sell your car? ZRS offers an instant, hassle-free selling process. We evaluate your car fairly and provide you with competitive offers, allowing for a fast and efficient transaction.
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${slidebg3})` }}
          onClick={() => setActiveTab(3)}
          className={`slide ${activeTab === 3 ? "active" : ""}`}
        >
          <h4 className="slideTitle">
            03.
            <span>We Exchange Cars</span>
          </h4>
          <p className="slideContent">
            Need a new car but have one to trade in? At ZRS, we make the car exchange process easy and rewarding. We offer great exchange rates and ensure a smooth transition from your old car to your new one.
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${slidebg4})` }}
          onClick={() => setActiveTab(4)}
          className={`slide ${activeTab === 4 ? "active" : ""}`}
        >
          <h4 className="slideTitle">
            04.
            <span>Consignment Services</span>
          </h4>
          <p className="slideContent">
            We offer consignment services to help you sell your car through our showroom. Let us take care of the sale while you enjoy the peace of mind knowing your car is in good hands with our professional team.
          </p>
        </div>
      </div>
    </section>
  );
}
