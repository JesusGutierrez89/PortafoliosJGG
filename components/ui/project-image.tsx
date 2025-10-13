'use client';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  hint?: string;
  priority?: boolean;
  className?: string;
}

export function ProjectImage({ src, alt, hint, priority = false, className = "" }: ProjectImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="flex items-center justify-center h-full bg-muted/50">
        <div className="text-center text-muted-foreground">
          <div className="w-16 h-16 mx-auto mb-2 bg-background/80 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-2xl">📁</span>
          </div>
          <p className="text-sm font-medium">Imagen del proyecto</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 animate-pulse">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        data-ai-hint={hint}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
        className={`object-cover transition-all duration-500 ease-in-out ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'} ${className}`}
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
        quality={85}
      />
    </div>
  );
}