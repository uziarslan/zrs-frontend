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
      "ZRS stands out because of our commitment to transparency, customer satisfaction, and quality. We offer fair prices, reliable vehicles, and flexible options, whether you’re buying, selling, or exchanging a car.",
  },
  {
    title: "What types of cars can I buy at ZRS?",
    content:
      "We stock a wide range of premium vehicles, including luxury cars, SUVs, sports cars, and family vehicles. Each car undergoes a thorough inspection to ensure you’re getting a high-quality vehicle.",
  },
  {
    title: "Can I sell my car to ZRS even if it's not in perfect condition?",
    content:
      "Yes! We buy cars in all conditions. Whether your car is in pristine condition or has some wear and tear, we’ll offer you a competitive price and ensure a fast, easy selling process.",
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
    <section className="accordionSection">
      <h2 className="accordionSectionHeading">Why Choose ZRS Car Trading?</h2>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div
            onClick={() => toggleAccordion(index)}
            key={index}
            className={`accordion-item ${activeIndex === index ? "active" : ""
              }`}
          >
            <div
              className={`accordion-header ${activeIndex === index ? "active" : ""
                }`}
            >
              {item.title}
              <span className="accordion-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`accordion-content ${activeIndex === index ? "show" : ""
                }`}
            >
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
