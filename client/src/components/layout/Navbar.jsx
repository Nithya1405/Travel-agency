import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Car, Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../../utils/constants';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleBookRide = () => {
    navigate('/cars');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-soft py-3 border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary rounded-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-gold-primary flex items-center justify-center text-white shadow-gold-glow group-hover:scale-105 transition-transform duration-200">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-text-primary block leading-tight font-heading">
                NATARAJAN
              </span>
              <span className="text-[10px] font-bold tracking-widest text-gold-primary uppercase block">
                TRAVEL AGENCY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 py-1 border-b-2 ${
                    isActive
                      ? 'text-gold-primary border-gold-primary'
                      : 'text-text-primary hover:text-gold-primary border-transparent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTA & Phone */}
          <div className="hidden lg:flex items-center gap-3.5">
            <button
              onClick={handleBookRide}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gold-primary hover:bg-gold-bright shadow-md shadow-gold-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book a Ride</span>
            </button>

            <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200">
              <Phone className="w-4 h-4 text-gold-primary" />
              <div className="flex flex-col">
                <span className="text-[10px] text-text-muted font-medium">24/7 Support</span>
                <span className="text-xs font-bold text-text-primary">{CONTACT_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-text-primary hover:text-charcoal-main hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-gray-100 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-premium space-y-2 animate-in fade-in duration-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  location.pathname === link.path
                    ? 'bg-gold-pale text-gold-primary'
                    : 'text-text-primary hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  handleBookRide();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-3 rounded-xl font-bold text-xs text-white bg-gold-primary shadow-md"
              >
                Book a Ride
              </button>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full text-center py-3 rounded-xl font-bold text-xs text-text-primary bg-gray-100"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
