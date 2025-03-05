import React from "react";

import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import testdriveconfirm from "../Assets/icons/testdriveconfirm.svg";
import Confirm from "../Components/Confirm";

export default function BuyNowConfirm() {
    return (
        <>
            <Navbar />
            <SecondaryHero
                bg={secondaryHero2}
                page="Buy Now"
                mainHeading={
                    <>
                        Your Dream Car Awaits— <span>Experience It Firsthand!</span>
                    </>
                }
            />
            <Confirm
                data={{
                    pageTitle: "Buy Now",
                    confirmImage: testdriveconfirm,
                    confirmText:
                        "Your request for buying a drive has been submitted our agent will contact you shortly.",
                    buttons: [
                        {
                            url: "/",
                            text: "Go to home page",
                        }
                    ],
                }}
            />
            <Footer />
        </>
    );
}
