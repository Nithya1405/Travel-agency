import React from 'react';
import { ShieldCheck, Sparkles, Receipt, Headphones, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Container } from '../common/Container';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-primary" />,
      bg: 'bg-gold-pale',
      title: 'Trusted Service',
      desc: 'Over 15+ years of verified chauffeur travel across South India with punctual doorstep pickups and professional drivers.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold-bright" />,
      bg: 'bg-gold-pale',
      title: 'Well-Maintained Cars',
      desc: 'Showroom-condition vehicles with spotless sanitized interiors, routine multi-point mechanical inspections, and cold AC.',
    },
    {
      icon: <Receipt className="w-6 h-6 text-emerald-600" />,
      bg: 'bg-emerald-50',
      title: 'Transparent Pricing',
      desc: 'Zero hidden surcharges. Clear kilometer allowances, toll calculations, and driver night allowances stated upfront.',
    },
    {
      icon: <Headphones className="w-6 h-6 text-gold-primary" />,
      bg: 'bg-gold-pale',
      title: '24/7 Customer Support',
      desc: 'Round-the-clock live dispatch assistance for route changes, urgent bookings, flight delays, or roadside support.',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-24 bg-white border-b border-gray-200">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose Natarajan Travels?"
          subtitle="We focus on comfort, safety, punctuality, and transparent business ethics on every single kilometer."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-gray-50/80 border border-gray-200/70 hover:border-gold-light hover:bg-white hover:shadow-soft transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-gold-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-gold-primary">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Guaranteed Standard</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
