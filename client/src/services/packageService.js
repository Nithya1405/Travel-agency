import { MOCK_PACKAGES } from '../data/packages';

export const packageService = {
  /**
   * Get all tour packages
   */
  async getAllPackages() {
    await new Promise((resolve) => setTimeout(resolve, 60));
    return [...MOCK_PACKAGES];
  },

  /**
   * Get single package by ID
   */
  async getPackageById(id) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    return MOCK_PACKAGES.find((p) => p.id === id) || null;
  },

  /**
   * Get featured packages for homepage
   */
  async getFeaturedPackages() {
    return MOCK_PACKAGES.filter((p) => p.featured);
  },
};
