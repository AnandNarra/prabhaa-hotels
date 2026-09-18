import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { brandData } from '../../data/brandData';

export const Experiences = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="DISTINCTIVE CURATIONS"
          title="The Prabhaa Signature Experiences"
          subtitle="From bespoke suite stays and signature Andhra culinary dishes to grand wedding receptions and doorstep outdoor catering."
        />

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {brandData.experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative rounded-md overflow-hidden border border-slate-200 hover:border-gold-400 bg-ivory-50 transition-all duration-300 hover:-translate-y-1.5 shadow-md flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded bg-white/95 backdrop-blur-md border border-gold-300 text-[10px] uppercase tracking-wider text-gold-800 font-bold shadow-sm">
                  {exp.subtitle}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-serif text-xl text-slate-900 font-bold mb-2 group-hover:text-gold-700 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    {exp.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 mb-4">
                    {exp.hotels.map((h, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-0.5 rounded bg-ivory-100 text-slate-700 border border-slate-200 font-medium">
                        {h}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/experiences"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-700 hover:text-gold-900 tracking-wider uppercase group/link"
                  >
                    <span>Explore Experience</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Bottom Gold Line on Hover */}
              <div className="h-1 w-0 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}

          {/* Quick Booking Callout Card */}
          <div className="rounded-md border border-gold-300 bg-gradient-to-br from-ivory-100 via-white to-gold-50 p-8 flex flex-col justify-between text-center relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl"></div>
            
            <div className="my-auto">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold-100 border border-gold-400 flex items-center justify-center text-gold-700">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-slate-900 font-bold mb-3">
                Plan a Grand Celebration
              </h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed mb-6">
                Host your dream wedding or corporate banquet at Darbar Function Hall or The Royal Hall. Customized multi-cuisine catering available.
              </p>
              <Link
                to="/contact"
                className="btn-gold text-xs px-6 py-3.5 inline-flex items-center gap-2 shadow-md"
              >
                <span>Enquire for Events</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experiences;
