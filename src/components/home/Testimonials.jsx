import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { brandData } from '../../data/brandData';

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="GUEST EXPERIENCES"
          title="Words of Appreciation"
          subtitle="Real reviews and feedback from travelers, corporate executives, and wedding hosts who stayed with Prabhaa Hotels."
        />

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {brandData.testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="p-8 rounded-md bg-ivory-50 border border-gold-200 hover:border-gold-400 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 relative group"
            >
              <Quote className="w-10 h-10 text-gold-300/40 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-gold-500 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 font-normal italic leading-relaxed mb-6">
                  "{testi.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-serif text-slate-900 font-bold text-base group-hover:text-gold-700 transition-colors">
                    {testi.author}
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-gold-600" />
                    {testi.location}
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-white text-gold-700 font-bold border border-gold-200 shadow-sm">
                  {testi.property}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
