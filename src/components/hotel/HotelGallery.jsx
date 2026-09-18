import React from 'react';
import { Eye } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { galleryItems } from '../../data/galleryData';
import { useLightbox } from '../../context/LightboxContext';

export const HotelGallery = ({ hotel }) => {
  const { openLightbox } = useLightbox();
  const hotelPhotos = galleryItems.filter(item => item.property === hotel.id);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="PROPERTY GALLERY"
          title={`${hotel.name} in Pictures`}
          subtitle={`Browse through high-definition impressions of rooms, restaurant spaces, and banquet halls at ${hotel.name}.`}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotelPhotos.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(hotelPhotos, idx)}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden cursor-pointer border border-stone-200/90 hover:border-gold-500 transition-all duration-500 shadow-md hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity"></div>

              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-gold-500/40 text-gold-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                <Eye className="w-4 h-4" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-4">
                <h3 className="font-serif text-sm font-semibold text-white group-hover:text-gold-300 transition-colors drop-shadow-sm">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HotelGallery;
