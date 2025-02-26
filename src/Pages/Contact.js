import React from "react";

import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import ContactForm from "../Components/ContactForm";

export default function Contact() {
  return (
    <>
      <Navbar page="contact" />
      <SecondaryHero
        bg={secondaryHero2}
        page="Contact us"
        mainHeading={
          <>
            Got Questions? We’ve Got the Keys <span>to Your Answers!</span>
          </>
        }
      />
      <ContactForm />
      <Footer />
    </>
  );
}
