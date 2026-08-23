import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Car,
  Search,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react';
import { calculateDaysBetween, formatINR } from '../../utils/formatters';
import { POPULAR_LOCATIONS } from '../../utils/constants';

export const BookingSearch = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pickupLocation: 'Chennai',
    dropLocation: 'Ooty / Nilgiris',
    pickupDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    returnDate: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0], // +4 days
    category: 'SUV',
    tripType: 'outstation',
  });

  const [errors, setErrors] = useState({});
  const [submittedQuery, setSubmittedQuery] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Please select or enter pickup city';
    }

    if (!formData.dropLocation.trim()) {
      newErrors.dropLocation = 'Please enter destination city';
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate = 'Pickup date is required';
    }

    if (!formData.returnDate) {
      newErrors.returnDate = 'Return date is required';
    } else if (new Date(formData.returnDate) < new Date(formData.pickupDate)) {
      newErrors.returnDate = 'Return date cannot be earlier than pickup date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedQuery({ ...formData });
    } else {
      setSubmittedQuery(null);
    }
  };

  const totalTripDays = calculateDaysBetween(formData.pickupDate, formData.returnDate);

  return (
    <section id="booking-search" className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-premium border border-gray-200/90">
        {/* Trip Type Selector & Headline */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-gold-pale text-gold-primary flex items-center justify-center">
              <Car className="w-4 h-4" />
            </span>
            <div>
              <h2 className="text-base font-bold text-text-primary">
                Book a Car / Check Fare Estimate
              </h2>
              <p className="text-xs text-text-muted">
                Transparent quotes with chauffeur, state road permits, and fuel included
              </p>
            </div>
          </div>

          {/* Trip mode pills */}
          <div className="inline-flex rounded-xl bg-gray-100 p-1 self-start sm:self-auto">
            {['outstation', 'local', 'airport'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, tripType: type })}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  formData.tripType === type
                    ? 'bg-white text-gold-primary shadow-xs'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Booking Form Grid */}
        <form onSubmit={handleSearchSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Pickup Location */}
            <div className="space-y-1.5">
              <label
                htmlFor="pickupLocation"
                className="text-xs font-semibold text-text-primary flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-primary" />
                <span>Pickup City</span>
              </label>
              <div className="relative">
                <input
                  id="pickupLocation"
                  type="text"
                  value={formData.pickupLocation}
                  onChange={(e) => {
                    setFormData({ ...formData, pickupLocation: e.target.value });
                    if (errors.pickupLocation) setErrors({ ...errors, pickupLocation: undefined });
                  }}
                  placeholder="e.g. Chennai, Trichy"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium text-text-primary transition-all focus:outline-none focus:ring-2 ${
                    errors.pickupLocation
                      ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/20'
                      : 'border-gray-200 focus:border-gold-primary focus:ring-gold-primary/20'
                  }`}
                />
              </div>
              {errors.pickupLocation && (
                <p className="text-[11px] text-rose-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.pickupLocation}</span>
                </p>
              )}
            </div>

            {/* Destination / Drop Location */}
            <div className="space-y-1.5">
              <label
                htmlFor="dropLocation"
                className="text-xs font-semibold text-text-primary flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-bright" />
                <span>Destination</span>
              </label>
              <div className="relative">
                <input
                  id="dropLocation"
                  type="text"
                  value={formData.dropLocation}
                  onChange={(e) => {
                    setFormData({ ...formData, dropLocation: e.target.value });
                    if (errors.dropLocation) setErrors({ ...errors, dropLocation: undefined });
                  }}
                  placeholder="e.g. Ooty, Munnar"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium text-text-primary transition-all focus:outline-none focus:ring-2 ${
                    errors.dropLocation
                      ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/20'
                      : 'border-gray-200 focus:border-gold-primary focus:ring-gold-primary/20'
                  }`}
                />
              </div>
              {errors.dropLocation && (
                <p className="text-[11px] text-rose-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.dropLocation}</span>
                </p>
              )}
            </div>

            {/* Pickup Date */}
            <div className="space-y-1.5">
              <label
                htmlFor="pickupDate"
                className="text-xs font-semibold text-text-primary flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-gold-primary" />
                <span>Start Date</span>
              </label>
              <input
                id="pickupDate"
                type="date"
                value={formData.pickupDate}
                onChange={(e) => {
                  setFormData({ ...formData, pickupDate: e.target.value });
                  if (errors.pickupDate) setErrors({ ...errors, pickupDate: undefined });
                }}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium text-text-primary transition-all focus:outline-none focus:ring-2 ${
                  errors.pickupDate
                    ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/20'
                    : 'border-gray-200 focus:border-gold-primary focus:ring-gold-primary/20'
                }`}
              />
              {errors.pickupDate && (
                <p className="text-[11px] text-rose-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.pickupDate}</span>
                </p>
              )}
            </div>

            {/* Return Date */}
            <div className="space-y-1.5">
              <label
                htmlFor="returnDate"
                className="text-xs font-semibold text-text-primary flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-gold-primary" />
                <span>Return Date ({totalTripDays} Days)</span>
              </label>
              <input
                id="returnDate"
                type="date"
                value={formData.returnDate}
                onChange={(e) => {
                  setFormData({ ...formData, returnDate: e.target.value });
                  if (errors.returnDate) setErrors({ ...errors, returnDate: undefined });
                }}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium text-text-primary transition-all focus:outline-none focus:ring-2 ${
                  errors.returnDate
                    ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/20'
                    : 'border-gray-200 focus:border-gold-primary focus:ring-gold-primary/20'
                }`}
              />
              {errors.returnDate && (
                <p className="text-[11px] text-rose-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.returnDate}</span>
                </p>
              )}
            </div>

            {/* Vehicle Category & Submit */}
            <div className="space-y-1.5">
              <label
                htmlFor="category"
                className="text-xs font-semibold text-text-primary flex items-center gap-1.5"
              >
                <Car className="w-3.5 h-3.5 text-gold-primary" />
                <span>Vehicle Type</span>
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary bg-white transition-all"
              >
                <option value="All">All Vehicle Classes</option>
                <option value="Sedan">Sedan (4 Seater - Swift Dzire)</option>
                <option value="SUV">SUV (7 Seater - Innova Crysta)</option>
                <option value="Tempo Traveller">Tempo Traveller (12-16 Seater)</option>
                <option value="Luxury">Luxury (Mercedes / BMW)</option>
              </select>
            </div>
          </div>

          {/* Submit Button Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-text-muted">
              <span className="font-semibold text-text-primary">Popular Routes:</span>
              {POPULAR_LOCATIONS.slice(0, 4).map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setFormData({ ...formData, dropLocation: loc })}
                  className="px-2 py-0.5 rounded-md bg-gray-100 hover:bg-gray-200 text-text-primary text-[11px] transition-colors"
                >
                  {loc}
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gold-primary hover:bg-gold-bright text-white font-bold text-sm shadow-md shadow-gold-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Search Cars</span>
            </button>
          </div>
        </form>

        {/* Validation Feedback & Estimate Preview Box */}
        {submittedQuery && (
          <div className="mt-6 p-4 rounded-2xl bg-gold-pale border border-gold-light/80 text-text-primary flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in fade-in duration-300">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-gold-primary uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Search Criteria Validated ({totalTripDays} Days Duration)</span>
              </div>
              <p className="text-sm font-medium text-text-primary">
                Route: <span className="font-bold">{submittedQuery.pickupLocation}</span> ➔{' '}
                <span className="font-bold">{submittedQuery.dropLocation}</span> | Category:{' '}
                <span className="font-bold">{submittedQuery.category}</span>
              </p>
              <p className="text-xs text-text-muted flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-gold-primary" />
                Estimated base fare starts from{' '}
                <span className="font-bold text-text-primary">
                  {formatINR(totalTripDays * (submittedQuery.category === 'Sedan' ? 1800 : 3200))}
                </span>{' '}
                with chauffeur allowance included.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate('/cars')}
              className="px-5 py-2.5 rounded-xl bg-gold-primary hover:bg-gold-bright text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>View Matching Cars</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
