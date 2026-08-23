import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Fuel, Gauge, Star, ChevronRight, Briefcase } from 'lucide-react';
import { formatINR } from '../../utils/formatters';
import { Badge } from '../common/Badge';

export const CarCard = ({ car, onBookClick }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-soft hover:shadow-premium hover:border-gold-light transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Car Image Area */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={car.images[0]}
            alt={car.name}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-main/40 via-transparent to-transparent opacity-60" />

          {/* Badge */}
          {car.badge && (
            <div className="absolute top-4 left-4">
              <Badge variant={car.badge === 'Most Popular' ? 'amber' : 'blue'} size="sm">
                {car.badge}
              </Badge>
            </div>
          )}

          {/* Rating */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-text-primary shadow-sm">
            <Star className="w-3.5 h-3.5 fill-gold-bright text-gold-bright" />
            <span>{car.rating.toFixed(1)}</span>
            <span className="text-gray-400 font-normal">({car.reviewCount})</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs font-semibold text-gold-primary uppercase tracking-wider">
              {car.category}
            </span>
            <span className="text-[11px] text-gray-400 font-medium">
              Chauffeur Included
            </span>
          </div>

          <h3 className="text-xl font-bold text-text-primary group-hover:text-gold-primary transition-colors line-clamp-1">
            {car.name}
          </h3>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
            {car.tagline}
          </p>

          {/* Specifications Pills */}
          <div className="grid grid-cols-4 gap-1.5 py-4 my-4 border-y border-gray-100 text-center">
            <div className="p-1 rounded-xl bg-gray-50">
              <Users className="w-3.5 h-3.5 text-gold-primary mx-auto mb-1" />
              <span className="block text-[11px] font-bold text-text-primary">{car.seats}</span>
              <span className="block text-[9px] uppercase tracking-wider text-gray-400">Seats</span>
            </div>
            <div className="p-1 rounded-xl bg-gray-50">
              <Gauge className="w-3.5 h-3.5 text-gold-primary mx-auto mb-1" />
              <span className="block text-[11px] font-bold text-text-primary">{car.transmission.slice(0, 4)}</span>
              <span className="block text-[9px] uppercase tracking-wider text-gray-400">Gear</span>
            </div>
            <div className="p-1 rounded-xl bg-gray-50">
              <Fuel className="w-3.5 h-3.5 text-gold-primary mx-auto mb-1" />
              <span className="block text-[11px] font-bold text-text-primary">{car.fuelType.slice(0, 6)}</span>
              <span className="block text-[9px] uppercase tracking-wider text-gray-400">Fuel</span>
            </div>
            <div className="p-1 rounded-xl bg-gray-50">
              <Briefcase className="w-3.5 h-3.5 text-gold-primary mx-auto mb-1" />
              <span className="block text-[11px] font-bold text-text-primary">{car.luggage} Bags</span>
              <span className="block text-[9px] uppercase tracking-wider text-gray-400">Boot</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline justify-between mb-2">
            <div>
              <span className="text-2xl font-extrabold text-text-primary tracking-tight">
                {formatINR(car.pricePerDay)}
              </span>
              <span className="text-xs text-gray-500 font-medium"> / day</span>
            </div>
            <span className="text-xs text-gray-500">
              or ₹{car.pricePerKm}/km
            </span>
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="px-6 pb-6 pt-0 grid grid-cols-2 gap-3">
        <Link
          to={`/cars/${car.id}`}
          className="w-full py-2.5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-text-primary font-semibold text-xs text-center transition-all flex items-center justify-center gap-1.5"
        >
          <span>Specs & Info</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
        <button
          type="button"
          onClick={() => (onBookClick ? onBookClick(car) : null)}
          className="w-full py-2.5 rounded-xl bg-gold-primary hover:bg-gold-bright text-white font-semibold text-xs text-center shadow-md shadow-gold-primary/10 transition-all flex items-center justify-center"
        >
          <Link to={`/cars/${car.id}`} className="w-full text-center">
            Book Ride
          </Link>
        </button>
      </div>
    </div>
  );
};
