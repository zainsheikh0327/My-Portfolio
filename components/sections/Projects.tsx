'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import { projects, projectCategories, type Project } from '@/data/projects';
import Image from 'next/image';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">

      {/* 🔹 Background Video (NEW) */}
      <video
        src="./Astroids.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b 
          from-black/80 
          via-black/40 
          to-black/70 
          backdrop-blur-[1px]" 
      />

      {/* ========================= */}
      {/*        PAGE CONTENT       */}
      {/* ========================= */}

      <div className="container-custom relative z-10">

        {/* Section Header */}
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
            Featured <span className="gradient-text text-glow">Projects</span>
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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#6EC0F6] to-[#15419C] text-white shadow-[0_0_30px_rgba(110,192,246,0.35)]'
                  : 'glassmorphism text-white/70 hover:text-primary border border-white/5 hover:border-primary/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="glassmorphism gradient-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 cursor-pointer group relative"
            >

              {/* Shimmer Layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(110,192,246,0.12), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 2s linear infinite',
                  }}
                />
              </div>

              {/* Project Image Area */}
              <div className="relative h-48 bg-gradient-to-br from-[#020B34] via-[#061335] to-[#020B34] overflow-hidden transition-all duration-500">

                {/* Gradient hover glow */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: 'radial-gradient(circle at center, rgba(110, 192, 246, 0.25) 0%, rgba(21, 65, 156, 0.35) 45%, transparent 75%)',
                  }}
                />

                {/* Animated particles */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-primary/40"
                      style={{
                        left: `${(i * 5) % 100}%`,
                        top: `${(i * 7) % 100}%`,
                      }}
                      animate={{
                        opacity: [0.2, 0.6, 0.2],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + (i % 3),
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>

                {/* Big Title Letter */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div className="relative" whileHover={{ scale: 1.1, rotate: 5 }}>
                    <div className="text-7xl font-bold gradient-text text-glow opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                      {project.title.charAt(0)}
                    </div>

                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10 group-hover:bg-primary/30 transition-all duration-500" />
                  </motion.div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                    className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[#6EC0F6] to-[#15419C] text-white text-xs font-bold rounded-full shadow-[0_0_20px_rgba(110,192,246,0.5)]"
                  >
                    Featured
                  </motion.div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00000A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs text-primary font-mono">{project.year}</span>
                </div>

                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:border-primary/40 hover:bg-primary/20 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}

                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/40 hover:bg-white/10 transition-all duration-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-[#00000A]/95 backdrop-blur-2xl z-50 flex items-center justify-center p-6"
            style={{ backdropFilter: 'blur(20px)' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              onClick={(e) => e.stopPropagation()}
              className="glassmorphism max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-primary/20 p-8 md:p-12 relative"
              style={{
                boxShadow:
                  '0 0 80px rgba(21, 65, 156, 0.35), inset 0 0 60px rgba(110, 192, 246, 0.12)',
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                    {selectedProject.title}
                  </h2>
                  <p className="text-primary font-mono text-sm">{selectedProject.year}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center text-white/60 hover:text-primary transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/30 hover:border-primary/50 hover:bg-primary/20 transition-all duration-300 cursor-default group relative overflow-hidden"
                    >
                      <span className="relative z-10">{tech}</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
