import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Container } from '../common/Container';
import { CONTACT_INFO } from '../../utils/constants';

export const ContactCTA = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-charcoal-main via-charcoal-light to-charcoal-main text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-charcoal-light/60">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-bright/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-gold-bright text-xs font-semibold uppercase tracking-wider border border-white/10">
                <Clock className="w-3.5 h-3.5 text-gold-bright" />
                <span>24/7 Rapid Reservation Desk</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready to Start <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bright via-white to-gold-light">
                  Your Next Journey?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed font-normal">
                Speak directly with our travel dispatch team or request a personalized itinerary estimate with zero obligation.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-gray-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Free 24hr Cancellation
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Zero Advance Booking Charges
                </span>
              </div>
            </div>

            {/* Right Buttons & Quick Call */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-gray-100 text-charcoal-main font-bold text-sm text-center shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-gold-primary" />
                <span>Call {CONTACT_INFO.phone}</span>
              </a>

              <Link
                to="/contact"
                className="w-full py-4 px-6 rounded-2xl bg-gold-primary hover:bg-gold-bright text-white font-bold text-sm text-center shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
