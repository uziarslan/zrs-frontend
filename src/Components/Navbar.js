import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.png";
import like from "../Assets/icons/like.svg";

export default function Navbar({ page }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <i
          className={`bx ${isNavOpen ? "bx-x" : "bx-menu"} burger-menu`}
          onClick={toggleNav}
        />
        <nav className={`nav ${isNavOpen ? "open" : ""}`}>
          <Link
            className={`${page === "home" ? "active" : ""}`}
            to="/"
            onClick={toggleNav}
          >
            Home
          </Link>
          <Link
            className={`${page === "about" ? "active" : ""}`}
            to="/about"
            onClick={toggleNav}
          >
            About us
          </Link>
          <Link
            className={`${page === "sell" ? "active" : ""}`}
            to="/sell"
            onClick={toggleNav}
          >
            Sell
          </Link>
          <Link
            className={`${page === "buy" ? "active" : ""}`}
            to="/buy"
            onClick={toggleNav}
          >
            Buy
          </Link>
          <Link className={`${page === "blog" ? "active" : ""}`} to="/blogs">Blogs</Link>
          <Link
            className={`${page === "finance" ? "active" : ""}`}
            to="/finance"
            onClick={toggleNav}
          >
            Finance
          </Link>
          <Link
            className={`${page === "contact" ? "active" : ""}`}
            to="/contact-us"
            onClick={toggleNav}
          >
            Contact
          </Link>
          <Link className="cartButtonDropdown">
            <img src={like} alt="Liked Cars" />
          </Link>
        </nav>
        <Link className="cartButton">
          <img src={like} alt="Liked Cars" />
        </Link>
      </div>
    </header>
  );
}