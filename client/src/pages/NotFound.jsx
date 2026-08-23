import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Car } from 'lucide-react';
import { Container } from '../components/common/Container';

export const NotFound = () => {
  return (
    <div className="pt-36 pb-28 text-center min-h-[70vh] flex items-center justify-center">
      <Container size="sm">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-soft space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-gold-pale text-gold-primary flex items-center justify-center mx-auto shadow-xs">
            <Compass className="w-8 h-8 animate-spin [animation-duration:8s]" />
          </div>

          <div>
            <span className="font-mono text-4xl font-extrabold text-gold-primary">404</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mt-2 font-heading">
              Off the Beaten Path
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-sm mx-auto leading-relaxed">
              The page you are looking for might have been moved or does not exist. Let's get you back on the right road.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gold-primary hover:bg-gold-bright text-white text-xs font-bold shadow-md shadow-gold-primary/20 transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/cars"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-text-primary text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <Car className="w-4 h-4" />
              <span>Explore Car Fleet</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
