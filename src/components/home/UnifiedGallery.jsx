import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { galleryCategories, galleryItems } from '../../data/galleryData';
import { useLightbox } from '../../context/LightboxContext';

export const UnifiedGallery = ({ limit = 8, showFilter = true, isPage = false }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { openLightbox } = useLightbox();

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category.includes(activeFilter);
  });

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className={`py-20 ${isPage ? 'pt-28' : ''} bg-ivory-50 relative overflow-hidden border-t border-slate-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {!isPage && (
          <SectionHeading
            eyebrow="IMMERSIVE VISUALS"
            title="A Glimpse into Prabhaa Hotels"
            subtitle="Explore our luxury rooms, authentic restaurant outlets, and regal event halls through our curated gallery."
          />
        )}

        {/* Filter Categories */}
        {showFilter && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-sm text-xs uppercase tracking-wider transition-all font-bold ${
                  activeFilter === cat.id
                    ? 'bg-gold-500 text-white shadow-md border border-gold-600'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-gold-300 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(displayItems, idx)}
              className="group relative h-64 sm:h-72 rounded-md overflow-hidden cursor-pointer border border-slate-200 hover:border-gold-400 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity"></div>

              {/* Hover Badge / Action */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-gold-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-md">
                <Eye className="w-4 h-4" />
              </div>

              {/* Caption Content */}
              <div className="absolute bottom-0 inset-x-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform text-white">
                <div className="text-[10px] tracking-widest uppercase text-gold-300 font-bold mb-1">
                  {item.property === 'grand-inn' ? 'Prabhaa Grand Inn' : 'Prabaa Royal Park'}
                </div>
                <h3 className="font-serif text-sm font-medium text-white group-hover:text-gold-100 transition-colors line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button if limited */}
        {limit && galleryItems.length > limit && (
          <div className="text-center mt-12">
            <a
              href="/gallery"
              className="btn-outline-gold text-xs px-8 py-3.5 inline-flex items-center gap-2"
            >
              <span>Explore Complete Gallery</span>
              <Sparkles className="w-4 h-4 text-gold-600" />
            </a>
          </div>
        )}

      </div>
    </section>
  );
};

export default UnifiedGallery;
