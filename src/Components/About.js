import React from "react";
import { Link } from "react-router-dom";
import arrowsm from "../Assets/icons/arrowsm.svg";
import car1 from "../Assets/images/image1.jpg";
import car2 from "../Assets/images/image2.jpg";

export default function About() {
  const features = [
    { icon: "🏆", title: "Premium Quality", description: "Top-rated vehicles inspected by experts" },
    { icon: "🔒", title: "Secure Payment", description: "Safe and encrypted transactions" },
    { icon: "⚡", title: "Quick Delivery", description: "Fast and reliable car delivery" },
    { icon: "💎", title: "Best Prices", description: "Competitive pricing guaranteed" }
  ];

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-20 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Badge */}
        <div className="text-center mb-10">
          <span className="inline-block bg-gold/10 text-gold px-4 py-1.5 rounded-full font-semibold text-xs mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
            Experience The Difference
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust ZRS for their automotive needs
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-primary-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content - Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large Card - Test Drive CTA */}
          <div className="lg:col-span-2 relative bg-primary rounded-3xl overflow-hidden p-6 md:p-8 min-h-[350px] flex items-end">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url(${car1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            <div className="relative z-10 w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Feel The Excellence
              </h3>
              <p className="text-white/90 text-base mb-5 max-w-xl">
                Whether you're looking for a luxury SUV or a compact car, our expert team is here to help you find the perfect ride.
              </p>
              <Link
                to="/test-drive"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gold hover:text-white transition-all duration-300 hover:scale-105 no-underline shadow-xl text-sm"
              >
                Book Test Drive Now
                <img src={arrowsm} alt="Arrow" className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Side - Stacked Cards */}
          <div className="flex flex-col gap-6">
            {/* Image Card 1 */}
            <div className="relative rounded-3xl overflow-hidden h-[250px] group">
              <img
                src={car2}
                alt="Premium Cars"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Premium Collection</h4>
                  <p className="text-white/80 text-sm">Explore luxury vehicles</p>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-gold to-gold-dark rounded-3xl p-5 h-[130px] flex flex-col justify-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <p className="text-white/90 font-medium text-sm">Years of Trust & Excellence</p>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 bg-white rounded-2xl p-6 shadow-lg">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
            <div className="text-gray-600 font-medium text-sm">Cars Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gold mb-1">1000+</div>
            <div className="text-gray-600 font-medium text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-gray-600 font-medium text-sm">Brands</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gold mb-1">24/7</div>
            <div className="text-gray-600 font-medium text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
