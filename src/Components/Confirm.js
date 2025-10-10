import React from "react";
import { Link } from "react-router-dom";

const Confirm = ({ data }) => {
  if (!Array.isArray(data.buttons)) return null;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-2xl mx-auto px-5">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-gray-100">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-1.5 rounded-full font-semibold text-xs mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {data.pageTitle}
          </div>

          {/* Success Icon/Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {/* Animated Circle Background */}
              <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse"></div>

              {/* Icon Container */}
              <div className="relative bg-green-50 rounded-full p-8 inline-block">
                <img
                  src={data.confirmImage}
                  alt="Success"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Success Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
            Success!
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
            {data.confirmText}
          </p>

          {/* Info Box */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-xl p-5 mb-10 text-left">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="text-sm font-bold text-primary-dark mb-1">What's Next?</h4>
                <p className="text-xs text-gray-700">
                  Our team will review your submission and get back to you within 24-48 hours. Check your email for updates.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {data.buttons.map((bt, i) => (
              <Link
                key={i}
                to={bt.url}
                className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg no-underline ${i === 0
                    ? 'border-2 border-primary text-primary hover:bg-primary/5'
                    : 'bg-primary text-white hover:bg-primary-dark'
                  }`}
              >
                {bt.text}
              </Link>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Fast Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirm;
