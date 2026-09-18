import React, { useEffect } from 'react';
import { X, Check, Users, Bed, Maximize2, Phone } from 'lucide-react';

export const RoomModal = ({ room, hotel, onClose }) => {
  // Lock background scroll and handle Escape key
  useEffect(() => {
    if (!room) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [room, onClose]);

  if (!room) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white border border-gold-300 rounded-2xl shadow-2xl overflow-hidden text-slate-800 my-auto">
        
        {/* Close Button on Top Right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-white/95 text-slate-800 hover:text-gold-600 hover:bg-white shadow-lg transition-all cursor-pointer border border-stone-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto flex-1">
          {/* Modal Header Image */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-3 text-white">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-300 font-bold">
                  {hotel.name}
                </span>
                <h3 className="font-serif text-xl sm:text-3xl font-bold text-white mt-0.5">
                  {room.name}
                </h3>
              </div>

              <div className="bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gold-300 text-right shadow-md">
                <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase block font-bold">Tariff Rate</span>
                <span className="font-serif text-lg sm:text-xl font-bold text-slate-900">{room.tariff}</span>
                <span className="text-[10px] sm:text-xs text-slate-500 ml-1 font-medium">{room.taxInfo}</span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">
            {/* Quick Specs Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 rounded-xl bg-ivory-50 border border-gold-200 text-center text-xs">
              <div>
                <span className="text-slate-500 block mb-0.5 text-[10px] sm:text-xs font-medium">Room Area</span>
                <span className="font-bold text-slate-900 flex items-center justify-center gap-1 text-[11px] sm:text-xs">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  {room.size}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5 text-[10px] sm:text-xs font-medium">Bedding Type</span>
                <span className="font-bold text-slate-900 flex items-center justify-center gap-1 text-[11px] sm:text-xs truncate">
                  <Bed className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span className="truncate">{room.bedType}</span>
                </span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5 text-[10px] sm:text-xs font-medium">Guest Occupancy</span>
                <span className="font-bold text-slate-900 flex items-center justify-center gap-1 text-[11px] sm:text-xs">
                  <Users className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  {room.occupancy}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-serif text-base sm:text-lg text-slate-900 font-bold mb-1.5">Room Overview</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Amenities List */}
            <div>
              <h4 className="font-serif text-base sm:text-lg text-slate-900 font-bold mb-2.5">Room Inclusions & Amenities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-slate-200 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4 shrink-0">
          <button
            onClick={onClose}
            className="btn-secondary text-xs py-2.5 px-5 justify-center cursor-pointer"
          >
            Close
          </button>

          <a
            href={`tel:${hotel.contact.phones[0].replace(/\s/g, '')}`}
            className="btn-gold text-xs py-2.5 px-4 sm:px-6 flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Call Reception ({hotel.contact.phones[0]})</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default RoomModal;
