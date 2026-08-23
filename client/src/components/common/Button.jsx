import React from 'react';
import { Loader2 } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none';

  const variantClasses = {
    primary:
      'bg-gold-primary hover:bg-gold-bright text-white shadow-md shadow-gold-primary/20 focus-visible:ring-gold-primary border border-transparent',
    secondary:
      'bg-charcoal-main hover:bg-charcoal-light text-white shadow-md shadow-charcoal-main/10 focus-visible:ring-charcoal-light border border-transparent',
    accent:
      'bg-gold-bright hover:bg-gold-primary text-white shadow-md shadow-gold-bright/20 focus-visible:ring-gold-primary border border-transparent',
    emerald:
      'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 focus-visible:ring-emerald-500 border border-transparent',
    outline:
      'bg-white hover:bg-gray-50 text-text-primary border border-gray-200 shadow-sm focus-visible:ring-gold-primary',
    ghost:
      'bg-transparent hover:bg-gray-100 text-text-primary focus-visible:ring-gold-primary',
  };

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 h-8',
    md: 'text-sm px-5 py-2.5 gap-2 h-11',
    lg: 'text-base px-7 py-3.5 gap-2.5 h-13',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
