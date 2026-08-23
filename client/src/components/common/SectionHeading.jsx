import React from 'react';

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div
      className={`mb-12 md:mb-14 ${
        centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-pale text-gold-primary text-xs font-semibold tracking-wider uppercase mb-3 border border-gold-light/80">
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight leading-tight font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-text-muted leading-relaxed font-normal font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
};
