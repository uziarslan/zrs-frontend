import React from "react";
import arrow from "../Assets/icons/arrow.svg";
import herobg from "../Assets/images/herobg.jpg";
import { Link } from "react-router-dom";

export default function Mainhero() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-28 overflow-hidden">
      {/* Split Screen Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Image */}
        <div className="relative order-2 lg:order-1">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${herobg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
          </div>

          {/* Floating Stats Cards */}
          <div className="relative h-full flex items-center justify-center p-8">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-1">500+</h3>
                <p className="text-white/90 text-xs">Premium Cars</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 mt-8">
                <h3 className="text-2xl font-bold text-gold mb-1">1000+</h3>
                <p className="text-white/90 text-xs">Happy Clients</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 -mt-4">
                <h3 className="text-2xl font-bold text-white mb-1">15+</h3>
                <p className="text-white/90 text-xs">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 mt-4">
                <h3 className="text-2xl font-bold text-gold mb-1">100%</h3>
                <p className="text-white/90 text-xs">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="relative bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8 md:p-12 lg:p-16 order-1 lg:order-2">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8 animate-slideDown">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
              <span className="text-primary font-semibold text-sm">Trusted Car Dealership</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 animate-slideUp">
              <span className="text-primary-dark">Find Your</span>
              <br />
              <span className="text-gold">Dream Car</span>
              <br />
              <span className="text-primary">Today</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed animate-slideUp">
              Experience premium quality and trusted service. Browse through our extensive collection of luxury and premium vehicles.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fadeIn">
              <Link
                to="/buy"
                className="group relative bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-2xl hover:scale-105 no-underline text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Browse Collection
                  <img src={arrow} alt="Arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to="/test-drive"
                className="group bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl no-underline text-center"
              >
                Book Test Drive
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gold border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-primary border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gold-dark border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600 font-medium">5000+ Reviews</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-2xl">⭐</span>
                <span className="text-lg font-bold text-gray-900">4.9</span>
                <span className="text-sm text-gray-600">/5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
