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
    { name: "Buy", to: "/buy", key: "buy" },
    { name: "Sell", to: "/sell", key: "sell" },
    { name: "Finance", to: "/finance", key: "finance" },
    { name: "Blogs", to: "/blogs", key: "blog" },
    { name: "About", to: "/about", key: "about" },
    { name: "Contact", to: "/contact-us", key: "contact" },
  ];

  return (
    <>
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
                  className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[1250] lg:hidden"
          onClick={toggleNav}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[1300] transform transition-transform duration-300 ease-in-out lg:hidden ${isNavOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-200">
            <h2 className="text-lg font-bold text-primary-dark">Menu</h2>
            <button
              onClick={toggleNav}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto p-5">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.to}
                  onClick={toggleNav}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${page === link.key
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                    }`}
                >
                  {link.name}
                  <svg
                    className={`w-4 h-4 transition-transform ${page === link.key ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-5 border-t border-gray-200">
            <Link
              to="/likes"
              onClick={toggleNav}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium text-sm"
            >
              <span>My Garage</span>
              {favoriteCars.length > 0 && (
                <span className="min-w-[24px] h-[24px] px-2 bg-gold text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {favoriteCars.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
