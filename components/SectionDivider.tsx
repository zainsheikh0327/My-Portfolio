'use client';

import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className="relative w-full h-px my-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ x: '-100%' }}
        whileInView={{ x: '100%' }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
        style={{ width: '50%' }}
      />
    </div>
  );
}










