import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { CONTACT_INFO } from '../utils/constants';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Car Rental Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('Please fill in your name, contact phone number, and message');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-pale text-gold-primary text-xs font-semibold uppercase tracking-wider mb-3 border border-gold-light/80">
            <Phone className="w-3.5 h-3.5 text-gold-primary" />
            <span>24/7 Travel Helpdesk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-tight font-heading">
            Contact Natarajan Travel Agency
          </h1>
          <p className="mt-3 text-base text-text-muted leading-relaxed font-normal font-body">
            Have questions about a customized outstation tour, airport transfer, or bulk corporate bookings? Our travel coordination desk is available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-soft space-y-6">
              <h2 className="text-xl font-bold text-text-primary">Head Office & Dispatch</h2>

              <div className="space-y-4 text-xs sm:text-sm text-text-muted">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold-pale text-gold-primary flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-text-primary font-semibold mb-0.5">Main Office Address:</strong>
                    <span>{CONTACT_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-text-primary font-semibold mb-0.5">Direct Call Hotline:</strong>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-gold-primary font-bold hover:underline">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-text-primary font-semibold mb-0.5">Email Inquiries:</strong>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-gold-primary font-medium hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-text-primary font-semibold mb-0.5">Working Hours:</strong>
                    <span>{CONTACT_INFO.operatingHours}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Action */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Instantly on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-soft">
              <h2 className="text-xl font-bold text-text-primary mb-2">Send an Inquiry</h2>
              <p className="text-xs text-gray-500 mb-6">
                Fill out the form below and our tour manager will get back to you with vehicle availability and transparent pricing.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-900">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We have logged your inquiry and a dedicated travel coordinator will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Car Rental Inquiry',
                        message: '',
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-primary">Your Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-primary">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-primary">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-primary">Inquiry Topic</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary"
                      >
                        <option value="Car Rental Inquiry">Car Rental Tariff Inquiry</option>
                        <option value="Tour Package Booking">Tour Package Customization</option>
                        <option value="Airport Pickup">Airport Pickup / Drop</option>
                        <option value="Corporate Booking">Corporate / Long-Term Hire</option>
                        <option value="Other">Other Query</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-text-primary">Trip Details / Message *</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention your pickup date, route (e.g. Chennai to Ooty 3 days), number of passengers, and preferred car model..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary"
                    />
                  </div>

                  {error && (
                    <p className="text-[11px] text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{error}</span>
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gold-primary hover:bg-gold-bright text-white font-bold text-xs shadow-md shadow-gold-primary/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
