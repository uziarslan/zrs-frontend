import React from "react";

import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import SellCar from "../Components/SellCar";

export default function Sell() {
  return (
    <>
      <Navbar page="sell" />
      <SecondaryHero
        bg={secondaryHero2}
        page="Sell"
        mainHeading={
          <>
            Luxury, Performance & Savings—All <span>in One Place</span>
          </>
        }
      />
      <SellCar />
      <Footer />
    </>
  );
}
