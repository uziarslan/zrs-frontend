import React, { useState } from "react";

const accordionData = [
  {
    title: "What service does ZRS car Trading offer?",
    content:
      "We are a free loan broker who will compete for you with the loan offers sent by banks. Just fill in the loan application form and we will send it to several banks. You can then compare the loan offers you receive on your own website and sign the contract!",
  },
  {
    title: "What service does ZRS car Trading offer?",
    content:
      "We are a free loan broker who will compete for you with the loan offers sent by banks. Just fill in the loan application form and we will send it to several banks. You can then compare the loan offers you receive on your own website and sign the contract!",
  },
  {
    title: "What service does ZRS car Trading offer?",
    content:
      "We are a free loan broker who will compete for you with the loan offers sent by banks. Just fill in the loan application form and we will send it to several banks. You can then compare the loan offers you receive on your own website and sign the contract!",
  },
  {
    title: "What service does ZRS car Trading offer?",
    content:
      "We are a free loan broker who will compete for you with the loan offers sent by banks. Just fill in the loan application form and we will send it to several banks. You can then compare the loan offers you receive on your own website and sign the contract!",
  },
  {
    title: "What service does ZRS car Trading offer?",
    content:
      "We are a free loan broker who will compete for you with the loan offers sent by banks. Just fill in the loan application form and we will send it to several banks. You can then compare the loan offers you receive on your own website and sign the contract!",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="accordionSection">
      <h2 className="accordionSectionHeading">Our Advantages</h2>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div
            onClick={() => toggleAccordion(index)}
            key={index}
            className={`accordion-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className={`accordion-header ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {item.title}
              <span className="accordion-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`accordion-content ${
                activeIndex === index ? "show" : ""
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
