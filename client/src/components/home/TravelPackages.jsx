import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { packageService } from '../../services/packageService';
import { PackageCard } from '../packages/PackageCard';
import { SectionHeading } from '../common/SectionHeading';
import { Container } from '../common/Container';
import { Loading } from '../common/Loading';

export const TravelPackages = () => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      const data = await packageService.getFeaturedPackages();
      setPackages(data);
      setIsLoading(false);
    };

    fetchPackages();
  }, []);

  return (
    <section id="packages" className="py-20 md:py-24 bg-offwhite-main border-b border-gray-200">
      <Container>
        <SectionHeading
          eyebrow="Holiday Itineraries"
          title="Popular South India Tour Packages"
          subtitle="All-inclusive vacation circuits with private vehicles, experienced hill station drivers, and flexible sightseeing stops."
        />

        {isLoading ? (
          <Loading message="Loading curated holiday packages..." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-gray-50 text-text-primary hover:text-gold-primary border border-gray-200 shadow-sm text-sm font-semibold transition-all hover:gap-3"
          >
            <span>View All Tour Packages & Custom Circuits</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
