'use client';

import { motion } from 'framer-motion';

interface GlowOrbProps {
  size?: number;
  color?: string;
  blur?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
}

export default function GlowOrb({
  size = 400,
  color = 'rgba(110, 192, 246, 0.18)',
  blur = 120,
  top,
  left,
  right,
  bottom,
  delay = 0,
}: GlowOrbProps) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top,
        left,
        right,
        bottom,
        filter: `blur(${blur}px)`,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}










