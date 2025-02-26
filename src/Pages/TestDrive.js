import React from "react";

import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import Cars from "../Components/Cars";

export default function TestDrive() {
  return (
    <>
      <Navbar />
      <SecondaryHero
        bg={secondaryHero2}
        page="Test Drive"
        mainHeading={
          <>
            Your Dream Car Awaits— <span>Experience It Firsthand!</span>
          </>
        }
      />
      <section className="testDrivePageSec">
        <h2 className="testDriveMainHeading">Test Drive</h2>
        <Cars />
      </section>
      <Footer />
    </>
  );
}
