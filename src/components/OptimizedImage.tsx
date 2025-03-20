import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <img
        src={src}
        alt={alt}
        className={`
          transition-opacity duration-300 
          ${isLoading ? 'opacity-0' : 'opacity-100'}
        `}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        width={width}
        height={height}
      />
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
        />
      )}
    </div>
  );
}; 