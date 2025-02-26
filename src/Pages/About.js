import React from "react";

import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Info from "../Components/Info";
// import MediaGallery from "../Components/MediaGallery";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";
import secondaryHero from "../Assets/images/secondaryHero.jpg";

export default function About() {
  return (
    <>
      <Navbar page="about" />
      <SecondaryHero
        bg={secondaryHero}
        page="About us"
        mainHeading={
          <>
            Your Trusted Destination for Quality <span>Cars & Deals.</span>
          </>
        }
      />
      <Info />
      {/* <MediaGallery /> */}
      <Accordion />
      <Footer />
    </>
  );
}
