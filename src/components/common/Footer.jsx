import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { hotelsData } from '../../data/hotelsData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 border-t border-gold-200 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-radial-glow opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 border-b border-slate-200 gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-sm p-1 bg-gradient-to-b from-gold-100 to-white border border-gold-300 shadow-sm flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Prabhaa Hotels Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.3)]"
              />
            </div>
            <div>
              <div className="font-serif tracking-[0.22em] text-2xl font-bold text-slate-900 uppercase">
                PRABHAA HOTELS
              </div>
              <div className="text-xs tracking-[0.2em] text-gold-700 font-semibold mt-0.5">
                TWO DESTINATIONS. ONE STANDARD OF HOSPITALITY.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded bg-slate-50 border border-slate-200 hover:border-gold-400 hover:text-gold-700 flex items-center justify-center transition-all text-xs font-bold text-slate-700"
            >
              FB
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded bg-slate-50 border border-slate-200 hover:border-gold-400 hover:text-gold-700 flex items-center justify-center transition-all text-xs font-bold text-slate-700"
            >
              IG
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 rounded bg-slate-50 border border-slate-200 hover:border-gold-400 hover:text-gold-700 flex items-center justify-center transition-all text-xs font-bold text-slate-700"
            >
              TW
            </a>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-slate-200">
          
          {/* Col 1: Brand Summary */}
          <div>
            <h4 className="font-serif text-slate-900 font-bold text-lg tracking-wide mb-3">
              About Prabhaa Hotels
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
              Chittoor's esteemed hospitality brand offering world-class accommodations, celebrated multi-cuisine & pure vegetarian restaurants, and grand celebratory banquets.
            </p>
            <div className="text-xs text-gold-700 font-semibold">
              Registered in Chittoor, Andhra Pradesh, India
            </div>
          </div>

          {/* Col 2: Property 1 - Grand Inn */}
          <div className="space-y-3">
            <h4 className="font-serif text-slate-900 font-bold text-base flex items-center justify-between">
              <span>Prabhaa Grand Inn</span>
              <Link to="/hotels/grand-inn" className="text-xs text-gold-600 hover:underline flex items-center gap-0.5 font-bold">
                View <ArrowUpRight className="w-3 h-3" />
              </Link>
            </h4>
            <div className="text-xs space-y-2 text-slate-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                <span>#15-2143, Rajiv Gandhi Road, M.S.R Circle, Chittoor - 517 001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <a href="tel:+918572233133" className="hover:text-gold-700 font-medium">+91 8572 233133</a> / <a href="tel:+919581711150" className="hover:text-gold-700 font-medium">95817 11150</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <a href="mailto:fom@prabhaagrandinn.in" className="hover:text-gold-700 font-medium">fom@prabhaagrandinn.in</a>
              </p>
            </div>
            <div className="pt-1 text-[11px] text-slate-500 font-medium">
              • 30 A/C Rooms • Annapurna Veg • Amaravathi Non-Veg • Darbar Hall
            </div>
          </div>

          {/* Col 3: Property 2 - Royal Park */}
          <div className="space-y-3">
            <h4 className="font-serif text-slate-900 font-bold text-base flex items-center justify-between">
              <span>Prabaa Royal Park</span>
              <Link to="/hotels/royal-park" className="text-xs text-gold-600 hover:underline flex items-center gap-0.5 font-bold">
                View <ArrowUpRight className="w-3 h-3" />
              </Link>
            </h4>
            <div className="text-xs space-y-2 text-slate-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                <span>D.No 18-872 to 874, Church Street, Chittoor - 517 001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <a href="tel:+918572233111" className="hover:text-gold-700 font-medium">+91 8572 233111</a> / <a href="tel:+919581711172" className="hover:text-gold-700 font-medium">95817 11172</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <a href="mailto:fom@prabaaroyalpark.com" className="hover:text-gold-700 font-medium">fom@prabaaroyalpark.com</a>
              </p>
            </div>
            <div className="pt-1 text-[11px] text-slate-500 font-medium">
              • 30 Rooms • 100% Pure Veg • Sweets & Savouries • The Royal Hall
            </div>
          </div>

          {/* Col 4: Quick Navigation & Transit */}
          <div>
            <h4 className="font-serif text-slate-900 font-bold text-lg tracking-wide mb-3">
              Explore & Transit
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/hotels" className="hover:text-gold-700 font-medium transition-colors">Our Two Hotels</Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-gold-700 font-medium transition-colors">Dining & Banquets</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-700 font-medium transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-700 font-medium transition-colors">Contact & Directions</Link>
              </li>
            </ul>

            <div className="mt-4 p-3 bg-ivory-100 rounded border border-gold-200 text-[11px] text-slate-700 space-y-1 font-medium">
              <div className="text-gold-800 font-bold">Proximity & Transit:</div>
              <div>• Chittoor Railway Station: ~1 Km</div>
              <div>• Chittoor Bus Terminal: ~1 Km</div>
              <div>• Tirupati Airport: ~75 Km</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {currentYear} <span className="text-slate-800 font-semibold">Prabhaa Hotels Group</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-slate-900">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-900">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-900">Contact Desk</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
