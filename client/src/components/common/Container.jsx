import React from 'react';

export const Container = ({
  children,
  className = '',
  size = 'lg',
  ...props
}) => {
  const sizeClasses = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
