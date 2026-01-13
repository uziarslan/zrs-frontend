import React from "react";
import logo from "../Assets/images/logo2.png";
import location from "../Assets/icons/location.svg";
import phone from "../Assets/icons/phone.svg";
import tiktok from "../Assets/icons/tiktok.svg";
import linkedin from "../Assets/icons/linkedin.svg";
import instagram from "../Assets/icons/instagram.svg";
import facebook from "../Assets/icons/facebook.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    { icon: tiktok, name: "TikTok", url: "https://www.tiktok.com/@zrs.cars.trading?_r=1&_t=ZS-932VW1ZOuck" },
    { icon: linkedin, name: "LinkedIn", url: "https://www.linkedin.com/company/zrs-cars-trading/?viewAsMember=true" },
    { icon: instagram, name: "Instagram", url: "https://www.instagram.com/zrscarstrading/" },
    { icon: facebook, name: "Facebook", url: "https://www.facebook.com/zrscarstrading" },
  ];

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Buy Cars", to: "/buy" },
    { name: "Sell Cars", to: "/sell" },
  ];

  const resources = [
    { name: "Blogs", to: "/blogs" },
    { name: "Finance", to: "/finance" },
    { name: "Contact", to: "/contact-us" },
    { name: "Privacy Policy", to: "/privacy-policy" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-4 group">
                <img
                  src={logo}
                  alt="ZRS Logo"
                  className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                Buy, Sell, Exchange, or Consign – We've Got You Covered
              </p>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-4 h-4 group-hover:scale-110 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base font-bold mb-4 text-gold">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/80 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-base font-bold mb-4 text-gold">Resources</h3>
              <ul className="space-y-2">
                {resources.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/80 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base font-bold mb-4 text-gold">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                    <img src={location} alt="Location" className="w-4 h-4" />
                  </div>
                  <span className="text-white/80 text-xs leading-relaxed">
                    ALYA & AMIRA COMPLEX, SHED 4<br />
                    DUBAI INVESTMENT PARK-1<br />
                    DUBAI
                  </span>
                </li>
                <li className="flex gap-2 items-center group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                    <img src={phone} alt="Phone" className="w-4 h-4" />
                  </div>
                  <a
                    href="tel:+971563890299"
                    className="text-white/80 text-sm hover:text-gold transition-colors"
                  >
                    +971 56 389 0299
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            <p className="text-white/60">
              © {new Date().getFullYear()} ZRS CARS TRADING. All rights reserved.
            </p>
            <div className="flex gap-5 text-white/60">
              <Link to="/privacy-policy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
