import React from 'react';

export const Badge = ({
  children,
  variant = 'blue',
  size = 'md',
  icon,
  className = '',
}) => {
  const variantStyles = {
    blue: 'bg-gold-pale text-gold-primary border-gold-light',
    amber: 'bg-amber-50 text-amber-800 border-amber-200/80',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    slate: 'bg-gray-100 text-text-primary border-gray-200',
    rose: 'bg-rose-50 text-rose-700 border-rose-100',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1 font-semibold',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
