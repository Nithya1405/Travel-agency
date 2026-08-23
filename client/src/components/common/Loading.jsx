import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loading = ({
  message = 'Loading details...',
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-16 text-text-muted ${className}`}>
      <Loader2 className="w-8 h-8 text-gold-primary animate-spin mb-3" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};
