import React, { useState } from "react";

const accordionData = [
  {
    title: "What services does ZRS Car Trading offer?",
    content:
      "ZRS offers a complete car trading experience, including buying, selling, car exchange, and consignment services. We aim to provide a seamless process tailored to meet your needs, ensuring convenience and satisfaction every time.",
  },
  {
    title: "How is ZRS different from other car traders?",
    content:
      "ZRS stands out because of our commitment to transparency, customer satisfaction, and quality. We offer fair prices, reliable vehicles, and flexible options, whether you're buying, selling, or exchanging a car.",
  },
  {
    title: "What types of cars can I buy at ZRS?",
    content:
      "We stock a wide range of premium vehicles, including luxury cars, SUVs, sports cars, and family vehicles. Each car undergoes a thorough inspection to ensure you're getting a high-quality vehicle.",
  },
  {
    title: "Can I sell my car to ZRS even if it's not in perfect condition?",
    content:
      "Yes! We buy cars in all conditions. Whether your car is in pristine condition or has some wear and tear, we'll offer you a competitive price and ensure a fast, easy selling process.",
  },
  {
    title: "Why should I choose ZRS for my car exchange or consignment?",
    content:
      "At ZRS, we provide competitive exchange offers and professional consignment services. We take care of the entire process from valuation to final sale, making it easier for you to upgrade your car or sell it without the hassle.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gold/10 text-gold px-4 py-1.5 rounded-full font-semibold text-xs mb-4">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Why Choose ZRS Car Trading?
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Find answers to commonly asked questions about our services
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border-2 ${activeIndex === index
                  ? 'border-primary shadow-xl'
                  : 'border-gray-200 shadow-md hover:border-gray-300'
                }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex justify-between items-center gap-4 text-left transition-all duration-300"
              >
                <span className={`font-semibold text-base md:text-lg transition-colors ${activeIndex === index ? 'text-primary' : 'text-gray-700'
                  }`}>
                  {item.title}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index
                    ? 'bg-primary text-white rotate-180'
                    : 'bg-gray-100 text-gray-600'
                  }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-6 md:px-8 pb-5 md:pb-6">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
