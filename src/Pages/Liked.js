import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import Cars from "../Components/Cars";
import { AuthContext } from "../Context/AuthContext";

export default function Liked() {
    const { favoriteCars, setIsLoading } = useContext(AuthContext);

    useState(() => {
        setIsLoading(false)
    }, [setIsLoading])

    return (
        <>
            <Navbar />
            <SecondaryHero
                bg={secondaryHero2}
                page="Likes"
                mainHeading={
                    <>
                        Your Dream Car Awaits— <span>Experience It Firsthand!</span>
                    </>
                }
            />
            <section className="testDrivePageSec max-width">
                <h2 className="testDriveMainHeading">Liked Cars</h2>
                <Cars cars={favoriteCars} />
            </section>
            <Footer />
        </>
    );
}
