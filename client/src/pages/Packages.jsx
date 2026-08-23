import React, { useState, useEffect } from 'react';
import { Compass, Phone } from 'lucide-react';
import { packageService } from '../services/packageService';
import { PackageCard } from '../components/packages/PackageCard';
import { Container } from '../components/common/Container';
import { Loading } from '../components/common/Loading';
import { CONTACT_INFO } from '../utils/constants';

export const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPackages = async () => {
      setIsLoading(true);
      const data = await packageService.getAllPackages();
      setPackages(data);
      setIsLoading(false);
    };

    loadPackages();
  }, []);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-pale text-gold-primary text-xs font-semibold uppercase tracking-wider mb-3 border border-gold-light/80">
            <Compass className="w-3.5 h-3.5 text-gold-primary" />
            <span>Curated Holiday Itineraries</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-tight font-heading">
            South India Tour Packages
          </h1>
          <p className="mt-3 text-base text-text-muted leading-relaxed font-normal font-body">
            Hassle-free holiday packages with private sanitized cars, experienced mountain drivers, personalized sightseeing stops, and complete itinerary flexibility.
          </p>
        </div>

        {/* Packages Grid */}
        {isLoading ? (
          <Loading message="Loading tour circuits..." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}

        {/* Custom Tour Inquiry Box */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-charcoal-main via-charcoal-light to-charcoal-main text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-premium border border-charcoal-light">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Need a Custom Tour Route?</h3>
            <p className="text-xs sm:text-sm text-gray-300">
              We design personalized multi-day itineraries for family reunions, wedding groups, and interstate pilgrimages.
            </p>
          </div>

          <a
            href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="px-6 py-3 rounded-xl bg-gold-primary hover:bg-gold-bright text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call Tour Manager</span>
          </a>
        </div>
      </Container>
    </div>
  );
};
