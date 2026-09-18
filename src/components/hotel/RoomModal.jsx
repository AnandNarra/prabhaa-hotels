import React from 'react';
import { X, Check, Users, Bed, Maximize2, Phone, ShieldCheck, Sparkles } from 'lucide-react';

export const RoomModal = ({ room, hotel, onClose }) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white border border-gold-300 rounded-md shadow-2xl overflow-hidden text-slate-800">
        
        {/* Modal Header */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-slate-800 hover:text-gold-600 shadow-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-4 text-white">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-300 font-bold">
                {hotel.name}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-0.5">
                {room.name}
              </h3>
            </div>

            <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-md border border-gold-300 text-right shadow-md">
              <span className="text-[10px] text-slate-500 uppercase block font-bold">Tariff Rate</span>
              <span className="font-serif text-xl font-bold text-slate-900">{room.tariff}</span>
              <span className="text-xs text-slate-500 ml-1 font-medium">{room.taxInfo}</span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Specs Bar */}
          <div className="grid grid-cols-3 gap-3 p-3 rounded-md bg-ivory-50 border border-gold-200 text-center text-xs">
            <div>
              <span className="text-slate-500 block mb-1 font-medium">Room Area</span>
              <span className="font-bold text-slate-900 flex items-center justify-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-gold-600" />
                {room.size}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block mb-1 font-medium">Bedding Type</span>
              <span className="font-bold text-slate-900 flex items-center justify-center gap-1">
                <Bed className="w-3.5 h-3.5 text-gold-600" />
                {room.bedType}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block mb-1 font-medium">Guest Occupancy</span>
              <span className="font-bold text-slate-900 flex items-center justify-center gap-1">
                <Users className="w-3.5 h-3.5 text-gold-600" />
                {room.occupancy}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-serif text-lg text-slate-900 font-bold mb-2">Room Overview</h4>
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Amenities List */}
          <div>
            <h4 className="font-serif text-lg text-slate-900 font-bold mb-3">Room Inclusions & Amenities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-200 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4">
            <button
              onClick={onClose}
              className="btn-secondary text-xs py-2.5 px-5 justify-center"
            >
              Close
            </button>

            <a
              href={`tel:${hotel.contact.phones[0].replace(/\s/g, '')}`}
              className="btn-gold text-xs py-2.5 px-4 sm:px-6 flex items-center justify-center gap-2 shadow-md"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Call Reception ({hotel.contact.phones[0]})</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default RoomModal;
