'use client';

import React, { useMemo } from 'react';

const BackgroundDots = () => {
  const dots = useMemo(() => {
    return Array.from({ length: 200 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      animDelay: Math.random() * 2,
      duration: 3 + Math.random() * 15
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 opacity-50">
        <div className="relative h-full w-full">
          {dots.map((dot, i) => (
            <div
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-accent animate-[pulse_3s_ease-in-out_infinite,float_5s_ease-in-out_infinite]"
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
      
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(10px, 10px); }
            50% { transform: translate(-5px, 5px); }
            75% { transform: translate(-10px, -10px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundDots;