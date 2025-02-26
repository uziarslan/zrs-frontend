import React from "react";
import Navbar from "../Components/Navbar";
import Carlist from "../Components/Carlist";
import Mainhero from "../Components/Maiinhero";
import About from "../Components/About";
import Brands from "../Components/Brands";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar page="home" />
      <Mainhero />
      <About />
      <Carlist />
      <Brands />
      <Subscribe />
      <Footer />
    </>
  );
}
