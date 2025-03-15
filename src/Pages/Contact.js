import React, { useEffect, useContext } from "react";
import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import ContactForm from "../Components/ContactForm";
import { AuthContext } from "../Context/AuthContext";

export default function Contact() {
  const { setIsLoading } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <>
      <Navbar page="contact" />
      <SecondaryHero
        bg={secondaryHero2}
        page="Contact us"
        mainHeading={
          <>
            Always <span>available</span> for you!
          </>
        }
      />
      <ContactForm />
      <Footer />
    </>
  );
}
