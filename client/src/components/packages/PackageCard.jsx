import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Check, ArrowRight } from 'lucide-react';
import { formatINR } from '../../utils/formatters';

export const PackageCard = ({ pkg }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-soft hover:shadow-premium hover:border-gold-light transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Cover Photo */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
          <img
            src={pkg.image}
            alt={pkg.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-main/60 via-transparent to-transparent" />

          {/* Duration Badge */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold text-text-primary shadow-sm">
            <Clock className="w-3.5 h-3.5 text-gold-bright" />
            <span>{pkg.duration}</span>
          </div>

          {/* Destination */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs font-semibold text-white">
            <MapPin className="w-4 h-4 text-gold-bright shrink-0" />
            <span>{pkg.destination}</span>
          </div>
        </div>

        {/* Details */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-text-primary group-hover:text-gold-primary transition-colors mb-3">
            {pkg.title}
          </h3>
          <p className="text-xs text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {pkg.itinerarySummary}
          </p>

          {/* Highlights List */}
          <div className="space-y-1.5 mb-6">
            {pkg.highlights.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Pricing & CTA */}
      <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between">
        <div>
          <span className="block text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
            All-Inclusive Rate
          </span>
          <span className="text-2xl font-extrabold text-charcoal-main">
            {formatINR(pkg.price)}
          </span>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gold-primary hover:bg-gold-bright text-white text-xs font-semibold shadow-sm transition-all hover:gap-3"
        >
          <span>Book Tour</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
