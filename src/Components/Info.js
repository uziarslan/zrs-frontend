import React, { useState } from "react";
import slidebg from "../Assets/images/slidebg.jpg";
import slidebg2 from "../Assets/images/slidebg2.jpg";
import slidebg3 from "../Assets/images/slidebg3.jpg";
import slidebg4 from "../Assets/images/slidebg4.jpg";

export default function Info() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 1,
      title: "We Sell Cars",
      description: "We offer a diverse selection of high-quality vehicles, including luxury, sports, and family cars. Our inventory is curated to meet the needs of every type of driver, ensuring you find the perfect match.",
      image: slidebg,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "We Buy Cars",
      description: "Looking to sell your car? ZRS offers an instant, hassle-free selling process. We evaluate your car fairly and provide you with competitive offers, allowing for a fast and efficient transaction.",
      image: slidebg2,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "We Exchange Cars",
      description: "Need a new car but have one to trade in? At ZRS, we make the car exchange process easy and rewarding. We offer great exchange rates and ensure a smooth transition from your old car to your new one.",
      image: slidebg3,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Consignment Services",
      description: "We offer consignment services to help you sell your car through our showroom. Let us take care of the sale while you enjoy the peace of mind knowing your car is in good hands with our professional team.",
      image: slidebg4,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Intro Text */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-semibold text-xs mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-6 max-w-4xl mx-auto leading-tight">
            <span className="text-primary">At ZRS Car Trading,</span> we believe in making car ownership easier and more accessible
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Whether you're looking to buy, sell, exchange, or consign, we're committed to providing exceptional service, quality vehicles, and seamless transactions every time.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === index
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {service.icon}
              <span>{service.title}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative transition-all duration-500 ${activeTab === index ? 'block' : 'hidden'
                }`}
            >
              {/* Background Image */}
              <div className="relative h-[500px] md:h-[600px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 mb-4">
                    <div className="text-gold">
                      {service.icon}
                    </div>
                    <span className="text-gold font-bold text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`h-1 rounded-full transition-all duration-300 ${activeTab === index ? 'w-8 bg-primary' : 'w-4 bg-gray-300'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
