import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const CarAnimationLeft = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}>
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative"
      >
        {/* Subtle realistic road base */}
        <div className="w-48 sm:w-64 h-3 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full mx-auto blur-[1px]" />
        
        {/* Car Visual Wrapper */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
          className="relative px-4 py-2"
        >
          {/* Stylized Modern Car Illustration / SVG */}
          <svg
            viewBox="0 0 240 100"
            className="w-44 sm:w-56 h-auto drop-shadow-md text-gold-primary"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Car Body */}
            <path
              d="M20 70 L35 45 Q50 35 85 30 L155 30 Q180 32 200 48 L225 60 Q235 68 235 75 L235 80 L5 80 L5 75 Q5 70 20 70 Z"
              fill="currentColor"
            />
            {/* Windows */}
            <path
              d="M75 35 L125 35 L125 55 L55 55 Q65 42 75 35 Z"
              fill="#E0F2FE"
              opacity="0.9"
            />
            <path
              d="M135 35 L170 35 Q185 43 195 55 L135 55 Z"
              fill="#E0F2FE"
              opacity="0.9"
            />
            {/* Headlights */}
            <circle cx="225" cy="65" r="4" fill="#FDE047" />
            <path d="M228 65 L240 60 L240 70 Z" fill="#FEF08A" opacity="0.6" />
            {/* Wheels */}
            <circle cx="55" cy="80" r="16" fill="#1E293B" />
            <circle cx="55" cy="80" r="8" fill="#94A3B8" />
            <circle cx="185" cy="80" r="16" fill="#1E293B" />
            <circle cx="185" cy="80" r="8" fill="#94A3B8" />
          </svg>
        </motion.div>

        {/* Floating badge */}
        <div className="absolute -top-3 left-2 sm:left-4 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[11px] font-medium text-text-primary">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Premium Sedans</span>
        </div>
      </motion.div>
    </div>
  );
};
