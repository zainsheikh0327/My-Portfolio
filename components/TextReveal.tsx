'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function TextReveal({ children, delay = 0, className = '' }: TextRevealProps) {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}










