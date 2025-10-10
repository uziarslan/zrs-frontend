import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.png";
import { AuthContext } from "../Context/AuthContext";

export default function Navbar({ page }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { favoriteCars } = useContext(AuthContext);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/", key: "home" },
    { name: "About", to: "/about", key: "about" },
    { name: "Sell", to: "/sell", key: "sell" },
    { name: "Buy", to: "/buy", key: "buy" },
    { name: "Blogs", to: "/blogs", key: "blog" },
    { name: "Finance", to: "/finance", key: "finance" },
    { name: "Contact", to: "/contact-us", key: "contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4 md:py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-5">
        <nav className={`relative backdrop-blur-xl rounded-2xl border transition-all duration-300 ${isScrolled
          ? 'bg-white/95 border-gray-200 shadow-xl'
          : 'bg-white/90 border-white/30 shadow-lg'
          }`}>
          <div className="flex items-center justify-between px-4 md:px-5 py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="ZRS Logo"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.to}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${page === link.key
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side - Favorites & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Favorites/Garage Button */}
              <Link
                to="/likes"
                className="relative p-2 rounded-full bg-primary/10 hover:bg-primary transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-primary group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                {favoriteCars.length > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {favoriteCars.length}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleNav}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`block h-0.5 bg-primary transition-all duration-300 ${isNavOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}></span>
                  <span className={`block h-0.5 bg-primary transition-all duration-300 ${isNavOpen ? 'opacity-0' : ''
                    }`}></span>
                  <span className={`block h-0.5 bg-primary transition-all duration-300 ${isNavOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isNavOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="px-4 pb-4 pt-2 space-y-1 border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.to}
                  onClick={toggleNav}
                  className={`block px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${page === link.key
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-700 hover:bg-primary/10'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
