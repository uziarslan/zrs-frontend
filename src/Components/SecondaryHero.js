import React from "react";
import { Link } from "react-router-dom";

export default function SecondaryHero({ bg, page, mainHeading }) {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
        }}></div>
      </div>

      {/* Background Image - Clipped Circle on Right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5">
        <div className="absolute inset-0 overflow-hidden">
          {/* Circular clip path */}
          <div
            className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full overflow-hidden border-8 border-white/20 shadow-2xl"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/40"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6">
            <Link
              to="/"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium no-underline flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gold font-semibold text-sm">{page}</span>
          </nav>

          {/* Page Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
            <span className="text-white font-semibold text-xs uppercase tracking-wider">{page}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            {mainHeading}
          </h1>

          {/* Accent Line */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-20 bg-gold rounded-full"></div>
            <div className="h-1 w-12 bg-gold/60 rounded-full"></div>
            <div className="h-1 w-6 bg-gold/30 rounded-full"></div>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-white/70 text-xs">Cars</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-gold mb-1">15+</div>
              <div className="text-white/70 text-xs">Years</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white mb-1">1000+</div>
              <div className="text-white/70 text-xs">Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute right-1/4 top-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
}
