import React, { useEffect } from 'react';
import Experiences from '../components/home/Experiences';
import { Link } from 'react-router-dom';

export const ExperiencesPage = () => {
  useEffect(() => {
    document.title = "Hospitality Experiences | Dining, Stays & Banquets | Prabhaa Hotels";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBF7] pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Experiences />

        {/* Deep Dive: Dining Comparison */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-white border border-stone-200/90 shadow-xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-bold mb-2 block">
              OUR DINING DESTINATIONS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-slate-900 font-semibold">
              A Symphony of Authentic Flavors
            </h3>
            <p className="text-sm text-slate-600 font-normal mt-3 leading-relaxed">
              Whether you crave authentic Andhra spicy gravies or traditional South Indian pure vegetarian thalis, Prabhaa Hotels offers unparalleled dining outlets in Chittoor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Grand Inn Outlets */}
            <div className="p-7 rounded-xl bg-stone-50 border border-stone-200 space-y-4 hover:border-gold-400 transition-colors shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gold-700 font-bold uppercase tracking-wider">Prabhaa Grand Inn</span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-800 font-semibold">Multi-Cuisine</span>
              </div>
              <h4 className="font-serif text-xl text-slate-900 font-semibold">Annapurna & Amaravathi Restaurants</h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Home to the celebrated Amaravathi Non-Veg restaurant known for Hyderabadi biryanis and Andhra spicy curries, alongside Annapurna Pure Vegetarian dining and the upcoming Touch Bar lounge.
              </p>
              <Link to="/hotels/grand-inn#dining" className="inline-block text-xs text-gold-700 hover:text-gold-800 hover:underline font-bold">
                Explore Grand Inn Dining →
              </Link>
            </div>

            {/* Royal Park Outlets */}
            <div className="p-7 rounded-xl bg-stone-50 border border-stone-200 space-y-4 hover:border-gold-400 transition-colors shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gold-700 font-bold uppercase tracking-wider">Prabaa Royal Park</span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-800 font-semibold">100% Pure Veg</span>
              </div>
              <h4 className="font-serif text-xl text-slate-900 font-semibold">350+ Pure Veg Delicacies & Sweets</h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Featuring air-conditioned and non-A/C vegetarian dining, pure ghee traditional sweets & savouries counter, Yummy Foods fast snack station, and high-capacity outdoor event catering.
              </p>
              <Link to="/hotels/royal-park#dining" className="inline-block text-xs text-gold-700 hover:text-gold-800 hover:underline font-bold">
                Explore Royal Park Dining →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExperiencesPage;
