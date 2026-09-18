import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, BedDouble, UtensilsCrossed, Phone } from 'lucide-react';

export const CinematicHero = () => {
  const [activeSide, setActiveSide] = useState(null); // 'grand' | 'royal' | null

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 lg:pt-28 pb-12 overflow-hidden bg-ivory-50">
      {/* Background Split Visuals */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 pointer-events-none">
        
        {/* Left Half: Grand Inn Visual */}
        <div 
          className={`relative h-full transition-all duration-700 overflow-hidden ${
            activeSide === 'grand' ? 'scale-105 opacity-100' : activeSide === 'royal' ? 'opacity-30' : 'opacity-80'
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
            alt="Prabhaa Grand Inn"
            className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory-50 via-ivory-50/60 to-transparent"></div>
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        {/* Right Half: Royal Park Visual */}
        <div 
          className={`relative h-full transition-all duration-700 overflow-hidden ${
            activeSide === 'royal' ? 'scale-105 opacity-100' : activeSide === 'grand' ? 'opacity-30' : 'opacity-80'
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85"
            alt="Prabaa Royal Park"
            className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory-50 via-ivory-50/60 to-transparent"></div>
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

      </div>

      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Center: Brand Identity & Eyebrow */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 lg:mt-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/90 border border-gold-300 text-gold-700 text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 backdrop-blur-md animate-fade-in shadow-sm font-bold">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          <span>WELCOME TO PRABHAA HOTELS</span>
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.1] mb-5">
          A Stay Beyond <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700">
            Expectations
          </span>
        </h1>

        {/* Supporting Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-8">
          Discover comfort, elegance, and exceptional hospitality across our two distinctive properties in Chittoor. Choose your destination below to explore complete property information.
        </p>

      </div>

      {/* Hero Interactive Property Selectors (Left: Grand Inn | Right: Royal Park) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2">
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-[0.22em] text-gold-800 font-bold bg-white/80 px-4 py-1 rounded-full border border-gold-200">
            — CHOOSE YOUR HOTEL DESTINATION —
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Prabhaa Grand Inn */}
          <div
            onMouseEnter={() => setActiveSide('grand')}
            onMouseLeave={() => setActiveSide(null)}
            className="group relative rounded-md p-6 sm:p-8 bg-white/95 backdrop-blur-xl border border-gold-300 hover:border-gold-500 transition-all duration-300 shadow-xl hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
          >
            {/* Top gold bar on hover */}
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-gold-400 to-gold-600"></div>

            <div>
              <div className="flex items-center justify-between text-xs text-gold-700 mb-2">
                <span className="tracking-widest uppercase font-bold">Flagship Hotel</span>
                <span className="flex items-center gap-1 text-slate-600 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-gold-600" /> M.S.R Circle, Chittoor
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-bold group-hover:text-gold-700 transition-colors">
                Prabhaa Grand Inn
              </h3>

              <p className="text-sm text-slate-600 font-normal mt-2.5 leading-relaxed">
                30 luxurious A/C rooms, Annapurna Veg, Amaravathi Non-Veg restaurant, and Darbar Function Hall.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[11px] px-2.5 py-1 rounded bg-ivory-100 border border-gold-200 text-slate-700 font-medium flex items-center gap-1">
                  <BedDouble className="w-3 h-3 text-gold-600" /> 30 A/C Rooms
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded bg-ivory-100 border border-gold-200 text-slate-700 font-medium flex items-center gap-1">
                  <UtensilsCrossed className="w-3 h-3 text-gold-600" /> Veg & Non-Veg Dining
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded bg-ivory-100 border border-gold-200 text-slate-700 font-medium">
                  Darbar Banquet
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <Link
                to="/hotels/grand-inn"
                className="btn-gold text-xs px-5 py-3 flex items-center gap-2 flex-1 justify-center"
              >
                <span>Discover Grand Inn</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+918572233133"
                className="btn-outline-gold text-xs px-4 py-3 shrink-0 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* Card 2: Prabaa Royal Park */}
          <div
            onMouseEnter={() => setActiveSide('royal')}
            onMouseLeave={() => setActiveSide(null)}
            className="group relative rounded-md p-6 sm:p-8 bg-white/95 backdrop-blur-xl border border-gold-300 hover:border-gold-500 transition-all duration-300 shadow-xl hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
          >
            {/* Top gold bar on hover */}
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-gold-400 to-gold-600"></div>

            <div>
              <div className="flex items-center justify-between text-xs text-gold-700 mb-2">
                <span className="tracking-widest uppercase font-bold">Business Class Hotel</span>
                <span className="flex items-center gap-1 text-slate-600 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-gold-600" /> Church Street, Chittoor
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-bold group-hover:text-gold-700 transition-colors">
                Prabaa Royal Park
              </h3>

              <p className="text-sm text-slate-600 font-normal mt-2.5 leading-relaxed">
                30 modern guest rooms, 100% Pure Veg cuisine with 350+ dishes, Sweets & Savouries, and The Royal Hall.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[11px] px-2.5 py-1 rounded bg-ivory-100 border border-gold-200 text-slate-700 font-medium flex items-center gap-1">
                  <BedDouble className="w-3 h-3 text-gold-600" /> 30 Guest Rooms
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded bg-ivory-100 border border-gold-200 text-slate-700 font-medium flex items-center gap-1">
                  <UtensilsCrossed className="w-3 h-3 text-gold-600" /> 100% Pure Veg Cuisine
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded bg-ivory-100 border border-gold-200 text-slate-700 font-medium">
                  The Royal Hall
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <Link
                to="/hotels/royal-park"
                className="btn-gold text-xs px-5 py-3 flex items-center gap-2 flex-1 justify-center"
              >
                <span>Discover Royal Park</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+918572233111"
                className="btn-outline-gold text-xs px-4 py-3 shrink-0 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default CinematicHero;
