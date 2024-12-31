'use client';

import React, { useMemo, useEffect, useState } from 'react';

// Look into this compoonent some more and figire out what the useMemo is doing and how it solved the hydration issue

const BackgroundDots = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const dots = useMemo(() => {
    if (!isClient) {
      // Return static values for server-side rendering
      return Array.from({ length: 500 }).map((_, i) => ({
        top: (i % 100),
        left: (i % 100),
        animDelay: (i % 20) / 10,
        duration: 3 + (i % 15)
      }));
    }
    
    // Generate random values only on the client side
    return Array.from({ length: 500 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      animDelay: Math.random() * 2,
      duration: 3 + Math.random() * 15
    }));
  }, [isClient]);

  // Don't render anything during SSR
  if (!isClient) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="relative h-full w-full">
          {dots.map((dot, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-accent animate-[pulse_3s_ease-in-out_infinite,float_5s_ease-in-out_infinite]"
              style={{
                top: `${dot.top}%`,
                left: `${dot.left}%`,
                animationDelay: `${dot.animDelay}s`,
                animationDuration: `${dot.duration}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, 10px); }
          50% { transform: translate(-5px, 5px); }
          75% { transform: translate(-10px, -10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default BackgroundDots;