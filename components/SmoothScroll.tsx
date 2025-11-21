'use client';

import { useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentScroll = 0;
    let targetScroll = 0;
    let ease = 0.075;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateScroll = () => {
      targetScroll = window.scrollY;
      currentScroll = lerp(currentScroll, targetScroll, ease);

      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateY(-${currentScroll}px)`;
      }

      requestAnimationFrame(updateScroll);
    };

    // Only enable smooth scroll on desktop for performance
    if (window.innerWidth > 1024) {
      updateScroll();
      document.body.style.height = `${scrollRef.current?.scrollHeight}px`;
    }

    return () => {
      document.body.style.height = 'auto';
    };
  }, []);

  return (
    <div ref={scrollRef} className="will-change-transform">
      {children}
    </div>
  );
}










