import React from "react";

import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import TestDriveForm from "../Components/TestDriveForm";

export default function TestDriveF() {
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
      <TestDriveForm />
      <Footer />
    </>
  );
}
