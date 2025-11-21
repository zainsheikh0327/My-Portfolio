'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Target, Award } from 'lucide-react';
import { personal } from '@/data/personal';
import { skills, skillCategories } from '@/data/skills';
import { useState } from 'react';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Expertise',
    description: 'Building scalable web applications from front to back',
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    description: 'Optimizing for speed, efficiency, and user experience',
  },
  {
    icon: Target,
    title: 'Product Mindset',
    description: 'Delivering solutions that drive real business value',
  },
  {
    icon: Award,
    title: 'Quality Driven',
    description: 'Writing clean, maintainable, and testable code',
  },
];

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020B34]/40 to-[#00000A] pointer-events-none" />
      <div className="absolute right-10 top-20 w-72 h-72 bg-gradient-to-br from-[#6EC0F6]/30 to-transparent blur-[140px] opacity-70 pointer-events-none" />
      <div className="container-custom relative z-10">
        {/* Section Header - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            About <span className="gradient-text text-glow">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary via-primary-light to-primary mx-auto rounded-full"
            style={{ boxShadow: '0 0 20px rgba(110, 192, 246, 0.55)' }}
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20 glassmorphism p-8 md:p-12 rounded-3xl gradient-border"
        >
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            {personal.bio}
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="glassmorphism gradient-border p-6 rounded-2xl hover:border-primary/40 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#15419C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                className="w-12 h-12 rounded-xl bg-[#15419C]/30 flex items-center justify-center mb-4 group-hover:bg-[#15419C]/50 transition-all duration-300 relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon className="text-primary" size={24} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300 relative z-10">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed relative z-10">
                {item.description}
              </p>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#6EC0F6]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h3>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#6EC0F6] to-[#15419C] text-white shadow-[0_0_30px_rgba(110,192,246,0.35)]'
                    : 'glassmorphism text-white/70 hover:text-primary border border-white/5 hover:border-primary/40'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.06 }}
                className="glassmorphism gradient-border p-4 rounded-xl hover:border-primary/40 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Shimmer effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent, rgba(110, 192, 246, 0.15), transparent)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 2s linear infinite',
                  }}
                />
                
                <div className="flex items-center justify-between mb-2 relative z-10">
                  <span className="font-medium text-white group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                  <motion.span
                    className="text-xs text-primary font-mono"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.5 }}
                  >
                    {skill.proficiency}%
                  </motion.span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1.5,
                      delay: index * 0.05,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="h-full bg-gradient-to-r from-primary via-primary-light to-primary rounded-full relative"
                    style={{
                      boxShadow: '0 0 12px rgba(110, 192, 246, 0.55)',
                    }}
                  >
                    {/* Glowing tip */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


