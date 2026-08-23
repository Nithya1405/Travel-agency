import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AIChatbot } from '../components/chat/AIChatbot';

export const PublicLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-offwhite-main text-text-primary selection:bg-gold-primary selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <AIChatbot />
      <Footer />
    </div>
  );
};
