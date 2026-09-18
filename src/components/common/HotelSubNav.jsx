import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftRight, Phone } from 'lucide-react';

export const HotelSubNav = ({ hotel, otherHotel }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'rooms', label: 'Rooms & Tariff' },
    { id: 'dining', label: 'Dining' },
    { id: 'events', label: hotel.id === 'royal-park' ? 'The Royal Hall' : 'Darbar Hall' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Location & Contact' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -130;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.pageYOffset;
          const elementBottom = bottom + window.pageYOffset;
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-16 lg:top-[68px] z-30 bg-white/95 backdrop-blur-md border-y border-gold-200 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 overflow-x-auto no-scrollbar gap-4">
          
          {/* Left: Property Title Badge */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="font-serif font-bold text-sm sm:text-base text-slate-900 tracking-wide">
              {hotel.name}
            </span>
          </div>

          {/* Center: In-Page Section Scroll Links */}
          <div className="flex items-center space-x-1 sm:space-x-2 shrink-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-sm text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-gold-700 bg-gold-50 border-b-2 border-gold-500 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right: Switcher & Fast Call */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to={`/hotels/${otherHotel.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs text-slate-700 bg-ivory-100 hover:bg-gold-100 border border-gold-300 transition-colors whitespace-nowrap font-medium group"
              title={`Switch to ${otherHotel.name}`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5 text-gold-600 group-hover:rotate-180 transition-transform duration-300" />
              <span className="hidden sm:inline">Explore</span>
              <span className="font-serif font-bold text-slate-900">{otherHotel.name}</span>
            </Link>

            <a
              href={`tel:${hotel.contact.phones[0].replace(/\s/g, '')}`}
              className="btn-gold text-xs px-3.5 py-1.5 flex items-center gap-1.5 shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Call Desk</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HotelSubNav;
