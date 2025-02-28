import React from "react";
import logo from "../Assets/images/logo2.png";
import location from "../Assets/icons/location.svg";
import phone from "../Assets/icons/phone.svg";
import youtube from "../Assets/icons/youtube.svg";
import tiktok from "../Assets/icons/tiktok.svg";
import linkedin from "../Assets/icons/linkedin.svg";
import instagram from "../Assets/icons/instagram.svg";
import facebook from "../Assets/icons/facebook.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footerContentContainer">
        <div className="footerContent">
          <div className="logoAndTagLine">
            <img src={logo} alt="Logo" />
            <p className="brandTagLine">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="pagesAndContactContainer">
            <div>
              <h6 className="colHeading">ZRS CARS TRADING</h6>
              <ul className="footerList">
                <li>Home</li>
                <li>About us</li>
                <li>Sell</li>
                <li>Buy</li>
                <li>Promotions</li>
              </ul>
            </div>
            <div>
              <h6 className="colHeading">Contact</h6>
              <ul className="footerList">
                <li>
                  <img src={location} alt="Location icon" />
                  <span>
                    ALYA & AMIRA COMPLEX ,SHED 4 - DUBAI INVESTMENT PARK-1-DUBAI
                  </span>
                </li>
                <li>
                  <img src={phone} alt="Phone Icon" />
                  <span>0562691573</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyRightContent">
          <div className="copyRightText">
            &copy; All Copyright 2024 by ZRS CARS
          </div>
          <div className="socialIcons">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
