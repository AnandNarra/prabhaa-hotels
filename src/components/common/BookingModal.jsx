import React, { useState } from 'react';
import { X, Calendar, Users, Home, Phone, Mail, CheckCircle, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { hotelsData } from '../../data/hotelsData';

export const BookingModal = () => {
  const { isBookingOpen, closeBooking, selectedHotel, setSelectedHotel, selectedRoomId, setSelectedRoomId, showToast } = useBooking();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    hotelId: selectedHotel || 'grand-inn',
    roomId: selectedRoomId || '',
    checkIn: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 172800000).toISOString().split('T')[0],
    rooms: 1,
    adults: 2,
    children: 0,
    fullName: '',
    phone: '',
    email: '',
    specialRequests: ''
  });

  // Keep hotel synced if context changes
  React.useEffect(() => {
    if (selectedHotel) {
      setFormData(prev => ({ ...prev, hotelId: selectedHotel }));
    }
    if (selectedRoomId) {
      setFormData(prev => ({ ...prev, roomId: selectedRoomId }));
    }
  }, [selectedHotel, selectedRoomId]);

  // Body scroll lock and escape handler
  React.useEffect(() => {
    if (!isBookingOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeBooking();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isBookingOpen, closeBooking]);

  if (!isBookingOpen) return null;

  const currentHotelData = hotelsData[formData.hotelId === 'grand-inn' ? 'grandInn' : 'royalPark'];
  const roomsList = currentHotelData?.rooms || [];
  const activeRoom = roomsList.find(r => r.id === formData.roomId) || roomsList[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateNights = () => {
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();
  const estimatedTotal = activeRoom ? activeRoom.rawPrice * formData.rooms * nights : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please provide your name and contact phone number.");
      return;
    }

    showToast(`Reservation request for ${currentHotelData.name} has been sent! Our front office will contact you shortly.`);
    closeBooking();
  };

  const handleWhatsAppBooking = () => {
    if (!formData.fullName || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const message = `*Room Reservation Inquiry - Prabhaa Hotels*%0A%0A` +
      `*Hotel:* ${currentHotelData.name}%0A` +
      `*Room:* ${activeRoom?.name || 'Selected Room'}%0A` +
      `*Dates:* ${formData.checkIn} to ${formData.checkOut} (${nights} night${nights > 1 ? 's' : ''})%0A` +
      `*Guests:* ${formData.adults} Adults, ${formData.children} Children, ${formData.rooms} Room(s)%0A` +
      `*Estimated Total:* ₹${estimatedTotal.toLocaleString()}%0A%0A` +
      `*Guest Name:* ${formData.fullName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'N/A'}%0A` +
      `*Special Requests:* ${formData.specialRequests || 'None'}`;

    const targetPhone = formData.hotelId === 'grand-inn' ? '919581711150' : '919581711172';
    window.open(`https://wa.me/${targetPhone}?text=${message}`, '_blank');
    showToast(`Opening WhatsApp to complete your reservation with ${currentHotelData.name}.`);
    closeBooking();
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && closeBooking()}
      className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-charcoal-900 border border-gold-500/30 rounded-sm shadow-2xl overflow-hidden text-slate-100">
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-charcoal-950 via-charcoal-900 to-charcoal-950 p-5 border-b border-gold-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm p-0.5 bg-gold-400/20 border border-gold-400/40 flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                RESERVE YOUR STAY
              </h3>
              <p className="text-xs text-gold-400">
                Prabhaa Hotels Direct Booking & Tariff Inquiry
              </p>
            </div>
          </div>

          <button
            onClick={closeBooking}
            className="p-1.5 rounded bg-charcoal-800 text-slate-400 hover:text-white border border-slate-700 hover:border-gold-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Select Hotel Property */}
        <div className="p-6">
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3">
              Step 1: Choose Destination Property
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Grand Inn Selector */}
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, hotelId: 'grand-inn', roomId: '' }));
                  setSelectedHotel('grand-inn');
                }}
                className={`p-4 rounded text-left border transition-all ${
                  formData.hotelId === 'grand-inn'
                    ? 'bg-gold-500/15 border-gold-400 text-white shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'bg-charcoal-950/60 border-slate-800 text-slate-300 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-base font-semibold">Prabhaa Grand Inn</span>
                  {formData.hotelId === 'grand-inn' && <CheckCircle className="w-4 h-4 text-gold-400" />}
                </div>
                <div className="text-xs text-slate-400 mt-1">M.S.R Circle, Rajiv Gandhi Road</div>
                <div className="text-[11px] text-gold-400/90 mt-2 font-medium">Executive Rooms & Multi-Cuisine</div>
              </button>

              {/* Royal Park Selector */}
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, hotelId: 'royal-park', roomId: '' }));
                  setSelectedHotel('royal-park');
                }}
                className={`p-4 rounded text-left border transition-all ${
                  formData.hotelId === 'royal-park'
                    ? 'bg-gold-500/15 border-gold-400 text-white shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'bg-charcoal-950/60 border-slate-800 text-slate-300 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-base font-semibold">Prabaa Royal Park</span>
                  {formData.hotelId === 'royal-park' && <CheckCircle className="w-4 h-4 text-gold-400" />}
                </div>
                <div className="text-xs text-slate-400 mt-1">Church Street, Chittoor</div>
                <div className="text-[11px] text-gold-400/90 mt-2 font-medium">Business Class & 100% Pure Veg</div>
              </button>
            </div>
          </div>

          {/* Step 2: Dates, Rooms & Guest Details Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              Step 2: Dates, Room & Guest Details
            </div>

            {/* Dates & Room Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Check-in Date</label>
                <div className="relative">
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full bg-charcoal-950 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Check-out Date</label>
                <div className="relative">
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full bg-charcoal-950 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Room Category, Counts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Room Category</label>
                <select
                  name="roomId"
                  value={formData.roomId}
                  onChange={handleInputChange}
                  className="w-full bg-charcoal-950 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                >
                  <option value="">Select Room Category</option>
                  {roomsList.map(room => (
                    <option key={room.id} value={room.id}>
                      {room.name} ({room.tariff})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Rooms Count</label>
                <select
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleInputChange}
                  className="w-full bg-charcoal-950 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                >
                  {[1, 2, 3, 4, 5].map(n => (
                    <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Guests (Adults / Kids)</label>
                <select
                  name="adults"
                  value={formData.adults}
                  onChange={handleInputChange}
                  className="w-full bg-charcoal-950 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                >
                  <option value={1}>1 Adult</option>
                  <option value={2}>2 Adults</option>
                  <option value={3}>3 Adults</option>
                  <option value={4}>4 Adults</option>
                  <option value={5}>5+ Adults</option>
                </select>
              </div>
            </div>

            {/* Guest Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g. Anand Kumar"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-charcoal-950 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Mobile / Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-charcoal-950 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="e.g. guest@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-charcoal-950 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Special Requests (Optional)</label>
              <textarea
                name="specialRequests"
                rows={2}
                placeholder="Early check-in, dietary preferences, airport pickup inquiry..."
                value={formData.specialRequests}
                onChange={handleInputChange}
                className="w-full bg-charcoal-950 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-400 resize-none"
              />
            </div>

            {/* Tariff Estimation Summary */}
            {activeRoom && (
              <div className="bg-charcoal-950 p-3 rounded border border-gold-500/20 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400">Selected: </span>
                  <span className="text-white font-medium">{activeRoom.name}</span>
                  <span className="text-slate-500"> ({nights} night{nights > 1 ? 's' : ''}, {formData.rooms} room{formData.rooms > 1 ? 's' : ''})</span>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 uppercase">Estimated Tariff</div>
                  <div className="font-serif text-base text-gold-300 font-bold">
                    ₹{estimatedTotal.toLocaleString()} <span className="text-[10px] text-slate-400 font-normal">+ Taxes</span>
                  </div>
                </div>
              </div>
            )}

            {/* Dual CTAs: Instant Form & WhatsApp Booking */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full py-3 px-4 rounded bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book via WhatsApp</span>
              </button>

              <button
                type="submit"
                className="btn-gold w-full py-3 text-xs"
              >
                <span>Submit Reservation</span>
              </button>
            </div>

            <div className="text-center text-[11px] text-slate-400 pt-1">
              Need immediate assistance? Call Front Desk:{' '}
              <span className="text-gold-300 font-medium">
                {formData.hotelId === 'grand-inn' ? '+91 8572 233133' : '+91 8572 233111'}
              </span>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default BookingModal;
