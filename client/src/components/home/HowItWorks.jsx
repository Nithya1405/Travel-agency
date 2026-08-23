import React from 'react';
import { Car, MapPin, CheckCircle, Smile } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Container } from '../common/Container';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Car',
      desc: 'Browse our curated fleet of Sedans, SUVs, Luxury cars, or Tempo Travellers suited to your group size.',
      icon: <Car className="w-5 h-5 text-gold-primary" />,
    },
    {
      number: '02',
      title: 'Select Your Journey',
      desc: 'Pick your dates, pickup location, and destination for outstation hills, airport, or city travel.',
      icon: <MapPin className="w-5 h-5 text-gold-primary" />,
    },
    {
      number: '03',
      title: 'Confirm Your Booking',
      desc: 'Get instant transparent fare estimation with zero hidden fees and receive chauffeur details in advance.',
      icon: <CheckCircle className="w-5 h-5 text-gold-primary" />,
    },
    {
      number: '04',
      title: 'Enjoy Your Ride',
      desc: 'Relax in a clean, air-conditioned vehicle driven by a polite, expert chauffeur who knows the best routes.',
      icon: <Smile className="w-5 h-5 text-gold-primary" />,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-offwhite-main border-b border-gray-200 relative overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Easy 4-Step Process"
          title="How It Works"
          subtitle="Booking a seamless car rental with chauffeur takes less than 2 minutes."
        />

        <div className="relative">
          {/* Curved Road SVG - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0">
            <svg
              viewBox="0 0 1200 100"
              className="w-full h-24"
              preserveAspectRatio="none"
            >
              {/* Curved road path */}
              <path
                d="M 50 50 Q 300 20 350 50 T 600 50 T 850 50 T 1150 50"
                fill="none"
                stroke="#D4A017"
                strokeWidth="3"
                strokeDasharray="8 4"
                opacity="0.4"
              />
              {/* Road border */}
              <path
                d="M 50 50 Q 300 20 350 50 T 600 50 T 850 50 T 1150 50"
                fill="none"
                stroke="#B8860B"
                strokeWidth="6"
                opacity="0.2"
              />
            </svg>
          </div>

          {/* Curved Road SVG - Mobile/Tablet */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1 z-0">
            <svg
              viewBox="0 0 20 400"
              className="h-full w-6"
              preserveAspectRatio="none"
            >
              {/* Vertical curved path */}
              <path
                d="M 10 20 Q 10 100 10 140 T 10 260 T 10 380"
                fill="none"
                stroke="#D4A017"
                strokeWidth="3"
                strokeDasharray="8 4"
                opacity="0.4"
              />
              <path
                d="M 10 20 Q 10 100 10 140 T 10 260 T 10 380"
                fill="none"
                stroke="#B8860B"
                strokeWidth="6"
                opacity="0.2"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gold-pale border border-gold-light flex items-center justify-center shadow-xs">
                      {step.icon}
                    </div>
                    <span className="font-mono text-2xl font-extrabold text-gray-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
