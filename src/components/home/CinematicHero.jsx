import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, BedDouble, UtensilsCrossed, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

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

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section 
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-10 overflow-hidden bg-slate-950"
    >
      {/* 4-Image Rotating Background Slider */}
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
              className={`w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.12] transition-transform duration-7000 ease-out ${
                index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Deep Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/60"></div>
          </div>
        ))}
      </div>

      {/* Decorative Golden Ambient Center Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gold-500/12 rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* Slider Controls: Prev & Next Arrows */}
      <button
        onClick={handlePrevSlide}
        className="hidden md:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-gold-500 border border-gold-500/40 text-gold-300 hover:text-slate-950 items-center justify-center transition-all shadow-xl backdrop-blur-md cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNextSlide}
        className="hidden md:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-gold-500 border border-gold-500/40 text-gold-300 hover:text-slate-950 items-center justify-center transition-all shadow-xl backdrop-blur-md cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Center Container with Sleek Proportions */}
      <div className="relative z-10 max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Header Content */}
        <div className="text-center max-w-2xl mx-auto">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-gold-500/40 text-gold-300 text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-3 backdrop-blur-md shadow-lg font-bold">
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>WELCOME TO PRABHAA HOTELS</span>
            <Sparkles className="w-3 h-3 text-gold-400" />
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-tight mb-3 drop-shadow-xl">
            A Stay Beyond{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-200 to-gold-400">
              Expectations
            </span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed mb-3 drop-shadow-sm max-w-xl mx-auto">
            Discover comfort, elegance, and exceptional hospitality across our two distinctive properties in Chittoor.
          </p>

          {/* Active Slide Feature Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/85 border border-gold-500/30 text-[11px] text-slate-200 backdrop-blur-md shadow-md mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping"></span>
            <span className="font-bold text-gold-300">{HERO_SLIDES[currentSlide].title}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">{HERO_SLIDES[currentSlide].subtitle}</span>
          </div>

        </div>

        {/* Section Divider / Label */}
        <div className="text-center mb-3.5">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-300 font-bold bg-slate-900/90 px-3.5 py-1 rounded-full border border-gold-500/30 backdrop-blur-md shadow-md">
            — CHOOSE YOUR HOTEL DESTINATION —
          </span>
        </div>

        {/* Two Compact Side-by-Side Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          
          {/* Card 1: Prabhaa Grand Inn */}
          <div
            className="group relative rounded-xl p-5 sm:p-6 bg-white/95 backdrop-blur-2xl border border-gold-400/40 hover:border-gold-500 transition-all duration-300 shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
          >
            {/* Top gold bar */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-gold-400 to-gold-600"></div>

            <div>
              <div className="flex items-center justify-between text-[11px] text-gold-700 mb-1">
                <span className="tracking-widest uppercase font-bold">Flagship Hotel</span>
                <span className="flex items-center gap-1 text-slate-600 font-medium">
                  <MapPin className="w-3 h-3 text-gold-600" /> M.S.R Circle
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-slate-900 font-bold group-hover:text-gold-700 transition-colors">
                Prabhaa Grand Inn
              </h3>

              <p className="text-xs text-slate-600 font-normal mt-1.5 leading-relaxed">
                30 luxurious A/C rooms, Annapurna Veg, Amaravathi Non-Veg, and Darbar Function Hall.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
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
            <div className="mt-5 pt-3.5 border-t border-stone-150 flex items-center justify-between gap-2.5">
              <Link
                to="/hotels/grand-inn"
                className="btn-gold text-xs px-4 py-2.5 flex items-center gap-1.5 flex-1 justify-center rounded-lg font-bold shadow-sm"
              >
                <span>Discover Grand Inn</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+918572233133"
                className="btn-outline-gold text-xs px-3.5 py-2.5 shrink-0 flex items-center gap-1 rounded-lg font-semibold bg-white"
              >
                <Phone className="w-3 h-3 text-gold-600" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* Card 2: Prabaa Royal Park */}
          <div
            className="group relative rounded-xl p-5 sm:p-6 bg-white/95 backdrop-blur-2xl border border-gold-400/40 hover:border-gold-500 transition-all duration-300 shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
          >
            {/* Top gold bar */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-gold-400 to-gold-600"></div>

            <div>
              <div className="flex items-center justify-between text-[11px] text-gold-700 mb-1">
                <span className="tracking-widest uppercase font-bold">Business Class Hotel</span>
                <span className="flex items-center gap-1 text-slate-600 font-medium">
                  <MapPin className="w-3 h-3 text-gold-600" /> Church Street
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-slate-900 font-bold group-hover:text-gold-700 transition-colors">
                Prabaa Royal Park
              </h3>

              <p className="text-xs text-slate-600 font-normal mt-1.5 leading-relaxed">
                30 modern guest rooms, 100% Pure Veg with 350+ dishes, and The Royal Hall.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
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
            <div className="mt-5 pt-3.5 border-t border-stone-150 flex items-center justify-between gap-2.5">
              <Link
                to="/hotels/royal-park"
                className="btn-gold text-xs px-4 py-2.5 flex items-center gap-1.5 flex-1 justify-center rounded-lg font-bold shadow-sm"
              >
                <span>Discover Royal Park</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+918572233111"
                className="btn-outline-gold text-xs px-3.5 py-2.5 shrink-0 flex items-center gap-1 rounded-lg font-semibold bg-white"
              >
                <Phone className="w-3 h-3 text-gold-600" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* 4 Interactive Slide Navigation Indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-6">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === currentSlide
                  ? 'w-6 h-2 bg-gradient-to-r from-gold-400 to-gold-600 shadow-md'
                  : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
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
