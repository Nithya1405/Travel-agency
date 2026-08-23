import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { carService } from '../../services/carService';
import { CarCard } from '../cars/CarCard';
import { Container } from '../common/Container';
import { Loading } from '../common/Loading';

export const FeaturedCars = () => {
  const [cars, setCars] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  const categories = carService.getCategories();

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      const data = await carService.getAllCars({
        category: selectedCategory,
      });
      setCars(data);
      setIsLoading(false);
    };

    fetchCars();
  }, [selectedCategory]);

  return (
    <section id="cars" className="py-20 md:py-24 bg-white border-b border-gray-200">
      <Container>
        {/* Section Header with Category Chips */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-pale text-gold-primary text-xs font-semibold tracking-wider uppercase mb-3 border border-gold-light/80">
              <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
              <span>Sanitized Chauffeur Fleet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Featured Rental Cars
            </h2>
            <p className="mt-2 text-sm text-text-muted max-w-xl">
              Choose from executive sedans, spacious Innova SUVs, and luxury group vans tailored for your travel comfort.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 bg-gray-100 p-1.5 rounded-2xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-white text-gold-primary shadow-sm'
                    : 'text-text-muted hover:text-text-primary hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        {isLoading ? (
          <Loading message="Filtering vehicles..." />
        ) : cars.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-200/80">
            <p className="text-text-muted font-medium">No cars found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.slice(0, 6).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/cars"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-charcoal-main hover:bg-charcoal-light text-white text-sm font-semibold shadow-md transition-all hover:gap-3"
          >
            <span>Explore Entire Fleet & Detailed Rates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
