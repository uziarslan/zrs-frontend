import React from "react";
import youtube from "../Assets/icons/youtube.svg";
import tiktok from "../Assets/icons/tiktok.svg";
import linkedin from "../Assets/icons/linkedin.svg";
import instagram from "../Assets/icons/instagram.svg";
import facebook from "../Assets/icons/facebook.svg";

export default function SecondaryHero({ bg, page, mainHeading }) {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="secondaryHeroSection"
    >
      <div className="secondaryHeroContentContainer">
        <p className="paginationOuter">
          Home / <span>{page}</span>
        </p>
        <h1 className="secondaryHeroMainHeading">{mainHeading}</h1>
        {/* <div className="secondaryHeroSocialIconWrapper">
          <div className="socialIconWrapper">
            <img src={youtube} alt="Youtube Social Link" />
          </div>
          <div className="socialIconWrapper">
            <img src={tiktok} alt="Tiktok Social Link" />
          </div>
          <div className="socialIconWrapper">
            <img src={linkedin} alt="LinkedIn Social Link" />
          </div>
          <div className="socialIconWrapper">
            <img src={instagram} alt="Instagram Social Link" />
          </div>
          <div className="socialIconWrapper">
            <img src={facebook} alt="Facebook Social Link" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
