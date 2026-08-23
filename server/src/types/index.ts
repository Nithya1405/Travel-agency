import { Document, Types } from 'mongoose';

export type CarCategory = 'Sedan' | 'SUV' | 'Hatchback' | 'Luxury' | 'Tempo Traveller';
export type Transmission = 'Manual' | 'Automatic';
export type FuelType = 'Petrol' | 'Diesel' | 'CNG' | 'Electric' | 'Hybrid';

export interface ICar {
  name: string;
  brand: string;
  model: string;
  category: CarCategory;
  tagline?: string;
  description: string;
  images: string[];
  seats: number;
  luggage?: number;
  transmission: Transmission;
  fuelType: FuelType;
  mileage?: string;
  pricePerDay: number;
  pricePerKm?: number;
  features: string[];
  available: boolean;
  featured?: boolean;
  badge?: string;
  rating?: number;
  reviewCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICarDocument extends Omit<Document, 'model'>, ICar {
  _id: Types.ObjectId;
}

export interface ICarFilters {
  category?: string;
  available?: boolean;
  minPrice?: number;
  maxPrice?: number;
  seats?: number;
  transmission?: string;
  fuelType?: string;
  search?: string;
}

export interface IApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: any[];
}

export interface IHealthStatus {
  status: string;
  timestamp: string;
  uptime: number;
  environment: string;
  version: string;
  database: string;
}
