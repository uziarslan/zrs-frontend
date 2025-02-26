import React from "react";

import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import FinanceForm from "../Components/FinanceForm";

export default function Finance() {
  return (
    <>
      <Navbar page="finance" />
      <SecondaryHero
        bg={secondaryHero2}
        page="Finance"
        mainHeading={
          <>
            Own Your Car with Confidence –
            <span>Simple & Secure Financing! Luxury</span>
          </>
        }
      />
      <FinanceForm />
      <Footer />
    </>
  );
}
