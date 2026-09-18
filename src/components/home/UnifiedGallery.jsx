import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { galleryCategories, galleryItems } from '../../data/galleryData';
import { useLightbox } from '../../context/LightboxContext';

export const UnifiedGallery = ({ limit = 8, showFilter = true, isPage = false }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mobilePage, setMobilePage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const { openLightbox } = useLightbox();

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category.includes(activeFilter);
  });

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  // Mobile pagination (4 items per page)
  const itemsPerPageMobile = 4;
  const totalMobilePages = Math.max(1, Math.ceil(displayItems.length / itemsPerPageMobile));
  const currentMobileItems = displayItems.slice(
    mobilePage * itemsPerPageMobile,
    (mobilePage + 1) * itemsPerPageMobile
  );

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && mobilePage < totalMobilePages - 1) {
      setMobilePage((prev) => prev + 1);
    } else if (isRightSwipe && mobilePage > 0) {
      setMobilePage((prev) => prev - 1);
    }
  };

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
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  setMobilePage(0);
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-[11px] sm:text-xs uppercase tracking-wider transition-all font-bold cursor-pointer ${
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

        {/* MOBILE VIEW: 2-Page Paginated Grid (4 items per page) with 1/2 Indicator */}
        <div className="block md:hidden">
          <div
            className="grid grid-cols-2 gap-3"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {currentMobileItems.map((item, localIdx) => {
              const globalIdx = mobilePage * itemsPerPageMobile + localIdx;
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(displayItems, globalIdx)}
                  className="group relative h-48 rounded-xl overflow-hidden cursor-pointer border border-stone-200 shadow-md hover:border-gold-400 transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>

                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 text-gold-700 flex items-center justify-center shadow-sm">
                    <Eye className="w-3 h-3" />
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-2.5 text-white">
                    <div className="text-[8px] tracking-wider uppercase text-gold-300 font-bold mb-0.5 truncate">
                      {item.property === 'grand-inn' ? 'Grand Inn' : 'Royal Park'}
                    </div>
                    <h3 className="font-serif text-xs font-semibold text-white line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Pagination Controls & 1/2 Indicator */}
          {totalMobilePages > 1 && (
            <div className="flex items-center justify-between mt-5 px-2">
              <button
                onClick={() => setMobilePage((prev) => Math.max(0, prev - 1))}
                disabled={mobilePage === 0}
                className="p-2 rounded-full border border-slate-200 bg-white text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gold-50 transition-colors shadow-xs"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalMobilePages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setMobilePage(i)}
                      className={`transition-all duration-300 rounded-full ${
                        i === mobilePage ? 'w-5 h-1.5 bg-gold-600' : 'w-1.5 h-1.5 bg-slate-300'
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-700 bg-stone-100 border border-stone-200 px-2.5 py-0.5 rounded-full">
                  {mobilePage + 1} / {totalMobilePages}
                </span>
              </div>

              <button
                onClick={() => setMobilePage((prev) => Math.min(totalMobilePages - 1, prev + 1))}
                disabled={mobilePage === totalMobilePages - 1}
                className="p-2 rounded-full border border-slate-200 bg-white text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gold-50 transition-colors shadow-xs"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* DESKTOP VIEW: Full 4-Column Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(displayItems, idx)}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden cursor-pointer border border-slate-200 hover:border-gold-400 transition-all duration-300 shadow-md hover:shadow-xl"
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

        {/* View Full Gallery Button */}
        {limit && galleryItems.length > limit && (
          <div className="text-center mt-10 sm:mt-12">
            <Link
              to="/gallery"
              className="btn-outline-gold text-xs px-8 py-3.5 inline-flex items-center justify-center gap-2 rounded-lg"
            >
              <span>Explore Complete Gallery</span>
              <Sparkles className="w-4 h-4 text-gold-600" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default UnifiedGallery;
