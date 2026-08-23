import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Car,
  Users,
  Fuel,
  Gauge,
  Briefcase,
  Star,
  Check,
  Calendar,
  ArrowLeft,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { carService } from '../services/carService';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Loading } from '../components/common/Loading';
import { formatINR, calculateDaysBetween } from '../utils/formatters';
import { CONTACT_INFO } from '../utils/constants';

export const CarDetails = () => {
  const { id } = useParams();

  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Estimation state
  const [pickupCity, setPickupCity] = useState('Chennai');
  const [dropCity, setDropCity] = useState('Ooty');
  const [startDate, setStartDate] = useState(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]
  );
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isBookedSuccess, setIsBookedSuccess] = useState(false);
  const [bookingError, setBookingError] = useState('');

  useEffect(() => {
    const loadCar = async () => {
      if (!id) return;
      setIsLoading(true);
      const data = await carService.getCarById(id);
      setCar(data);
      setIsLoading(false);
    };

    loadCar();
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-36 pb-28">
        <Container>
          <Loading message="Loading vehicle specifications..." />
        </Container>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="pt-36 pb-28 text-center">
        <Container>
          <div className="max-w-md mx-auto p-8 bg-white rounded-3xl border border-gray-200 shadow-soft">
            <Car className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-text-primary mb-2">Vehicle Not Found</h2>
            <p className="text-xs text-gray-500 mb-6">
              The requested car model is either retired or does not exist in our active fleet.
            </p>
            <Link
              to="/cars"
              className="px-5 py-2.5 rounded-xl bg-gold-primary text-white text-xs font-semibold shadow-sm inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Fleet Catalog</span>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const tripDays = calculateDaysBetween(startDate, endDate);
  const estimatedCost = tripDays * car.pricePerDay;

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      setBookingError('Please enter your name and contact phone number');
      return;
    }

    setBookingError('');
    setIsBookedSuccess(true);
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/cars"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gold-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Cars</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Gallery, Specs, Inclusions & Description */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Image Gallery Showcase */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-soft p-4 space-y-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={car.images[activeImageIndex] || car.images[0]}
                  alt={car.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="blue" size="sm">
                    {car.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-text-primary shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-gold-bright text-gold-bright" />
                  <span>{car.rating.toFixed(1)}</span>
                  <span className="text-gray-400 font-normal">({car.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Thumbnails if multiple images exist */}
              {car.images.length > 1 && (
                <div className="flex items-center gap-3">
                  {car.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-gold-primary shadow-sm scale-105'
                          : 'border-gray-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Vehicle Header & Description */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-soft space-y-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight font-heading">
                {car.name}
              </h1>
              <p className="text-xs text-gold-primary font-semibold uppercase tracking-wider">
                {car.model}
              </p>
              <p className="text-sm text-text-muted leading-relaxed font-normal font-body">
                {car.description}
              </p>

              {/* Quick Specs 4-Pill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-gray-100">
                <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                  <Users className="w-4 h-4 text-gold-primary mx-auto mb-1" />
                  <span className="block text-xs font-bold text-text-primary">{car.seats} Passengers</span>
                  <span className="block text-[10px] text-gray-400 uppercase">Seating</span>
                </div>
                <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                  <Briefcase className="w-4 h-4 text-gold-primary mx-auto mb-1" />
                  <span className="block text-xs font-bold text-text-primary">{car.luggage} Large Bags</span>
                  <span className="block text-[10px] text-gray-400 uppercase">Boot Space</span>
                </div>
                <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                  <Gauge className="w-4 h-4 text-gold-primary mx-auto mb-1" />
                  <span className="block text-xs font-bold text-text-primary">{car.transmission}</span>
                  <span className="block text-[10px] text-gray-400 uppercase">Gearbox</span>
                </div>
                <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                  <Fuel className="w-4 h-4 text-gold-primary mx-auto mb-1" />
                  <span className="block text-xs font-bold text-text-primary">{car.fuelType}</span>
                  <span className="block text-[10px] text-gray-400 uppercase">Fuel Type</span>
                </div>
              </div>
            </div>

            {/* Included Features & Amenities */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-soft">
              <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-bright" />
                <span>Vehicle Features & Cabin Amenities</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-text-primary">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Cost Estimation & Booking Inquiry Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-premium sticky top-28">
              <div className="border-b border-gray-100 pb-4 mb-6">
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">
                  Rental Tariff
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-text-primary">
                    {formatINR(car.pricePerDay)}
                  </span>
                  <span className="text-xs text-gray-500">/ day onwards</span>
                </div>
                <p className="text-[11px] text-emerald-600 font-medium mt-1">
                  ✓ Includes commercial chauffeur, fuel & all outstation permits
                </p>
              </div>

              {isBookedSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="text-base font-bold text-emerald-900">Inquiry Received!</h3>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Thank you, <strong className="font-semibold">{customerName}</strong>. Our reservation desk will call you at <strong className="font-semibold">{customerPhone}</strong> within 15 minutes to confirm car allocation.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsBookedSuccess(false)}
                    className="mt-2 text-xs font-semibold text-emerald-800 hover:underline"
                  >
                    Calculate Another Route
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <h3 className="text-sm font-bold text-text-primary flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gold-primary" />
                    <span>Calculate Trip Fare & Request Booking</span>
                  </h3>

                  {/* Pickup City */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-text-primary">Pickup City</label>
                    <input
                      type="text"
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary"
                    />
                  </div>

                  {/* Destination */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-text-primary">Destination</label>
                    <input
                      type="text"
                      value={dropCity}
                      onChange={(e) => setDropCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary"
                    />
                  </div>

                  {/* Dates Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-primary">Pickup Date</label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-gold-primary/20"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-primary">Return Date</label>
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-gold-primary/20"
                      />
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-primary">Your Name</label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-gold-primary/20"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-primary">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="+91..."
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-gold-primary/20"
                      />
                    </div>
                  </div>

                  {bookingError && (
                    <p className="text-[11px] text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{bookingError}</span>
                    </p>
                  )}

                  {/* Cost Calculation Summary */}
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2 mt-4">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Trip Duration:</span>
                      <span className="font-bold text-text-primary">{tripDays} Days</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Daily Base Rate:</span>
                      <span className="font-bold text-text-primary">{formatINR(car.pricePerDay)}/day</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-xs font-bold text-text-primary">Estimated Total:</span>
                      <span className="text-xl font-extrabold text-charcoal-main">
                        {formatINR(estimatedCost)}
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gold-primary hover:bg-gold-bright text-white font-bold text-xs shadow-md shadow-gold-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Submit Booking Request
                  </button>

                  <div className="text-center pt-2">
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs font-semibold text-gray-500 hover:text-gold-primary inline-flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Prefer to book over phone? Call {CONTACT_INFO.phone}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
