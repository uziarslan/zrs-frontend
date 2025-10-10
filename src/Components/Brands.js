import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axiosInstance from "../services/axiosInstance";
import herobg from "../Assets/images/herobg.jpg";

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
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="absolute inset-0 bg-primary/95"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full font-semibold text-xs mb-4 backdrop-blur-sm">
            TRUSTED BRANDS
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Premium Automotive Brands
          </h2>
          <p className="text-base text-white/80 max-w-2xl mx-auto">
            Representing the world's most prestigious car manufacturers
          </p>
        </div>

        {/* Brands Marquee */}
        <div className="mb-8 overflow-hidden">
          <Marquee gradient={false} speed={50} pauseOnHover={true}>
            {logos.map((logo, index) => (
              <div
                key={index}
                className="mx-6 md:mx-8 group cursor-pointer"
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-5 md:p-6 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl border border-white/10 hover:border-white w-32 md:w-36 h-16 md:h-20 flex items-center justify-center">
                  <img
                    src={logo.logo.path}
                    alt={`Brand ${index}`}
                    className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-white mb-1">50+</div>
            <div className="text-white/80 font-medium text-sm">Brands</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-gold mb-1">500+</div>
            <div className="text-white/80 font-medium text-sm">Models</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-white/80 font-medium text-sm">Authentic</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-gold mb-1">15+</div>
            <div className="text-white/80 font-medium text-sm">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
}
