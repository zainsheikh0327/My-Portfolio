'use client';

import { useEffect, useState, useRef } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' ||
                           target.closest('a, button') !== null;
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth cursor follow
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        setPosition((prev) => ({
          x: prev.x + (targetPosition.current.x - prev.x) * 0.15,
          y: prev.y + (targetPosition.current.y - prev.y) * 0.15,
        }));
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 mix-blend-screen"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* The true centered anchor – fixes everything */}
      <div className="relative w-0 h-0">
        
        {/* Outer glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-all duration-300"
          style={{
            width: isHovering ? "200px" : "160px",
            height: isHovering ? "200px" : "160px",
            background: isHovering
              ? "radial-gradient(circle, rgba(110,192,246,0.35) 0%, rgba(110,192,246,0.12) 55%, transparent 100%)"
              : "radial-gradient(circle, rgba(110,192,246,0.2) 0%, transparent 70%)",
          }}
        />
  
        {/* Middle glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl transition-all duration-300"
          style={{
            width: isHovering ? "100px" : "80px",
            height: isHovering ? "100px" : "80px",
            background:
              "radial-gradient(circle, rgba(110,192,246,0.45) 0%, transparent 70%)",
          }}
        />
  
        {/* Inner core */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
            isHovering ? "bg-white" : "bg-primary"
          }`}
          style={{
            width: isHovering ? "12px" : "10px",
            height: isHovering ? "12px" : "10px",
          }}
        />
  
        {/* PERFECTLY CENTERED RING */}
        {isHovering && (
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary"
            style={{
              width: "48px",
              height: "48px",
              transformOrigin: "center",
              animation: "ripple 1.5s ease-out infinite",
            }}
          />
        )}
      </div>
    </div>
  );
  
  
}


