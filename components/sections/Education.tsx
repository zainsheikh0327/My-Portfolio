'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { education, certifications } from '@/data/education';

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000A] via-[#020B34]/55 to-[#00000A] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(110,192,246,0.1),transparent_60%)] pointer-events-none" />
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
            Education & <span className="gradient-text text-glow">Certifications</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <GraduationCap className="text-primary" size={32} />
              Education
            </motion.h3>

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="glassmorphism gradient-border p-8 rounded-2xl hover:border-primary/40 hover:shadow-[0_0_35px_rgba(21,65,156,0.35)] transition-all duration-500 mb-6 relative overflow-hidden group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#15419C]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium group-hover:text-primary-light transition-colors duration-300">{edu.institution}</p>
                  </div>
                  <motion.span
                    className="text-sm text-white/60 font-mono"
                    whileHover={{ scale: 1.1 }}
                  >
                    {edu.graduationDate}
                  </motion.span>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                  <span>{edu.location}</span>
                  {edu.gpa && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-white/40" />
                      <span>GPA: {edu.gpa}</span>
                    </>
                  )}
                </div>

                {edu.honors && edu.honors.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm text-white/40 mb-2">Honors:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.honors.map((honor) => (
                        <span
                          key={honor}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                        >
                          {honor}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.relevant_courses && edu.relevant_courses.length > 0 && (
                  <div>
                    <p className="text-sm text-white/40 mb-2">Relevant Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant_courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/60 border border-white/10"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <Award className="text-primary" size={32} />
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="glassmorphism gradient-border p-6 rounded-2xl hover:border-primary/40 hover:shadow-[0_0_25px_rgba(21,65,156,0.35)] transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-l from-[#15419C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start gap-4 relative z-10">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <BookOpen className="text-primary" size={24} />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-white/60 text-sm mb-2">{cert.issuer}</p>
                      <span className="text-xs text-primary font-mono">{cert.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline decoration */}
        <div className="hidden lg:block absolute left-1/2 top-32 bottom-32 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2" />
      </div>
    </section>
  );
}


