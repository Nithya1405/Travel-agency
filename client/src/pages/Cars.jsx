import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, Car as CarIcon, RotateCcw } from 'lucide-react';
import { carService } from '../services/carService';
import { CarCard } from '../components/cars/CarCard';
import { Container } from '../components/common/Container';
import { Loading } from '../components/common/Loading';

export const Cars = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSeats, setSelectedSeats] = useState('All');
  const [selectedTransmission, setSelectedTransmission] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const categories = carService.getCategories();

  useEffect(() => {
    const loadCars = async () => {
      setIsLoading(true);
      const data = await carService.getAllCars();
      setCars(data);
      setIsLoading(false);
    };

    loadCars();
  }, []);

  // Filter and sort computation
  const filteredCars = useMemo(() => {
    let result = [...cars];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.brand.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      );
    }

    // Category
    if (selectedCategory !== 'All') {
      result = result.filter(
        (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Seats
    if (selectedSeats !== 'All') {
      const minSeats = parseInt(selectedSeats, 10);
      result = result.filter((c) => c.seats >= minSeats);
    }

    // Transmission
    if (selectedTransmission !== 'All') {
      result = result.filter(
        (c) => c.transmission.toLowerCase() === selectedTransmission.toLowerCase()
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [cars, searchQuery, selectedCategory, selectedSeats, selectedTransmission, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedSeats('All');
    setSelectedTransmission('All');
    setSortBy('rating');
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container>
        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-pale text-gold-primary text-xs font-semibold uppercase tracking-wider mb-3 border border-gold-light/80">
            <CarIcon className="w-3.5 h-3.5 text-gold-primary" />
            <span>Chauffeur-Driven Fleet</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-tight font-heading">
            Our Rental Cars & Tariffs
          </h1>
          <p className="mt-3 text-base text-text-muted leading-relaxed font-normal font-body">
            Choose the perfect vehicle for your family holiday, corporate commute, or outstation hill trip with guaranteed showroom-clean condition and verified professional drivers.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-200/80 mb-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="space-y-1.5 sm:col-span-2">
              <label htmlFor="carSearch" className="text-xs font-semibold text-text-primary">
                Search Fleet
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="carSearch"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by model, make (e.g. Innova, Dzire, Van)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary transition-all"
                />
              </div>
            </div>

            {/* Seating Capacity */}
            <div className="space-y-1.5">
              <label htmlFor="seatsFilter" className="text-xs font-semibold text-text-primary">
                Min Seating
              </label>
              <select
                id="seatsFilter"
                value={selectedSeats}
                onChange={(e) => setSelectedSeats(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary"
              >
                <option value="All">All Capacities</option>
                <option value="4">4+ Seater (Sedans)</option>
                <option value="7">7+ Seater (Innova / SUVs)</option>
                <option value="12">12+ Seater (Tempo Travellers)</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="space-y-1.5">
              <label htmlFor="sortFilter" className="text-xs font-semibold text-text-primary">
                Sort By
              </label>
              <select
                id="sortFilter"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary"
              >
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-gold-primary text-white shadow-sm'
                      : 'bg-gray-100 text-text-muted hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {(searchQuery || selectedCategory !== 'All' || selectedSeats !== 'All' || selectedTransmission !== 'All') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-gray-500 font-medium">
          <span>Showing <strong className="text-text-primary">{filteredCars.length}</strong> available vehicles</span>
          <span>All rentals include fuel, toll permits & verified chauffeur</span>
        </div>

        {/* Cars Grid */}
        {isLoading ? (
          <Loading message="Loading entire vehicle fleet..." />
        ) : filteredCars.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200/80 p-8 shadow-xs">
            <CarIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-text-primary mb-1">No matching vehicles found</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto mb-4">
              Try adjusting your search keywords or reset category filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl bg-gold-primary text-white text-xs font-semibold shadow-sm"
            >
              Show All Vehicles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
