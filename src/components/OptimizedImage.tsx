import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    // Tenta carregar WebP se suportado
    const checkWebpSupport = async () => {
      const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, '.webp');
      try {
        const response = await fetch(webpSrc, { method: 'HEAD' });
        if (response.ok) {
          setCurrentSrc(webpSrc);
        }
      } catch (error) {
        // Fallback para o formato original se WebP não estiver disponível
        console.debug('WebP não suportado, usando formato original');
      }
    };

    if (!src.endsWith('.webp') && !src.endsWith('.svg')) {
      checkWebpSupport();
    }
  }, [src]);

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <img
        src={currentSrc}
        alt={alt}
        className={`
          transition-opacity duration-300 
          ${isLoading ? 'opacity-0' : 'opacity-100'}
          ${className}
        `}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoading(false)}
        width={width}
        height={height}
        decoding={priority ? 'sync' : 'async'}
      />
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
          role="presentation"
          aria-hidden="true"
        />
      )}
    </div>
  );
}; 