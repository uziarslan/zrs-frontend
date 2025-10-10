import React, { useState, useContext } from "react";
import axiosInstance from "../services/axiosInstance";
import { AuthContext } from "../Context/AuthContext";
import Flash from "./Flash";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({});

  const { setIsLoading } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const { status, data } = await axiosInstance.post("/api/v1/subscribe", { email });
      if (status === 201) {
        setMessage(data)
      }
      setEmail("");
    } catch (error) {
      setMessage(error.response.data)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <Flash message={message} />
      <div className="max-w-7xl mx-auto px-5">
        <div className="relative bg-gradient-to-br from-primary via-primary-dark to-primary rounded-[40px] overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-8 md:px-16 py-16 md:py-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-8 border border-white/20">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              <span className="text-white font-semibold text-sm">STAY UPDATED</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Never Miss a Deal
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10">
              Subscribe to get exclusive offers, new arrivals, and automotive insights delivered straight to your inbox
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 p-2 bg-white rounded-[50px] shadow-2xl">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-3 bg-transparent text-gray-900 placeholder-gray-500 text-sm focus:outline-none rounded-[50px]"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-white font-semibold text-sm rounded-[50px] transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:scale-[1.02] whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 mt-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No spam</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Unsubscribe anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>5000+ subscribers</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
