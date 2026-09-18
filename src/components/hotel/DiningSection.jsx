import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export const DiningSection = ({ hotel }) => {
  return (
    <section id="dining" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CULINARY EXCELLENCE"
          title={hotel.id === 'royal-park' ? "100% Pure Vegetarian Dining & Outlets" : "Dining & Beverage Outlets"}
          subtitle={`Experience handcrafted flavors, authentic regional recipes, and exceptional hospitality at ${hotel.name}.`}
        />

        {/* Dining Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotel.dining.map((outlet) => (
            <div
              key={outlet.id}
              className="bg-ivory-50 rounded-md overflow-hidden border border-slate-200 hover:border-gold-400 transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl flex flex-col justify-between group"
            >
              {/* Outlet Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={outlet.image}
                  alt={outlet.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

                {/* Type Pill */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-[10px] uppercase tracking-wider text-gold-800 font-bold border border-gold-300 shadow-sm">
                  {outlet.type}
                </div>

                {/* Timing Badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-xs text-slate-200 border border-slate-700 font-medium">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>{outlet.timing}</span>
                </div>
              </div>

              {/* Outlet Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <div>
                  <h3 className="font-serif text-2xl text-slate-900 font-bold mb-2 group-hover:text-gold-700 transition-colors">
                    {outlet.name}
                  </h3>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed mb-4">
                    {outlet.description}
                  </p>

                  {/* Signature Specialties */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <div className="text-[11px] uppercase tracking-wider text-gold-700 font-bold">
                      Signature Specialties
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {outlet.specialties.map((item, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-ivory-100 border border-slate-200 text-slate-700 font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-xs text-slate-600">
                  {outlet.features.map((feat, i) => (
                    <span key={i} className="flex items-center gap-1 text-[11px] font-medium">
                      <CheckCircle2 className="w-3 h-3 text-gold-600" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DiningSection;
