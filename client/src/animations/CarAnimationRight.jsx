import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const CarAnimationRight = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}>
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative"
      >
        {/* Subtle realistic road base */}
        <div className="w-48 sm:w-64 h-3 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full mx-auto blur-[1px]" />

        {/* Car Visual Wrapper */}
        <motion.div
          animate={{ y: [0, -3.5, 0] }}
          transition={{ repeat: Infinity, duration: 3.1, ease: 'easeInOut' }}
          className="relative px-4 py-2"
        >
          {/* Stylized Modern SUV Illustration / SVG */}
          <svg
            viewBox="0 0 250 110"
            className="w-48 sm:w-60 h-auto drop-shadow-md text-charcoal-main"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SUV Body */}
            <path
              d="M15 75 L30 40 Q45 22 80 20 L175 20 Q195 22 215 45 L240 58 Q248 65 248 75 L248 85 L10 85 L10 75 Z"
              fill="currentColor"
            />
            {/* Roof Rack */}
            <rect x="70" y="14" width="110" height="4" rx="2" fill="#64748B" />
            <rect x="85" y="10" width="8" height="5" fill="#64748B" />
            <rect x="165" y="10" width="8" height="5" fill="#64748B" />
            {/* Windows */}
            <path
              d="M75 26 L125 26 L125 50 L45 50 Q60 30 75 26 Z"
              fill="#E0F2FE"
              opacity="0.9"
            />
            <path
              d="M135 26 L180 26 Q195 32 205 50 L135 50 Z"
              fill="#E0F2FE"
              opacity="0.9"
            />
            {/* Headlights */}
            <circle cx="238" cy="68" r="4.5" fill="#FDE047" />
            <path d="M242 68 L255 62 L255 74 Z" fill="#FEF08A" opacity="0.6" />
            {/* Wheels */}
            <circle cx="60" cy="85" r="18" fill="#0F172A" />
            <circle cx="60" cy="85" r="9" fill="#94A3B8" />
            <circle cx="195" cy="85" r="18" fill="#0F172A" />
            <circle cx="195" cy="85" r="9" fill="#94A3B8" />
          </svg>
        </motion.div>

        {/* Floating badge */}
        <div className="absolute -top-3 right-2 sm:right-4 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[11px] font-medium text-text-primary">
          <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
          <span>7-Seater Innova SUVs</span>
        </div>
      </motion.div>
    </div>
  );
};
