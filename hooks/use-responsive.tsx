'use client';
import { useEffect, useState } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function useResponsive() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('md');
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({ width, height });
      
      let breakpoint: Breakpoint = 'xs';
      
      if (width >= breakpoints['2xl']) {
        breakpoint = '2xl';
      } else if (width >= breakpoints.xl) {
        breakpoint = 'xl';
      } else if (width >= breakpoints.lg) {
        breakpoint = 'lg';
      } else if (width >= breakpoints.md) {
        breakpoint = 'md';
      } else if (width >= breakpoints.sm) {
        breakpoint = 'sm';
      }
      
      setCurrentBreakpoint(breakpoint);
    };

    // Set initial values
    updateSize();

    // Add event listener
    window.addEventListener('resize', updateSize);

    // Cleanup
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const isBreakpoint = (bp: Breakpoint) => currentBreakpoint === bp;
  const isAboveBreakpoint = (bp: Breakpoint) => screenSize.width >= breakpoints[bp];
  const isBelowBreakpoint = (bp: Breakpoint) => screenSize.width < breakpoints[bp];

  return {
    currentBreakpoint,
    screenSize,
    isBreakpoint,
    isAboveBreakpoint,
    isBelowBreakpoint,
    isMobile: isBelowBreakpoint('md'),
    isTablet: isBreakpoint('md') || isBreakpoint('lg'),
    isDesktop: isAboveBreakpoint('lg'),
  };
}