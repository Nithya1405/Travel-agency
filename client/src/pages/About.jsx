import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { Container } from '../components/common/Container';

export const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Happy Travelers Served', value: '45,000+' },
    { label: 'Active Chauffeur Fleet', value: '80+' },
    { label: 'Customer Satisfaction', value: '99.4%' },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-pale text-gold-primary text-xs font-semibold uppercase tracking-wider mb-3 border border-gold-light/80">
            <Award className="w-3.5 h-3.5 text-gold-primary" />
            <span>About Natarajan Travel Agency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-tight font-heading">
            Setting the Benchmark for Reliable South Indian Travel
          </h1>
          <p className="mt-3 text-base text-text-muted leading-relaxed font-normal font-body">
            Founded with a passion for road hospitality, Natarajan Travel Agency has evolved into one of the most trusted chauffeur-car rental networks in South India.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-soft text-center"
            >
              <span className="block text-3xl sm:text-4xl font-extrabold text-charcoal-main tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-gray-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Mission & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed font-body">
            <h2 className="text-2xl font-bold text-text-primary font-heading">
              Our Commitment to Worry-Free Journeys
            </h2>
            <p>
              We believe a journey is more than just reaching a destination. It's about the peace of mind knowing your vehicle is in pristine mechanical condition, your driver is patient and courteous, and your family is safe at every turn.
            </p>
            <p>
              Whether it's navigating the 36 hairpin bends of the Ooty Kalhatty Ghat or providing on-time airport transfers at 3:00 AM, our operations team coordinates every trip with precision and dedication.
            </p>
          </div>

          <div className="bg-gradient-to-tr from-charcoal-main to-charcoal-light rounded-3xl p-8 text-white shadow-premium space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <span>Chauffeur Training & Standards</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-primary mt-2 shrink-0" />
                <span>Minimum 5+ years commercial highway & hill station driving record</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-primary mt-2 shrink-0" />
                <span>Strict non-smoking, non-drinking verification with zero tolerance policy</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-primary mt-2 shrink-0" />
                <span>Knowledge of scenic viewpoints, hygienic highway eateries & rest stops</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-primary mt-2 shrink-0" />
                <span>Uniformed, polite, and responsive communication throughout the trip</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
