import React from "react";

import Navbar from "../Components/Navbar";
import SecondaryHero from "../Components/SecondaryHero";
import Footer from "../Components/Footer";
import secondaryHero2 from "../Assets/images/secondaryHero2.jpg";
import financeConfirm from "../Assets/icons/financeconfirm.svg";
import Confirm from "../Components/Confirm";

export default function FinanceConfirm() {
  return (
    <>
      <Navbar page="finance" />
      <SecondaryHero
        bg={secondaryHero2}
        page="Finance"
        mainHeading={
          <>
            Own Your Car with Confidence –
            <span>Simple & Secure Financing! Luxury</span>
          </>
        }
      />
      <Confirm
        data={{
          pageTitle: "FINANCE ELIGIBILITY",
          confirmImage: financeConfirm,
          confirmText:
            "Your request Is submitted our agent will contact you shortly.",
          buttons: [
            {
              url: "/",
              text: "Go to home page",
            },
          ],
        }}
      />
      <Footer />
    </>
  );
}
