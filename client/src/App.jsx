import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { Home } from './pages/Home';
import { Cars } from './pages/Cars';
import { CarDetails } from './pages/CarDetails';
import { Packages } from './pages/Packages';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<Cars />} />
          <Route path="cars/:id" element={<CarDetails />} />
          <Route path="packages" element={<Packages />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
