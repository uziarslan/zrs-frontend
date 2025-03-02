import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.png";
import like from "../Assets/icons/like.svg";
export default function Navbar({ page }) {
  return (
    <header className="header">
      <div className="container max-width">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <Link className={`${page === "home" ? "active" : ""}`} to="/">
            Home
          </Link>
          <Link className={`${page === "about" ? "active" : ""}`} to="/about">
            About us
          </Link>
          <Link className={`${page === "sell" ? "active" : ""}`} to="/sell">
            Sell
          </Link>
          <Link className={`${page === "buy" ? "active" : ""}`} to="/buy">
            Buy
          </Link>
          <Link className={`${page === "blog" ? "active" : ""}`} to="/blogs">
            Blogs
          </Link>
          <Link
            className={`${page === "finance" ? "active" : ""}`}
            to="/finance"
          >
            Finance
          </Link>
          <Link
            className={`${page === "contact" ? "active" : ""}`}
            to="/contact-us"
          >
            Contact
          </Link>
          {/* <Link to="#">Promotions</Link> */}
        </nav>
        <Link className="cartButton">
          <img src={like} alt="Liked Cars" />
        </Link>
      </div>
    </header>
  );
}
