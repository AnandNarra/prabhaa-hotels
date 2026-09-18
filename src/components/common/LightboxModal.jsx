import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';
import { useLightbox } from '../../context/LightboxContext';

export const LightboxModal = () => {
  const { isOpen, currentImage, currentIndex, totalImages, closeLightbox, nextImage, prevImage } = useLightbox();

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, nextImage, prevImage, closeLightbox]);

  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 animate-fade-in">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between text-white pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="font-serif font-medium text-gold-400">
            Prabhaa Hotels Gallery
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-xs text-slate-400">
            {currentIndex + 1} of {totalImages}
          </span>
        </div>

        <button
          onClick={closeLightbox}
          className="p-2 rounded-full bg-charcoal-900 border border-slate-700 hover:border-gold-400 text-slate-300 hover:text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 w-full max-w-5xl flex items-center justify-center my-4 overflow-hidden">
        {/* Prev Button */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-charcoal-900/80 border border-gold-500/30 text-white hover:bg-gold-500 hover:text-charcoal-950 transition-all shadow-xl"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-charcoal-900/80 border border-gold-500/30 text-white hover:bg-gold-500 hover:text-charcoal-950 transition-all shadow-xl"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Display Image */}
        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-sm shadow-2xl border border-gold-500/20"
        />
      </div>

      {/* Bottom Caption & Tags */}
      <div className="w-full max-w-3xl bg-charcoal-900/90 border border-gold-500/20 rounded-sm p-4 text-center">
        <h3 className="font-serif text-lg text-white font-medium">
          {currentImage.title}
        </h3>
        {currentImage.caption && (
          <p className="text-xs text-slate-400 mt-1">
            {currentImage.caption}
          </p>
        )}
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30">
            {currentImage.property === 'grand-inn' ? 'Prabhaa Grand Inn' : 'Prabaa Royal Park'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;
