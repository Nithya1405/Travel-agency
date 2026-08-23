import { MOCK_CARS } from '../data/cars';

export const carService = {
  /**
   * Retrieve all vehicles with optional filter criteria
   */
  async getAllCars(filters) {
    // Simulated async delay for realistic UX transitions
    await new Promise((resolve) => setTimeout(resolve, 60));

    let results = [...MOCK_CARS];

    if (filters?.category && filters.category !== 'All') {
      results = results.filter(
        (c) => c.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters?.seats) {
      results = results.filter((c) => c.seats >= filters.seats);
    }

    if (filters?.transmission && filters.transmission !== 'All') {
      results = results.filter(
        (c) => c.transmission.toLowerCase() === filters.transmission.toLowerCase()
      );
    }

    if (filters?.fuelType && filters.fuelType !== 'All') {
      results = results.filter(
        (c) => c.fuelType.toLowerCase() === filters.fuelType.toLowerCase()
      );
    }

    if (filters?.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      results = results.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.brand.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      );
    }

    return results;
  },

  /**
   * Get single car by ID
   */
  async getCarById(id) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    return MOCK_CARS.find((c) => c.id === id) || null;
  },

  /**
   * Get featured cars for the homepage
   */
  async getFeaturedCars() {
    return MOCK_CARS.filter((c) => c.featured);
  },

  /**
   * Get unique car categories
   */
  getCategories() {
    return ['All', 'Sedan', 'SUV', 'Tempo Traveller', 'Luxury'];
  },
};
