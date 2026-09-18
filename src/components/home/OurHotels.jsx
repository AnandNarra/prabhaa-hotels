import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, BedDouble, UtensilsCrossed, Phone, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { hotelsData } from '../../data/hotelsData';

export const OurHotels = () => {
  return (
    <section id="our-hotels" className="py-20 lg:py-28 bg-ivory-50 relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR TWO DISTINCTIVE PROPERTIES"
          title="Choose Your Prabhaa Experience"
          subtitle="Whether you seek the executive luxury of Prabhaa Grand Inn or the 100% pure vegetarian business class comfort of Prabaa Royal Park."
        />

        {/* Dual Property Showcase Cards */}
        <div className="space-y-16">
          
          {/* Property 1: Prabhaa Grand Inn */}
          <div className="bg-white rounded-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-gold-300 shadow-xl group">
            
            {/* Image Side */}
            <div className="lg:col-span-6 relative overflow-hidden min-h-[340px] lg:min-h-[460px]">
              <img
                src={hotelsData.grandInn.heroImage}
                alt={hotelsData.grandInn.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-gold-400 px-3.5 py-1 text-xs text-gold-700 font-bold tracking-wider uppercase rounded-sm shadow-sm">
                FLAGSHIP PROPERTY • ESTD 2016
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between text-xs text-slate-700 shadow-md">
                <span className="flex items-center gap-1.5 text-gold-700 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-gold-600" />
                  Rajiv Gandhi Road, M.S.R Circle, Chittoor
                </span>
                <span className="text-slate-500 font-medium">1 Km from Station</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="text-xs uppercase tracking-widest text-gold-700 font-bold mb-2">
                  HOTEL & MULTI-CUISINE DESTINATION
                </div>
                
                <h3 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold mb-2">
                  Prabhaa Grand Inn
                </h3>

                <p className="font-serif italic text-gold-700 text-sm mb-4 font-medium">
                  "Comfort. Convenience. Hospitality."
                </p>

                <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
                  {hotelsData.grandInn.description}
                </p>

                {/* Property Highlights list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>30 Luxurious A/C Rooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>Annapurna Veg Restaurant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>Amaravathi Non-Veg Restaurant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>Darbar Function Hall (350+)</span>
                  </div>
                </div>

                {/* Rooms Preview Mini Badges */}
                <div className="p-3.5 bg-ivory-100 rounded border border-gold-200 text-xs mb-6">
                  <div className="text-gold-800 text-[11px] uppercase tracking-wider font-bold mb-2">
                    Available Room Categories
                  </div>
                  <div className="flex flex-wrap gap-2 text-slate-700 font-medium">
                    <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-sm">Executive (₹2,499)</span>
                    <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-sm">Club (₹2,999)</span>
                    <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-sm">Suite (₹3,999)</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <Link
                  to="/hotels/grand-inn"
                  className="btn-gold text-xs px-6 py-3 flex items-center gap-2 shadow-sm"
                >
                  <span>Explore Grand Inn</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${hotelsData.grandInn.contact.phones[0].replace(/\s/g, '')}`}
                  className="btn-outline-gold text-xs px-6 py-3 flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Reception</span>
                </a>
              </div>
            </div>

          </div>

          {/* Property 2: Prabaa Royal Park */}
          <div className="bg-white rounded-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-gold-300 shadow-xl group">
            
            {/* Image Side */}
            <div className="lg:col-span-6 relative overflow-hidden min-h-[340px] lg:min-h-[460px] lg:order-2">
              <img
                src={hotelsData.royalPark.heroImage}
                alt={hotelsData.royalPark.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-gold-400 px-3.5 py-1 text-xs text-gold-700 font-bold tracking-wider uppercase rounded-sm shadow-sm">
                BUSINESS CLASS & PURE VEG • ESTD 2021
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between text-xs text-slate-700 shadow-md">
                <span className="flex items-center gap-1.5 text-gold-700 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-gold-600" />
                  Church Street, Chittoor
                </span>
                <span className="text-slate-500 font-medium">0.8 Km from Station</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-white lg:order-1">
              <div>
                <div className="text-xs uppercase tracking-widest text-gold-700 font-bold mb-2">
                  100% PURE VEGETARIAN HOSPITALITY
                </div>
                
                <h3 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold mb-2">
                  Prabaa Royal Park
                </h3>

                <p className="font-serif italic text-gold-700 text-sm mb-4 font-medium">
                  "Where Every Stay Is Unique."
                </p>

                <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
                  {hotelsData.royalPark.description}
                </p>

                {/* Property Highlights list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>30 Contemporary Rooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>350+ Pure Veg Dishes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>Sweets & Savouries Counter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>The Royal Hall (400+ Guests)</span>
                  </div>
                </div>

                {/* Rooms Preview Mini Badges */}
                <div className="p-3.5 bg-ivory-100 rounded border border-gold-200 text-xs mb-6">
                  <div className="text-gold-800 text-[11px] uppercase tracking-wider font-bold mb-2">
                    Available Room Categories
                  </div>
                  <div className="flex flex-wrap gap-2 text-slate-700 font-medium">
                    <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-sm">Standard (₹1,540)</span>
                    <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-sm">Executive (₹1,650)</span>
                    <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-sm">Mini Suite (₹1,980)</span>
                    <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-sm">Royal Suite (₹2,530)</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <Link
                  to="/hotels/royal-park"
                  className="btn-gold text-xs px-6 py-3 flex items-center gap-2 shadow-sm"
                >
                  <span>Explore Royal Park</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${hotelsData.royalPark.contact.phones[0].replace(/\s/g, '')}`}
                  className="btn-outline-gold text-xs px-6 py-3 flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Reception</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurHotels;
