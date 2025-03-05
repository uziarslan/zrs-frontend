import React from "react";

import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import BuyForm from "../Components/BuyForm";

export default function BuyNow() {
    return (
        <>
            <Navbar />
            <SecondaryHero
                page="Buy Now"
                bg={secondaryHero2}
                mainHeading={
                    <>
                        Own Your Car with Confidence –
                        <span>Simple & Secure Financing! Luxury</span>
                    </>
                }
            />
            <BuyForm />
            <Footer />
        </>
    );
}
