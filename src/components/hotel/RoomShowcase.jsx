import React, { useState } from 'react';
import { Bed, Users, Maximize2, Check, Phone, Info } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import RoomModal from './RoomModal';

export const RoomShowcase = ({ hotel }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-ivory-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="ACCOMMODATION & TARIFF"
          title="Rooms & Luxury Suites"
          subtitle={`Discover tailored luxury and contemporary comfort across ${hotel.rooms.length} room categories designed for business travelers, couples, and families.`}
        />

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotel.rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-md overflow-hidden flex flex-col justify-between border border-gold-300 group hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {/* Room Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                {/* Tariff Pill */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-gold-400 text-right shadow-md">
                  <span className="font-serif text-lg font-bold text-slate-900">{room.tariff}</span>
                  <span className="text-[10px] text-slate-500 block -mt-1 font-medium">{room.taxInfo}</span>
                </div>

                {/* Size & Occupancy Badges */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="flex items-center gap-1 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded border border-slate-700 font-medium">
                    <Maximize2 className="w-3 h-3 text-gold-400" />
                    {room.size}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded border border-slate-700 font-medium">
                    <Users className="w-3 h-3 text-gold-400" />
                    {room.occupancy}
                  </span>
                </div>
              </div>

              {/* Room Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-serif text-2xl text-slate-900 font-bold mb-2 group-hover:text-gold-700 transition-colors">
                    {room.name}
                  </h3>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed mb-4 line-clamp-2">
                    {room.description}
                  </p>

                  {/* Amenities Preview */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-6">
                    {room.amenities.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="btn-secondary text-[11px] sm:text-xs py-2 px-2 text-center flex items-center justify-center gap-1"
                  >
                    <Info className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={`tel:${hotel.contact.phones[0].replace(/\s/g, '')}`}
                    className="btn-gold text-[11px] sm:text-xs py-2 px-2 text-center flex items-center justify-center gap-1 shadow-sm"
                  >
                    <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Room Modal */}
      {selectedRoom && (
        <RoomModal
          room={selectedRoom}
          hotel={hotel}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </section>
  );
};

export default RoomShowcase;
