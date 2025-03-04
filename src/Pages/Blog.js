import React from "react";
import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import SingleBlog from "../Components/SingleBlog";
export default function Blog() {

    return (
        <>
            <Navbar page="blog" />
            <SecondaryHero
                bg={secondaryHero2}
                page="Blogs"
                mainHeading={
                    <>
                        Smart Deals, Smooth Rides – Your Ultimate <span>Car Buying Guide!</span>
                    </>
                }
            />
            <SingleBlog />
            <Footer />
        </>
    );
}


