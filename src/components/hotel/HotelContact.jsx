import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Send, ExternalLink, ShieldCheck, MessageSquare } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { useBooking } from '../../context/BookingContext';

export const HotelContact = ({ hotel }) => {
  const { showToast } = useBooking();
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(`Thank you ${formState.name}! Your message for ${hotel.name} has been sent successfully.`);
    setFormState({ name: '', phone: '', email: '', message: '' });
  };

  const primaryPhone = hotel.contact.phones[0]?.replace(/\s/g, '') || '';
  const mobilePhone = hotel.contact.mobile?.replace(/\s/g, '') || '';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FCFBF7] relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Strong Direct Reservation Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 via-white to-gold-500/10 border border-gold-500/30 p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-bold mb-2 block">
            DIRECT RESERVATIONS & BEST TARIFFS
          </span>

          <h3 className="font-serif text-3xl sm:text-5xl text-slate-900 font-semibold mb-4">
            Your Stay Begins Here.
          </h3>

          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto mb-8 leading-relaxed">
            Experience exceptional luxury, modern executive amenities, and authentic culinary dining at {hotel.name}. Call our 24/7 front desk for instant confirmations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${primaryPhone}`}
              className="btn-gold text-xs sm:text-sm px-8 py-4 inline-flex items-center gap-2.5 rounded-lg shadow-lg font-bold"
            >
              <Phone className="w-4 h-4" />
              <span>CALL RECEPTION NOW: {hotel.contact.phones[0]}</span>
            </a>

            <a
              href={`https://wa.me/${mobilePhone.replace('+', '')}?text=${encodeURIComponent(`Hello, I would like to inquire about room reservations at ${hotel.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-xs sm:text-sm px-7 py-4 inline-flex items-center gap-2 rounded-lg font-semibold bg-white"
            >
              <MessageSquare className="w-4 h-4 text-gold-600" />
              <span>WHATSAPP DESK</span>
            </a>
          </div>
        </div>

        {/* Section Heading */}
        <SectionHeading
          eyebrow="LOCATION & CONTACT"
          title={`Connect with ${hotel.name}`}
          subtitle="Reach out to our 24/7 reception desk for direct room bookings, dining reservations, or directions."
        />

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Maps */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200/90 shadow-lg space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-slate-900 font-semibold">Hotel Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal leading-relaxed">
                    {hotel.contact.address}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(hotel.contact.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gold-700 hover:text-gold-800 mt-2 font-semibold"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-slate-900 font-semibold">Phone & Mobile</h4>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1 space-y-1 font-normal">
                    <div>
                      Landlines:{' '}
                      {hotel.contact.phones.map((p, i) => (
                        <span key={i}>
                          <a href={`tel:${p.replace(/\s/g, '')}`} className="text-slate-900 font-semibold hover:text-gold-700 hover:underline">
                            {p}
                          </a>
                          {i < hotel.contact.phones.length - 1 ? ' | ' : ''}
                        </span>
                      ))}
                    </div>
                    <div>
                      Mobile / WhatsApp:{' '}
                      <a href={`tel:${hotel.contact.mobile.replace(/\s/g, '')}`} className="text-slate-900 font-semibold hover:text-gold-700 hover:underline">
                        {hotel.contact.mobile}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-slate-900 font-semibold">Email Reservations</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
                    <a href={`mailto:${hotel.contact.email}`} className="text-slate-900 font-semibold hover:text-gold-700 hover:underline">
                      {hotel.contact.email}
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map Mock / Directions Box */}
            <div className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-md text-center relative overflow-hidden flex flex-col justify-center items-center">
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="font-serif text-slate-900 text-base font-semibold">
                {hotel.name} Location Map
              </div>
              <p className="text-xs text-slate-600 mt-1 mb-4">
                Centrally situated in Chittoor with effortless road & rail access.
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(hotel.contact.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-xs px-5 py-2.5 inline-flex items-center gap-1.5 rounded-lg font-semibold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-stone-200/90 shadow-xl">
            <h3 className="font-serif text-2xl text-slate-900 font-semibold mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs text-slate-600 mb-6 font-normal">
              Have questions regarding room availability, group bookings, banquet events, or dining? Fill out the form below and our reception team will contact you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-medium mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="guest@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">Your Message or Stay Requirements *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us your dates, room requirements, or event details..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-3.5 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 rounded-lg shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry to {hotel.name}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HotelContact;
