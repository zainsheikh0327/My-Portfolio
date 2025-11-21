'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#00000A] flex items-center justify-center"
        >
          {/* Animated background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background: 'radial-gradient(circle, rgba(110, 192, 246, 0.3) 0%, transparent 70%)',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo/Initial */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                duration: 1,
              }}
              className="mb-8"
            >
              <div className="w-24 h-24 rounded-2xl glassmorphism border border-primary/30 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <span className="text-5xl font-bold gradient-text relative z-10">ZS</span>
              </div>
            </motion.div>

            {/* Progress Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/60 mb-4 font-mono text-sm"
            >
              Loading Experience...
            </motion.p>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-primary-light to-primary rounded-full relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </motion.div>
            </div>

            {/* Percentage */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-primary font-mono text-xs mt-2"
            >
              {Math.floor(Math.min(progress, 100))}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}










