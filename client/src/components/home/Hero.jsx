import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { CarAnimationLeft } from '../../animations/CarAnimationLeft';
import { CarAnimationRight } from '../../animations/CarAnimationRight';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-offwhite-main via-offwhite-light to-offwhite-main border-b border-gray-200">
      {/* Background Subtle Geometric Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold-pale/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gold-light/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Messaging */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-pale text-gold-primary border border-gold-light/70 text-xs font-semibold tracking-wider uppercase shadow-soft">
              <Award className="w-4 h-4 text-gold-primary shrink-0" />
              <span>Travel With Confidence</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.12] font-heading">
              Your Journey <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-gold-bright to-gold-light">
                Starts Here
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-text-muted max-w-xl leading-relaxed font-normal font-body">
              Reliable cars, comfortable journeys, and travel services designed around you. Explore South India's scenic hill stations, temple trails, and city hubs with dedicated professional chauffeurs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#booking-search"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gold-primary hover:bg-gold-bright text-white text-sm font-bold shadow-lg shadow-gold-primary/25 hover:shadow-gold-primary/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Your Ride</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/cars"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-text-primary hover:text-gold-primary border border-gray-200 shadow-sm text-sm font-semibold transition-all hover:border-gray-300"
              >
                <span>Explore Cars</span>
              </Link>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-text-muted border-t border-gray-200/60">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">Sanitized Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">Verified Chauffeurs</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Vehicle Visual Showcase */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-charcoal-main via-charcoal-light to-charcoal-main p-8 text-white shadow-premium border border-charcoal-light/50">
              {/* Decorative background glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold-primary/20 rounded-full blur-2xl" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-semibold text-gold-bright border border-white/10">
                    Premium Fleet Showcase
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-gold-bright bg-gold-bright/10 px-2.5 py-1 rounded-full border border-gold-bright/20">
                    <Star className="w-3.5 h-3.5 fill-gold-bright" />
                    <span>4.9 / 5.0</span>
                  </div>
                </div>

                {/* Hero Car Showcase Visual */}
                <div className="my-6 relative flex items-center justify-center py-4">
                  <img
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                    alt="Toyota Innova Crysta Premium Travel"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute -bottom-3 left-4 bg-gold-primary text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md">
                    Toyota Innova Crysta
                  </div>
                </div>

                {/* Micro Spec Bar */}
                <div className="grid grid-cols-3 gap-2 bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center text-xs">
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase">Capacity</span>
                    <span className="font-bold text-white">7 Seater</span>
                  </div>
                  <div className="border-x border-white/10">
                    <span className="block text-[10px] text-gray-400 uppercase">Comfort</span>
                    <span className="font-bold text-white">Captain Seats</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase">Rates From</span>
                    <span className="font-bold text-gold-bright">₹3,200/day</span>
                  </div>
                </div>

                {/* Quick Chauffeur trust badge */}
                <div className="flex items-center gap-3 pt-2 text-xs text-gray-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Includes all state highway permits, tolls & commercial chauffeur allowance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lower Hero: Subtle Car Animation Placeholders (Left & Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-10 md:pt-14">
          <CarAnimationLeft />
          <CarAnimationRight />
        </div>
      </div>
    </section>
  );
};
