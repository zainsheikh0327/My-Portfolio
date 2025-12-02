'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { personal } from '@/data/personal';

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#00000A]"
    >
      {/* --- VIDEO BACKGROUND (MP4) --- */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="./BlackHole.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b 
    from-black/80 
    via-black/40 
    to-black/70 
    backdrop-blur-[1px]" 
/>


      {/* Energy distortions */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-10 w-[420px] h-[420px] bg-gradient-to-br from-[#6EC0F6]/50 via-transparent to-transparent blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-0 left-[-15%] w-[520px] h-[520px] bg-gradient-to-tr from-[#15419C]/40 via-transparent to-transparent blur-[160px] opacity-70 animate-pulse" />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 60% 40%, rgba(110, 192, 246, 0.15), transparent 55%)',
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* --- CONTENT --- */}
      <div className="container-custom px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 glassmorphism gradient-border rounded-full mb-10 tracking-wide text-sm uppercase"
          >
            <Sparkles className="w-4 h-4 text-neon" />
            <span className="text-primary font-medium">
              Available for mission-critical builds
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight drop-shadow-[0_0_30px_rgba(21,65,156,0.35)]"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text text-glow">{personal.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 font-light max-w-3xl"
          >
            {personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg text-white/70 mb-12 max-w-2xl leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <motion.a
              href="#projects"
              className="btn-primary inline-flex items-center gap-2 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={20} className="relative z-10 group-hover:rotate-180 transition-transform duration-500" />
              <span className="relative z-10">View My Work</span>
            </motion.a>

            <motion.a
              href={personal.resumeUrl}
              className="btn-outline inline-flex items-center gap-2 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              <Download size={20} className="relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={scrollToNext}
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40 hover:text-primary transition-all duration-300 group cursor-pointer"
        aria-label="Scroll to next section"
      >
        <motion.span className="text-sm font-medium tracking-wider uppercase">
          Scroll to explore
        </motion.span>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <ArrowDown size={28} className="group-hover:text-primary transition-colors duration-300" />
        </motion.div>
      </motion.button>
    </section>
  );
}
