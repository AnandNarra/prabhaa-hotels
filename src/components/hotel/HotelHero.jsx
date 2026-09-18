import React from 'react';
import { Sparkles, Phone, ChevronDown, MapPin, BedDouble } from 'lucide-react';

export const HotelHero = ({ hotel }) => {
  const scrollToRooms = () => {
    const el = document.getElementById('rooms');
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hotel.heroImage}
          alt={hotel.name}
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.05] scale-105 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-gold-300 text-gold-800 text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 backdrop-blur-md shadow-md font-bold">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>{hotel.heroEyebrow}</span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-tight mb-4 drop-shadow-md">
          {hotel.name}
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-400 max-w-2xl mx-auto mb-6 drop-shadow-sm font-medium">
          "{hotel.tagline}"
        </p>

        {/* Location & Room Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-200 mb-10">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900/80 backdrop-blur-sm border border-slate-700 font-medium">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            {hotel.contact.address.split(',')[0]}, Chittoor
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900/80 backdrop-blur-sm border border-slate-700 font-medium">
            <BedDouble className="w-3.5 h-3.5 text-gold-400" />
            {hotel.roomCount}
          </span>
        </div>

        {/* Dual Actions: Explore Rooms & Contact Reception */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 max-w-lg mx-auto">
          <button
            onClick={scrollToRooms}
            className="btn-gold text-xs sm:text-sm px-5 sm:px-8 py-3 sm:py-3.5 flex items-center justify-center gap-2 shadow-xl"
          >
            <BedDouble className="w-4 h-4 shrink-0" />
            <span>Explore Rooms & Tariff</span>
          </button>

          <button
            onClick={scrollToContact}
            className="btn-outline-gold text-xs sm:text-sm px-5 sm:px-8 py-3 sm:py-3.5 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Contact Reception</span>
          </button>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-slate-300 flex flex-col items-center gap-1 opacity-80">
        <span className="text-[10px] tracking-widest uppercase text-gold-300 font-bold">Scroll Down</span>
        <ChevronDown className="w-4 h-4 text-gold-300 animate-bounce" />
      </div>
    </section>
  );
};

export default HotelHero;
