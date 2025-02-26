import React from "react";

import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import sellcarconfirm from "../Assets/icons/sellcarconfirm.svg";
import Confirm from "../Components/Confirm";

export default function SellCarConfirm() {
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
      <Confirm
        data={{
          pageTitle: "SELL YOUR CAR",
          confirmImage: sellcarconfirm,
          confirmText: "Car details submitted successfully.",
          buttons: [
            {
              url: "/",
              text: "Go to home page",
            },
            {
              url: "/sell",
              text: "Add More",
            },
          ],
        }}
      />
      <Footer />
    </>
  );
}
