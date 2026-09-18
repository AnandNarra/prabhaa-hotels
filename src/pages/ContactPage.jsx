import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, ExternalLink, Calendar, MessageSquare } from 'lucide-react';
import { hotelsData } from '../data/hotelsData';
import { useBooking } from '../context/BookingContext';

export const ContactPage = () => {
  const { showToast } = useBooking();
  const [formData, setFormData] = useState({
    targetHotel: 'all',
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  useEffect(() => {
    document.title = "Contact & Locations | Prabhaa Grand Inn & Prabaa Royal Park";
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(`Thank you ${formData.name}! Your inquiry for Prabhaa Hotels has been received. Our front desk will contact you shortly.`);
    setFormData({ targetHotel: 'all', name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Connect with Prabhaa Hotels"
          subtitle="Direct phone dialers, addresses, Google Map directions, and reservation assistance for both our properties in Chittoor."
        />

        {/* Dual Property Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Prabhaa Grand Inn */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-200/90 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
                  FLAGSHIP HOTEL
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-slate-700 font-semibold">
                  Estd 2016
                </span>
              </div>

              <h3 className="font-serif text-3xl text-slate-900 font-semibold mb-3">
                Prabhaa Grand Inn
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 my-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>#15-2143, Rajiv Gandhi Road, M.S.R Circle, Chittoor- 517 001, Andhra Pradesh, India</span>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <div>Landlines: <a href="tel:+918572233133" className="text-slate-900 font-semibold hover:text-gold-700 hover:underline">+91 8572 233133</a> | <a href="tel:+918572233177" className="text-slate-900 font-semibold hover:text-gold-700 hover:underline">8572 233177</a></div>
                    <div>Mobile / WhatsApp: <a href="tel:+919581711150" className="text-slate-900 font-semibold hover:text-gold-700 hover:underline">+91 95817 11150</a></div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                  <a href="mailto:fom@prabhaagrandinn.in" className="text-slate-900 font-semibold hover:text-gold-700 hover:underline">
                    fom@prabhaagrandinn.in
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-150 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(hotelsData.grandInn.contact.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-xs px-4 py-2.5 flex items-center justify-center gap-1.5 rounded-lg font-semibold"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>

              <a
                href="tel:+918572233133"
                className="btn-gold text-xs px-5 py-2.5 flex items-center justify-center gap-1.5 rounded-lg font-bold shadow-md"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>Call Reception</span>
              </a>
            </div>
          </div>

          {/* Card 2: Prabaa Royal Park */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-200/90 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
                  BUSINESS CLASS HOTEL
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-slate-700 font-semibold">
                  Estd 2021
                </span>
              </div>

              <h3 className="font-serif text-3xl text-slate-900 font-semibold mb-3">
                Prabaa Royal Park
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 my-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>D.No 18-872 to 874, Church Street, Chittoor - 517 001, Andhra Pradesh, India</span>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <div>Landlines: <a href="tel:+918572233111" className="text-slate-900 font-semibold hover:text-gold-700 hover:underline">+91 8572 233111</a> | <a href="tel:+918572233155" className="text-slate-900 font-semibold hover:text-gold-700 hover:underline">8572 233155</a></div>
                    <div>Mobile / WhatsApp: <a href="tel:+919581711172" className="text-slate-900 font-semibold hover:text-gold-700 hover:underline">+91 95817 11172</a></div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                  <a href="mailto:fom@prabaaroyalpark.com" className="text-slate-900 font-semibold hover:text-gold-700 hover:underline">
                    fom@prabaaroyalpark.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-150 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(hotelsData.royalPark.contact.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-xs px-4 py-2.5 flex items-center justify-center gap-1.5 rounded-lg font-semibold"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>

              <a
                href="tel:+918572233111"
                className="btn-gold text-xs px-5 py-2.5 flex items-center justify-center gap-1.5 rounded-lg font-bold shadow-md"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>Call Reception</span>
              </a>
            </div>
          </div>

        </div>

        {/* Unified Contact Form */}
        <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-2xl bg-white border border-stone-200/90 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-semibold">
              Send a Group or General Inquiry
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              For corporate tie-ups, bulk room bookings, weddings, banquets, or dining reservations across Prabhaa Hotels.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-700 font-medium mb-1">Select Property</label>
              <select
                value={formData.targetHotel}
                onChange={(e) => setFormData({ ...formData, targetHotel: e.target.value })}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
              >
                <option value="all">Both Hotels / General Group Inquiry</option>
                <option value="grand-inn">Prabhaa Grand Inn (M.S.R Circle)</option>
                <option value="royal-park">Prabaa Royal Park (Church Street)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-medium mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Room Booking Inquiry">Room Booking Inquiry</option>
                  <option value="Banquet & Function Hall">Banquet & Function Hall</option>
                  <option value="Restaurant & Catering">Restaurant & Catering</option>
                  <option value="Corporate Tie-up">Corporate Tie-up</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">Your Message *</label>
              <textarea
                required
                rows={4}
                placeholder="Write your detailed query or requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-gold w-full py-4 text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 rounded-lg shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
