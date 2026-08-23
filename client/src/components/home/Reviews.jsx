import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Car } from 'lucide-react';
import { MOCK_REVIEWS } from '../../data/reviews';
import { SectionHeading } from '../common/SectionHeading';
import { Container } from '../common/Container';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Reviews = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="reviews" className="py-20 md:py-24 bg-white border-b border-gray-200">
      <Container>
        <SectionHeading
          eyebrow="Real Traveler Experiences"
          title="What Our Customers Say"
          subtitle="Honest feedback from families, international tourists, and corporate executives across South India."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50/90 rounded-3xl p-6 border border-gray-200/70 hover:border-gold-light hover:bg-white hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold-bright text-gold-bright"
                      />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-gray-300" />
                </div>

                {/* Comment Body */}
                <p className="text-xs sm:text-sm text-text-primary leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Route Info */}
              <div className="pt-4 border-t border-gray-200/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-text-primary">
                    {review.customerName}
                  </h4>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-text-muted">
                    <MapPin className="w-3 h-3 text-gold-primary" />
                    <span>{review.location}</span>
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-gold-primary font-medium">
                  <Car className="w-3 h-3" />
                  <span>{review.carUsed}</span>
                </div>

                <div className="text-[10px] text-gray-400 flex items-center justify-between pt-1">
                  <span>{review.tripType}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
