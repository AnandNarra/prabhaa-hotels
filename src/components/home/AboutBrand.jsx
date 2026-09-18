import React from 'react';
import { Bed, Utensils, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { brandData } from '../../data/brandData';

export const AboutBrand = () => {
  const iconMap = {
    Bed: Bed,
    Utensils: Utensils,
    Sparkles: Sparkles,
    MapPin: MapPin,
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background Ornaments */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="THE PRABHAA STANDARD"
          title="Two Destinations. One Hospitality Group."
          subtitle="Combining refined accommodations, exceptional multi-cuisine and pure vegetarian dining, and state-of-the-art event venues across Chittoor."
        />

        {/* Brand Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {brandData.brandStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-md bg-ivory-50 border border-gold-200 text-center shadow-sm hover:border-gold-400 transition-all hover:-translate-y-1 group"
            >
              <div className="font-serif text-2xl lg:text-3xl font-bold text-gold-600 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-md overflow-hidden border border-gold-300 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                alt="Prabhaa Hospitality"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-white/95 backdrop-blur-md border border-gold-300 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-100 border border-gold-400 flex items-center justify-center text-gold-700 font-serif font-bold text-lg">
                    P
                  </div>
                  <div>
                    <div className="text-slate-900 font-serif font-bold text-sm">Chittoor's Premier Hotel Group</div>
                    <div className="text-xs text-gold-700 font-semibold">Serving Guests with Passion Since 2016</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Accent Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-3/4 h-3/4 border-2 border-gold-300 rounded-md -z-0"></div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] text-gold-700 font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>THE PRABHAA EXPERIENCE</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold leading-tight">
              Hospitality Rooted in Warmth, Quality and Trust
            </h3>

            <p className="text-slate-600 leading-relaxed font-normal text-base">
              At Prabhaa Hotels, our mission is to create comfortable, welcoming, and memorable stays for every visitor arriving in Chittoor. Whether you are in town for an important business summit, traveling with family to visit Kanipakam temple, hosting a grand wedding, or stopping for an authentic meal, we deliver excellence in every detail.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Central Locations in Chittoor</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Both properties are within 1 km of the railway station and bus terminals.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Diverse Dining Choices</h4>
                  <p className="text-xs text-slate-600 mt-0.5">From 100% pure vegetarian culinary masters to legendary Andhra spicy non-veg.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Prestigious Banquet Venues</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Darbar Function Hall & The Royal Hall with complete catering and audio-visual setups.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandData.corePillars.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="p-6 rounded-md bg-ivory-50 border border-slate-200 hover:border-gold-400 transition-all duration-300 hover:-translate-y-1 shadow-sm group"
              >
                <div className="w-12 h-12 rounded-md bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-700 mb-5 group-hover:bg-gold-500 group-hover:text-white transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg text-slate-900 font-bold mb-2 group-hover:text-gold-700 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutBrand;
