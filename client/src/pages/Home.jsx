import React from 'react';
import { Hero } from '../components/home/Hero';
import { BookingSearch } from '../components/home/BookingSearch';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { HowItWorks } from '../components/home/HowItWorks';
import { FeaturedCars } from '../components/home/FeaturedCars';
import { TravelPackages } from '../components/home/TravelPackages';
import { Reviews } from '../components/home/Reviews';
import { FAQ } from '../components/home/FAQ';
import { ContactCTA } from '../components/home/ContactCTA';

export const Home = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <BookingSearch />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedCars />
      <TravelPackages />
      <Reviews />
      <FAQ />
      <ContactCTA />
    </div>
  );
};
