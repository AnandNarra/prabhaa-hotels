import React from 'react';
import { CheckCircle2, Clock, MapPin, Navigation, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export const HotelAbout = ({ hotel }) => {
  return (
    <section id="overview" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="ABOUT THE PROPERTY"
          title={`Welcome to ${hotel.name}`}
          subtitle={hotel.description}
        />

        {/* Highlights & Transit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-12">
          
          {/* Left: Highlights Cards */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif text-2xl text-slate-900 font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-600" />
              <span>Key Features & Amenities</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hotel.highlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-md bg-ivory-50 border border-slate-200 hover:border-gold-300 transition-all shadow-sm group"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-base text-slate-900 font-bold group-hover:text-gold-700 transition-colors">
                        {hl.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">
                        {hl.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* In-house services callout */}
            <div className="p-4 rounded-md bg-gold-50 border border-gold-300 flex items-center justify-between text-xs text-slate-700 mt-4 shadow-sm">
              <span className="flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
                24/7 Front Office Desk, Secure Parking, Generator Backup & Daily Sanitization.
              </span>
              <a
                href={`tel:${hotel.contact.phones[0].replace(/\s/g, '')}`}
                className="text-gold-800 hover:underline font-bold shrink-0 ml-2"
              >
                Call Front Desk
              </a>
            </div>
          </div>

          {/* Right: Transit & Connectivity Box */}
          <div className="lg:col-span-5 bg-ivory-50 p-6 sm:p-8 rounded-md border border-gold-300 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <h3 className="font-serif text-xl text-slate-900 font-bold">Strategic Location</h3>
                <p className="text-xs text-slate-500 mt-0.5">Connectivity & Proximity</p>
              </div>
              <Navigation className="w-6 h-6 text-gold-600" />
            </div>

            <div className="space-y-4">
              {hotel.transitInfo.map((info, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs py-2 border-b border-slate-200 last:border-0">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-gold-600" />
                    <span>{info.landmark}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-900">{info.distance}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {info.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
              <span className="text-slate-900 font-bold">Address: </span>
              {hotel.contact.address}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HotelAbout;
