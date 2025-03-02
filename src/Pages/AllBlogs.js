import React, { useEffect, useContext } from "react";
import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import { AuthContext } from "../Context/AuthContext";
import Blogs from "../Components/Blogs";

export default function AllBlogs() {
    const { setIsLoading } = useContext(AuthContext);

    useEffect(() => {
        setIsLoading(false);
    }, [setIsLoading]);

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
            <Blogs />
            <Footer />
        </>
    );
}


