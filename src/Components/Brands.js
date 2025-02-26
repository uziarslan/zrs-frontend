import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axiosInstance from "../services/axiosInstance"; // Assuming you have an axios instance configured

export default function Brands() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/fetch-logos");
        if (response.data && response.data.logos) {
          setLogos(response.data.logos);
        }
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    };

    fetchLogos();
  }, []);

  return (
    <section className="brandsContainer">
      <div className="brandsContent">
        <h6 className="brandSectionHeading">Vehicle Brands</h6>
        <p className="brandsSubHeading">
          Driven by Trust, Fueled by Excellence
        </p>
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {logos.map((logo, index) => (
            <div key={index} className="marquee-item">
              <img src={logo.logo.path} alt={`Brand ${index}`} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
