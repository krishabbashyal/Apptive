'use client';

import React from "react";

const BackgroundDots = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 opacity-50">
        <div className="relative h-full w-full">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-accent"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animation: `pulse ${3 + Math.random() * 15}  infinite, float ${3 + Math.random() * 15}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, 10px);
          }
          50% {
            transform: translate(-5px, 5px);
          }
          75% {
            transform: translate(-10px, -10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        @keyframes pulse {
          0% {
            opacity: 0.0;
          }
          50% {
            opacity: 1.0;
          }
          100% {
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundDots;
