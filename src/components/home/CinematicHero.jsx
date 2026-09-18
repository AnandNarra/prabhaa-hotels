import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, BedDouble, UtensilsCrossed, Phone } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85",
    title: "Prabhaa Grand Inn",
    subtitle: "Flagship Luxury Hotel & Executive Rooms at M.S.R Circle"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85",
    title: "Prabaa Royal Park",
    subtitle: "Business Class Hospitality & 100% Pure Veg Dining at Church Street"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85",
    title: "Luxury Executive Suites",
    subtitle: "Modern Amenities, High-Speed Wi-Fi & 24/7 Room Service"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85",
    title: "Darbar & The Royal Banquet Halls",
    subtitle: "Chittoor's Premier Venues for Grand Weddings & Corporate Meets"
  }
];

export const CinematicHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate hero images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative hero-full-height min-h-screen min-h-dvh h-screen h-dvh flex flex-col justify-center pt-16 sm:pt-24 pb-4 sm:pb-8 overflow-hidden bg-slate-950"
      style={{ minHeight: '100dvh', height: '100dvh' }}
    >
      {/* 4-Image Rotating Background Slider spanning full 100% height */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center filter brightness-[0.40] contrast-[1.15] transition-transform duration-7000 ease-out ${
                index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Deep Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60"></div>
          </div>
        ))}
      </div>

      {/* Decorative Golden Ambient Center Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gold-500/12 rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* Center Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-3.5 sm:px-6 w-full">
        
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-3 sm:mb-6">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-slate-900/90 border border-gold-500/40 text-gold-300 text-[9px] sm:text-xs tracking-[0.22em] uppercase mb-1.5 sm:mb-3 backdrop-blur-md shadow-lg font-bold">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-400" />
            <span>WELCOME TO PRABHAA HOTELS</span>
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-400" />
          </div>

          {/* Line 1: Big Letters (Single Line) */}
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-white uppercase leading-tight mb-1 sm:mb-2.5 drop-shadow-xl sm:whitespace-nowrap">
            A Stay Beyond{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-200 to-gold-400">
              Expectations
            </span>
          </h1>

          {/* Line 2: Small Letters (Single Line) */}
          <p className="text-[11px] sm:text-sm text-slate-200 font-normal leading-normal drop-shadow-sm max-w-3xl mx-auto sm:whitespace-nowrap">
            Discover comfort, elegance, and exceptional hospitality across our two distinctive properties in Chittoor.
          </p>

        </div>

        {/* Two Side-by-Side Property Cards (Sleek Compact Luxury Cards) */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
          
          {/* Card 1: Prabhaa Grand Inn */}
          <div
            className="group relative rounded-xl p-3 sm:p-5 lg:p-6 bg-white/95 backdrop-blur-2xl border border-gold-400/40 hover:border-gold-500 transition-all duration-300 shadow-xl hover:-translate-y-1 overflow-hidden"
          >
            {/* Top gold bar */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-gold-400 to-gold-600"></div>

            <div>
              {/* Category & Location Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[8px] sm:text-[11px] text-gold-700 font-bold mb-1 tracking-wider uppercase">
                <span className="text-gold-700">Flagship Hotel</span>
                <span className="flex items-center gap-0.5 sm:gap-1 text-slate-500 font-medium normal-case sm:uppercase">
                  <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-600 shrink-0" /> M.S.R Circle
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-sm sm:text-xl lg:text-2xl text-slate-900 font-bold group-hover:text-gold-700 transition-colors leading-tight mb-1 sm:mb-2">
                Prabhaa Grand Inn
              </h3>

              {/* Mobile Quick Tags */}
              <div className="flex sm:hidden flex-wrap gap-1 mb-2">
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-slate-700 font-semibold">
                  30 A/C Rooms
                </span>
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-slate-700 font-semibold">
                  Multi-Cuisine
                </span>
              </div>

              {/* Desktop Description */}
              <p className="hidden md:block text-xs text-slate-600 font-normal mt-1 leading-relaxed">
                30 luxurious A/C rooms, Annapurna Veg, Amaravathi Non-Veg, and Darbar Function Hall.
              </p>

              {/* Desktop Extended Tags */}
              <div className="hidden sm:flex flex-wrap gap-1.5 mt-3">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-slate-700 font-semibold flex items-center gap-1">
                  <BedDouble className="w-3 h-3 text-gold-600" /> 30 A/C Rooms
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-slate-700 font-semibold flex items-center gap-1">
                  <UtensilsCrossed className="w-3 h-3 text-gold-600" /> Veg & Non-Veg
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-slate-700 font-semibold">
                  Darbar Banquet
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-2 sm:mt-4 pt-2 border-t border-stone-150 flex items-center gap-1.5 sm:gap-2.5">
              <Link
                to="/hotels/grand-inn"
                className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-bold text-[9px] sm:text-xs py-1.5 sm:py-2.5 px-2 sm:px-4 rounded-md sm:rounded-lg shadow-sm flex items-center justify-center gap-1 transition-all uppercase tracking-wider"
              >
                <span>Discover Grand Inn</span>
                <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0" />
              </Link>
              <a
                href="tel:+918572233133"
                className="hidden sm:flex items-center justify-center gap-1 text-xs py-2.5 px-3 rounded-lg border border-gold-400/60 bg-white text-gold-700 font-semibold hover:bg-gold-50 transition-colors shrink-0"
                title="Call Desk"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* Card 2: Prabaa Royal Park */}
          <div
            className="group relative rounded-xl p-3 sm:p-5 lg:p-6 bg-white/95 backdrop-blur-2xl border border-gold-400/40 hover:border-gold-500 transition-all duration-300 shadow-xl hover:-translate-y-1 overflow-hidden"
          >
            {/* Top gold bar */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-gold-400 to-gold-600"></div>

            <div>
              {/* Category & Location Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[8px] sm:text-[11px] text-gold-700 font-bold mb-1 tracking-wider uppercase">
                <span className="text-gold-700">Business Class</span>
                <span className="flex items-center gap-0.5 sm:gap-1 text-slate-500 font-medium normal-case sm:uppercase">
                  <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-600 shrink-0" /> Church Street
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-sm sm:text-xl lg:text-2xl text-slate-900 font-bold group-hover:text-gold-700 transition-colors leading-tight mb-1 sm:mb-2">
                Prabaa Royal Park
              </h3>

              {/* Mobile Quick Tags */}
              <div className="flex sm:hidden flex-wrap gap-1 mb-2">
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-slate-700 font-semibold">
                  30 Rooms
                </span>
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-slate-700 font-semibold">
                  100% Pure Veg
                </span>
              </div>

              {/* Desktop Description */}
              <p className="hidden md:block text-xs text-slate-600 font-normal mt-1 leading-relaxed">
                30 modern guest rooms, 100% Pure Veg with 350+ dishes, and The Royal Hall.
              </p>

              {/* Desktop Extended Tags */}
              <div className="hidden sm:flex flex-wrap gap-1.5 mt-3">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-slate-700 font-semibold flex items-center gap-1">
                  <BedDouble className="w-3 h-3 text-gold-600" /> 30 Guest Rooms
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-slate-700 font-semibold flex items-center gap-1">
                  <UtensilsCrossed className="w-3 h-3 text-gold-600" /> 100% Pure Veg
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-slate-700 font-semibold">
                  The Royal Hall
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-2 sm:mt-4 pt-2 border-t border-stone-150 flex items-center gap-1.5 sm:gap-2.5">
              <Link
                to="/hotels/royal-park"
                className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-bold text-[9px] sm:text-xs py-1.5 sm:py-2.5 px-2 sm:px-4 rounded-md sm:rounded-lg shadow-sm flex items-center justify-center gap-1 transition-all uppercase tracking-wider"
              >
                <span>Discover Royal Park</span>
                <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0" />
              </Link>
              <a
                href="tel:+918572233111"
                className="hidden sm:flex items-center justify-center gap-1 text-xs py-2.5 px-3 rounded-lg border border-gold-400/60 bg-white text-gold-700 font-semibold hover:bg-gold-50 transition-colors shrink-0"
                title="Call Desk"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* 4 Interactive Slide Navigation Indicators */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === currentSlide
                  ? 'w-5 sm:w-6 h-1.5 sm:h-2 bg-gradient-to-r from-gold-400 to-gold-600 shadow-md'
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default CinematicHero;
