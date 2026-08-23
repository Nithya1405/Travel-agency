import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, ShieldCheck, Clock, Award } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../../utils/constants';

export const Footer = () => {
  return (
    <footer className="bg-charcoal-dark text-gray-300 pt-16 pb-12 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-primary flex items-center justify-center text-white">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block leading-tight font-heading">
                  NATARAJAN
                </span>
                <span className="text-xs font-semibold tracking-wider text-gold-bright uppercase block">
                  TRAVEL AGENCY
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal font-body">
              Professional car rentals with experienced drivers. Any time, any where – we're here for you.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-bright" /> Verified Chauffeurs
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold-bright" /> 24/7 Support
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 font-medium font-body">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-gold-bright transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Our Fleet
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 font-medium font-body">
              <li>
                <Link to="/cars" className="hover:text-gold-bright transition-colors">
                  Toyota Innova Crysta (7-Seater)
                </Link>
              </li>
              <li>
                <Link to="/cars" className="hover:text-gold-bright transition-colors">
                  Maruti Swift Dzire (Sedan)
                </Link>
              </li>
              <li>
                <Link to="/cars" className="hover:text-gold-bright transition-colors">
                  Force Urbania Luxury Van (12-Seater)
                </Link>
              </li>
              <li>
                <Link to="/cars" className="hover:text-gold-bright transition-colors">
                  Toyota Fortuner 4x4
                </Link>
              </li>
              <li>
                <Link to="/cars" className="hover:text-gold-bright transition-colors">
                  Mercedes-Benz E-Class
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-bright shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-bright shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              {CONTACT_INFO.phoneAlternate && (
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold-bright shrink-0" />
                  <a
                    href={`tel:${CONTACT_INFO.phoneAlternate}`}
                    className="hover:text-white transition-colors"
                  >
                    {CONTACT_INFO.phoneAlternate}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-bright shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              {CONTACT_INFO.gst && (
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-charcoal-light text-[11px] text-gray-300">
                    <Award className="w-3.5 h-3.5 text-gold-bright" />
                    <span>GST: {CONTACT_INFO.gst}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-charcoal-light flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Natarajan Travel Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-200 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
