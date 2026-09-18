import React, { useState } from 'react';
import { Users, Maximize2, Sparkles, Calendar, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { useBooking } from '../../context/BookingContext';

export const EventSection = ({ hotel }) => {
  const event = hotel.events[0];
  const { showToast } = useBooking();
  const [eventFormOpen, setEventFormOpen] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding / Reception',
    expectedGuests: '150-300',
    eventDate: ''
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    showToast(`Thank you ${inquiryData.name}! Your event enquiry for ${event.name} has been received. Our banquet coordinator will call you.`);
    setEventFormOpen(false);
  };

  return (
    <section id="events" className="py-20 lg:py-28 bg-[#FCFBF7] relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CELEBRATIONS & CONVENTIONS"
          title={event.name}
          subtitle={`A prestigious venue in Chittoor designed for grand weddings, receptions, product launches, and corporate symposiums.`}
        />

        {/* Feature Event Presentation */}
        <div className="bg-white rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-stone-200/90 shadow-xl">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-[480px] overflow-hidden">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

            {/* Capacity Badges */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
              <span className="flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-500/30 font-semibold text-gold-300 shadow-md">
                <Users className="w-3.5 h-3.5 text-gold-400" />
                Capacity: {event.capacity}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700 shadow-md">
                <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
                Area: {event.area}
              </span>
            </div>
          </div>

          {/* Details & Inquiries */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-white">
            <div>
              <div className="text-xs uppercase tracking-widest text-gold-700 font-bold mb-2">
                GRAND BANQUETS & OCCASIONS
              </div>

              <h3 className="font-serif text-3xl text-slate-900 font-semibold mb-4">
                {event.name}
              </h3>

              <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
                {event.description}
              </p>

              {/* Suitable For */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-slate-900 font-semibold mb-2">
                  Suitable For:
                </div>
                <div className="flex flex-wrap gap-2">
                  {event.suitableFor.map((item, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-slate-700 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features Checklist */}
              <div className="space-y-2.5 mb-8">
                {event.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-stone-150 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setEventFormOpen(true)}
                className="btn-gold text-xs px-7 py-3.5 flex items-center gap-2 rounded-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Plan Your Event</span>
              </button>

              <a
                href={`tel:${hotel.contact.phones[0].replace(/\s/g, '')}`}
                className="btn-outline-gold text-xs px-6 py-3.5 flex items-center gap-2 rounded-lg"
              >
                <Phone className="w-4 h-4 text-gold-600" />
                <span>Call Banquet Desk</span>
              </a>
            </div>

          </div>

        </div>

        {/* Interactive Event Enquiry Modal */}
        {eventFormOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white border border-gold-400/40 p-6 sm:p-8 rounded-2xl max-w-lg w-full text-slate-900 shadow-2xl relative animate-fadeIn">
              <button
                onClick={() => setEventFormOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1 font-bold text-lg"
              >
                ✕
              </button>

              <h3 className="font-serif text-2xl mb-1 text-slate-900 font-semibold">Event Enquiry</h3>
              <p className="text-xs text-gold-700 font-medium mb-6">Enquiring for {event.name} at {hotel.name}</p>

              <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={inquiryData.name}
                    onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={inquiryData.phone}
                    onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-medium mb-1">Event Type</label>
                    <select
                      value={inquiryData.eventType}
                      onChange={(e) => setInquiryData({ ...inquiryData, eventType: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white"
                    >
                      <option value="Wedding / Reception">Wedding / Reception</option>
                      <option value="Engagement Ceremony">Engagement Ceremony</option>
                      <option value="Corporate Meeting">Corporate Meeting</option>
                      <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                      <option value="Exhibition / Product Launch">Exhibition</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-medium mb-1">Expected Guests</label>
                    <select
                      value={inquiryData.expectedGuests}
                      onChange={(e) => setInquiryData({ ...inquiryData, expectedGuests: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white"
                    >
                      <option value="50-100">50 - 100 Guests</option>
                      <option value="100-200">100 - 200 Guests</option>
                      <option value="200-350">200 - 350 Guests</option>
                      <option value="350+">350+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Tentative Event Date</label>
                  <input
                    type="date"
                    value={inquiryData.eventDate}
                    onChange={(e) => setInquiryData({ ...inquiryData, eventDate: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-3.5 text-xs uppercase font-semibold mt-4 rounded-lg shadow-md"
                >
                  Submit Event Enquiry
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default EventSection;
