"use client";

import React, { useState, useEffect } from "react";

const BreakpointInfo = () => {
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setMounted(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // If window size is 0, we're still on server side or haven't measured yet
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 rounded-lg border border-accent bg-accentHighlight p-4 shadow-lg backdrop-blur-sm">
      <h1 className="mb-2 text-slate-200">Breakpoint Info:</h1>
      <p className="mb-2 font-bold text-accent block md:hidden">Small</p>
      <p className="mb-2 font-bold text-accent hidden md:block lg:hidden">Medium</p>
      <p className="mb-2 font-bold text-accent hidden lg:block xl:hidden">Large</p>
      <p className="mb-2 font-bold text-accent hidden xl:block 2xl:hidden">Extra Large</p>
      <p className="mb-2 font-bold text-accent hidden 2xl:block">Double Extra Large</p>

      <div className="space-y-2 font-mono text-sm">
        <p className="flex justify-between">
          <span className="text-slate-400">Width:</span>
          <span className="text-emerald-400">{windowSize.width}px</span>
        </p>
        <p className="flex justify-between">
          <span className="text-slate-400">Height:</span>
          <span className="text-emerald-400">{windowSize.height}px</span>
        </p>
      </div>
    </div>
  );
};

export default BreakpointInfo;